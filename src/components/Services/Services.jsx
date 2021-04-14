import React, { useState }from 'react'
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
            <h1 className={styles.whatIdo}>
                <span>W</span>
                <span>h</span>
                <span>a</span>
                <span style={{marginRight:'10px'}}>t</span>
                <span style={{marginRight:'10px'}}>I</span>
                <span>D</span>
                <span>o</span>
            </h1>
            
            <div className={styles.services}>
                <div className={styles.codeCard}>
                    <div className={styles.codeBG}>
                        <img src={code} className={styles.code}/>
                    </div>
                    <div className={styles.title}>Development</div>
                    <div className={styles.cardTxt}
                    style={{width: '340px'}}>HTML/CSS3, JavaScript, ReactJS, React Native,  Github</div>
                </div>

                <div className={styles.uiCard}>
                    <div className={styles.uiBG}>
                        <img src={ui} className={styles.ui}/>
                    </div>
                    <div className={styles.title}>UI/UX Design</div>
                    <div className={styles.cardTxt} style={{width: '340px'}}>
                    Web App, Mobile App Desgin,
                    Landing page and Prototype
                    interface Design, </div>
                </div>

                <div className={styles.logoCard}>
                    <div className={styles.logoBG}>
                        <img src={logo} className={styles.logo}/>
                    </div>
                    <div className={styles.title}>Icon/Illustration</div>
                    <div className={styles.cardTxt} style={{width: '340px'}}>Branding and Logo, Illustration, Character Set and Icon Set</div>
                </div>
                
                
            </div>

        </div>
    )
}

export default Services
