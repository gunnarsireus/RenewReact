var detailsTemplate = require('./loggaut.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../../Jsx/Loggaut/index.js';


var viewModel = kendo.observable({
    title: "Loggaut"
})

var view = new kendo.View(detailsTemplate, {
    model: viewModel,
    show: function () {

        ReactDOM.render(
            <Index />,
            document.getElementById("react-loggaut"));
        kendo.fx(this.element).fade('in').duration(500).play();
    }
});

module.exports = view;