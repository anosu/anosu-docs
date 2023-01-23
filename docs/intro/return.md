---
prev:
   text: 请求参数
   link: '/intro/params.md'
next:
   text: 注意事项
   link: '/intro/notice.md'
---



# 返回格式

## 302跳转

直接重定向到图片链接

```http
redirect: https://i.jitsu.top/img-original/img/2018/12/21/00/11/28/72203964_p0.jpg
```

:::tip
如果没有结果会返回一个404网页（不会重定向）
:::

## JSON

API的返回格式为一个包含了Pixiv图片信息对象的数组

```json
[
  {
    "pid": 72203964,
    "page": 0,
    "uid": 1055457,
    "title": "けもみみ。",
    "user": "ふぇありぃあい＠",
    "r18": 0,
    "width": 1430,
    "height": 2029,
    "tags": [
      "オリジナル",
      "獣耳",
      "うちの子",
      "紫陽ちゃん",
      "女の子",
      "オリジナル7500users入り",
      "原创",
      "兽耳",
      "我家孩子",
      "女孩子",
      "原创7500收藏",
      "original",
      "beast ears",
      "OC",
      "girl",
      "original 7,500+ bookmarks"
    ],
    "url": "https://i.jitsu.top/img-original/img/2018/12/21/00/11/28/72203964_p0.jpg"
  }
]
```

:::tip
若没有结果则返回一个空数组
:::