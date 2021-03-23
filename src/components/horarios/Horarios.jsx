import './Horarios.css'
import React from 'react'

import NavHorarios from './NavHorarios'
import RoutesHorarios from './RoutesHorarios'

export default props =>
<React.Fragment>
    <main className="content content-fluid d-flex flex-column align-items-center">
        <div className="content p-3 mt-3">
            <NavHorarios />
            <RoutesHorarios />
        </div>
    </main>
</React.Fragment>