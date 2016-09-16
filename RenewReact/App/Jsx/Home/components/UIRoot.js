import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import Body from './Body';
import Footer from '../../Common/Footer';

export default class UIRoot extends Component {
    displayName: 'UIRoot';
    render() {
        return <div>
            <Body />
            <Footer show={false}/>
        </div>;
    }

};