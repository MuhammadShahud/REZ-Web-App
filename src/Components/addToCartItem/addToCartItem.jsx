import React from "react";

import styles from "./addToCartItem.module.css";
import Button from "../button/Button";
import { Checkbox } from 'antd';


const AddToCartItem = ({ productImg, productName, date, payment, address, price, onChange }) => {
    return (
        <section className="text-center">
            <div className={`${styles.addto__Cart}`}>
                <div className={styles.addto__CartDataFlex}>
                    <div className={styles.addto__CartData}>
                        <div>
                            <Checkbox onChange={onChange}></Checkbox>
                        </div>
                        <div className={styles.addto__CartData_Img}>
                            <img src={productImg} alt="" style={{ width: '80px', height: '80px' }} />
                        </div>
                        <div className={styles.addto__CartData_Text}>
                            <text style={{ fontWeight: 'bold', fontSize: '18px' }}>{productName}</text>
                            <text style={{ fontSize: '12px', lineHeight: '15px' }}>{'Date : ' + date}</text>
                            <text style={{ fontSize: '12px', lineHeight: '15px' }}>{'Payment : ' + payment}</text>
                            <text style={{ fontSize: '12px', lineHeight: '15px' }}>{'Shipping Address : ' + address}</text>
                        </div>
                    </div>
                    <div>
                        <div className={styles.addto__CartData_Price}>
                            <text style={{ fontWeight: 'bold', fontSize: '18px' }}>{'$' + price}</text>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Button text="Buy Now" /> */}
        </section>
    );
};

export default AddToCartItem;
