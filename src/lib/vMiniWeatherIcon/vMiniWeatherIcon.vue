<script>
import Lottie from 'lottie-web'
import weatherIcon from './icon'

export default {
  props: {
    icon: {
      type: String,
      default: 'd00'
    },
    type: {
      type: String,
      default: 'fill'
    }
  },
  data: () => ({
    id: '',
    weatherIconAnimation: null
  }),
  methods: {
    handleShowIcon () {
      let icon = ''
      if (this.weatherIconAnimation) {
        this.weatherIconAnimation.destroy()
      }
      // 判断icon是否存在，不存在则在前面加'd'或者去掉前面的'd'和'n'，实在没有显示N/A
      if (this.icon in weatherIcon) {
        icon = this.icon
      } else {
        if (/^\d+$/.test(this.icon)) {
          icon = 'd' + this.icon
        }
        if ((/^[dn]\d+$/.test(this.icon))) {
          icon = this.icon.slice(1)
        }
      }
      if (!(icon in weatherIcon)) {
        icon = '99'
      }
      this.weatherIconAnimation = Lottie.loadAnimation({
        container: document.getElementById(this.id),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: weatherIcon[icon]({ type: this.type })
      })
    }
  },
  created () {
    const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const strArr = str.split('')
    let result = ''
    for (let i = 0; i < 16; i++) {
      result += strArr[Math.round(Math.random() * strArr.length)]
    }
    this.id = `v-mini-weather-icon-${result}`
  },
  mounted () {
    this.handleShowIcon()
  },
  beforeDestroy () {
    if (this.weatherIconAnimation) {
      this.weatherIconAnimation.destroy()
    }
  }
}
</script>

<template>
  <div v-show="icon" :id="id"></div>
</template>
