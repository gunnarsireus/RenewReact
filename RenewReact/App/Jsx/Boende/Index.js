import React, { Component } from 'react';
import style from '../../css/site.css';
export default class Index extends Component {

    render() {
        return <div className="row">
    <div className="col-md-2 site-page-control">
        <h3 className="site-page-header">Boende</h3>
        <div className="row">
            <div className="col-md-12">
                <h4>Kund</h4>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <select className="selectpicker"
data-autoajax="false"
data-width="100%"
id="customerid-select"
name="customerid-select">
<option value="0">--</option>
</select>

            </div>
        </div>
        <div className="row site-row-spacing">
            <div className="col-md-12">
                <h4>Aktiv</h4>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <select className="selectpicker"
data-autoajax="false"
data-width="100%"
id="active-select"
name="active-select">
<option value="1">Ja</option>
<option value="0">Nej</option>
</select>

            </div>
        </div>
        <div className="row site-row-spacing">
            <div className="col-md-12">
                <h4>Nytt konto</h4>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <button id="create-resident-button" type="button" className="btn btn-default pull-left ">Skapa</button>
            </div>
        </div>
    </div>
    <div className="col-md-10 site-page-content">
        <div className="row" id="create-resident-panel" hidden>
            <div className="col-md-12">
                    

<div className="panel panel-default">
<div className="panel-heading">
<h3 className="panel-title" id="title">Skapa konto</h3>
</div>
<div className="panel-body">
<form id="create-resident-form">
<div className="form-group">
<div className="input-group">
<input data-autoajax="true"
id="customerid"
name="customerid"
type="hidden"
value=""/>
</div>
</div>
<div className="row">
    <div className="col-md-6">
        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="authz">Behörighet</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-ban-circle"></span>
</span>
<select className="selectpicker"
data-autoajax="true"
data-width="100%"
id="authz"
name="authz">
<option value="2">Kund</option>
<option value="1">Boende</option>
</select>
</div>
</div>

        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="email">E-post</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-envelope"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-min="5"
data-val-length-max="100"
data-val-length="E-post måste vara mellan 5 och 100 tecken"
data-val-required="E-post får inte vara tom"
id="email"
name="email"
type="text"
value="" />
</div>
</div>

        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="password">Lösenord</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-lock"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-min="6"
data-val-length-max="45"
data-val-length="Lösenord måste vara mellan 6 och 45 tecken"
data-val-required="Lösenord får inte vara tom"
id="password"
name="password"
//onKeyUp    = "return Site.Validation.isSecurePassword(event)"
type="password"
value="" />
</div>
</div>

        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="firstname">Förnamn</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-user"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-min="2"
data-val-length-max="45"
data-val-length="Förnamn måste vara mellan 2 och 45 tecken"
data-val-required="Förnamn får inte vara tom"
id="firstname"
name="firstname"
type="text"
value="" />
</div>
</div>

        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="lastname">Efternamn</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-user"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-min="2"
data-val-length-max="45"
data-val-length="Efternamn måste vara mellan 2 och 45 tecken"
data-val-required="Efternamn får inte vara tom"
id="lastname"
name="lastname"
type="text"
value="" />
</div>
</div>

    </div>
    <div className="col-md-6">
        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="phone">Telefon</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-phone-alt"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-max="45"
data-val-length="Telefon får inte överstiga 45 tecken"
id="phone"
name="phone"
//onKeyPress = "return Site.Validation.isPhoneNumber(event)"
type="text"
value="" />
</div>
</div>

        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="address">Adress</label>
<div className="col-md-9 input-group">
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
</div>
</div>

        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="floor">Våning</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-align-justify"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-max="45"
data-val-length="Våning får inte överstiga 45 tecken"
id="floor"
name="floor"
type="text"
value="" />
</div>
</div>

        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="apartment">Lägenhet</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-home"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-max="45"
data-val-length="Lägenhet får inte överstiga 45 tecken"
id="apartment"
name="apartment"
type="text"
value="" />
</div>
</div>

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

    </div>
</div>
<div className="row">
<div className="col-md-6">
</div>
<div className="col-md-6">
<button className="site-buttonmargin-left pull-right btn-success btn create-resident-form-buttons" data-action="4" type="button">Skapa</button>
<button className="site-buttonmargin-left pull-right btn-default btn create-resident-form-buttons" data-action="2" type="button">Stäng</button>
</div>
</div>
</form></div></div>
            </div>
        </div>
        <div className="row" id="update-resident-panel" hidden>
            <div className="col-md-12">
                    

<div className="panel panel-default">
<div className="panel-heading">
<h3 className="panel-title" id="title">Uppdatera konto</h3>
</div>
<div className="panel-body">
<form id="update-resident-form">
<div className="form-group">
<div className="input-group">
<input data-autoajax="true"
id="id"
name="id"
type="hidden"
value=""/>
</div>
</div>
<div className="form-group">
<div className="input-group">
<input data-autoajax="true"
id="customerid"
name="customerid"
type="hidden"
value=""/>
</div>
</div>
<div className="row">
    <div className="col-md-6">
        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="authz">Behörighet</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-ban-circle"></span>
</span>
<select className="selectpicker"
data-autoajax="true"
data-width="100%"
id="authz"
name="authz">
<option value="2">Kund</option>
<option value="1">Boende</option>
</select>
</div>
</div>

        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="email">E-post</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-envelope"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-min="5"
data-val-length-max="100"
data-val-length="E-post måste vara mellan 5 och 100 tecken"
data-val-required="E-post får inte vara tom"
id="email"
name="email"
type="text"
value="" />
</div>
</div>

        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="firstname">Förnamn</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-user"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-min="2"
data-val-length-max="45"
data-val-length="Förnamn måste vara mellan 2 och 45 tecken"
data-val-required="Förnamn får inte vara tom"
id="firstname"
name="firstname"
type="text"
value="" />
</div>
</div>

        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="lastname">Efternamn</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-user"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-min="2"
data-val-length-max="45"
data-val-length="Efternamn måste vara mellan 2 och 45 tecken"
data-val-required="Efternamn får inte vara tom"
id="lastname"
name="lastname"
type="text"
value="" />
</div>
</div>

    </div>
    <div className="col-md-6">
        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="phone">Telefon</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-phone-alt"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-max="45"
data-val-length="Telefon får inte överstiga 45 tecken"
id="phone"
name="phone"
//onKeyPress = "return Site.Validation.isPhoneNumber(event)"
type="text"
value="" />
</div>
</div>

        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="address">Adress</label>
<div className="col-md-9 input-group">
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
</div>
</div>

        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="floor">Våning</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-align-justify"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-max="45"
data-val-length="Våning får inte överstiga 45 tecken"
id="floor"
name="floor"
type="text"
value="" />
</div>
</div>

        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="apartment">Lägenhet</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-home"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-max="45"
data-val-length="Lägenhet får inte överstiga 45 tecken"
id="apartment"
name="apartment"
type="text"
value="" />
</div>
</div>

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

    </div>
</div>
<div className="row">
<div className="col-md-6">
</div>
<div className="col-md-6">
<button className="site-buttonmargin-left pull-right btn-info btn update-resident-form-buttons" data-action="8" type="button">Spara</button>
<button className="site-buttonmargin-left pull-right btn-default btn update-resident-form-buttons" data-action="2" type="button">Stäng</button>
</div>
</div>
</form></div></div>
            </div>
        </div>
        <div className="row" id="change-password-panel" hidden>
            <div className="col-md-12">
                    

<div className="panel panel-default">
<div className="panel-heading">
<h3 className="panel-title" id="title">Byt l&#246;senord</h3>
</div>
<div className="panel-body">
<form id="change-password-form">
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
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="email">E-post</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-envelope"></span>
</span>
<input className="form-control"
data-autoajax="true"
id="email"
name="email"
type="text"
value="" readOnly/>
</div>
</div>

    </div>
    <div className="col-md-6">
        <div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="password">Lösenord</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-lock"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-min="6"
data-val-length-max="45"
data-val-length="Lösenord måste vara mellan 6 och 45 tecken"
data-val-required="Lösenord får inte vara tom"
id="password"
name="password"
//onKeyUp    = "return Site.Validation.isSecurePassword(event)"
type="password"
value="" />
</div>
</div>

    </div>
</div>
<div className="row">
<div className="col-md-6">
</div>
<div className="col-md-6">
<button className="site-buttonmargin-left pull-right btn-info btn change-password-form-buttons" data-action="8" type="button">Spara</button>
<button className="site-buttonmargin-left pull-right btn-default btn change-password-form-buttons" data-action="2" type="button">Stäng</button>
</div>
</div>
</form></div></div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <table id="resident-table" className="table table-striped table-hover">
<thead>
    <tr>
        <th></th>
        <th>Förnamn</th>
        <th>Efternamn</th>
        <th>E-post</th>
        <th></th>
        <th>Behörighet</th>
        <th>Inloggad</th>
        <th></th>
        <th>/*-- id */</th>
    </tr>
</thead>
<tbody></tbody>
<tfoot>
    <tr>
        <th></th>
        <th>Förnamn</th>
        <th>Efternamn</th>
        <th>E-post</th>
        <th></th>
        <th>Behörighet</th>
        <th>Inloggad</th>
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