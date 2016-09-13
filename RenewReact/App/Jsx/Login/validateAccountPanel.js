import React, { Component } from 'react';

export default class ValidateAccountPanel extends Component {
    displayName: 'ValidateAccountPanel';
    propTypes: {
       show: React.PropTypes.bool.isRequired
    };  
    displayStyle() {
        return (this.props.show)?'block':'none';
    };
    render() {
        return  <div className="row" id="validate-account-panel" style={{display:this.displayStyle()}}>
        <div className="col-xs-offset-2 col-xs-8 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4 site-form-border">
            <fieldset>
                <center>
                    <h3>Renew Service</h3>
                </center>
                <br />

                <form id="validate-account-form">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="email">Användare</label>
                                <div className="col-md-9 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-user"></span>
                                    </span>
                                    <input className="form-control"
                                           data-autoajax="true"
                                           data-val="true"
                                           data-val-length-min="5"
                                           data-val-length-max="100"
                                           data-val-length="Användare måste vara mellan 5 och 100 tecken"
                                           data-val-required="Användare får inte vara tom"
                                           id="email"
                                           name="email"
                                           type="text"
                                           value="" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="password">Lösenord</label>
                                <div className="col-md-9 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock"></span>
                                    </span>
                                    <input className="form-control"
                                           data-autoajax="true"
                                           data-val="true"
                                           data-val-length-min="6"
                                           data-val-length-max="45"
                                           data-val-length="Lösenord måste vara mellan 6 och 45 tecken"
                                           data-val-required="Lösenord får inte vara tom"
                                           id="password"
                                           name="password"
                                           type="password"
                                           value="" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <button id="register-button" type="button" className="btn btn-success pull-left ">Registrera</button>
                        </div>
                        <div className="col-md-6">
                            <button id="validate-button" type="button" className="btn btn-info pull-right ">Logga in</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div id="forgot-password-link" className="text-info text-right site-row-spacing" style={{cursor:"pointer"}}>Glömt lösenord?</div>
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