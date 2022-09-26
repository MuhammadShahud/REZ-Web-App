import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  BottomSilder,
  ClubBanner,
  Coaches,
  HomeFacilities,
  Footer,
  Header,
  Highlights,
  JoinForm,
  MemberShip,
  Store,
} from "../../Containers";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const history = useHistory();

  useEffect(() => {
    if (user && user[0].user) {
      return history.push("/highlight");
    }
  }, []);
  return (
    <div style={{ backgroundColor: "#fcfcfd", minHeight: "100vh" }}>
      <Header />
      <JoinForm />
      <Coaches />
      <Highlights />
      <Store />
      <MemberShip />
      <ClubBanner />
      <HomeFacilities />
      <BottomSilder />
      <Footer />
    </div>
  );
};

export default Home;
