"use strict";

var appLinks = $('a.app-link');
var appLayout = $('iframe.app-layout');
appLinks.on('click', function (e) {
  e.preventDefault();
  var link = $(this).attr('href');
  appLayout.attr('src', link);
});