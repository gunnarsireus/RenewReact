var detailsTemplate = require('./calendar.html');
import React from 'react';
import ReactDOM from 'react-dom';
import CalendarApp from '../../Jsx/Common/CalendarApp.js';


var viewModel = kendo.observable({
    title: "Calendar"
})

var view = new kendo.View(detailsTemplate, {
    model: viewModel,
    show: function () {

        ReactDOM.render(
            <CalendarApp />,
            document.getElementById("react-calendar"));
        kendo.fx(this.element).fade('in').duration(100).play();
    }
});

module.exports = view;