<template>
    <div class="app">
        <div class="one">
            <pre>size:small;    type:oneline;   color: 000000;</pre>
            <v-mini-weather class="weather" size="small" type="oneline" color="000000"></v-mini-weather>
        </div>
        <div class="two">
            <pre>size:small; type:oneline; color: f5af19;</pre>
            <v-mini-weather class="weather" size="normal" type="oneline" color="f5af19"></v-mini-weather>
        </div>
        <div class="three">
            <pre>size:small; type:oneline; color: 99f2c8;</pre>
            <v-mini-weather class="weather" size="small" type="multiline" color="99f2c8"></v-mini-weather>
        </div>
        <div class="four">
            <pre>size:small; type:oneline; color: 000046;</pre>
            <v-mini-weather class="weather" size="normal" type="multiline" color="ffffff"></v-mini-weather>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style lang="scss" scoped>
.app {
    max-width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    overflow: hidden;
    padding: 50px 0;
    .one, .two, .three, .four {
        width: 100%;
        margin-top: 20px;
        text-align: center;
        pre {
            height: 30px;
            line-height: 30px;
            font-size: 16px;
        }
    }
    .one {
        margin-top: 0;
    }
    .four {
        .weather {
            background: #000000;
        }
    }
    .weather {
        border-radius: 22px;
        background: #ffffff;
        box-shadow: 1px 1px 10px #00000022;
    }
}
</style>