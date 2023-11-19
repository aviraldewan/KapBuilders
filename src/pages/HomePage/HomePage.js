import React from "react";
import styles from "./HomePage.module.css";
import About from "../../components/HomePage/About/About";
import Services from "../../components/HomePage/Services/Services";
import Listings from "../../components/HomePage/Listings/Listings";
import Customers from "../../components/HomePage/Customers/Customers";

export default function HomePage() {

    return (
        <div className={styles.container}>
            <About />
            <Services />
            <Listings />
            {/* <Customers /> */}
        </div>
    );

}