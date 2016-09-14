/* On-screen centered progress spinner */

export function siteShowProgress() {
    $('#progress-indicator').show();
    $.blockUI();
}

export function siteHideProgress() {
    $('#progress-indicator').hide();
    $.unblockUI();
}

/* Scrolling */

export function siteScrollToTop() {
    $(window).scrollTop(0);
}

/* Navigation */

export function siteGoTo(url) {
    siteShowProgress();
    if (url.substring(0, 1) !== '/') {
        url = '/' + url;
    }
    window.location.href = url;
}

/* Timing */

export function siteGetDurationStart() {
    return new Date();
}

export function siteGetDurationSecs(durationstart) {
    var now = new Date();
    return (now - durationstart) / 1000;
}

/* Global Ajax setup / error handler */

$.ajaxSetup({ cache: false });

$(document).ajaxError(function (e, xhr) {
    siteHideProgress();
    if (xhr.status == 401) {
        window.location = '/Login';
    }
    else if (xhr.status == 403) {
        Site.Dialogs.info(xhr.statusText);
    }
    else if (xhr.status >= 300) {
        Site.Dialogs.error(xhr.statusText);
    }
});

// No progress wheel (runs silent in backgrund).
// Raw JSON-data expected.
// Done-callback can optionally receive data from server.
export function siteAjaxGetSilent(url, data, doneCB) {
    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        success: function (response) {
            if (doneCB.length == 1) {
                doneCB(response);
            }
            else {
                doneCB();
            }
        }
    });
}

// Progress wheel on/off.
// Raw JSON-data expected.
// Done-callback can optionally receive data from server.
export function siteAjaxGet(url, data, doneCB) {
    siteShowProgress();
    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        success: function (response) {
            siteHideProgress();
            if (doneCB.length == 1) {
                doneCB(response);
            }
            else {
                doneCB();
            }
        }
    });
}

// Progress wheel on/off.
// AjaxStatus JSON-data expected.
// Done-callback can optionally receive data from server.
// Error-callback is optional to provide.
export function siteAjaxPost(url, data, doneCB, errorCB) {
    siteShowProgress();
    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        success: function (response) {
            siteHideProgress();
            if (response.success) {
                if (doneCB.length == 1) {
                    doneCB(response);
                }
                else {
                    doneCB();
                }
            }
            else if (errorCB) {
                if (errorCB.length == 1) {
                    errorCB(response);
                }
                else {
                    errorCB();
                }
            }
            else {
                Site.Dialogs.error(response.message);
            }
        }
    });
}

// Progress wheel on/off, targetform will be updated using AutoAjax.
// Raw JSON-data expected.
// Done-callback is optional and can optionally receive data from server.
export function siteAjaxReadToForm(url, data, targetform, doneCB) {
    siteShowProgress();
    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        success: function (response) {
            siteHideProgress();
            siteScrollToTop();
            Site.Validation.clearValidationSummary(targetform);
            Site.AutoAjax.setValues(response, targetform);
            if (doneCB) {
                if (doneCB.length == 1) {
                    doneCB(response);
                }
                else {
                    doneCB();
                }
            }
        }
    });
}
