var detailsTemplate = require('./tidkoder.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../../Jsx/Tidkoder/index.js';


var viewModel = kendo.observable({
    title: "Tidkoder"
})

var view = new kendo.View(detailsTemplate, {
    model: viewModel,
    show: function () {

        ReactDOM.render(
            <Index />,
            document.getElementById("react-tidkoder"));
        kendo.fx(this.element).fade('in').duration(500).play();
    }
});

module.exports = view;