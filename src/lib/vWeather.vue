<template>
  <div class="v-weather" @click="getWeather"
       :style="`color: rgb(${convartedColor[0]}, ${convartedColor[1]}, ${convartedColor[2]})`">
    <!--简版天气一行展示       天气图标/城市/天气/温度-->
    <div class="v-weather--small-oneline" v-if="size === 'small' && type === 'oneline'">
      {{ position.area }} / {{ weather.weather }} / {{ weather.temp }}℃
      <div class="v-weather-icon" ref="svgContainer"></div>
    </div>
    <!--标准天气一行展示       天气图标/更新日期/城市/天气/温度/风向/相对湿度/降水量-->
    <div class="v-weather--normal-oneline" v-if="size === 'normal' && type === 'oneline'">
      {{ position.area }} / {{ weather.weather }} / {{ weather.temp }}℃ / {{ weather.WD }}{{ weather.WS }} /
      {{ weather.sd }} / {{ weather.rain }}mm / {{ weather.aqi }}
      <div class="v-weather-icon" ref="svgContainer"></div>
    </div>
    <!--简版天气多行展示       天气图标/城市/天气/温度-->
    <div class="v-weather--small-multiline" v-if="size === 'small' && type === 'multiline'">
      <div class="v-weather-icon" :style="`width: ${this.iconSize}px; height: ${this.iconSize}px`"
           ref="svgContainer"></div>
      <p>{{ position.area }}</p>
      <p>{{ weather.temp }}℃ / {{ weather.weather }}</p>
    </div>
    <!--标准天气多行展示       天气图标/城市/天气/温度-->
    <div class="v-weather--normal-multiline" v-if="size === 'normal' && type === 'multiline'">
      <div class="v-weather-icon" :style="`width: ${this.iconSize}px; height: ${this.iconSize}px`"
           ref="svgContainer"></div>
      <div class="map">
        <div ref="map"></div>
        {{ position.area }}
      </div>
      <p>天气：{{ weather.weather }}</p>
      <p>气温：{{ weather.temp }}℃</p>
      <p>风向：{{ weather.WD }}</p>
      <p>风力：{{ weather.WS }}</p>
      <p>降水量：{{ weather.rain }}mm</p>
      <p>相对湿度：{{ weather.sd }}</p>
      <p>大气压强：{{ weather.pres }}hPa</p>
      <p>空气质量：{{ weather.aqi }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Lottie from 'lottie-web'

import { message } from 'ant-design-vue'
import 'ant-design-vue/lib/message/style/index.css'
import weatherIcon from './iconJson'

const getIpUrlBase = "https://apia.aidioute.cn/ip/"
const getLocationInfoUrlBase = "https://search.heweather.net/find?key=0e6b2177d7f3421d8495e805eef57c73&group=cn&lang=zh&location="
const getWeatherUrlBase = 'https://apia.aidioute.cn/weather/index.php?code='

export default {
  name: "vMiniWeather",
  props: {
    size: {
      type: String,
      default: "small"
    },
    type: {
      type: String,
      default: "oneline"
    },
    color: {
      type: String,
      default: "000000"
    },
    iconSize: {
      type: Number,
      default: 100
    }
  },
  data: () => ({
    convartedColor: [],
    location: {},   //定位功能获取的经纬度
    ip: null,
    position: {},   //经纬度查询获得的位置信息
    weather: {},
    weatherIconAnimation: null,
    locationIconAimation: null,
    timer: null,
    errorMsg: ""
  }),
  watch: {
    async color(data) {
      this.convartColor()
      Lottie.destroy()
      if (this.weather.hasOwnProperty('code')) {
        this.showIcon()
      } else {
        this.getLocation()
      }
    }
  },
  async mounted() {
    this.convartColor()
    this.getLocation()
    this.timer = setInterval(() => {
      this.getLocation()
    }, 30 * 60 * 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    convartColor() {
      const colorTemp = /([a-zA-Z0-9]{2})([a-zA-Z0-9]{2})([a-zA-Z0-9]{2})/.exec(this.color)
      this.convartedColor = [
        parseInt(`0x${colorTemp[1]}`),
        parseInt(`0x${colorTemp[2]}`),
        parseInt(`0x${colorTemp[3]}`)
      ]
    },
    getLocation() {
      if (typeof window !== "undefined" && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
              this.location = {
                latitude: position.coords.latitude.toFixed(6),
                longitude: position.coords.longitude.toFixed(6)
              }
              this.getCode()
            },
            (error) => {
              switch (error.code) {
                case 0:
                  message.warning("获取位置信息出错！将使用IP定位")
                  break;
                case 1:
                  message.warning("您设置了阻止该页面获取位置信息！将使用IP定位")
                  break;
                case 2:
                  message.warning("浏览器无法确定您的位置！将使用IP定位")
                  break;
                case 3:
                  message.warning("获取位置信息超时！将使用IP定位")
                  break;
              }
              this.getIp()
            }
        )
      } else {
        message.warning("该浏览器不支持 HTML5 的定位功能！将使用IP定位")
        this.getIp()
      }
    },
    async getIp() {
      try {
        const ip = await axios.get(getIpUrlBase)
        if (ip.status === 200) {
          this.ip = ip.data
        } else {
          message.warning("获取IP地址时网络错误，默认显示广州天气。")
        }
        this.getCode()
      } catch (err) {
        console.log(err)
        message.warning('获取IP地址时网络错误，默认显示广州天气。')
        this.getCode()
      }
    },
    async getCode() {
      let getCodeUrl = null
      if (this.location.hasOwnProperty('latitude') && this.location.hasOwnProperty('longitude')) {
        getCodeUrl = `${getLocationInfoUrlBase}${this.location.longitude},${this.location.latitude}`
      } else if (this.ip !== null) {
        getCodeUrl = `${getLocationInfoUrlBase}${this.ip}`
      } else {
        getCodeUrl = `${getLocationInfoUrlBase}101280101`
      }
      try {
        const resultData = await axios.get(getCodeUrl)
        if (resultData.status === 200) {
          if (resultData.data.HeWeather6[0].status === 'ok') {
            this.position = {
              code: resultData.data.HeWeather6[0].basic[0].cid.match(/\d+/)[0],
              province: resultData.data.HeWeather6[0].basic[0].admin_area,
              city: resultData.data.HeWeather6[0].basic[0].parent_city,
              area: resultData.data.HeWeather6[0].basic[0].location
            }
            this.location = {
              latitude: resultData.data.HeWeather6[0].basic[0].lat,
              longitude: resultData.data.HeWeather6[0].basic[0].lon
            }
            this.getWeather()
          } else {
            message.warning("你好像不在中国，获取不到位置信息，默认显示广州天气。")
            this.position = {
              code: '101280101',
              province: '广东省',
              city: '广州市',
              area: '广州'
            }
            this.location = {}
            this.ip = null
            this.getWeather()
          }
        } else {
          message.warning("获取位置信息时网络错误，默认显示广州天气。")
          this.position = {
            code: '101280101',
            province: '广东省',
            city: '广州市',
            area: '广州'
          }
          this.location = {}
          this.ip = null
          this.getWeather()
        }
      } catch (err) {
        console.log(err)
        message.warning("获取位置信息时网络错误，默认显示广州天气。")
        this.position = {
          code: '101280101',
          province: '广东省',
          city: '广州市',
          area: '广州'
        }
        this.location = {}
        this.ip = null
        this.getWeather()
      }
    },
    async getWeather() {
      const url = `${getWeatherUrlBase}${this.position.code}`
      try {
        const weather = await axios.get(url)
        if (weather.status === 200 && weather.data.error === 0) {
          this.weather = weather.data.data
          this.showIcon()
        } else {
          message.error("网络错误!")
        }
      } catch (err) {
        console.log(err)
        message.error("未知错误!")
      }
    },
    showIcon() {
      const svgContainer = this.$refs.svgContainer
      if (this.weatherIconAnimation) {
        this.weatherIconAnimation.destroy()
      }
      if (this.locationIconAimation) {
        this.locationIconAimation.destroy()
      }
      this.weatherIconAnimation = Lottie.loadAnimation({
        wrapper: svgContainer,
        animType: 'svg',
        loop: true,
        animationData: weatherIcon[this.weather.weather](this.convartedColor[0] / 255, this.convartedColor[1] / 255, this.convartedColor[2] / 255)
      });
      const map = this.$refs.map
      this.locationIconAimation = Lottie.loadAnimation({
        wrapper: map,
        animType: 'svg',
        loop: true,
        animationData: weatherIcon.map(this.convartedColor[0] / 255, this.convartedColor[1] / 255, this.convartedColor[2] / 255)
      });
    }
  }
}
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}

