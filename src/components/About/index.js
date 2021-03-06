import React from 'react'

import styles from './About.module.css'
import imgSVG from '../../assets/coding.svg'

export default function About(){

    const img = imgSVG
    return(
        <div className={styles.container} id='About'>
            <div style={{justifyContent:'flex-end', display:'flex'}}>
                <h1 className={styles.about}>About</h1>
            </div>
                <h1 className={styles.textTitle} style={{fontWeight:'600', fontSize:'44px', color:'#7562E0', marginBottom:'30px'}}>Creative, Focused, Passionate</h1>
                <h3 className={styles.text}>My life is dedicated to the art and my family.
                            I've been working as customer service, support and sales for 5+ years but in free time I was always learning about Web Development so I decided to dive into my passion.
                            My biography is not as fascinating as the moment in which I create.</h3>
            <div className={styles.txtImg}>
                <h3 style={{marginTop:'60px'}} className={styles.text}>
                    With a focus on Front End, I strive to create usable and polished products through passionate and deliberate design.
                    
                </h3>
                <div style={{overflow: 'hidden', borderRadius:'50%',marginTop:'0px', height:'300px', width:'300px', background:'#7562E0', display:'flex',alignItems:"center", justifyContent:'center', position:'absolute', bottom:'0px', right:'0px'}}>
                    <img src={img} style={{backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', height: '250px', width:'100%'}} draggable={false}/>
                </div>
            </div>
        </div>
    )
}