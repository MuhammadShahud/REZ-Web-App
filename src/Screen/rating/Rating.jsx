import { List, Rate } from 'antd';
import { Heading, RezNavbar, Button} from "../../Components";
import classes from './Rating.module.css';
import profileImg from "../../Assets/profile-img.jpg";
import { Avatar } from 'antd';
import { Footer } from '../../Containers';
import { Container } from 'react-bootstrap';


const Rating=()=>{
    const data = [
        {
          id: 1,
          img: profileImg,
          name: 'Elyse',
          ratingValue: 4,
          reviews:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestias dolorum velit repellat placeat modi ',
        },
        {
            id: 2,
            img: profileImg,
            name: 'Elyse',
            ratingValue: 4,
            reviews:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestias dolorum velit repellat placeat modi e ',
          },
          {
            id: 3,
            img: profileImg,
            name: 'Elyse',
            ratingValue: 4,
            reviews:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestias dolorum velit repellat placeat modi e',
          },
          {
            id: 4,
            img: profileImg,
            name: 'Elyse',
            ratingValue: 4,
            reviews:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestias dolorum velit repellat placeat modi',
          },
          {
            id: 4,
            img: profileImg,
            name: 'Elyse',
            ratingValue: 4,
            reviews:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestias dolorum velit repellat placeat modi ',
          },
          {
            id: 4,
            img: profileImg,
            name: 'Elyse',
            ratingValue: 4,
            reviews:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores molestias dolorum velit repellat placeat modi ',
          },
      ];
    return(
        
             <div>
                 <RezNavbar style={{ top: 0, background: "var( --gradient-bg)" }} />
                 <div className="my-3">
                        <Heading text={"RATING & REVIEWS"} style={{ alignItems: "center" }} />
                </div>
                <Container>
                  <List  className={classes.rating__mainDiv}
                    grid={{ gutter: 8,
                        xs: 1,
                        sm: 1,
                        xl: 2,
                        xxl: 2,
                        column: 2 }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                               <div className={classes.rating__list}>
                                   <div className={classes.rating__rateRowTop}>
                                        <div>
                                        <Avatar shape="circle" size={50} src={item.img}/>
                                        </div>
                                        <div className={classes.rating__subRateRowTop}>
                                            <span className={classes.rating__review}>
                                            {item.name}
                                            </span>
                                            <div>
                                            <Rate allowHalf value={item.ratingValue} style={{color: '#28aec9'}} />
                                            </div>
                                        </div>
                                   </div>
                                   <div className={classes.rating__rateRowBottom}>
                                        <span>{item.reviews}</span>
                                   </div>
                               </div>
                        </List.Item>
                    )}
                       
                    />
                    </Container>
                    <div className={classes.rating__btn}>
                    <Button text='Load More'></Button>
                    </div>
                    <Footer/>
             </div>
       
    );
};
export default Rating;