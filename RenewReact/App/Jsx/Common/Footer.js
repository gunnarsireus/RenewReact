import React, { Component } from 'react';
require('../../img/progress.gif');
export default class Footer extends Component {
    displayName: 'Footer';
    propTypes: {
            show: React.PropTypes.bool.isRequired
    };  
    displayStyle() {
        return (this.props.show)?'block':'none';
    };
    render () {
        return   <footer style={{marginTop:"60px"}}>
                    <div className="container">
                        <hr />
                        <p style={{ textAlign: "center" }}>Renew Service AB</p>
                        <div id="progress-indicator" style={{display:this.displayStyle()}}>
                            <img className="center-block" src="../../App/img/progress.gif"/>
                        </div>
                    </div>
                </footer>
   ;}
};