window.onload = function() {
    var UserID = localStorage.getItem('userid');
    if (UserID === null) {
        // ポップアップのHTMLを作成
        var popup = document.createElement('div');
        popup.style = `
            background: #fff; 
            padding: 0; 
            border-radius: 15px; 
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
            text-align: center; 
            width: 90%; 
            max-width: 400px; 
            height: 80%; 
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
            <div style="flex: 1; font-size: 24px; font-weight: bold; margin: 0; padding: 20px; color: #333; background-color: #f9f9f9; border-bottom: 1px solid rgba(0, 0, 0, 0.1); border-radius: 15px 15px 0 0;">
                はじめに
            </div>
            <div style="flex: 6; font-size: 20px; color: #2b2929; padding: 40px 20px; text-align: left; line-height: 1.5;">
                この度は本アプリをご利用いただきありがとうございます。<br><br>本アプリはあなたが入力する「あなた自身の性格や趣味・嗜好、属性情報」から、<span style="font-weight: bold;">「あなた自身に合ったおすすめ」</span>の映画・ドラマ・アニメ・音楽・趣味・ご友人等をAIより提案させてアプリとなります
            </div>
            <div style="flex: 2; display: flex; justify-content: center; align-items: center; border-top: 1px solid rgba(0, 0, 0, 0.1); background-color: #f9f9f9; border-radius: 0 0 15px 15px;">
                <button id="confirmButton" style="
                    padding: 12px 30px; 
                    font-size: 24px; 
                    background-color: #6bb3ff; 
                    color: #fff; 
                    border: none; 
                    border-radius: 25px; 
                    cursor: pointer; 
                    box-shadow: 0 4px 8px rgba(107, 179, 255, 0.4); 
                    transition: background-color 0.3s ease, box-shadow 0.3s ease;
                    width: 80%; 
                ">次に行く</button>
            </div>
        `;

        // 背景を作成
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

        // DOMに追加
        document.body.appendChild(overlay);
        document.body.appendChild(popup);

        // ボタンのホバー効果
        var confirmButton = popup.querySelector('#confirmButton');
        confirmButton.addEventListener('mouseover', function() {
            confirmButton.style.backgroundColor = '#549fde';
            confirmButton.style.boxShadow = '0 6px 12px rgba(84, 159, 222, 0.4)';
        });
        confirmButton.addEventListener('mouseout', function() {
            confirmButton.style.backgroundColor = '#6bb3ff';
            confirmButton.style.boxShadow = '0 4px 8px rgba(107, 179, 255, 0.4)';
        });
    
    document.body.style.overflow = "hidden";  // ポップアップ削除時の変な挙動を制御
    confirmButton.addEventListener('click', function() {
    
    // ２番目のポップアップ
    document.body.removeChild(popup);
    document.body.removeChild(overlay);

    // 新しいポップアップとオーバーレイを作成（同デザイン）
        var secondPopup = document.createElement('div');
        secondPopup.style = `
            background: #fff; 
            padding: 0; 
            border-radius: 15px; 
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); 
            text-align: center; 
            width: 90%; 
            max-width: 400px; 
            height: 80%; 
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
    secondPopup.innerHTML = `
        <div style="flex: 1; font-size: 24px; font-weight: bold; margin: 0; padding: 20px; color: #333; background-color: #f9f9f9; border-bottom: 1px solid rgba(0, 0, 0, 0.1); border-radius: 15px 15px 0 0;">
            ご利用について
        </div>
        <div style="flex: 6; font-size: 20px; color: #2b2929; padding: 40px 20px; text-align: left; line-height: 1.5; ">
            ご利用にあたっては、ご自身の情報を正確に入力していただくことで、より良い提案を受け取ることができます。<br><br>
            さっそく<span style="font-weight: bold;">画面左上の新規登録</span>（情報入力）を行い、あなたに合ったおすすめの作品や仲間を見つけましょう！
        </div>
        <div style="flex: 2; display: flex; justify-content: center; align-items: center; border-top: 1px solid rgba(0, 0, 0, 0.1); background-color: #f9f9f9; border-radius: 0 0 15px 15px;">
            <button id="finalConfirm" style="
                padding: 12px 30px; 
                font-size: 24px; 
                background-color: #6bb3ff; 
                color: #fff; 
                border: none; 
                border-radius: 25px; 
                cursor: pointer; 
                box-shadow: 0 4px 8px rgba(107, 179, 255, 0.4); 
                transition: background-color 0.3s ease, box-shadow 0.3s ease;
                width: 80%; 
            ">OK</button>
        </div>
    `;

    const secondOverlay = document.createElement('div');
    secondOverlay.style = `
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    background: rgba(0, 0, 0, 0.5); 
    z-index: 999;
`;

    document.body.appendChild(secondOverlay);
    document.body.appendChild(secondPopup);

    const finalBtn = secondPopup.querySelector('#finalConfirm');
    finalBtn.addEventListener('mouseover', function() {
        finalBtn.style.backgroundColor = '#549fde';
        finalBtn.style.boxShadow = '0 6px 12px rgba(84, 159, 222, 0.4)';
    });
    finalBtn.addEventListener('mouseout', function() {
        finalBtn.style.backgroundColor = '#6bb3ff';
        finalBtn.style.boxShadow = '0 4px 8px rgba(107, 179, 255, 0.4)';
    });
    finalBtn.addEventListener('click', function () {
        document.body.removeChild(secondPopup);
        document.body.removeChild(secondOverlay);
        document.body.style.overflow = "auto"; // ポップアップ削除時の変な挙動を制御
    });
});


// チェック対象のクラス名
const targetClasses = ['Update', 'People', 'Object'];

// localStorage から UserID を取得
const userId = localStorage.getItem('userid');

// UserID が null の場合に制御を実施
if (userId === null) {
    targetClasses.forEach(className => {
        // 対象の div を取得
        const targetDivs = document.querySelectorAll(`.${className}`);
        
        targetDivs.forEach(div => {
            // 薄いグレーのオーバーレイを作成
            const overlay = document.createElement('div');
            overlay.style.position = 'absolute';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(200, 200, 200, 0.6)';
            overlay.style.pointerEvents = 'none'; // オーバーレイ自体をクリックできないようにする
            overlay.className = 'disabled-overlay';
            
            // 親要素の位置を相対に設定（オーバーレイを適切に配置するため）
            div.style.position = 'relative';
            
            // ボタンやリンクを無効化
            const interactiveElements = div.querySelectorAll('button, a, input');
            interactiveElements.forEach(element => {
                element.disabled = true;
                element.style.cursor = 'not-allowed'; // 無効化の見た目を追加
            });

            // オーバーレイを挿入
            div.appendChild(overlay);
        });
    });
}};

// body遷移用特別処理
var body = document.getElementsByTagName('body')[0];


// ButtonX押下時のポップアップ処理
var btX = document.getElementById('buttonX');
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
        function linkUrlD() {
        location.href = 'update/update1.html';
    }  
        body.classList.add('anime-slide-fade');
        setTimeout(linkUrlD, 200);
    });

    noButton.addEventListener('click', function () {
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    });
});




    // 新規登録画面遷移
    function linkUrlA() {
        location.href = 'entry/first.html';
    }

    var bt3 = document.getElementById('button3');
    bt3.addEventListener('click', function() {
        body.classList.add('anime-slide-fade');
        setTimeout(linkUrlA, 200);
    });

    // 人物リコメンド画面遷移
    function linkUrlB() {
        location.href = 'people/people1.html';
    }

    var bt4 = document.getElementById('buttonY');
    bt4.addEventListener('click', function() {
        body.classList.add('anime-slide-fade');
        setTimeout(linkUrlB, 200);
    });

    // 物リコメンド画面遷移
    function linkUrlC() {
        location.href = 'object/object1.html';
    }

    var bt5 = document.getElementById('buttonZ');
    bt5.addEventListener('click', function() {
        body.classList.add('anime-slide-fade');
        setTimeout(linkUrlC, 200);
    });
};
