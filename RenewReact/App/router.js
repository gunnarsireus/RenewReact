var layout = require('../App/Views/Layout/layout');
var home = require('../App/Views/Home/home.jsx');

var personal = require('../App/Views/Personal/personal.jsx');
var felanmalan = require('../App/Views/Felanmalan/felanmalan.jsx');

var pagaende = require('../App/Views/Pagaende/pagaende.jsx');
var arkiverade = require('../App/Views/Arkiverade/arkiverade.jsx');

var nyheter = require('../App/Views/nyheter/nyheter.jsx');
var erbjudanden = require('../App/Views/Erbjudanden/erbjudanden.jsx');

var kunder = require('../App/Views/Kunder/kunder.jsx');
var boende = require('../App/Views/Boende/boende.jsx');
var tidkoder = require('../App/Views/Tidkoder/tidkoder.jsx');
var arendeKlasser = require('../App/Views/ArendeKlasser/arendeKlasser.jsx');

var admin = require('../App/Views/Admin/admin.jsx');
var loggaut = require('../App/Views/Loggaut/loggaut');

var login = require('../App/Views/Login/login.jsx');
var calendar = require('../App/Views/Calendar/calendar.jsx');
var test = require('../App/Views/Test/test.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../App/Jsx/Common/footer.js';

var router = new kendo.Router({
    init: function () {
        
        // render the layout first
        layout.render("#applicationHost");
        ReactDOM.render(<Footer show={false} />,document.getElementById("footer"));
    },
    routeMissing: function (e) {
        console.log(e.url)
        // debug shim writes console errors to the browser dev tools
        debug.error('No Route Found', e.url);
    },
        
    change: function (e) {
        // publish an event whenever the route changes
        $.publish('/router/change', [e]);
    }
});

// Add new routes here...

router.route('/arendeKlasser', function (e) {
    layout.showIn("#content", arendeKlasser);
});
router.route('/arkiverade', function (e) {
    layout.showIn("#content", arkiverade);
});
router.route('/boende', function (e) {
    layout.showIn("#content", boende);
});
router.route('/erbjudanden', function (e) {
    layout.showIn("#content", erbjudanden);
});
router.route('/felanmalan', function (e) {
    layout.showIn("#content", felanmalan);
});
router.route('/nyheter', function (e) {
    layout.showIn("#content", nyheter);
});
router.route('/pagaende', function (e) {
    layout.showIn("#content", pagaende);
});
router.route('/personal', function (e) {
    layout.showIn("#content", personal);
});
router.route('/kunder', function (e) {
    layout.showIn("#content", kunder);
});
router.route('/tidkoder', function (e) {
    layout.showIn("#content", tidkoder);
});
router.route('/admin', function (e) {
    layout.showIn("#content", admin);
});
router.route('/loggaut', function (e) {
    layout.showIn("#content", loggaut);
});

router.route('/login', function (e) {
    layout.showIn("#content", login);
});

router.route('/calendar', function (e) {
    layout.showIn("#content", calendar);
});

router.route('/', function (e) {
    layout.showIn("#content", home);
});

router.route('/test', function (e) {
    layout.showIn("#content", test);
});

module.exports = router;