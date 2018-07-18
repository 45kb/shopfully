$(document).ready(function () {
  var navbarButton = $('.nav-button')
    , body = $('body')
    , sideOverlay = $('.side-overlay')
    , sideMenu = $('.side-menu')
    , sideMenuClosebutton = $('.side-menu-close-button');
    
    //toggle mobile side menu
    navbarButton.on('click', function () {
      sideOverlay.toggleClass('show');
    });
    
    sideMenuClosebutton.on('click', function () {
      sideOverlay.removeClass('show')
    });
});