//戻る処理1
$('#backbutton1').on('click', function () {
    // ポップアップを表示
    const userConfirmation = confirm("本当に初期画面に戻りますか？");
    
    if (userConfirmation) {
        // ユーザーが「はい」を選択した場合
        location.href = '../main.html';
    } else {
        // ユーザーが「いいえ」を選択した場合
        // 処理を中断 (何もしない)
    }
});