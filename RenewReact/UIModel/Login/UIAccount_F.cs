using ServerLibrary.Model;

namespace RenewReact.UIModel
{
    public class UIAccount_F : Validatable
    {
        public string email { get; set; }

        public UIAccount_F()
        {
        }

        public Account CreateModel()
        {
            Account model = new Account();
            model.email = ValidateEmail(Account.MINLEN_EMAIL, email, Account.MAXLEN_EMAIL, "Ogiltig e-postadress");
            return model;
        }

        public override void Validate()
        {
        }
    }
}
