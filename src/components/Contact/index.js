import React from 'react'
import styles from './Contact.module.css'
import shakeHandsSVG from '../../assets/shake-hands.svg'

export default function Contact(){

    const shakeHands = shakeHandsSVG

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit} 
        style={{marginTop:'50px'}} id='Contact' className={styles.container}>

            <img src={shakeHands} draggable={false} style={{width: '150px' }}/>
            <h1>Get in touch!</h1>
            <div className={styles.contactField}>
                <input
                type='text'
                placeholder='Name'
                className={styles.inputField}/>

                <input
                type='email'
                placeholder='Exemple@email.com'
                className={styles.inputField}/>

                <input
                type='textarea'
                placeholder='Send me a message...'
                style={{marginBottom:'20px', borderRadius: '5px', height: '200px', justifyContent:'flex-start', alignItems:'start', outline:'none', border: '2px solid #7562E0', marginTop:'10px'}}/>
                
                <button type='submit'
                style={{cursor:'pointer',width:'80px', padding:"10px 10px", background:'#7562E0', color:'#fff', border:'none', outline:'none', borderRadius: '5px'}}
                >Send</button>
            </div>
        </form>
    )
}