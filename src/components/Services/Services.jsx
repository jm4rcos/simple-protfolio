import React from 'react'
import codeSVG from '../../assets/codeSVG.svg'
import uiSVG from '../../assets/uiSVG.svg'
import logoSVG from '../../assets/logoSVG.svg'

import styles from './Services.module.css'

function Services() {

    const code = codeSVG
    const ui = uiSVG
    const logo = logoSVG

    return (
        <div className={styles.container}>
            <h1 className={styles.whatIdo}>What I do</h1>
            
            <div className={styles.services}>
                <div className={styles.codeCard}>
                    <div className={styles.codeBG}>
                        <img src={code} className={styles.code}/>
                    </div>
                    <div>Development</div>
                    <div>HTML/CSS3, JavaScript, ReactJS, React Native,  Github</div>
                </div>
                <div className={styles.uiBG}>
                    <img src={ui} className={styles.ui}/>
                </div>
                <div className={styles.logoBG}>
                    <img src={logo} className={styles.logo}/>
                </div>
            </div>

        </div>
    )
}

export default Services
