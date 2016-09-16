import React, { Component } from 'react';
import progress from '../../../App/img/progress.gif';
export default class Footer extends Component {
    displayName: 'Footer';
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show
        };
    };
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
                            <img className="center-block" src={progress}/>
                        </div>
                    </div>
                </footer>
                                ;}
};