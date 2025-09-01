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

/***************************************************************************** 
「Take Out」「Eat In」内のテキストの文章に合わせてボックスの高さを変動させる
******************************************************************************/
function changeBoxHeights() {
    //テキストの文章を囲む領域のサイズの調整
    const boxes = document.querySelectorAll(".c-service-card__text-container");

    boxes.forEach(box => box.style.height = "auto");    // 一旦リセット

    let maxHeight = 0;
    boxes.forEach(box => {
        maxHeight = Math.max(maxHeight, box.offsetHeight);
    });

    boxes.forEach(box => {
        box.style.height = maxHeight + "px";
    });

    //背景の画像のサイズの調整
    //const wrappers = document.querySelectorAll(".c-service-card__wrapper");
    //const imgs = document.querySelectorAll(".c-service-card__image");

    //imgs.forEach(img => img.style.height = "auto");

    //imgs.forEach((img, idx) => {
    //    img.style.height = wrappers[idx].offsetHeight + "px";
    //});
}

// 初期表示 & リサイズ時に実行
window.addEventListener("load", changeBoxHeights);
window.addEventListener("resize", changeBoxHeights);