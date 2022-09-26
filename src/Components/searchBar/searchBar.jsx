import React from "react";
import styles from "./searchBar.module.css";
import {
    IoSearch
} from "react-icons/io5";

const SearchBar = ({ style, placeholder, label }) => {
    return (
        <>
            <div className={styles.searchBar__main}>
                
                <IoSearch size={20} />
                <input
                    type="text"
                    placeholder={placeholder}
                    className={styles.searchBar__input}
                    style={style}
                />
            </div>
        </>
    );
};

export default SearchBar;
