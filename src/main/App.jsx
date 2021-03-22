import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

import Header from '../components/template/Header'
import Footer from '../components/template/Footer'
// import Home from '../components/home/Home'
import Routes from './Routes'

export default props =>
    <BrowserRouter>
        <div className="app d-flex flex-column justify-content-center">
            <Header />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
