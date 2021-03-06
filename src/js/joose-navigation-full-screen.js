// to es2015-ify

// import joose-utils once is es2015 compatible

;"use strict";

var joose = window.joose || {};
joose.navigation = window.joose.navigation || {};
joose.navigation.fullScreen = (function(joose) {

    // shared configuration / variables
    var config = {
        menuShownClass: 'menu-shown'
    };

    // private functions
    var toggleNav = function(globalNav, parentElement, pageContentElement, delay) {
        if (joose.utils.hasClass(parentElement, config.menuShownClass)) {
            joose.utils.removeClass(parentElement, config.menuShownClass);
            pageContentElement.style.removeProperty('top');
            console.log(delay)
            setTimeout(
                function() {
                    globalNav.scrollTop = 0;
                },
                (delay * 1000) + 10
            )
        } else {
            joose.utils.addClass(parentElement, config.menuShownClass);
            pageContentElement.style.top = window.innerHeight + 'px';
        }
    }

    // initialise toggle links
    var init = function (globalNav, menuToggleLinks, parentElement, pageContentElement, delay) {
        menuToggleLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                toggleNav(globalNav, parentElement, pageContentElement, delay);
            });
        });
    }

    // public functions
    return {
        toggleNav: toggleNav,
        init: init
    }

})(joose);