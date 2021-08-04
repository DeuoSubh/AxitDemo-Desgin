$(function (){
    'use strict';
    $(window).scroll(function (){
        var navbar = $('.navbar');
            $(window).scrollTop()  >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
        });
    //deal with taps section
    $('.tab-switch li').click(function (){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.tabs-section .tabs-contant >div').hide();
        $('.' + $(this).data('class')).show();
        });
        $('html').niceScroll({
        cursorcolor: '#FF8B38',
        cursorwidth: '10px',
        cursorborder: '1px solid #333'
        });
    });