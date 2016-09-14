import React, { Component } from 'react';
import Input from './input.js';
export default class SecureAccountPanel extends Component {
    displayName: 'SecureAccountPanel';
    propTypes: {
       show: React.PropTypes.bool.isRequired
    };
    displayStyle() {
        return (this.props.show)?'block':'none';
    };
    render() {
        return <div className="row" id="secure-account-panel" style={{display:this.displayStyle()}}>
        <div className="col-xs-offset-2 col-xs-8 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4 site-form-border">
            <fieldset>
                <center>
                    <h3>Sätt lösenord</h3>
                    <i><small>PIN-kod har skickats till e-postadressen</small></i>
                </center>
                <br />

                <form id="secure-account-form">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="email">E-post</label>
                                <div className="col-md-9 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-envelope"></span>
                                    </span>
                                    <Input className="form-control"
                                           dataAutoajax={true}
                                           id="email"
                                           name="email"
                                           type="text"
                                           value="" readOnly=""/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="PIN">PIN-kod</label>
                                <div className="col-md-9 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock"></span>
                                    </span>
                                    <input className="form-control"
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
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="password1">Lösenord</label>
                                <div className="col-md-9 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock"></span>
                                    </span>
                                    <input className="form-control"
                                           dataAutoajax="true"
                                           dataVal="true"
                                           dataValLength-min="6"
                                           dataValLength-max="45"
                                           dataValLength="Lösenord måste vara mellan 6 och 45 tecken"
                                           dataValRequired="Lösenord får inte vara tom"
                                           id="password1"
                                           name="password1"
                                          // onKeyUp="return Site.Validation.isSecurePassword(event)"
                                           type="password"
                                           value="" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="password2">Bekräfta</label>
                                <div className="col-md-9 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock"></span>
                                    </span>
                                    <input className="form-control"
                                           dataAutoajax="true"
                                           dataVal="true"
                                           dataValLength-min="6"
                                           dataValLength-max="45"
                                           dataValLength="Bekräfta måste vara mellan 6 och 45 tecken"
                                           dataValRequired="Bekräfta får inte vara tom"
                                           id="password2"
                                           name="password2"
                                          // onKeyUp="return Site.Validation.isSecurePassword(event)"
                                           type="password"
                                           value="" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <button id="resend-pin-button" type="button" className="btn btn-default pull-left ">Ny PIN-kod</button>
                        </div>
                        <div className="col-md-6">
                            <button id="set-password-button" type="button" className="btn btn-info pull-right ">Sätt lösenord</button>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-12">
                            <div id="custom-message" className="alert alert-warning" hidden></div>
                        </div>
                    </div>
                </form>
            </fieldset>
        </div>
    </div>
   
;}
};