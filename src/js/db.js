'use strict'
//init database if not present
if (!localStorage.getItem('favourites')) {
  localStorage.setItem('favourites', JSON.stringify([]))
}
