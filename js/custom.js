jQuery(document).ready(function(){
  'use strict';

  //============================== header =========================

  $(window).load(function(){
    $('.body-wrapper').each(function(){
      var header_area = $('.header');
      var main_area = header_area.children('.nav-wrapper');

      var logo = main_area.find('.navbar-header');
      var navigation = main_area.find('.navbar-collapse');
      var original = {
        nav_top: navigation.css('margin-top')
      };

      $(window).scroll(function(){
        if( main_area.hasClass('bb-fixed-header') && ($(this).scrollTop() === 0 || $(this).width() < 750)){
          main_area.removeClass('bb-fixed-header').appendTo(header_area);
          navigation.animate({'margin-top': original.nav_top}, {duration: 100, queue: false, complete: function(){
            header_area.css('height', 'auto');
          }});
        }else if( !main_area.hasClass('bb-fixed-header') && $(this).width() > 750 &&
          $(this).scrollTop() > header_area.offset().top + header_area.height() - parseInt($('html').css('margin-top'), 10 )){

          header_area.css('height', header_area.height());
          main_area.css({'opacity': '0'}).addClass('bb-fixed-header');
          main_area.appendTo($('body')).animate({'opacity': 1});

          navigation.css({'margin-top': '0px'});
        }
      });
    });

    $(window).trigger('resize');
    $(window).trigger('scroll');
  });

  $('.navbar a.dropdown-toggle').on('click', function(e) {
      var elmnt = $(this).parent().parent();
      if (!elmnt.hasClass('nav')) {
          var li = $(this).parent();
          var heightParent = parseInt(elmnt.css('height').replace('px', ''), 10) / 2;
          var widthParent = parseInt(elmnt.css('width').replace('px', ''), 10) - 10;

          if(!li.hasClass('open')) {
            li.addClass('open');
          } else {
            li.removeClass('open');
          }
          $(this).next().css('top', heightParent + 'px');
          $(this).next().css('left', widthParent + 'px');

          return false;
      }
  });

  //============================== ALL DROPDOWN ON HOVER =========================
  if($('.navbar').width() > 1007)
  {
    $('.nav .dropdown').on('mouseover', function() {
          $(this).addClass('open');
      }),
    $('.nav .dropdown').on('mouseleave', function() {
          $(this).removeClass('open');
      });
  }

  //============================== SEARCH  =========================
  $('.searchBox a').on('click',function() {
      $('.searchBox .dropdown-menu').slideToggle(300);
      $('.searchBox a i').toggleClass('fa-close').toggleClass('fa-search');
  });

  //============================== Main Slider  =========================
  var $heroSlider = $( '.main-slider .inner' );
  if ( $heroSlider.length > 0 ) {
    $heroSlider.each( function () {

    var loop = $(this).parent().data('loop'),
        autoplay = $(this).parent().data('autoplay'),
        interval = $(this).parent().data('interval') || 3000;

      $(this).owlCarousel({
        items: 1,
        loop: loop,
        margin: 0,
        nav: true,
        dots: true,
        navText: [  ],
        autoplay: autoplay,
        autoplayTimeout: interval,
        autoplayHoverPause: true,
        smartSpeed:700
      });
    });
  }
  $( '.rtl .main-slider .inner' ).owlCarousel({
    rtl: true
  });

//============================== Rs-Slider =========================
  jQuery('.fullscreenbanner').revolution({
   delay: 5000,
   startwidth: 1170,
   startheight: 560,
   fullWidth: 'on',
   fullScreen: 'off',
   hideCaptionAtLimit: '',
   dottedOverlay: 'twoxtwo',
   navigationStyle: 'preview4',
   fullScreenOffsetContainer: '',
   hideTimerBar:'on'
  });
//============================== OWL-CAROUSEL =========================

  var owlOne = $('.owl-carousel.commentSlider');
  owlOne.owlCarousel({
    loop:true,
    margin:0,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav:false,
    moveSlides: 1,
    smartSpeed:1000,
    responsive:{
      320:{
        items:1
      },
      768:{
        items:1
      },
      992:{
        items:1
      }
    }
  });
  $( '.rtl .owl-carousel.commentSlider' ).owlCarousel({
    rtl: true
  });

  var owlTwo = $('.owl-carousel.partnersLogoSlider');
  owlTwo.owlCarousel({
    loop:true,
    margin:28,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    nav:true,
    dots: false,
    smartSpeed:500,
    responsive:{
      320:{
        slideBy: 1,
        items:1
      },
      768:{
        slideBy: 1,
        items:3
      },
      992:{
        slideBy: 1,
        items:4
      }
    }
  });
  $( '.rtl .owl-carousel.partnersLogoSlider' ).owlCarousel({
    rtl: true
  });

  var owlThree = $('.owl-carousel.testimonialSlider');
  owlThree.owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav:true,
    dots: false,
    moveSlides: 1,
    smartSpeed:1000,
    responsive:{
      320:{
        items:1
      },
      768:{
        items:1
      },
      992:{
        items:1
      }
    }
  });
  $( '.rtl .owl-carousel.testimonialSlider' ).owlCarousel({
    rtl: true
  });

  var owlFour = $('.owl-carousel.postSlider');
  owlFour.owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav:true,
    dots: false,
    moveSlides: 1,
    smartSpeed:1000,
    responsive:{
      320:{
        items:1
      },
      768:{
        items:1
      },
      992:{
        items:1
      }
    }
  });
  $( '.rtl .owl-carousel.postSlider' ).owlCarousel({
    rtl: true
  });

  //============================== SELECT BOX =========================
  $('.select-drop').selectbox();
  //============================== wow =========================
  new WOW().init();

  //============================== COUNTER-UP =========================
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });

  //============================== BACK TO TOP =========================
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('#backToTop').css('opacity', 1);
    } else {
      $('#backToTop').css('opacity', 0);
    }
  });

  //============================== SMOOTH SCROLLING TO SECTION =========================
  $('.scrolling  a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).attr('href');
    $(target).velocity('scroll', {
      duration: 1500,
      offset: -150,
      easing: 'easeOutExpo',
      mobileHA: false
    });
  });

  //============================== VIDEO =========================
  $('.video1 img').click(function(){
    var  video = '<iframe width="100%" height="300px" src="'+ $(this).attr('data-video') +'"></iframe>';
      $(this).replaceWith(video);
  });

  //============================== SIDE NAV MENU TOGGLE =========================
  $('.collapse-nav li a').on('click', function() {
    $(this).find('i').toggleClass('fa-minus fa-plus');
  });

  //============================== PROGRESS BARS =========================
  $('.progress-bar').each(function (i, elem) {
      var $elem = $(this),
          percent = $elem.attr('data-percent') || '100',
          delay = $elem.attr('data-delay') || '100',
          type = $elem.attr('data-type') || '%';

      if (!$elem.hasClass('progress-animated')) {
          $elem.css({
              'width': '0%'
          });
      }

      $elem.animate({
          'width': percent + '%'
      }, 'easeInOutCirc').addClass('progress-animated');

  });

});
