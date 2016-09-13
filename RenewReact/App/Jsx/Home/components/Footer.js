import React, { Component } from 'react';

require('../../../img/progress.gif');
export default class Footer extends Component {
    displayName: 'Footer';
    render () {
        return   <footer style={{marginTop:"60px"}}>
                    <div className="container">
                        <hr />
                        <p style={{ textAlign: "center" }}>Renew Service AB</p>
                        <div id="progress-indicator" hidden>
                            <img className="center-block" src="../../../App/img/progress.gif"/>
                        </div>
                    </div>
                </footer>
   ;}
};