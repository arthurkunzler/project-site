import  React from 'react'
import './Table.css'

import Table from 'react-bootstrap/Table'


export default props =>
    <div className="div-table p-1 m-4">
        <Table responsive striped bordered>
            <thead className="text-center">
                <tr key="head">
                    <th key='0'>Hora \ Dia</th>
                    <th key="1">Segunda</th>
                    <th key="2">Terça</th>
                    <th key="3">Quarta</th>
                    <th key="4">Quinta</th>
                    <th key="5">Sexta</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {props.content.map((value, index) => {
                    return(
                        <tr key={index}>
                            {value.map((text, indice) => {
                                return(
                                    <td key={indice}>{text}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    </div>