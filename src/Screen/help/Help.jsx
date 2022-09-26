import { Heading, RezNavbar, Button, InputField} from "../../Components";
import classes from './Help.module.css';
import { Avatar } from 'antd';
import { Footer } from '../../Containers';
import { Container} from "react-bootstrap";


const Help=()=>{
    return(
        <div>
                 <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
                 <div className="my-3">
                        <Heading text={"Help"} style={{ alignItems: "center" }} />
                </div>
                <Container>
                    <div className={classes.help__mainDiv}>
                    <div>
                        <h3>Help</h3>
                    </div>
                    <div>
                        <InputField placeholder={'Name'} style={{ margin: '10px 0px' }} />
                        <InputField placeholder={'Email'} style={{ margin: '10px 0px' }} />
                        <textarea placeholder='Type your query here' className={classes.help__textarea}   type="text" style={{minHeight: "20vh", maxHeight:"20vh", margin: '10px 0px'}}  />
                    </div>
                    </div>
                    <div className={classes.help__btn}>
                    <Button text='SUBMIT' style={{width: '300px'}}></Button>
                    </div>
                </Container>
                <Footer/>

        </div>
    )
};
export default Help;