var secs = parseInt((new Date().getTime() - new Date('2022-12-21 23:26:10').getTime()) / 1000)
var time = {
    day: Math.floor(secs / 86400),
    hour: Math.floor(secs % 86400 / 3600),
    min: Math.floor(secs % 86400 % 3600 / 60),
    sec: secs % 86400 % 3600 % 60
}
var xmlhttp;
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        let features = document.getElementsByClassName('feature')
        features[4].children[1].innerText = time.day + '天' + time.hour + '小时' + time.min + '分钟' + time.sec + '秒'
        features[5].children[1].innerText = '自2023.1.21：' + xmlhttp.responseText + '次'
    }
}
xmlhttp.open("GET", "https://image.anosu.top/pixiv/count", true);
xmlhttp.send();