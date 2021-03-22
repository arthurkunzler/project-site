import React from 'react'
import './Footer.css'

export default props =>
    <footer className="footer d-flex flex-column align-items-center pt-3 pb-2">
        <h6>Desenvolvido por <strong>Arthur Kunzler</strong> © 2021 Todos os Direitos Reservados.</h6>
        <div className="phones">
            <p className="m-1">Entre em contato conosco!</p>
            <i className="fa fa-whatsapp"></i> (51) 9 9999-9999 <br/>
            <i className="fa fa-phone"></i> (51) 3333-3333
        </div>
    </footer>