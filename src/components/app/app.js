import React from 'react';
import {MainPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc';

import Background from './food-bg.jpg';
import { Route, Switch } from 'react-router-dom';

const App = () => {

    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>
            <Switch>
                <Route path='/' exact component={() => {return <MainPage/>}}/>
                <Route path ='/:id' component ={ItemPage}/>
            </Switch>
        </div>
    )
}

export default WithRestoService()(App);