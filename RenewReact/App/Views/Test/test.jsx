var detailsTemplate = require('./test.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../../Jsx/Test/index.js';


var viewModel = kendo.observable({
    title: "test"
});

var view = new kendo.View(detailsTemplate, {
    model: viewModel,
    show: function () {

        ReactDOM.render(
            <Index />,
            document.getElementById("react-test"));
        kendo.fx(this.element).fade('in').duration(100).play();
    }
});

module.exports = view;