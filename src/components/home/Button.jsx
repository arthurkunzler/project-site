import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'



export default props => 
        <Link to={props.src} className="link-btn btn btn-primary btn-block mr-2 ml-2 align-self-center align-content-center m-0">{props.label} </Link>