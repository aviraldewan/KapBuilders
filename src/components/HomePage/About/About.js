import React from "react";
import styles from "./About.module.css";

export default function About() {

    return (
        <div className={styles.container}>
            <p className={styles.header}>About Us</p>
            <div className={styles.about}>
                <div className={styles.info}>
                <p className={styles.text}>
                    Construction Company In Jammu, Dedicated To Transforming Your Dream Home Into A Reality.
                </p>
                <p className={styles.text}>
                   We Specalize In Crafting Turnkey, Ready-To-Move-In Houses.
                </p>
                <p className={styles.text}>
                    As Well As Offering Comprehensive Construction Services Such As House Renovations, Building Projects, And Room Setups.
                </p>
                <p className={styles.text}>
                    Our Commitment To Excellence Extends To Providing Customers With Up-To-Date Property Prices Information In The Vibrant Real Estate Market Of Jammu,
                </p>
                <p className={styles.text}>
                   Ensuring They Make Informed Investement Decisions With A Reputation For Quality And A Customer-Centric Approach, We Are Your Trusted Partner For All Your Construction And Real Estate Needs In The Region.
                </p>
                </div>
                <div className={styles.images}>
                    <img className={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTl17W7NL_qPVijudWlP63tpq9_OVjDTTKA&usqp=CAU" alt="House Image" />
                    <img className={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTl17W7NL_qPVijudWlP63tpq9_OVjDTTKA&usqp=CAU" alt="House Image" />
                </div>
            </div>
        </div>
    );

}