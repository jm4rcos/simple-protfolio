import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'

import handImage from '../../assets/hand.png'
import mobileIMage from '../../assets/mobile.svg'
import webImage from '../../assets/web.svg'

export default function Header(){

    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageXOffset)

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handImg = handImage
    const mobileImg = mobileIMage
    const webImg = webImage

    return(
        <div className={styles.container} id='Home'>
            
            <div className={styles.greeting} style={{transform: `translateY(-${offsetY * 0.5})px`}}>
                <div className={styles.simpleText}>Hello, There! <img src={handImg} className={styles.hand}/></div>
                <div className={styles.simpleText}>I'm <span className={styles.name}>João Marcos</span></div>
                <div className={styles.simpleText}>a <span className={styles.developer}>{`<Developer/>`}</span> and <span className={styles.designer}>Design<span className={styles.eText}>e</span>r</span></div>
                <div className={styles.simpleText}>based in Brazil</div>
            </div>
            
            <div>
                <div className={styles.homeAnimation}>
                    <img draggable={false} src={mobileImg} className={styles.mobileImg}/>
                    <img draggable={false} src={webImg} className={styles.webImg}/>
                </div>
            </div>

            <div className={styles.bgPurple}></div>
            <div className={styles.bgGreen}></div>
            <div className={styles.bgBlue}></div>

        </div>
    )
    
}