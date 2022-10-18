
import React, { useState, useEffect } from 'react';
import styles from './MapSlideUp.module.css'
import Link from 'next/link'

export default function MapSlideUp({ foodBanks }) {
    let [showing, setShowing] = useState(true);

    function toggleShowing() {
        return showing ? setShowing(false) : setShowing(true)
    }

    const foodBankComponent = foodBanks.map((fb) => (
        <li key={fb.id} className={styles.card}>
            <div className={styles.flexLayout}>
                <div className={styles.fbImage}>
                    <img width="60" height="60" src={fb.foodBank_Image} alt={fb.program_name} />
                </div>
                <div className={styles.fbInfo}>
                    <Link href={`/foodBank/${fb.id}`}>
                        <a><h4 className={styles.noSpace}>{fb.program_name}</h4></a>
                    </Link>
                    <p>{fb.location_address}</p>
                </div>
            </div>
        </li>
    ))

    return (
        <div>
            <div className={`${styles.background} + ${showing ? styles.slidein : styles.slideout}`}>
                <ul className={styles.noSpace}>{foodBankComponent}
                </ul></div>
            <button onClick={toggleShowing} className={styles.pos}>SLIDE</button>
        </div>
    )
}