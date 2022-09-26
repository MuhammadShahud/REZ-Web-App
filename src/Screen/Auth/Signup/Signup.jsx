import React, { useState, useEffect } from "react";

import styles from "./Signup.module.css";
import Logo from "../../../Assets/LOGO.png";
import { Button, DropDown, Heading, InputField } from "../../../Components";
import facebook from "../../../Assets/facebook.png";
import googleplus from "../../../Assets/google-plus.png";
import { Footer } from "../../../Containers";
import { Link } from "react-router-dom";
import { Modal, Checkbox } from 'antd';
import {
  AiFillCloseCircle
} from "react-icons/ai";
import {
  GrAddCircle
} from "react-icons/gr";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthMiddleware from '../../../Store/Middleware/AuthMiddleware';
import GerneralMiddleware from '../../../Store/Middleware/GeneralMiddleware';

const Signup = () => {
  const [registerValue, setRegisterValue] = useState("player");
  const [genderValue, setGenderValue] = useState();
  const [sportsValue, setSportsValue] = useState();
  const [sportsValueId, setSportsValueId] = useState();
  const [colorValue, setColorValue] = useState();
  const [colorValueName, setColorValueName] = useState();
  const [colorValueCode, setColorValueCode] = useState();
  const [allSports, setAllSports] = useState();
  // const [colorValue, setColorValue] = useState();
  const [dobValue, setDob] = useState();
  const [userName, setUsername] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [childEmail, setChildEmail] = useState();
  const [selectedChildList, setSelectedChildList] = useState([]);
  const [govId, setGovId] = useState();
  const [taxId, setTaxId] = useState();
  const [termsConditionModal, setTermsConditionModal] = useState(false);
  const [termsConditionCheck, setTermsConditionCheck] = useState(false);
  const [termsCondition, setTermsCondition] = useState();
  const [childEmailModal, setChildEmailModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();


  useEffect(() => {
    dispatch(AuthMiddleware.getSportTypes())
      .then(data => {
        setAllSports(data)
      })
      .catch(err => {
        console.log(err);
      });

    dispatch(GerneralMiddleware.Terms())
      .then(data => {
        setTermsCondition(data?.data?.data)
        // console.log('termsCondition',data?.data?.data);
      })
      .catch(err => {
        console.log(err);
      });

    dispatch(AuthMiddleware.getColors())
      .then(data => {
        setColorValue(data)
        // console.log('setColorValue',data);
      })
      .catch(err => {
        console.log(err);
      });

    console.log('colorValueCode', colorValueCode);

  }, []);

  const onPressSignUp = () => {
    // if (this.props?.social) {
    // } else {
    //   if (password.length < 8) {
    //     alert('Password must be alteast 8 characters!');
    //     return;
    //   }
    // }

    if (
      (userName &&
        email &&
        phoneNumber &&
        sportsValueId &&
        registerValue) ||
      genderValue ||
      address ||
      dobValue
    ) {
      let dobCopy = new Date(dobValue);


      let signUpObj = {
        username: userName,
        email: email,
        password: password,
        phone: phoneNumber,
        address: address,
        role: registerValue,
        govt_id: govId,
        tax_id: taxId,
        gender: genderValue,
        dob: `${dobCopy.getFullYear()}-${dobCopy.getMonth() + 1
          }-${dobCopy.getDate()}`,
        sport_type: sportsValueId,
        childName: selectedChildList.map(x => x.id).join(','),
        color_code: colorValueCode,
      };
      // if (this.props.social) {
      //   signUpObj.platform = this.props.social?.platform;
      // }

      console.log('onPressSignUp', JSON.stringify(signUpObj));
      if (termsConditionCheck) {
        dispatch(AuthMiddleware.signUp(signUpObj))
          .then(data => {
            history.replace("/login")
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        alert('Accept terms & condition');
      }
    } else {
      alert('All fields are required');
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    registerValue === 'player' ?
      console.log('dataaa', userName, email, phoneNumber, password, address, registerValue, genderValue, sportsValue, colorValueCode, dobValue,)
      :
      registerValue === 'parent' ?
        console.log('dataaa', userName, email, phoneNumber, password, address, registerValue, genderValue, sportsValue, colorValueCode, dobValue, childEmail)
        :
        registerValue === 'facility' ?
          console.log('dataaa', userName, email, phoneNumber, password, address, registerValue, govId, taxId, sportsValue, colorValueCode)
          :
          registerValue === 'coach' ?
            console.log('dataaa', userName, email, phoneNumber, password, address, registerValue, govId, genderValue, dobValue, taxId, sportsValue, colorValueCode)
            :
            registerValue === 'store' ?
              console.log('dataaa', userName, email, phoneNumber, password, address, registerValue, govId, taxId, colorValueCode)
              :
              registerValue === 'team' ?
                console.log('dataaa', userName, email, phoneNumber, password, address, registerValue, sportsValue, colorValueCode)
                :
                console.log('dataaa',)
    // onPressSignUp()
  };

  return registerValue === "player" ? (
    <PlayerForm
      registerValue={registerValue}
      setRegisterValue={setRegisterValue}
      sportsValue={sportsValue}
      setSportsValue={setSportsValue}
      sportsValueId={sportsValueId}
      setSportsValueId={setSportsValueId}

      colorValue={colorValue}
      setColorValue={setColorValue}
      colorValueName={colorValueName}
      setColorValueName={setColorValueName}
      colorValueCode={colorValueCode}
      setColorValueCode={setColorValueCode}
      allSports={allSports}
      // colorValue={colorValue}
      // setColorValue={setColorValue}
      dobValue={dobValue}
      setDob={setDob}
      handleForm={handleForm}
      genderValue={genderValue}
      setGenderValue={setGenderValue}
      userName={userName}
      setUsername={setUsername}
      setEmail={setEmail}
      setPhoneNumber={setPhoneNumber}
      setPassword={setPassword}
      setAddress={setAddress}
      termsConditionModal={termsConditionModal}
      setTermsConditionModal={setTermsConditionModal}
      termsConditionCheck={termsConditionCheck}
      setTermsConditionCheck={setTermsConditionCheck}
      termsCondition={termsCondition}
    />
  ) : registerValue === "parent" ? (
    <ParentForm
      registerValue={registerValue}
      setRegisterValue={setRegisterValue}
      sportsValue={sportsValue}
      setSportsValue={setSportsValue}
      sportsValueId={sportsValueId}
      setSportsValueId={setSportsValueId}
      allSports={allSports}
      colorValue={colorValue}
      setColorValue={setColorValue}
      colorValueName={colorValueName}
      setColorValueName={setColorValueName}
      colorValueCode={colorValueCode}
      setColorValueCode={setColorValueCode}
      dobValue={dobValue}
      setDob={setDob}
      handleForm={handleForm}
      genderValue={genderValue}
      setGenderValue={setGenderValue}
      userName={userName}
      setUsername={setUsername}
      setEmail={setEmail}
      setPhoneNumber={setPhoneNumber}
      setPassword={setPassword}
      setAddress={setAddress}
      termsConditionModal={termsConditionModal}
      setTermsConditionModal={setTermsConditionModal}
      termsConditionCheck={termsConditionCheck}
      setTermsConditionCheck={setTermsConditionCheck}
      termsCondition={termsCondition}
      childEmail={childEmail}
      setChildEmail={setChildEmail}
      selectedChildList={selectedChildList}
      setSelectedChildList={setSelectedChildList}
      childEmailModal={childEmailModal}
      setChildEmailModal={setChildEmailModal}

    />
  ) : registerValue === "facility" ? (
    <FacilityForm
      registerValue={registerValue}
      setRegisterValue={setRegisterValue}
      sportsValue={sportsValue}
      setSportsValue={setSportsValue}
      sportsValueId={sportsValueId}
      setSportsValueId={setSportsValueId}
      allSports={allSports}
      colorValue={colorValue}
      setColorValue={setColorValue}
      colorValueName={colorValueName}
      setColorValueName={setColorValueName}
      colorValueCode={colorValueCode}
      setColorValueCode={setColorValueCode}
      dobValue={dobValue}
      setDob={setDob}
      handleForm={handleForm}
      genderValue={genderValue}
      setGenderValue={setGenderValue}
      userName={userName}
      setUsername={setUsername}
      setEmail={setEmail}
      setPhoneNumber={setPhoneNumber}
      setPassword={setPassword}
      setAddress={setAddress}
      setChildEmail={setChildEmail}
      setGovId={setGovId}
      setTaxId={setTaxId}
      termsConditionModal={termsConditionModal}
      setTermsConditionModal={setTermsConditionModal}
      termsConditionCheck={termsConditionCheck}
      setTermsConditionCheck={setTermsConditionCheck}
      termsCondition={termsCondition}
    />
  ) : registerValue === "coach" ? (
    <CoachForm
      registerValue={registerValue}
      setRegisterValue={setRegisterValue}
      sportsValue={sportsValue}
      setSportsValue={setSportsValue}
      sportsValueId={sportsValueId}
      setSportsValueId={setSportsValueId}
      allSports={allSports}
      colorValue={colorValue}
      setColorValue={setColorValue}
      colorValueName={colorValueName}
      setColorValueName={setColorValueName}
      colorValueCode={colorValueCode}
      setColorValueCode={setColorValueCode}
      dobValue={dobValue}
      setDob={setDob}
      handleForm={handleForm}
      genderValue={genderValue}
      setGenderValue={setGenderValue}
      userName={userName}
      setUsername={setUsername}
      setEmail={setEmail}
      setPhoneNumber={setPhoneNumber}
      setPassword={setPassword}
      setAddress={setAddress}
      setChildEmail={setChildEmail}
      setGovId={setGovId}
      setTaxId={setTaxId}
      termsConditionModal={termsConditionModal}
      setTermsConditionModal={setTermsConditionModal}
      termsConditionCheck={termsConditionCheck}
      setTermsConditionCheck={setTermsConditionCheck}
      termsCondition={termsCondition}
    />
  ) : registerValue === "store" ? (
    <StoreForm
      registerValue={registerValue}
      setRegisterValue={setRegisterValue}
      sportsValue={sportsValue}
      setSportsValue={setSportsValue}
      sportsValueId={sportsValueId}
      setSportsValueId={setSportsValueId}
      allSports={allSports}
      colorValue={colorValue}
      setColorValue={setColorValue}
      colorValueName={colorValueName}
      setColorValueName={setColorValueName}
      colorValueCode={colorValueCode}
      setColorValueCode={setColorValueCode}
      dobValue={dobValue}
      setDob={setDob}
      handleForm={handleForm}
      genderValue={genderValue}
      setGenderValue={setGenderValue}
      userName={userName}
      setUsername={setUsername}
      setEmail={setEmail}
      setPhoneNumber={setPhoneNumber}
      setPassword={setPassword}
      setAddress={setAddress}
      setChildEmail={setChildEmail}
      setGovId={setGovId}
      setTaxId={setTaxId}
      termsConditionModal={termsConditionModal}
      setTermsConditionModal={setTermsConditionModal}
      termsConditionCheck={termsConditionCheck}
      setTermsConditionCheck={setTermsConditionCheck}
      termsCondition={termsCondition}
    />
  ) : registerValue === "team" ? (
    <TeamForm
      registerValue={registerValue}
      setRegisterValue={setRegisterValue}
      sportsValue={sportsValue}
      setSportsValue={setSportsValue}
      sportsValueId={sportsValueId}
      setSportsValueId={setSportsValueId}
      allSports={allSports}
      colorValue={colorValue}
      setColorValue={setColorValue}
      colorValueName={colorValueName}
      setColorValueName={setColorValueName}
      colorValueCode={colorValueCode}
      setColorValueCode={setColorValueCode}
      dobValue={dobValue}
      setDob={setDob}
      handleForm={handleForm}
      genderValue={genderValue}
      setGenderValue={setGenderValue}
      userName={userName}
      setUsername={setUsername}
      setEmail={setEmail}
      setPhoneNumber={setPhoneNumber}
      setPassword={setPassword}
      setAddress={setAddress}
      setChildEmail={setChildEmail}
      setGovId={setGovId}
      setTaxId={setTaxId}
      termsConditionModal={termsConditionModal}
      setTermsConditionModal={setTermsConditionModal}
      termsConditionCheck={termsConditionCheck}
      setTermsConditionCheck={setTermsConditionCheck}
      termsCondition={termsCondition}
    />
  ) : null;
};

const PlayerForm = ({
  registerValue,
  setRegisterValue,
  sportsValue,
  setSportsValue,
  sportsValueId,
  setSportsValueId,
  allSports,
  // colorValue,
  // setColorValue,
  handleForm,
  genderValue,
  setGenderValue,
  setUsername,
  setEmail,
  setPhoneNumber,
  setPassword,
  setAddress,
  setDob,
  termsConditionModal,
  setTermsConditionModal,
  termsConditionCheck,
  setTermsConditionCheck,
  termsCondition,
  colorValue,
  setColorValue,
  colorValueName,
  setColorValueName,
  colorValueCode,
  setColorValueCode,

}) => {
  let sportValues = allSports?.map(val => val.id);
  let sportOptions = allSports?.map(val => val.sportname);

  let getcolors = colorValue?.map(val => val.name);
  let getcolorCode = colorValue?.map(val => val.code);
  // console.log('getcolors', colorValueCode)

  return (
    <div className={`${styles.auth}`}>
      <section className={styles.auth__logo}>
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </section>
      <section className={`container mt-3 p-4 ${styles.auth__modal}`}>
        <div>
          <Heading text="SIGNUP" style={{ alignItems: "center" }} />
        </div>

        <form onSubmit={handleForm}>
          <div className="d-flex w-100 my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Username"} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="w-100 mx-2">
              <InputField placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="d-flex w-100 my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Phone Number"} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div className="w-100 mx-2">
              <InputField placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="w-100 d-flex  my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Address"} onChange={(e) => setAddress(e.target.value)} />
            </div>
          </div>
          <div className="w-100 d-flex my-3">
            <div className=" w-100 mx-2">
              <DropDown
                onClick={(e) => setRegisterValue(e.target.value)}
                dropdownValue={registerValue}
                options={[
                  "player",
                  "coach",
                  "facility",
                  "parent",
                  "team",
                  "store",
                ]}
                placeholder="Register As"
                style={{ margin: 0 }}
              />
            </div>

            <div className={`w-100 mx-2 ${styles.auth__datepicker} `}>
              <input
                type="text"
                onFocus={(e) => console.log((e.target.type = "date"))}
                onBlur={(e) => console.log((e.target.type = "text"))}
                placeholder="Date of Birth"
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>
          <div className="w-100 d-flex  my-3">
            <div className="w-100 mx-2">
              <DropDown
                options={["male", "female", "other"]}
                placeholder="Gender"
                dropdownValue={genderValue}
                onClick={(e) => setGenderValue(e.target.value)}
                style={{ margin: "0" }}
              />
            </div>

            <div className="w-100 mx-2">
              <DropDown
                onClick={(e) => { setSportsValue(e.target.options[e.target.selectedIndex].text); setSportsValueId(e.target.value) }}
                // dropdownValue={sportsValue}
                values={sportValues}
                options={sportOptions}

                placeholder={sportsValue ? sportsValue : "Select Sport Type"}
                style={{ margin: 0 }}
              />
            </div>
          </div>
          <div className="w-100 d-flex  my-3">
            <DropDown
              onClick={(e) => { setColorValueName(e.target.options[e.target.selectedIndex].text); setColorValueCode(e.target.value) }}
              // onClick={(e) => console.log('setColorValueCode', e.target.value)}
              values={getcolorCode}
              options={getcolors}
              placeholder={colorValueName ? colorValueName : "Select Color"}
              style={{ margin: 0 }}
            />
          </div>
          <div className="w-100 d-flex justify-content-center my-3">
            <Checkbox onChange={() => { setTermsConditionCheck(!termsConditionCheck); setTermsConditionModal(true) }} checked={termsConditionCheck}>TERMS AND CONDITIONS</Checkbox>
          </div>
          <Modal title="TERMS AND CONDITIONS" visible={termsConditionModal} onOk={() => setTermsConditionModal(false)} onCancel={() => setTermsConditionModal(false)}>
            <div className="my-3">
              <Heading
                text={"TERMS AND CONDITIONS"}
                style={{ alignItems: "center" }}
              />
            </div>
            <div>
              <text>{termsCondition}</text>
            </div>
          </Modal>
          {termsConditionCheck ?
            <div className="w-100 d-flex justify-content-center my-3">
              <Button text="SIGNUP" />
            </div>
            :
            <div className="w-100 d-flex justify-content-center my-3">
              <Button style={{ opacity: 0.3 }} disabled={true} text="SIGNUP" />
            </div>
          }

          <div
            className={`w-100 d-flex flex-column align-items-center justify-content-center my-3 ${styles.signup__otherOption}`}
          >
            <p>Or connect with</p>
            <section>
              <img src={facebook} width="40" />
              <img src={googleplus} width="40" />
            </section>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </section>
      <div className="mt-3">
        <Footer />
      </div>
    </div>
  );
};

const ParentForm = ({
  registerValue,
  setRegisterValue,
  sportsValue,
  setSportsValue,
  sportsValueId,
  setSportsValueId,
  allSports,
  colorValue,
  setColorValue,
  colorValueName,
  setColorValueName,
  colorValueCode,
  setColorValueCode,
  handleForm,
  genderValue,
  setGenderValue,
  setUsername,
  setEmail,
  setPhoneNumber,
  setPassword,
  setAddress,
  setDob,
  termsConditionModal,
  setTermsConditionModal,
  termsConditionCheck,
  setTermsConditionCheck,
  termsCondition,
  childEmail,
  setChildEmail,
  selectedChildList,
  setSelectedChildList,
  childEmailModal,
  setChildEmailModal,
}) => {
  let sportValues = allSports?.map(val => val.id);
  let sportOptions = allSports?.map(val => val.sportname);

  let getcolors = colorValue?.map(val => val.name);
  let getcolorCode = colorValue?.map(val => val.code);
  const dispatch = useDispatch();

  const onPressAddChildname = () => {
    dispatch(AuthMiddleware.checkChildEmail(childEmail))
      .then(data => {
        let selectedChildListCopy = selectedChildList;
        const isFound = selectedChildListCopy.find(x => x.id === data.id);
        if (!isFound) {
          selectedChildList.push(data);
        }
        setChildEmail('')
      })
      .catch(err => {
        console.log(err);
      });

  };

  const onPressCroseChidlEmail = index => {
    console.log('pressedddd')
    let selectedChildListCopy = [...selectedChildList];
    selectedChildListCopy.splice(index, 1);
    setSelectedChildList(selectedChildListCopy)
    console.log('selectedChildList', selectedChildList);
  };

  return (
    <div className={`${styles.auth}`}>
      <section className={styles.auth__logo}>
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </section>
      <section className={`container mt-3 p-4 ${styles.auth__modal}`}>
        <div>
          <Heading text="SIGNUP" style={{ alignItems: "center" }} />
        </div>

        <form onSubmit={handleForm}>
          <div className="d-flex w-100 my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Username"} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="w-100 mx-2">
              <InputField placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="d-flex w-100 my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Phone Number"} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div className="w-100 mx-2">
              <InputField placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="w-100 d-flex  my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Address"} onChange={(e) => setAddress(e.target.value)} />
            </div>
          </div>
          <div className="w-100 d-flex my-3">
            <div className=" w-100 mx-2">
              <DropDown
                onClick={(e) => setRegisterValue(e.target.value)}
                dropdownValue={registerValue}
                options={[
                  "player",
                  "coach",
                  "facility",
                  "parent",
                  "team",
                  "store",
                ]}
                placeholder="Register As"
                style={{ margin: 0 }}
              />
            </div>

            <div className={`w-100 mx-2 ${styles.auth__datepicker} `}>
              <input
                type="text"
                onFocus={(e) => console.log((e.target.type = "date"))}
                onBlur={(e) => console.log((e.target.type = "text"))}
                placeholder="Date of Birth"
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>
          <div className="w-100 d-flex  my-3">
            <div className="w-100 mx-2">
              <DropDown
                options={["male", "female", "other"]}
                placeholder="Gender"
                dropdownValue={genderValue}
                onClick={(e) => setGenderValue(e.target.value)}
                style={{ margin: "0" }}
              />
            </div>

            <div className="w-100 mx-2">
              <DropDown
                onClick={(e) => { setSportsValue(e.target.options[e.target.selectedIndex].text); setSportsValueId(e.target.value) }}
                // dropdownValue={sportsValue}
                values={sportValues}
                options={sportOptions}

                placeholder={sportsValue ? sportsValue : "Select Sport Type"}
                style={{ margin: 0 }}
              />
            </div>
          </div>
          <div className="w-100 d-flex  my-3">
            <DropDown
              onClick={(e) => { setColorValueName(e.target.options[e.target.selectedIndex].text); setColorValueCode(e.target.value) }}
              // onClick={(e) => console.log('setColorValueCode', e.target.value)}
              values={getcolorCode}
              options={getcolors}
              placeholder={colorValueName ? colorValueName : "Select Color"}
              style={{ margin: 0 }}
            />
          </div>
          <div className="w-100 d-flex  my-3">
            <div className="w-100 mx-2">
              <div onClick={() => setChildEmailModal(true)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <InputField placeholder={"Child Email"} onChange={(e) => setChildEmail(e.target.value)} disabled />
                {
                  selectedChildList.map((x, i) => {
                    return (
                      <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                        <text>{x.email}</text>

                      </div>
                    );
                  })}
                {/* <AiFillCloseCircle color="var(--light-grey)" /> */}
              </div>
              <Modal title="Child Email" visible={childEmailModal} onOk={() => setChildEmailModal(false)} onCancel={() => setChildEmailModal(false)}>
                <div className="my-3">
                  <Heading
                    text={"Child Email"}
                    style={{ alignItems: "center" }}
                  />
                </div>
                <div>
                  {/* <text>{termsCondition}</text> */}
                  <div style={{ width: '100%', marginTop: 10 }}>
                    <text >
                      Add Child
                    </text>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <input
                        placeholder="Child Email"
                        onChange={(e) =>
                          setChildEmail(e.target.value)
                        }
                        value={childEmail}
                      // inputContainerStyle={{
                      //   backgroundColor: Colors.BLUE_LIGHT,
                      //   flex: 1,
                      // }}
                      />
                      <div
                        onClick={() => onPressAddChildname()}>
                        <GrAddCircle color="var(--light-grey)" size={20} />
                      </div>
                    </div>
                    {
                      selectedChildList.map((x, i) => {
                        return (
                          <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                            <text>{x.email}</text>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}
                              onClick={() => onPressCroseChidlEmail(i)}>
                              <AiFillCloseCircle color="var(--light-grey)" size={20} />
                            </div>
                          </div>
                        );
                      })}
                  </div>

                </div>
              </Modal>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-center my-3">
            <Checkbox onChange={() => { setTermsConditionCheck(!termsConditionCheck); setTermsConditionModal(true) }} checked={termsConditionCheck}>TERMS AND CONDITIONS</Checkbox>
          </div>
          <Modal title="TERMS AND CONDITIONS" visible={termsConditionModal} onOk={() => setTermsConditionModal(false)} onCancel={() => setTermsConditionModal(false)}>
            <div className="my-3">
              <Heading
                text={"TERMS AND CONDITIONS"}
                style={{ alignItems: "center" }}
              />
            </div>
            <div>
              <text>{termsCondition}</text>
            </div>
          </Modal>
          {termsConditionCheck ?
            <div className="w-100 d-flex justify-content-center my-3">
              <Button text="SIGNUP" />
            </div>
            :
            <div className="w-100 d-flex justify-content-center my-3">
              <Button style={{ opacity: 0.3 }} disabled={true} text="SIGNUP" />
            </div>
          }

          <div
            className={`w-100 d-flex flex-column align-items-center justify-content-center my-3 ${styles.signup__otherOption}`}
          >
            <p>Or connect with</p>
            <section>
              <img src={facebook} width="40" />
              <img src={googleplus} width="40" />
            </section>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </section>
      <div className="mt-3">
        <Footer />
      </div>
    </div>
  );
};

