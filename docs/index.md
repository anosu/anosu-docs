---
home: true
title: Jitsuの随机涩图API
heroText: Anosu
tagline: 一个随机涩图API的使用文档（写得比较烂，凑合着看吧）
actions:
  - text: 使用说明
    link: /intro/before.md
    type: primary

features:
  - title: 高质量的图库
    details: 其实是来自我朋友的收藏（bushi）

  - title: 简单的使用方法
    details: 因为写不出复杂的功能了捏

  - title: 完善的维护团队
    details: 由我一人维护，寄了就寄了吧（bushi）

  - title: 支持关键词查询
    details: 不一定能查出东西（NULL）

  - title: 已稳定运行
    details: --天--小时--分钟--秒

  - title: 调用次数
    details: 自2023.1.21：------次

copyright: false
footerHtml: true
footer: Powered by <a href="https://jitsu.top" target="_blank">Jitsu</a>
---

<script>
  let secs = parseInt((new Date().getTime() - new Date('2022-12-21 23:26:10').getTime()) / 1000)
  let time = {
    day: Math.floor(secs / 86400),
    hour: Math.floor(secs % 86400 / 3600),
    min: Math.floor(secs % 86400 % 3600 / 60),
    sec: secs % 86400 % 3600 % 60
  }
  let xmlhttp;
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function()
	{
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
        let features = document.getElementsByClassName('feature')
      features[4].children[1].innerText = time.day + '天' + time.hour + '小时' + time.min + '分钟' + time.sec + '秒'
      features[5].children[1].innerText = '自2023.1.21：' + xmlhttp.responseText + '次'
		}
	}
	xmlhttp.open("GET", "https://image.anosu.top/pixiv/count", true);
	xmlhttp.send();
</script>