$(document).ready(function(){
    var Circle = function(sel){
        var circles = document.querySelectorAll(sel);
        [].forEach.call(circles,function(el){
            var valEl = parseFloat(el.innerHTML);
            valEl = valEl*408/100;
            el.innerHTML = '<svg width="160" height="160"><circle transform="rotate(-90)" r="65" cx="-80" cy="80" /><circle transform="rotate(-90)" style="stroke-dasharray:'+(408 - valEl)+'px 408px;" r="65" cx="-80" cy="80" /></svg>';

        });
    };

    Circle('.circle');

    _moduleSlickMenu.action();
    //_moduleSlider.action();
    _scrollToTop.action();

});

_moduleSlickMenu = (function(){
    var _topMenu = $('.nav__list'),
        _prependTo = '.l-nav',
        _labelTopMenu = '';

    return {
        action: function(){
            _topMenu.slicknav({
                label: _labelTopMenu,
               prependTo: _prependTo
            });
            console.log('slick nav');
        }
    }
})();

_moduleSlider = (function(){
    var _slider = $('.slider__list');

    return {
        action: function(){
            _slider.slick({
                dots: true,
                autoplay: true,
                autoplaySpeed: 1000,
                fade: true,
                pauseOnHover: true,
                adaptiveHeight: true,
                arrows: false,
                draggable: true,
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            dots: false
                        }
                    }
                ]
            });
        }
    }
})();

_scrollToTop = (function(){
    var scroll = $(".scroll-top"),
        top = 300,
        delay = 800;
    return {
        action: function(){
            scroll.fadeOut();
            $(window).on("scroll",function() {
                if($(window).scrollTop() >= top) {
                    scroll.fadeIn();
                } else {
                    scroll.fadeOut();
                }
            });
            scroll.on("click",function(e) {
                e.preventDefault();
                $('body,html').animate(
                    {scrollTop:0},
                    delay
                );
            });
        }
    }
})();