const FacilityForm = ({
  registerValue,
  setRegisterValue,
  sportsValue,
  setSportsValue,
  sportsValueId,
  setSportsValueId,
  allSports,
  colorValue,
  setColorValue,
  colorValueName,
  setColorValueName,
  colorValueCode,
  setColorValueCode,
  handleForm,
  setUsername,
  setEmail,
  setPhoneNumber,
  setPassword,
  setAddress,
  setGovId,
  setTaxId,
  termsConditionModal,
  setTermsConditionModal,
  termsConditionCheck,
  setTermsConditionCheck,
  termsCondition,
}) => {
  let sportValues = allSports?.map(val => val.id);
  let sportOptions = allSports?.map(val => val.sportname);

  let getcolors = colorValue?.map(val => val.name);
  let getcolorCode = colorValue?.map(val => val.code);
  return (
    <div className={`${styles.auth}`}>
      <section className={styles.auth__logo}>
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </section>
      <section className={`container mt-3 p-4 ${styles.auth__modal}`}>
        <div>
          <Heading text="SIGNUP" style={{ alignItems: "center" }} />
        </div>

        <form onSubmit={handleForm}>
          <div className="d-flex w-100 my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Username"} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="w-100 mx-2">
              <InputField placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="d-flex w-100 my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Phone Number"} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div className="w-100 mx-2">
              <InputField placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="w-100 d-flex  my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Address"} onChange={(e) => setAddress(e.target.value)} />
            </div>
          </div>
          <div className="w-100 d-flex my-3">
            <div className=" w-100 mx-2">
              <DropDown
                onClick={(e) => setRegisterValue(e.target.value)}
                dropdownValue={registerValue}
                options={[
                  "player",
                  "coach",
                  "facility",
                  "parent",
                  "team",
                  "store",
                ]}
                placeholder="Register As"
                style={{ margin: 0 }}
              />
            </div>

            <div className={`w-100 mx-2 ${styles.auth__datepicker} `}>
              <InputField placeholder={"Government ID"} onChange={(e) => setGovId(e.target.value)} />
            </div>
          </div>
          <div className="w-100 d-flex  my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Tax ID"} onChange={(e) => setTaxId(e.target.value)} />
            </div>

            <div className="w-100 mx-2">
              <DropDown
                onClick={(e) => { setSportsValue(e.target.options[e.target.selectedIndex].text); setSportsValueId(e.target.value) }}
                // dropdownValue={sportsValue}
                values={sportValues}
                options={sportOptions}

                placeholder={sportsValue ? sportsValue : "Select Sport Type"}
                style={{ margin: 0 }}
              />
            </div>
          </div>
          <div className="w-100 d-flex  my-3">
            <DropDown
              onClick={(e) => { setColorValueName(e.target.options[e.target.selectedIndex].text); setColorValueCode(e.target.value) }}
              // onClick={(e) => console.log('setColorValueCode', e.target.value)}
              values={getcolorCode}
              options={getcolors}
              placeholder={colorValueName ? colorValueName : "Select Color"}
              style={{ margin: 0 }}
            />
          </div>
          <div className="w-100 d-flex justify-content-center my-3">
            <Checkbox onChange={() => { setTermsConditionCheck(!termsConditionCheck); setTermsConditionModal(true) }} checked={termsConditionCheck}>TERMS AND CONDITIONS</Checkbox>
          </div>
          <Modal title="TERMS AND CONDITIONS" visible={termsConditionModal} onOk={() => setTermsConditionModal(false)} onCancel={() => setTermsConditionModal(false)}>
            <div className="my-3">
              <Heading
                text={"TERMS AND CONDITIONS"}
                style={{ alignItems: "center" }}
              />
            </div>
            <div>
              <text>{termsCondition}</text>
            </div>
          </Modal>
          {termsConditionCheck ?
            <div className="w-100 d-flex justify-content-center my-3">
              <Button text="SIGNUP" />
            </div>
            :
            <div className="w-100 d-flex justify-content-center my-3">
              <Button style={{ opacity: 0.3 }} disabled={true} text="SIGNUP" />
            </div>
          }

          <div
            className={`w-100 d-flex flex-column align-items-center justify-content-center my-3 ${styles.signup__otherOption}`}
          >
            <p>Or connect with</p>
            <section>
              <img src={facebook} width="40" />
              <img src={googleplus} width="40" />
            </section>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </section>
      <div className="mt-3">
        <Footer />
      </div>
    </div>
  );
};

