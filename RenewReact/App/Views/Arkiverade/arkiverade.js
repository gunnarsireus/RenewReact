var detailsTemplate = require('./arkiverade.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../../Jsx/Arkiverade/index.js';


var viewModel = kendo.observable({
    title: "Arkiverade"
});

var view = new kendo.View(detailsTemplate, {
    model: viewModel,
    show: function () {

        ReactDOM.render(
            <Index />,
            document.getElementById("react-arkiverade"));
        kendo.fx(this.element).fade('in').duration(100).play();
    }
});

module.exports = view;