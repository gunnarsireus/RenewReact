import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import Body from './Body';
import Footer from './Footer';

export default class UIRoot extends Component {

    render() {
        return <div>
            <Body />
            <Footer />
        </div>;
    }

};