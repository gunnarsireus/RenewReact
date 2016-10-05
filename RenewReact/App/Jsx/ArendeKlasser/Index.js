import React, { Component } from 'react';
import style from '../../css/site.css';
export default class Index extends Component {

    render() {
        return   <div className="row">
       <div className="col-md-3 site-page-control">
           <h3 className="site-page-header">Ärendeklasser</h3>
           <div className="row">
               <div className="col-md-12">
                   <h4>Ny ärendeklass</h4>
               </div>
           </div>
           <div className="row">
               <div className="col-md-12">
                   <button id="create-issueclass-button" type="button" className="btn btn-default pull-left ">Skapa</button>
               </div>
           </div>
       </div>
       <div className="col-md-9 site-page-content">
           <div className="row" id="create-issueclass-panel" hidden>
               <div className="col-md-12">
                    

<div className="panel panel-default">
<div className="panel-heading">
<h3 className="panel-title" id="title">Skapa &#228;rendeklass</h3>
</div>
<div className="panel-body">
<form id="create-issueclass-form">
   <div className="row">
       <div className="col-md-12">
           <div className="form-group">
<label className="control-label col-md-2" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="name">Namn</label>
<div className="col-md-10 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-header"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-min="1"
data-val-length-max="30"
data-val-length="Namn måste vara mellan 1 och 30 tecken"
data-val-required="Namn får inte vara tom"
id="name"
name="name"
type="text"
value="" />
</div>
</div>

       </div>
   </div>
<div className="row">
<div className="col-md-6">
</div>
<div className="col-md-6">
<button className="site-buttonmargin-left pull-right btn-success btn create-issueclass-form-buttons" data-action="4" type="button">Skapa</button>
<button className="site-buttonmargin-left pull-right btn-default btn create-issueclass-form-buttons" data-action="2" type="button">Stäng</button>
</div>
</div>
</form></div></div>
               </div>
           </div>
           <div className="row" id="update-issueclass-panel" hidden>
               <div className="col-md-12">
                    

<div className="panel panel-default">
<div className="panel-heading">
<h3 className="panel-title" id="title">Uppdatera &#228;rendeklass</h3>
</div>
<div className="panel-body">
<form id="update-issueclass-form">
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
       <div className="col-md-12">
           <div className="form-group">
<label className="control-label col-md-2" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="name">Namn</label>
<div className="col-md-10 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-header"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-min="2"
data-val-length-max="45"
data-val-length="Namn måste vara mellan 2 och 45 tecken"
data-val-required="Namn får inte vara tom"
id="name"
name="name"
type="text"
value="" />
</div>
</div>

       </div>
   </div>
<div className="row">
<div className="col-md-6">
</div>
<div className="col-md-6">
<button className="site-buttonmargin-left pull-right btn-info btn update-issueclass-form-buttons" data-action="8" type="button">Spara</button>
<button className="site-buttonmargin-left pull-right btn-default btn update-issueclass-form-buttons" data-action="2" type="button">Stäng</button>
</div>
</div>
</form></div></div>

               </div>
           </div>
           <div className="row">
               <div className="col-md-12">
                   <table id="issueclass-table" className="table table-striped table-hover">
   <thead>
       <tr>
           <th></th>
           <th>Namn</th>
           <th></th>
           <th>/*-- id --*/</th>
       </tr>
   </thead>
   <tbody></tbody>
   <tfoot>
       <tr>
           <th></th>
           <th>Namn</th>
           <th></th>
           <th>/*-- id --*/</th>
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