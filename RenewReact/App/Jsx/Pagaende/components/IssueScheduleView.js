import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';

import PagaendeActions from '../actions/PagaendeActions';

export default class IssueScheduleView extends Component {
    displayName: 'IssueScheduleView';
    constructor(props) {
        super(props);
    };
    displayStyle() {
        return (this.props.show)?'block':'none';
    };  
    render() {
        return  <Row id="issue-schedule-view" style={{display:this.displayStyle()}}>
                    <Col md={12}>
                     <div id="issueschedule-div"></div>
                    </Col>
             </Row>
     ;}
};
IssueScheduleView.propTypes= {
   show: React.PropTypes.bool.isRequired
}; 