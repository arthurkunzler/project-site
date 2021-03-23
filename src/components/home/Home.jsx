import React from 'react'
import './Home.css'
import imgCard from'../../assets/imgs/img-card-certificado.webp'

import Slider from './Slider'
import Button from './Button'
import Card from './Card'

export default props =>
    <React.Fragment>
        <main className="content content-fluid d-flex flex-column align-items-center">
            <div className="content p-3 mt-3">
                <Slider />
                <div className="buttons d-flex justify-content-around">
                    <Button label="Modalidades" src="/modalidades"/>
                    <Button label="Fotos" src="/modalidades"/>
                    <Button label="Horários" src="/horarios"/>
                </div>
                <div className="cards d-flex justify-content-around align-items-center m-3">
                    <Card type="img" src={imgCard} alt="Certificado"/>
                    <Card type="card-text" /> 
                </div>
            </div>
        </main>
    </React.Fragment>