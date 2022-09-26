import React, { useState } from "react";

import styles from "./Login.module.css";
import Logo from "../../../Assets/LOGO.png";
import { Button, DropDown, Heading, InputField } from "../../../Components";
import facebook from "../../../Assets/facebook.png";
import googleplus from "../../../Assets/google-plus.png";
import { Footer } from "../../../Containers";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../../Store/Actions/LoginActions";
// import AuthAction from '../../../Store/Actions/AuthActions';
import AuthMiddleware from '../../../Store/Middleware/AuthMiddleware';


// import { LoginAction } from "../../../Store/Actions/AuthActions";
import Modal from 'react-bootstrap/Modal';
import { AiOutlineClose } from "react-icons/ai";
const Login = () => {
  const [showForget, setShowForget] = useState(false);
  const handleCloseIcon = () => setShowForget(false);
  const handleForgetClose = () => { setShowForget(false); setShowCode(true) };
  const handleForgetShow = () => setShowForget(true);

  const [showCode, setShowCode] = useState(false);
  const handleCodeIcon = () => setShowCode(false);
  const handleCodeClose = () => { setShowCode(false); setShowChange(true) };
  const handleCodeShow = () => setShowCode(true);

  const [showChange, setShowChange] = useState(false);
  const handleChangeClose = () => setShowChange(false);
  const handleChangeShow = () => setShowChange(true);

  const history = useHistory();

  const [userRoleValue, setUserRoleValue] = useState("player");
  const [email, setEmail] = useState('sarah46@gmail.com');
  const [password, setPassword] = useState('12345678');

  const [forgotPassEmail, setForgotPassEmail] = useState('');
  const [forgotPassCode, setForgotPassCode] = useState('');
  const [userPassCode, setUserPassCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [userRoleValue, setUserRoleValue] = useState("#");
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    console.log("loginData", email, password);
    let userData = {
      email: email,
      password: password,
      // token,
    }
    dispatch(AuthMiddleware.login(userData))
      .then(data => {
        const obj = [
          {
            user: true,
            userRole: data.data?.user?.role,
          },
        ];
        dispatch(LoginAction(obj));
        localStorage.setItem("user", JSON.stringify(obj));
        history.replace("/")
        console.log('loginScreenDataaa', data.data.user.role);
      })
      .catch(err => {
        console.log(err);
      });
    // let persist = localStorage.getItem('persist:persistData');
    // console.log('persist', persist.LoginReducers);
    // const obj = [
    //   {
    //     user: true,
    //     userRole: userRoleValue,
    //   },
    // ];
    // dispatch(LoginAction(obj));
    // localStorage.setItem("user", JSON.stringify(obj));
    // var user = JSON.parse(localStorage.getItem("user"));

    // console.log("user", user);
    // if (user[0].userRole === "store") {
    //   return history.replace("/store");
    // }
    // history.replace("/");
  };

  const onPressSentEmailForgetPass = () => {
    if (forgotPassEmail) {
      // this.setState({ loader: true }, () => {
      //   this.props
      // .forgetPassword({ email: forgotPassEmail })
      dispatch(AuthMiddleware.forgetPassword({ email: forgotPassEmail }))
        .then(data => {
          console.log('DataaCoddeeeee', data?.data?.code)
          setForgotPassCode(data?.data?.code)
          handleForgetClose()
        })
        .catch(err => {
          // this.setState({ loader: false });
          console.log('err', err)
        });
    }
  };

  const onPressVerifyForgetPassword = () => {
    // const { forgotPassCode, forgotPassEmail } = this.state;
    if (userPassCode == forgotPassCode) {
      console.log(
        'forgotPassCode, forgotPassEmail',
        userPassCode,
        forgotPassEmail,
      );
      // this.props
      //   .verifyForgetPassword({code: forgotPassCode, email: forgotPassEmail})
      dispatch(AuthMiddleware.verifyForgetPassword({ code: forgotPassCode, email: forgotPassEmail }))
        .then(data => {
          console.log(data);
          handleCodeClose()
        })
        .catch(err => {
          alert('Code is not correct')
          console.log('err', err)
        });
    }
  };

  const onPressUpdatePassword = () => {
    if (newPassword.length > 7) {
      dispatch(AuthMiddleware.updatePassword({
        email: forgotPassEmail,
        password: newPassword,
        password_confirm: confirmPassword,
      }))
        .then(data => {
          handleChangeClose()
          alert('Password updated successfully')
        })
        .catch(err => {
          console.log('err', err)
        });
    } else {
      alert('password should be at least 8 characters long');
    }
    if (newPassword === confirmPassword) {
    } else {
      alert('Password and confirm password should be match');
    }
  };

  return (
    <>
      <div className={`${styles.auth}`}>
        <section className={styles.auth__logo}>
          <div>
            <img src={Logo} alt="logo" />
          </div>
        </section>

        <section className={`container mt-3 p-4 ${styles.auth__modal}`}>
          <div>
            <Heading text="LOGIN" style={{ alignItems: "center" }} />
          </div>

          <form onSubmit={handleForm}>
            <div
              className={`d-flex w-100 justify-content-center my-3 ${styles.login__input}`}
            >
              <InputField style={{ width: "50%" }} placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div
              className={`d-flex w-100 justify-content-center my-3 ${styles.login__input}`}
            >
              <InputField style={{ width: "50%" }} placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {/* <div
              className={`d-flex w-100 justify-content-center my-3 ${styles.login__input}`}
            >
              <DropDown
                onClick={(e) => setUserRoleValue(e.target.value)}
                dropdownValue={userRoleValue}
                options={[
                  "Player",
                  "Facility",
                  "Coach",
                  "Staff",
                  "Parent",
                  "Team",
                  "Store",
                ]}
                // placeholder="player"
                style={{ width: "50%" }}
              />
            </div> */}
            <div className="w-100 d-flex  justify-content-center flex-wrap my-3">
              <div className={styles.login__remember}>
                <input type="checkbox" name="" id="remember" />
                <label htmlFor="remember">Remember Login</label>
              </div>
              <div className={styles.login__forget}
                onClick={handleForgetShow}
              >
                <p>
                  Forget Password?
                </p>
              </div>
            </div>
            <div className="w-100 d-flex justify-content-center my-3">
              <Button text="LOGIN" />
            </div>

            <div
              className={`w-100 d-flex flex-column align-items-center justify-content-center my-3 ${styles.signup__otherOption}`}
            >
              <p>Or connect with</p>
              <section>
                <img src={facebook} width="40" />
                <img src={googleplus} width="40" />
              </section>
              <div className={styles.login__signup}>
                <p className={styles.login__text}>
                  Don't have an account?
                </p>
                <p>
                  <Link to="/signup">Signup</Link>
                </p>
              </div>
            </div>
          </form>
        </section>
      </div>
      <>
        {/* EMAIL MODAL */}
        <Modal show={showForget} onHide={handleCloseIcon}>
          <Modal.Body>
            <div className={styles.forgetModal__head}>
              <div className={styles.forgetModal__h3}>
                <h3>FORGET PASSWORD?</h3>
              </div>
              <div className={styles.forgetModal__closeIcon}
                onClick={handleCloseIcon}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className={styles.forgetModal__body}>
              <div className={styles.forgetModal__text}>
                Enter registered Email Address to recover password.
              </div>
              <div className={styles.forgetModal__email}>
                <InputField placeholder={"Email"} style={{ width: 300 }} onChange={(e) => setForgotPassEmail(e.target.value)} />
              </div>
              <div className={styles.forgetModal__btn}
                onClick={() => onPressSentEmailForgetPass()}
              >
                <Button text={"RESET PASSWORD"} />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>

      <>
        {/* CODE MODAL */}
        <Modal show={showCode} >
          <Modal.Body>
            <div className={styles.forgetModal__head}>
              <div className={styles.forgetModal__h3}>
                <h3>FORGET PASSWORD?</h3>
              </div>
              {/* <div className={styles.forgetModal__closeIcon}
              onClick={handleCodeIcon}
              >
                <AiOutlineClose />
              </div> */}
            </div>
            <div className={styles.forgetModal__body}>
              <div className={styles.forgetModal__text}>
                Enter the code which we send on your registered Email Address.
              </div>
              <div className={styles.forgetModal__email}>
                <InputField placeholder={"Enter Code"} style={{ width: 300 }} onChange={(e) => setUserPassCode(e.target.value)} />
              </div>
              <div className={styles.forgetModal__btn}
                onClick={() => onPressVerifyForgetPassword()}
              >
                <Button text={"RESET PASSWORD"} />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
      <>
        {/* CHANGEPASSWORD MODAL */}
        <Modal show={showChange} >
          <Modal.Body>
            <div className={styles.forgetModal__head}>
              <div className={styles.forgetModal__h3}>
                <h3>CHANGE PASSWORD?</h3>
              </div>
              {/* <div className={styles.forgetModal__closeIcon}
              onClick={handleChangeClose}
              >
                <AiOutlineClose />
              </div> */}
            </div>
            <div className={styles.forgetModal__body}>
              <div className={styles.forgetModal__text}>
                Enter New Password
              </div>
              <div className={styles.forgetModal__email}>
                <InputField placeholder={"New Password"} style={{ width: 300 }} onChange={(e) => setNewPassword(e.target.value)} />
              </div>
              <div className={styles.forgetModal__email}>
                <InputField placeholder={"Confirm Password"} style={{ width: 300 }} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              <div className={styles.forgetModal__btn}
                onClick={() => onPressUpdatePassword()}
              >
                <Button text={"RESET PASSWORD"} />
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
      <Footer />
    </>
  );
};

export default Login;
