//タブ切り替え
$(function() {
    $('.tab-button').click(function() {
        var target = $(this).data('target');

        // タブ切り替え
        $('.tab-button').removeClass('active');
        $(this).addClass('active');

        // コンテンツ切り替え
        $('.tab-content').hide();
        $('#' + target).show();
    });
});


//リンク先遷移用
var object1A = localStorage.getItem('Object1-1');

function openMonaca() {
window.open('https://www.google.co.jp/search?q='+object1A, '_system');
return false;
};

//戻る遷移
$('#backbutton').on('click', function () {
    location.href = '../main.html';
});