const CoachForm = ({
  registerValue,
  setRegisterValue,
  sportsValue,
  setSportsValue,
  sportsValueId,
  setSportsValueId,
  allSports,
  colorValue,
  setColorValue,
  colorValueName,
  setColorValueName,
  colorValueCode,
  setColorValueCode,
  handleForm,
  setUsername,
  setEmail,
  setPhoneNumber,
  setPassword,
  setAddress,
  setGovId,
  setTaxId,
  setDob,
  genderValue,
  setGenderValue,
  termsConditionModal,
  setTermsConditionModal,
  termsConditionCheck,
  setTermsConditionCheck,
  termsCondition,
}) => {
  let sportValues = allSports?.map(val => val.id);
  let sportOptions = allSports?.map(val => val.sportname);

  let getcolors = colorValue?.map(val => val.name);
  let getcolorCode = colorValue?.map(val => val.code);
  return (
    <div className={`${styles.auth}`}>
      <section className={styles.auth__logo}>
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </section>
      <section className={`container mt-3 p-4 ${styles.auth__modal}`}>
        <div>
          <Heading text="SIGNUP" style={{ alignItems: "center" }} />
        </div>

        <form onSubmit={handleForm}>
          <div className="d-flex w-100 my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Username"} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="w-100 mx-2">
              <InputField placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="d-flex w-100 my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Phone Number"} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div className="w-100 mx-2">
              <InputField placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="w-100 d-flex  my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Address"} onChange={(e) => setAddress(e.target.value)} />
            </div>
          </div>

          <div className="w-100 d-flex my-3">
            <div className=" w-100 mx-2">
              <DropDown
                onClick={(e) => setRegisterValue(e.target.value)}
                dropdownValue={registerValue}
                options={[
                  "player",
                  "coach",
                  "facility",
                  "parent",
                  "team",
                  "store",
                ]}
                placeholder="Register As"
                style={{ margin: 0 }}
              />
            </div>

            <div className={`w-100 mx-2 ${styles.auth__datepicker} `}>
              <InputField placeholder={"Government ID"} onChange={(e) => setGovId(e.target.value)} />
            </div>
          </div>
          <div className="w-100 d-flex  my-3">
            <div className="w-100 mx-2">
              <DropDown
                options={["male", "female", "other"]}
                placeholder="Gender"
                dropdownValue={genderValue}
                onClick={(e) => setGenderValue(e.target.value)}
                style={{ margin: "0" }}
              />
            </div>

            <div className={`w-100 mx-2 ${styles.auth__datepicker} `}>
              <input
                type="text"
                onFocus={(e) => console.log((e.target.type = "date"))}
                onBlur={(e) => console.log((e.target.type = "text"))}
                placeholder="Date of Birth"
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>
          <div className="w-100 d-flex  my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Tax ID"} onChange={(e) => setTaxId(e.target.value)} />
            </div>

            <div className="w-100 mx-2">
              <DropDown
                onClick={(e) => { setSportsValue(e.target.options[e.target.selectedIndex].text); setSportsValueId(e.target.value) }}
                // dropdownValue={sportsValue}
                values={sportValues}
                options={sportOptions}

                placeholder={sportsValue ? sportsValue : "Select Sport Type"}
                style={{ margin: 0 }}
              />
            </div>
          </div>
          <div className="w-100 d-flex  my-3">
            <DropDown
              onClick={(e) => { setColorValueName(e.target.options[e.target.selectedIndex].text); setColorValueCode(e.target.value) }}
              // onClick={(e) => console.log('setColorValueCode', e.target.value)}
              values={getcolorCode}
              options={getcolors}
              placeholder={colorValueName ? colorValueName : "Select Color"}
              style={{ margin: 0 }}
            />
          </div>
          <div className="w-100 d-flex justify-content-center my-3">
            <Checkbox onChange={() => { setTermsConditionCheck(!termsConditionCheck); setTermsConditionModal(true) }} checked={termsConditionCheck}>TERMS AND CONDITIONS</Checkbox>
          </div>
          <Modal title="TERMS AND CONDITIONS" visible={termsConditionModal} onOk={() => setTermsConditionModal(false)} onCancel={() => setTermsConditionModal(false)}>
            <div className="my-3">
              <Heading
                text={"TERMS AND CONDITIONS"}
                style={{ alignItems: "center" }}
              />
            </div>
            <div>
              <text>{termsCondition}</text>
            </div>
          </Modal>
          {termsConditionCheck ?
            <div className="w-100 d-flex justify-content-center my-3">
              <Button text="SIGNUP" />
            </div>
            :
            <div className="w-100 d-flex justify-content-center my-3">
              <Button style={{ opacity: 0.3 }} disabled={true} text="SIGNUP" />
            </div>
          }

          <div
            className={`w-100 d-flex flex-column align-items-center justify-content-center my-3 ${styles.signup__otherOption}`}
          >
            <p>Or connect with</p>
            <section>
              <img src={facebook} width="40" />
              <img src={googleplus} width="40" />
            </section>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </section>
      <div className="mt-3">
        <Footer />
      </div>
    </div>
  );
};

