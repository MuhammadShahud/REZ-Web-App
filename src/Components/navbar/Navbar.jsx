import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../Assets/LOGO.png";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineWechat,
  AiOutlineMenu,
} from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import UserMenu from "../userMenu/UserMenu";

const RezNavbar = ({ style }) => {
  const history = useHistory();

  const [toggle, setToggle] = useState(false);
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    // <section className="">
    <nav
      className={`navbar navbar-expand-md navbar-light d-flex w-100 
      ${toggle && "bg-dark"}
       ${styles.rezNavbar}
      `}
      style={style}
    >
      <a
        className="navbar-brand "
        onClick={() => {
          if (auth[0]?.userRole === "store") {
            history.push("/store");
          } else {
            history.push("/");
          }
        }}
      >
        <div className={styles.rez__navbar__logo}>
          <img src={Logo} alt="logo" />
        </div>
      </a>
      <button
        className="navbar-toggler border-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setToggle(!toggle)}
      >
        <AiOutlineMenu color="white" />
      </button>
      <div
        className={`collapse navbar-collapse  ${styles.collapseBox}`}
        id="navbarSupportedContent"
      >
        <div
          className={`navbar-nav flex-column mx-auto ${styles.rez__navbar__links}`}
        >
          <div className={styles.rez__navbar__sign}>
            <ul>
              <li onClick={() => history.push("/contactus")}>Contact Us</li>
              {auth && auth[0]?.user ? (
                <UserMenu setAuth={setAuth} />
              ) : (
                <>
                  <li>
                    <Link style={{ color: "white" }} to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li>
                    <Link style={{ color: "white" }} to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
              {auth && auth[0]?.userRole !== "store" ? (
                <>
                  <li
                    onClick={() => {
                      history.push("/follow");
                    }}
                    className={styles.rez__navbar__sign_icon}
                  >
                    <AiOutlineSearch />
                  </li>
                  {(auth && auth[0]?.userRole === "facility") ||
                  auth[0]?.userRole === "coach" ? null : (
                    <li className={styles.rez__navbar__sign_icon}>
                      <AiOutlineShoppingCart
                        onClick={() => {
                          history.push("/addtocart");
                        }}
                      />
                    </li>
                  )}
                </>
              ) : null}
              <li className={styles.rez__navbar__sign_icon}>
                <AiOutlineWechat
                  onClick={() => {
                    history.push("/chat");
                  }}
                />
              </li>
            </ul>
          </div>
          <div className={styles.rez__navbar__list}>
            {auth && auth[0].userRole === "store" ? (
              <ul>
                <li>
                  <Link style={{ color: "white" }} to="/store">
                    Store
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "white" }} to="/membership">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "white" }} to="/orderhistory">
                    Order History
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "white" }} to="/help">
                    Help
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "white" }} to="/Notification">
                    Notification
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "white" }} to="/privacypolicy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "white" }} to="/termsandconditions">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      localStorage.removeItem("user");
                      history.replace("/login");
                    }}
                    to="#"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            ) : (
              //facility NavBar
              <>
                {auth && auth[0].userRole === "facility" ? (
                  <ul>
                    <li>
                      <Link style={{ color: "white" }} to="/highlight">
                        Highlights
                      </Link>
                    </li>
                    <li>
                      <Link to="/schedule">Schedule</Link>
                    </li>
                    <li>
                      <Link to="/calendar">Calendar</Link>
                    </li>
                    <li>
                      <Link style={{ color: "white" }} to="/coach">
                        Coaches
                      </Link>
                    </li>
                    <li>
                      <Link style={{ color: "white" }} to="/eclasses">
                        E-Classes
                      </Link>
                    </li>
                    <li>
                      <Link style={{ color: "white" }} to="/leagues">
                        Leagues
                      </Link>
                    </li>

                    <li>
                      <Link style={{ color: "white" }} to="/event">
                        Events
                      </Link>
                    </li>

                    {/* <li>Leauges</li> */}

                    <li>
                      <Link style={{ color: "white" }} to="/teams">
                        Teams
                      </Link>
                    </li>
                    <li>
                      <Link style={{ color: "white" }} to="/store">
                        Store
                      </Link>
                    </li>
                    <li>
                      <Link style={{ color: "white" }} to="/facility">
                        Facility
                      </Link>
                    </li>
                    <li>
                      <Link style={{ color: "white" }} to="/teammates">
                        Teammates
                      </Link>
                    </li>
                  </ul>
                ) : (
                  //parent NavBar
                  <>
                    {auth && auth[0].userRole === "parent" ? (
                      <ul>
                        <li>
                          <Link style={{ color: "white" }} to="/highlight">
                            Highlights
                          </Link>
                        </li>
                        <li>
                          <Link to="/schedule">Schedule</Link>
                        </li>
                        <li>
                          <Link to="/calendar">Calendar</Link>
                        </li>
                        <li>
                          <Link style={{ color: "white" }} to="/coach">
                            Coaches
                          </Link>
                        </li>
                        <li>
                          <Link style={{ color: "white" }} to="/eclasses">
                            E-Classes
                          </Link>
                        </li>
                        <li>
                          <Link style={{ color: "white" }} to="/leagueHistory">
                            Leagues
                          </Link>
                        </li>
                        {/* <li>Leauges</li> */}
                        <li>
                          <Link style={{ color: "white" }} to="/store">
                            Store
                          </Link>
                        </li>
                        <li>
                          <Link style={{ color: "white" }} to="/facility">
                            Facility
                          </Link>
                        </li>
                        <li>
                          <Link style={{ color: "white" }} to="/teammates">
                            Teammates
                          </Link>
                        </li>
                        <li>
                          <Link style={{ color: "white" }} to="/invitefriend">
                            Invite
                          </Link>
                        </li>
                      </ul>
                    ) : (
                      //coach NavBar
                      <>
                        {auth && auth[0].userRole === "coach" ? (
                          <ul>
                            <li>
                              <Link style={{ color: "white" }} to="/highlight">
                                Highlights
                              </Link>
                            </li>
                            <li>
                              <Link to="/schedule">Schedule</Link>
                            </li>
                            <li>
                              <Link to="/calendar">Calendar</Link>
                            </li>
                            <li>
                              <Link style={{ color: "white" }} to="/coach">
                                Coaches
                              </Link>
                            </li>
                            <li>
                              <Link style={{ color: "white" }} to="/eclasses">
                                E-Classes
                              </Link>
                            </li>
                            <li>
                              <Link style={{ color: "white" }} to="/leagues">
                                Leagues
                              </Link>
                            </li>
                            {/* <li>Leauges</li> */}
                            <li>
                              <Link style={{ color: "white" }} to="/store">
                                Store
                              </Link>
                            </li>
                            <li>
                              <Link style={{ color: "white" }} to="/facility">
                                Facility
                              </Link>
                            </li>
                            <li>
                              <Link style={{ color: "white" }} to="/teammates">
                                Teammates
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={{ color: "white" }}
                                to="/appointments"
                              >
                                Appointments
                              </Link>
                            </li>
                            <li>
                              <Link
                                style={{ color: "white" }}
                                to="/invitefriend"
                              >
                                Invite
                              </Link>
                            </li>
                          </ul>
                        ) : (
                          //team NavBar
                          <>
                            {auth && auth[0].userRole === "team" ? (
                              <ul>
                                <li>
                                  <Link
                                    style={{ color: "white" }}
                                    to="/highlight"
                                  >
                                    Highlights
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/schedule">Schedule</Link>
                                </li>
                                <li>
                                  <Link to="/calendar">Calendar</Link>
                                </li>
                                <li>
                                  <Link style={{ color: "white" }} to="/coach">
                                    Coaches
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    style={{ color: "white" }}
                                    to="/eclasses"
                                  >
                                    E-Classes
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    style={{ color: "white" }}
                                    to="/leagueHistory"
                                  >
                                    Leagues
                                  </Link>
                                </li>
                                {/* <li>Leauges</li> */}
                                <li>
                                  <Link style={{ color: "white" }} to="/store">
                                    Store
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    style={{ color: "white" }}
                                    to="/facility"
                                  >
                                    Facility
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    style={{ color: "white" }}
                                    to="/teammates"
                                  >
                                    Teammates
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    style={{ color: "white" }}
                                    to="/invitefriend"
                                  >
                                    Invite
                                  </Link>
                                </li>
                              </ul>
                            ) : (
                              //staff NavBar
                              <>
                                {auth && auth[0].userRole === "staff" ? (
                                  <ul>
                                    <li>
                                      <Link
                                        style={{ color: "white" }}
                                        to="/highlight"
                                      >
                                        Highlights
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/schedule">Schedule</Link>
                                    </li>
                                    <li>
                                      <Link to="/calendar">Calendar</Link>
                                    </li>
                                    <li>
                                      <Link
                                        style={{ color: "white" }}
                                        to="/coach"
                                      >
                                        Coaches
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        style={{ color: "white" }}
                                        to="/eclasses"
                                      >
                                        E-Classes
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        style={{ color: "white" }}
                                        to="/leagues"
                                      >
                                        Leagues
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        style={{ color: "white" }}
                                        to="/facility"
                                      >
                                        Facility
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        style={{ color: "white" }}
                                        to="/teammates"
                                      >
                                        Teammates
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        style={{ color: "white" }}
                                        to="/invitefriend"
                                      >
                                        Invite
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        style={{ color: "white" }}
                                        to="/store"
                                      >
                                        Store
                                      </Link>
                                    </li>
                                  </ul>
                                ) : (
                                  <ul>
                                    <li>
                                      <Link
                                        style={{ color: "white" }}
                                        to="/highlight"
                                      >
                                        Highlights
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/schedule">Schedule</Link>
                                    </li>
                                    <li>
                                      <Link to="/calendar">Calendar</Link>
                                    </li>
                                    <li>
                                      <Link
                                        style={{ color: "white" }}
                                        to="/coach"
                                      >
                                        Coaches
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        style={{ color: "white" }}
                                        to="/eclasses"
                                      >
                                        E-Classes
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        style={{ color: "white" }}
                                        to="/leagueHistory"
                                      >
                                        Leagues
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        style={{ color: "white" }}
                                        to="/event"
                                      >
                                        Events
                                      </Link>
                                    </li>
                                    {/* <li>Leauges</li> */}

                                    <li>
                                      <Link
                                        style={{ color: "white" }}
                                        to="/teams"
                                      >
                                        Teams
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        style={{ color: "white" }}
                                        to="/store"
                                      >
                                        Store
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        style={{ color: "white" }}
                                        to="/facility"
                                      >
                                        Facility
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        style={{ color: "white" }}
                                        to="/teammates"
                                      >
                                        Teammates
                                      </Link>
                                    </li>
                                  </ul>
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
          </div>
        </div>
      </div>
    </nav>
    // </section>
  );
};

export default RezNavbar;
