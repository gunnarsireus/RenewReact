import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
export default class Index extends Component {
    displayName: 'RightPart';
    render() {
       return <Col md={9} className="site-page-content">
                <Row>
                  <Col md={12}>
                    Här kommer dashboard med statistik visas
                    <div>
                    </div>
                  </Col>
               </Row>
            </Col>

 ;}
};