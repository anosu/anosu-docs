import { defineUserConfig, defaultTheme } from 'vuepress'
import { navbar } from './navbar'
import { sidebar } from './sidebar'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'API Docs',
  description: '这是涩图（不是',
  theme: defaultTheme({
    navbar: navbar,
    sidebar: sidebar,
    notFound: ['Not Found'],
    backToHome: "返回首页"
  })
})