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
      if (this.weatherIconAnimation) {
        this.weatherIconAnimation.destroy()
      }
      this.weatherIconAnimation = Lottie.loadAnimation({
        container: document.getElementById(this.id),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: weatherIcon[this.icon]({ type: this.type })
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
