import React, { Component } from 'react';
import ValidateAccountPanel from './validateAccountPanel';
import SecureAccountPanel from './secureAccountPanel';
import ForgotAccountPanel from './forgotAccountPanel';

export default class Login extends Component {
    displayName: 'Login';
    render() {
        return <div> <ValidateAccountPanel show={true}  />
                <SecureAccountPanel show={false} />
                <ForgotAccountPanel show={false} /></div>
        ;}
};