/**
 *@author wjsu
 */
var wizad = window.wizad || {};

/**
 * loading .....
 */
wizad.Loading = function () {
  var loader = new PxLoader();
}


var loading = wizad.Loading.prototype;


loading.init = function () {
  // this.show();
}

/**
 * 指定图片加载
 * @param  {[type]}   imageArray [图片数组]
 * @param  {Function} callback   [图片加载完成调用]
 * @return {[type]}              [description]
 */
loading.loadImage = function(imageArray,callback) {
  this.show();
  for(var i=0; i < imageArray.length; i++) {
    this.loader.addImage(imageArray[i]); 
  }
  //加载完成
  this.loader.addCompletionListener(function () {
    this.hide();
    callback();
  });
  this.loader.start();
}

/**
 * 初始化加载页面上所有图片
 * @param  {Function} callback [加载完成调用]
 * @return {[type]}            [description]
 */
loading.loadingImageInIint = function (callback) {
  this.show();
  $('img').each( function (){
    this.loader.addImage($(this).attr('src')); 
  });
  //加载完成
  this.loader.addCompletionListener(function () {
    this.hide();
    callback();
  });
  this.loader.start();
}

loading.show = function () {
  $('#loading').show();
}

loading.hide = function () {
  $('#loading').hide();
}