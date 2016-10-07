import React, { Component } from 'react';
import style from '../../css/site.css';
export default class Panels3 extends Component {
    displayName: 'Panels3';
    constructor(props) {
        super(props);
    };
    render() {
        return  <div className="panel panel-default">
<div className="panel-heading">
<h3 className="panel-title" id="title">Uppdatera kontoinformation</h3>
</div>
<div className="panel-body">
<form id="update-profile-form">
<div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="firstname">{this.props.text1}</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className={this.props.icon1}></span>
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
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="lastname">{this.props.text2}</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className={this.props.icon2}></span>
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
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor="phone">{this.props.text3}</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className={this.props.icon3}></span>
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
         ;
    }
};
Panels3.propTypes= {
    text1: React.PropTypes.string.isRequired,
    text2: React.PropTypes.string.isRequired,
    text3: React.PropTypes.string.isRequired,
    icon1: React.PropTypes.string.isRequired,
    icon2: React.PropTypes.string.isRequired,
    icon3: React.PropTypes.string.isRequired,
};