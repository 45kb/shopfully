'use strict'
//Favaourites
var favouritesWrapper = document.getElementById('favourites-list')
, favourites = JSON.parse(localStorage.getItem('favourites'))
, activateFavouriteButtons = function () {
  //get all the buttons for favourites
  var buttons = document.getElementsByClassName('favourite-button');
  //lopp them and see if their id="" value is present in favourites list
  for (var i = 0; i < buttons.length; i += 1) {

    var buttonID = buttons[i].id
      , thisButton = buttons[i];

    //if the ID is present in favourites list -> add the .active class to the current button
    if (favourites && favourites.indexOf(buttonID) > -1) {
      thisButton.classList.add('active');
    }
  }
}
, saveFavourite = function (identifier) {
  var id = identifier.toString();
  //if not saved save it
  if (favourites.indexOf(id) < 0) {
    favourites.push(id);
    localStorage.setItem('favourites', JSON.stringify(favourites.sort()));

  } else {
    deleteFavourite(identifier);
  }

  console.info('Saved in favourites', favourites);
  generateFavouritePinsList();
}
, deleteFavourite = function (identifier) {

  var id = identifier.toString()
  , indexOf = favourites.indexOf(id);

  if (indexOf > -1) {
    favourites.splice(indexOf, 1);
  }

  localStorage.setItem('favourites', JSON.stringify(favourites));
  console.info('Deleted from favourites', favourites);
}
, generateFavouritePinsList = function () {
  var html;

  //create element in wrapper list
  for (var i = 0; i < favourites.length; i += 1) {
    html += "<a href='#' class='list-group-item text-muted favourite-button' onclick='deleteFavourite(" + favourites[i] + "); generateFavouritePinsList();'>"
     + "<i class='fa fa-heart'></i>&nbsp;&nbsp;Flyer number " + favourites[i] + "</a>";
  }

  if (!html) {
    html = "You have 0 favourite flyers.";
  }
  favouritesWrapper.innerHTML = html;

  console.info('Updated list of favourites');
};

//Init favourite pinned flyers
generateFavouritePinsList();
//Activate buttons for pinned flyers
activateFavouriteButtons();
