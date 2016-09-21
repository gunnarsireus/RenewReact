import React, { Component } from 'react';
import {hideMessage,validateAccountFailed} from '../../../js/site-login.js';
import {siteAjaxPost,siteGoTo} from '../../../js/site-base.js';
import {getFormData} from '../../../js/site-components/site-xcomp-inputforms.js';
import {clearAll} from '../../../js/site-components/site-xcomp-localstorage.js';
import Input from '../../Common/Input.js';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';

import LoginActions from '../actions/LoginActions';

export default class ValidateAccountPanel extends Component {
    displayName: 'ValidateAccountPanel';
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);  //Not working
        this.onRegister = this.onRegister.bind(this);
    };
    displayStyle() {
        return (this.props.show)?'block':'none';
    };
    onRegister() {
        siteGoTo('/Register');
    };
    onKeyDown() {
        onLogin();  //Not working
    }
    onLogin() {
        function navigateToHome() {
            //clearAll();   
            LoginActions.inactivateAll();
            var isUserAuthorized = "UserAuthorized";
            localStorage.setItem("isUserAuthorized", isUserAuthorized);
            var host = window.location.href + "#/";
            host = host.replace("Login", ""); //Remove Login from browser url
            window.location.href = host;
            window.location.href = window.location.href;
            window.location.replace(host); //Make visible removed Login from browser url
        };
        var validateForm  = $('#validate-account-form');
        var validatePanel = $('#validate-account-panel');
        var data = getFormData(validateForm);
        if (data) {
            hideMessage(validateForm);
            siteAjaxPost('/Login/ValidateAccount', data, navigateToHome, validateAccountFailed);
        }
    };
    render() {
        return  <Row id="validate-account-panel" style={{display:this.displayStyle()}}>
         <Col xsOffset={2} xs={8} smOffset={3} sm={6} mdOffset={3} md={6} lgOffset={4} lg={4} className="site-form-border">
            <fieldset>
                <center>
                    <h3>Renew Service</h3>
                </center>
                <br />

                <form id="validate-account-form">
                    <Row>
                        <Col md={12}>
                            <div className="form-group">
                                <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="email">Användare</label>
                                <Col md={9} className="input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-user"></span>
                                    </span>
                                    <Input className="form-control"
                                           dataAutoajax={true}
                                           dataVal={true}
                                           dataValLengthMin="5"
                                           dataLalLengthMax="100"
                                           dataValLength="Användare måste vara mellan 5 och 100 tecken"
                                           dataValRequired="Användare får inte vara tom"
                                           id="email"
                                           name="email"
                                           type="text"
                                           value="" />
                                </Col>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="password">Lösenord</label>
                                <Col md={9} className="input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock"></span>
                                    </span>
                                    <Input className="form-control"
                                           dataAutoajax={true}
                                           dataVal={true}
                                           dataValLengthMin="6"
                                           dataValLengthMax="45"
                                           dataValLength="Lösenord måste vara mellan 6 och 45 tecken"
                                           dataValRequired="Lösenord får inte vara tom"
                                           id="password"
                                           name="password"
                                           type="password"
                                           value="" />
                                </Col>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Button id="register-Button" onClick={this.onRegister}  className="btn btn-success pull-left ">Registrera</Button>
                        </Col>
                         <Col md={6}>
                            <Button id="validate-Button" onClick={this.onLogin} onKeyDown={this.onKeyDown} className="btn btn-info pull-right ">Logga in</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div id="forgot-password-link" className="text-info text-right site-row-spacing" style={{cursor:"pointer"}}>Glömt lösenord?</div>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={12}>
                            <div id="custom-message" className="alert alert-warning" hidden></div>
                        </Col>
                    </Row>
                </form>
            </fieldset>
        </Col>
    </Row>
   
;}
};
ValidateAccountPanel.propTypes= {
    show: React.PropTypes.bool.isRequired
};  