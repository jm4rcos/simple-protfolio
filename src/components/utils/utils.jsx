import React from 'react'

import styles from './utils.module.css'
import {frontEnd, design, illustration} from '../Projects'

export const FrontEndWorks =() =>{

    console.log(frontEnd);
    return(
        <div className={styles.container}>
            {frontEnd.map((project, id) => {
                const {title, desc, img, moreInfo, link} = project
                return(<div key={id} style={{display: 'flex'}}>
                        <div className={styles.frontEndWork}>
                            <img src={img} draggable={false} className={styles.img}/>
                        </div>
                        <div style={{width: '220px',color:'#656565',display: 'block', background: 'none', marginRight:'40px', position:'relative'}}>
                            <h3 className={styles.title}>{title}</h3>
                            <div className={styles.desc}>{desc}</div>
                            <div style={{bottom:'0px', position:'absolute'}}>
                                <p>{moreInfo}</p>
                                <a href={link} style={{fontWeight:'bold',fontSize:'0.6em', outline:'none', textDecoration:'none', background:'lightgray', borderRadius: '5px', padding: '5px'}}>{link}</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export const DesignWorks = () => {
    return(
        <div>Design</div>
    )
}

export const IllustrationWorks = () => {
    return(
        <div className={styles.container}>
            {illustration.map((project, id) => {
                const {img, moreInfo} = project
                return(<div key={id} style={{display: 'flex'}}>
                        <div className={styles.illustrationWork}>
                            <img src={img} draggable={false} className={styles.img}/>
                            <h1>Coding Boy</h1>
                        </div>
                        <div style={{width: '220px',color:'#656565',display: 'block', background: 'none', marginRight:'40px', position:'relative'}}>
                            <div style={{bottom:'0px', position:'absolute'}}>
                            <p>{moreInfo}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        )
}