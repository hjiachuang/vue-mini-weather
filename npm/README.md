<h1 align="center">基于Vue开发的迷你实时天气预报组件</h1>

<div align="center">

<img src='https://raw.githubusercontent.com/hjiachuang/vue-mini-weather/master/weather.png' />

![GitHub watchers](https://img.shields.io/github/watchers/hjiachuang/vue-mini-weather?style=social) ![GitHub stars](https://img.shields.io/github/stars/hjiachuang/vue-mini-weather?style=social) ![GitHub forks](https://img.shields.io/github/forks/hjiachuang/vue-mini-weather?style=social)
<br />
![GitHub package.json version](https://img.shields.io/github/package-json/v/hjiachuang/vue-mini-weather?style=flat-square) ![GitHub](https://img.shields.io/github/license/hjiachuang/vue-mini-weather?style=flat-square) ![GitHub open issues](https://img.shields.io/github/issues/hjiachuang/vue-mini-weather?style=flat-square) ![GitHub closed issues](https://img.shields.io/github/issues-closed/hjiachuang/vue-mini-weather) ![GitHub last commit](https://img.shields.io/github/last-commit/hjiachuang/vue-mini-weather?style=flat-square) ![GitHub top language](https://img.shields.io/github/languages/top/hjiachuang/vue-mini-weather?style=flat-square)

</div>

#### 项目展示
[vue-mini-weather展示页](https://api.aidioute.cn/resource/vue-mini-weather/)

> 基于Vue框架开发的一款迷你天气预报展示的小组件 有问题请提[issue](https://github.com/hjiachuang/vue-mini-weather/issues)

#### 📦 安装
*  2020.07.07 因为刚上传到npm仓库没多久，可能其他镜像库还没有镜像过去，所以要下载只能切换npm源为官方源。

```javascript
//命令行
npm install vue-mini-weather

//main.js 项目入口文件
import Vue from 'vue'
import weather from 'vue-mini-weather'

Vue.use(weather)

//app.vue 项目文件
<template>
    <v-mini-weather size type color iconSize ></v-mini-weather>
</template>
```

#### 📝 参数说明
```javascript
size: {         //天气小组件的尺寸，可以有"small"和"normal"，默认是"small"。
    type: String,
    default: "small"
},
type: {         //天气小组件的类型，可以有"oneline"和"multiline"，默认是"oneline"。
    type: String,
    default: "oneline"
},
color: {        //天气小组件的字体和icon的颜色，只接受16进制的rgb颜色值，但不需传"#"号，例如黑色："000000"，白色："ffffff"。
    type: String,
    default: "000000"
},
iconSize: {     //天气小组件在 multiline 类型下icon的尺寸大小，是数字类型的数据，单位为px，默认是100。
    type: Number,
    default: 100
}
```

#### 关于项目

##### 📖 更新

* **版本0.2.9**

    更新时间：2020.07.09
    
    由于**animated-icons**的源码写的是固定颜色值 **[0,0,0,1]** 的，我以为就是正常的 **[0-255]** 的rgb+alpha，所以我就自己改成了变量r，g，b然后动态赋颜色值。昨天测试发现，诶，它居然不是 **[0-255]**，而是 **[0-255] / 255**。哈哈哈哈所以我就在组件赋值那里直接加上 **/ 255**。

* **版本0.2.8、版本0.2.7**

    更新时间：2020.07.08
    
    添加了展示页，更新了readme.md文件。

* **版本0.2.6**

    更新时间：2020.07.08
    
    1.由于和风天气更改了开发文档，API和内容变动了，因此更换天气预报数据，来源于[中国天气网](http://www.weather.com.cn/)。
    
    2.改了个小问题

* **版本0.2.4**

    更新时间：2020.07.07
    
    天气预报数据，来源于[和风天气](https://www.heweather.com/)。

* **版本0.2.3之前**
    
    测试，改bug等。

**说明**

* 项目使用到了开源的天气动态icon，来源于[animated-icons](https://icons8.com/animated-icons#Weather)中的 **weather** 组。

* 获取天气的前提是需要获取您当前的位置信息，默认使用HTML5的定位功能，如果定位失败的话，则采用IP地址定位的方式获取位置信息，再获取天气信息。

* 获取IP地址的API是我自己的 [ip](https://api.aidioute.cn/ip/)

**依赖**

* [axios](https://github.com/axios/axios)

* [lottie-web](https://github.com/airbnb/lottie-web)

#### 📝 License

[MIT](https://github.com/hjiachuang/vue-mini-weather/blob/master/LICENSE)

Copyright © 2020-present [hjiachuang](https://github.com/hjiachuang).
