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

// body遷移用特別処理
var body = document.getElementsByTagName('body')[0];


// Update押下時のポップアップ処理
var btX = document.getElementById('updatebutton');
btX.addEventListener('click', function () {
    var popup = document.createElement('div');
    popup.style = `
        background: #fff; 
        padding: 0; 
        border-radius: 15px; 
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
        text-align: center; 
        width: 90%; 
        max-width: 400px; 
        height: 85%; 
        max-height: 800px; 
        margin: 0 auto; 
        border: 1px solid rgba(0, 0, 0, 0.1); 
        position: fixed; 
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%);
        z-index: 1000;
        display: flex;
        flex-direction: column;
    `;
    popup.innerHTML = `
        <div style="font-size: 22px; font-weight: bold; margin: 0; padding: 20px; color: #333; background-color: #f9f9f9; border-bottom: 1px solid rgba(0, 0, 0, 0.1); border-radius: 15px 15px 0 0;">
        おすすめ更新について
        </div>
        <div style="flex: 6; font-size: 20px; color: #2b2929; padding: 40px 20px; text-align: left; line-height: 1.5;">
            こちらはおすすめを<span style="font-weight: bold;">最新の情報に更新</span>するためのサービスとなります<br><br>更新は<span style="font-weight: bold;">有料（160円）</span>で、アプリ内課金が完了後、情報の洗い替えを行うため、数分程度お待ち頂くことがあります<br><br>なお、更新を行う場合、現時点のおすすめ表示情報やお仲間とのやり取り情報は全て削除されます
        </div>
        <div style="flex: 2; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; border-top: 1px solid rgba(0, 0, 0, 0.1); background-color: #f9f9f9; border-radius: 0 0 15px 15px; padding: 10px;">
            <button id="yesButton" style="
                padding: 10px 10px; 
                font-size: 20px; 
                background-color: #6bb3ff; 
                color: #fff; 
                border: none; 
                border-radius: 25px; 
                cursor: pointer; 
                box-shadow: 0 4px 8px rgba(107, 179, 255, 0.4); 
                transition: background-color 0.3s ease, box-shadow 0.3s ease;
                width: 95%; 
                margin-bottom: 10px;
            ">確認した。更新します</button>
            <button id="noButton" style="
                padding: 10px 10px; 
                font-size: 20px; 
                background-color: #b0bec5; 
                color: #fff; 
                border: none; 
                border-radius: 25px; 
                cursor: pointer; 
                box-shadow: 0 4px 8px rgba(176, 190, 197, 0.4); 
                transition: background-color 0.3s ease, box-shadow 0.3s ease;
                width: 95%;
            ">更新しません</button>
        </div>
    `;

    var overlay = document.createElement('div');
    overlay.style = `
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        background: rgba(0, 0, 0, 0.5); 
        z-index: 999;
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    var yesButton = popup.querySelector('#yesButton');
    var noButton = popup.querySelector('#noButton');

    yesButton.addEventListener('mouseover', function () {
        yesButton.style.backgroundColor = '#549fde';
        yesButton.style.boxShadow = '0 6px 12px rgba(84, 159, 222, 0.4)';
    });
    yesButton.addEventListener('mouseout', function () {
        yesButton.style.backgroundColor = '#6bb3ff';
        yesButton.style.boxShadow = '0 4px 8px rgba(107, 179, 255, 0.4)';
    });

    noButton.addEventListener('mouseover', function () {
        noButton.style.backgroundColor = '#90a4ae';
        noButton.style.boxShadow = '0 6px 12px rgba(144, 164, 174, 0.4)';
    });
    noButton.addEventListener('mouseout', function () {
        noButton.style.backgroundColor = '#b0bec5';
        noButton.style.boxShadow = '0 4px 8px rgba(176, 190, 197, 0.4)';
    });

    yesButton.addEventListener('click', function () {
    document.body.removeChild(popup);
    document.body.removeChild(overlay);
    $('body').animate({'marginLeft': '-100%'}, 400); // 右方向にスクロール
    setTimeout(function () {
        location.href = '../update/update1.html';
    }, 200); // アニメーション完了後に画面遷移
    });

    noButton.addEventListener('click', function () {
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    });
});

