import "./NavBar.css"
import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector } from 'react-redux';

const ProfileModal = ({ setProfileModal, setShowLoginModal, setShowSignupModal }) => {

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


    let returnValue = (
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


    return (
        { sessionUser? returnValue: null }

    )



}

export default ProfileModal;