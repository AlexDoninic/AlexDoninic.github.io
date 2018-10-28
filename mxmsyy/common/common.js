var h5AfterShare = function(){
    
};

/*var h5AfterReplay = function(){

};*/

var h5MoreGames = function(){
    if (typeof window.WebViewJavascriptBridge != "undefined"){
        document.location.href = h5MoreGameUrlApp;
    }else{
        document.location.href = h5MoreGameUrl;
    }
};

var h5AfterGameOver = function(){
    if (typeof window.WebViewJavascriptBridge != "undefined"){
        window.WebViewJavascriptBridge.appGameResult(JSON.stringify({
            img_url: h5WxData.imgUrl, 
            img_width: 120,
            img_height: 120, 
            link: h5WxData.link,
            desc: h5WxData.title,
            title: h5WxData.desc,
            score: h5WxData.score, 
            increase: h5WxData.increase
        }));
    }
};

WeixinApi.ready(function(Api) {
    // 分享的回调
    var wxCallbacks = {
        ready : function() {
        },
        cancel : function(resp) {
        },
        fail : function(resp) {
        },
        confirm : function(resp) {
        },
        all : function(resp) {
        }
    };

    Api.shareToFriend(h5WxData, wxCallbacks);
    Api.shareToTimeline(h5WxData, wxCallbacks);
    Api.shareToWeibo(h5WxData, wxCallbacks);
});