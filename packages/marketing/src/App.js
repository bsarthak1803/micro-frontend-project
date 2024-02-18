import React from 'react'
import Landing from './components/Landing'
import Pricing from './components/Pricing'
import {StylesProvider} from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default () => {
    return (
        <>
        <StylesProvider>
            <Router>
                <Switch>
                    <Route exact path="/pricing" component={Pricing}/>
                    <Route exact path="/" component={Landing}/>
                </Switch>
            </Router>
        </StylesProvider>
        </>
    )
}