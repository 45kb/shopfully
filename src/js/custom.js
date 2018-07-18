//Favaourites
var favourites = JSON.parse(localStorage.getItem('favourites')) || []
  , saveFavourite = function (id) {
  if (!favourites && favourites.indexOf(id) < 0) {
    console.log(favourites, typeof favourites);
    favourites.push(id);
    localStorage.setItem('favourites', favourites);

    alert(favourites + localStorage.favourites);
  }
}
, deleteFavourite = function (id) {
    var indexOf = favourites.indexOf(id);

    if (indexOf >= 0) {
      favourites.splice(indexOf, 1);
    }

    localStorage.setItem('favourites', favourites);
    alert(favourites + localStorage.favourites);
};



//Layout
$(document).ready(function () {

  var navbarButton = $('.nav-button')
    , body = $('body')
    , sideOverlay = $('.side-overlay')
    , sideMenu = $('.side-menu')
    , sideMenuClosebutton = $('.side-menu-close-button')
    , toggleSidemenu = function () {
      //toggle mobile side menu
      navbarButton.on('click', function () {
        sideOverlay.toggleClass('show');
      });

      sideMenuClosebutton.on('click', function () {
        sideOverlay.removeClass('show')
      });
    };

    toggleSidemenu();
});
