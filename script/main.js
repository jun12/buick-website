/**
 *@author wjsu
 */
+function($) {
  "use strict";

  /**
   * 模版  新建页面时候复制一个模版，更改 temp 相应的名字
   * @type {Object}
   */
  var Temp = {
    createNew: function() {
      var temp = {},
        c1 = Common.createNew();

      temp.begin = function() {
        var tempImageArray = []; //本页面要加载的图片
        c1.loading(tempImageArray, show);
      }
      var show = function() {
        $(".loading").hide();
        c1.bgAnimation();
        //c1.hide();
        //c1.show($("#wrap"), "content1", Index);
      };

      temp.init = function() {};
      temp.end = function() {};
      return temp;
    }
  }
  // window.init = Temp.createNew().begin;
}(window.Zepto);