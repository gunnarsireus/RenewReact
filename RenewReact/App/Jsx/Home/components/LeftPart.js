import React, { Component } from 'react';
require('../../../img/logotype.png');

export default class Index extends Component {
    displayName: 'LeftPart';
    render() {
       return <div className="col-md-3 site-page-control">
            <h3 className="site-page-header">Renew Service</h3>
            <div className="row hidden-sm hidden-xs">
               <div className="col-md-12">
                  <img className="site-itemmargin-top" src="../../../App/img/logotype.png" />
                    <p className="site-itemmargin-top">
                        Fastighetsförvaltning
                    </p>
                    <p className="site-itemmargin-top">
                        Renew Service AB<br />
                        Org.nr 556818-8873<br />
                        Box 936<br />
                        Bjursvägen 29<br />
                        194 29 Upplands Väsby
                    </p>
                    <p>
                        <span className="glyphicon glyphicon-phone-alt" style={{color:"gray"}}></span>&nbsp;08 34 38 00<br />
                        <span className="glyphicon glyphicon-envelope" style={{color:"gray"}}></span>&nbsp;info@renewservice.se
                    </p>
                </div>
            </div>
        </div>
 ;}
};