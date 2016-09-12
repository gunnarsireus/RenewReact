var detailsTemplate = require('./erbjudanden.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../../Jsx/Erbjudanden/index.js';


var viewModel = kendo.observable({
    title: "Erbjudanden"
})

var view = new kendo.View(detailsTemplate, {
    model: viewModel,
    show: function () {

        ReactDOM.render(
            <Index />,
            document.getElementById("react-erbjudanden"));
        kendo.fx(this.element).fade('in').duration(500).play();
    }
});

module.exports = view;