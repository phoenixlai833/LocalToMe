
import React, { useState, useEffect } from 'react';
import * as foodbankData from "../../pages/data/foodbank.json";
import styles from './MapSlideUp.module.css'
import Link from 'next/link'

export default function SingleFbCard({ props }) {
    console.log(props)

    const foodBankComponent = foodbankData.map((fb) => (
        <li key={fb.recordid} className={styles.card}>
            <div className={styles.flexLayout}>
                <div className={styles.fbImage}>
                    image
                </div>
                <div className={styles.fbInfo}>
                    <Link href={`/foodBankMap/${fb.fields.program_name}`}>
                        <h4 className={styles.noSpace}>{fb.fields.program_name}</h4>
                    </Link>
                    <p>{fb.fields.location_address}</p>
                </div>
            </div>
        </li>
    ))

    return (
        <div>
            <div className={styles.background}>
                <hi>{props.fields.program_name}</hi>
            </div>
        </div>
    )
}