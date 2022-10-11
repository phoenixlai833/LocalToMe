
import React, { useState, useEffect } from 'react';
import * as foodbankData from "../../pages/data/foodbank.json";
import styles from './MapSlideUp.module.css'
import Link from 'next/link'

export default function MapSlideUp() {

    const foodBankComponent = foodbankData.map((fb) => (
        <li key={fb.recordid} className={styles.card}>
            <div className={styles.flexLayout}>
                <div className={styles.fbImage}>
                    image
                </div>
                <div className={styles.fbInfo}>
                    <Link href={`/foodBank/x028IyjUQTdZsZ4gwftE`}>
                        <a><h4 className={styles.noSpace}>{fb.fields.program_name}</h4></a>
                    </Link>
                    <p>{fb.fields.location_address}</p>
                </div>
            </div>
        </li>
    ))

    return (
        <div>
            <div className={styles.background}>
                <ul className={styles.noSpace}>{foodBankComponent}
                </ul></div>
            <button className={styles.pos}>SLIDE</button>
        </div>
    )
}