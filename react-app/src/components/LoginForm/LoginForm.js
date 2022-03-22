import React, { useState } from 'react';
import "./LoginForm.css"
import { useDispatch } from 'react-redux';
import { login, signUp } from '../../store/session';
import { IoMdClose } from "react-icons/io"
import Button from '../common/Button/Button';

const LoginForm = ({ setShowLoginModal }) => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onLogin = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const data = await dispatch(login(email, password));
        if (data) {
            setErrors(data);
        } else {
            setShowLoginModal(false)
        }


    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };


    const demoUserLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login('demo@aa.io', 'password'));

        if (data) {
            setErrors(data);
        }

        setShowLoginModal(false)
    }

    return (
        <form className="LoginForm" onSubmit={onLogin}>
            <div className="closeIconAndLoginText">
                <div className="closeLoginContainer">
                    <div className="closeLoginCircleContainer">
                        <IoMdClose className="closeLoginModalIcon" onClick={() => setShowLoginModal(false)} />
                    </div>
                </div>
                <div className="loginTextInModal"> Log In</div>
            </div>
            {/* <div style={{ display: "flex", justifyContent: "center" }}>Center</div> */}

            <div className="welcomeToTextLoginContainer">Welcome back!
                <div>
                    {errors.map((error, ind) => (
                        <div className='loginErrors' key={ind}>{error}</div>
                    ))}
                </div>

            </div>
            <div id="loginContainer">
                <div className="loginLabelTextContainer">
                    <label htmlFor="email">Email address</label>
                </div>
                <div>
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={updateEmail}
                        className="loginInputBar"
                        required={true}
                    />
                </div>
                <div className="loginLabelTextContainer">
                    <label htmlFor="password">Password</label>
                </div>
                <div>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={updatePassword}
                        className="loginInputBar"
                        required={true}
                    />
                </div>
            </div>
            <div className='loginInButtonInModalAndDemoButton'>
                <Button label={"Log In"} type="submit" className={"loginButtonInmodal"} />
                <div className='or'> Or </div>
                <Button onClick={demoUserLogin} label={"Demo User"} className={"demoButtonInmodal"} />
            </div>
        </form >

    )




}


export default LoginForm;