import React, { useState } from "react";
import { Heading, RezNavbar, Button,FollowCard } from "../../Components";
import {
    CalanderTabs,
    Footer,
} from "../../Containers";
import styles from "./Followers.module.css";
import SearchBar from "../../Components/searchBar/searchBar";
import { List, Card } from 'antd';
import Profile1 from "../../Assets/profile-img.jpg";
import Profile2 from "../../Assets/profile-img-1.jpg";
import Profile3 from "../../Assets/profile-img-3.jpg";
import Profile4 from "../../Assets/profile-img-4.jpg";


const data = [
    {
        name: 'Stacy Doe',
        img: Profile1
    },
    {
        name: 'Alex Dave',
        img: Profile2
    },
    {
        name: 'John Dave',
        img: Profile3
    },
    {
        name: 'Steve Dave',
        img: Profile4
    },
    {
        name: 'Steve Dave',
        img: Profile4
    },
    {
        name: 'Steve Dave',
        img: Profile4
    },
    {
        name: 'Steve Dave',
        img: Profile4
    },
    {
        name: 'Steve Dave',
        img: Profile4
    },
];

const Followers = () => {

    return (
        <div style={{ backgroundColor: "#fcfcfd", minHeight: "100vh" }}>
            <RezNavbar style={{ top: 0, background: 'var( --gradient-bg)' }} />
            <Heading text={'Followers'} style={{ alignItems: 'center', margin: '40px 0' }} />

            <div className={styles.followers__main}>
                {/* <div className={styles.followers__search}>
                    <SearchBar placeholder={'Search Now'} />
                </div> */}

                <div className={styles.followers__list}>
                    <List
                        // grid={{ gutter: 16, column: 2 }}
                        grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 1,
                            md: 2,
                            lg: 2,
                            xl: 2,
                            xxl: 2,
                        }}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <div className={styles.followers__listContainer}>
                                    <FollowCard
                                        img={item.img}
                                        userName={item.name}
                                        buttonText={'FOLLOWING'}
                                    />
                                </div>

                            </List.Item>
                        )}
                    />

                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', margin: '50px 0' }}>
                        <Button
                            text="Load More"
                        />
                    </div>
                </div>


            </div>

            <Footer />
        </div>
    );
};

export default Followers;
