import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  Button,
  Heading,
  InputField,
  RezNavbar,
  DropDown,
} from "../../Components";

import styles from "./EditProfile.module.css";
import User1 from "../../Assets/profile-img.jpg";
import { Footer } from "../../Containers";

const EditProfile = () => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("user")));
  const [editBtn, setEditBtn] = useState(true);
  return (
    <div>
      <RezNavbar style={{ background: "var(--gradient-bg)" }} />

      <section className="my-3 ">
        <Heading
          text={editBtn ? "Profile" : "EDIT PROFILE"}
          style={{ alignItems: "center" }}
        />
      </section>

      <section className="container" style={{ minHeight: "700px" }}>
        <Row className="m-0 d-flex">
          <Col md="5">
            <div className={styles.editProfile__logoWrapper}>
              <img src={User1} alt="" />
              <h4>John Legend</h4>
              {editBtn ? (
                <Button
                  onClick={() => {
                    setEditBtn(false);
                  }}
                  text="EDIT PROFILE"
                />
              ) : (
                <Button
                  // onClick={() => {
                  //   setEditBtn(false);
                  // }}
                  text="UPLOAD IMAGE"
                />
              )}
            </div>
          </Col>
          <Col md="7">
            {auth && auth[0]?.user && auth[0].userRole === "facility" ? (
              <FacilityUserForm setEditBtn={setEditBtn} editBtn={editBtn} />
            ) : (
              <>
                {auth && auth[0]?.user && auth[0].userRole === "player" ? (
                  <PlayerUserForm setEditBtn={setEditBtn} editBtn={editBtn} />
                ) : (
                  <>
                    {auth && auth[0]?.user && auth[0].userRole === "coach" ? (
                      <CoachUserForm
                        setEditBtn={setEditBtn}
                        editBtn={editBtn}
                      />
                    ) : (
                      <>
                        {auth &&
                        auth[0]?.user &&
                        auth[0].userRole === "parent" ? (
                          <ParentUserForm
                            setEditBtn={setEditBtn}
                            editBtn={editBtn}
                          />
                        ) : (
                          <>
                            {auth &&
                            auth[0]?.user &&
                            auth[0].userRole === "store" ? (
                              <StoreUserForm
                                setEditBtn={setEditBtn}
                                editBtn={editBtn}
                              />
                            ) : (
                              <>
                                {auth &&
                                auth[0]?.user &&
                                auth[0].userRole === "team" ? (
                                  <TeamUserForm
                                    setEditBtn={setEditBtn}
                                    editBtn={editBtn}
                                  />
                                ) : (
                                  <>
                                    <StaffUserForm
                                      setEditBtn={setEditBtn}
                                      editBtn={editBtn}
                                    />
                                  </>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </Col>
        </Row>
      </section>
      <Footer />
    </div>
  );
};

// const UserDetailsForm = ({ editBtn, setEditBtn }) => {

//   return (

//     <div>
//       {auth && auth[0]?.user && auth[0].userRole === "facility" ?
//       <FacilityUserForm/>
//         :
//         <PlayerUserForm />
//       }

//     </div>
//   );
// };

const EditInputField = ({ editBtn, value }) => {
  return (
    <InputField
      style={editBtn ? { background: "none" } : {}}
      value={value}
      disabled={editBtn && true}
    />
  );
};
// const DropdownInputField = ({ editBtn, value, options }) => {
//   return (
//     <DropDown
//       style={editBtn ? { background: "none" } : {}}
//       value={value}
//       options={options={"Male"}}
//       disabled={editBtn && true}
//     />
//   );
// };
const CoachUserForm = ({ editBtn, setEditBtn }) => {
  return (
    <div className={styles.editProfile__detailsWrapper}>
      <table>
        <tbody>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>User Name</td>
            <td>
              <EditInputField editBtn={editBtn} value={"Cruise"} />
            </td>
          </tr>

          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Gender</td>

            <td>
              <EditInputField editBtn={editBtn} value={"Male"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Birthday</td>

            <td>
              <EditInputField editBtn={editBtn} value={"Jun 19 1999"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Email</td>

            <td>
              <EditInputField editBtn={editBtn} value={"Steve@gmail.com"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Phone Number</td>
            <td>
              <EditInputField editBtn={editBtn} value={"+12345678944"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Address</td>
            <td>
              <EditInputField
                editBtn={editBtn}
                value={"House Number 192 St NY United State"}
              />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Description</td>
            <td>
              <EditInputField editBtn={editBtn} value={"abc"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Government ID</td>
            <td>
              <EditInputField editBtn={editBtn} value={"0001"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Color</td>
            <td>
              <EditInputField editBtn={editBtn} value={"0001"} />
            </td>
          </tr>
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
         <td>Select Sport Type</td>
         <td>
           <EditInputField
             editBtn={editBtn}
             value={" UEFA Champions League"}
           />
         </td>
       </tr> */}
        </tbody>
      </table>
      {!editBtn ? (
        <div className={styles.editProfile__editbtn}>
          <Button text="SAVE" />
          <Button
            text="CANCEL"
            style={{ background: "var(--para-text)" }}
            onClick={() => {
              setEditBtn(true);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};
const FacilityUserForm = ({ editBtn, setEditBtn }) => {
  return (
    <div className={styles.editProfile__detailsWrapper}>
      <table>
        <tbody>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>User Name</td>

            <td>
              <EditInputField editBtn={editBtn} value={"Bob123"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Email</td>

            <td>
              <EditInputField editBtn={editBtn} value={"Bob123@gmail.com"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Phone Number</td>
            <td>
              <EditInputField editBtn={editBtn} value={"+12345678944"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Address</td>
            <td>
              <EditInputField
                editBtn={editBtn}
                value={"House Number 192 St NY United State"}
              />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Detail</td>
            <td>
              <EditInputField editBtn={editBtn} value={"Detail"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Government ID</td>
            <td>
              <EditInputField editBtn={editBtn} value={"0001"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Tax ID</td>
            <td>
              <EditInputField editBtn={editBtn} value={"0001"} />
            </td>
          </tr>
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Select Sport Type</td>
            <td>
              <EditInputField
                editBtn={editBtn}
                value={" UEFA Champions League"}
              />
            </td>
          </tr> */}
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Color</td>
            <td>
              <EditInputField editBtn={editBtn} value={"#000"} />
            </td>
          </tr>
        </tbody>
      </table>
      {!editBtn ? (
        <div className={styles.editProfile__editbtn}>
          <Button text="SAVE" />
          <Button
            text="CANCEL"
            style={{ background: "var(--para-text)" }}
            onClick={() => {
              setEditBtn(true);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};
const PlayerUserForm = ({ editBtn, setEditBtn }) => {
  return (
    <div className={styles.editProfile__detailsWrapper}>
      <table>
        <tbody>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>User Name</td>

            <td>
              <EditInputField editBtn={editBtn} value={"Hoyt"} />
            </td>
          </tr>
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Gender</td>
            <td>
            <DropdownInputField
            editBtn={editBtn}
            options={"Male, Female, Others"}
            value={"Gender"}
                style={{
                  border: "1px solid var(--light-grey)",
                  background: "white",
                }}/>
              
            </td>
          </tr> */}
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Gender</td>
            <td>
              <EditInputField editBtn={editBtn} value={"Female"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Birthday</td>
            <td>
              <EditInputField editBtn={editBtn} value={"jun 16 1996"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Email</td>
            <td>
              <EditInputField editBtn={editBtn} value={"Sarah46@gmail.com"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Contact</td>
            <td>
              <EditInputField editBtn={editBtn} value={"12323445555"} />
            </td>
          </tr>
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Select Sport Type</td>
            <td>
              <EditInputField
                editBtn={editBtn}
                value={" UEFA Champions League"}
              />
            </td>
          </tr> */}
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Address</td>
            <td>
              <EditInputField editBtn={editBtn} value={"New york"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Level</td>
            <td>
              <EditInputField editBtn={editBtn} value={"Beginner"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Government ID</td>
            <td>
              <EditInputField editBtn={editBtn} value={"0001"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Color</td>
            <td>
              <EditInputField editBtn={editBtn} value={"0000"} />
            </td>
          </tr>
        </tbody>
      </table>
      {!editBtn ? (
        <div className={styles.editProfile__editbtn}>
          <Button text="SAVE" />
          <Button
            text="CANCEL"
            style={{ background: "var(--para-text)" }}
            onClick={() => {
              setEditBtn(true);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};
const ParentUserForm = ({ editBtn, setEditBtn }) => {
  return (
    <div className={styles.editProfile__detailsWrapper}>
      <table>
        <tbody>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>User Name</td>

            <td>
              <EditInputField editBtn={editBtn} value={"Thomson"} />
            </td>
          </tr>
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
          <td>Gender</td>
          <td>
          <DropdownInputField
          editBtn={editBtn}
          options={"Male, Female, Others"}
          value={"Gender"}
              style={{
                border: "1px solid var(--light-grey)",
                background: "white",
              }}/>
            
          </td>
        </tr> */}
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Gender</td>
            <td>
              <EditInputField editBtn={editBtn} value={"Female"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Birthday</td>
            <td>
              <EditInputField editBtn={editBtn} value={"jun 16 1996"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Email</td>
            <td>
              <EditInputField editBtn={editBtn} value={"Sarah46@gmail.com"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Contact</td>
            <td>
              <EditInputField editBtn={editBtn} value={"12323445555"} />
            </td>
          </tr>
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
          <td>Select Sport Type</td>
          <td>
            <EditInputField
              editBtn={editBtn}
              value={" UEFA Champions League"}
            />
          </td>
        </tr> */}
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Address</td>
            <td>
              <EditInputField editBtn={editBtn} value={"New york"} />
            </td>
          </tr>
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
          <td>Level</td>
          <td>
            <EditInputField editBtn={editBtn} value={"Beginner"} />
          </td>
        </tr> */}
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Goverment ID</td>
            <td>
              <EditInputField editBtn={editBtn} value={"0001"} />
            </td>
          </tr> */}
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Color</td>
            <td>
              <EditInputField editBtn={editBtn} value={"0000"} />
            </td>
          </tr>
        </tbody>
      </table>
      {!editBtn ? (
        <div className={styles.editProfile__editbtn}>
          <Button text="SAVE" />
          <Button
            text="CANCEL"
            style={{ background: "var(--para-text)" }}
            onClick={() => {
              setEditBtn(true);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};
const StaffUserForm = ({ editBtn, setEditBtn }) => {
  return (
    <div className={styles.editProfile__detailsWrapper}>
      <table>
        <tbody>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>User Name</td>

            <td>
              <EditInputField editBtn={editBtn} value={"James Carter"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Email</td>
            <td>
              <EditInputField editBtn={editBtn} value={"Sarah46@gmail.com"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Contact</td>
            <td>
              <EditInputField editBtn={editBtn} value={"12323445555"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Color</td>
            <td>
              <EditInputField editBtn={editBtn} value={"000"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Address</td>
            <td>
              <EditInputField editBtn={editBtn} value={"New york"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Government ID</td>
            <td>
              <EditInputField editBtn={editBtn} value={"0001"} />
            </td>
          </tr>
        </tbody>
      </table>
      {!editBtn ? (
        <div className={styles.editProfile__editbtn}>
          <Button text="SAVE" />
          <Button
            text="CANCEL"
            style={{ background: "var(--para-text)" }}
            onClick={() => {
              setEditBtn(true);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};
const StoreUserForm = ({ editBtn, setEditBtn }) => {
  return (
    <div className={styles.editProfile__detailsWrapper}>
      <table>
        <tbody>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>User Name</td>

            <td>
              <EditInputField editBtn={editBtn} value={"Thomson"} />
            </td>
          </tr>
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
          <td>Gender</td>
          <td>
          <DropdownInputField
          editBtn={editBtn}
          options={"Male, Female, Others"}
          value={"Gender"}
              style={{
                border: "1px solid var(--light-grey)",
                background: "white",
              }}/>
            
          </td>
        </tr> */}
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
          <td>Gender</td>
          <td>
            <EditInputField editBtn={editBtn} value={"Female"} />
          </td>
        </tr>
        <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
          <td>Birthday</td>
          <td>
            <EditInputField
              editBtn={editBtn}
              value={"jun 16 1996"}
            />
          </td>
        </tr> */}
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Email</td>
            <td>
              <EditInputField editBtn={editBtn} value={"Sarah46@gmail.com"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Contact</td>
            <td>
              <EditInputField editBtn={editBtn} value={"12323445555"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Government ID</td>
            <td>
              <EditInputField editBtn={editBtn} value={"0001"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Tax ID</td>
            <td>
              <EditInputField editBtn={editBtn} value={"0001"} />
            </td>
          </tr>
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
          <td>Select Sport Type</td>
          <td>
            <EditInputField
              editBtn={editBtn}
              value={" UEFA Champions League"}
            />
          </td>
        </tr> */}
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
          <td>Address</td>
          <td>
            <EditInputField editBtn={editBtn} value={"New york"} />
          </td>
        </tr> */}
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
          <td>Level</td>
          <td>
            <EditInputField editBtn={editBtn} value={"Beginner"} />
          </td>
        </tr> */}
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Goverment ID</td>
            <td>
              <EditInputField editBtn={editBtn} value={"0001"} />
            </td>
          </tr> */}
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Color</td>
            <td>
              <EditInputField editBtn={editBtn} value={"0000"} />
            </td>
          </tr> */}
        </tbody>
      </table>
      {!editBtn ? (
        <div className={styles.editProfile__editbtn}>
          <Button text="SAVE" />
          <Button
            text="CANCEL"
            style={{ background: "var(--para-text)" }}
            onClick={() => {
              setEditBtn(true);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};
const TeamUserForm = ({ editBtn, setEditBtn }) => {
  return (
    <div className={styles.editProfile__detailsWrapper}>
      <table>
        <tbody>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Team Name</td>

            <td>
              <EditInputField editBtn={editBtn} value={"FC"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Categories</td>
            <td>
              <EditInputField editBtn={editBtn} value={"Gym"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Level</td>
            <td>
              <EditInputField editBtn={editBtn} value={"abc"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Email</td>
            <td>
              <EditInputField editBtn={editBtn} value={"fc@gmail.com"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Description</td>
            <td>
              <EditInputField editBtn={editBtn} value={"Football Team"} />
            </td>
          </tr>
          <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Color</td>
            <td>
              <EditInputField editBtn={editBtn} value={"0001"} />
            </td>
          </tr>
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
          <td>Select Sport Type</td>
          <td>
            <EditInputField
              editBtn={editBtn}
              value={" UEFA Champions League"}
            />
          </td>
        </tr> */}
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
          <td>Address</td>
          <td>
            <EditInputField editBtn={editBtn} value={"New york"} />
          </td>
        </tr> */}
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
          <td>Level</td>
          <td>
            <EditInputField editBtn={editBtn} value={"Beginner"} />
          </td>
        </tr> */}
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Goverment ID</td>
            <td>
              <EditInputField editBtn={editBtn} value={"0001"} />
            </td>
          </tr> */}
          {/* <tr style={editBtn ? {} : { backgroundColor: "transparent" }}>
            <td>Color</td>
            <td>
              <EditInputField editBtn={editBtn} value={"0000"} />
            </td>
          </tr> */}
        </tbody>
      </table>
      {!editBtn ? (
        <div className={styles.editProfile__editbtn}>
          <Button text="SAVE" />
          <Button
            text="CANCEL"
            style={{ background: "var(--para-text)" }}
            onClick={() => {
              setEditBtn(true);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default EditProfile;
