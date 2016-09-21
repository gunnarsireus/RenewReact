import React, { Component } from 'react';
import Input from '../../Common/Input.js';
export default class ForgotAccountPanel extends Component {
    displayName: 'ForgotAccountPanel';
    propTypes: {
       show: React.PropTypes.bool.isRequired
    };
    displayStyle() {
        return (this.props.show)?'block':'none';
    };
    render() {
        return <div className="row" id="forgot-account-panel" style={{display:this.displayStyle()}}>
        <div className="col-xs-offset-2 col-xs-8 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-4 col-lg-4 site-form-border">
            <fieldset>
                <center>
                    <h3>Glömt lösenord</h3>
                    <i><small>PIN-kod för verifiering skickas till e-postadressen</small></i>
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
                                    <Input className="form-control"
                                           dataAutoajax={true}
                                           daataVal={true}
                                           dataValLengthMin="5"
                                           dataValLengthMax="100"
                                           dataValLength="E-post måste vara mellan 5 och 100 tecken"
                                           dataValRequired="E-post får inte vara tom"
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
;}
};