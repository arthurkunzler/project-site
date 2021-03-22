import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Modalidades from '../components/modalidades/Modalidades'
import HorarioGin from '../components/horarios/horario-ginastica/HorarioGin'
import HorarioPiscina from '../components/horarios/horario-piscina/HorarioPiscina'
import Contato from '../components/contato/Contato'

export default props =>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/modalidades" component={Modalidades}/>
        <Route path="/horario-ginastica" component={HorarioGin}/>
        <Route path="/horario-piscina" component={HorarioPiscina}/>
        <Route path="/contato" component={Contato}/>
        <Redirect from="*" to="/"/>
    </Switch>