import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from '../../store/session';
import { IoMdClose } from "react-icons/io"
import Button from '../common/Button/Button';
import "./SignUpForm.css"


const SignUpForm = ({ setShowSignupModal }) => {
    const [errors, setErrors] = useState([]);
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const dispatch = useDispatch();

    const updateName = (e) => {
        setname(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    const updateUsername = (e) => {
        setUsername(e.target.value);
    };


    const onSignUp = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (password === repeatPassword) {

            console.log(name, username, email, password)
            const data = await dispatch(signUp(name, username, email, password));

            if (data) {
                setErrors(data);
            } else {
                setShowSignupModal(false)
            }
        } else {
            setErrors(['Password and Confirm password must match.']);
        }
    };

    return (
        <form className="signup-form" onSubmit={onSignUp}>
            <div className="closeIconAndCreateAccountText">
                <div className="closeSignUpContainer">
                    <div className="closeSignUpCircleContainer">
                        <IoMdClose className="closeSignUpModalIcon" onClick={() => setShowSignupModal(false)} />
                    </div>
                </div>
                <div className="createAccountTextInModal"> Create Account</div>
            </div>
            <div className="signupErrorsContainer">
                {errors.map((error, ind) => (
                    <div className="signupErrors" key={ind}>{error}</div>
                ))}
            </div>

            <div className="signupLabelAndInput">

                <div>
                    <label>Name</label>
                </div>
                <input
                    type="text"
                    name="username"
                    onChange={updateName}
                    value={name}
                    required={true}
                    className="signupInput"
                ></input>
            </div>
            <div className="signupLabelAndInput">
                <div>
                    <label>Username</label>
                </div>
                <input
                    type="text"
                    name="email"
                    onChange={updateUsername}
                    value={username}
                    required={true}
                    className="signupInput"
                ></input>
            </div>
            <div className="signupLabelAndInput">
                <div>
                    <label>Email address</label>
                </div>
                <input
                    type="text"
                    name="email"
                    onChange={updateEmail}
                    value={email}
                    required={true}
                    className="signupInput"
                ></input>
            </div>
            <div className="signupLabelAndInput">
                <div>
                    <label>Password</label>
                </div>
                <input
                    type="password"
                    name="password"
                    onChange={updatePassword}
                    value={password}
                    required={true}
                    className="signupInput"
                ></input>
            </div>
            <div className="signupLabelAndInput">
                <div>
                    <label>Confirm Password</label>
                </div>
                <input
                    type="password"
                    name="repeat_password"
                    onChange={updateRepeatPassword}
                    value={repeatPassword}
                    required={true}
                    className="signupInput"
                ></input>
            </div>
            <div className="signupButtonContainer">
                <Button label={"Create Account"} type="submit" className={"signUpmodal"} />
            </div>
        </form>
    );
};



export default SignUpForm