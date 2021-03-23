import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

import Logo from './Logo'

export default props =>
    <nav className="menu navbar navbar-dark d-flex justify-content-center">
        <Link className="navbar-brand" to="/">
            <Logo />
        </Link>
        <Link className="nav-item nav-link active p-3" to="/" >
            Início
        </Link>
        <Link className="nav-item nav-link" to="/modalidades" >
            Modalidades
        </Link>
        <Link className="nav-item nav-link" to="/horarios" >
            Horários
        </Link>
        {/* <Link className="nav-item nav-link" to="/horario-ginastica" >
            Horário Ginástica
        </Link>
        <Link className="nav-item nav-link" to="/horario-piscina" >
            Horário Piscina
        </Link> */}
        <Link className="nav-item nav-link" to="/contato" >
            Contato
        </Link>
    </nav>