import React, { useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import Profile from "../../Assets/profile-img-1.jpg";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("user")));
  const history = useHistory();
  return (
    <div className={`dropdown`}>
      <a
        className={`btn btn-secondary dropdown-toggle ${styles.profileDrop}`}
        href="#"
        //   role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        Johndoe ({" "}
        {auth[0].userRole.charAt(0).toUpperCase() + auth[0].userRole.slice(1)} )
        {auth[0].userRole === "store" ? null : <BsArrowDownShort size={20} />}
      </a>
      <img
        style={{ margin: "0 5px", cursor: "pointer" }}
        onClick={() => history.push("/profile")}
        src={Profile}
        width="30"
        alt=""
      />
      {/* <PlayerUserMenu /> */}
      {auth && auth[0]?.user && auth[0].userRole === "player" && (
        <PlayerUserMenu />
      )}
      {auth && auth[0]?.user && auth[0].userRole === "facility" && (
        <FacilitiesUserMenu />
      )}
      {auth && auth[0]?.user && auth[0].userRole === "coach" && (
        <CoachUserMenu />
      )}
      {auth && auth[0]?.user && auth[0].userRole === "team" && <TeamUserMenu />}
      {auth && auth[0]?.user && auth[0].userRole === "parent" && (
        <ParentUserMenu />
      )}
      {auth && auth[0]?.user && auth[0].userRole === "staff" && (
        <StaffUserMenu />
      )}
      {/* {auth && auth[0]?.user && auth[0].userRole === "store" && (
        <StoreUserMenu />
      )} */}
    </div>
  );
};
const StaffUserMenu = () => {
  const history = useHistory();
  return (
    <div
      className={`${styles.dropDown__list} dropdown-menu dropdown-menu-right`}
      aria-labelledby="dropdownMenuLink"
    >
      <Link className="dropdown-item" to="/membership">
        Membership
      </Link>
      <Link className="dropdown-item" to="/history">
        History
      </Link>
      <Link className="dropdown-item" to="/classeshistory">
        E-Classes
      </Link>
      <Link className="dropdown-item" to="/event">
        Events
      </Link>
      <Link className="dropdown-item" to="./contactus">
        Contact Us
      </Link>
      <Link className="dropdown-item" to="/help">
        Help
      </Link>
      <Link className="dropdown-item" to="/notification">
        Notification
      </Link>
      <Link className="dropdown-item" to="/privacypolicy">
        Privacy Policy
      </Link>
      <Link className="dropdown-item" to="/termsandconditions">
        Terms & Condition
      </Link>
      <Link className="dropdown-item" to="/invitefriend">
        Invite
      </Link>
      <Link
        onClick={() => {
          localStorage.removeItem("user");
          history.replace("/login");
        }}
        className="dropdown-item"
        to="#"
      >
        Logout
      </Link>
    </div>
  );
};

const FacilitiesUserMenu = () => {
  const history = useHistory();
  return (
    <div
      className={`${styles.dropDown__list} dropdown-menu dropdown-menu-right`}
      aria-labelledby="dropdownMenuLink"
    >
      <Link className="dropdown-item" to="/membership">
        Membership
      </Link>
      <Link className="dropdown-item" to="/contractsandpackages">
        Packages
      </Link>
      <Link className="dropdown-item" to="/orderhistory">
        Order History
      </Link>
      <Link className="dropdown-item" to="/bookinghistory">
        Booking History
      </Link>
      <Link className="dropdown-item" to="/rooms">
        Rooms
      </Link>
      <Link className="dropdown-item" to="/classeshistory">
        E-Classes History
      </Link>
      <Link className="dropdown-item" to="/event">
        Events
      </Link>
      <Link className="dropdown-item" to="/myevents">
        My Events
      </Link>
      <Link className="dropdown-item" to="/calendar">
        Create League
      </Link>
      <Link className="dropdown-item" to="/myStaff">
        My Staff
      </Link>
      <Link className="dropdown-item" to="./contactus">
        Contact Us
      </Link>
      <Link className="dropdown-item" to="/help">
        Help
      </Link>
      <Link className="dropdown-item" to="/notification">
        Notification
      </Link>
      <Link className="dropdown-item" to="/privacypolicy">
        Privacy Policy
      </Link>
      <Link className="dropdown-item" to="/termsandconditions">
        Terms & Condition
      </Link>
      <Link className="dropdown-item" to="/invitefriend">
        Invite
      </Link>
      <Link
        onClick={() => {
          // localStorage.removeItem("user",'Token','Role','persist:persistData');
          history.replace("/login");
        }}
        className="dropdown-item"
        to="#"
      >
        Logout
      </Link>
    </div>
  );
};

const PlayerUserMenu = () => {
  const history = useHistory();
  return (
    <div
      className={`${styles.dropDown__list} dropdown-menu dropdown-menu-right`}
      aria-labelledby="dropdownMenuLink"
    >
      <Link className="dropdown-item" to="/membership">
        Membership
      </Link>
      <Link className="dropdown-item" to="/history">
        History
      </Link>
      <Link className="dropdown-item" to="/classeshistory">
        E-Classes History
      </Link>
      <Link className="dropdown-item" to="/event">
        Events
      </Link>
      <Link className="dropdown-item" to="./contactus">
        Contact Us
      </Link>
      <Link className="dropdown-item" to="/help">
        Help
      </Link>
      <Link className="dropdown-item" to="/notification">
        Notification
      </Link>
      <Link className="dropdown-item" to="/privacypolicy">
        Privacy Policy
      </Link>
      <Link className="dropdown-item" to="/termsandconditions">
        Terms & Condition
      </Link>
      <Link className="dropdown-item" to="/invitefriend">
        Invite
      </Link>
      <Link
        onClick={() => {
          // localStorage.removeItem("user");
          localStorage.removeItem("user");
          localStorage.removeItem("Token");
          localStorage.removeItem('Role');
          localStorage.removeItem('persist:persistData');
          history.replace("/login");
        }}
        className="dropdown-item"
        to="#"
      >
        Logout
      </Link>
    </div>
  );
};

