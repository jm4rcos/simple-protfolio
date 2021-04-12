import React from 'react'

import styles from './utils.module.css'

export const FrontEndWorks =() =>{
    return(
        <div className={styles.container}>
            <div className={styles.frontEndWork}>FrontEnd</div>
            <div className={styles.frontEndWork}>FrontEnd</div>
            <div className={styles.frontEndWork}>FrontEnd</div>
        </div>
    )
}

export const DesignWorks = () => {
    return(
        <div className={styles.container}>
            <div className={styles.designWork}>Design</div>
            <div className={styles.designWork}>Design</div>
            <div className={styles.designWork}>Design</div>
        </div>
    )
}

export const IllustrationWorks = () => {
    return(
        <div className={styles.container}>
            <div className={styles.illustrationWork}>Illustration</div>
            <div className={styles.illustrationWork}>Illustration</div>
            <div className={styles.illustrationWork}>Illustration</div>
        </div>
    )
}