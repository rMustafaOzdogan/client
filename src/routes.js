import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as React from 'react';
import { Suspense, lazy } from 'react';
import App from './App';
import Welcome from './welcome';
import LayoutComp from './layout';

const routes = () => (
    <Router>
        <Switch>
            <Suspense fallback={<div>"Yükleniyor...."</div>}>
                <Route exact path="/" component={Welcome}/>
                <Route exact path="/App" component={App}/>
            </Suspense>
        </Switch>
    </Router>
);

export default routes;