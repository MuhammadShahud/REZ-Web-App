import { Heading, RezNavbar, Button, InputField } from "../../Components";
import classes from './LeagueDetails.module.css';
import { Footer } from '../../Containers';
import { Container } from "react-bootstrap";
import leagueDetailPic from '../../Assets/league-history-img-big.jpg';
import leagueName from '../../Assets/league-logo-1.jpg';
import AnotherLeagueName from '../../Assets/league-logo-2.jpg';
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { GrTrophy } from "react-icons/gr";
import { useState } from "react";
import ModalForm from '../../Components/modal/Modal';
const LeagueDetails = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
            <div className="my-3">
                <Heading text={"LEAGUE DETAILS"} style={{ alignItems: "center" }} />
            </div>
            <Container>
                <div className={classes.leagueDetails__mainDiv}>
                    <div className={classes.leagueDetails__img}>
                        <img src={leagueDetailPic} alt="" />
                    </div>
                    <div className={classes.leagueDetails__clubs}>
                        <div className={classes.leagueDetails__oneClub}>
                            <div>
                                <img src={leagueName} />
                            </div>
                            <h5>Soccer Club</h5>
                        </div>
                        <div className={classes.leagueDetails__clubScores}>
                            <h3>02-01</h3>
                        </div>
                        <div>
                            <div className={classes.leagueDetails__anotherClub} >
                                <div>
                                    <img src={AnotherLeagueName} />
                                </div>
                                <h5>Football Club</h5>
                            </div>
                        </div>
                    </div>
                    <div className={classes.leagueDetails__leagueDescription}>
                        <h2>UEFA Champions League</h2>
                        <h5>League Details</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque accusantium necessitatibus aliquid odio eum aspernatur cupiditate, rem officia quam, consectetur, vitae eveniet. Dolorum atque labore omnis nostrum eveniet repellendus officia?
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque accusantium necessitatibus aliquid odio eum aspernatur cupiditate, rem officia quam, consectetur, vitae
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque accusantium necessitatibus aliquid odio eum aspernatur cupiditate, rem officia quam, consectetur, vitae
                        </p>
                    </div>
                    <div className={classes.leagueDetails__leagueSchedule}>
                        <div className={classes.leagueDetails__schedule}>
                            <AiOutlineCalendar style={{ color: 'black' }} />
                            <span>March 17 2022</span>
                        </div>
                        <div className={classes.leagueDetails__schedule}>
                            <AiOutlineClockCircle style={{ color: 'black' }} />
                            <span>
                                8:00-9:00 PM
                            </span>
                        </div>
                        <div className={classes.leagueDetails__schedule} >
                            <ImLocation style={{ color: 'black' }} />
                            <span>
                                New York, U
                            </span>
                        </div>
                        <div className={classes.leagueDetails__schedule}>
                            <GrTrophy style={{ color: 'black' }} />
                            <span>
                                Soccer Club Win
                            </span>
                        </div>
                    </div>
                    <div className={classes.leagueDetails__updatebtns}>
                        <Button onClick={showModal} text="UPDATED SCORES" style={{ width: '30%' }}></Button>
                    </div>
                </div>
            </Container>
            <ModalForm title='Update League Stats'
                onOk={handleOk}
                onShow={showModal}
                onCancel={handleCancel}
                onVisible={isModalVisible} >
                <div>
                    <form className={classes.leagueDetails__form}>
                        <div className={classes.leagueDetails__inputOne} style={{ marginRight: '10px' }}>
                            <span className={classes.leagueDetails__inputFiled}>
                                <InputField label={'Title of League'}placeholder={'Enter Title of league'} style={{ border: "1px solid var(--light-grey)", background: 'white' }} />
                            </span>
                        </div>
                        <div className={classes.leagueDetails__textArea}>
                            <label>Description</label>
                            <textarea type="text" placeholder="Enter Description" rows={4} />
                        </div>
                        <div className={classes.leagueDetails__twoInputs}>
                            <div className={classes.leagueDetails__inputSrtTime}>
                                <span className={classes.leagueDetails__inputFiled}>
                                    <InputField label={'Name of 1'} placeholder={'Soccer Club'} style={{ border: "1px solid var(--light-grey)", background: 'white' }} />
                                </span>
                            </div>
                            <div className={classes.leagueDetails__inputOne} >
                                <span className={classes.leagueDetails__inputFiled}>
                                    <InputField label={'Name Team 2'} placeholder={'Football club'} style={{ border: "1px solid var(--light-grey)", background: 'white' }} />
                                </span>
                            </div>
                        </div>
                        <div className={classes.leagueDetails__inputOne} >
                            <span className={classes.leagueDetails__inputFiled}>
                                <InputField label={'Date'} placeholder={'Enter Date'} style={{ border: "1px solid var(--light-grey)", background: 'white' }} />
                            </span>
                        </div>
                        <div className={classes.leagueDetails__twoInputs}>
                            <div className={classes.leagueDetails__inputSrtTime} >
                                <span className={classes.leagueDetails__inputFiled}>
                                    <InputField label={'Time'} placeholder={'Start Time'} style={{ border: "1px solid var(--light-grey)", background: 'white' }} />
                                </span>
                            </div>
                            <div className={classes.leagueDetails__inputOne}>
                                <span className={classes.leagueDetails__inputFiled}>
                                    <InputField placeholder={'End Time'} style={{ border: "1px solid var(--light-grey)", background: 'white', marginTop: '23px' }} />
                                </span>
                            </div>
                        </div>
                        <div className={classes.leagueDetails__inputOne}>
                            <span className={classes.leagueDetails__inputFiled}>
                                <InputField label={'Location'} placeholder={'Enter Location'} style={{ border: "1px solid var(--light-grey)", background: 'white' }} />
                            </span>
                        </div>
                        <div className={classes.leagueDetails__twoInputs}>
                            <div className={classes.leagueDetails__inputSrtTime}>
                                <span className={classes.leagueDetails__inputFiled}>
                                    <InputField label={'Score of Team 1'} placeholder={'02'} style={{ border: "1px solid var(--light-grey)", background: 'white' }} />
                                </span>
                            </div>
                            <div className={classes.leagueDetails__inputOne}>
                                <span className={classes.leagueDetails__inputFiled}>
                                    <InputField label={'Score of Team 1'} placeholder={'01'} style={{ border: "1px solid var(--light-grey)", background: 'white' }} />
                                </span>
                            </div>
                        </div>
                        <div className={classes.leagueDetails__chooseFile}>
                            <input type='file' />    
                        </div>
                    </form>
                </div>
                <div className={classes.leagueDetails__btns}>
                    <Button text='Submit' onClick={handleCancel}></Button>
                    <button className={classes.leagueDetails__btn} onClick={handleCancel}>Cancel</button>
                </div>
            </ModalForm>
            <Footer />
        </div>
    );
};
export default LeagueDetails;