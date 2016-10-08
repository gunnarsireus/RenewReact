import React, { Component } from 'react';
import style from '../../css/site.css';
import {siteAjaxPost,siteGoTo} from '../../js/site-base.js';
import {getFormData} from '../../js/site-components/site-xcomp-inputforms.js';
import {clearValidationSummary} from '../../js/site-components/site-xcomp-validation.js';
import {clearAll} from '../../js/site-components/site-xcomp-localstorage.js';
import Panels3 from '../Common/Panels3.js';
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.updateProfile = this.updateProfile.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    };
    updateProfile(){
        var updateForm = $('#update-profile-form');
        var data = getFormData(updateForm);
        if (data) {
            //clearValidationSummary(updateForm);
            siteAjaxPost('/Profile/UpdateProfile', data, alert('Kontoinformation uppdaterad'));
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
        return      <div className="row">
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