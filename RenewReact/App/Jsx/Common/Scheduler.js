﻿import React, { Component } from 'react';
import jquery from 'jquery';
import jqueryUi from 'jquery-ui';
import moment from 'moment';
//import sv from '../../js/FullScheduler-2.6.1/lang/sv.js';
import fullcalendar from 'fullcalendar';
import fullcalendarScheduler from 'fullcalendar-scheduler';
import styles from '../../css/Fullcalendar.css';
import styles2 from '../../css/FullCalendar-2.6.1/fullcalendar.css'
import styles3 from '../../css/FullCalendar-2.6.1/fullscheduler.css'

export default class Scheduler extends Component {
	constructor(props) {
		super(props);
	};
	render() {
		return <div id={this.props.divId}></div>
	}
	componentDidMount() {
    		/* initialize the external events
		-----------------------------------------------------------------*/

		$('#external-events .fc-event').each(function() {

			// store data so the calendar knows to render an event upon drop
			$(this).data('event', {
				title: $.trim($(this).text()), // use the element's text as the event title
				stick: true // maintain when user navigates (see docs on the renderEvent method)
			});

			//// make the event draggable using jQuery UI
			//$(this).draggable({
			//	zIndex: 999,
			//	revert: true,      // will cause the event to go back to its
			//	revertDuration: 0  //  original position after the drag
			//});

		});
		$('#' + this.props.divId ).fullCalendar({
		    now: Date.now(),
			editable: true, // enable draggable events
			droppable: true, // this allows things to be dropped onto the calendar
			aspectRatio: 1.8,
			scrollTime: '00:00', // undo default 6am scrollTime
			header: {
				left: 'today prev,next',
				center: 'title',
				right: 'timelineDay,timelineThreeDays,agendaWeek,month'
			},
			defaultView: 'timelineDay',
			views: {
				timelineThreeDays: {
					type: 'timeline',
					duration: { days: 3 }
				}
			},
			resourceLabelText: 'Rooms',
			resources: [
				{ id: 'a', title: 'Auditorium A' },
				{ id: 'b', title: 'Auditorium B', eventColor: 'green' },
				{ id: 'c', title: 'Auditorium C', eventColor: 'orange' },
				{ id: 'd', title: 'Auditorium D', children: [
					{ id: 'd1', title: 'Room D1' },
					{ id: 'd2', title: 'Room D2' }
				] },
				{ id: 'e', title: 'Auditorium E' },
				{ id: 'f', title: 'Auditorium F', eventColor: 'red' },
				{ id: 'g', title: 'Auditorium G' },
				{ id: 'h', title: 'Auditorium H' },
				{ id: 'i', title: 'Auditorium I' },
				{ id: 'j', title: 'Auditorium J' },
				{ id: 'k', title: 'Auditorium K' },
				{ id: 'l', title: 'Auditorium L' },
				{ id: 'm', title: 'Auditorium M' },
				{ id: 'n', title: 'Auditorium N' },
				{ id: 'o', title: 'Auditorium O' },
				{ id: 'p', title: 'Auditorium P' },
				{ id: 'q', title: 'Auditorium Q' },
				{ id: 'r', title: 'Auditorium R' },
				{ id: 's', title: 'Auditorium S' },
				{ id: 't', title: 'Auditorium T' },
				{ id: 'u', title: 'Auditorium U' },
				{ id: 'v', title: 'Auditorium V' },
				{ id: 'w', title: 'Auditorium W' },
				{ id: 'x', title: 'Auditorium X' },
				{ id: 'y', title: 'Auditorium Y' },
				{ id: 'z', title: 'Auditorium Z' }
			],
			events: [
				{ id: '1', resourceId: 'b', start: '2016-09-07T02:00:00', end: '2016-09-07T07:00:00', title: 'event 1' },
				{ id: '2', resourceId: 'c', start: '2016-09-07T05:00:00', end: '2016-09-07T22:00:00', title: 'event 2' },
				{ id: '3', resourceId: 'd', start: '2016-09-06', end: '2016-09-08', title: 'event 3' },
				{ id: '4', resourceId: 'e', start: '2016-09-07T03:00:00', end: '2016-09-07T08:00:00', title: 'event 4' },
				{ id: '5', resourceId: 'f', start: '2016-09-07T00:30:00', end: '2016-09-07T02:30:00', title: 'event 5' }
			],
			drop: function(date, jsEvent, ui, resourceId) {
				console.log('drop', date.format(), resourceId);

				// is the "remove after drop" checkbox checked?
				if ($('#drop-remove').is(':checked')) {
					// if so, remove the element from the "Draggable Events" list
					$(this).remove();
				}
			},
			eventReceive: function(event) { // called when a proper external event is dropped
				console.log('eventReceive', event);
			},
			eventDrop: function(event) { // called when an event (already on the calendar) is moved
				console.log('eventDrop', event);
			}
		})
	}
}
Scheduler.propTypes= {
	divId: React.PropTypes.string.isRequired
}; 
