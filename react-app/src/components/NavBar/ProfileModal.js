import "./NavBar.css"
import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/session';

const ProfileModal = ({ setProfileModal, setShowLoginModal, setShowSignupModal }) => {

    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);

    document.addEventListener("click", (event) => {
        const concernedElement = document.querySelector(".navBarProfileButton");
        const loginButton = document.querySelector(".loginButton")
        const signupButton = document.querySelector(".signupButton")
        const loginDiv = document.querySelector(".profileWindowLoginText")
        const signupDiv = document.querySelector(".profileWindowSignupText")
        if (concernedElement?.contains(event.target) || loginButton?.contains(event.target) || signupButton?.contains(event.target) || loginDiv?.contains(event.target) || signupDiv?.contains(event.target)) {
            return;
        } else {
            setProfileModal(false)
        }
    });


    const onLogout = async (e) => {
        await dispatch(logout());
    };


    let signInProfileWindow = (
        <>

            <div className="profileWindow">
                <div className="profileWindowLoginText" onClick={() => {
                    setShowLoginModal(true)
                    setShowSignupModal(false)
                    setProfileModal(false)
                }}>
                    <button className="loginButton">Log In</button>
                </div>
                <div className="profileWindowSignupText" onClick={() => {
                    setShowLoginModal(false)
                    setShowSignupModal(true)
                    setProfileModal(false)
                }}>
                    <button className="signupButton" >Register</button>

                </div>
                <div className="profileWindowHostYourHomeText">Host your home</div>
            </div>
        </>)


    let signedOutProfileWindow = (
        <>

            <div className="profileWindow">
                <div className="profileWindowLoginText" onClick={() => onLogout()}>
                    <button className="loginButton">Log Out</button>
                </div>
                <div className="profileWindowSignupText" onClick={() => {
                    setShowLoginModal(false)
                    setShowSignupModal(true)
                    setProfileModal(false)
                }}>
                    <button className="signupButton" >Host a Trip</button>

                </div>
                <div className="profileWindowHostYourHomeText">View upcoming trips</div>
            </div>
        </>)





    return (

        <>
            {sessionUser ? signedOutProfileWindow : signInProfileWindow}
        </>


    )



}

export default ProfileModal;