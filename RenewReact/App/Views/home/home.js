var homeTemplate = require('./home.html');
import React from 'react';
import ReactDOM from 'react-dom';
import UIRoot from '../../Jsx/Home/components/UIRoot.js';
var viewModel = kendo.observable({
    title: "Home"
})

var view = new kendo.View(homeTemplate, {
    model: viewModel,
    show: function () {
       ReactDOM.render(
           <UIRoot />,
           document.getElementById("react-home"));
        kendo.fx(this.element).fade('in').duration(500).play();
    }
});

module.exports = view;