const CoachUserMenu = () => {
  const history = useHistory();
  return (
    <div
      className={`${styles.dropDown__list} dropdown-menu dropdown-menu-right`}
      aria-labelledby="dropdownMenuLink"
    >
      <Link className="dropdown-item" to="/membership">
        Membership
      </Link>
      <Link className="dropdown-item" to="/bookinghistory">
        Booking History
      </Link>
      <Link className="dropdown-item" to="/orderhistory">
        Order History
      </Link>
      <Link className="dropdown-item" to="/createschedule">
        Add To Schedule
      </Link>
      <Link className="dropdown-item" to="/rating">
        Reviews
      </Link>
      <Link className="dropdown-item" to="/classeshistory">
        E-Classes History
      </Link>
      <Link className="dropdown-item" to="./contactus">
        Contact Us
      </Link>
      <Link className="dropdown-item" to="/help">
        Help
      </Link>
      <Link className="dropdown-item" to="/notification">
        Notification
      </Link>
      <Link className="dropdown-item" to="/privacypolicy">
        Privacy Policy
      </Link>
      <Link className="dropdown-item" to="/termsandconditions">
        Terms & Condition
      </Link>
      <Link className="dropdown-item" to="/invitefriend">
        Invite
      </Link>
      <Link
        onClick={() => {
          localStorage.removeItem("user");
          history.replace("/login");
        }}
        className="dropdown-item"
        to="#"
      >
        Logout
      </Link>
    </div>
  );
};

const TeamUserMenu = () => {
  const history = useHistory();
  return (
    <div
      className={`${styles.dropDown__list} dropdown-menu dropdown-menu-right`}
      aria-labelledby="dropdownMenuLink"
    >
      <Link className="dropdown-item" to="/membership">
        Membership
      </Link>
      <Link className="dropdown-item" to="/history">
        History
      </Link>
      <Link className="dropdown-item" to="/classeshistory">
        E-Classes History
      </Link>
      <Link className="dropdown-item" to="/event">
        Events
      </Link>
      <Link className="dropdown-item" to="./contactus">
        Contact Us
      </Link>
      <Link className="dropdown-item" to="/help">
        Help
      </Link>
      <Link className="dropdown-item" to="/notification">
        Notification
      </Link>
      <Link className="dropdown-item" to="/privacypolicy">
        Privacy Policy
      </Link>
      <Link className="dropdown-item" to="/termsandconditions">
        Terms & Condition
      </Link>
      <Link className="dropdown-item" to="/invitefriend">
        Invite
      </Link>
      <Link
        onClick={() => {
          localStorage.removeItem("user");
          history.replace("/login");
        }}
        className="dropdown-item"
        to="#"
      >
        Logout
      </Link>
    </div>
  );
};

const ParentUserMenu = () => {
  const history = useHistory();
  return (
    <div
      className={`${styles.dropDown__list} dropdown-menu dropdown-menu-right`}
      aria-labelledby="dropdownMenuLink"
    >
      <Link className="dropdown-item" to="/membership">
        Membership
      </Link>
      <Link className="dropdown-item" to="/history">
        History
      </Link>
      <Link className="dropdown-item" to="/classeshistory">
        E-Classes History
      </Link>
      <Link className="dropdown-item" to="/event">
        Events
      </Link>
      <Link className="dropdown-item" to="./contactus">
        Contact Us
      </Link>
      <Link className="dropdown-item" to="/help">
        Help
      </Link>
      <Link className="dropdown-item" to="/notification">
        Notification
      </Link>
      <Link className="dropdown-item" to="/privacypolicy">
        Privacy Policy
      </Link>
      <Link className="dropdown-item" to="/termsandconditions">
        Terms & Condition
      </Link>
      <Link className="dropdown-item" to="/invitefriend">
        Invite
      </Link>
      <Link
        onClick={() => {
          localStorage.removeItem("user");
          history.replace("/login");
        }}
        className="dropdown-item"
        to="#"
      >
        Logout
      </Link>
    </div>
  );
};

// const StoreUserMenu = () => {
//   const history = useHistory();
//   return (
//     <div
//       className={`${styles.dropDown__list} dropdown-menu dropdown-menu-right`}
//       aria-labelledby="dropdownMenuLink"
//     >
//       <Link className="dropdown-item" to="/membership">
//         Membership
//       </Link>
//       <Link className="dropdown-item" to="/history">
//         History
//       </Link>
//       <Link className="dropdown-item" to="./contactus">
//         Contact Us
//       </Link>
//       <Link className="dropdown-item" to="/help">
//         Help
//       </Link>
//       <Link className="dropdown-item" to="/notification">
//         Notification
//       </Link>
//       <Link className="dropdown-item" to="/privacypolicy">
//         Privacy Policy
//       </Link>
//       <Link className="dropdown-item" to="/termsandconditions">
//         Terms & Condition
//       </Link>
//       <Link
//         onClick={() => {
//           localStorage.removeItem("user");
//           history.replace("/login");
//         }}
//         className="dropdown-item"
//         to="#"
//       >
//         Logout
//       </Link>
//     </div>
//   );
// };
export default UserMenu;
