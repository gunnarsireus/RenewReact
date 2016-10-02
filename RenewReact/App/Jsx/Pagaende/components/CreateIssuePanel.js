import React, { Component } from 'react';
import Input from '../../Common/Input.js';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';

import PagaendeActions from '../actions/PagaendeActions';

export default class CreateIssuePanel extends Component {
    displayName: 'CreateIssuePanel';
    constructor(props) {
        super(props);
    };
    displayStyle() {
        return (this.props.show)?'block':'none';
    };
    render() {
        return  <div>
        <Row id="create-issue-panel" hidden>
             <Col md={12}>
                 <div className="panel panel-default">
                     <div className="panel-heading">
                         <h3 className="panel-title" id="title">Skapa &#228;rende</h3>
                     </div>
                     <div className="panel-body">
                         <form id="create-issue-form">
                             <div className="form-group">
                                 <div className="input-group">
                                     <input data-autoajax="false"
        id="customerid"
        name="customerid"
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
    <Col md={9} className="input-group date clockpicker" id="date-container-for-startdatestring-0">
        <span className="input-group-addon">
            <span className="glyphicon glyphicon-calendar"></span>
        </span>
        <input className="form-control"
data-autoajax="true"
data-date="2016-09-27"
data-date-autoclose="true"
data-date-calendar-weeks="true"
data-date-container="#date-container-for-startdatestring-0"
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
    <Col md={9} className="input-group date clockpicker" id="date-container-for-enddatestring-1">
        <span className="input-group-addon">
            <span className="glyphicon glyphicon-calendar"></span>
        </span>
        <input className="form-control"
data-autoajax="true"
data-date="2016-09-27"
data-date-autoclose="true"
data-date-calendar-weeks="true"
data-date-container="#date-container-for-enddatestring-1"
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
                        <div className="form-group">				    
    <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="description">Beskrivning</label>
    <Col md={9} className="input-group">
    <span className="input-group-addon">
        <span className="glyphicon glyphicon-pencil"></span>
    </span>
    <textarea className="form-control" rows="4"
data-autoajax="true"
data-val="true"
data-val-length-max="400"
data-val-length="Beskrivning får inte överstiga 400 tecken"
id="description"
name="description" />
</Col>
</div>
</Col>
<Col md={6}>
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
    <label className="control-label col-md-3" htmlFor="residentid" style={{marginLeft:"-15px", marginRight:"15px"}}>Boende</label>
    <Col md={9} className="input-group">
    <span className="input-group-addon">
        <span className="glyphicon glyphicon-unchecked">
        </span>
    </span>
    <select data-autoajax="true" data-width="100%" id="residentid" name="residentid"></select>
    </Col>
</div>
<div className="form-group">
    <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="firstname">Förnamn</label>
    <Col md={9} className="input-group">
    <span className="input-group-addon">
        <span className="glyphicon glyphicon-user"></span>
    </span>
    <input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-max="45"
data-val-length="Förnamn får inte överstiga 45 tecken"
id="firstname"
name="firstname"
type="text"
value="" />
</Col>
</div>
<div className="form-group">
    <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="lastname">Efternamn</label>
    <Col md={9} className="input-group">
    <span className="input-group-addon">
        <span className="glyphicon glyphicon-user"></span>
    </span>
    <input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-max="45"
data-val-length="Efternamn får inte överstiga 45 tecken"
id="lastname"
name="lastname"
type="text"
value="" />
</Col>
</div>
<div className="form-group">
    <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="phone">Telefon</label>
    <Col md={9} className="input-group">
    <span className="input-group-addon">
        <span className="glyphicon glyphicon-phone-alt"></span>
    </span>
    <input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-max="20"
data-val-length="Telefon får inte överstiga 20 tecken"
id="phone"
name="phone"
//onKeyPress="return Site.Validation.isPhoneNumber(event)"
type="text"
value="" />
</Col>
</div>
<div className="form-group">
    <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="email">E-post</label>
    <Col md={9} className="input-group">
    <span className="input-group-addon">
        <span className="glyphicon glyphicon-envelope"></span>
    </span>
    <input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-max="60"
data-val-length="E-post får inte överstiga 60 tecken"
id="email"
name="email"
type="text"
value="" />
</Col>
</div>
<div className="form-group">
    <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="address">Adress</label>
    <Col md={9} className="input-group">
    <span className="input-group-addon">
        <span className="glyphicon glyphicon-map-marker"></span>
    </span>
    <input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-max="45"
data-val-length="Adress får inte överstiga 45 tecken"
id="address"
name="address"
type="text"
value="" />
</Col>
</div>
<div className="form-group">
    <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="floor">Våningsplan</label>
    <Col md={9} className="input-group">
    <span className="input-group-addon">
        <span className="glyphicon glyphicon-align-justify"></span>
    </span>
    <input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-max="10"
data-val-length="Våningsplan får inte överstiga 10 tecken"
id="floor"
name="floor"
type="text"
value="" />
</Col>
</div>
<div className="form-group">
    <label className="control-label col-md-3" style={{marginLeft:"-15px", marginRight:"15px"}} htmlFor="apartment">Lägenhet</label>
    <Col md={9} className="input-group">
    <span className="input-group-addon">
        <span className="glyphicon glyphicon-home"></span>
    </span>
    <input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-max="10"
data-val-length="Lägenhet får inte överstiga 10 tecken"
id="apartment"
name="apartment"
type="text"
value="" />
</Col>
</div>
</Col>
</Row>
                    <Row>
<Col md={6}>
</Col>
<Col md={6}>
<Button className="site-buttonmargin-left pull-right btn-success btn create-issue-form-buttons" data-action="4">Skapa</Button>
<Button className="site-buttonmargin-left pull-right btn-default btn create-issue-form-buttons" data-action="2">Stäng</Button>
</Col>
</Row>
</form>
</div>
</div>
</Col>
</Row>
</div>
;}
};
CreateIssuePanel.propTypes= {
    show: React.PropTypes.bool.isRequired
};  