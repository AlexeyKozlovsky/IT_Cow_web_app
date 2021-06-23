import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'
import { LOGIN_ROUTE, ROOT_ROUTE } from '../utils/consts'


export default function AppRouter() {
    const user = true
    return user ? 
        (
            <Switch>
                {privateRoutes.map(({path, Component}) => 
                    <Route path={path} component={Component} exact={true}/>)}
                <Redirect to={ROOT_ROUTE}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) => 
                    <Route path={path} component={Component} exact={true}/>)}
                <Redirect to={LOGIN_ROUTE}/>
            </Switch>
        )
}