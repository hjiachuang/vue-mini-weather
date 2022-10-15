<template>
  <div class="v-weather" @click="handleUpdate"
       :style="`cursor: ${updating? 'not-allowed': 'pointer'}`">
    <span v-if="updating">更新中...</span>
    <slot v-if="!updating" :weather="weatherData"></slot>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "vMiniWeather",
  props: {
    url: {
      type: String,
      default: 'https://apia.aidioute.cn/weather/'
    }
  },
  data: () => ({
    updating: false,
    latitude: null,               // 定位功能获取的纬度
    longitude: null,              // 定位功能获取的经度
    weatherData: '',              // 天气数据
    weather: '',                  // 天气类型
    city: '',                     // 城市
    temp: '',                     // 温度
    weatherCode: '',              // 天气图标编号
    timer: null                   // 定时器对象
  }),
  mounted() {
    this.handleGetLocation()
    this.handleUpdate()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    isObject(obj) {
      return obj !== null && Object.prototype.toString.call(obj) === '[object Object]'
    },
    handleUpdate() {
      if (!this.updating) {
        this.updating = true
        clearInterval(this.timer)
        this.handleGetWeather()
        this.timer = setInterval(() => {
          this.handleGetWeather()
        }, 30 * 60 * 1000)
      }
    },
    handleGetLocation() {
      if (typeof window !== "undefined" && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            (result) => {
              this.latitude = result.coords.latitude.toFixed(6)
              this.longitude = result.coords.longitude.toFixed(6)
            },
            (error) => {
              switch (error.code) {
                case 0:
                  this.handleSendError({
                    type: 'warning',
                    from: 'window.navigator.geolocation',
                    msg: '获取位置信息出错！'
                  })
                  break;
                case 1:
                  this.handleSendError({
                    type: 'warning',
                    from: 'window.navigator.geolocation',
                    msg: '阻止该页面获取位置信息！'
                  })
                  break;
                case 2:
                  this.handleSendError({
                    type: 'warning',
                    from: 'window.navigator.geolocation',
                    msg: '浏览器无法确定您的位置！'
                  })
                  break;
                case 3:
                  this.handleSendError({
                    type: 'warning',
                    from: 'window.navigator.geolocation',
                    msg: '获取位置信息超时！'
                  })
                  break;
              }
            }
        )
      } else {
        this.handleSendError({
          type: 'warning',
          from: 'window.navigator.geolocation',
          msg: '浏览器不支持 HTML5 的定位功能！'
        })
      }
    },
    async handleGetWeather() {
      const url = this.latitude && this.longitude ?
          `${this.url}?location_type=1&lat=${this.latitude}&lng=${this.longitude}&from=vmweather` :
          `${this.url}?location_type=0&from=vmweather`

      try {
        const response = await axios.get(url)
        if (response.status === 200) {
          const { data: result } = response
          if (this.isObject(result) &&
              'code' in result &&
              'data' in result &&
              result.code === 0
          ) {
            if (this.isObject(result.data) &&
                'location' in result.data &&
                this.isObject(result.data.location) &&
                'error_msg' in result.data.location
            ) {
              console.log(`获取定位信息失败; status: 200; error: ${result.data.location.error_msg}`)
              this.handleSendError({
                type: 'warning',
                from: 'server',
                msg: result.data.location.error_msg
              })
            }
            this.weatherData = result.data.weather
            const { weather, cityname, temp, aqi, weathercode } = result.data.weather
            this.weather = weather
            this.city = cityname
            this.temp = temp
            this.aqi = aqi
            this.weatherCode = weathercode
            this.updating = false
          } else {
            this.updating = false
            if (this.isObject(result) && 'msg' in result) {
              console.log(`获取天气请求失败; status: 200; error: ${result.msg}`)
              this.handleSendError({
                type: 'error',
                from: 'server',
                msg: result.msg
              })
            } else {
              console.log('获取天气请求失败; status: 200; error: 服务器异常')
              this.handleSendError({
                type: 'error',
                from: 'server',
                msg: '服务器异常'
              })
            }
          }
        }
      } catch (err) {
        this.updating = false
        console.log(`获取天气请求失败; status: ${err.response.status};`)
        this.handleSendError({
          type: 'error',
          from: 'axios.error',
          msg: '网络请求失败'
        })
      }
    },
    handleSendError(data) {
      this.$emit('notice', data)
    }
  }
}
</script>

<style scoped>
.v-weather {
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.v-weather> #vue-weather-icon-123456789 {
  width: 30px;
  height: 30px;
  margin-right: 4px;
}
</style>
