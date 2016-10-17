var detailsTemplate = require('./admin.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../../Jsx/Admin/components/index.js';


var viewModel = kendo.observable({
    title: "Admin"
});

var view = new kendo.View(detailsTemplate, {
    model: viewModel,
    show: function () {

        ReactDOM.render(
            <Index />,
            document.getElementById("react-admin"));
        kendo.fx(this.element).fade('in').duration(100).play();
    }
});

module.exports = view;