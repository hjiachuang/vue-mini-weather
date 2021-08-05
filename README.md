<h1 align="center">基于Vue开发的迷你实时天气预报组件</h1>

<div align="center">

<img src='https://raw.githubusercontent.com/hjiachuang/vue-mini-weather/master/weather.png' />

![GitHub watchers](https://img.shields.io/github/watchers/hjiachuang/vue-mini-weather?style=social) ![GitHub stars](https://img.shields.io/github/stars/hjiachuang/vue-mini-weather?style=social) ![GitHub forks](https://img.shields.io/github/forks/hjiachuang/vue-mini-weather?style=social)
<br />
![GitHub package.json version](https://img.shields.io/github/package-json/v/hjiachuang/vue-mini-weather?style=flat-square) ![GitHub](https://img.shields.io/github/license/hjiachuang/vue-mini-weather?style=flat-square) ![GitHub open issues](https://img.shields.io/github/issues/hjiachuang/vue-mini-weather?style=flat-square) ![GitHub closed issues](https://img.shields.io/github/issues-closed/hjiachuang/vue-mini-weather) ![GitHub last commit](https://img.shields.io/github/last-commit/hjiachuang/vue-mini-weather?style=flat-square) ![GitHub top language](https://img.shields.io/github/languages/top/hjiachuang/vue-mini-weather?style=flat-square)

</div>

#### 项目展示
[vue-mini-weather展示页](https://apia.aidioute.cn/resource/vue-mini-weather/)

> 基于Vue框架开发的一款迷你天气预报展示的小组件，目前只支持中国大陆的天气预报，原因在更新公告中有，有问题请提[issue](https://github.com/hjiachuang/vue-mini-weather/issues)
#### 📦 安装
*  2021.08.05 因为刚上传到npm仓库没多久，可能其他镜像库还没有镜像过去，所以要下载只能切换npm源为官方源。

```bash
npm i vue-mini-weather --save
```

```javascript
// 1. 全局引入

//main.js 项目入口文件
import Vue from 'vue'
import weather from 'vue-mini-weather'
Vue.use(weather)

//app.vue 项目文件
<template>
  <v-mini-weather size type color iconSize url ></v-mini-weather>
</template>

// 2. 局部引入 
//app.vue 项目文件
<template>
  <v-mini-weather size type color iconSize url ></v-mini-weather>
</template>

<script>
import { vMiniWeather } from 'vue-mini-weather'
export default {
  components: {
    vMiniWeather
  }
}
</script>

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
},
url: {     //天气小组件调用的天气查询API
  type: String,
  default: 'https://apia.aidioute.cn/weather/index.php'
}
```

#### 关于项目

##### 📖 更新

* **版本0.3.5**
  
  更新时间：2021.08.05

  1. 发现写的乱七八糟的，重构了一下代码。对`props`中的`size`和`type`添加了校验，`size`只接收`small`和`normal`，`type`只接收`oneline`和`multiline`，传入其他字符串会在控制台报错。
  2. 修复了PHP后端文件中，如果请求腾讯地图Api失败时不返回`error_msg`内容，导致前端的`antd`的`message`组件不显示内容，只显示个感叹号。
  3. 修复了展示页面每个款式的标题显示错误的问题。 

* **版本0.3.3、版本0.3.4**
  
  更新时间：2021.04.24

  1. 这位老哥[fpandzc](https://github.com/fpandzc)提出的`issues`，解决开启VPN定位到国外直接报网络错误，现在修改为，如果定位不在中国大陆的，统一显示广东广州的天气（这个原因是腾讯地图无法通过IP定位精准定位到中国大陆以外的地方，且天气数据源无法获取中国以外的天气）。
  2. 添加了一个新的`props`参数。为啥呢，因为：又修改了一次数据源，需要使用腾讯地图API解决位置信息的问题，php文件已修改，需自行注册腾讯地图API，然后在function.php文件中填上你的Key。npm仓库的api依旧默认是调用我运行在辣鸡服务器上的，同上个版本更新一个意思，需要的话最好自己下载php源文件部署到自己服务器上，然后给组件传个url值就行，谢谢。
  3. 大气压强显示错误的bug。

* **版本0.3.2**

  更新时间：2021.04.07

  1. 好无奈啊，之前用的[中国天气网](http://www.weather.com.cn/)的数据是从它官方免费的插件中提取的API，近期它的插件居然变成收费的了。所以，接口失效了。所以更新了下，换成自己的API。但是有一点需要注意的，就是我的API接口文件是运行在辣鸡服务器上的，并发什么的没法保证，如果要求高的，我把API的源文件附在php文件夹中，自己下载然后部署到自己的服务器上，然后改源码就行了。
  2. 添加了`ant-design-vue`中的`message`组件，所以打包文件大了很多。自行考虑。
  3. 移除了上个版本添加的对IE的支持，需要的自行在github上下载然后在`src/lib/index`头部添加`import 'babel-polyfill'`。

* **版本0.3.0、版本0.3.1**

  更新时间：2021.02.28

  感谢这位老哥[OrangeHong](https://github.com/OrangeHong)提出的issues，在IE浏览器下报错，现在重新封装，包比之前的大了几十k，因为导入了babel-polyfill为了兼容IE，目前只支持IE10+，再往下的版本我就不兼容了哈，抱歉。如果项目不考虑IE浏览器的话可以选择0.2.9版本。

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

Copyright © 2021-present [hjiachuang](https://github.com/hjiachuang).
