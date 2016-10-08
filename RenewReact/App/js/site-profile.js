import SiteAutoAjax from './site-components/site-xcomp-autoajax.js';
var updateForm = null;
var secureForm = null;

/* Callbacks */

function profileDeleted() {
    siteGoTo('/Login');
}

function profileUpdated() {
    alert('Kontoinformation uppdaterad');
}

function profileSecured() {
    //SiteAutoAjax.clearValues(secureForm);
    alert('Lösenord uppdaterat');
}

/* Initialization */

$(function () {
    updateForm = $('#update-profile-form');
    secureForm = $('#change-password-form');

    $('#delete-profile-button').click(function () {
        SiteDialogs.confirm('/img/delete.png', 'Ta bort konto', 'Vill du avsluta ditt konto?', 'Nej', 'Ja', function () {
            siteAjaxPost('/Profile/DeleteProfile', null, profileDeleted);
        });
    });

    SiteAutoAjax.clearValues(secureForm);
    siteAjaxReadToForm('/Profile/ReadProfile', null, updateForm);

    /* Form buttons */

    updateForm.find('.update-profile-form-buttons').click(function () {
        var button = $(this);
        if (Site.InputPanels.isAPPLY(button)) {
            var data = Site.InputPanels.getFormData(updateForm);
            if (data) {
                Site.Validation.clearValidationSummary(updateForm);
                siteAjaxPost('/Profile/UpdateProfile', data, profileUpdated);
            }
        }
    });

    secureForm.find('.change-password-form-buttons').click(function () {
        var button = $(this);
        if (Site.InputPanels.isAPPLY(button)) {
            var data = Site.InputPanels.getFormData(secureForm);
            if (data) {
                Site.Validation.clearValidationSummary(secureForm);
                data && siteAjaxPost('/Profile/ChangePassword', data, profileSecured);
            }
        }
    });
});
