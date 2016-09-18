var viewModel = kendo.observable({
    title: "Logga ut"
});

var view = new kendo.View(null, {
    model: viewModel,
    show: function () {
      var isUserAuthorized = "";
      localStorage.setItem("isUserAuthorized", isUserAuthorized);
      window.location.href = '/Home/Logout';
    }
});

module.exports = view;