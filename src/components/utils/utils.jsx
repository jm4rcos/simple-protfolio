import React from 'react'

import styles from './utils.module.css'
import {frontEnd, design} from '../Projects'

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
        <div className={styles.containerDesign}>
            {design.map((project, id) => {
                const {title, img, desc} = project
                return(<div key={id} style={{display: 'flex'}} className={styles.divDesign}>
                        <div className={styles.designWork}>
                            <h3>{title}</h3>
                            <img src={img} draggable={false} className={styles.imgDesign}/>
                        </div>
                </div>)
            })}
        </div>
    )
}
