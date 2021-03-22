import './HorarioGin.css'
import React from 'react'

import Table from '../Table'

const arrayHorariosGin = [
    ['8H00', '', 'PUMP','', 'PUMP', ''],
    ['8H15', 'MAT PILATES', '','MAT PILATES', '', 'MAT PILATES'],
    ['9H00', 'ALONGAMENTO', '', 'ALONGAMENTO', '', 'ALONGAMENTO'],
    ['10H40', 'MIXTURADO', 'YOGA', 'MIXTURADO', '', 'MIXTURADO'],
    ['12H10', 'BIKE', '', 'BIKE', '', ''],
    ['17H15', '', 'YOGA', '', 'YOGA', ''],
    ['18H30', 'CIRCUITO FUNCIONAL', 'CROSS TRAINING', 'CIRCUITO FUNCIONAL', 'CROSS TRAINING', 'CIRCUITO FUNCIONAL'],
    ['19H30', 'ZUMBA', '', 'ZUMBA', '', 'ZUMBA'],
    ['19H30', 'BIKE', '', 'BIKE', '', 'BIKE'],
]


export default props =>
<React.Fragment>
    <main className="content content-fluid d-flex flex-column align-items-center">
        <div className="content p-3 mt-3">
            <h1 className="text-center p-2 ml-1">Horários Ginástica</h1>
            <Table content={arrayHorariosGin}/>
        </div>
    </main>
</React.Fragment>