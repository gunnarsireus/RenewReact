import layoutTemplate from './layout.html';

var nav;

// these links populate the navbar
var viewModel = kendo.observable({
    linksLeft: {
        list: [[{ title: 'Admin', href: '', icon: '' },
                    { title: 'Personal', href: '#/personal', icon: '' },
                    { title: 'Felanmälan', href: '#/felanmalan', icon: '' }],
            [{ title: 'Ärenden', href: '', icon: '' },
                    { title: 'Pågående', href: '#/pagaende', icon: '' },
                    { title: 'Arkiverade', href: '#/arkiverade', icon: '' },
                    { title: 'Kalender', href: '#/calendar', icon: '' },
                    { title: 'Test', href: '#/test', icon: '' }],
            [{ title: 'Meddelanden', href: '', icon: '' },
                    { title: 'Nyheter', href: '#/nyheter', icon: '' },
                    { title: 'Erbjudanden', href: '#/erbjudanden', icon: '' }],
            [{ title: 'Register', href: '', icon: '' },
                    { title: 'Kunder', href: '#/kunder', icon: '' },
                    { title: 'Boende', href: '#/boende', icon: '' },
                    { title: 'Tidkoder', href: '#/tidkoder', icon: '' },
                    { title: 'Ärendeklasser', href: '#/arendeKlasser', icon: '' }]
        ]
    },
    linksRight: {
        list: [[{ title: 'Admin Admin', href: '#/admin', icon: '' }],
           [{ title: 'Logga ut', href: '#/loggaut', icon: '' }]
        ]
    }

});

var layout = new kendo.Layout(layoutTemplate, {
    model: viewModel,
    init: function (e) {
        // cache a reference to the nav links element
        nav = e.sender.element.find('#nav-links');
    }
});

$.subscribe('/router/change', function (e) {

    // select a nav link based on the current route
    var active = nav.find('a[href="#' + e.url + '"]').parent();

    // if the nav link exists...
    if (active.length > 0) {

        // remove the active class from all links
        nav.find('li').removeClass('active');

        // add the active class to the current link
        active.addClass('active');
    }

});

module.exports = layout;