/// <reference path="site-components/site-xcomp-localstorage.js" />
import {getFormData} from './site-components/site-xcomp-inputforms.js';
import {clearAll} from './site-components/site-xcomp-localstorage.js';
import {siteAjaxPost,siteGoTo} from './site-base.js';
var validateForm  = null;
var validatePanel = null;
var forgotForm    = null;
var forgotPanel   = null;
var secureForm    = null;
var securePanel   = null;

/* Helpers */

export function hideMessage(form) {
    var messageField = form.find('#custom-message');
    messageField.html('');
    messageField.hide();
}

export function showMessage(form, message) {
    var messageField = form.find('#custom-message');
    messageField.html(message);
    messageField.show();
}

/* Ajax callbacks */

export function validateAccountPassed(response) {
    clearAll();
    siteGoTo(response.nextURL);
}

export function validateAccountFailed(response) {
    showMessage(validateForm, response.message);
}

export function forgotAccountPassed() {
    var email = forgotForm.find('#email').val();
    secureForm.find('#email').val(email);
    validatePanel.hide();
    forgotPanel.hide();
    securePanel.show();
}

export function forgotAccountFailed(response) {
    showMessage(forgotForm, response.message);
}

export function resendPinPassed() {
    showMessage(secureForm, 'Ny PIN-kod för verifiering skickad');
}

export function resendPinFailed(response) {
    showMessage(secureForm, response.message);
}

export function secureAccountPassed(response) {
    clearAll();
    siteGoTo(response.nextURL);
}

export function secureAccountFailed(response) {
    showMessage(secureForm, response.message);
}

/* Initialization */

$(function () {
    validateForm  = $('#validate-account-form');
    validatePanel = $('#validate-account-panel');
    forgotForm    = $('#forgot-account-form');
    forgotPanel   = $('#forgot-account-panel');
    secureForm    = $('#secure-account-form');
    securePanel   = $('#secure-account-panel');

    validateForm.find('#register-button').click(function () {
        siteGoTo('/Register');
    });

    validateForm.find('#validate-button').click(function () {
        var data = getFormData(validateForm);
        if (data) {
            hideMessage(validateForm);
            siteAjaxPost('/Login/ValidateAccount', data, validateAccountPassed, validateAccountFailed);
        }
    });

    validateForm.on('keydown', function (e) {
        if (e.which == 13) {
            var data = getFormData(validateForm);
            if (data) {
                hideMessage(validateForm);
                siteAjaxPost('/Login/ValidateAccount', data, validateAccountPassed, validateAccountFailed);
            }
        }
    });

    validateForm.find('#forgot-password-link').click(function () {
        hideMessage(validateForm);
        SiteInputForms.Validation.clearValidationSummary(forgotForm);
        validatePanel.hide();
        forgotPanel.show();
        securePanel.hide();
    });

    forgotForm.find('#go-back-link').click(function () {
        SiteInputForms.Validation.clearValidationSummary(validateForm);
        validatePanel.show();
        forgotPanel.hide();
        securePanel.hide();
    });

    forgotForm.find('#sendpin-button').click(function () {
        var data = getFormData(forgotForm);
        if (data) {
            hideMessage(forgotForm);
            siteAjaxPost('/Login/ForgotAccount', data, forgotAccountPassed, forgotAccountFailed);
        }
    });

    forgotForm.on('keydown', function (e) {
        if (e.which == 13) {
            var data = getFormData(forgotForm);
            if (data) {
                hideMessage(forgotForm);
                siteAjaxPost('/Login/ForgotAccount', data, forgotAccountPassed, forgotAccountFailed);
            }
        }
    });

    secureForm.find('#resend-pin-button').click(function () {
        var email = secureForm.find('#email').val();
        if (email !== '') {
            siteAjaxPost('/Account/ResendPIN', { email: email }, resendPinPassed, resendPinFailed);
        }
    });

    secureForm.find('#set-password-button').click(function () {
        var data = getFormData(secureForm);
        if (data) {
            hideMessage(secureForm);
            siteAjaxPost('/Account/SecureAccount', data, secureAccountPassed, secureAccountFailed);
        }
    });

    secureForm.on('keydown', function (e) {
        if (e.which == 13) {
            var data = getFormData(secureForm);
            if (data) {
                hideMessage(secureForm);
                siteAjaxPost('/Account/SecureAccount', data, secureAccountPassed, secureAccountFailed);
            }
        }
    });

    validatePanel.show();
    forgotPanel.hide();
    securePanel.hide();
});

