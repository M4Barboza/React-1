import React from 'react'
import './App.css'

import { Cta, Brand, Navbar } from './components';
import { Header, Footer, Blog, Possibility, Features, WhatGPT3 } from './containers';

export const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App;
