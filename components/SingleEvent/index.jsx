
import React from "react";
import styles from './SingleEvent.module.css';


export default function SingleEvent({ singleEvent }) {

    console.log(singleEvent, singleEvent)

    return (
        <div className={styles.bodyy}>


            <h2 className={styles.head}>{singleEvent.eventName}</h2>

            <div className={styles.eventImageBlock} >
                <img src={singleEvent.eventImage} alt={singleEvent.eventName} className={styles.eventImage} />
            </div>

            <div className={styles.eventInfoBlock}>
                <div className={styles.eventInfoBlockLine}><img src="../locationIcons.png" alt="eventLocation" className={styles.infoIcon} />{singleEvent.eventLocation}</div>
                <div className={styles.eventInfoBlockLine}><img src="../phoneIcon.png" alt="phoneNumber" className={styles.infoIcon} />{singleEvent.eventContactNumber}</div>
                <div className={styles.eventInfoBlockLine}><img src="../timeIcons.png" alt="eventTime" className={styles.infoIcon} />{singleEvent.eventDate},{singleEvent.eventTime}</div>
            </div>

            <div className={styles.creatorInfo}>
                <img src="https://static.toiimg.com/photo/83890830/83890830.jpg?imgsize=115510" alt="creatorImg" className={styles.creatorImg} /> <span>Hosted by Shane</span>
            </div>

            <div className={styles.eventDescription}>
                <b>About:</b>
                <p>{singleEvent.eventDescription}</p>
            </div>

            <div className={styles.btns}>
                <button className={styles.btn}></button>
                <button className={styles.btn}></button>
            </div>

            <button className={styles.getDirections}>Get Direction</button>
        </div>



    )



}