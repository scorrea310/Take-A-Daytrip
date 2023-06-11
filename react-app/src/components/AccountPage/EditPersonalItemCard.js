import { useState } from "react";
import "./PersonalInfo.css";
import { updateNameThunk } from "../../store/session";
import { updateUserName } from "../../store/session";
import { updateEmail } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import FadingBalls from "react-cssfx-loading/lib/FadingBalls";

const EditPersonalItemCard = ({ label, value }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [errors, setErrors] = useState(false);
  const [loadingChange, setLoadingChange] = useState(false);

  const onSave = () => {
    setErrors(false);

    if (label === "Name") {
      if (inputValue.length === 0 || inputValue.length > 255) {
        setErrors(
          "Name must be greater that 0 and less than or equal to 255 characters."
        );
        return;
      }
      setLoadingChange(true);

      // DISPATCH UPDATE NAME
      dispatch(updateNameThunk(inputValue, +sessionUser.id)).then(() => {
        setLoadingChange(false);
        setEditing(false);
      });
    } else if (label === "Username") {
      if (inputValue.length === 0 || inputValue.length > 40) {
        setErrors(
          "Username must be greater that 0 and less than or equal to 40 characters."
        );
        return;
      }
      setLoadingChange(true);
      // DISPATCH UPDATE Username
      dispatch(updateUserName(inputValue, +sessionUser.id)).then(() => {
        setLoadingChange(false);
        setEditing(false);
      });
    } else if (label === "Email") {
      if (inputValue.length === 0 || inputValue.length > 40) {
        setErrors(
          "Email must be greater that 0 and less than or equal to 255 characters."
        );
        return;
      } else {
        if (inputValue === sessionUser.email) {
          setEditing(false);
          return;
        }
      }

      setLoadingChange(true);
      // DISPATCH UPDATE Email
      dispatch(updateEmail(inputValue, +sessionUser.id)).then((data) => {
        if (data.errors) {
          setLoadingChange(false);
          setErrors(data.errors[0]);
          return;
        }

        setLoadingChange(false);
        setEditing(false);
      });
    }
  };

  return (
    <div className="edit-personal-item-card">
      {!editing && (
        <>
          <div className="label-and-initial-value-container">
            <div id="label-container">
              {label}{" "}
              <div
                onClick={() => setEditing(true)}
                id="edit-text-personal-info"
              >
                Edit
              </div>
            </div>
            <div id="value-text-personal-info">{value}</div>
          </div>
        </>
      )}

      {editing && (
        <div className="label-and-initial-value-container">
          <div id="label-container">
            {label}{" "}
            <div
              onClick={() => setEditing(false)}
              id="cancel-text-personal-info"
            >
              Cancel
            </div>
          </div>
          {label === "Name" && (
            <div id="name-description-label">
              This is the name that hosts and guests will see.
            </div>
          )}
          <input
            name={label}
            type="text"
            className="value-input-personal-info"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <div className="saveButtonAndErrorsContainer">
            <div onClick={onSave} className="save-button-personal-info">
              {loadingChange ? (
                <FadingBalls color="white" width="10px" height="10px" />
              ) : (
                "Save"
              )}
            </div>
            <div className="updateInfoErrorContainer">{errors}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditPersonalItemCard;
