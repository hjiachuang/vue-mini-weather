import vWeather from './vWeather'

const install = (Vue) => {
    if(install.installed) return
    vWeather.install(Vue)
}

if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install, vWeather
}