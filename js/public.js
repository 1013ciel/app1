// 加载中按钮
mui(document.body).on('tap', '.mui-btn', function(e) {
    mui(this).button('loading');
    setTimeout(function() {
        mui(this).button('reset');
    }.bind(this), 2000);
});

//图片轮播时间设置
//获得slider插件对象
var gallery = mui('.mui-slider');
gallery.slider({
  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
});

//进度条
mui("#demo1").progressbar().show();

//页面跳转公用方法
mui(".fatherbox").on('tap', '.publicjumppage', function() {
	//获取id
	var urlid = this.getAttribute("id");
	//手机app操作
	mui.plusReady(function() {
		var all = plus.webview.all();
		console.log(JSON.stringify(all))
		//显示预加载页面
		plus.webview.show(urlid, "slide-in-right", 150);
	})
});

//关于的那几个
mui(".notfatherbox").on('tap', '.publicjumppage', function() {
	//获取id
	var urlid = this.getAttribute("id");
	//手机app操作
	mui.plusReady(function() {
		var all = plus.webview.all();
		console.log(JSON.stringify(all))
		//显示预加载页面
		plus.webview.show(urlid, "slide-in-right", 150);
	})
});

//删除缓存功能
mui(".notfatherbox").on('tap', '.clearCache', function() {
	//清除缓存
	plus.nativeUI.toast("清除缓存成功!");
});


//页面暂时还未开发完成提示
mui(".nofatherbox").on('tap', '.publicjumppage', function() {
	//清除缓存
	plus.nativeUI.toast("功能正在开发!");
});