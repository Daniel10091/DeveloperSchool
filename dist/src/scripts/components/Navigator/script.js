var navigationLinks = $('#navbar ul:not(.navbar-right) li a')

navigationLinks.first().addClass('is-active')

navigationLinks.on('click', function ( e ) {
  e.preventDefault()
  navigationLinks.removeClass('is-active')
  $(this).addClass('is-active')
})