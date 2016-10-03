var detailsTemplate = require('./pagaende.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Pagaende from '../../Jsx/Pagaende/components/Pagaende.js';


var viewModel = kendo.observable({
    title: "Pagaende"
})

var view = new kendo.View(detailsTemplate, {
    model: viewModel,
    show: function () {
        if (document.getElementById('issuecalendar-div')!==null) {
            alert('exists ');
            ReactDOM.unmountComponentAtNode(document.getElementById('issuecalendar-div'));
        }
        ReactDOM.render(
            <Pagaende />,
            document.getElementById("react-pagaende"));
        kendo.fx(this.element).fade('in').duration(100).play();
    }
});

module.exports = view;