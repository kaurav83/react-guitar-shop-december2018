import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './hoc/layout';
import RegisterLogin from './components/Register_login'; 
import Register from './components/Register_login/register';
import UserDashboard from './components/User';
import Auth from './hoc/auth';
import Shop from './components/SHOP/SHOP';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/user/dashboard" exact component={Auth(UserDashboard, true)} />
                <Route path="/" exact component={Auth(Home, null)} />
                <Route path="/register_login" component={Auth(RegisterLogin, false)} />
                
                <Route path="/shop" component={Auth(Shop, null)} />

                <Route path="/register" component={Auth(Register, false)} />
            </Switch>
        </Layout>
    )
}

export default Routes;