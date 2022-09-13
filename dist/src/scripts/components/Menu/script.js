var navbarBtn = $('.navbar-toggle')

navbarBtn.on('click', function () {
  var navbar = $(this).attr('data-target')
  
  $(this).toggleClass('is-active')
  $(navbar).find('.navbar-nav:not(.navbar-right)').toggleClass('is-show')
})