import React, { useRef }from 'react'
import styles from './Contact.module.css'
import shakeHandsSVG from '../../assets/shake-hands.svg'

import emailjs from 'emailjs-com'

export default function Contact(){

    const shakeHands = shakeHandsSVG

    const textareaRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_hstk55n', 'template_v2ho097', e.target, 'user_6OneWpEWOimvTCrmPvwWz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    }

    return(
        <form onSubmit={handleSubmit} 
        style={{marginTop:'50px'}} id='Contact' className={styles.container}>

            <img src={shakeHands} draggable={false} style={{width: '150px' }}/>
            <h1>Get in touch!</h1>
            <div className={styles.contactField}>
                <input
                type='text'
                name='name'
                placeholder='Name'
                className={styles.inputField}/>

                <input
                type='email'
                name='email'
                placeholder='Exemple@email.com'
                className={styles.inputField}/>

                <textarea
                name='message'
                placeholder='Send me a message...'
                ref={textareaRef}
                style={{ marginBottom:'20px', borderRadius: '5px', height: '150px', outline:'none', border: '2px solid #7562E0', marginTop:'10px', fontSize:'1em', width:'100%'}}/>
                
                <button type='submit'
                style={{cursor:'pointer',width:'80px', padding:"10px 10px", background:'#7562E0', color:'#fff', border:'none', outline:'none', borderRadius: '5px'}}
                >Send</button>
            </div>
        </form>
    )
}