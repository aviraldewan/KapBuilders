import React from "react";
import styles from "./Listings.module.css";
import Listing from "./Listing/Listing";

export default function Listings() {

    return (
        <div className={styles.container}>
             <p className={styles.header}>Listings</p>
                <div className={styles.listings}>
                    <Listing pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTl17W7NL_qPVijudWlP63tpq9_OVjDTTKA&usqp=CAU" title="Buy Houses" desc="This is a property." />
                    <Listing pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTl17W7NL_qPVijudWlP63tpq9_OVjDTTKA&usqp=CAU" title="Contracting" desc="This is a property." />
                </div>
        </div>
    );

}