import React, { Component } from 'react';
import Input from '../../Common/Input.js';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';
export default class ForgotAccountPanel extends Component {
    displayName: 'ForgotAccountPanel';
    constructor(props) {
        super(props);
    };
    displayStyle() {
        return (this.props.show)?'block':'none';
    };
    render() {
        return <Row id="forgot-account-panel" style={{display:this.displayStyle()}}>
        <Col  xsOffset={2} xs={8} smOffset={3} sm={6} mdOffset={3} md={6} lgOffset={4} lg={4}  className="site-form-border">
            <fieldset>
                <center>
                    <h3>Glömt lösenord</h3>
                    <i><small>PIN-kod för verifiering skickas till e-postadressen</small></i>
                </center>
                <br />

                <form id="forgot-account-form">
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
                                           daataVal={true}
                                           dataValLengthMin="5"
                                           dataValLengthMax="100"
                                           dataValLength="E-post måste vara mellan 5 och 100 tecken"
                                           dataValRequired="E-post får inte vara tom"
                                           id="email"
                                           name="email"
                                           type="text"
                                           value="" />
                                </Col>
                            </div>

                        </Col>
                    </Row>
                    <Row >
                        <Col md={6}>
                            <div id="go-back-link" className="text-info text-left site-half-row-spacing" style={{cursor:"pointer"}}>Tillbaka</div>
                        </Col>
                        <Col md={6}>
                            <Button id="sendpin-button" className="btn btn-info pull-right ">Skicka</Button>
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
ForgotAccountPanel.propTypes= {
   show: React.PropTypes.bool.isRequired
}; 