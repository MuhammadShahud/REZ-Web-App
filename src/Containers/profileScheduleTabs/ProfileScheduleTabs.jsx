import React from "react";
import { Button } from "../../Components";

import styles from "./ProfileScheduleTabs.module.css";

const ProfileScheduleTabs = ({
  lessonToggler,
  clinicsToggler,
  trainingToggler,
  eventToggler,
  productsToggler,
  setlessonToggler,
  setClinicsToggler,
  setTrainingToggler,
  setEventToggler,
  setProductsToggler,
  userRole,
}) => {
  return (
    <div className={`d-flex  my-3   mx-auto ${styles.profile__tabs}`}>
      <Button
        text="ACTIVITY"
        style={
          trainingToggler
            ? {}
            : { background: "var( --profile-btn)", color: "black" }
        }
        onClick={() => {
          setlessonToggler(false);
          setClinicsToggler(false);
          setTrainingToggler(true);
          setEventToggler(false);
          setProductsToggler(false);
        }}
      />
      <Button
        text="EVENT"
        style={
          eventToggler
            ? {}
            : { background: "var( --profile-btn)", color: "black" }
        }
        onClick={() => {
          setlessonToggler(false);
          setClinicsToggler(false);
          setTrainingToggler(false);
          setEventToggler(true);
          setProductsToggler(false);
        }}
      />
      <Button
        text="LESSONS"
        style={
          lessonToggler
            ? {}
            : { background: "var( --profile-btn)", color: "black" }
        }
        onClick={() => {
          setlessonToggler(true);
          setClinicsToggler(false);
          setTrainingToggler(false);
          setEventToggler(false);
          setProductsToggler(false);
        }}
      />
      <Button
        text="CLINICS"
        style={
          clinicsToggler
            ? {}
            : { background: "var( --profile-btn)", color: "black" }
        }
        onClick={() => {
          setlessonToggler(false);
          setClinicsToggler(true);
          setTrainingToggler(false);
          setEventToggler(false);
          setProductsToggler(false);
        }}
      />

      
        <Button
          text="PRODUCTS"
          style={
            productsToggler
              ? {}
              : { background: "var( --profile-btn)", color: "black" }
          }
          onClick={() => {
            setlessonToggler(false);
            setClinicsToggler(false);
            setTrainingToggler(false);
            setEventToggler(false);
            setProductsToggler(true);
          }}
        />
     
    </div>
  );
};

export default ProfileScheduleTabs;
