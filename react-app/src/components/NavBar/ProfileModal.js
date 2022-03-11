import "./NavBar.css"
import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/session';
import { login } from "../../store/session";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import OutsideClickHandler from 'react-outside-click-handler';

const ProfileModal = ({ setProfileModal, setShowLoginModal, setShowSignupModal, profileModal }) => {
    let history = useHistory()
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);


    const demoUserLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login('demo@aa.io', 'password'));


        setShowLoginModal(false)
    }


    const onLogout = async (e) => {
        await dispatch(logout());
    };


    let signInProfileWindow = (

        // <OutsideClickHandler onOutsideClick={() => {
        //     setProfileModal(false)
        // }}>
        <div className="profileWindow" >

            <button className="loginButton" onClick={() => {
                setShowLoginModal(true)
                setShowSignupModal(false)
                setProfileModal(false)
            }}>Log In</button>


            <button className="signupButton" onClick={() => {
                setShowLoginModal(false)
                setShowSignupModal(true)
                setProfileModal(false)
            }} >Register</button>


            <div className="profileWindowHostYourHomeText" onClick={demoUserLogin}>Demo User</div>
        </div>
        // </OutsideClickHandler>
    )


    let signedOutProfileWindow = (
        <>
            {/* <OutsideClickHandler onOutsideClick={() => {
                setProfileModal(false)
            }}> */}

            <div className="profileWindow" >
                <div className="profileWindowLoginText">Welcome, {sessionUser?.name}</div>
                <div className="profileWindowLoginText" onClick={() => onLogout()}>
                    <button className="loginButton">Log Out</button>
                </div>
                <div className="profileWindowSignupText">
                    <div className="signupButton" to="/spots/new" onClick={() => {
                        history.push("/spots/new")
                    }} >Host a Trip</div>

                </div>
                <div className="profileWindowHostYourHomeText" onClick={() => history.push("/mytrips")}>View upcoming trips</div>
            </div>

            {/* </OutsideClickHandler> */}
        </>)





    return (

        <>
            {sessionUser ? <div className="profileModalWindowContainerNavBar" >{signedOutProfileWindow}</div> : <div className="profileModalWindowContainerNavBar" >{signInProfileWindow}</div>}
        </>


    )



}

export default ProfileModal;