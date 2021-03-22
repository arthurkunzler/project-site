import './Contato.css'
import React from 'react'

import Info from './Info'
import Form from './Form'
import Map from './Map'

const location = {
    address: 'Felizardo Furtado, 320',
    lat: -30.04691116386748,  
    lng: -51.18331371294305,
  }

export default props => 
<React.Fragment>
    <main className="content content-fluid d-flex flex-column align-items-center">
        <div className="content p-3 mt-3">
            <div className="contact d-flex flex-column m-2">
                <Form />
                <hr/>
                <div className="infos d-flex my-3">
                    <Info />
                    <Map />
                </div>
                    <h2 className="h2-end mb-3 pb-1 text-center">Venha nos visitar!</h2>
            </div>
        </div>
    </main>
</React.Fragment>