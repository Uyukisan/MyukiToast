# Myuki Toast
> A simple, elegant toast plug-in

⛄️：A simple, elegant, instantiated, lightweight toast plug-in.

Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.

## Usage

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
		let toastObj = $MT("#toastDemo") 
    /*or toastObj = MyukiToast("#toastDemo");

    $MT == MyukiToast;
    
    */
    toastObj.toast("⛄️欢迎使用Myuki Toast👏");
	})
</script>
```

## Advanced Usage

```javascript
<div id="toastDemo">

</div>
<script>
	$(document).ready(function(){
		let toastObj = $MT(
      "#toastDemo", 
      /*selector: id | className | tag
      If there is no selector, it will be generated automatically（#MyukiToast-timestamp）
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
        /* default: primary
        Type of toast.
        primary, secondary, success, danger,
        warning, info, light, dark
        */
        "message": '⛄️欢迎使用Myuki Toast👏', // default message
        "dismissible": true, 
        /* default: false
        Show close button.
        */
        "animation": 'heartbeat', 
        /* default: noanimation
        Toasts animation.
        heartbeat, normal-shake, jello-horizontal, 
        wobble-hor-bottom, vibrate-1, noanimation
        You can also define your own animation.
        */
        "maxExist": 10, 
        /* default: 10
        The maximum of toasts in the document.
        */
        "autoHide": true,
        /* default: true
        Toasts will automatically hide.
        */
        "autoHideAnimation": 'originFade',
        /* default: nohideanimation
        Toasts autoHide animation.
        scale-out-center, fade-out, originFade, rotate-out-center,
        puff-out-center, slide-out-top, nohideanimation
        You can also define your own animation.
        */
        "originFadeDuration": 1000,
        /* default: 800
        Only works on animation 'originFade'.
        */
        "autoHideDelay": 5000,
        /* default: 3000
        Toast hidden delay time.
        */
      }
    );
  	
  	// Simple
  	toastObj.toast("⛄️欢迎使用Myuki Toast👏");
  	// Advanced
  	toastObj.toast({
      "type": 'danger',
        /* default: primary
        Type of toast.
        primary, secondary, success, danger,
        warning, info, light, dark
        */
        "message": '⛄️欢迎使用Myuki Toast👏', // default message
        "dismissible": true, 
        /* default: false
        Show close button.
        */
        "animation": 'heartbeat', 
        /* default: noanimation
        Toasts animation.
        heartbeat, normal-shake, jello-horizontal, 
        wobble-hor-bottom, vibrate-1, noanimation
        You can also define your own animation.
        */
        "autoHide": true,
        /* default: true
        Toasts will automatically hide.
        */
        "autoHideAnimation": 'originFade',
        /* default: nohideanimation
        Toasts autoHide animation.
        scale-out-center, fade-out, originFade, rotate-out-center,
        puff-out-center, slide-out-top, nohideanimation
        You can also define your own animation.
        */
        "originFadeDuration": 1000,
        /* default: 800
        Only works on animation 'originFade'.
        */
        "autoHideDelay": 5000,
        /* default: 3000
        Toast hidden delay time.
        */
    });
	})
</script>
```

## Preview

[Myuki Toast](https://mt.stackblog.eu.org)

## Thanks

Thanks to [Animista - CSS Animations on Demand](https://animista.net/) for providing some cool and elegant animations.

## License

> You can check out the full license [LICENSE]([MyukiToast/LICENSE at main · Uyukisan/MyukiToast · GitHub](https://github.com/Uyukisan/MyukiToast/blob/main/LICENSE))

This project is licensed under the terms of the **MIT** license.
