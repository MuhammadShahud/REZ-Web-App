import { Container } from "react-bootstrap";
import { Button, Heading, RezNavbar } from "../../Components";
import { Footer } from "../../Containers";
import { InputField } from "../../Components";
import classes from "./ModifyDetails.module.css";
const ModifyDetails = () => {
    return (
        <div>
            <RezNavbar style={{ background: "var(--gradient-bg)" }} />
            <div className="my-3">
                <Heading text="MODIFY DETAILS" style={{ alignItems: "center" }} />
            </div>
            <div className={classes.modifyDetails__container}>
            <Container >
                <div className={classes.modifyDetails__mainDiv}>
                    <div className={classes.modifyDetails__inputLeft}>
                        <span >
                            <InputField type={'date'} placeholder={'Date'} style={{ border: "1px solid var(--light-grey)", margin: '10px 0px' }} />
                        </span>
                        <span >
                            <InputField placeholder={'Price'} style={{ border: "1px solid var(--light-grey)", margin: '10px 0px' }} />
                        </span>
                    </div>
                    <div className={classes.modifyDetails__inputRight}>
                        <div className={classes.modifyDetails__subInputRight}>
                            <span className={classes.modifyDetails__startTime}>
                                <InputField placeholder={'Start Time'} style={{ border: "1px solid var(--light-grey)", margin: '10px 0px' }} />
                            </span>
                            <span className={classes.modifyDetails__endTime}>
                                <InputField placeholder={'End Time'} style={{ border: "1px solid var(--light-grey)", margin: '10px 0px' }} />
                            </span>
                        </div>
                        <div>
                            <span >
                                <InputField placeholder={'Location'} style={{ border: "1px solid var(--light-grey)", margin: '10px 0px' }} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={classes.modifyDetails__btns}>
                    <Button style={{width: 300}} text="UPDATE"></Button>
                </div>
            </Container>
            </div>
            <Footer/>
        </div>
    );
};
export default ModifyDetails;