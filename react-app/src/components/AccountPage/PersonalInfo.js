import "./PersonalInfo.css"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import { BsChevronRight } from "react-icons/bs"
import { useHistory } from "react-router-dom"
import FileInputWithPreview from "../SpotImageForm/FileInputWithPreview"
import { useState } from "react"
import EditPersonalItemCard from "./EditPersonalItemCard"
import { MdOutlinePrivateConnectivity } from "react-icons/md"
import { useSelector } from "react-redux"

const PersonalInfo = () => {

    const history = useHistory()
    const sessionUser = useSelector((state) => state.session.user);
    const [images, setImages] = useState(sessionUser.profile_image !== null ? [sessionUser.profile_image] : []);

    const toObjectURL = (file) => {
        if (file === null || file === undefined) return;
        return URL.createObjectURL(file)
    };

    const updateImages = (e) => {

        if (e.target.files[0] === undefined || e.target.files[0] === null) return

        setImages([...images, e.target.files[0]])
        e.target.value = ''
    };

    const handleDelete = (e, i) => {
        e.preventDefault();
        e.stopPropagation();
        const filtered = images.filter((_item, index) => i !== index);

        setImages(filtered);
    };

    console.log(sessionUser)

    const onSaveProfilePic = () => {
        const imageData = new FormData();

        if (images && images.length) {
            imageData.append('image', images[0])
        }

        /*
        dispatch updateProfileImageThunk
        */


    }

    return (
        <div className="personalInfoPage">
            <NavBar />
            <div className="personalInfoMainContent">
                <div className="noteOnPrivacy">
                    <div><MdOutlinePrivateConnectivity id="privacyEye" /></div>
                    <div className="aQuickNoteText">A quick note on Privacy.</div>
                    <div id="main-privacy-text">We don't share any of your info because we are not a real company. If we were, we would only release contact information for Hosts and guests after a reservation is confirmed.</div>
                </div>
                <div className="personalInfoContainer">
                    <div className="page-path-personal-info">
                        <div onClick={() => history.push("/account")} id="account-text-personal-info-page">Account</div>
                        <div><BsChevronRight id="right-arrow" /></div>
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

                        {images.length > 0 && <div className="save-button-profile-picture">save</div>}
                    </div>
                    <EditPersonalItemCard label={"Name"} value={"Steve"} />
                    <EditPersonalItemCard label={"Name"} value={"Steve"} />
                    <EditPersonalItemCard label={"Name"} value={"Steve"} />
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default PersonalInfo;