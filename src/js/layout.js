'use strict'
//Layout
var sideOverlay = document.getElementById('side-overlay')
  , sideMenuClosebutton = document.getElementById('side-menu-close-button')
  , navbarButton = document.getElementById('navbar-button')
  , toggleSidemenu = function () {
    //toggle mobile side menu
    navbarButton.onclick = function () {
      sideOverlay.classList.toggle('show');
    };

    sideMenuClosebutton.onclick = function () {
      sideOverlay.classList.remove('show');
    };
  };

  toggleSidemenu();
