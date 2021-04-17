import React from 'react'

import styles from './utils.module.css'
import {frontEnd} from '../Projects'

export const FrontEndWorks =() =>{

/*     const [frontEndProject, setFrontEndProject] = React.useState(data) */

    console.log(frontEnd);
    return(
        <div className={styles.container}>
            {frontEnd.map(project => {
                const {title, desc, img} = project
                return(
                    <div className={styles.frontEndWork} style={{color:'#fff'}}>
                        <h3 className={styles.title}>{title}</h3>
                        <div className={styles.desc}>{desc}</div>
                    </div>
                )
            })}
            {/* <div className={styles.frontEndWork}>FrontEnd</div>
            <div className={styles.frontEndWork}>FrontEnd</div>
            <div className={styles.frontEndWork}>FrontEnd</div>
            <div className={styles.frontEndWork}>FrontEnd</div> */}
        </div>
    )
}

export const DesignWorks = () => {
    return(
        <div className={styles.container}>
            <div className={styles.designWork}>Design</div>
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
            <div className={styles.illustrationWork}>Illustration</div>
        </div>
    )
}