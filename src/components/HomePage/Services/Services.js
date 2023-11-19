import React from "react";
import styles from "./Services.module.css";
import Service from "./Service/Service";

export default function Services() {

    return (
        <div className={styles.container}>
            <p className={styles.header}>Services</p>
                <div className={styles.info}>
                    <Service pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTl17W7NL_qPVijudWlP63tpq9_OVjDTTKA&usqp=CAU" title="Buy Houses" />
                    <Service pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTl17W7NL_qPVijudWlP63tpq9_OVjDTTKA&usqp=CAU" title="Contracting" />
                    <Service pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTl17W7NL_qPVijudWlP63tpq9_OVjDTTKA&usqp=CAU" title="Check Property Prices" />
                    <Service pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTl17W7NL_qPVijudWlP63tpq9_OVjDTTKA&usqp=CAU" title="Room Setups" />
                    <Service pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTl17W7NL_qPVijudWlP63tpq9_OVjDTTKA&usqp=CAU" title="Real Estate" />
                </div>
        </div>
    );

}