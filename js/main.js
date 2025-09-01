/***************************************************************************** 
Menuボタン & ×ボタン クリック時
******************************************************************************/
$(function(){
    $('#js-menu-button').on('click',
    function(){
        $('.l-sidebar').addClass("open");
        $('.p-overlay').addClass('is-active');
        $('html, body').addClass('u-no-scroll');

    })

    $('#js-close-button').on('click',
        function(){
        $('.l-sidebar').removeClass("open");
        $('.p-overlay').removeClass("is-active");
        $('html, body').removeClass('u-no-scroll');
    })
});
