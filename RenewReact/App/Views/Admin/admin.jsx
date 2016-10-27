var detailsTemplate = require('./admin.html');
import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../../Jsx/Admin/index.jsx';


var viewModel = kendo.observable({
    title: "Admin"
});

var view = new kendo.View(detailsTemplate, {
    model: viewModel,
    show: function () {

        ReactDOM.render(
            <Index value1={''}
                   value2={''}
                   value3={''}
                   value4={''}
                   value5={''}
                   value6={''}
                   input11Id={'firstname'}
                   input12Id={'lastname'}
                   input13Id={'phone'}   
                   input21Id={'password'}  
                   input22Id={'newpassword1'}   
                   input23Id={'newpassword2'}  
    />,
            document.getElementById("react-admin"));
        kendo.fx(this.element).fade('in').duration(100).play();
    }
});

module.exports = view;