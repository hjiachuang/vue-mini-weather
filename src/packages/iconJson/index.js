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
    "00": day,
    "01": cloudySun,
    "02": cloudySun,
    "03": rainCloud,
    "04": lightning,
    "05": stormy,
    "06": lightSnowy,
    "07": rainCloud,
    "08": rainy,
    "09": torrentialRain,
    "10": torrentialRain,
    "11": torrentialRain,
    "12": torrentialRain,
    "13": lightSnowy,
    "14": lightSnowy,
    "15": lightSnowy,
    "16": lightSnowy,
    "17": snowStorm,
    "18": hazeDay,
    "19": torrentialRain,
    "20": hazeDay,
    "21": rainCloud,
    "22": rainy,
    "23": torrentialRain,
    "24": torrentialRain,
    "25": torrentialRain,
    "26": lightSnowy,
    "27": lightSnowy,
    "28": snowStorm,
    "29": hazeDay,
    "30": hazeDay,
    "31": hazeDay,
    "32": hazeDay,
    "49": hazeDay,
    "53": hazeDay,
    "54": hazeDay,
    "55": hazeDay,
    "56": hazeDay,
    "57": hazeDay,
    "58": hazeDay,
    "301": rainy,
    "302": lightSnowy,
    "99": unknown,
    map
}