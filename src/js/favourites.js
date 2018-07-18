'use strict'
//Favaourites
var favourites = JSON.parse(localStorage.getItem('favourites'))
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
}
, deleteFavourite = function (identifier) {

  var id = identifier.toString()
  , indexOf = favourites.indexOf(id);

  if (indexOf > -1) {
    favourites.splice(indexOf, 1);
  }
  localStorage.setItem('favourites', JSON.stringify(favourites));
  console.info('Deleted in favourites', favourites);
};
