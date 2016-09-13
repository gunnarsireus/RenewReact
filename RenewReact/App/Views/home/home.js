var homeTemplate = require('./home.html');
var layout = require('../layout/layout.js');
var login = require('../Login/login.js');
import React from 'react';
import ReactDOM from 'react-dom';
import UIRoot from '../../Jsx/Home/components/UIRoot.js';
var viewModel = kendo.observable({
    title: "Home"
});

var view = new kendo.View(homeTemplate, {
    model: viewModel,
    show: function () {
        if (document.getElementById("isUserAuthorized").innerHTML==='UserAuthorized') 
        {
            document.getElementsByTagName("header")[0].classList.remove("hidden");
            ReactDOM.render(
                <UIRoot />,
                document.getElementById("react-home"));
            kendo.fx(this.element).fade('in').duration(500).play();
        }
        else{
            layout.showIn("#content", login);
        }
    }
});

module.exports = view;