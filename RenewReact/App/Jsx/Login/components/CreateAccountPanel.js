import React, { Component } from 'react';
import {hideMessage,validateAccountFailed} from '../../../js/site-login.js';
import Input from '../../Common/Input.js';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';

import LoginActions from '../actions/LoginActions';

export default class CreateAccountPanel extends Component {
    displayName: 'CreateAccountPanel';
    constructor(props) {
        super(props);
        this.onGoBack = this.onGoBack.bind(this);
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
        siteGoTo('/Register');  //Not working
    }
    onGoBack() {
        LoginActions.setActive(0);
    };
    render() {
        return  <Row id="create-account-panel" style={{display:this.displayStyle()}}>
    <Col xsOffset={2} xs={8} smOffset={3} sm={6} mdOffset={3} md={6} lgOffset={4} lg={4} className="site-form-border">
    <fieldset>
        <center>
            <h3>Registrering</h3>
            <i><small>PIN-kod för verifiering skickas till e-postadressen</small></i>
        </center>
        <br />

        <form id="create-account-form">
            <Row>
                <Col md={12}>
                <div className="form-group">
                    <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="email">E-post</label>
                    <Col md={9} className="input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-envelope"></span>
                    </span>
                    <Input className="form-control"
                           dataAutoajax={true}
                           dataVal={true}
                           dataValLengthMin="5"
                           dataLalLengthMax="100"
                           dataValLength="E-post måste vara mellan 5 och 100 tecken"
                           dataValRequired="E-psot får inte vara tom"
                           id="email"
                           name="email"
                           type="text"
                           value="" />
                    </Col>
                </div>

                <div className="form-group">
                    <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="firstname">Förnamn</label>
                    <Col md={9} className="input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-user"></span>
                    </span>
                    <Input className="form-control"
                           dataAutoajax={true}
                           dataVal={true}
                           dataValLengthMin="2"
                           dataValLengthMax="45"
                           dataValLength="Förnamn måste vara mellan 2 och 45 tecken"
                           dataValRequired="Förnamn får inte vara tom"
                           id="firstname"
                           name="firstname"
                           type="text"
                           value="" />
                    </Col>
                </div>

                <div className="form-group">
                    <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="lastname">Efternamn</label>
                    <Col md={9} className="input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-user"></span>
                    </span>
                    <Input className="form-control"
                           dataAutoajax={true}
                           dataVal={true}
                           dataValLengthMin="2"
                           dataValLengthMax="45"
                           dataValLength="Efternamn måste vara mellan 2 och 45 tecken"
                           dataValRequired="Efternamn får inte vara tom"
                           id="lastname"
                           name="lastname"
                           type="lastname"
                           value="" />
                    </Col>
                </div>


                <div className="form-group">
                    <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="phone">Telefonnr.</label>
                    <Col md={9} className="input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-phone-alt"></span>
                    </span>
                    <Input className="form-control"
                           dataAutoajax={true}
                           dataVal={true}
                           dataValLengthMin="2"
                           dataValLengthMax="45"
                           dataValLength="Telefonnr. får inte överstiga 45 tecken"
                           id="phone"
                           name="phone"
                                //onkeypress = "return Site.Validation.isPhoneNumber(event)"
                    type="text"
                    value="" />
                    </Col>
                </div>

                <div className="form-group">
                    <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="address">Adress</label>
                    <Col md={9} className="input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-map-marker"></span>
                    </span>
                    <Input className="form-control"
                           dataAutoajax={true}
                           dataVal={true}
                           dataValLengthMax="45"
                           dataValLength="Adress får inte överstiga 45 tecken"
                           id="phone"
                           name="phone"
                           type="text"
                           value="" />
                    </Col>
                </div>

                <div className="form-group">
                    <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="floor">Våning</label>
                    <Col md={9} className="input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-align-justify"></span>
                    </span>
                    <Input className="form-control"
                           dataAutoajax={true}
                           dataVal={true}
                           dataValLengthMax="45"
                           dataValLength="Våning får inte överstiga 45 tecken"
                           id="floor"
                           name="floor"
                           type="text"
                           value="" />
                    </Col>
                </div>

                <div className="form-group">
                    <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="apartment">Lägenhet</label>
                    <Col md={9} className="input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-align-justify"></span>
                    </span>
                    <Input className="form-control"
                           dataAutoajax={true}
                           dataVal={true}
                           dataValLengthMax="45"
                           dataValLength="Lägenhet får inte överstiga 45 tecken"
                           id="apartment"
                           name="apartment"
                           type="text"
                           value="" />
                    </Col>
                </div>
                <div className="form-group">
                    <label className="control-label col-md-3"  style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="customerid">F&#246;rening</label>
                    <Col md={9} className="input-group"><span className="input-group-addon"><span className="glyphicon glyphicon-unchecked"></span></span><select data-autoajax="true" data-width="100%" id="customerid" name="customerid"></select></Col>
                </div>
                <Row>
                    <Col md={6}>
                    <div id="go-back-link" onClick={this.onGoBack} className="text-info text-left site-half-row-spacing" style={{cursor:"pointer"}}>Tillbaka</div>
                    </Col>
                    <Col md={6}>
                    <Button id="register-button" className="btn btn-info pull-right ">Registrera</Button>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={12}>
                        <div id="custom-message" className="alert alert-warning" hidden></div>
                    </Col>
                </Row>
                </Col>
            </Row>
        </form>
    </fieldset>
    </Col>
</Row>

;}
};
CreateAccountPanel.propTypes= {
    show: React.PropTypes.bool.isRequired
};  