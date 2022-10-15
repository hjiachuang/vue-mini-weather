<template>
  <div id="app">
    <v-mini-weather class="weather" @notice="notice">
      <template #default="{weather}">
        <v-mini-weather-icon class="v-weather-icon" :icon="weather.weathercode"></v-mini-weather-icon>
        <span>{{ weather.cityname }} / {{ weather.weather }} / {{ weather.temp }}℃</span>
      </template>
    </v-mini-weather>
  </div>
</template>

<script>
import { vMiniWeather, vMiniWeatherIcon } from '../npm/index.umd.min'
import '../npm/index.css'

export default {
  name: 'App',
  components: {
    vMiniWeather,
    vMiniWeatherIcon
  },
  data:() => ({
    icons: 'd00'
  }),
  methods: {
    notice(data) {
      console.log(data)
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
 max-width: 100vw;
 min-height: 100vh;
 box-sizing: border-box;
 overflow: hidden;
 padding: 50px 0;
 overflow-x: hidden;
 -webkit-font-smoothing: antialiased;
 background-image: linear-gradient(#6dd5ed, #2193b0);
 display: flex;
 justify-content: center;
 align-items: center;
}

.weather {
  background: #fff;
  height: 40px;
  line-height: 40px;
  border-radius: 20px
}

.v-weather-icon {
  width: 40px;
}

</style>
