import React, { Component } from 'react';
import LeftPart from './leftpart';
import RightPart from './rightpart';
export default class Index extends Component {
    displayName: 'Home';
    render() {
       return <div className="row">
                <LeftPart />
                <RightPart />
              </div>

 ;}
};