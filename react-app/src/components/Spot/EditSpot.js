import "./EditSpot.css"
import { AiFillEdit } from "react-icons/ai"
import { AiFillDelete } from "react-icons/ai"
import { Modal } from '../../context/Modal';
import { useState, useEffect } from "react"
import { IoMdClose } from "react-icons/io"
import Button from "../common/Button/Button";
import { useDispatch } from "react-redux";
import { updateSpotFunc } from "../../store/spotReducer";
import { useHistory } from "react-router-dom";
import { deleteSpotThunk } from "../../store/spotReducer";

const EditSpot = ({ spot, spotId }) => {
    const dispatch = useDispatch();
    const history = useHistory()
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [address, setAddress] = useState(spot[`${spotId}`].address)
    const [petsAllowed, setpetsAllowed] = useState(spot[`${spotId}`].pets_allowed)
    const [totalOccupancy, setTotalOccupancy] = useState(parseInt(spot[`${spotId}`].total_occupancy, 10))
    const [totalBedrooms, setTotalBedrooms] = useState(parseInt(spot[`${spotId}`].total_bedrooms), 10)
    const [totalBathrooms, setTotalBathrooms] = useState(parseInt(spot[`${spotId}`].total_bathrooms), 10)
    const [description, setDescription] = useState(spot[`${spotId}`].description)
    const [hasWifi, setHasWifi] = useState(spot[`${spotId}`].has_wifi)
    const [hasTv, setHasTv] = useState(spot[`${spotId}`].has_tv)
    const [hasAc, setHasAc] = useState(spot[`${spotId}`].has_ac)
    const [price, setPrice] = useState(parseFloat(spot[`${spotId}`].price_per_day))
    const [name, setName] = useState(spot[`${spotId}`].name)
    const [type, setType] = useState(spot[`${spotId}`].type)

    const setAddressFunction = (e) => {
        setAddress(e.target.value);
    }

    const SubmitEdit = (e) => {
        e.preventDefault()

        let formObj = {
            address,
            petsAllowed,
            totalOccupancy,
            totalBedrooms,
            totalBathrooms,
            description,
            hasWifi,
            hasTv,
            hasAc,
            price,
            name,
            type
        }

        let newSpot = dispatch(updateSpotFunc(formObj, spotId)).then((data) => setShowEditModal(false))

    }


    const handleDelete = async () => {
        dispatch(deleteSpotThunk(parseInt(spotId, 10))).then(() => {
            history.push("/")
        })
    }


    return (
        <div className="editSpotContainer">
            <div className="editDaytripText">Edit/Delete Listing</div>
            <div className="editOrDeleteSpotContainer">
                <div className="editIconAndText" onClick={() => setShowEditModal(true)}><AiFillEdit id="editIcon" /> Edit Listing</div>
                <div className="deleteIconAndText" onClick={() => setShowDeleteModal(true)}><AiFillDelete id="deleteIcon" /> Delete Listing</div>
                {showDeleteModal && <Modal onClose={() => setShowDeleteModal(false)}>

                    <div className="deleteModalContentContainer">
                        <div>Are you sure you want to delete this Listing?</div>
                        <div className="confirmOrCancelDeletButtons">

                            <Button label={"Delete"} type={"button"} className={"confirmDeleteSpotButton"} onClick={handleDelete} />
                            <Button label={"Cancel"} type={"button"} className={"confirmCancelSpotButton"} onClick={() => setShowDeleteModal(false)} />
                        </div>
                    </div>

                </Modal>}
            </div>
            {showEditModal && <Modal idName="editModal" onClose={() => setShowEditModal(false)}>
                <div className="editModalMainContent">
                    <div className="closeIconAndEditTextContainer">
                        <div>
                            <div className="closeEditModalContainer" onClick={() => setShowEditModal(false)}>
                                <IoMdClose className="closeEditModalIcon" />
                            </div>
                        </div>
                        <div className="editTextInEditModal">Edit Daytrip</div>
                    </div>
                    <div className="mainEditFormContent">
                        <form className="editForm" onSubmit={SubmitEdit}>
                            <label>Name</label>
                            <input
                                value={name}
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"
                                required={true}
                            >
                            </input>
                            <label>Address</label>
                            <input
                                value={address}
                                type="text"
                                onChange={setAddressFunction}
                                placeholder="Address"
                                required={true}
                            >
                            </input>
                            <label>Pets Allowed</label>
                            <div >
                                <input
                                    value={"true"}
                                    type="checkbox"
                                    onChange={() => {
                                        setpetsAllowed("true")
                                    }}
                                    id="Yes"
                                    checked={petsAllowed === "True" || petsAllowed === "true"}
                                >
                                </input>
                                <label htmlFor="Yes"> Yes</label>
                                <input
                                    value={"false"}
                                    type="checkbox"
                                    onChange={() => setpetsAllowed("false")}
                                    id="No"
                                    checked={petsAllowed === "False" || petsAllowed === "false"}
                                >
                                </input>
                                <label htmlFor="No"> No</label>

                            </div>
                            <label>Has Wifi?</label>
                            <div >
                                <input
                                    value={"true"}
                                    type="checkbox"
                                    onChange={() => {
                                        setHasWifi("true")
                                    }}
                                    id="Yes"
                                    checked={hasWifi === "True" || hasWifi === "true"}
                                >
                                </input>
                                <label htmlFor="Yes"> Yes</label>
                                <input
                                    value={"false"}
                                    type="checkbox"
                                    onChange={() => setHasWifi("false")}
                                    id="No"
                                    checked={hasWifi === "False" || hasWifi === "false"}
                                >
                                </input>
                                <label htmlFor="No"> No</label>

                            </div>
                            <label>Has Tv?</label>
                            <div >
                                <input
                                    value={"true"}
                                    type="checkbox"
                                    onChange={() => {
                                        setHasTv("true")
                                    }}
                                    id="Yes"
                                    checked={hasTv === "True" || hasTv === "true"}
                                >
                                </input>
                                <label htmlFor="Yes"> Yes</label>
                                <input
                                    value={"false"}
                                    type="checkbox"
                                    onChange={() => setHasTv("False")}
                                    id="No"
                                    checked={hasTv === "False" || hasTv === "false"}
                                >
                                </input>
                                <label htmlFor="No"> No</label>

                            </div>
                            <label>Has AC?</label>
                            <div >
                                <input
                                    value={"true"}
                                    type="checkbox"
                                    onChange={() => {
                                        setHasAc("true")
                                    }}
                                    id="Yes"
                                    checked={hasAc === "True" || hasAc === "true"}
                                >
                                </input>
                                <label htmlFor="Yes"> Yes</label>
                                <input
                                    value={"false"}
                                    type="checkbox"
                                    onChange={() => setHasAc("false")}
                                    id="No"
                                    checked={hasAc === "False" || hasAc === "false"}
                                >
                                </input>
                                <label htmlFor="No"> No</label>

                            </div>
                            <label>Total Occupancy</label>
                            <input
                                value={totalOccupancy}
                                type="number"
                                onChange={(e) => setTotalOccupancy(e.target.value)}
                                required={true}
                                min="1"
                            >
                            </input>
                            <label>Total Bedrooms</label>
                            <input
                                value={totalBedrooms}
                                type="number"
                                onChange={(e) => setTotalBedrooms(e.target.value)}
                                required={true}
                                min="0"
                            >
                            </input>
                            <label>Total Bathrooms</label>
                            <input
                                value={totalBathrooms}
                                type="number"
                                onChange={(e) => setTotalBathrooms(e.target.value)}
                                required={true}
                                min="0"
                            >
                            </input>
                            <label>Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                style={{ fontFamily: "Arial" }}
                                required={true}
                            >
                            </textarea>
                            <label>Price</label>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => {
                                    setPrice(e.target.value)
                                }}
                                required={true}
                                min="0"
                                step="any"
                                max="9999.00"
                            >
                            </input>
                            <label style={{ marginTop: "10px" }}>Type:</label>
                            <select className="editSelectSpotType" value={type} onChange={(e) => {
                                setType(e.target.value)
                            }}>
                                <option value="Apartment">Apartment</option>
                                <option value="House">House</option>
                                <option value="Outdoor">Outdoor</option>
                                <option value="Unique Experience">Unique Experience</option>
                            </select>
                            <Button label={"Submit Edit"} type={"submit"} className={"submitEditButton"} />
                        </form>
                        {/* <div className="editPhotosAndSubmitSection">
                            
                        </div> */}
                    </div>
                </div>
            </Modal>}
        </div>
    )
}

export default EditSpot;