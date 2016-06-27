"use strict";

var MenuIsActive = false;
var Menu;

function toggleMenu(event) {
  event.preventDefault();
  MenuIsActive = !MenuIsActive;
  Menu.className = MenuIsActive ? 'active' : '';
}

function checkOnResize() {
  if (window.innerWidth >= 540) {
    MenuIsActive = false;
    Menu.className = '';
  }
}

function init() {
  var button = document.getElementById('main-nav-menu-button');
  button.addEventListener('click', toggleMenu);
  Menu = document.getElementById('main-nav-menu');
  window.addEventListener('resize', checkOnResize);
}

window.addEventListener('load', init);
