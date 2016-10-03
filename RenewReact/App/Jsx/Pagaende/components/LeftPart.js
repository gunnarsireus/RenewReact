import React, { Component } from 'react';
import Input from '../../Common/Input.js';

import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';

export default class LeftPart extends Component {
    displayName: 'LeftPart';
    constructor(props) {
        super(props);
    };

    render() {
        return <div>
				<h3 className="site-page-header">Ärenden <img src={'../../../App/img/help.png'} id="page-description-tooltip" className="site-clickable" /></h3>
				<Row id="filter-issue-panel">
					<Col md={12}>
						<Row>
							<Col md={12} className="btn-group btn-group-justified" role="group" aria-label="...">
								<div className="btn-group" role="group">
									<Button id="calendar-view-select" onClick={this.onCalendar} className="btn btn-default">
										<span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>
									</Button>
								</div>
								<div className="btn-group" role="group">
									<Button id="schedule-view-select" onClick={this.onSchedule}  className="btn btn-default">
										<span className="glyphicon glyphicon-tasks" aria-hidden="true"></span>
									</Button>
								</div>
								<div className="btn-group" role="group">
									<Button id="list-view-select" onClick={this.onList}  className="btn btn-default">
										<span className="glyphicon glyphicon-list" aria-hidden="true"></span>
									</Button>
								</div>
							</Col>
						</Row>
						<Row className="site-row-spacing">
							<Col md={12}>
								<h4>Kund</h4>
							</Col>
						</Row>
						<Row className="site-row-spacing">
							<Col md={12}>
								<select className="selectpicker"
        data-autoajax="false"
        data-width="100%"
        id="customer-select"
        name="customer-select">
    <option value="0">--</option>
    </select>
</Col>
</Row>
<Row className="site-row-spacing">
    <Col md={12}>
        <h4>Status</h4>
    </Col>
</Row>
<Row>
    <Col md={12}>
        <select className="selectpicker"
        data-autoajax="false"
        data-width="100%"
        id="status-select"
        name="status-select">
    <option value="0">--</option>
    <option value="10">Preliminär</option>
    <option value="20">Öppen</option>
    <option value="30">Påbörjad</option>
    <option value="40">Stängd</option>
    <option value="50">Godkänd</option>
    </select>
</Col>
</Row>
<Row className="site-row-spacing">
    <Col md={12}>
        <h4>Prioritet</h4>
    </Col>
</Row>
<Row>
    <Col md={12}>
        <select className="selectpicker"
        data-autoajax="false"
        data-width="100%"
        id="priority-select"
        name="priority-select">
<option value="0">--</option>
<option value="1">Låg</option>
<option value="2">Normal</option>
<option value="3">Hög</option>
<option value="4">Akut</option>
</select>
</Col>
</Row>
<Row className="site-row-spacing">
    <Col md={12}>
        <h4>Utrymme</h4>
    </Col>
</Row>
<Row>
    <Col md={12}>
        <select className="selectpicker"
        data-autoajax="false"
        data-width="100%"
        id="areatype-select"
        name="areatype-select">
    <option value="0">--</option>
    <option value="10">Gemensamhet</option>
        <option value="20">Lägenhet</option>
    </select>
</Col>
</Row>
<Row className="site-row-spacing">
    <Col md={12}>
        <h4>Nytt ärende</h4>
    </Col>
</Row>
<Row>
    <Col md={12}>
        <Button id="create-issue-button" className="btn btn-default pull-left ">Skapa</Button>
    </Col>
</Row>
</Col>
</Row>
</div>
;
}

};