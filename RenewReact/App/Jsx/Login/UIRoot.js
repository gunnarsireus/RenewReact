import React, { Component } from 'react';
import ValidateAccountPanel from './validateAccountPanel';
import SecureAccountPanel from './secureAccountPanel';
import ForgotAccountPanel from './forgotAccountPanel';

export default class UIRoot extends Component {
    displayName: 'UIRoot';
    render() {
        return <div> <ValidateAccountPanel show={true}  />
                <SecureAccountPanel show={false} />
                <ForgotAccountPanel show={false} /></div>
        ;}
};