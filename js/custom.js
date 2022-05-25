$(window).scroll(function () {
  var height = $(window).scrollTop();

  if (height > 550) {
    $('.home-desc').addClass('sticky');
    $('.home-desc ul').addClass('stickyUl');
  } else {
    $('.home-desc').removeClass('sticky');
    $('.home-desc ul').removeClass('stickyUl');
  }
});
$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});
$(document).ready(function () {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        900,
        'swing',
        function () {
          window.location.hash = target;
        },
      );
  });
  $('body').scrollspy({ target: '.menu-principal' });
  $('#capa-tabs a').on('click', function (e) {
    e.preventDefault();
    $('#capa-tabs a').removeClass('active');
    $(this).tab('show');
    $(this).addClass('active');
  });

  $('#idiomas').on('change', function () {
    var url = $(this).val();
    if (url) {
      window.location = url;
    }
  });
});
$(document).ready(function () {
  $('.owl-testimonios').owlCarousel({
    nav: true,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        dots: false,
        nav: false,
      },
      600: {
        items: 1,
        dots: false,
        nav: false,
      },
      1000: {
        items: 1,
        dots: false,
      },
    },
  });
  $('.owl-personas').owlCarousel({
    nav: true,
    loop: true,
    slideBy: 5,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
        dots: false,
        nav: false,
      },
      600: {
        items: 5,
        dots: false,
        nav: false,
      },
      1000: {
        items: 5,
        dots: false,
      },
    },
  });
});