.v-weather {
  display: inline-block;
  cursor: pointer;
  user-select: none;
}

.v-weather--small-oneline, .v-weather--normal-oneline {
  /*display: inline-block;*/
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  padding: 0 20px 0 45px;
  position: relative;
}

.v-weather--small-oneline .v-weather-icon, .v-weather--normal-oneline .v-weather-icon {
  position: absolute;
  top: 7px;
  left: 10px;
  width: 30px;
  height: 30px;
}

.v-weather--small-multiline {
  display: inline-block;
  padding: 6px 20px;
  position: relative;
  text-align: center;
}

.v-weather--small-multiline .v-weather-icon {
  margin: 0 auto;
}

.v-weather--small-multiline p {
  height: 24px;
  line-height: 24px;
  font-size: 16px;
}

.v-weather--normal-multiline {
  display: inline-block;
  padding: 6px 20px;
  position: relative;
  text-align: center;
}

.v-weather--normal-multiline .v-weather-icon {
  margin: 0 auto;
}

.v-weather--normal-multiline .map {
  height: 30px;
  line-height: 30px;
  font-size: 16px;
}

.v-weather--normal-multiline .map div {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-left: -14px;
  vertical-align: middle;
}

.v-weather--normal-multiline p {
  height: 20px;
  line-height: 20px;
  font-size: 16px;
}


</style>
