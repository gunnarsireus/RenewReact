import React, { Component } from 'react';
import Calendar from './Calendar.js';
import External from './External.js';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';

export default class CalendarApp extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
        <Row>
            <Col md={2}>
                <External />
            </Col>
            <Col md={10}>
                <Calendar divId={'divCalenderApp'}/>
            </Col>
         </Row>
        );
    }
}