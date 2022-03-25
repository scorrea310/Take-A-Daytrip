import { useState } from "react";
import "./PersonalInfo.css"

const EditPersonalItemCard = ({ label, value }) => {

    const [editing, setEditing] = useState(false)
    const [inputValue, setInputValue] = useState(value);

    return (
        <div className="edit-personal-item-card">
            {!editing &&
                <>
                    <div className="label-and-initial-value-container">
                        <div id="label-container">{label} <div onClick={() => setEditing(true)} id="edit-text-personal-info">Edit</div></div>
                        <div id="value-text-personal-info">{value}</div>
                    </div>
                </>
            }

            {editing &&
                <div className="label-and-initial-value-container">
                    <div id="label-container">{label} <div onClick={() => setEditing(false)} id="cancel-text-personal-info">Cancel</div></div>
                    {label === "Name" && <div id="name-description-label">This is the name that hosts and guests will see.</div>}
                    <input
                        name="email"
                        type="text"
                        className="value-input-personal-info"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />

                    <div className="save-button-personal-info">Save</div>
                </div>

            }

        </div >
    )
}


export default EditPersonalItemCard;