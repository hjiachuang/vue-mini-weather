import day from './day'
import night from './night'
import cloudySun from './cloudySun'
import cloudyNight from './cloudyNight'
import windyCloud from './windyCloud'
import windy from './windy'
import rainCloud from './rainCloud'
import rainy from './rainy'
import torrentialRain from './torrentialRain'
import stormy from './stormy'
import lightning from './lightning'
import lightningBolt from './lightningBolt'
import lightSnowy from './lightSnowy'
import snowStorm from './snowStorm'
import hazeDay from './hazeDay'
import unknown from './unknown'

import map from './map'

export default {
    "晴": day,
    "多云": cloudySun,
    // "多云": cloudyNight,
    "阴": cloudySun,
    "阵雨": rainCloud,
    "雷阵雨": lightning,
    "雷阵雨伴有冰雹": stormy,
    "雨夹雪": lightSnowy,
    "小雨": rainCloud,
    "中雨": rainy,
    "大雨": torrentialRain,
    "暴雨": torrentialRain,
    "大暴雨": torrentialRain,
    "特大暴雨": torrentialRain,
    "阵雪": lightSnowy,
    "小雪": lightSnowy,
    "中雪": lightSnowy,
    "大雪": lightSnowy,
    "暴雪": snowStorm,
    "雾": hazeDay,
    "冻雨": torrentialRain,
    "沙尘暴": hazeDay,
    "小到中雨": rainCloud,
    "中到大雨": rainy,
    "大到暴雨": torrentialRain,
    "暴雨到大暴雨": torrentialRain,
    "大暴雨到特大暴雨": torrentialRain,
    "小到中雪": lightSnowy,
    "中到大雪": lightSnowy,
    "大到暴雪": snowStorm,
    "浮尘": hazeDay,
    "扬沙": hazeDay,
    "强沙尘暴": hazeDay,
    "浓雾": hazeDay,
    "强浓雾": hazeDay,
    "霾": hazeDay,
    "中度霾": hazeDay,
    "重度霾": hazeDay,
    "严重霾": hazeDay,
    "大雾": hazeDay,
    "特强浓雾": hazeDay,
    "雨": rainy,
    "雪": lightSnowy,
    "无": unknown,
    map
}
