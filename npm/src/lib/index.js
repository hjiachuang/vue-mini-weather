import vMiniWeather from './vMiniWeather.vue'
import vMiniWeatherIcon from './vMiniWeatherIcon/vMiniWeatherIcon.vue'

const install = (Vue) => {
  Vue.component('vMiniWeather', vMiniWeather)
  Vue.component('vMiniWeatherIcon', vMiniWeatherIcon)
}

export default install
export {
  vMiniWeather,
  vMiniWeatherIcon
}
