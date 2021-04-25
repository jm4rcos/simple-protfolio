import React, { useState, useEffect } from 'react'

import styles from './Work.module.css'
import {FrontEndWorks, DesignWorks} from '../utils/utils'

function Work(){
// Showing Works Component when selected
    const [frontEndWorks, setFrontEndWorks] = useState(1)

    const handleFrontEnd = () => {
        setFrontEndWorks(1)

        setDesignWorks(0)
    }

    const [designWorks, setDesignWorks] = useState(0)

    const handleDesign = () => {
        setDesignWorks(1)

        setFrontEndWorks(0)
    }

    

// Creating this toggle between project. Yes, it is messed up but works...

    const [backgroundFrontEnd, setBackgroundFrontEnd] = useState('#7562E0')
    const [fontColorFrontEnd, setFontColorFrontEnd] = useState('#fff')

    const changeBGFrontEnd = () => {
        setBackgroundFrontEnd('#7562E0')
        setFontColorFrontEnd('#fff')

        setBackgroundDesign('#E6E6F2')
        setFontColorDesign('#656565')

        handleFrontEnd()
    }

    const [backgroundDesign, setBackgroundDesign] = useState('#E6E6F2')
    const [fontColorDesign, setFontColorDesign] = useState('#656565')

    const changeBGDesign = () => {
        setBackgroundDesign('#7562E0')
        setFontColorDesign('#fff')

        setBackgroundFrontEnd('#E6E6F2')
        setFontColorFrontEnd('#656565')
        
        handleDesign()
    }


    return (
        <div className={styles.container} id='Works'>
            <div className={styles.card}>
                <div className={styles.title}>My Latest Works</div>

                <div className={styles.selectBox}>

                    <div className={styles.frontEndBox} 
                        style={{background:`${backgroundFrontEnd}`, height:'100px', width:'100px', borderRadius: '.2rem', display: 'flex', justifyContent:'center', cursor:'pointer', alignItems:'center'}}
                        onClick={changeBGFrontEnd}>
                        

                        <label className={styles.descriptionFrontEnd} style={{cursor:'pointer', color:`${fontColorFrontEnd}`}}>Front End</label>
                    </div>

                    <div className={styles.designBox} 
                        style={{background:`${backgroundDesign}`, height:'100px', width:'100px', borderRadius: '.2rem', display: 'flex', justifyContent:'center', cursor:'pointer', alignItems:'center'}}
                        onClick={changeBGDesign}>

                        <label className={styles.descriptionDesign} style={{cursor:'pointer', color:`${fontColorDesign}`}}>Design</label>
                    </div>

                </div>
                    
            </div>
        <div>
        {frontEndWorks === 1 &&(
                        <FrontEndWorks/>
                    )}
                    {designWorks === 1 &&(
                        <DesignWorks/>
                    )}
        </div>
            
            
        </div>
    )
}
export default Work
