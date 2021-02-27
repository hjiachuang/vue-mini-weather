import vWeather from './src/VWeather'

vWeather.install = function(Vue){
    Vue.component(vWeather.name, vWeather)
}

export default vWeather