var detailsTemplate = require('./felanmalan.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../../Jsx/Felanmalan/index.js';


var viewModel = kendo.observable({
    title: "Felanmalan"
});

var view = new kendo.View(detailsTemplate, {
    model: viewModel,
    show: function () {

        ReactDOM.render(
            <Index />,
            document.getElementById("react-felanmalan"));
        kendo.fx(this.element).fade('in').duration(500).play();
    }
});

module.exports = view;