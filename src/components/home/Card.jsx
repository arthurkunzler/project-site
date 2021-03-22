import React, { useState } from 'react'
import './Card.css'

export default function renderCard (props){
    if(props.type === "img"){
        return (
            <div className="card-img mx-2">
                <img className="img-fluid" src={props.src} alt={props.alt}/>
            </div>
        )
    } else{
        return (
            <div className="home-card-body p-3 mx-2 bg-primary">
                <h4 className="card-title"><strong>Entre em contato!</strong></h4>
                <p className="card-text">Estamos aqui para ajudá-lo a manter sua saúde e melhorar seu condicionamento físico</p>
                <hr/>
                <div className="links d-flex flex-column ">
                    <a href="mailto:natafitness.adm@gmail.com" className="card-link">
                        <i class="fa fa-2x fa-envelope-square"></i> Envie um email</a>
                    <a href="https://www.facebook.com/Natafitness/" className="card-link mx-0 mt-1">
                        <i className="fa fa-2x fa-facebook-square"></i> Curta nossa página no Facebook
                    </a>
                </div>
            </div>
        )
    }

} 