import React, { Component } from 'react';
import Input from '../../Common/Input.js';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';

import LoginActions from '../actions/LoginActions';

export default class SecureAccountPanel extends Component {
    displayName: 'SecureAccountPanel';
    constructor(props) {
        super(props);
    };
    displayStyle() {
        return (this.props.show)?'block':'none';
    };
    render() {
        return <Row id="secure-account-panel" style={{display:this.displayStyle()}}>
        <Col xsOffset={2} xs={8} smOffset={3} sm={6} mdOffset={3} md={6} lgOffset={4} lg={4} className="site-form-border">
            <fieldset>
                <center>
                    <h3>Sätt lösenord</h3>
                    <i><small>PIN-kod har skickats till e-postadressen</small></i>
                </center>
                <br />

                <form id="secure-account-form">
                    <Row>
                        <Col md={12}>
                            <Col className="form-group">
                                <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="email">E-post</label>
                                <Col md={9} className="input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-envelope"></span>
                                    </span>
                                    <Input className="form-control"
                                           dataAutoajax={true}
                                           id="email"
                                           name="email"
                                           type="text"
                                           value="" readonly/>
                                </Col>
                            </Col>

                            <Col className="form-group">
                                <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="PIN">PIN-kod</label>
                                <Col md={9} className="input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock"></span>
                                    </span>
                                    <Input className="form-control"
                                           dataAutoajax={true}
                                           dataVal={true}
                                           dataValLengthMin="6"
                                           dataValLengthMax="6"
                                           dataValLength="PIN-kod måste vara mellan 6 och 6 tecken"
                                           dataValRequired="PIN-kod får inte vara tom"
                                           id="PIN"
                                           name="PIN"
                                          // onKeyPress="return Site.Validation.isNumber(event)"
                                           type="text"
                                           value="" />
                                </Col>
                            </Col>

                            <Col className="form-group">
                                <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="password1">Lösenord</label>
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
                                           id="password1"
                                           name="password1"
                                          // onKeyUp="return Site.Validation.isSecurePassword(event)"
                                           type="password"
                                           value="" />
                                </Col>
                            </Col>

                            <Col className="form-group">
                                <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="password2">Bekräfta</label>
                                <Col md={9} className="input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock"></span>
                                    </span>
                                    <Input className="form-control"
                                           dataAutoajax={true}
                                           dataVal={true}
                                           dataValLengthMin="6"
                                           dataValLengthMax="45"
                                           dataValLength="Bekräfta måste vara mellan 6 och 45 tecken"
                                           dataValRequired="Bekräfta får inte vara tom"
                                           id="password2"
                                           name="password2"
                                          // onKeyUp="return Site.Validation.isSecurePassword(event)"
                                           type="password"
                                           value="" />
                                </Col>
                            </Col>

                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Button id="resend-pin-button" className="btn btn-default pull-left ">Ny PIN-kod</Button>
                        </Col>
                        <Col md={6}>
                            <Button id="set-password-button" className="btn btn-info pull-right ">Sätt lösenord</Button>
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
SecureAccountPanel.propTypes= {
   show: React.PropTypes.bool.isRequired
}; 