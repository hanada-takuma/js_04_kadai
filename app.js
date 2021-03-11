"use strict";//厳格モードで実装

/** 
 * class=your_containerに対してチャットUIを組み込む 
 **/
$(document).ready(function() {//htmlの描画が終わったら、処理を実行する記述

    //文字列(html要素)を格納できる配列を定義
    var chatDom =[];
    //文字列（この場合は引数のdom）を配列の要素として格納できる関数
    var p = function(dom){
        chatDom.push(dom);
    };

    //配列の要素として一つ一つ格納していき、最後にjoin関数で結合する
    //チャットの外側部分①
    p('<div class="messages_container">');

        //ヘッダー部分②
        p('<div class="chat_header">');
            p('<div class="chat_user_status">');
                p('<div class="status_icon">●</div>')
                p('<div class="chat_user_name">ユーザー</div>');
            p('</div>');
        p('</div>');
              //タイムライン部分③
        p('<div class="messages">');

            //メッセージ１（左側）
            p('<div class="message_left">');
                p('<div class="message_box">');
                    p('<div class="message_content">');
                        p('<div class="message_text">はじめまして</div>');
                    p('</div>');
                p('</div>');
            p('</div>');
            p('<div class="clear"></div>');

            //メッセージ２（右側）
            p('<div class="message_right">');
                p('<div class="message_box">');
                    p('<div class="message_content">');
                        p('<div class="message_text">よろしくお願いします</div>');
                    p ('</div>');
                p('</div>');
            p('</div>');
            p('<div class="clear"></div>');
        p('</div>');

        // テキストボックス、送信ボタン④
        p('<div class="send">');
            p('<textarea class="send_message"></textarea>');
            p('<div class="send_btn">送信</div>');
        p('</div>');

        //jQueryのappend関数を使って、your_containerの直下にhtml要素を書き加える
        $('.your_container').append(chatDom.join(''));
});