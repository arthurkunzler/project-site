import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

import Logo from './Logo'

export default props =>
    <nav className="menu navbar navbar-dark d-flex justify-content-center">
        <a className="navbar-brand" href="/">
            <Logo />
        </a>
        <a className="nav-item nav-link active p-3" href="/" >
            Início
        </a>
        <a className="nav-item nav-link" href="/modalidades" >
            Modalidades
        </a>
        <a className="nav-item nav-link" href="/horario-ginastica" >
            Horário Ginástica
        </a>
        <a className="nav-item nav-link" href="/horario-piscina" >
            Horário Piscina
        </a>
        <a className="nav-item nav-link" href="/contato" >
            Contato
        </a>
    </nav>