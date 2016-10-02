import React, { Component } from 'react';
import jquery from 'jquery';
import jqueryUi from 'jquery-ui';
import moment from 'moment';
//import sv from '../../js/FullCalendar-2.6.1/lang/sv.js';
import fullcalendar from 'fullcalendar';
import styles from '../../css/Fullcalendar.css';
import styles2 from '../../css/FullCalendar-2.6.1/fullcalendar.css'
export default class Calendar extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return <div id="calendar"></div>
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
            },
            lang: 'sv',
        //header: {
        //    left:   'prev,next today',
        //    center: 'title',
        //    right:  'month,agendaWeek,agendaDay'
        //},
        //selectable: true,
        //allDaySlot: false,
        weekNumbers: true
        //defaultDate: Date.now(),
        //timezone: 'local',
        //editable: true,
        //eventLimit: true,
        //select: function (start, end, jsEvent, view) {
        //    if (slotLeftClick && jsEvent.shiftKey) {
        //        slotLeftClick(start, end, jsEvent, $(this));
        //    }
        //},
        //eventClick: function (item, jsEvent, view) {
        //    if (jsEvent.which === 1 && itemLeftClick != null) {
        //        itemLeftClick(item, jsEvent, $(this));
        //    }
        //    else if (jsEvent.which === 3 && itemRightClick != null) {
        //        itemRightClick(item, jsEvent, $(this));
        //    }
        //},
        //dayClick: function (start, jsEvent, view) {
        //    var end = moment(start);
        //    end.add(1, 'hours');
        //    if (slotLeftClick && (jsEvent.timeStamp - thiz.prevclick) < 500) {
        //        slotLeftClick(start, end, jsEvent, $(this));
        //    }
        //    thiz.prevclick = jsEvent.timeStamp;
        //},
        //eventDrop: function (item, delta, revertFunc, jsEvent) {
        //    if (itemMove != null) {
        //        itemMove(item, jsEvent, $(this), revertFunc);
        //    }
        //},
        //eventResize: function (item, delta, revertFunc, jsEvent, ui, view) {
        //    if (itemResize != null) {
        //        itemResize(item, jsEvent, $(this), revertFunc);
        //    }
        //}
        })
    }
}

