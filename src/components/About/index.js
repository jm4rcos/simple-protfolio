import React from 'react'

import styles from './About.module.css'

export default function About(){
    return(
        <div className={styles.container} id='About'>
            <div style={{justifyContent:'flex-end', display:'flex'}}>
                <h1 className={styles.about}>About</h1>
            </div>
                <h1 className={styles.textTitle} style={{fontWeight:'600', fontSize:'34px', color:'#7562E0', marginBottom:'30px'}}>Creative, Focused, Passionate</h1>
                <h3 className={styles.text}>I’m a 24 years old and I’ve been working as customer service, support and sales for 5+ years but in my free time I was always developing something so I decided to change my career and work with I like the most.</h3>
            
            <div className={styles.txtImg}>
                <h3 style={{marginTop:'60px'}} className={styles.text}>With a focus on branding and UI / Web, I strive to create usable and polished products through passionate and deliberate design.</h3>
                <div style={{marginTop:'0px', height:'300px', width:'100%', background:'blue'}}></div>
            </div>
        </div>
    )
}