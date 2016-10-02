import React, { Component } from 'react';
import Input from '../../Common/Input.js';
import CreateIssuePanel from './CreateIssuePanel.js';
import IssueCalendarView from './IssueCalendarView.js';
import IssueScheduleView from './IssueScheduleView.js';
import IssueListView from './IssueListView.js';
import PagaendeActions from '../actions/PagaendeActions';
import PagaendeStore from '../stores/PagaendeStore';
import jquery from 'jquery';
import jqueryUi from 'jquery-ui';
import moment from 'moment';
import fullcalendar from 'fullcalendar';
import fullcalendarScheduler from 'fullcalendar-scheduler';
import style0 from '../../../css/FullCalendar-2.6.1/fullcalendar.css';
import style from '../../../css/site.css';

import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';

export default class Pagaende extends Component {
    displayName: 'Pagaende';
    constructor(props) {
        super(props);
        this.state = {
            panelList: PagaendeStore.getPanels(),
            activeId :PagaendeStore.getActiveId()
        };
        this.onChange = this.onChange.bind(this);
        this.onCalendar = this.onCalendar.bind(this);
        this.onSchedule = this.onSchedule.bind(this);
        this.onList = this.onList.bind(this);
    };
    componentDidMount() {
        PagaendeStore.addChangeListener(this.onChange);
    };
    componentWillUnmount() {
        PagaendeStore.removeChangeListener(this.onChange);
    };
    componentWillReceiveProps() {
        this.setState({
            activeId: PagaendeStore.getActiveId()
        });
        alert('componentWillReceiveProps() ' + this.state.activeId)
    };
    onChange() {
        this.setState({
            panelList: PagaendeStore.getPanels(),
            activeId: PagaendeStore.getActiveId()
        });
    };
    onCalendar() {
        PagaendeActions.setActive(1);
    };
    onSchedule() {
        PagaendeActions.setActive(2);
    };
    onList() {
        PagaendeActions.setActive(2);
    };
    render() {
        return <div>
        <Row id="page-issue-all">
            <Col md={2} className="col-md-2 site-page-control">
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
</Col>
<Col md={10} className="site-page-content">
    <CreateIssuePanel show={this.state.panelList[0].active}/>
    <IssueCalendarView show={this.state.panelList[1].active}/>
    <IssueScheduleView show={this.state.panelList[2].active}/>
    <IssueListView show={this.state.panelList[3].active}/>				
</Col>
</Row>
<Row id="page-issue-one" hidden>
<Col md={2} className="site-page-control">
<h3 className="site-page-header">Ärende <span id="issue-page-one-number"></span> <img src={'../../../App/img/help.png'} id="page-description-tooltip" className="site-clickable" /></h3>
<Row id="command-issue-panel">
    <Col md={12}>
    <Row>
        <Col md={12}>
        <h4>Status</h4>
        <span id="command-issue-panel-curr-status-10" hidden>
            <img src={'../../../App/img/status10.png'} /> Prelimin&#228;r
        </span>
        <span id="command-issue-panel-curr-status-20" hidden>
            <img src={'../../../App/img/status20.png'} /> &#214;ppen
        </span>
        <span id="command-issue-panel-curr-status-30" hidden>
            <img src={'../../../App/img/status30.png'} /> P&#229;b&#246;rjad
        </span>
        <span id="command-issue-panel-curr-status-40" hidden>
            <img src={'../../../App/img/status40.png'} /> St&#228;ngd
        </span>
        <span id="command-issue-panel-curr-status-50" hidden>
            <img src={'../../../App/img/status50.png'} /> Godk&#228;nd
        </span>
        <span id="command-issue-panel-curr-status-60" hidden>
            <img src={'../../../App/img/status60.png'} /> Slutf&#246;rd
        </span>
        <span id="command-issue-panel-curr-status-61" hidden>
            <img src={'../../../App/img/status61.png'} /> Fakturerad
        </span>
        <span id="command-issue-panel-curr-status-70" hidden>
            <img src={'../../../App/img/status70.png'} /> Avslagen
        </span>
        </Col>
    </Row>
    <Row className="site-row-spacing">
        <Col md={12}>
        <h4>Åtgärder</h4>
        </Col>
    </Row>
    <Row id="command-issue-panel-next-status-for-10" hidden>
        <Col md={12}>
        <p>
            <img className="command-issue-panel-nextstatus site-clickable" data-tostatus="20" data-tostatusname="&#214;ppen" src={'../../../App/img/status20asnext.png'} /> Till &#214;ppen
        </p>
        <p>
            <img className="command-issue-panel-nextstatus site-clickable" data-tostatus="70" data-tostatusname="Avslagen" src={'../../../App/img/status70asnext.png'} /> Till Avslagen
        </p>
        </Col>
    </Row>
    <Row id="command-issue-panel-next-status-for-20" hidden>
        <Col md={12}>
        <p>
            <img className="command-issue-panel-nextstatus site-clickable" data-tostatus="30" data-tostatusname="P&#229;b&#246;rjad" src={'../../../App/img/status30asnext.png'} /> Till P&#229;b&#246;rjad
        </p>
        <p>
            <img className="command-issue-panel-nextstatus site-clickable" data-tostatus="70" data-tostatusname="Avslagen" src={'../../../App/img/status70asnext.png'} /> Till Avslagen
        </p>
        </Col>
    </Row>
    <Row id="command-issue-panel-next-status-for-30" hidden>
        <Col md={12}>
        <p>
            <img className="command-issue-panel-nextstatus site-clickable" data-tostatus="40" data-tostatusname="St&#228;ngd" src={'../../../App/img/status40asnext.png'} /> Till St&#228;ngd
        </p>
        <p>
            <img className="command-issue-panel-nextstatus site-clickable" data-tostatus="70" data-tostatusname="Avslagen" src={'../../../App/img/status70asnext.png'} /> Till Avslagen
        </p>
        </Col>
    </Row>
    <Row id="command-issue-panel-next-status-for-40" hidden>
        <Col md={12}>
        <p>
            <img className="command-issue-panel-nextstatus site-clickable" data-tostatus="30" data-tostatusname="P&#229;b&#246;rjad" src={'../../../App/img/status30asnext.png'} /> Till P&#229;b&#246;rjad
        </p>
        <p>
            <img className="command-issue-panel-nextstatus site-clickable" data-tostatus="50" data-tostatusname="Godk&#228;nd" src={'../../../App/img/status50asnext.png'} /> Till Godk&#228;nd
        </p>
        </Col>
    </Row>
    <Row id="command-issue-panel-next-status-for-50" hidden>
        <Col md={12}>
        <p>
            <img className="command-issue-panel-nextstatus site-clickable" data-tostatus="60" data-tostatusname="Slutf&#246;rd" src={'../../../App/img/status60asnext.png'} /> Till Slutf&#246;rd
        </p>
        <p>
            <img className="command-issue-panel-nextstatus site-clickable" data-tostatus="61" data-tostatusname="Fakturerad" src={'../../../App/img/status61asnext.png'} /> Till Fakturerad
        </p>
        </Col>
    </Row>
    <Row id="command-issue-panel-next-status-for-60" hidden>
        <Col md={12}>
        </Col>
    </Row>
    <Row id="command-issue-panel-next-status-for-61" hidden>
        <Col md={12}>
        </Col>
    </Row>
    <Row id="command-issue-panel-next-status-for-70" hidden>
        <Col md={12}>
        </Col>
    </Row>
    <Row className="site-pagemargin-top">
        <Col md={12}>
        <img src={'../../../App/img/return.png'} id="command-issue-panel-exit" className="site-clickable" /> Tillbaka
        </Col>
    </Row>
    </Col>
</Row>
</Col>
<Col md={10} className="site-page-content">
<Row id="issue-tabs-page">
    <Col md={12}>
    <ul className="nav nav-tabs">
        <li role="presentation" className="active tabmenu"><a href="#">Uppgift</a></li>
        <li role="presentation" className=" tabmenu"><a href="#">Kommentarer</a></li>
        <li role="presentation" className=" tabmenu"><a href="#">Historik</a></li>
    </ul>
    </Col>
</Row>
<br />
<Row id="issue-tabproblem-page" hidden>
    <Col md={10} mdOffset={1}>
    <form id="issue-tabproblem-form">
        <div className="form-group">
            <div className="input-group">
                <input data-autoajax="true"
        id="issueid"
        name="issueid"
        type="hidden"
        value="" />
        </div>
        </div>
        <Row>
        <Col md={6}>
        <div className="form-group">
            <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="name">Titel</label>
            <Col md={9} className="input-group">
            <span className="input-group-addon">
                <span className="glyphicon glyphicon-header"></span>
            </span>
            <input className="form-control"
    data-autoajax="true"
    data-val="true"
    data-val-length-min="2"
    data-val-length-max="45"
    data-val-length="Titel måste vara mellan 2 och 45 tecken"
    data-val-required="Titel får inte vara tom"
    id="name"
    name="name"
    type="text"
    value="" />
    </Col>
    </div>
    <div className="form-group">
        <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="assignedid">Tilldelad</label>
        <Col md={9} className="input-group">
        <span className="input-group-addon">
            <span className="glyphicon glyphicon-ban-circle"></span>
        </span>
        <select className="selectpicker"
data-autoajax="true"
data-width="100%"
id="assignedid"
name="assignedid">
<option value="128">Admin</option>
<option value="16">Ledning</option>
<option value="4">Tekniker</option>
</select>
</Col>
</div>
<div className="form-group">
    <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="startdatestring">Startdatum</label>
    <Col md={9} className="input-group date clockpicker" id="date-container-for-startdatestring-2">
    <span className="input-group-addon">
        <span className="glyphicon glyphicon-calendar"></span>
    </span>
    <input className="form-control"
data-autoajax="true"
data-date="2016-09-27"
data-date-autoclose="true"
data-date-calendar-weeks="true"
data-date-container="#date-container-for-startdatestring-2"
data-date-format="yyyy-mm-dd"
data-date-language="sv"
data-date-orientation="bottom left"
data-date-today-btn="linked"
data-date-today-highlight="true"
data-date-week-start="1"
data-provide="datepicker"
data-val="true"
data-val-required="Datum får inte vara tomt"
id="startdatestring"
name="startdatestring"
type="text"
value="" />
<span className="input-group-btn" style={{width:"0px"}}></span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-required="Klockslag får inte vara tomt"
id="starttimestring"
name="starttimestring"
type="text"
placeholder="16:57"
value="" />
</Col>
</div>
<div className="form-group">
    <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="enddatestring">Slutdatum</label>
    <Col md={9} className="input-group date clockpicker" id="date-container-for-enddatestring-3">
    <span className="input-group-addon">
        <span className="glyphicon glyphicon-calendar"></span>
    </span>
    <input className="form-control"
data-autoajax="true"
data-date="2016-09-27"
data-date-autoclose="true"
data-date-calendar-weeks="true"
data-date-container="#date-container-for-enddatestring-3"
data-date-format="yyyy-mm-dd"
data-date-language="sv"
data-date-orientation="bottom left"
data-date-today-btn="linked"
data-date-today-highlight="true"
data-date-week-start="1"
data-provide="datepicker"
data-val="true"
data-val-required="Datum får inte vara tomt"
id="enddatestring"
name="enddatestring"
type="text"
value="" />
<span className="input-group-btn" style={{width:"0px"}}></span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-required="Klockslag får inte vara tomt"
id="endtimestring"
name="endtimestring"
type="text"
placeholder="16:57"
value="" />
</Col>
</div>
<div className="form-group">
    <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="issueclassid">Ärendeklass</label>
    <Col md={9} className="input-group">
    <span className="input-group-addon">
        <span className="glyphicon glyphicon-sort-by-attributes"></span>
    </span>
    <select className="selectpicker"
data-autoajax="true"
data-width="100%"
id="issueclassid"
name="issueclassid">
<option value="0">--</option>
</select>
</Col>
</div>
<div className="form-group">
    <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="prio">Prioritet</label>
    <Col md={9} className="input-group">
    <span className="input-group-addon">
        <span className="glyphicon glyphicon-exclamation-sign"></span>
    </span>
    <select className="selectpicker"
data-autoajax="true"
data-width="100%"
id="prio"
name="prio">
<option value="0">--</option>
<option value="1">Låg</option>
<option value="2">Normal</option>
<option value="3">Hög</option>
<option value="4">Akut</option>
</select>
</Col>
</div>
<div className="form-group">
    <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="responsible">Utförare</label>
    <Col md={9} className="input-group">
    <span className="input-group-addon">
        <span className="glyphicon glyphicon-user"></span>
    </span>
    <select className="selectpicker"
data-autoajax="true"
data-width="100%"
id="responsible"
name="responsible">
<option value="0">--</option>
<option value="41">Renew</option>
<option value="42">Kund</option>
</select>
</Col>
</div>
</Col>
<Col md={6}>
<div className="form-group">
    <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="customername">Kund</label>
    <Col md={9} className="input-group">
    <span className="input-group-addon">
        <span className="glyphicon glyphicon-th-list"></span>
    </span>
    <input className="form-control"
data-autoajax="true"
id="customername"
name="customername"
type="text"
value="" readOnly />
</Col>
</div>
<div className="form-group">
    <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="areatype">Utrymme</label>
    <Col md={9} className="input-group">
    <span className="input-group-addon">
        <span className="glyphicon glyphicon-map-marker"></span>
    </span>
    <select className="selectpicker"
data-autoajax="true"
data-width="100%"
id="areatype"
name="areatype">
<option value="0">--</option>
<option value="10">Gemensamhet</option>
<option value="20">Lägenhet</option>
</select>
</Col>
</div>
<div className="form-group">
    <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="description">Beskrivning</label>
    <Col md={9} className="input-group">
    <span className="input-group-addon">
        <span className="glyphicon glyphicon-pencil"></span>
    </span>
    <textarea className="form-control" rows="11"
data-autoajax="true"
data-val="true"
data-val-length-max="400"
data-val-length="Beskrivning får inte överstiga 400 tecken"
id="description"
name="description" />
</Col>
</div>
</Col>
</Row>
<br />
<Row>
<Col md={6}>
<Button className="site-buttonmargin-right btn-default btn issue-tabproblem-form-buttons" data-action="32">Uppdatera</Button>
</Col>
<Col md={6}>
<Button className="site-buttonmargin-left pull-right btn-info btn issue-tabproblem-form-buttons" data-action="8">Spara</Button>
</Col>
</Row>
</form>
</Col>
</Row>
<Row id="issue-tabfeedback-page" hidden>
    <Col md={10} mdOffset={1}>
    <Row id="create-issuefeedback-panel" hidden>
        <Col md={12}>
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title" id="title">Skapa kommentar</h3>
            </div>
            <div className="panel-body">
            <form id="create-issuefeedback-form">
                <div className="form-group">
                    <div className="input-group">
                        <input data-autoajax="true"
id="issueid"
name="issueid"
type="hidden"
value="" />
</div>
</div>
<Row>
<Col md={5}>
<div className="form-group">
   <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="accesstype">Synlighet</label>
   <Col md={9} className="input-group">
   <span className="input-group-addon">
       <span className="glyphicon glyphicon-ban-circle"></span>
   </span>
   <select className="selectpicker"
data-autoajax="true"
data-width="100%"
id="accesstype"
name="accesstype">
<option value="22">Publik</option>
<option value="21">Privat</option>
</select>
</Col>
</div>
</Col>
<Col md={7}>
<div className="form-group">
    <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="description">Kommentar</label>
    <Col md={9} className="input-group">
    <span className="input-group-addon">
        <span className="glyphicon glyphicon-pencil"></span>
    </span>
    <textarea className="form-control" rows="3"
data-autoajax="true"
data-val="true"
data-val-length-min="2"
data-val-length-max="200"
data-val-length="Kommentar måste vara mellan 2 och 200 tecken"
data-val-required="Kommentar får inte vara tom"
id="description"
name="description" />
</Col>
</div>
</Col>
</Row>
<Row>
<Col md={6}>
</Col>
<Col md={6}>
    <Button className="site-buttonmargin-left pull-right btn-success btn create-issuefeedback-form-buttons" data-action="4">Skapa</Button>
    <Button className="site-buttonmargin-left pull-right btn-default btn create-issuefeedback-form-buttons" data-action="2">Stäng</Button>
</Col>
</Row>
</form>
</div>
</div>
</Col>
</Row>
<form id="issue-tabfeedback-form">
<table id="issue-tabfeedback-table" className="table table-striped table-hover">
    <thead>
        <tr>
            <th>
                 
            </th>
            <th>Kommentar</th>
            <th>Från</th>
            <th>Datum</th>
            <th>Tid</th>
        </tr>
    </thead>
    <tbody></tbody>
    <tfoot>
        <tr>
            <th>
                 
            </th>
            <th>Kommentar</th>
            <th>Från</th>
            <th>Datum</th>
            <th>Tid</th>
        </tr>
    </tfoot>
</table>
<br />
<Row>
    <Col md={6}>
    <Button className="site-buttonmargin-right btn-default btn issue-tabfeedback-form-buttons" data-action="32">Uppdatera</Button>
    </Col>
    <Col md={6}>
    <Button className="site-buttonmargin-left pull-right btn-success btn issue-tabfeedback-form-buttons" data-action="4">Skapa</Button>
    </Col>
</Row>
</form>
</Col>
</Row>
<Row id="issue-tabhistory-page" hidden>
    <Col className="col-md-10 col-md-offset-1">
    <form id="issue-tabhistory-form">
        <table id="issue-tabhistory-table" className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Från status</th>
                    <th>Till status</th>
                    <th></th>
                    <th>Ändrad av</th>
                    <th>Datum</th>
                    <th>Klockslag</th>
                </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>
                    <th>Från status</th>
                    <th>Till status</th>
                    <th></th>
                    <th>Ändrad av</th>
                    <th>Datum</th>
                    <th>Klockslag</th>
                </tr>
            </tfoot>
        </table>
        <br />
        <Row>
            <Col md={6}>
            <Button className="site-buttonmargin-right btn-default btn issue-tabhistory-form-buttons" data-action="32">Uppdatera</Button>
            </Col>
            <Col md={6}>
            </Col>
        </Row>
    </form>
    </Col>
</Row>
</Col>
</Row>
</div>
;
}

};