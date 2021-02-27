<template>
    <div class="v-weather" :style="`color: rgb(${convartedColor[0]}, ${convartedColor[1]}, ${convartedColor[2]})`">
        <!--简版天气一行展示       天气图标/城市/天气/温度-->
        <div class="v-weather--small-oneline" v-if="size === 'small' && type === 'oneline'">
            {{position.area}} / {{weather.txt}} / {{weather.tmp}}℃
            <div class="v-weather-icon" ref="svgContainer"></div>
        </div>
        <!--标准天气一行展示       天气图标/更新日期/城市/天气/温度/风向/相对湿度/降水量-->
        <div class="v-weather--normal-oneline" v-if="size === 'normal' && type === 'oneline'">
            {{position.area}} / {{weather.txt}} / {{weather.tmp}}℃ / {{weather.wind_dir_txt}}{{weather.wind_sc}}级 / {{weather.hum}}% / {{weather.pcpn}}mm / {{weather.aqi_txt}}
            <div class="v-weather-icon" ref="svgContainer"></div>
        </div>
        <!--简版天气多行展示       天气图标/城市/天气/温度-->
        <div class="v-weather--small-multiline" v-if="size === 'small' && type === 'multiline'">
            <div class="v-weather-icon" :style="`width: ${this.iconSize}px; height: ${this.iconSize}px`" ref="svgContainer"></div>
            <p>{{position.area}}</p>
            <p>{{weather.tmp}}℃ / {{weather.txt}}</p>
        </div>
        <!--标准天气多行展示       天气图标/城市/天气/温度-->
        <div class="v-weather--normal-multiline" v-if="size === 'normal' && type === 'multiline'">
            <div class="v-weather-icon" :style="`width: ${this.iconSize}px; height: ${this.iconSize}px`" ref="svgContainer"></div>
            <div class="map"><div ref="map"></div>{{position.area}}</div>
            <p>天气：{{weather.txt}}</p>
            <p>气温：{{weather.tmp}}℃</p>
            <p>风向：{{weather.wind_dir_txt}}</p>
            <p>风力：{{weather.wind_sc}}级</p>
            <p>降水量：{{weather.pcpn}}mm</p>
            <p>相对湿度：{{weather.hum}}%</p>
            <p>大气压强：{{weather.pres}}hPa</p>
            <p>空气质量：{{weather.aqi_txt}}</p>
        </div>
    </div>
</template>

