using System.Web.Mvc;
using ServerLibrary.Model;
using ServerLibrary.Operations;

namespace RenewReact.Controllers
{
    public class HomeController : BaseController
    {
        /* Render */

        public ActionResult Index()
        {
            Account account = base.GetLoginAccount(false);
            if (account == null || !HomeOperations.CanRender(account))
            {
                ViewBag.UserAuthorized = "";
                return base.ToLoginPage();
            }
            ViewBag.UserAuthorized = "UserAuthorized";
            return View();
        }
    }
}
