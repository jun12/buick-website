/**
 * @author wjsu
 */
document.addEventListener('WeixinJSBridgeReady',
  function onBridgeReady() {
    window.shareData = {
      "imgUrl": location.protocol + "//" + location.hostname + getPathName(location.pathname)+"/img/share.jpg",
      "timeLineLink": location.protocol + "//" + location.hostname + getPathName(location.pathname),
      "sendFriendLink": location.protocol + "//" + location.hostname + getPathName(location.pathname),
      "weiboLink": location.protocol + "//" + location.hostname + getPathName(location.pathname),
      "tTitle": "【碧欧泉】摇出醉人香槟色，庆祝丝滑紧致肌",
      "tContent": "【碧欧泉】摇出醉人香槟色，庆祝丝滑紧致肌",
      "fTitle": "【碧欧泉】摇出醉人香槟色，庆祝丝滑紧致肌",
      "fContent": "碧欧泉全新美肤紧致精华油",
      "wContent": "【碧欧泉】摇出醉人香槟色，庆祝丝滑紧致肌"
    };
    // 发送给好友
    WeixinJSBridge.on('menu:share:appmessage',
      function(argv) {
        var shareTitle = "";
        if(window.openidweixin) {
          shareTitle = window.openidweixin;
        } else {
          shareTitle = window.shareData.tTitle;
        }
        WeixinJSBridge.invoke('sendAppMessage', {
          "img_url": window.shareData.imgUrl, // "img_width": "640",// "img_height": "640",
          "link": window.shareData.sendFriendLink,
          "desc": window.shareData.fContent,
          "title": shareTitle
        }, function(res) {
          _report('send_msg', res.err_msg);
        })
      });
    // 分享到朋友圈          
    WeixinJSBridge.on('menu:share:timeline', function(argv) {
       var shareTitle = "";
        if(window.openidweixin) {
          shareTitle = window.openidweixin;
        } else {
          shareTitle = window.shareData.tTitle;
        }
      WeixinJSBridge.invoke('shareTimeline', {
        "img_url": window.shareData.imgUrl,
        "img_width": "640",
        "img_height": "640",
        "link": window.shareData.timeLineLink,
        "desc": window.shareData.tContent,
        "title": shareTitle
      }, function(res) {
        _report('timeline', res.err_msg);
      });
    }); // 分享到微博 
    WeixinJSBridge.on('menu:share:weibo', function(argv) {
      var shareUrl = "";
      if(window.openidweixin) {
        shareUrl = "/selects.html?openid="+window.openidweixin;
      }
      WeixinJSBridge.invoke('shareWeibo', {
        "content": window.shareData.wContent,
        "url": window.shareData.weiboLink +shareUrl,
      }, function(res) {
        _report('weibo', res.err_msg);
      });
    });
  }, false);
