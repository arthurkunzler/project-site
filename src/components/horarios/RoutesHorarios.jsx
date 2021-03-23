import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Ginastica from './ginastica/Ginastica'
import Hidroginastica from './hidroginastica/Hidroginastica'
import NatacaoAdulto from './natacao-adulto/NatacaoAdulto'
import NatacaoInfantil from './natacao-infantil/NatacaoInfantil'


export default props =>
    <Switch>
        <Route exact path="/horarios" component={Ginastica}/>
        <Route path="/horarios/ginastica" component={Ginastica}/>
        <Route path="/horarios/hidroginastica" component={Hidroginastica}/>
        <Route path="/horarios/natacao-adulto" component={NatacaoAdulto}/>
        <Route path="/horarios/natacao-infantil" component={NatacaoInfantil}/>
        <Redirect from="*" to="/horarios"/>
    </Switch>