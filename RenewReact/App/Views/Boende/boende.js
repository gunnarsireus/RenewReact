var detailsTemplate = require('./boende.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../../Jsx/Boende/index.js';


var viewModel = kendo.observable({
    title: "Boende"
});

var view = new kendo.View(detailsTemplate, {
    model: viewModel,
    show: function () {

        ReactDOM.render(
            <Index />,
            document.getElementById("react-boende"));
        kendo.fx(this.element).fade('in').duration(500).play();
    }
});

module.exports = view;