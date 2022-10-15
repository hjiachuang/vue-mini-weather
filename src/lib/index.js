import vMiniWeather from './vWeather'
import vMiniWeatherIcon from './vWeatherIcon/vWeatherIcon'

const install = Vue => {
    Vue.component(vMiniWeather.name, vMiniWeather)
    Vue.component(vMiniWeatherIcon.name, vMiniWeatherIcon)
}

export default install
export { vMiniWeather, vMiniWeatherIcon }
