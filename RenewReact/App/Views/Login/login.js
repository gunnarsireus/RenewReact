var loginTemplate = require('./login.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../../Jsx/Login/index.js';
var viewModel = kendo.observable({
    title: "Login"
})

var view = new kendo.View(loginTemplate, {
    model: viewModel,
    show: function () {
       document.getElementsByTagName("header")[0].classList.add("hidden");
       ReactDOM.render(
           <Index />,
           document.getElementById("react-login"));
        kendo.fx(this.element).fade('in').duration(500).play();
    }
});

module.exports = view;