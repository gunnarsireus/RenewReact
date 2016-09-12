using System;
using System.Web.Optimization;

namespace RenewReact
{
    public static class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            Scripts.DefaultTagFormat = @"<script src=""{0}"" type=""text/javascript""></script>";
            Styles.DefaultTagFormat  = @"<link href=""{0}"" rel=""stylesheet"" type=""text/css"">";

            // All style sheets
            bundles.Add(new StyleBundle("~/bootstrap/css").Include(
                "~/App/css/jquery-ui-1.11.2.css",
                "~/App/css/DataTables-1.10.4/css/jquery.dataTables.css",
                "~/App/css/DataTables-1.10.4/css/dataTables.bootstrap.css",
                "~/App/css/bootstrap.css",
                "~/App/css/bootstrap-clockpicker.css",
                "~/App/css/bootstrap-datepicker.css",
                "~/App/css/bootstrap-select.css",
                "~/App/css/select2/select2.css",
                "~/App/css/select2/bootstrap-select2.css",
                "~/App/css/FullCalendar-2.6.1/fullcalendar.css",
                "~/App/css/FullCalendar-2.6.1/fullscheduler.css",
                "~/App/css/select2/site.css",
                "~/App/css/site.css"));

            // Modernizr and jQuery with input validation
            bundles.Add(new ScriptBundle("~/jquery/js").Include(
                "~/App/js/platform/modernizr-2.5.3.js",
                "~/App/js/platform/jquery-1.11.2.js",
                "~/App/js/platform/jquery-ui-1.11.2.js",
                //"~/App/js/platform/jquery.jeditable.js",
                "~/App/js/platform/jquery.uiblock.js",
                "~/App/js/platform/jquery.validate.js",
                "~/App/js/platform/jquery.validate.unobtrusive.js",
                "~/App/js/platform/jquery.validate.bootstrap.js",
                "~/App/js/platform/jquery.unobtrusive-ajax.js"));

            // Bootstrap etc
            bundles.Add(new ScriptBundle("~/bootstrap/js").Include(
                "~/App/js/platform/bootstrap.js",
                "~/App/js/platform/bootstrap-select.js",
                "~/App/js/platform/bootstrap-clockpicker.js",
                "~/App/js/platform/bootstrap-datepicker.js",
                //"~/App/js/platform/bootstrap-duallistbox.js",
                "~/App/js/DataTables-1.10.4/jquery.dataTables.js",
                "~/App/js/DataTables-1.10.4/dataTables.bootstrap.js",
                "~/App/js/select2/select2.full.js",
                "~/App/js/select2/i18n/sv.js",
                "~/App/js/site-base.js"));

            // Custom components
            bundles.Add(new ScriptBundle("~/site-components/js").Include(
                "~/App/js/site-components/site-xcomp-autoajax.js",
                "~/App/js/site-components/site-xcomp-validation.js",
                "~/App/js/site-components/site-xcomp-inputforms.js",
                "~/App/js/site-components/site-xcomp-inputpanels.js",
                "~/App/js/site-components/site-xcomp-select.js",
                "~/App/js/site-components/site-xcomp-select2.js",
                "~/App/js/site-components/site-xcomp-localstorage.js",
                "~/App/js/site-components/site-xcomp-popover.js",
                "~/App/js/site-components/site-xcomp-datatables.js",
                "~/App/js/site-components/site-xcomp-datepicker.js",
                "~/App/js/site-components/site-xcomp-dialogs.js",
                "~/App/js/site-components/site-xcomp-tabmenu.js"));

            // Page-specific JS code
            bundles.Add(new ScriptBundle("~/site-bugreport/js").Include(
                "~/App/js/site-bugreport.js"));

            bundles.Add(new ScriptBundle("~/site-customer/js").Include(
                "~/App/js/site-customer.js"));

            bundles.Add(new ScriptBundle("~/site-employee/js").Include(
                "~/App/js/site-employee.js"));
            
            bundles.Add(new ScriptBundle("~/site-home/js").Include(
                "~/App/js/site-home.js"));
            
            bundles.Add(new ScriptBundle("~/site-issue/js").Include(
                "~/App/js/FullCalendar-2.6.1/moment.min.js",
                "~/App/js/FullCalendar-2.6.1/fullcalendar.js",
                "~/App/js/FullCalendar-2.6.1/fullscheduler.js",
                "~/App/js/FullCalendar-2.6.1/lang/sv.js",
                "~/App/js/site-components/site-xcomp-calendar.js",
                "~/App/js/site-components/site-xcomp-scheduler.js",
                "~/App/js/site-issue/site-issuepageall/site-issuecalendar/site-issuecalendar.js",
                "~/App/js/site-issue/site-issuepageall/site-issueschedule/site-issueschedule.js",
                "~/App/js/site-issue/site-issuepageall/site-issuelist/site-issuelist.js",
                "~/App/js/site-issue/site-issuepageall/site-issuecreate.js",
                "~/App/js/site-issue/site-issuepageall/site-issuefilter.js",
                "~/App/js/site-issue/site-issuepageall/site-issuepageall.js",
                "~/App/js/site-issue/site-issuepageone/site-issuetabs/site-issuetabproblem.js",
                "~/App/js/site-issue/site-issuepageone/site-issuetabs/site-issuefeedbackcreate.js",
                "~/App/js/site-issue/site-issuepageone/site-issuetabs/site-issuetabfeedback.js",
                "~/App/js/site-issue/site-issuepageone/site-issuetabs/site-issuetabhistory.js",
                "~/App/js/site-issue/site-issuepageone/site-issuetabs.js",
                "~/App/js/site-issue/site-issuepageone/site-issuecommand.js",
                "~/App/js/site-issue/site-issuepageone/site-issuepageone.js",
                "~/App/js/site-issue/site-issue.js"));

            bundles.Add(new ScriptBundle("~/site-issueclass/js").Include(
                "~/App/js/site-issueclass.js"));

            bundles.Add(new ScriptBundle("~/site-login/js").Include(
                "~/App/js/site-components/site-xcomp-localstorage.js",
                "~/App/js/site-login.js"));

            bundles.Add(new ScriptBundle("~/site-news/js").Include(
                "~/App/js/site-news.js"));

            bundles.Add(new ScriptBundle("~/site-offer/js").Include(
                "~/App/js/site-offer.js"));

            bundles.Add(new ScriptBundle("~/site-profile/js").Include(
                "~/App/js/site-profile.js"));

            bundles.Add(new ScriptBundle("~/site-register/js").Include(
                "~/App/js/site-components/site-xcomp-localstorage.js",
                "~/App/js/site-register.js"));

            bundles.Add(new ScriptBundle("~/site-resident/js").Include(
                "~/App/js/site-resident.js"));

            bundles.Add(new ScriptBundle("~/site-timetype/js").Include(
                "~/App/js/site-timetype.js"));

#if !DEBUG
            BundleTable.EnableOptimizations = true;
#endif
        }
    }
}
