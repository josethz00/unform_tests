import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes(){
    return(
            
        <BrowserRouter>
            <Switch>{/*Garantir q será uma rota executada por momento/vez */}
                <Route path="/" exact component={Logon} /> {/**O caminho tem q ser igual, exatamente esse para mostrar o login, sempre se usa isso na rota main */}
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}

