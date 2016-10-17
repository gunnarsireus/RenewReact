var homeTemplate = require('./home.html');
var layout = require('../Layout/layout.js');
var login = require('../Login/login.js');
import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../../Jsx/Home/components/home.js';
var viewModel = kendo.observable({
    title: "Home"
});

var view = new kendo.View(homeTemplate, {
    model: viewModel,
    show: function () {
        var dmin = localStorage.getItem("isUserAuthorized");
        if (document.getElementById("isUserAuthorized").innerHTML==='UserAuthorized' || isUserAuthorized==='UserAuthorized') 
        {
            document.getElementsByTagName("header")[0].classList.remove("hidden");
            ReactDOM.render(
                <Home />,
                document.getElementById("react-home"));
            kendo.fx(this.element).fade('in').duration(100).play();
        }
        else{
            layout.showIn("#content", login);
        }
    }
});

module.exports = view;