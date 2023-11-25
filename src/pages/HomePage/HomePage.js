import React from "react";
import styles from "./HomePage.module.css";
import ImageCarousel from "../../components/HomePage/ImageCarousel/ImageCarousel";
import About from "../../components/HomePage/About/About";
import Services from "../../components/HomePage/Services/Services";
import Listings from "../../components/HomePage/Listings/Listings";
import Customers from "../../components/HomePage/Customers/Customers";
import Footer from "../../components/HomePage/Footer/Footer";

export default function HomePage() {

    const images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTl17W7NL_qPVijudWlP63tpq9_OVjDTTKA&usqp=CAU", "https://img.flawlessfiles.com/_r/300x400/100/8b/df/8bdf0705ef760a65894f3506ff474576/8bdf0705ef760a65894f3506ff474576.jpg"];

  return (
    <div className={styles.container}>
        <ImageCarousel images={images} />
      <div className={styles.m}>
        <div className={styles.info}>
            <p className={styles.text}>Check Out Our Latest Projects</p>
            <button className={styles.btn}>See More</button>
        </div>
        <About />
        <Services />
        <Listings />
        <Customers />
      </div>
      <Footer />
    </div>
  );
}
