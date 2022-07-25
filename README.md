# Myuki Toast
> 一个轻量美观的消息弹框插件

⛄️：一个简单、美观、实例化创建的轻量级消息弹框（Toasts）插件。

向你的网站访客发送一些易于定制的消息提醒、通知等等。

## 简单用法

```javascript
<link type="text/css" rel="stylesheet" href="./css/myukitoast.css"/>
<script type="text/javascript" src="./js/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="./js/myukitoast.js"></script>
```

```javascript
<div id="toastDemo">

</div>
<script>
	$(document).ready(function(){
  
  	// 创建一个MyukiToast的实例
  
		let toastObj = $MT("#toastDemo") 
    /*or toastObj = MyukiToast("#toastDemo");

    $MT == MyukiToast;
    
    */
    // 调用toast方法
    
    toastObj.toast("⛄️欢迎使用Myuki Toast👏");
	})
</script>
```

## 高级用法

```javascript
<div id="toastDemo">

</div>
<script>
	$(document).ready(function(){
  
  	// 首先创建一个MyukiToast的实例
  
		let toastObj = $MT(
      "#toastDemo", 
      /*selector: id | className | tag
      如果没有选择器，或者提供的选择器不存在，将会自动创建一个选择器添加到document中（#MyukiToast-时间戳）
      */
      {
        "z_index": 999, 
        //default: 9999
        "position": 'left',
        /* default: center
        left | center | right,
        */
        "width": '50%',
        "top": "32px",
        "type": 'danger',
        /* 默认值: primary
        消息弹框的类型，包括以下几种：
        primary, secondary, success, danger,
        warning, info, light, dark
        */
        "message": '⛄️欢迎使用Myuki Toast👏', 
        /*默认的消息，创建MyukiToast实例后，调用toast()方法时，
        如果没有提供消息，将会使用默认的消息
        执行下面的语句将会弹出消息："⛄️欢迎使用Myuki Toast👏"
        toastObj.toast()
        */
        "dismissible": true, 
        /* 默认值: false
        是否显示关闭按钮
        */
        "animation": 'heartbeat', 
        /* 默认值: noanimation
        消息弹框的动画
        heartbeat, normal-shake, jello-horizontal, 
        wobble-hor-bottom, vibrate-1, noanimation
        你也可是自己设计css动画
        */
        "maxExist": 10, 
        /* 默认值: 10
        document中消息弹框的最大数量（包括已经隐藏的消息弹框），如果超出
        最大值，将会移除超出的消息弹框
        */
        "autoHide": true,
        /* 默认值: true
        消息弹框是否自动隐藏，如果将autoHide设置为false，请务必
        将dismissible设置为true
        */
        "autoHideAnimation": 'originFade',
        /* 默认值: nohideanimation
        消息弹框自动隐藏的动画
        scale-out-center, fade-out, originFade, rotate-out-center,
        puff-out-center, slide-out-top, nohideanimation
        你同样可以自己设计css动画
        */
        "originFadeDuration": 1000,
        /* 默认值: 800
        只对动画 'originFade' 有效，原生fadeOut的时长
        */
        "autoHideDelay": 5000,
        /* 默认值: 3000
        弹框自动隐藏的延迟时间
        */
      }
    );
  	
  	// 创建完实例以后就可以调用toast方法了
  
  	// 简单用法
  	toastObj.toast("⛄️欢迎使用Myuki Toast👏");
  	// 高级用法
  	toastObj.toast({
			"type": 'danger',
			/* 默认值: primary
			消息弹框的类型，包括以下几种：
			primary, secondary, success, danger,
			warning, info, light, dark
			*/
			"message": '⛄️欢迎使用Myuki Toast👏', 
			/*默认的消息，创建MyukiToast实例后，调用toast()方法时，
			如果没有提供消息，将会使用默认的消息
			执行下面的语句将会弹出消息："⛄️欢迎使用Myuki Toast👏"
			toastObj.toast()
			*/
			"dismissible": true, 
			/* 默认值: false
			是否显示关闭按钮
			*/
			"animation": 'heartbeat', 
			/* 默认值: noanimation
			消息弹框的动画
			heartbeat, normal-shake, jello-horizontal, 
			wobble-hor-bottom, vibrate-1, noanimation
			你也可是自己设计css动画
			*/
			"autoHide": true,
			/* 默认值: true
			消息弹框是否自动隐藏，如果将autoHide设置为false，请务必
			将dismissible设置为true
			*/
			"autoHideAnimation": 'originFade',
			/* 默认值: nohideanimation
			消息弹框自动隐藏的动画
			scale-out-center, fade-out, originFade, rotate-out-center,
			puff-out-center, slide-out-top, nohideanimation
			你同样可以自己设计css动画
			*/
			"originFadeDuration": 1000,
			/* 默认值: 800
			只对动画 'originFade' 有效，原生fadeOut的时长
			*/
			"autoHideDelay": 5000,
			/* 默认值: 3000
			弹框自动隐藏的延迟时间
			*/
      	"color": '#666',
      	"fontSize": '16px',
      	"fontFamily": 'sans-serif'
    });
	})
</script>
```

## 预览

[Myuki Toast](https://mt.stackblog.eu.org)

## 感谢

感谢 [Animista - CSS Animations on Demand](https://animista.net/) 提供的一些十分酷的CSS动画。

## 许可证

> 查明许可证 [LICENSE]([MyukiToast/LICENSE at main · Uyukisan/MyukiToast · GitHub](https://github.com/Uyukisan/MyukiToast/blob/main/LICENSE))

项目根据**MIT**许可证的条款进行许可。