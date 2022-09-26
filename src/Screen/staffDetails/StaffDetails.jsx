import { Container } from "react-bootstrap";
import { Button, Heading, RezNavbar } from "../../Components";
import profileImg from "../../Assets/profile-img.jpg";
import classes from "./StaffDetails.module.css";
import * as React from "react";
import Switch from "@mui/material/Switch";
import { Footer } from "../../Containers";
import { useHistory } from "react-router-dom";

const manageAccess = [
  {
    name: "E-Class",
  },
  {
    name: "Store",
  },
  {
    name: "League",
  },
  {
    name: "Schedule Type: Training",
  },
  {
    name: "Schedule Type: Event",
  },
  {
    name: "Schedule Type: Lesson",
  },
  {
    name: "Schedule Type: Clinic",
  },
];

const StaffDetails = () => {
  const [checked, setChecked] = React.useState(true);
  const history = useHistory();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div>
      <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
      <div className="my-3">
        <Heading text={"STAFF DETAILS"} style={{ alignItems: "center" }} />
      </div>
      <Container>
        <div className={classes.staffDetails__mainDiv}>
          <div className={classes.staffDetails__detTop}>
            <div className={classes.staffDetails__img}>
              <img src={profileImg} />
            </div>
            <div className={classes.staffDetails__staffName}>
              <h2>Staff Name Here</h2>
              <p>Football Trainee</p>
              <div className={classes.staffDetails__btns}>
                <Button
                  text="Order History"
                  onClick={() => {
                    history.push("/orderlist");
                  }}
                />
                <Button text="Booking History" />
              </div>
            </div>
          </div>
          <div className={classes.staffDetails__basicInfo}>
            <h1>Basic Information</h1>
            <span className={classes.staffDetails__info}>
              <h6>Email:</h6>
              <p>staffmailhere@gmail.com</p>
            </span>
            <span className={classes.staffDetails__info}>
              <h6>Contact:</h6>
              <p>+1234 5678 91</p>
            </span>
            <span className={classes.staffDetails__info}>
              <h6>Address:</h6>
              <p>19 Dundat st, Albany</p>
            </span>
            <span className={classes.staffDetails__info}>
              <h6>Goverment Id:</h6>
              <p>12345</p>
            </span>
            <span className={classes.staffDetails__info}>
              <h6>Tax Id:</h6>
              <p>1245</p>
            </span>
          </div>
          <div className={classes.staffDetails__manageAccess}>
            <h1>Manage Access</h1>
            <div className={classes.staffDetails__schAccess}>
              {manageAccess.map((access, index) => (
                <div className={classes.staffDetails__accessList} key={index}>
                  <div>
                    <h6>{access.name}</h6>
                  </div>
                  <div className={classes.staffDetails__schBoolean}>
                    <p>No</p>
                    <div className={classes.staffDetails__switch}>
                      <Switch
                        style={{ color: "#3acca7" }}
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <p>Yes</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default StaffDetails;
