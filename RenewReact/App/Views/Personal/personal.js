var detailsTemplate = require('./personal.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../../Jsx/Personal/index.js';


var viewModel = kendo.observable({
    title: "Personal"
})

var view = new kendo.View(detailsTemplate, {
    model: viewModel,
    show: function () {

        ReactDOM.render(
            <Index />,
            document.getElementById("react-personal"));
        kendo.fx(this.element).fade('in').duration(100).play();
    }
});

module.exports = view;