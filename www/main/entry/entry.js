//戻る処理1
$('#backbutton').on('click', function () {
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


//戻る処理2

$(document).on('click', '#backbutton2', function() {
    if (currentMarginLeft < 0) {
        currentMarginLeft -= -100;
        $('body').animate({'marginLeft': currentMarginLeft + '%'}, 0);
    }
});

//戻る処理3
$('#backbutton3').on('click', function () {
    // ポップアップを表示
    const userConfirmation = confirm("これまでの入力情報は全て破棄されます。本当に初期画面に戻りますか？");
    
    if (userConfirmation) {
        // ユーザーが「はい」を選択した場合
        location.href = '../main.html';
    } else {
        // ユーザーが「いいえ」を選択した場合
        // 処理を中断 (何もしない)
    }
});

//進む処理
// 現在の margin-left を管理する変数
let currentMarginLeft = 0;

// #slideA が呼び出されたときの処理
$(document).on('click', '#slideA', function() {
    // -100% ずつ移動
    currentMarginLeft -= 100;

    // アニメーションで適用
    $('body').animate({'marginLeft': currentMarginLeft + '%'}, 0);
});


// #slideB が呼び出されたときの処理

function linkUrl000001() {
location.href = 'jp-pq-000001.html';
}

document.addEventListener('DOMContentLoaded', function () {
    const bt3 = document.getElementById('slideB');
    if (bt3) {
        bt3.addEventListener('click', function () {
            document.body.classList.add('anime-slide-fade');
            setTimeout(linkUrl000001, 200);
        });
    }
});


//とりあえず処理
$('#toriaezu').on('click', function validateForm() {
  var radios = document.getElementsByName("fruits");
  var formValid = false;
  var i = 0;
  while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }
    if (!formValid) alert("必須入力項目です");
    return formValid;
  });

$('form').submit(function( event ) {
    event.preventDefault();{$.post( 'http://ec2-35-75-21-245.ap-northeast-1.compute.amazonaws.com/online.php', $('form').serializeArray())
 
//通信が成功した場合
.done( function(data) {alert('登録を完了しました');localStorage.setItem('UserID', data.userID); location.href = "../main.html";} )
 
//通信エラーの場合
.fail( function(data) {alert('通信エラーですよ');localStorage.clear();
localStorage.setItem('UserID', '1000');
} )
}});


