import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Modalidades from '../components/modalidades/Modalidades'
import Horarios from '../components/horarios/Horarios'
import Contato from '../components/contato/Contato'

export default props =>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/modalidades" component={Modalidades}/>
        <Route path="/horarios" component={Horarios}/>
        <Route path="/contato" component={Contato}/>
        <Redirect from="*" to="/"/>
    </Switch>