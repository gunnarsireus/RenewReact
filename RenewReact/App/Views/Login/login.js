var loginTemplate = require('./login.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../../Jsx/Login/Login.js';
var viewModel = kendo.observable({
    title: "Login"
});

var view = new kendo.View(loginTemplate, {
    model: viewModel,
    show: function () {
       document.getElementsByTagName("header")[0].classList.add("hidden");

       ReactDOM.render(<Login />,document.getElementById("react-login"));
       kendo.fx(this.element).fade('in').duration(100).play();
    }
});

module.exports = view;