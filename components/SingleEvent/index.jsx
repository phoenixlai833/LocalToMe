
import React from "react";
import styles from './SingleEvent.module.css';


export default function SingleEvent({ event }) {

    const time = event.eventDate.timestampValue.seconds
    const date = new Date(time * 1000)
    const eventTime = date.toLocaleString().split(',')[1]
    const mothString = date.toLocaleString("default", { month: "long" })
    const day = date.toLocaleString().split(',')[0].split('/')[1]
    const year = date.toLocaleString().split(',')[0].split('/')[2]
    const eventDate = `${mothString} ${day}, ${year}`

    return (
        <div className={styles.bodyy}>


            <h2 className={styles.head}>{event.eventName.stringValue}</h2>

            <div className={styles.eventImageBlock} >
                <img src={event.eventImage.stringValue} alt={event.eventName.stringValue} className={styles.eventImage} />
            </div>

            <div className={styles.eventInfoBlock}>
                <div className={styles.eventInfoBlockLine}><img src="../locationIcons.png" alt="eventLocation" className={styles.infoIcon} />{event.eventLocation.stringValue}</div>
                <div className={styles.eventInfoBlockLine}><img src="../phoneIcon.png" alt="phoneNumber" className={styles.infoIcon} />{event.eventContactPhone.stringValue}</div>
                <div className={styles.eventInfoBlockLine}><img src="../timeIcons.png" alt="eventTime" className={styles.infoIcon} />{eventDate},{eventTime}</div>
            </div>

            <div className={styles.creatorInfo}>
                <img src="https://static.toiimg.com/photo/83890830/83890830.jpg?imgsize=115510" alt="creatorImg" className={styles.creatorImg} /> <span>Hosted by Shane</span>
            </div>

            <div className={styles.eventDescription}>
                <b>About:</b>
                <p>{event.eventContent.stringValue}</p>
            </div>

            <div className={styles.btns}>
                <button className={styles.btn}></button>
                <button className={styles.btn}></button>
            </div>

            <button className={styles.getDirections}>Get Direction</button>
        </div>



    )



}