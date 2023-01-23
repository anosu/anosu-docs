---
prev:
   text: 请求地址
   link: '/intro/address.md'
next:
   text: 请求参数
   link: '/intro/params.md'
---



# 请求方法

## URL路径

### `/pixiv/direct`

:::warning
不支持POST方法
:::

**请使用GET方法**



### `/pixiv/json`

:::tip
没有特殊需求建议优先使用
:::

支持GET / POST



### `/pixiv`

:::tip
该路径下不同的请求方法会返回不同的类型
:::

- 若需302跳转请使用`GET`请求

- 若需json格式的数据请使用`POST`请求