<script>
    // import axios from 'axios'
    // import Lottie from 'lottie-web'

    import weatherIcon from '../../iconJson'

    const getIpUrlBase = "https://api.aidioute.cn/ip/"
    const getLocationInfoUrlBase = "https://search.heweather.net/find?key=0e6b2177d7f3421d8495e805eef57c73&group=cn&lang=zh&location="
    const getWeatherUrlBase = "https://apip.weatherdt.com/plugin/data?key=6gpFegk3V9&lang=zh&location="

    export default {
        name: "vMiniWeather",
        props: {
            size: {
                type: String,
                default: "small"
            },
            type: {
                type: String,
                default: "oneline"
            },
            color: {
                type: String,
                default: "000000"
            },
            iconSize: {
                type: Number,
                default: 100
            }
        },
        data: () => ({
            convartedColor: [],
            location: {},   //定位功能获取的经纬度
            ip: null,
            position: {},   //经纬度查询获得的位置信息
            weather: {},
            weatherIconAnimation: null,
            locationIconAimation: null,
            timer: null,
            errorMsg: ""
        }),
        watch: {
            async color(data) {
                this.convartColor()
                Lottie.destroy()
                if(this.weather.hasOwnProperty('code')) {
                    this.showIcon()
                }else {
                    this.getLocation()
                }
            }
        },
        async mounted() {
            this.convartColor()
            await this.getLocation()
            this.timer = setInterval(() => {
                this.getLocation()
            }, 30 * 60 * 1000)
        },
        beforeDestroy() {
            clearInterval(this.timer)
        },
        methods: {
            convartColor() {
                const colorTemp = /([a-zA-Z0-9]{2})([a-zA-Z0-9]{2})([a-zA-Z0-9]{2})/.exec(this.color)
                this.convartedColor = [
                    parseInt(`0x${colorTemp[1]}`),
                    parseInt(`0x${colorTemp[2]}`),
                    parseInt(`0x${colorTemp[3]}`)
                ]
            },
            async getLocation() {
                if (typeof window !== "undefined" && window.navigator.geolocation) {
                    await window.navigator.geolocation.getCurrentPosition(
                        (position) => {
                            this.location = {
                                latitude: position.coords.latitude.toFixed(6),
                                longitude: position.coords.longitude.toFixed(6)
                            }
                            this.getCode()
                        },
                        (error) => {
                            switch(error.code){
                                case 0:
                                    console.log("获取位置信息出错！")
                                    break;
                                case 1:
                                    console.log("您设置了阻止该页面获取位置信息！")
                                    break;
                                case 2:
                                    console.log("浏览器无法确定您的位置！")
                                    break;
                                case 3:
                                    console.log("获取位置信息超时！")
                                    break;
                            }
                            this.getIp()
                        }
                    )
                } else {
                    console.log("该浏览器不支持 HTML5 的定位功能")
                    this.getIp()
                }
            },
            async getIp() {
                const ip = await axios.get(getIpUrlBase)
                if(ip.status === 200) {
                    this.ip = ip.data
                }else {
                    console.log("获取ip地址时网络错误，默认显示北京天气。")
                }
                this.getCode()
            },
            async getCode() {
                let getCodeUrl = null
                if(this.location.hasOwnProperty('latitude') && this.location.hasOwnProperty('longitude')) {
                    getCodeUrl = `${getLocationInfoUrlBase}${this.location.longitude},${this.location.latitude}`
                }else if(this.ip !== null){
                    getCodeUrl = `${getLocationInfoUrlBase}${this.ip}`
                }else {
                    getCodeUrl = `${getLocationInfoUrlBase}101010100`
                }
                const resultData = await axios.get(getCodeUrl)
                if(resultData.status === 200) {
                    if(resultData.data.HeWeather6[0].status === 'ok') {
                        this.position = {
                            code: resultData.data.HeWeather6[0].basic[0].cid.match(/\d+/)[0],
                            province: resultData.data.HeWeather6[0].basic[0].admin_area,
                            city: resultData.data.HeWeather6[0].basic[0].parent_city,
                            area: resultData.data.HeWeather6[0].basic[0].location
                        }
                        this.getWeather()
                    }else {
                        console.log("你好像不在中国，获取不到位置信息，默认显示北京天气。")
                        this.location = {}
                        this.ip = null
                        this.getCode()
                    }
                }else {
                    console.log("获取位置信息时网络错误，默认显示北京天气。")
                    this.location = {}
                    this.ip = null
                    this.getCode()
                }
            },
            async getWeather() {
                const url = `${getWeatherUrlBase}${this.position.code}`
                const weather = await axios.get(url)
                if(weather.status === 200) {
                    if(weather.data.status === 'ok') {
                        this.weather = {
                            ...weather.data.now,
                            aqi: weather.data.aqi.aqi,
                            aqi_txt: weather.data.aqi.txt
                        }
                        this.showIcon()
                    }else {
                        console.log("获取天气失败。")
                    }
                }else {
                    console.log("网络错误。")
                }
            },
            showIcon() {
                const svgContainer = this.$refs.svgContainer
                this.weatherIconAnimation = Lottie.loadAnimation({
                    wrapper: svgContainer,
                    animType: 'svg',
                    loop: true,
                    animationData: weatherIcon[this.weather.code](this.convartedColor[0]/255,this.convartedColor[1]/255,this.convartedColor[2]/255)
                });
                const map = this.$refs.map
                this.locationIconAimation = Lottie.loadAnimation({
                    wrapper: map,
                    animType: 'svg',
                    loop: true,
                    animationData: weatherIcon.map(this.convartedColor[0]/255,this.convartedColor[1]/255,this.convartedColor[2]/255)
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    p {
        margin: 0;
        padding: 0;
    }
    .v-weather {
        display: inline-block;
        cursor: default;
        user-select: none;
        .v-weather--small-oneline, .v-weather--normal-oneline {
            /*display: inline-block;*/
            height: 44px;
            line-height: 44px;
            font-size: 14px;
            padding: 0 20px 0 45px;
            position: relative;
            .v-weather-icon {
                position: absolute;
                top: 7px;
                left: 10px;
                width: 30px;
                height: 30px;
            }
        }
        .v-weather--small-multiline {
            display: inline-block;
            padding: 6px 20px;
            position: relative;
            text-align: center;
            .v-weather-icon {
                margin: 0 auto;
            }
            p {
                height: 24px;
                line-height: 24px;
                font-size: 16px;
            }
        }
        .v-weather--normal-multiline {
            display: inline-block;
            padding: 6px 20px;
            position: relative;
            text-align: center;
            .v-weather-icon {
                margin: 0 auto;
            }
            .map {
                height: 30px;
                line-height: 30px;
                font-size: 16px;
                div {
                    display: inline-block;
                    width: 24px;
                    height: 24px;
                    margin-left: -14px;
                    vertical-align: middle;
                }
            }
            p {
                height: 20px;
                line-height: 20px;
                font-size: 16px;
            }
        }
    }
</style>
