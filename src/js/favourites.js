'use strict'
//Favaourites
var favouritesWrapper = document.getElementById('favourites-list')
, favourites = JSON.parse(localStorage.getItem('favourites'))
, saveFavourite = function (identifier) {
  var id = identifier.toString();
  //if not saved save it
  if (favourites.indexOf(id) < 0) {
    favourites.push(id);
    localStorage.setItem('favourites', JSON.stringify(favourites));

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
  console.info('Deleted in favourites', favourites);
}
, generateFavouritePinsList = function () {
  var html = "";

  //create element in wrapper list
  for (var i = 0; i < favourites.length; i += 1) {
    html += "<a  onclick='deleteFavourite(" + favourites[i] + "); generateFavouritePinsList();' href='#' class='list-group-item text-muted'>" +
    "<i class='fa fa-heart'></i>&nbsp;&nbsp;Flyer number " + favourites[i] + "</a>";
  }

  favouritesWrapper.innerHTML = html;

  console.info('Updated list of favourites');
};

//Init favourite pinned flyers
generateFavouritePinsList();
