import './Accordion.css'
import React from 'react'
import { Accordion, Card } from 'react-bootstrap'

export default props =>
    <div className="accordions d-flex">
        <Accordion defaultActiveKey="">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    Piscina <i class="fa fa-angle-down"></i>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ul>
                            <li>Hidroginástica</li>
                            <li>Natação</li>
                            <li>Raia livre</li>
                        </ul>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Pilates <i class="fa fa-angle-down"></i>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <ul>
                            <li>Pilates de aparelho</li>
                            <li>Pilates de Solo</li>
                        </ul>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
            <Accordion defaultActiveKey="">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Ginástica <i class="fa fa-angle-down"></i>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <ul>
                                <li>Alongamento</li>
                                <li>Bike</li>
                                <li>Circuito Funcional</li>
                                <li>MIXturado</li>
                                <li>Pump</li>
                                <li>Yoga</li>
                                <li>Yoga</li>
                                <li>Zumba</li>
                                <li>Cross Hiit</li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    Musculação
                    </Accordion.Toggle>
                </Card>
        </Accordion>
    </div> 