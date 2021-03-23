import './NavHorarios.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
<nav className="menu-horarios navbar navbar-dark d-flex justify-content-center">
    <Link className="nav-item nav-link active" to="/horarios/ginastica" >
        Ginástica
    </Link>
    <Link className="nav-item nav-link" to="/horarios/hidroginastica" >
        Hidroginástica
    </Link>
    <Link className="nav-item nav-link" to="/horarios/natacao-adulto" >
        Natação Adulto
    </Link>
    <Link className="nav-item nav-link" to="/horarios/natacao-infantil" >
        Natação Infantil
    </Link>
</nav>
