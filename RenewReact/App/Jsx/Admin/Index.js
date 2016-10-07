﻿import React, { Component } from 'react';
import style from '../../css/site.css';
import Panels3 from '../Common/Panels3.js';
export default class Index extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return      <div class="row">
        <div class="col-md-2 site-page-control">
            <h3 class="site-page-header">Profil</h3>
            <div class="row">
                <div class="col-md-12">
                    <h4>Användare</h4>
                    admin
                </div>
            </div>
            <div class="row site-row-spacing">
                <div class="col-md-12">
                    <h4>Förening</h4>
                    --
                </div>
            </div>
            <div class="row site-row-spacing">
                <div class="col-md-12">
                    <h4>Behörighet</h4>
                    Admin
                </div>
            </div>
            <div class="row site-row-spacing">
                <div class="col-md-12">
                    <h4>Inloggad sedan</h4>
                    2016-10-05 18:52
                </div>
            </div>
        </div>
        <div class="col-md-10 site-page-content">
            <div class="row">
                <div class="col-md-6">
                    <Panels3 text1={'Förnamn'} 
                             text2={'Efternamn'}
                             text3={'Telefon'}
                             icon1={'glyphicon glyphicon-user'}
                             icon2={'glyphicon glyphicon-user'}
                             icon3={'glyphicon glyphicon-phone-alt'}/>
                </div>
                <div class="col-md-6">
                    <Panels3 text1={'Gällande'} 
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