---
prev:
   text: 请求方法
   link: '/intro/method.md'
next:
   text: 返回格式
   link: '/intro/return.md'
---



# 请求参数

## 参数表

|参数名|类型|默认值|说明|
|:-:|:-:|:-:|:-:|
|`num`|int|`1`|图片的数量|
|`r18`|int|`0`|年龄分级|
|`size`|string|`original`|图片尺寸|
|`keyword`|string|`null`|图片tags所包含的关键字|
|`proxy`|string|随机|图片链接使用的反代地址|
|`db`|int|`0`|使用的图库（数据库）|

## 补充说明

### num

`num`的范围在1-30之间，超出范围会返回一个空列表，仅在返回格式为json时有效

### r18

顾名思义，`r18`代表图片的分级，`0`为全年龄，`1`为18+，`2`为随机返回一种分级的图片（50%的概率）

```json
{
    "0": "全年龄",
    "1": "18+",
    "2": "随机二选一"
}
```

### size

`size`为图片的尺寸，按照p站官方的尺寸，可选值有`original`、`regular`和`small`，并没有设置`thumb`和`mini`，因为实际用处不大，如有需要自行替换图片链接

```json
{
    "original": "原图",
    "regular": "作品详情页的略缩图",
    "small": "p站首页的略缩图"
}
```

### keyword

`keyword`为图片tags所包含的关键词，tags均来自p站，查询时请尽量不要出现错别字

支持多关键词，可用`|`作为分隔符，如：

```url
https://image.anosu.top/pixiv/direct?keyword=genshin|barefoot
```

### proxy

`proxy`为图片所使用的反向代理地址（不带协议，强制使用https，~~都什么年代了，还有人不用SSL？~~）

常见的有`i.pixiv.re`，`i.pixiv.cat`（国内已失效），`i-cf.pximg.net`（p站官方），如：

```url
https://image.anosu.top/pixiv/direct?proxy=i-cf.pximg.net
```

这里墙裂推荐有能力的人自建反代，教程在[https://pixiv.cat/reverseproxy.html](https://pixiv.cat/reverseproxy.html)（可能需要科学**）

### db

- `0`对应新的图库
- `1`对应旧的图库

关于图库，在除夕夜更新了一次，之前所用的图库（指全年龄）图片数量大概在4w左右，但是质量参差不齐（毕竟是无脑爬的），新的图库用的是我朋友的收藏（大概有2.5w张）

另外在除夕也对原来的图库进行了一次维护，因为一部分图已经被画师删除或者设置了非公开，去掉了这部分图片，除此之外，有些作品作者有二次上传过，图片的链接也会跟着更新（因为p站图片存放的路径是按照图片的上传时间来决定的），因此有一部分图片原来的链接失效了，对这部分图片的链接也进行了更新