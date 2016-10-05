import React, { Component } from 'react';
import style from '../../css/site.css';
export default class Index extends Component {

    render() {
        return <div className="row">
    <div className="col-md-2 site-page-control">
        <h3 className="site-page-header">Tidkoder</h3>
        <div className="row">
            <div className="col-md-12">
                <h4>Visma</h4>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <button id="sync-timetype-button" type="button" className="btn btn-default pull-left ">Synka</button>
            </div>
        </div>
    </div>
    <div className="col-md-10 site-page-content">
        <div className="row" id="update-timetype-panel" hidden>
            <div className="col-md-12">
                    

<div className="panel panel-default">
<div className="panel-heading">
<h3 className="panel-title" id="title">Uppdatera tidkod</h3>
</div>
<div className="panel-body">
<form id="update-timetype-form">
<div className="form-group">
<div className="input-group">
<input data-autoajax="true"
id="id"
name="id"
type="hidden"
value=""/>
</div>
</div>
<div className="row">
    <div className="col-md-6">
        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="code">Vismakod</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-bookmark"></span>
</span>
<input className="form-control"
data-autoajax="true"
id="code"
name="code"
type="text"
value="" readOnly/>
</div>
</div>

        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="name">Namn</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-header"></span>
</span>
<input className="form-control"
data-autoajax="true"
id="name"
name="name"
type="text"
value="" readOnly/>
</div>
</div>

        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="unit">Enhet</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-retweet"></span>
</span>
<input className="form-control"
data-autoajax="true"
id="unit"
name="unit"
type="text"
value="" readOnly/>
</div>
</div>

    </div>
    <div className="col-md-6">
        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="active">Aktiv</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-off"></span>
</span>
<select className="selectpicker"
data-autoajax="true"
data-width="100%"
id="active"
name="active">
<option value="1">Ja</option>
<option value="0">Nej</option>
</select>
</div>
</div>

        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="description">Beskrivning</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-pencil"></span>
</span>
<textarea className="form-control" rows="3"
data-autoajax="true"
id="description"
name="description"
readOnly/>
</div>
</div>

    </div>
</div>
<div className="row">
<div className="col-md-6">
</div>
<div className="col-md-6">
<button className="site-buttonmargin-left pull-right btn-info btn update-timetype-form-buttons" data-action="8" type="button">Spara</button>
<button className="site-buttonmargin-left pull-right btn-default btn update-timetype-form-buttons" data-action="2" type="button">Stäng</button>
</div>
</div>
</form></div></div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <table id="timetype-table" className="table table-striped table-hover">
<thead>
    <tr>
        <th></th>
        <th>Vismakod</th>
        <th>Aktiv</th>
        <th>Namn</th>
        <th>Enhet</th>
        <th></th>
        <th>/*-- id */</th>
    </tr>
</thead>
<tbody></tbody>
<tfoot>
    <tr>
        <th></th>
        <th>Vismakod</th>
        <th>Aktiv</th>
        <th>Namn</th>
        <th>Enhet</th>
        <th></th>
        <th>/*-- id */</th>
    </tr>
</tfoot>
</table>

            </div>
        </div>
    </div>
</div>


        ;
    }

};