var layout = require('../App/Views/layout/layout');
var home = require('../App/Views/home/home');

var personal = require('../App/Views/Personal/personal');
var felanmalan = require('../App/Views/Felanmalan/felanmalan');

var pagaende = require('../App/Views/Pagaende/pagaende');
var arkiverade = require('../App/Views/Arkiverade/arkiverade');

var nyheter = require('../App/Views/nyheter/nyheter');
var erbjudanden = require('../App/Views/Erbjudanden/erbjudanden');

var kunder = require('../App/Views/Kunder/kunder');
var boende = require('../App/Views/Boende/boende');
var tidkoder = require('../App/Views/Tidkoder/tidkoder');
var arendeKlasser = require('../App/Views/ArendeKlasser/arendeKlasser');

var admin = require('../App/Views/Admin/admin');
var loggaut = require('../App/Views/Loggaut/loggaut');

var login = require('../App/Views/Login/login');

var router = new kendo.Router({
    init: function () {
        
        // render the layout first
        layout.render("#applicationHost");
    },
    routeMissing: function (e) {
        
        // debug shim writes console errors to the browser dev tools
        debug.error('No Route Found', e.url);
    },
        
    change: function (e) {
        // publish an event whenever the route changes
        $.publish('/router/change', [e]);
    }
});

// Add new routes here...
    
//router.route('/', function (e) {
//    layout.showIn("#content", home);
//});
router.route('/', function (e) {
    layout.showIn("#content", login);
});

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

module.exports = router;