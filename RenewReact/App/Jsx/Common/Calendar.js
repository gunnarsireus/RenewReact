import React, { Component } from 'react';
import fullcalendar from 'fullcalendar';
import moment from 'moment';
import jqueryUi from 'jquery-ui';

export default class Calendar extends Component {
    render() {
        return <div id="calendar"></div>;
    }
    componentDidMount() {
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar
            drop: function() {
                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }
            }
        })
    }
}
