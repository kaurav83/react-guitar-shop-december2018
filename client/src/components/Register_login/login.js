import React, { Component } from 'react';
import FormField from '../utils/Form/FormField';
import { connect } from 'react-redux';
import {update} from '../utils/Form/formActions';

class login extends Component {
    state = {
        formError: false,
        formSuccess: '',
        formdata: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    }

    updateForm = (element) => { // !!! в файле ../utils/Form/formActions функция update - промежуточныый обработчик для валидации полей email и password
        const newFormdata = update(element, this.state.formdata, 'login');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    submitForm = (event) => {

    }

    render() {
        return (
            <div className="signin_wrapper">
                <form onSubmit={(event) => this.submitForm(event)}>
                    <FormField 
                        id={'email'}
                        formdata={this.state.formdata.email}
                        change={(element) => this.updateForm(element)}
                    />

                    <FormField 
                        id={'password'}
                        formdata={this.state.formdata.password}
                        change={(element) => this.updateForm(element)}
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (props) => {
    return {

    };
}

export default connect(mapStateToProps, {})(login);