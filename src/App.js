import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header/Header'
import Services from './components/Services/Services'

import Styles from './App.css'

export default function App(){
    return <div className='App'>
        <Navbar/>
        <Header/>
        <Services/>
    </div>
}