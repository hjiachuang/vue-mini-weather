import vWeather from './src/VWeather'

vWeather.install = (Vue) => {
    Vue.component(vWeather.name, vWeather)
}

export default vWeather