const StoreForm = ({
  registerValue,
  setRegisterValue,
  sportsValue,
  setSportsValue,
  sportsValueId,
  setSportsValueId,
  allSports,
  colorValue,
  setColorValue,
  colorValueName,
  setColorValueName,
  colorValueCode,
  setColorValueCode,
  handleForm,
  setUsername,
  setEmail,
  setPhoneNumber,
  setPassword,
  setAddress,
  setGovId,
  setTaxId,
  setDob,
  genderValue,
  setGenderValue,
  termsConditionModal,
  setTermsConditionModal,
  termsConditionCheck,
  setTermsConditionCheck,
  termsCondition,
}) => {

  let getcolors = colorValue?.map(val => val.name);
  let getcolorCode = colorValue?.map(val => val.code);
  return (
    <div className={`${styles.auth}`}>
      <section className={styles.auth__logo}>
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </section>
      <section className={`container mt-3 p-4 ${styles.auth__modal}`}>
        <div>
          <Heading text="SIGNUP" style={{ alignItems: "center" }} />
        </div>

        <form onSubmit={handleForm}>
          <div className="d-flex w-100 my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Username"} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="w-100 mx-2">
              <InputField placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="d-flex w-100 my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Phone Number"} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div className="w-100 mx-2">
              <InputField placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          {/* <div className="w-100 d-flex  my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Address"} onChange={(e) => setAddress(e.target.value)} />
            </div>
          </div> */}
          <div className="w-100 d-flex my-3">
            <div className=" w-100 mx-2">
              <DropDown
                onClick={(e) => setRegisterValue(e.target.value)}
                dropdownValue={registerValue}
                options={[
                  "player",
                  "coach",
                  "facility",
                  "parent",
                  "team",
                  "store",
                ]}
                placeholder="Register As"
                style={{ margin: 0 }}
              />
            </div>

            <div className={`w-100 mx-2 ${styles.auth__datepicker} `}>
              <InputField placeholder={"Government ID"} onChange={(e) => setGovId(e.target.value)} />
            </div>
          </div>
          <div className="w-100 d-flex my-3">
            <div className=" w-100 mx-2">
              <DropDown
                onClick={(e) => { setColorValueName(e.target.options[e.target.selectedIndex].text); setColorValueCode(e.target.value) }}
                // onClick={(e) => console.log('setColorValueCode', e.target.value)}
                values={getcolorCode}
                options={getcolors}
                placeholder={colorValueName ? colorValueName : "Select Color"}
                style={{ margin: 0 }}
              />
            </div>

            <div className="w-100 mx-2">
              <InputField placeholder={"Tax ID"} onChange={(e) => setTaxId(e.target.value)} />
            </div>
          </div>
          <div className="w-100 d-flex justify-content-center my-3">
            <Checkbox onChange={() => { setTermsConditionCheck(!termsConditionCheck); setTermsConditionModal(true) }} checked={termsConditionCheck}>TERMS AND CONDITIONS</Checkbox>
          </div>
          <Modal title="TERMS AND CONDITIONS" visible={termsConditionModal} onOk={() => setTermsConditionModal(false)} onCancel={() => setTermsConditionModal(false)}>
            <div className="my-3">
              <Heading
                text={"TERMS AND CONDITIONS"}
                style={{ alignItems: "center" }}
              />
            </div>
            <div>
              <text>{termsCondition}</text>
            </div>
          </Modal>
          {termsConditionCheck ?
            <div className="w-100 d-flex justify-content-center my-3">
              <Button text="SIGNUP" />
            </div>
            :
            <div className="w-100 d-flex justify-content-center my-3">
              <Button style={{ opacity: 0.3 }} disabled={true} text="SIGNUP" />
            </div>
          }

          <div
            className={`w-100 d-flex flex-column align-items-center justify-content-center my-3 ${styles.signup__otherOption}`}
          >
            <p>Or connect with</p>
            <section>
              <img src={facebook} width="40" />
              <img src={googleplus} width="40" />
            </section>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </section>
      <div className="mt-3">
        <Footer />
      </div>
    </div>
  );
};

