//分享链接点击事件
document.getElementById("share").addEventListener('tap', function() {
	var ids = [{
			id: "weixin",
			ex: "WXSceneSession"
		}, {
			id: "weixin",
			ex: "WXSceneTimeline"
		}, {
			id: "sinaweibo"
		}, {
			id: "qq"
		}],
		bts = [{
			title: "发送给微信好友"
		}, {
			title: "分享到微信朋友圈"
		}, {
			title: "分享到新浪微博"
		}, {
			title: "分享到QQ"
		}];
	plus.nativeUI.actionSheet({
		cancel: "取消",
		buttons: bts
	}, function(e) {
		var i = e.index;
		if (i > 0) {
			var s_id = ids[i - 1].id;
			var share = shares[s_id];
			if (share) {
				if (share.authenticated) {
					shareMessage(share, ids[i - 1].ex);
				} else {
					share.authorize(function() {
						shareMessage(share, ids[i - 1].ex);
					}, function(e) {
						console.log("认证授权失败：" + e.code + " - " + e.message);
					});
				}
			} else {
				mui.toast("无法获取分享服务，请检查manifest.json中分享插件参数配置，并重新打包")
			}
		}
	});
});

function shareMessage(share, ex) {
	var msg = {
		extra: {
			scene: ex
		}
	};
	msg.href = "https://www.cnblogs.com/hwinter/";
	msg.title = "focus--时间管理软件(暂未完成)";
	msg.content = "我正在使用focus，你也来和我一起体验吧";
	if (~share.id.indexOf('weibo')) {
		msg.content += "；体验地址：https://www.cnblogs.com/hwinter/";
	}
	msg.thumbs = ["_www/images/logo.png"];
	share.send(msg, function() {
		console.log("分享到\"" + share.description + "\"成功！ ");
	}, function(e) {
		console.log("分享到\"" + share.description + "\"失败: " + e.code + " - " + e.message);
	});
}
				