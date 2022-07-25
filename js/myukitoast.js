; (function (window) {
	"use strict";
	var defaultSetting = {
		z_index: '9999',
		position: 'center',
		type: 'primary',
		message: '⛄️欢迎使用Myuki Toast👏',
		dismissible: false,
		originFadeDuration: 800,
		animation: 'noanimation',
		autoHideAnimation: 'nohideanimation',
		maxExist: 10,
		autoHide: true,
		autoHideDelay: 3000,
		defaultDom: 'MyukiToast',
		gitHub: 'https://github.com/Uyukisan',
		jq22: 'https://www.jq22.com/mem1320295',
		release: 'https://github.com/Uyukisan/MyukiToast'
		/*
			primary,
			secondary,
			success,
			danger,
			warning,
			info,
			light,
			dark
		*/
	};
	Object.freeze(defaultSetting);
	var MyukiToast = function (option, undefined) {
		return new MyukiToast.fn.init(option, undefined);
	};
	var $ = window.jQuery;
	MyukiToast.prototype = MyukiToast.fn = {
		constructor: MyukiToast,

		init: function (option, undefined) {
			console.log(this.help());
			this._domName = defaultSetting.defaultDom;
			let temp = $.extend({}, defaultSetting, arguments[1]);
			console.log(arguments);
			typeof arguments[0] == 'string' ? this._domName = arguments[0].toString() : temp = $.extend({}, temp, arguments[0]);
			this._setting = temp;
			let dom = this.getDomName();
			if ($(dom).length < 1) {
				console.log('No such dom: ' + dom);
				let domName = defaultSetting.defaultDom + '-' + new Date().getTime();
				let newDiv = $('<div></div>');
				newDiv.attr('id', domName);
				$('body').append(newDiv);
				this._domName = '#' + domName;
				console.log('Generate a new dom: ' + this.getDomName());
			}
			dom = this.getDomName();
			let setting = this.getSetting();
			$(dom).addClass('myk-toastlist').addClass(setting.position);
			$(dom).css({
				'z-index': setting.z_index,
				'width': setting.width,
				'top': setting.top
			});
			return this;
		},

		getSetting: function () {
			return this._setting;
		},

		getDomName: function () {
			return this._domName;
		},

		help: function () {
			console.log('%c⛄️欢迎使用Myuki Toast👏', 'font-size:14px;border:20px solid #1e90ff;border-radius:10px;background:white;color:black;');
			console.log('访问以下地址获取Myuki Toast的用法。');
			return { 'GitHub': defaultSetting.gitHub, 'jQuery插件库': defaultSetting.jq22, 'Github仓库': defaultSetting.release };
		},
		_addonemyukitoast: function (oneoption) {
			let onesetting = this.getSetting();
			onesetting = $.extend({}, onesetting, oneoption);
			let dom = this.getDomName();
			let toastOne = $('<div class="myk-toast show"><div class="toast-msg"></div><button class="close">×</button></div>');
			toastOne.find('.toast-msg').text(onesetting.message);
			toastOne.addClass('myk-' + onesetting.type).addClass(onesetting.animation);
			toastOne.css({
				'color': onesetting.color,
				'font-size': onesetting.fontSize,
				'font-family': onesetting.fontFamily,
				'top':$(window).scrollTop()
			});
			$(window).scroll(function(){
				toastOne.css({
					'top':$(window).scrollTop()
				});
			});
			onesetting.dismissible == true ? toastOne.addClass('dismissible') : toastOne.removeClass('dismissible');
			$(dom).prepend(toastOne);
			console.log('Add a toast: ' + onesetting.message);
			let timer;
			onesetting.autoHide == true ? timer = setTimeout(function () {
				toastOne.removeClass(onesetting.animation).addClass(onesetting.autoHideAnimation);
				onesetting.autoHideAnimation == 'originFade' ? toastOne.fadeOut(parseInt(onesetting.originFadeDuration)) : toastOne.removeClass('show').addClass('hide');
			}, parseInt(onesetting.autoHideDelay)) : console.log("autoHide not set.");
			toastOne.find('.close').on('click', function () {
				timer ? clearTimeout(timer) : console.log('');
				toastOne.remove();
			});
			$(dom).find('.myk-toast').length > onesetting.maxExist ? $(dom).find('.myk-toast').last().remove() : console.log('');
		},
		toast: function (option) {
			let doOption = {};
			typeof option == 'string' ? doOption.message = option.toString() : doOption = option;
			this._addonemyukitoast(doOption);
		}
	}
	MyukiToast.fn.init.prototype = MyukiToast.fn;
	window.MyukiToast = MyukiToast;
	window.$MT = MyukiToast;
	return this;
})(window);
