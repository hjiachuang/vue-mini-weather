import vMiniWeather from './vWeather'

const install = Vue => {
    Vue.component(vMiniWeather.name, vMiniWeather)
}

export default install
export { vMiniWeather }
