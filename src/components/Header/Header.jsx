import React, { useState, useEffect } from 'react'
import styles from './Header.module.css'

import handImage from '../../assets/hand.png'
import mobileIMage from '../../assets/mobile.svg'
import webImage from '../../assets/web.svg'

import body from '../../assets/body.svg'
import eye from '../../assets/eye.svg'
import hair from '../../assets/hair.svg'

import { useSpring, animated } from 'react-spring'

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

    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
    const trans1 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`
    const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
    const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
    const trans4 = (x, y) => `translate3d(${x / 50}px,${y / 20}px,0)`

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))


    return(
        <div className={styles.container} id='Home' onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            
            <div className={styles.greeting} style={{transform: `translateY(-${offsetY * 0.5})px`}}>
                <div className={styles.simpleText}>Hello, There! <img src={handImg} className={styles.hand}/></div>
                <div className={styles.simpleText}>I'm <span className={styles.name}>João Marcos</span></div>
                <div className={styles.simpleText}>a <span className={styles.developer}>{`<Developer/>`}</span> and <span className={styles.designer}>Design<span className={styles.eText}>e</span>r</span></div>
                <div className={styles.simpleText}>based in Brazil</div>
            </div>
            
            <div>
                <div className={styles.homeAnimation}>
                    {/* <animated.img draggable={false} src={mobileImg} className={styles.mobileImg}
                    style={{ transform: props.xy.interpolate(trans1) }}/>

                    <animated.img draggable={false} src={webImg} className={styles.webImg}
                    style={{ transform: props.xy.interpolate(trans2) }}/> */}
                    <div className={styles.characterBG}>
                        <animated.img src={body} className={styles.body}/>
                        <div style={{positions:'relative', height:'60px', width: '60px', background:'#fff', borderRadius: '50%', justifyContent:'center',display:'flex', alignItems:'center',overflow:'hidden', marginTop:'115px', zIndex:'10', marginLeft:'-17px'}}>
                        <animated.img src={eye} className={styles.eye}
                        style={{ transform: props.xy.interpolate(trans4) }}/>
                        </div>
                        <img src={hair} className={styles.hair}/>
                    </div>
                </div>
            </div>

            <div className={styles.bgGreen}></div>
            <div className={styles.bgBlue}></div>

        </div>
    )
    
}