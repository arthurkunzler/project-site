import React from 'react'
import './Modalidades.css'

import Accordion from './Accordion'
import Gallery from './Gallery'

export default props =>
    <React.Fragment>
        <main className="content content-fluid d-flex flex-column align-items-center">
            <div className="content p-3 mt-3">
                <h1 className="text-center p-2 ml-1">Modalidades</h1>
                <Accordion />
                <hr className="bg-dark"/>
                <Gallery />
            </div>
        </main>
    </React.Fragment>