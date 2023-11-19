import React from "react";
import styles from "./Service.module.css";

export default function Service({ pic, title }) {

    return (
        <div className={styles.container}>
             <img className={styles.pic} src={pic} alt="Service's Image" />
            <p className={styles.title}>{title}</p>
        </div>
    );

}