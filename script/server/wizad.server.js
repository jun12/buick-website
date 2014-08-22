/**
 * 
 * @authors wjsu
 * @date    2014-07-18 13:54:37
 * 在没有后端的
 * @version 1.0.0
 */
wizad.Server = function () {
	// this.configPath = configPath;
}

var server = wizad.Server.prototype;
server.config = [
	// {"itemName":"islogin","type":"POST","note":"登录状态","url":"is_reg.ashx"},
	// {"itemName":"reg","type":"POST","note":"注册","url":"reg.ashx"},
	// {"itemName":"rank","type":"POST","note":"前十名排行榜","url":"rank.ashx"},
	// {"itemName":"yaoyiyao","type":"POST","note":"摇一摇","url":"yaoyiyao.ashx"},
	// {"itemName":"lingjian","type":"POST","note":"领奖","url":"lingjian.ashx"},
	// {"itemName":"qrcode","type":"POST","note":"生成二维码","url":"qrcode.ashx"},
	{"itemName":"info","type":"POST","note":"个人信息","url":"info.ashx"}
];

server.getConfig = function(item,param,callback) {
	var obj = {};
	for(var i=0; i < this.config.length;i++) {
		if(this.config[i].itemName == item) {
			obj = this.config[i];
			return obj;
		}
	}
}

server.getResult = function(item,param,callback) {
	var flag = this.getConfig(item);
	if(flag.type == 'GET') {
		$.get(flag.url,param,callback,'json');
	} else {
		$.post(flag.url,param,callback,'json');
	}
}

server.isLogin = function (param,callback) {
	this.getResult("islogin",param,callback);
}

server.reg = function(param,callback) {
	this.getResult("reg",param,callback);
}

server.rank = function(param,callback) {
	this.getResult("rank",param,callback);
}

server.yaoyiyao = function(param,callback) {
	this.getResult("yaoyiyao",param,callback);
}

server.servergetinfo = function(param,callback) {
	this.getResult("info",param,callback);
}
server.serverlingjian = function(param,callback) {
	this.getResult("lingjian",param,callback);
}

server.qrcode = function(param,callback) {
	this.getResult("qrcode",param,callback);
}