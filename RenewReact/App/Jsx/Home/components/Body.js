import React, { Component } from 'react';
import LeftPart from './LeftPart';
import RightPart from './RightPart';
export default class Index extends Component {
    displayName: 'Body';
    render() {
       return <div className="row">
                <LeftPart />
                <RightPart />
              </div>

 ;}
};