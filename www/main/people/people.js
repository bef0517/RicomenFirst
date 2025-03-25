//戻る遷移
$('#backbutton').on('click', function () {
    location.href = '../main.html';
});

//次遷移
$('#P-1button').on('click', function () {
    $('body').animate({'marginLeft': '-100%'}, 400); // 右方向にスクロール
    setTimeout(function () {
        location.href = 'chat/chat1.html';
    }, 200); // アニメーション完了後に画面遷移
});