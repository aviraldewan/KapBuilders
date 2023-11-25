import React, { useState } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [msg, updateMsg] = useState("");

  const changeMsg = (e) => {
    updateMsg(e.target.value);
  };

  const sendMsg = () => {
    if (msg.trim().length == 0) {
      alert("Please enter a message");
      return;
    }
    alert("Message Sent");
    updateMsg("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        <p className={styles.header}>Products</p>
        <a className={styles.link} href="#">
          Link
        </a>
        <a className={styles.link} href="#">
          Link
        </a>
        <a className={styles.link} href="#">
          Link
        </a>
        <a className={styles.link} href="#">
          Link
        </a>
      </div>
      <div className={styles.services}>
        <p className={styles.header}>Services</p>
        <a className={styles.link} href="#">
          Link
        </a>
        <a className={styles.link} href="#">
          Link
        </a>
        <a className={styles.link} href="#">
          Link
        </a>
        <a className={styles.link} href="#">
          Link
        </a>
      </div>
      <div className={styles.contact}>
        <p className={styles.header}>Contact</p>
        <p className={styles.info}>Contact</p>
        <p className={styles.info}>Contact</p>
        <p className={styles.info}>Contact</p>
        <div className={styles.msg}>
          <textarea
            placeholder="Message"
            value={msg}
            onChange={(e) => changeMsg(e)}
            className={styles.textarea}
          />
          <button className={styles.btn} onClick={sendMsg}>
            Send
          </button>
        </div>
        <div className={styles.social}>
            <a href="#" className={styles.socialLink}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTl17W7NL_qPVijudWlP63tpq9_OVjDTTKA&usqp=CAU" alt="Social Media Icon" className={styles.socialIcon} /></a>
            <a href="#" className={styles.socialLink}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTl17W7NL_qPVijudWlP63tpq9_OVjDTTKA&usqp=CAU" alt="Social Media Icon" className={styles.socialIcon} /></a>
            <a href="#" className={styles.socialLink}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTl17W7NL_qPVijudWlP63tpq9_OVjDTTKA&usqp=CAU" alt="Social Media Icon" className={styles.socialIcon} /></a>
            <a href="#" className={styles.socialLink}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTl17W7NL_qPVijudWlP63tpq9_OVjDTTKA&usqp=CAU" alt="Social Media Icon" className={styles.socialIcon} /></a>
            <a href="#" className={styles.socialLink}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTl17W7NL_qPVijudWlP63tpq9_OVjDTTKA&usqp=CAU" alt="Social Media Icon" className={styles.socialIcon} /></a>
        </div>
      </div>
    </div>
  );
}
