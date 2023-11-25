import React from "react";
import styles from "./Customers.module.css";
import Card from "./Card/Card";

export default function Customers() {

    return (
        <div className={styles.container}>
            <p className={styles.heading}>Our Customers Love Us</p>
            <Card pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTl17W7NL_qPVijudWlP63tpq9_OVjDTTKA&usqp=CAU" name="John Doe" review="This is a great property. This is a great property. This is a great property. This is a great property. This is a great property. This is a great property.This is a great property. This is a great property. This is a great property. This is a great property. This is a great property. This is a great property. This is a great property. This is a great property." />
        </div>
    );

}