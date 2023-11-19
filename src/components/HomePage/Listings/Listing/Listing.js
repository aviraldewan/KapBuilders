import React from "react";
import styles from "./Listing.module.css";

export default function Listing({ pic, title, desc }) {

    return (
        <div className={styles.container}>
             <img className={styles.pic} src={pic} alt="Listing's Image" />
            <p className={styles.title}>{title}</p>
            <p className={styles.desc}>{desc}</p>
            <button className={styles.button}>Learn More</button>
        </div>
    );

}