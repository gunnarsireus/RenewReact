import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import LeftPart from './leftpart';
import RightPart from './rightpart';
export default class Index extends Component {
    displayName: 'Home';
    render() {
        return  <Row>
                    <LeftPart />
                    <RightPart />
                </Row>

 ;}
};