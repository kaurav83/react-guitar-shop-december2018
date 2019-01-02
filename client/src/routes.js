import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './hoc/layout';
import RegisterLogin from './components/Register_login'; 
import Register from './components/Register_login/register';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register_login" component={RegisterLogin} />
                <Route path="/register" component={Register} />
            </Switch>
        </Layout>
    )
}

export default Routes;