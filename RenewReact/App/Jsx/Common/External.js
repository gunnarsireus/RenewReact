﻿import React, { Component } from 'react';
import jquery from 'jquery';
import jqueryUi from 'jquery-ui';
import moment from 'moment';
import fullcalendar from 'fullcalendar';
import styles from '../../css/Fullcalendar.css';
import styles2 from '../../css/FullCalendar-2.6.1/fullcalendar.css';
import styles3 from '../../css/jquery-ui-1.11.2.css';

export default class External extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return <div id='external-events'>
                <h4>Draggable Events</h4>
                <div className='fc-event'>My Event 1</div>
                <div className='fc-event'>My Event 2</div>
                <div className='fc-event'>My Event 3</div>
                <div className='fc-event'>My Event 4</div>
                <div className='fc-event'>My Event 5</div>
                <p>
                    <input type='checkbox' id='drop-remove' />
                    <label htmlFor='drop-remove'>remove after drop</label>
                </p>
            </div>;
                    }
    componentDidMount() {
        $('#external-events .fc-event').each(function() {

            // store data so the calendar knows to render an event upon drop
            $(this).data('event', {
                title: $.trim($(this).text()), // use the element's text as the event title
                stick: true // maintain when user navigates (see docs on the renderEvent method)
            });
             //make the event draggable using jQuery UI
            //$(this).draggable({
            //    zIndex: 999,
            //    revert: true,      // will cause the event to go back to its
            //    revertDuration: 0  //  original position after the drag
            //});
        });
    }
}


