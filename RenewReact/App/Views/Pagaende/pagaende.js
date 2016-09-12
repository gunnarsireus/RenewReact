var detailsTemplate = require('./pagaende.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../../Jsx/Pagaende/index.js';


var viewModel = kendo.observable({
    title: "Pagaende"
})

var view = new kendo.View(detailsTemplate, {
    model: viewModel,
    show: function () {

        ReactDOM.render(
            <Index />,
            document.getElementById("react-pagaende"));
        kendo.fx(this.element).fade('in').duration(500).play();
    }
});

module.exports = view;