import React, { Component } from 'react';
import style from '../../css/site.css';
export default class Index extends Component {
    render() {
        return  <div className="row">
        <div className="col-md-2 site-page-control">
            <h3 className="site-page-header">Profil</h3>
            <div className="row">
                <div className="col-md-12">
                    <h4>Användare</h4>
                    admin
                </div>
            </div>
            <div className="row site-row-spacing">
                <div className="col-md-12">
                    <h4>Förening</h4>
                    --
                </div>
            </div>
            <div className="row site-row-spacing">
                <div className="col-md-12">
                    <h4>Behörighet</h4>
                    Admin
                </div>
            </div>
            <div className="row site-row-spacing">
                <div className="col-md-12">
                    <h4>Inloggad sedan</h4>
                    2016-10-05 18:52
                </div>
            </div>
        </div>
        <div className="col-md-10 site-page-content">
            <div className="row">
                <div className="col-md-6">
                    

<div className="panel panel-default">
<div className="panel-heading">
<h3 className="panel-title" id="title">Uppdatera kontoinformation</h3>
</div>
<div className="panel-body">
<form id="update-profile-form">
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
<div className="row">
<div className="col-md-6">
</div>
<div className="col-md-6">
<button className="site-buttonmargin-left pull-right btn-info btn update-profile-form-buttons" data-action="8" type="button">Spara</button>
</div>
</div>
</form></div></div>
                </div>
                <div className="col-md-6">
                    

<div className="panel panel-default">
<div className="panel-heading">
<h3 className="panel-title" id="title">Byt l&#246;senord</h3>
</div>
<div className="panel-body">
<form id="change-password-form">
<div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="password">Gällande</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-lock"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-min="6"
data-val-length-max="45"
data-val-length="Gällande måste vara mellan 6 och 45 tecken"
data-val-required="Gällande får inte vara tom"
id="password"
name="password"
type="password"
value="" />
</div>
</div>
<div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="newpassword1">Nytt</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-lock"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-min="6"
data-val-length-max="45"
data-val-length="Nytt måste vara mellan 6 och 45 tecken"
data-val-required="Nytt får inte vara tom"
id="newpassword1"
name="newpassword1"
//onKeyUp    = "return Site.Validation.isSecurePassword(event)"
type="password"
value="" />
</div>
</div>
<div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="newpassword2">Bekräfta</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className="glyphicon glyphicon-lock"></span>
</span>
<input className="form-control"
data-autoajax="true"
data-val="true"
data-val-length-min="6"
data-val-length-max="45"
data-val-length="Bekräfta måste vara mellan 6 och 45 tecken"
data-val-required="Bekräfta får inte vara tom"
id="newpassword2"
name="newpassword2"
//onKeyUp    = "return Site.Validation.isSecurePassword(event)"
type="password"
value="" />
</div>
</div>
<div className="row">
<div className="col-md-6">
</div>
<div className="col-md-6">
<button className="site-buttonmargin-left pull-right btn-info btn change-password-form-buttons" data-action="8" type="button">Spara</button>
</div>
</div>
</form></div></div>
                </div>
            </div>
        </div>
    </div>   
 
        ;
    }

};