const TeamForm = ({
  registerValue,
  setRegisterValue,
  sportsValue,
  setSportsValue,
  sportsValueId,
  setSportsValueId,
  allSports,
  colorValue,
  setColorValue,
  colorValueName,
  setColorValueName,
  colorValueCode,
  setColorValueCode,
  handleForm,
  setUsername,
  setEmail,
  setPhoneNumber,
  setPassword,
  setAddress,
  setGovId,
  setTaxId,
  setDob,
  genderValue,
  setGenderValue,
  termsConditionModal,
  setTermsConditionModal,
  termsConditionCheck,
  setTermsConditionCheck,
  termsCondition,
}) => {
  let sportValues = allSports?.map(val => val.id);
  let sportOptions = allSports?.map(val => val.sportname);

  let getcolors = colorValue?.map(val => val.name);
  let getcolorCode = colorValue?.map(val => val.code);
  return (
    <div className={`${styles.auth}`}>
      <section className={styles.auth__logo}>
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </section>
      <section className={`container mt-3 p-4 ${styles.auth__modal}`}>
        <div>
          <Heading text="SIGNUP" style={{ alignItems: "center" }} />
        </div>

        <form onSubmit={handleForm}>
          <div className="d-flex w-100 my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Username"} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="w-100 mx-2">
              <InputField placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="d-flex w-100 my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Phone Number"} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div className="w-100 mx-2">
              <InputField placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="w-100 d-flex  my-3">
            <div className="w-100 mx-2">
              <InputField placeholder={"Address"} onChange={(e) => setAddress(e.target.value)} />
            </div>
          </div>
          <div className="w-100 d-flex my-3">
            <div className=" w-100 mx-2">
              <DropDown
                onClick={(e) => setRegisterValue(e.target.value)}
                dropdownValue={registerValue}
                options={[
                  "player",
                  "coach",
                  "facility",
                  "parent",
                  "team",
                  "store",
                ]}
                placeholder="Register As"
                style={{ margin: 0 }}
              />
            </div>

            <div className="w-100 mx-2">
              <DropDown
                onClick={(e) => { setSportsValue(e.target.options[e.target.selectedIndex].text); setSportsValueId(e.target.value) }}
                // dropdownValue={sportsValue}
                values={sportValues}
                options={sportOptions}

                placeholder={sportsValue ? sportsValue : "Select Sport Type"}
                style={{ margin: 0 }}
              />
            </div>
          </div>
          <div className="w-100 d-flex  my-3">
            <DropDown
              onClick={(e) => { setColorValueName(e.target.options[e.target.selectedIndex].text); setColorValueCode(e.target.value) }}
              // onClick={(e) => console.log('setColorValueCode', e.target.value)}
              values={getcolorCode}
              options={getcolors}
              placeholder={colorValueName ? colorValueName : "Select Color"}
              style={{ margin: 0 }}
            />
          </div>
          <div className="w-100 d-flex justify-content-center my-3">
            <Checkbox onChange={() => { setTermsConditionCheck(!termsConditionCheck); setTermsConditionModal(true) }} checked={termsConditionCheck}>TERMS AND CONDITIONS</Checkbox>
          </div>
          <Modal title="TERMS AND CONDITIONS" visible={termsConditionModal} onOk={() => setTermsConditionModal(false)} onCancel={() => setTermsConditionModal(false)}>
            <div className="my-3">
              <Heading
                text={"TERMS AND CONDITIONS"}
                style={{ alignItems: "center" }}
              />
            </div>
            <div>
              <text>{termsCondition}</text>
            </div>
          </Modal>
          {termsConditionCheck ?
            <div className="w-100 d-flex justify-content-center my-3">
              <Button text="SIGNUP" />
            </div>
            :
            <div className="w-100 d-flex justify-content-center my-3">
              <Button style={{ opacity: 0.3 }} disabled={true} text="SIGNUP" />
            </div>
          }

          <div
            className={`w-100 d-flex flex-column align-items-center justify-content-center my-3 ${styles.signup__otherOption}`}
          >
            <p>Or connect with</p>
            <section>
              <img src={facebook} width="40" />
              <img src={googleplus} width="40" />
            </section>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </section>
      <div className="mt-3">
        <Footer />
      </div>
    </div>
  );
};
export default Signup;
