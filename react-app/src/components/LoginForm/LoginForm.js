import React, { useState } from "react";
import "./LoginForm.css";
import { useDispatch } from "react-redux";
import { login } from "../../store/session";
import { IoMdClose } from "react-icons/io";
import Button from "../common/Button/Button";

const LoginForm = ({ setShowLoginModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      setShowLoginModal(false);
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
    const data = await dispatch(login("demo@aa.io", "password"));

    if (data) {
      setErrors(data);
    }

    setShowLoginModal(false);
  };

  return (
    <form className="LoginForm" onSubmit={onLogin}>
      <div className="closeIconAndLoginText">
        <div className="closeLoginContainer">
          <div className="closeLoginCircleContainer">
            <IoMdClose
              className="closeLoginModalIcon"
              onClick={() => setShowLoginModal(false)}
            />
          </div>
        </div>
        <div className="loginTextInModal"> Log In</div>
      </div>

      <div className="welcomeToTextLoginContainer">
        Welcome back!
        <div>
          {errors.map((error, ind) => (
            <div className="loginErrors" key={ind}>
              {error}
            </div>
          ))}
        </div>
      </div>
      <div id="loginContainer">
        <div>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
            className="emailLoginInputBar"
            required={true}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
            className="passwordInputBarLogin"
            required={true}
          />
        </div>
      </div>
      <div className="loginInButtonInModalAndDemoButton">
        <Button
          label={"Log In"}
          type="submit"
          className={"loginButtonInmodal"}
        />
        <div className="or"> Or </div>
        <Button
          onClick={demoUserLogin}
          label={"Demo User"}
          className={"demoButtonInmodal"}
        />
      </div>
    </form>
  );
};

export default LoginForm;
