
(function(){
    //変数のグローバル汚染対策の即時実行関数
}());

(function(){
    //これでもいいがJSLintでエラーになる
})();

(function($){
    //上記のjQuery使用版。「$(jQueryオブジェクト)」の重複対策付き
}(jQuery));

$(function(){
    //以前からのjQuery使用でDOM構築後に実行する書き方
});

({
    init: () => {
        var a = 0;
        console.log(a);
    },
}.init());
