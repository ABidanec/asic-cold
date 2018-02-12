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

