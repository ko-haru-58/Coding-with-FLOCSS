$(function(){
    $('#js-menu-button').on('click',
    function(){
        $('.l-sidebar').addClass("open");
        $('.l-overlay').addClass('is-active');
        $('html, body').addClass('u-no-scroll');

    })

    $('#js-close-button').on('click',
        function(){
        $('.l-sidebar').removeClass("open");
        $('.l-overlay').removeClass("is-active");
        $('html, body').removeClass('u-no-scroll');
    })
});
