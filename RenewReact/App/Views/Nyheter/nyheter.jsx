var detailsTemplate = require('./nyheter.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../../Jsx/Nyheter/index.js';


var viewModel = kendo.observable({
    title: "Nyheter"
})

var view = new kendo.View(detailsTemplate, {
    model: viewModel,
    show: function () {

        ReactDOM.render(
            <Index />,
            document.getElementById("react-nyheter"));
        kendo.fx(this.element).fade('in').duration(100).play();
    }
});

module.exports = view;