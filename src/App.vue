<template>
  <div id="app">
    <div class="one">
      <pre>size:small;    type:oneline;   color: 000000;</pre>
      <v-mini-weather class="weather" size="small" type="oneline" color="000000"></v-mini-weather>
    </div>
    <div class="two">
      <pre>size:normal; type:oneline; color: f5af19;</pre>
      <v-mini-weather class="weather" size="normal" type="oneline" color="f5af19"></v-mini-weather>
    </div>
    <div class="three">
      <pre>size:small; type:multiline; color: 99f2c8;</pre>
      <v-mini-weather class="weather" size="small" type="multiline" color="99f2c8"></v-mini-weather>
    </div>
    <div class="four">
      <pre>size:normal; type:multiline; color: ffffff;</pre>
      <v-mini-weather class="weather" size="normal" type="multiline" color="ffffff"></v-mini-weather>
    </div>
  </div>
</template>

<script>
import { vMiniWeather } from '../npm/index.umd.min'
import '../npm/index.css'

export default {
  name: 'App',
  components: {
    vMiniWeather
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
}
.one, .two, .three, .four {
  width: 100%;
  margin-top: 20px;
  text-align: center;
}
pre {
  height: 30px;
  line-height: 30px;
  font-size: 16px;
}
.one {
  margin-top: 0;
}
.four .weather {
  background: #000000;
}
.weather {
  border-radius: 22px;
  background: #ffffff;
  box-shadow: 1px 1px 10px #00000022;
}
</style>
