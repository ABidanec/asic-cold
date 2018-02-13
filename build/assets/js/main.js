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

    _moduleSlider.action();
    _moduleSlickMenu.action();
    _scrollToTop.action();
    _moduleEqualsHeight.action(".about__list");
    _moduleEqualsHeight.action(".team__list");

});

var _moduleSlickMenu = (function(){
    var _topMenu = $('.nav__list'),
        _prependTo = '.l-nav',
        _labelTopMenu = '';

    return {
        action: function(){
            _topMenu.slicknav({
                label: _labelTopMenu,
               prependTo: _prependTo
            });
        }
    }
})();

var _moduleSlider = (function(){

    var _slider = $(".slider__list");
    return {
        action: function(){
            _slider.slick({
                autoplay: true,
                autoplaySpeed: 3000
            });
            console.log("slider");
        }
    }
})();

var _scrollToTop = (function(){
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

var _moduleEqualsHeight = (function(){
    return {
        action: function(container){
            var children = $(container).children(),
                maxHeight = 0;
            for(var i = 0; i < children.length; i++){
                var temp = $(children[i]).height();
                if (maxHeight < temp){
                    maxHeight = temp;
                }
            }
            for(var i = 0; i < children.length; i++){
                $(children[i]).height(maxHeight);
            }
        }
    }
})();



