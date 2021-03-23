import React from 'react'

import Table from '../table-template/Table'

import arrayDados from '../ArraysDados.js'

const arrayHorariosGin = arrayDados[0]

const arrayHorariosHidro = arrayDados[1]

const arrayHorariosNatAdulto = arrayDados[2]

const arrayHorariosNatInfantil = arrayDados[3]




export default props =>
<div className="div-table pt-2">
    <h1 className="text-center p-2 ml-1">Ginástica</h1>
    <Table content={arrayHorariosGin}/>
    <h1 className="text-center p-2 ml-1">Hidroginástica</h1>
    <Table content={arrayHorariosHidro}/>
    <h1 className="text-center p-2 ml-1">Natação Adulto</h1>
    <Table content={arrayHorariosNatAdulto}/>
    <h1 className="text-center p-2 ml-1">Natação Infantil</h1>
    <Table content={arrayHorariosNatInfantil}/>
</div>