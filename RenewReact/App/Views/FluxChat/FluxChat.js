var FluxChatTemplate = require('./FluxChat.html');
    
import React from 'react';
import ReactDOM from 'react-dom';

import ChatApp from '../../FluxChat/js/components/ChatApp.js';
import ChatExampleData from'../../FluxChat/js/ChatExampleData';
import ChatWebAPIUtils from '../../FluxChat/js/utils/ChatWebAPIUtils';

window.React = React; // export for http://fb.me/react-devtools

var viewModel = kendo.observable({
    title: "Chat"
});

var view = new kendo.View(FluxChatTemplate, {
    model: viewModel,
    show: function () {
        ChatExampleData.init(); // load example data into localstorage
        ChatWebAPIUtils.getAllMessages();

        ReactDOM.render(
            <ChatApp />,
            document.getElementById('react-app2')
        );
        kendo.fx(this.element).fade('in').duration(500).play();
    }
});

module.exports = view;
