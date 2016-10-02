import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';
import Calendar from '../../Common/Calendar.js'
import PagaendeActions from '../actions/PagaendeActions';

export default class IssueCalendarView extends Component {
    displayName: 'IssueCalendarView';
    constructor(props) {
        super(props);
    };
    displayStyle() {
        return (this.props.show)?'block':'none';
    };
    render() {
        return  <Row id="issue-calendar-view" style={{display:this.displayStyle()}}>
                    <Col md={12}>
                        <Calendar />
                    </Col>
                </Row>  
;}
};
IssueCalendarView.propTypes= {
   show: React.PropTypes.bool.isRequired
}; 