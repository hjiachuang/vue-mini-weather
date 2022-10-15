<template>
  <div v-show="icon" id="v-weather-icon-xx00xx" class="v-mini-weather-icon"></div>
</template>

<script>
import Lottie from 'lottie-web'
import weatherIcon from './index'

export default {
  name: 'vMiniWeatherIcon',
  props: {
    icon: {
      type: String,
      default: 'd00'
    }
  },
  data:() => ({
    weatherIconAnimation: null
  }),
  methods: {
    handleShowIcon() {
      if (this.weatherIconAnimation) {
        this.weatherIconAnimation.destroy()
      }
      this.weatherIconAnimation = Lottie.loadAnimation({
        wrapper: document.getElementById('v-weather-icon-xx00xx'),
        animType: 'svg',
        loop: true,
        animationData: weatherIcon[this.icon]()
      });
      this.updating = false
    }
  },
  mounted() {
    this.handleShowIcon()
  },
  watch: {
    icon(newValue){
      if (newValue) {
        this.handleShowIcon()
      }
    }
  },
  beforeDestroy() {
    if (this.weatherIconAnimation) {
      this.weatherIconAnimation.destroy()
    }
  }
}
</script>

<style scoped>
.v-mini-weather-icon {
  display: flex;
}
</style>