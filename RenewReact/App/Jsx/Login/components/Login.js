import React, { Component } from 'react';
import ValidateAccountPanel from './ValidateAccountPanel';
import CreateAccountPanel from './CreateAccountPanel';
import SecureAccountPanel from './SecureAccountPanel';
import ForgotAccountPanel from './ForgotAccountPanel';
import LoginActions from '../actions/LoginActions';
import LoginStore from '../stores/LoginStore';

export default class Login extends Component {
    displayName: 'Login';
    constructor(props) {
        super(props);
        this.state = {
            panelList: LoginStore.getPanels(),
            activeId :LoginStore.getActiveId
        };
    };
    componentDidMount() {
        LoginStore.addChangeListener(this.onChange);
    };
    componentWillUnmount() {
        LoginStore.removeChangeListener(this.onChange);
    };
    onChange() {
        this.setState({
            panelList: LoginStore.getPanels(),
            activeId: LoginStore.getActiveId()
        });
    };
    render() {
        return <div>
                    <ValidateAccountPanel show={this.state.panelList[0].active} />
                    <CreateAccountPanel show={this.state.panelList[1].active} />
                    <ForgotAccountPanel show={this.state.panelList[2].active} />
                    <SecureAccountPanel show={this.state.panelList[3].active} />
                </div>
        ;}
};