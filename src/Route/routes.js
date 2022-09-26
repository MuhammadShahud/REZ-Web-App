import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { UserMenu } from "../Components";

import {
  AddCard,
  AddToCart,
  BookAppointment,
  BookingConfirmed,
  Calander,
  ChangePassword,
  Chat,
  ClassDetails,
  ClassesHistory,
  Coach,
  CoachDetails,
  CoachProfile,
  ContactUs,
  EClasses,
  EditProfile,
  Event,
  EventDetails,
  Facilities,
  FacilitiesDetails,
  Follow,
  ForgetPassword,
  Highlight,
  History,
  Home,
  InviteFriend,
  InviteFriends,
  LeagueHistory,
  Login,
  Membership,
  MeshCalendar,
  OrderList,
  Otp,
  Payment,
  Profile,
  Schedule,
  SelectAvailableTimeSlot,
  Signup,
  Store,
  StoreProductDetails,
  Notification,
  PrivacyPolicy,
  Appointments,
  Appointment,
  Cart,
  Leagues,
  Rooms,
  TermsAndConditions,
  UserProfile,
  UserSchedule,
  ChatGroup,
  Facility,
  Help,
  MyStaff,
  Rating,
  StaffDetails,
  SubRooms,
  SubRoomDetails,
  Teammates,
  MeshCalendarSlots,
  MyProduct,
  CreateSchedule,
  OrderSuccessfull,
  LeagueDetails,
  ContractsAndPackages,
  CreateContract,
  CreatePackage,
  Teams,
  TeamDetails,
  ModifyDetails,
  RoomDetails,
  MyEvents,
  Followers,
  Following,
  UserProfileSchedule,
  Tracking,
  OrderHistory,
  PageNotFound,
  TeamRoster,
  BookingHistory,
  CreatePass,
} from "../Screen";

import { AuthRoute, PlayerRoute, PrivateRoute } from "./PrivateRoute";
import { useSelector } from "react-redux";
const AppRoute = () => {
  const [user, setUser] = useState(false);

  const { userRole } = useSelector((state) => state.LoginReducers);

  //get user in localStorage
  const userLocalStorage = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    setUser(!user);
  }, [userRole]);
  console.log(userLocalStorage, "userLocalStorage");
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <AuthRoute path="/login" component={Login} />
      <AuthRoute component={Signup} path="/signup" />
      <AuthRoute component={ForgetPassword} path="/forgetpassword" />
      <AuthRoute component={Otp} path="/verify" />
      <AuthRoute component={ChangePassword} path="/changepassword" />
      <PrivateRoute component={Highlight} path="/highlight" />
      <PrivateRoute component={Cart} path="/addToCart" />
      <PrivateRoute component={BookAppointment} path="/bookappointment" />
      <PrivateRoute path="/bookingconfirmed" component={BookingConfirmed} />
      <PrivateRoute
        path="/selectAvailableTimeSlot"
        component={SelectAvailableTimeSlot}
      />
      <PrivateRoute path="/schedule" component={Schedule} />
      <PrivateRoute path="/calendar" component={Calander} />
      <PrivateRoute path="/contactus" component={ContactUs} />
      <PrivateRoute path="/addcard" component={AddCard} />
      <PrivateRoute path="/payment" component={Payment} />
      <PrivateRoute path="/store" component={Store} />
      <PrivateRoute path="/productdetails" component={StoreProductDetails} />
      <PrivateRoute path="/coach" component={Coach} />
      <PrivateRoute path="/coachprofile" component={CoachProfile} />
      <PrivateRoute path="/coachdetails" component={CoachDetails} />
      <PrivateRoute path="/follow" component={Follow} />
      <PrivateRoute path="/userMenu" component={UserMenu} />
      <PrivateRoute path="/eclasses" component={EClasses} />
      <PrivateRoute path="/classesdetails" component={ClassDetails} />
      <PrivateRoute path="/classeshistory" component={ClassesHistory} />
      <PrivateRoute path="/event" component={Event} />
      <PrivateRoute path="/eventdetails" component={EventDetails} />
      <PrivateRoute path="/myevents" component={MyEvents} />
      <PrivateRoute path="/facilities" component={Facilities} />
      <PrivateRoute path="/facilitiesdetails" component={FacilitiesDetails} />
      <PrivateRoute path="/invitefriend" component={InviteFriend} />
      <PrivateRoute path="/history" component={History} />
      <PrivateRoute path="/inviteFriends" component={InviteFriends} />
      <PrivateRoute path="/leagueHistory" component={LeagueHistory} />
      <PrivateRoute path="/leagues" component={Leagues} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/editprofile" component={EditProfile} />
      <PrivateRoute path="/userprofile/:id" component={UserProfile} />
      <PrivateRoute path="/userschedule" component={UserSchedule} />
      <PrivateRoute path="/orderlist" component={OrderList} />
      <PrivateRoute path="/myproduct" component={MyProduct} />
      <PrivateRoute
        path="/contractsandpackages"
        component={ContractsAndPackages}
      />
      <PrivateRoute path="/createcontract" component={CreateContract} />
      <PrivateRoute path="/createpackage" component={CreatePackage} />
      <PrivateRoute path="/chat" component={Chat} />
      <PrivateRoute path="/chatGroup" component={ChatGroup} />
      <PrivateRoute path="/rating" component={Rating} />
      <PrivateRoute path="/facility" component={Facility} />
      <PrivateRoute path="/help" component={Help} />
      <PrivateRoute path="/mystaff" component={MyStaff} />
      <PrivateRoute path="/rooms" component={Rooms} />
      <PrivateRoute path="/subrooms" component={SubRooms} />
      <PrivateRoute path="/subroomdetails" component={SubRoomDetails} />
      <PrivateRoute path="/notification" component={Notification} />
      <PrivateRoute path="/privacypolicy" component={PrivacyPolicy} />
      <PrivateRoute path="/termsandconditions" component={TermsAndConditions} />
      <PrivateRoute path="/appointments" component={Appointments} />
      <PrivateRoute path="/appointment" component={Appointment} />
      <PrivateRoute path="/cartsummary" component={Cart} />
      <PrivateRoute path="/membership" component={Membership} />
      <PrivateRoute path="/meshCalendar" component={MeshCalendar} />
      <PrivateRoute path="/meshCalendarSlots" component={MeshCalendarSlots} />
      <PrivateRoute path="/staffDetails" component={StaffDetails} />
      <PrivateRoute path="/teammates" component={Teammates} />
      <PrivateRoute path="/createschedule" component={CreateSchedule} />
      <PrivateRoute path="/ordersuccessfull" component={OrderSuccessfull} />
      <PrivateRoute path="/leagueDetails" component={LeagueDetails} />
      <PrivateRoute path="/teams" component={Teams} />
      <PrivateRoute path="/teamDetails" component={TeamDetails} />
      <PrivateRoute path="/modifyDetails" component={ModifyDetails} />
      <PrivateRoute path="/roomdetails" component={RoomDetails} />
      <PrivateRoute path="/followers" component={Followers} />
      <PrivateRoute path="/following" component={Following} />
      <PrivateRoute path="/tracking" component={Tracking} />
      <PrivateRoute
        path="/userprofileschedule/:id"
        component={UserProfileSchedule}
      />
      <PrivateRoute path="/teamroster" component={TeamRoster} />
      <PrivateRoute path="/orderhistory" component={OrderHistory} />
      <PrivateRoute path="/bookinghistory" component={BookingHistory} />
      <PrivateRoute path="/createpass" component={CreatePass} />
      <PrivateRoute path="*" component={PageNotFound} />
    </Switch>
  );
};

export default AppRoute;
