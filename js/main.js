//dropdown mega hover
$(document).ready(function() {



    var window_width = $(window).width();
    if (window_width > 768) {
        $(".dropdown").hover(function() {
            $('.dropdown-menu', this).stop().show();
        }, function() {
            $('.dropdown-menu', this).stop().hide();
        });
    }
});
//search form visibility
var $form = $('.form-wrapper');
$('.button-search-top').on("click", function() {
    $form.toggleClass("visible");
    if ($(".form-wrapper-sticky.visible").is(":visible")) {}
});
//watch live section
$('.live-listen').hover(function() {
    $(".live-listen img").attr('src',
        'img/WatchLive_SmallListenIcon_hover.png');
}, function() {
    $('.live-listen img').attr('src',
        'img/WatchLive_SmallListenIcon.png');
});
$(function() {
    $("#watchlive-active").bind("mouseover", function(event) {
        $('.live-watch-section').show();
    });
    $("#watchlive-active").bind("mouseleave", function(event) {
        $('.live-watch-section').hide();
    });
    $(".live-watch-section").bind("mouseenter", function(event) {
        $('.live-watch-section').show();
    });
    $(".live-watch-section").bind("mouseleave", function(event) {
        $('.live-watch-section').hide();
    });
    $('#watchlive-active').click(function() {
        var clicks = $(this).data('clicks');
        if (clicks) {
            $('.live-watch-section').hide();
        } else {
            $('.live-watch-section').show();
        }
        $(this).data("clicks", !clicks);
    });
});
//  /watch live
//sticky header
$(document).ready(function() {
    // equal height function
    function equalHeight(group) {
        var tallest = 0;
        group.each(function() {
            var thisHeight = $(this).height();
            if (thisHeight > tallest) {
                tallest = thisHeight;
            }
        });
        group.height(tallest);
    }

    function responsive_resize() {
        var window_width = $(window).width();
        //this for checking if adv exists
        var adExists = document.getElementById('topAdv');
        if (typeof(adExists) != 'undefined' && adExists != null) {
            if ($(window).scrollTop() > 155) {
                $('.site-header-sticky').addClass(
                    'fixed-header-shown');
                $('.site-header-sticky').addClass('fadeInDown');
                $('#topAdv').css('position', 'absolute');
                $('#topAdv').css('top', '155px');
                // $('.site-header .live-watch-section').css('display','block');


            }
            if ($(window).scrollTop() < 155) {
                $('.site-header-sticky').removeClass(
                    'fixed-header-shown');
                $('#topAdv').css('position', 'fixed');
                $('#topAdv').css('top', '0px');
                // $('.site-header .live-watch-section').css('display','none');

            }
            if ($(window).scrollTop() > 280) {
                $('.site-header-sticky').addClass(
                    'fixed-header-shown');
                $('.site-header-sticky').addClass('fadeInDown');
                $('.site-header .live-watch-section').css('visibility', 'hidden');


            }
            if ($(window).scrollTop() < 280) {
                $('.site-header-sticky').removeClass(
                    'fixed-header-shown');
                $('.site-header .live-watch-section').css('visibility', 'visible');

            }



        } else {
            if ($(window).scrollTop() > 150) {
                $('.site-header-sticky').addClass(
                    'fixed-header-shown');
                $('.site-header-sticky').addClass('fadeInDown');
                $('.pre-header').css('margin-top', '0px');
            }
            if ($(window).scrollTop() < 150) {
                $('.site-header-sticky').removeClass(
                    'fixed-header-shown');
                $('.pre-header').css('margin-top', '0px');
            }
        }
        if (window_width < 1200) {
            equalHeight($(".indepth-doc-wrap"));

        }
        if (window_width > 767) {
            $(".dropdown").hover(function() {
                $('.dropdown-menu', this).stop().show();
            }, function() {
                $('.dropdown-menu', this).stop().hide();
            });


            //equal height scripts 
            equalHeight($(".me-diff-topics-wrap"));
            equalHeight($(".me-topics-wrapper"));
            equalHeight($(".top-sec-same-height"));
            equalHeight($(".opinion-same-height"));
            // equalHeight($(".indepth-doc-wrap"));
            // equalHeight($(".topics-sidebar-indepth-item"));


        }
        if (window_width < 768) {


            $('.top-adv-wrapper img').addClass('img-responsive');


        } else {
            $('.top-adv-wrapper img').removeClass('img-responsive');
        }

    }
    $(function() {
        responsive_resize();
    });
    $(window).resize(function() {
        responsive_resize();
    });
    $(window).scroll(function() {
        responsive_resize();
    });
});
//live watch for sticky Header 
$('.live-listen').hover(function() {
    $(".live-listen img").attr('src',
        'img/WatchLive_SmallListenIcon_hover.png');




}, function() {
    $('.live-listen img').attr('src',
        'img/WatchLive_SmallListenIcon.png');
});
$(function() {

    $(".watch-live-sticky").bind("mouseover", function(event) {
        $('.live-watch-section').show();
    });
    $(".watch-live-sticky").bind("mouseleave", function(event) {
        $('.live-watch-section').hide();
    });
    $(".live-watch-section").bind("mouseenter", function(event) {
        $('.live-watch-section').show();
    });
    $(".live-watch-section").bind("mouseleave", function(event) {
        $('.live-watch-section').hide();
    });
    $('.watch-live-sticky').click(function() {
        var clicks = $(this).data('clicks');
        if (clicks) {
            $('.live-watch-section').hide();
        } else {
            $('.live-watch-section').show();
        }
        $(this).data("clicks", !clicks);
    });
});
//live watch for mobile Header 
$('.live-listen').hover(function() {
    $(".live-listen img").attr('src',
        'img/WatchLive_SmallListenIcon_hover.png');
}, function() {
    $('.live-listen img').attr('src',
        'img/WatchLive_SmallListenIcon.png');
});
$(function() {
    $(".watch-live-mobile").bind("mouseover", function(event) {
        $('.live-watch-section').show();
    });
    $(".watch-live-mobile").bind("mouseleave", function(event) {
        $('.live-watch-section').hide();
    });
    $(".live-watch-section").bind("mouseenter", function(event) {
        $('.live-watch-section').show();
    });
    $(".live-watch-section").bind("mouseleave", function(event) {
        $('.live-watch-section').hide();
    });
    $('.watch-live-mobile').click(function() {
        var clicks = $(this).data('clicks');
        if (clicks) {
            $('.live-watch-section').hide();
        } else {
            $('.live-watch-section').show();
        }
        $(this).data("clicks", !clicks);
    });
});
// mobile menu button
$(document).ready(function() {
    $("#nav-mobile").click(function(e) {
        var body = $('html');
        $(body).toggleClass('stop-scrolling');
        if (body.hasClass('stop-scrolling')) {
            $('#nav-mobile').css('background-color', 'black');
            $('#nav-mobile span').css('background-color',
                'white');
        } else {
            $('#nav-mobile').css('background-color', 'white');
            $('#nav-mobile span').css('background-color',
                'black');
        }
        // e.stopPropagation()
    });
});
//video section 
$(".tab-link").click(function(e) {
    e.preventDefault();
    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");
    $('#' + $(this).data('rel')).css('display', 'block');
    var tab = $(this).attr("href");
    $(".videos-content-wrapper").not(tab).css("display", "none");
});
$(".link").click(function(e) {
    e.preventDefault();
    $('.sp-image-wrapper').css('display', 'block');
    $('#' + $(this).data('rel')).css('display', 'block');
    var v_links = $('.' + $(this).data('rel'));
    $(".sp-image-wrapper").not(v_links).css("display", "none");
});


