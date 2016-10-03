import React, { Component } from 'react';
import Scheduler from '../../Common/Scheduler.js';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';

export default class IssueScheduleView extends Component {
    displayName: 'IssueScheduleView';
    constructor(props) {
        super(props);
    };
    displayStyle() {
        return (this.props.show)?'block':'none';
    }; 
    componentDidMount() {

    }
    render() {
        return  <Row id="issue-schedule-view" style={{display:this.displayStyle()}}>
                    <Col md={12}>
                        <Scheduler divId={'issueschedule-div'}/>

                    </Col>
             </Row>
     ;}
};
IssueScheduleView.propTypes= {
   show: React.PropTypes.bool.isRequired
}; 