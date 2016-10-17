import React, { Component } from 'react';
import style from '../../../css/site.css';
import {siteAjaxPost,siteGoTo,siteShowProgress,siteHideProgress} from '../../../js/site-base.js';
import {getFormData} from '../../../js/site-components/site-xcomp-inputforms.js';
import {clearValidationSummary} from '../../../js/site-components/site-xcomp-validation.js';
import {clearAll} from '../../../js/site-components/site-xcomp-localstorage.js';
import Panels3 from '../../Common/Panels3.js';
import AdminStore from '../stores/AdminStore';
import AdminActions from '../actions/AdminActions';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueList: AdminStore.getValues()
        };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    };
    siteAjaxReadToProps(url) {
        siteShowProgress();
        $.ajax({
             url: url,
            type: 'POST',
            data: {},
            success: function (response) {
                siteHideProgress();
                AdminActions.setValue11(response.firstname); 
                AdminActions.setValue12(response.lastname); 
                AdminActions.setValue13(response.phone); 
                this.setState({
                    valueList: AdminStore.getValues()
                });
                alert('success' + this.state.valueList[2].value);
            }.bind(this),
            error: function(response) {
                alert('Ej inloggad');
                localStorage.setItem("isUserAuthorized", "");
                window.location.href = '/Home/Logout';
            }.bind(this)
        });
    };
    componentDidMount() {
        AdminStore.addChangeListener(this.onChange);
        this.siteAjaxReadToProps('/Profile/ReadProfile'); 
    };
    componentWillUnmount() {
        AdminStore.removeChangeListener(this.onChange);
    };
    updateProfile(){
        var updateForm = $('#update-profile-form');
        var data = getFormData(updateForm);
        if (data) {
            //clearValidationSummary(updateForm);
            var result={};
            siteAjaxPost('/Profile/UpdateProfile', data, result, alert('Kontoinformation uppdaterad'));
            alert(result);
        }
    };
    updatePassword(){
        var secureForm = $('#change-password-form');
        var data = getFormData(secureForm);
        if (data) {
            //clearValidationSummary(secureForm);
            var result={};
            data && siteAjaxPost('/Profile/ChangePassword', data, alert('Lösenord uppdaterat'));
            alert(result);
        }
    };
    onChange() {
        this.setState({
            valueList: AdminStore.getValues()
        });
    };
    onClick() {
        this.setState({
            valueList: AdminStore.getValues()
        });
        alert('onClick()' + this.state.valueList[2].value);
    };
    render() {
        return      <div className="row">
        <div className="col-md-2 site-page-control">
            <h3 className="site-page-header">Profil</h3>
            <div className="row">
                <div className="col-md-12">
                    <h4>Användare</h4>
                    admin
                </div>
                <Button onClick={this.onClick}>Test</Button>
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
                    <Panels3 input1Id={'firstname'}
                             input2Id={'lastname'}
                             input3Id={'phone'}
                             formId={'update-profile-form'}
                             heading={'Uppdatera kontoinformation'}
                             buttonText={'Spara'} 
                             onClick={this.updateProfile}
                             text1={'Förnamn'} 
                             text2={'Efternamn'}
                             text3={'Telefon'}
                             value1={this.state.valueList[0].value}
                             value2={this.state.valueList[1].value}
                             value3={this.state.valueList[2].value}
                             icon1={'glyphicon glyphicon-user'}
                             icon2={'glyphicon glyphicon-user'}
                             icon3={'glyphicon glyphicon-phone-alt'}/>
                </div>
                <div className="col-md-6">
                    <Panels3 input1Id={'password'}
                             input2Id={'newpassword1'}
                             input3Id={'newpassword2'}
                             formId={'change-password-form'}
                             heading={'Byt lösenord'}
                             buttonText={'Spara'} 
                             onClick={this.updatePassword}
                             text1={'Gällande'} 
                             text2={'Nytt'}
                             text3={'Bekräfta'}
                             value1={this.state.valueList[3].value}
                             value2={this.state.valueList[4].value}
                             value3={this.state.valueList[5].value}
                             icon1={'glyphicon glyphicon-lock'}
                             icon2={'glyphicon glyphicon-lock'}
                             icon3={'glyphicon glyphicon-lock'}/>
                </div>
            </div>
        </div>
    </div>
        ;
    }
};