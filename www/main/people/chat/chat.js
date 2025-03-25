// メッセージ送信
        function sendMessage() {
            var input = document.getElementById("message-input");
            var messageText = input.value.trim();
            if (messageText === "") return; // 空のメッセージを送信しない

            // メッセージを送信した側（ユーザー）
            var messagesContainer = document.getElementById("messages");
            var userMessage = document.createElement("div");
            userMessage.classList.add("message", "user");
            var userBubble = document.createElement("div");
            userBubble.classList.add("bubble");
            userBubble.textContent = messageText;
            userMessage.appendChild(userBubble);
            messagesContainer.appendChild(userMessage);

            // メッセージ入力欄をクリア
            input.value = "";

            // メッセージを表示した後にスクロール位置を最下部に
            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            // 自動応答（仮の応答）
            setTimeout(function() {
                var botMessage = document.createElement("div");
                botMessage.classList.add("message");
                var botBubble = document.createElement("div");
                botBubble.classList.add("bubble");
                botBubble.textContent = "こちらはボットの応答です。";
                botMessage.appendChild(botBubble);
                messagesContainer.appendChild(botMessage);

                // 自動応答後にスクロール位置を最下部に
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 1000);
        }

$('#backbutton').on('click', function () {
    $('body').animate({'marginLeft': '100%'}, 400); // 左方向にスクロール
    setTimeout(function () {
        location.href = '../people1.html';
    }, 200); // アニメーション完了後に画面遷移
});