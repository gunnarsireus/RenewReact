import React, { Component } from 'react';

export default class Index extends Component {

    render() {
        return   <div>
    <div className="row" id="validate-account-panel" hidden>
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
                                <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="email">Anv�ndare</label>
                                <div className="col-md-9 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-user"></span>
                                    </span>
                                    <input className="form-control"
                                           data-autoajax="true"
                                           data-val="true"
                                           data-val-length-min="5"
                                           data-val-length-max="100"
                                           data-val-length="Anv�ndare m�ste vara mellan 5 och 100 tecken"
                                           data-val-required="Anv�ndare f�r inte vara tom"
                                           id="email"
                                           name="email"
                                           type="text"
                                           value="" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="password">L�senord</label>
                                <div className="col-md-9 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock"></span>
                                    </span>
                                    <input className="form-control"
                                           data-autoajax="true"
                                           data-val="true"
                                           data-val-length-min="6"
                                           data-val-length-max="45"
                                           data-val-length="L�senord m�ste vara mellan 6 och 45 tecken"
                                           data-val-required="L�senord f�r inte vara tom"
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
                            <div id="forgot-password-link" className="text-info text-right site-row-spacing" style={{cursor:"pointer"}}>Gl�mt l�senord?</div>
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
    <div className="row" id="forgot-account-panel" hidden>
        <div className="col-xs-offset-2 col-xs-8 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4 site-form-border">
            <fieldset>
                <center>
                    <h3>Gl�mt l�senord</h3>
                    <i><small>PIN-kod f�r verifiering skickas till e-postadressen</small></i>
                </center>
                <br />


                <form id="forgot-account-form">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="email">E-post</label>
                                <div className="col-md-9 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-envelope"></span>
                                    </span>
                                    <input className="form-control"
                                           data-autoajax="true"
                                           data-val="true"
                                           data-val-length-min="5"
                                           data-val-length-max="100"
                                           data-val-length="E-post m�ste vara mellan 5 och 100 tecken"
                                           data-val-required="E-post f�r inte vara tom"
                                           id="email"
                                           name="email"
                                           type="text"
                                           value="" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div id="go-back-link" className="text-info text-left site-half-row-spacing" style={{cursor:"pointer"}}>Tillbaka</div>
                        </div>
                        <div className="col-md-6">
                            <button id="sendpin-button" type="button" className="btn btn-info pull-right ">Skicka</button>
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
    <div className="row" id="secure-account-panel" hidden>
        <div className="col-xs-offset-2 col-xs-8 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4 site-form-border">
            <fieldset>
                <center>
                    <h3>S�tt l�senord</h3>
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
                                    <input className="form-control"
                                           data-autoajax="true"
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
                                           data-autoajax="true"
                                           data-val="true"
                                           data-val-length-min="6"
                                           data-val-length-max="6"
                                           data-val-length="PIN-kod m�ste vara mellan 6 och 6 tecken"
                                           data-val-required="PIN-kod f�r inte vara tom"
                                           id="PIN"
                                           name="PIN"
                                          // onKeyPress="return Site.Validation.isNumber(event)"
                                           type="text"
                                           value="" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="password1">L�senord</label>
                                <div className="col-md-9 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock"></span>
                                    </span>
                                    <input className="form-control"
                                           data-autoajax="true"
                                           data-val="true"
                                           data-val-length-min="6"
                                           data-val-length-max="45"
                                           data-val-length="L�senord m�ste vara mellan 6 och 45 tecken"
                                           data-val-required="L�senord f�r inte vara tom"
                                           id="password1"
                                           name="password1"
                                          // onKeyUp="return Site.Validation.isSecurePassword(event)"
                                           type="password"
                                           value="" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="password2">Bekr�fta</label>
                                <div className="col-md-9 input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock"></span>
                                    </span>
                                    <input className="form-control"
                                           data-autoajax="true"
                                           data-val="true"
                                           data-val-length-min="6"
                                           data-val-length-max="45"
                                           data-val-length="Bekr�fta m�ste vara mellan 6 och 45 tecken"
                                           data-val-required="Bekr�fta f�r inte vara tom"
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
                            <button id="set-password-button" type="button" className="btn btn-info pull-right ">S�tt l�senord</button>
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
</div>
   
;}
};