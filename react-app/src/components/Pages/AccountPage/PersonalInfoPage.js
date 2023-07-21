import "./PersonalInfoPage.css";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { BsChevronRight } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import FileInputWithPreview from "../../SpotImageForm/FileInputWithPreview";
import { useState } from "react";
import EditPersonalItemCard from "./EditPersonalItemCard";
import { MdOutlinePrivateConnectivity } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileImageThunk } from "../../../store/session";
import FadingBalls from "react-cssfx-loading/lib/FadingBalls";
import { useEffect } from "react";

const PersonalInfoPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [images, setImages] = useState(
    sessionUser.profile_image !== null ? [sessionUser.profile_image] : []
  );
  const [loadingImage, setLoadingImage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toObjectURL = (file) => {
    if (file === null || file === undefined) return;
    if (typeof file === "string") return file;
    return URL.createObjectURL(file);
  };

  const updateImages = (e) => {
    if (e.target.files[0] === undefined || e.target.files[0] === null) return;

    setImages([...images, e.target.files[0]]);
    e.target.value = "";
  };

  const handleDelete = (e, i) => {
    e.preventDefault();
    e.stopPropagation();
    const filtered = images.filter((_item, index) => i !== index);

    setImages(filtered);
  };

  const onSaveProfilePic = () => {
    setLoadingImage(true);
    const imageData = new FormData();

    if (images && images.length) {
      imageData.append("images", images[0]);
    }

    dispatch(updateProfileImageThunk(imageData, +sessionUser.id)).then(
      (imageUrl) => {
        setLoadingImage(false);
        setImages([imageUrl]);
      }
    );
  };

  return (
    <div className="personalInfoPage">
      <NavBar />
      <div className="personalInfoMainContent">
        <div className="noteOnPrivacy">
          <div>
            <MdOutlinePrivateConnectivity id="privacyEye" />
          </div>
          <div className="aQuickNoteText">A quick note on Privacy.</div>
          <div id="main-privacy-text">
            We don't share any of your info because we are not a real company.
            If we were, we would only release contact information for Hosts and
            guests after a reservation is confirmed.
          </div>
        </div>
        <div className="personalInfoContainer">
          <div className="page-path-personal-info">
            <div
              onClick={() => history.push("/account")}
              id="account-text-personal-info-page"
            >
              Account
            </div>
            <div>
              <BsChevronRight id="right-arrow" />
            </div>
            <div id="personal-info-text-personal-page">Personal Info</div>
          </div>
          <div id="personal-info-text-personal-info-page">Personal Info</div>
          <div className="profileTextandPhotoContainer">
            <div>Profile Photo</div>
            <FileInputWithPreview
              index={0}
              src={images[0] !== null ? toObjectURL(images[0]) : null}
              onChange={updateImages}
              onClick={handleDelete}
              avatar={true}
            />

            {typeof images[0] === "object" && (
              <div
                onClick={() => onSaveProfilePic()}
                className="save-button-profile-picture"
              >
                {loadingImage ? (
                  <FadingBalls color="white" width="10px" height="10px" />
                ) : (
                  "Save"
                )}
              </div>
            )}
          </div>
          <EditPersonalItemCard label={"Name"} value={sessionUser.name} />
          <EditPersonalItemCard
            label={"Username"}
            value={sessionUser.username}
          />
          {sessionUser.id !== 1 ? (
            <EditPersonalItemCard label={"Email"} value={sessionUser.email} />
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PersonalInfoPage;
