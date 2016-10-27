var detailsTemplate = require('./arendeKlasser.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../../Jsx/ArendeKlasser/index.js';


var viewModel = kendo.observable({
    title: "ArendeKlasser"
});

var view = new kendo.View(detailsTemplate, {
    model: viewModel,
    show: function () {

        ReactDOM.render(
            <Index />,
            document.getElementById("react-arendeKlasser"));
        kendo.fx(this.element).fade('in').duration(100).play();
    }
});

module.exports = view;