$(".show-more-stories").click(function(event) {
    event.preventDefault();
    $(".top-sec-row4-wrap").css('display', 'block');
    $(".show-more-stories").hide();
});



// fixed sidebar
// $(document).ready(function() {
// var top = $('.aside-wrapper').offset().top;
// var height = $('.aside-wrapper').height();
// var winHeight = $(window).height();
// var gap = 10;
// $(window).scroll(function(event) {
//     var scrollTop = $(this).scrollTop();
//     if (scrollTop + winHeight >= top + height + gap) {
//         $('.aside-wrapper').addClass('fixed').css('top', winHeight - height - gap + 'px');
//     } else {
//         $('.aside-wrapper').removeClass('fixed').css('top', '0px');

//     }
// })
// })
// /fixed sidebar



//picture carosule
$(document).ready(function() {
    $('.left.carousel-control').hide();

    $('#myCarousel').on('slid.bs.carousel', '', function() {
        var $this = $(this);
        if ($('.carousel-inner .item:first').hasClass('active')) {
            $('.left.carousel-control').hide();
            $('.right.carousel-control').show();
        } else if ($('.carousel-inner .item:nth-child(2)').hasClass('active')) {
            $('.left.carousel-control').show();
            $('.right.carousel-control').show();


        } else if ($('.carousel-inner .item:last').hasClass('active')) {

            $('.left.carousel-control').show();

            $('.right.carousel-control').hide();
        } else {
            $('.right.carousel-control').show();
        }


    });

});
