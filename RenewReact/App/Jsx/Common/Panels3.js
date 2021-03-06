﻿import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';
import style from '../../css/site.css';
import Input from './Input.js';
export default class Panels3 extends Component {
    displayName: 'Panels3';
    constructor(props) {
        super(props);
        this.state = {
            value1: this.props.value1,
            value2: this.props.value2,
            value3: this.props.value3
        };

        this.onclick = this.onclick.bind(this);
    };
    componentWillReceiveProps(nextProps) {
        console.log('Panels3 componentWillReceiveProps value1:' + nextProps.value1);
        if (this.props.value1 != nextProps.value1) {
            this.setState({ value1: nextProps.value1 });
        };
        console.log('Panels3 componentWillReceiveProps value2:' + nextProps.value2);
        if (this.props.value2 != nextProps.value2) {
            this.setState({ value2: nextProps.value2 });
        };
        console.log('Panels3 componentWillReceiveProps value3:' + nextProps.value3);
        if (this.props.value3 != nextProps.value3) {
            this.setState({ value3: nextProps.value3 });
        };
    };
    onclick(event){
        alert('Button clicked');
    }
    render() {
        return  <div className="panel panel-default">
<div className="panel-heading">
<h3 className="panel-title" id="title">{this.props.heading}</h3>
</div>
<div className="panel-body">
<form id={this.props.formId}>
<div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor={this.props.input1Id}>{this.props.text1}</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className={this.props.icon1}></span>
</span>
<Input className="form-control"
    value={this.state.value1}
    dataAutoajax={true}
    dataVal={true}
    dataValLengthMin={2}
    dataValLengthMax={45}
    dataValLength={'Förnamn måste vara mellan 2 och 45 tecken'}
    dataValRequired={'Förnamn får inte vara tom'}
    id={'firstname'}
    name={this.props.input1Id}
    type={'text'}/>

</div>
</div>
<div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor={this.props.input2Id}>{this.props.text2}</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className={this.props.icon2}></span>
</span>
<Input className="form-control"
    value={this.state.value2}
    dataAutoajax={true}
    dataVal={true}
    dataValLengthMin={2}
    dataValLengthMax={45}
    dataValLength={'Efternamn måste vara mellan 2 och 45 tecken'}
    dataValRequired={'Efternamn får inte vara tom'}
    id={this.props.input2Id}
    name={this.props.input2Id}
    type={'text'}/>
</div>
</div>
<div className="form-group">
<label className="control-label col-md-3" style={{marginLeft:"-15px",marginRight:"15px"}} htmlFor={this.props.input3Id}>{this.props.text3}</label>
<div className="col-md-9 input-group">
<span className="input-group-addon">
<span className={this.props.icon3}></span>
</span>
<Input className="form-control"
    value={this.state.value3}
    dataAutoajax={true}
    dataVal={true}
    dataValLengthMax={45}
    dataValLength={'Telefon får inte överstiga 45 tecken'}
    id={this.props.input3Id}
    name={this.props.input3Id}
    //onKeyPress = "return Site.Validation.isPhoneNumber(event)"
    type={'text'}/>

</div>
</div>
<div className="row">
<div className="col-md-6">
</div>
<div className="col-md-6">
<Button className="site-buttonmargin-left pull-right btn-info btn update-profile-form-buttons" onClick={this.onclick}>{this.props.buttonText}</Button>
</div>
</div>
</form></div></div>                
         ;
    }
};
Panels3.propTypes= {
    value1: React.PropTypes.string.isRequired,
    value2: React.PropTypes.string.isRequired,
    value3: React.PropTypes.string.isRequired,
    input1Id: React.PropTypes.string.isRequired,
    input2Id: React.PropTypes.string.isRequired,
    input3Id: React.PropTypes.string.isRequired,
    formId: React.PropTypes.string.isRequired,
    heading: React.PropTypes.string.isRequired,
    buttonText: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
    text1: React.PropTypes.string.isRequired,
    text2: React.PropTypes.string.isRequired,
    text3: React.PropTypes.string.isRequired,
    icon1: React.PropTypes.string.isRequired,
    icon2: React.PropTypes.string.isRequired,
    icon3: React.PropTypes.string.isRequired,
};