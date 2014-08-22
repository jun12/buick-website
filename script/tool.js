/**
 *@author wjsu
 *desc 常用工具
 */
wizad.Tools = function () {
  // this.configPath = configPath;
}

var tools = wizad.Tools.prototype;

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||

    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function(callback) {
      return window.setTimeout(callback, 17 /*~ 1000/60*/ );
    });
}
/**
 * 验证邮箱
 * @param  {[type]}  str [description]
 * @return {Boolean}     [description]
 */

tools.isEmail = function(str) {
  var szReg = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;
  return szReg.test(str);
}

/**
 * 验证手机号码
 * @param  {[type]}  str [description]
 * @return {Boolean}     [description]
 */

tools.isMobile=function(str) {
  var flag = /^(1[3|5|8]\d{9})$/;
  return flag.test(str);
}
//------------util---------//
/**
 * url 路径处理
 * @param  {[type]} pathName [description]
 * @return {[type]}          [description]
 */

tools.getPathName = function(pathName) {
  var flag = "";
  var arr = pathName.split("/");
  arr.pop();
  for (var i = 0; i < arr.length; i++) {
    flag += "/" + arr[i];
  }
  return flag;
}

//---------cookie------------//

tools.getCookie = function(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) c_end = document.cookie.length;
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}

tools.setCookie = function(c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) +
    ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}


/**
 * 判断微信
 * @return {Boolean} [description]
 */

tools.is_weixn = function () {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}

/**
 * 屏幕旋转
 * @return {[type]} [description]
 */
tools.orient = function () {
  window.addEventListener('orientationchange', function(e){
    if (window.orientation == 0 || window.orientation == 180) {//ipad、iphone竖屏； ；Andriod竖屏
      //TODO  取消浮层
    } else if (window.orientation == 90 || window.orientation == -90) {//ipad、iphone横屏 Andriod横屏
      //TODO  显示浮层
    }
  });
}
// $(document).ready(function(){
//   // 解决 iphone 输入框 失去焦点 top 条 位置 漂移 bug
//   $("body").mouseover(function(){
//     $("input").blur();
//     //alert("ok");
//   });
// });
