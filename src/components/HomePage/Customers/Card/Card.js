import React from "react";
import styles from "./Card.module.css";

export default function Card({ pic, name, review }) {

    return (
        <div className={styles.container}>
            <img className={styles.pic} src={pic} alt="Reviewer's pic" />
            <div className={styles.info}>
                <p className={styles.name}>{name}</p>
                <p className={styles.review}>{review}</p>
            </div>
        </div>
    );

}