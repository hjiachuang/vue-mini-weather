<script>
// import vMiniWeather from './lib/vMiniWeather.vue'
// import vMiniWeatherIcon from './lib/vMiniWeatherIcon/vMiniWeatherIcon.vue'
import { vMiniWeather, vMiniWeatherIcon } from '../npm/src/lib'

export default {
  components: {
    vMiniWeather,
    vMiniWeatherIcon
  },
  data: () => ({
    weather: [
      {
        weather: '晴',
        icon: 'd00'
      },
      {
        weather: '晴',
        icon: 'n00'
      },
      {
        weather: '多云',
        icon: 'd01'
      },
      {
        weather: '多云',
        icon: 'n01'
      },
      {
        weather: '阴天',
        icon: '02'
      },
      {
        weather: '阵雨',
        icon: '03'
      },
      {
        weather: '雷阵雨',
        icon: '04'
      },
      {
        weather: '雷阵雨伴有冰雹',
        icon: '05'
      },
      {
        weather: '雨夹雪',
        icon: '06'
      },
      {
        weather: '小雨',
        icon: '07'
      },
      {
        weather: '中雨',
        icon: '08'
      },
      {
        weather: '大雨',
        icon: '09'
      },
      {
        weather: '暴雨',
        icon: '10'
      },
      {
        weather: '大暴雨',
        icon: '11'
      },
      {
        weather: '特大暴雨',
        icon: '12'
      },
      {
        weather: '阵雪',
        icon: '13'
      },
      {
        weather: '小雪',
        icon: '14'
      },
      {
        weather: '中雪',
        icon: '15'
      },
      {
        weather: '大雪',
        icon: '16'
      },
      {
        weather: '暴雪',
        icon: '17'
      },
      {
        weather: '雾',
        icon: '18'
      },
      {
        weather: '冻雨',
        icon: '19'
      },
      {
        weather: '沙尘暴',
        icon: '20'
      },
      {
        weather: '小到中雨',
        icon: '21'
      },
      {
        weather: '中到大雨',
        icon: '22'
      },
      {
        weather: '大到暴雨',
        icon: '23'
      },
      {
        weather: '暴雨到大暴雨',
        icon: '24'
      },
      {
        weather: '大暴雨到特大暴雨',
        icon: '25'
      },
      {
        weather: '小到中雪',
        icon: '26'
      },
      {
        weather: '中到大雪',
        icon: '27'
      },
      {
        weather: '大到暴雪',
        icon: '28'
      },
      {
        weather: '浮尘',
        icon: '29'
      },
      {
        weather: '扬沙',
        icon: '30'
      },
      {
        weather: '强沙尘暴',
        icon: '31'
      },
      {
        weather: '霾',
        icon: '53'
      },
      {
        weather: '无',
        icon: '99'
      },
      {
        weather: '浓雾',
        icon: '32'
      },
      {
        weather: '强浓雾',
        icon: '49'
      },
      {
        weather: '中度霾',
        icon: '54'
      },
      {
        weather: '重度霾',
        icon: '55'
      },
      {
        weather: '严重霾',
        icon: '56'
      },
      {
        weather: '大雾',
        icon: '57'
      },
      {
        weather: '特强浓雾',
        icon: '58'
      },
      {
        weather: '雨',
        icon: 'd301'
      },
      {
        weather: '雪',
        icon: 'd302'
      }
    ]
  })
}
</script>

<template>
  <div id="app">
    <div class="title">
      <h1>填充</h1>
      <span>{type: fill}</span>
    </div>
    <div class="container">
      <template v-for="(item, index) in weather">
        <v-mini-weather class="v-weather" :key="index">
          <template #default>
            <v-mini-weather-icon :icon="item.icon" class="v-weather-icon"></v-mini-weather-icon>
            <span>{{ item.weather }}</span>
          </template>
        </v-mini-weather>
      </template>
    </div>
    <div class="title">
      <h1>描边</h1>
      <span>{type: line}</span>
    </div>
    <div class="container">
      <template v-for="(item, index) in weather">
        <v-mini-weather class="v-weather" :key="index">
          <template #default>
            <v-mini-weather-icon :icon="item.icon" type="line" class="v-weather-icon"></v-mini-weather-icon>
            <span>{{ item.weather }}</span>
          </template>
        </v-mini-weather>
      </template>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  max-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  background-image: linear-gradient(#6dd5ed, #2193b0);
  padding: 0 20px;
}

.title {
  margin: 20px 0;
  color: #fff;
  text-align: center;
}

.title h1 {
  font-size: 50px;
}

.title span {
  font-size: 26px;
}

.container {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-content: center;
  place-items: center center;
  grid-gap: 20px;
  margin-bottom: 40px;
}

.v-weather {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  padding: 6px 0;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
}

.v-weather-icon {
  width: 80px;
  height: 80px;
}

.v-weather span {
  color: #333;
}
</style>
