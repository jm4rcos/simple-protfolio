import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header/Header'
import Services from './components/Services/Services'
import Work from './components/Work/Work'
import About from './components/About'
import Contact from './components/Contact'


import styles from './App.css'

export default function App(){
    return <div className='App'>
        <Navbar/>
        <Header/>
        <Services/>
        <Work/>
        <About/>
        <Contact/>
    </div>
}