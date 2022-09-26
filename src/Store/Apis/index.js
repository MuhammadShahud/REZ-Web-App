// const base_url = `http://rezsched.com`;
// export const img_url = `http://rezsched.com/public/uploads/`;

const base_url = `http://192.168.0.162/rez`;
// const base_url = `http://202.142.180.150:90/rez`;
export const img_url = `http://192.168.0.162/rez/public/uploads`;
// export const img_url = `http://202.142.180.150:90/rez/public/uploads/`;

const Apis = {
  sign_up: `${base_url}/api/register`,
  login: `${base_url}/api/login`,
  staffPermission: `${base_url}/api/staffPermission`,
  forget_password: `${base_url}/api/forget_password`,
  verifyCode: `${base_url}/api/verifyCode`,
  update_password: `${base_url}/api/update_password `,
  updatefcmtoken: `${base_url}/api/updatefcmtoken`,
  socialLogin: `${base_url}/api/socialLogin`,
  getSportTypes: `${base_url}/api/getSportType`,
  checkChildEmail: `${base_url}/api/findPlayer`,
  getUserData: `${base_url}/api/getUserInfo`,
  getScheduleTypes: `${base_url}/api/getScheduleTypes`,
  updateSportType: `${base_url}/api/updateSporttype`,
  getTeamsBysport: `${base_url}/api/getTeamsBysport`,
  updateUser: `${base_url}/api/updateUser`,
  getPrivacyPolicy: `${base_url}/api/getPrivacyPolicy`,
  getTermsCondition: `${base_url}/api/getTermsCondition`,
  contactUs: `${base_url}/api/contactUs`,
  sendHelp: `${base_url}/api/sendHelp`,
  ActiveEvents: `${base_url}/api/allEvents/active`,
  PastEvents: `${base_url}/api/allEvents/past`,
  EventDetails: `${base_url}/api/eventDetails/`,
  orderHistory: `${base_url}/api/orderHistory`,
  getScheduleList: `${base_url}/api/getScheduleList`,
  getFilterScheduleList: `${base_url}/api/getFilterScheduleList`,
  getSchedulesByRole: `${base_url}/api/getSchedulesByRole`,
  getReviews: `${base_url}/api/getReviews`,
  setReview: `${base_url}/api/setReview`,

  getSchedulesOther: next_page_url =>
    next_page_url ? next_page_url : `${base_url}/api/getSchedules/other`,

  getUsersByType: next_page_url =>
    next_page_url ? next_page_url : `${base_url}/api/getUserByType`,
  getMyTeammates: `${base_url}/api/getMyTeammates`,
  getUserInfoById: `${base_url}/api/getUserInfoById`,
  getTeamdetails: `${base_url}/api/getTeamdetails`,
  getFollowUser: `${base_url}/api/getFollowUser`,
  playerRequestApproved: `${base_url}/api/playerRequestApproved`,
  uploadStoreProduct: `${base_url}/api/productStore`,
  getAllStoreProductsForUsers: `${base_url}/api/allProduct`,
  getProductsWithoutCategory: `${base_url}/api/getproductWithoutCategory`,
  getStoreProducts: text => `${base_url}/api/productsList/${text}`,
  getProductCategories: `${base_url}/api/productCategory`,
  updateStoreProduct: `${base_url}/api/productupdatedata`,
  productDelete: id => `${base_url}/api/productDelete/${id}`,
  followUser: `${base_url}/api/followUser`,
  postLike: `${base_url}/api/postLike`,
  playerRequestToTeam: `${base_url}/api/playerRequestToTeam`,
  getUserPaymentCardList: `${base_url}/api/cardList`,
  addPaymentCard: `${base_url}/api/storeCard`,
  deletePaymentCard: id => `${base_url}/api/deleteCard/${id}`,
  orderProducts: `${base_url}/api/saveOrder`,
  createLeague: `${base_url}/api/storeLeague`,
  updateLeague: `${base_url}/api/updateLeague`,
  deleteLeague: `${base_url}/api/deleteLeague`,
  leagueDetail: id => `${base_url}/api/leaguesDetails/${id}`,
  bookingLeague: `${base_url}/api/bookingLeagues`,
  inviteTeams: `${base_url}/api/joinLeagueByCoach`,
  acceptLeague: `${base_url}/api/inviteLeagueApprovedByteam`,
  updateLeagueScore: `${base_url}/api/leaguesScoreUpdate`,

  getAllSubscription: `${base_url}/api/getAllSubscription`,
  bookSubscription: `${base_url}/api/bookSubscription`,
  getFollowingUser: (next_page_url, id) =>
    next_page_url ? next_page_url : `${base_url}/api/getFollowingUser/${id}`,
  getFollowerUser: (next_page_url, id) =>
    next_page_url ? next_page_url : `${base_url}/api/getFollowerUser/${id}`,

  getNotificationByUser: next_page_url =>
    next_page_url ? next_page_url : `${base_url}/api/getNotificationByUser`,

  getInvitationByUser: next_page_url =>
    next_page_url ? next_page_url : `${base_url}/api/getInvitationByUser`,

  addSchedule: `${base_url}/api/addSchedule`,
  createEClass: `${base_url}/api/saveEclass`,
  orderEClass: `${base_url}/api/bookEclass `,
  getEClass: eclass_id => `${base_url}/api/getEclassDetail/${eclass_id}`,
  getChatHeads: `${base_url}/api/allChats`,
  leaguesHistory: `${base_url}/api/leaguesHistory`,
  sendMessage: `${base_url}/api/send`,
  createSession: `${base_url}/api/createSession`,
  postCreate: `${base_url}/api/postCreate`,
  postComment: `${base_url}/api/postComment`,
  postDelete: id => `${base_url}/api/postDelete/${id}`,
  getPostComments: (next_page_url, id) =>
    next_page_url ? next_page_url : `${base_url}/api/getPostComments/${id}`,

  getChatMessages: next_page_url =>
    next_page_url ? next_page_url : `${base_url}/api/allMessages`,
  getEclasses: (next_page_url, searchText) =>
    next_page_url
      ? next_page_url
      : `${base_url}/api/getEclasses?name=${searchText ? searchText : ''}`,
  getAllCoachs: (next_page_url, searchText) =>
    next_page_url
      ? next_page_url
      : `${base_url}/api/getAllCoachs?name=${searchText ? searchText : ''}`,
  getCoachSession: (schedule_type, coach_id) =>
    `${base_url}/api/coachSession/${schedule_type}/${coach_id}`,
  getSessionDetail: session_id =>
    `${base_url}/api/trainingSessionDetail/${session_id}`,
  createBooking: `${base_url}/api/booking`,
  getCoachBooking: `${base_url}/api/bookedtrainingsession`,
  getOneCoachBooking: booking_id =>
    `${base_url}/api/bookedtrainingsession/${booking_id}`,
  getSearchUser: (next_page_url, searchText) =>
    next_page_url
      ? next_page_url
      : `${base_url}/api/getSearchUser?name=${searchText ? searchText : ''}`,
  getHighlights: next_page_url =>
    next_page_url ? next_page_url : `${base_url}/api/getHighlights`,
  getMyHighlights: next_page_url =>
    next_page_url ? next_page_url : `${base_url}/api/getMyHighlights`,
  getAllFacility: (next_page_url, searchText) =>
    next_page_url
      ? next_page_url
      : `${base_url}/api/getAllFacility/?name=${searchText ? searchText : ''}`,

  updateCoachBooking: `${base_url}/api/updatesessionbooking`,
  bookingStatusUpdate: `${base_url}/api/bookingStatusUpdate`,
  getCoachTimeSlot: session_id => `${base_url}/api/showTimeSlot/${session_id}`,
  storeOrderListing: `${base_url}/api/storeOrderListing`,
  // getPostByUser: `${base_url}/api/getPostByUser`,
  getPostByUser: id => `${base_url}/api/getPostByUser/${id}`,
  deleteLeague: id => `${base_url}/api/deleteLeague/${id}`,
  meshCalenderGenerator: `${base_url}/api/meshCalenderGenerator`,
  allLeagues: type => `${base_url}/api/allLeagues/${type}`,
  getEClassesByfacility: id => `${base_url}/api/getEClassesByfacilityId/${id}`,
  countryList: `${base_url}/api/countryList`,
  stateList: country_id => `${base_url}/api/stateList/${country_id}`,
  citiesList: state_id => `${base_url}/api/cityList/${state_id}`,
  getColors: `${base_url}/api/colors`,

};

export default Apis;
