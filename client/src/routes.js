import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './hoc/layout';
import RegisterLogin from './components/Register_login'; 

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register_login" component={RegisterLogin} />
            </Switch>
        </Layout>
    )
}

export default Routes;