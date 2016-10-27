var detailsTemplate = require('./kunder.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../../Jsx/Kunder/index.js';


var viewModel = kendo.observable({
    title: "Kunder"
});

var view = new kendo.View(detailsTemplate, {
    model: viewModel,
    show: function () {

        ReactDOM.render(
            <Index />,
            document.getElementById("react-kunder"));
        kendo.fx(this.element).fade('in').duration(100).play();
    }
});

module.exports = view;