import React, { Component } from 'react';
import style from '../../css/site.css';
import {siteAjaxPost,siteGoTo,siteShowProgress,siteHideProgress} from '../../js/site-base.js';
import {getFormData} from '../../js/site-components/site-xcomp-inputforms.js';
import {clearValidationSummary} from '../../js/site-components/site-xcomp-validation.js';
import {clearAll} from '../../js/site-components/site-xcomp-localstorage.js';
import Panels3 from '../Common/Panels3.js';
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.updateProfile = this.updateProfile.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.state = {
            value11: "",
            value12: "",
            value13: "",
            value21: "",
            value22: "",
            value23: ""
        };
    };
    siteAjaxReadToProps(url) {
        siteShowProgress();
        $.ajax({
             url: url,
            type: 'POST',
            data: {},
            success: function (response) {
                siteHideProgress();
                this.setState({
                    value11: response.firstname,
                    value12: response.lastname,
                    value13: response.phone
                });
                $("#firstname").trigger('change');
                $("#firstname").val(this.state.value11);
                $("#lastname").val(this.state.value12);
                $("#phone").val(this.state.value13);
            }.bind(this),
            error: function(response) {
                alert('Ej inloggad');
                localStorage.setItem("isUserAuthorized", "");
                window.location.href = '/Home/Logout';
            }.bind(this)
        });
    };
    componentDidMount() {
        this.siteAjaxReadToProps('/Profile/ReadProfile'); 
    };
    updateProfile(){
        var updateForm = $('#update-profile-form');
        var data = getFormData(updateForm);
        if (data) {
            //clearValidationSummary(updateForm);
            var result={};
            siteAjaxPost('/Profile/UpdateProfile', data, result, alert('Kontoinformation uppdaterad'));
            this.setState({
                value11: response.firstname,
                value12: response.lastname,
                value13: response.phone
            });
        }
    };
    updatePassword(){
        var secureForm = $('#change-password-form');
        var data = getFormData(secureForm);
        if (data) {
            //clearValidationSummary(secureForm);
            data && siteAjaxPost('/Profile/ChangePassword', data, alert('Lösenord uppdaterat'));
        }
    };
    render() {
        return <div className="row"><div>
            value11:  {this.state.value11} <br/>
            value12:  {this.state.value12} <br/>
            value13:  {this.state.value13} <br/>
            </div>
                 <div className="col-md-6">
                    <Panels3 ref='foo'
                             input1Id={'firstname'}
                             input2Id={'lastname'}
                             input3Id={'phone'}
                             formId={'update-profile-form'}
                             heading={'Uppdatera kontoinformation'}
                             buttonText={'Spara'} 
                             onClick={this.updateProfile}
                             text1={'Förnamn'} 
                             text2={'Efternamn'}
                             text3={'Telefon'}
                             value1={this.state.value11} 
                             value2={this.state.value12}
                             value3={this.state.value13}
                             icon1={'glyphicon glyphicon-user'}
                             icon2={'glyphicon glyphicon-user'}
                             icon3={'glyphicon glyphicon-phone-alt'}/>
                 </div>
                 <div className="col-md-6">
                </div>
        </div>
        ;
    }
};