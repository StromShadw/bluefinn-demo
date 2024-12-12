import "./Login.css";
import { IoPerson } from "react-icons/io5";
import { TbLockPassword } from "react-icons/tb";
import Logo from "../../assets/logo.png";

function Login() {
  return (
    <>
      <div className="container">
        <div className="header">
          <img src={Logo} alt=""  />
        </div>
        <div className="inputs">
          <div className="input">
            <IoPerson />
            <input type="text" placeholder=" User Name" />
          </div>
          <div className="input">
            <TbLockPassword />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="submit-container">
          <div className="submit">Login</div>
        </div>
        <div className="forgot-password">
          Forgot Password? <span>Click here!</span>
        </div>
      </div>
      <div className="rbs-loginFooter">
        <div className="rbs-newUser">
          <label>New Users:</label>
          <span dir="auto">
            Please follow the instructions sent to your registered email address
            or contact System Administrator.
          </span>
        </div>
        <div className="rbs-supportedBrowser">
          <label>Supported Browsers:</label>
          <span dir="ltr">
            Please visit our{" "}
            <a
              href="#"
              title="Supported Platforms"
              target="blank"
            >
              website
            </a>{" "}
            for the latest list of supported browsers
          </span>
        </div>
        <div className="rbs-languageChoice">
          <label>Language:</label>
          <select>
            <option value="de">German</option>
            <option value="no">Norwegian</option>
            <option value="ru">Russian</option>
            <option value="ko">Korean</option>
            <option value="pt">Portuguese</option>
            <option value="el">Greek</option>
            <option value="en" selected="">
              English
            </option>
            <option value="it">Italian</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="zh">Chinese</option>
            <option value="ar">Arabic</option>
            <option value="ja">Japanese</option>
            <option value="he">Hebrew</option>
            <option value="nl">Dutch</option>
            <option value="tr">Turkish</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Login;
