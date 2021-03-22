import './HorarioPiscina.css'
import React from 'react'

import Table from '../Table'

const arrayHorariosHidro = [
    ['7H30', 'HIDRO', '', 'HIDRO', '', 'HIDRO'],
    ['8H20', '', 'HIDRO', '', 'HIDRO', ''],
    ['9H10', 'HIDRO', '', 'HIDRO', '', 'HIDRO'],
    ['10H00', '', 'HIDRO', '', 'HIDRO', ''],
    ['11H40', 'HIDRO', '', 'HIDRO', '', 'HIDRO'],
    ['16H10', 'HIDRO', 'HIDRO', 'HIDRO', 'HIDRO', 'HIDRO'],
    ['17H50', 'HIDRO', 'HIDRO', 'HIDRO', 'HIDRO', 'HIDRO'],
    ['19H30', 'HIDRO', '', 'HIDRO', '', 'HIDRO'],
]

const arrayHorariosNatAdulto = [
    ['7H30', '', 'NATAÇÃO', '', 'NATAÇÃO', ''],
    ['8H20', 'NATAÇÃO', '', 'NATAÇÃO', '', 'NATAÇÃO'],
    ['9H10', '', 'NATAÇÃO', '', 'NATAÇÃO', ''],
    ['10H50', 'NATAÇÃO', '', 'NATAÇÃO', '', 'NATAÇÃO'],
    ['11H40', '', 'NATAÇÃO', '', 'NATAÇÃO', ''],
    ['16H10', 'NATAÇÃO', '', 'NATAÇÃO', '', 'NATAÇÃO'],
    ['17H00', 'NATAÇÃO', 'NATAÇÃO', 'NATAÇÃO', 'NATAÇÃO', 'NATAÇÃO'],
    ['18H40', 'NATAÇÃO', '', 'NATAÇÃO', '', 'NATAÇÃO'],
    ['19H30', 'NATAÇÃO', 'NATAÇÃO', 'NATAÇÃO', 'NATAÇÃO', 'NATAÇÃO'],
    ['20H20', 'NATAÇÃO', 'NATAÇÃO', 'NATAÇÃO', 'NATAÇÃO', 'NATAÇÃO'],
]

const arrayHorariosNatInfantil = [
    ['10h00', '10 a 14 anos', '', '10 a 14 anos', '', '10 a 14 anos'],
    ['10h50', '', '3 a 9 anos', '', '3 a 9 anos', ''],
    ['14h30', '6 a 10 anos', '3 a 6 anos', '6 a 10 anos', '3 a 6 anos', '6 a 10 anos'],
    ['15h15', '3 a 6 anos', '14 anos', '3 a 6 anos', '14 anos', '3 a 6 anos'],
    ['16h10', '14 anos', '', '14 anos', '', '14 anos'],
    ['17h50', '6 a 9', '3 a 6 anos', '6 a 9', '3 a 6 anos', '6 a 9'],
    ['18h40', '10 a 14 anos', '5 a 9 anos', '10 a 14 anos', '5 a 9 anos', '10 a 14 anos'],
]

export default props =>
<React.Fragment>
    <main className="content content-fluid d-flex flex-column align-items-center">
        <div className="content p-3 mt-3">
            <h1 className="text-center p-2 ml-1">Hidroginástica</h1>
            <Table content={arrayHorariosHidro}/>
            <h1 className="text-center p-2 ml-1">Natação Adulto</h1>
            <Table content={arrayHorariosNatAdulto}/>
            <h1 className="text-center p-2 ml-1">Natação Infantil</h1>
            <Table content={arrayHorariosNatInfantil}/>
        </div>
    </main>
</React.Fragment>