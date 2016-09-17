import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import Logotype from '../../../img/logotype.png';

export default class Index extends Component {
    displayName: 'LeftPart';
    render() {
        return <Col md={3} className="site-page-control">
            <h3 className="site-page-header">Renew Service</h3>
            <Row className="hidden-sm hidden-xs">
               <Col md={12}>
                  <img className="site-item margin-top" src={Logotype} />
                    <p className="site-item margin-top">
                        Fastighetsförvaltning
                    </p>
                    <p className="site-item margin-top">
                        Renew Service AB<br />
                        Org.nr 556818-8873<br />
                        Box 936<br />
                        Bjursvägen 29<br />
                        194 29 Upplands Väsby
                    </p>
                    <p>
                        <Glyphicon glyph="phone-alt" style={{color:"grey"}}/>&nbsp;08 34 38 00<br />
                        <Glyphicon glyph="envelope" style={{color:"grey"}}/>&nbsp;info@renewservice.se
                    </p>
                </Col>
            </Row>
        </Col>
                            ;}
};