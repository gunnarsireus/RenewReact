﻿using System;

using ServerLibrary.Model;
using ServerLibrary.Utils;

namespace RenewReact.UIModel
{
    public class UIProfile_RU
    {
        public string firstname { get; set; }
        public string lastname  { get; set; }
        public string phone     { get; set; }
        public string address   { get; set; }
        public string floor     { get; set; }
        public string apartment { get; set; }
        public string username { get; set; }
        public string customername { get; set; }
        public string authorization { get; set; }
        public string lastlogin { get; set; }

        public UIProfile_RU()
        {
        }

        public UIProfile_RU(Account model)
        {
            this.firstname = model.firstname;
            this.lastname  = model.lastname;
            this.phone     = model.phone;
            this.address   = model.address;
            this.floor     = model.floor;
            this.apartment = model.apartment;
        }

        public Account UpdateModel(Account model)
        {
            if (model != null)
            {
                model.firstname = this.firstname;
                model.lastname  = this.lastname;
                model.phone     = this.phone;
                model.address   = model.IsAtLeastTechnician() ? "" : this.address;
                model.floor     = model.IsAtLeastTechnician() ? "" : this.floor;
                model.apartment = model.IsAtLeastTechnician() ? "" : this.apartment;
            }
            return model;
        }
    }
}