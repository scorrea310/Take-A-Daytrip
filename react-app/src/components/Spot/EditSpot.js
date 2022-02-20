import "./EditSpot.css"
import { AiFillEdit } from "react-icons/ai"
import { AiFillDelete } from "react-icons/ai"
import { Modal } from '../../context/Modal';
import { useState, useEffect } from "react"
import { IoMdClose } from "react-icons/io"

const EditSpot = () => {
    const [showEditModal, setShowEditModal] = useState(false);
    return (
        <div className="editSpotContainer">
            <div className="editDaytripText">Edit/Delete Daytrip</div>
            <div className="editOrDeleteSpotContainer">
                <div className="editIconAndText" onClick={() => setShowEditModal(true)}><AiFillEdit id="editIcon" /> Edit Daytrip</div>
                <div className="deleteIconAndText"><AiFillDelete id="deleteIcon" /> Delete Daytrip</div>
            </div>
            {showEditModal && <Modal idName="editModal" onClose={() => setShowEditModal(false)}>
                <div className="editModalMainContent">
                    <div className="closeIconAndEditTextContainer">
                        <div></div>
                        <IoMdClose className="closeLoginModalIcon" />
                    </div>
                </div>
            </Modal>}
        </div>
    )
}

export default EditSpot;