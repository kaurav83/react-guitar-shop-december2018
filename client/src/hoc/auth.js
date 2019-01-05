import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../actions/user_actions';


export default function (ComposedClass, reload, adminRoute = null) {
    class AuthenticationCheck extends Component {
        state = {
            loading: true
        }

        componentDidMount() {
            this.interval = setTimeout(() => {
                this.props.dispatch(auth()).then(response => {
                    console.log(response, 'res')
                    let user = this.props.user.userData;

                    if (!user.isAuth) {
                        if (reload) {
                            this.props.history.push('/register_login');
                        }
                    } else {
                        if (adminRoute && !user.isAdmin) {
                            this.props.history.push('/user/dashboard');
                        } else {
                            if (reload === false) {
                                this.props.history.push('/user/dashboard');
                            }
                        }
                    }
                    
                    this.setState({
                        loading: false
                    })
                })
            }, 0)
        }

        componentWillUnmount() {
            clearTimeout(this.interval);
        }

        render() {
            if (this.state.loading) {
                return (
                    <div className="main_loader">
                        Loading...
                    </div>
                )
            }
            return (
                <ComposedClass {...this.props} user={this.props.user} />
            )
        }
    }

    function mapStateToProps(state) {
        return {
            user: state.user
        }
    }

    return connect(mapStateToProps)(AuthenticationCheck)

}
