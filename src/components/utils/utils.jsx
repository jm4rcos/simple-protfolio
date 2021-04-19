import React from 'react'

import styles from './utils.module.css'
import {frontEnd, design, illustration} from '../Projects'

export const FrontEndWorks =() =>{

    console.log(frontEnd);
    return(
        <div className={styles.container}>
            {frontEnd.map((project, id) => {
                const {title, desc, img, moreInfo, link} = project
                return(<div key={id} style={{display: 'flex'}} className={styles.divContainer}>
                        <div className={styles.frontEndWork}>
                            <img src={img} draggable={false} className={styles.img}/>
                        </div>
                        <div style={{width: '240px',color:'#656565',display: 'block', background: 'none', marginRight:'0px', position:'relative'}}>
                            <div style={{marginLeft: '20px'}}>
                            <h3 className={styles.title}>{title}</h3>
                            <div className={styles.desc}>{desc}</div>
                            <div style={{bottom:'0px', position:'absolute'}}>
                                <p>{moreInfo}</p>
                                <a href={link} style={{fontWeight:'bold',fontSize:'0.6em', outline:'none', textDecoration:'none', background:'lightgray', borderRadius: '5px', padding: '5px'}}>{link}</a>
                            </div>
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
        <div className={styles.container}>
            {design.map((project, id) => {
                const {title, img, moreInfo} = project
                return(<div key={id} style={{display: 'flex'}} className={styles.divDesign}>
                        <div className={styles.designWork}>
                            <img src={img} draggable={false} className={styles.imgDesign}/>
                        </div>
                        <div style={{width: '240px',color:'#656565',display: 'block', background: 'none', marginRight:'0px', position:'relative'}}>
                            <div style={{marginLeft: '20px'}}>
                            <div style={{bottom:'0px', position:'absolute'}}>
                                <p>{moreInfo}</p>
                            </div>
                            </div>
                        </div>
                </div>)
            })}
        </div>
    )
}

export const IllustrationWorks = () => {
    return(
        <div className={styles.container}>
            {illustration.map((project, id) => {
                const {img, moreInfo} = project
                return(<div key={id} style={{display: 'grid', gap:'0px', placeItems:'center', boxShadow:'0px 0px 20px 10px #e3e6fa'}} className={styles.divIllustration}>
                        <div className={styles.illustrationWork}>
                            <img src={img} draggable={false} className={styles.imgIllustration}/>
                        </div>
                        <div style={{width: '80%', height:'auto',color:'#656565', background: 'none', position:'relative', textAlign:'center'}}>
                            <p>{moreInfo}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        )
}