
import React from "react";
import styles from './SingleEvent.module.css';
import Link from 'next/link';


export default function SingleEvent({ event }) {

    const time = event.eventDate.seconds
    const date = new Date(time * 1000)
    const eventTime = date.toLocaleString().split(',')[1]
    const eventDate = date.toLocaleString("default", { month: "long", day: "2-digit", year: "numeric" })
    // console.log('test', monthString)
    return (
        <div>


            <h3 className={styles.header}>{event.eventName}</h3>

            <div className={styles.eventImageBlock} >
                <img src={event.eventImage} alt={event.eventName} className={styles.eventImage} />
            </div>

            <div className={styles.eventInfoBlock}>
                <div className={styles.eventInfoBlockLine}><img src="../locationIcons.png" alt="eventLocation" className={styles.infoIcon} />{event.eventLocation}</div>
                <div className={styles.eventInfoBlockLine}><img src="../phoneIcon.png" alt="phoneNumber" className={styles.infoIcon} />{event.eventContactPhone}</div>
                <div className={styles.eventInfoBlockLine}><img src="../timeIcons.png" alt="eventTime" className={styles.infoIcon} />{eventDate},{eventTime}</div>
            </div>

            <div className={styles.creatorInfo}>
                <img src="https://static.toiimg.com/photo/83890830/83890830.jpg?imgsize=115510" alt="creatorImg" className={styles.creatorImg} /> <span>Hosted by Shane</span>
            </div>

            <div className={styles.eventDescription}>
                <b>About:</b>
                <p>{event.eventContent}</p>
            </div>

            <div className={styles.btns}>
                <button className={styles.btn}></button>
                <button className={styles.btn}></button>
            </div>

            <button className={styles.getDirections}>
                <Link href={`https://google.com/maps/dir/?api=1&destination=${event.eventLocation.stringValue}`}>
                    <a >Get Direction</a>
                </Link>
            </button>

        </div>



    )



}