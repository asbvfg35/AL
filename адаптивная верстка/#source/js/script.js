var isMobile = function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function(){ }
if (isMobile.any()) { }
if (location.hash) {
  var hsh = location.hash.replace('#', '');
  if ($('.popup-' + hsh).lenght > 0) {
    popupOpen(hsh);
  }
  else if ($('div.' + hsh).lenght > 0) {
    $('body,html').anymate({ scrollTop: $('div.' + hsh).offset().top, }, 500, function () { })
  }

}
