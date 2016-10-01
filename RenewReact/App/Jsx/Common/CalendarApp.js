import React, { Component } from 'react';
import Calendar from './Calendar.js';
import External from './External.js';

export default class CalendarApp extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return <div><External />
          <Calendar /></div>;
    }
}