using ServerLibrary.Model;

namespace RenewReact.UIModel
{
    public class UICustomer_Search
    {
        public int    id   { get; set; }
        public string text { get; set; }

        public UICustomer_Search(Customer dbm)
        {
            id   = dbm.id;
            text = dbm.AsText;
        }
    }
}