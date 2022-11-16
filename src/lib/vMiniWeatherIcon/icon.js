import { isObject } from './unit'
import { sunFill, sunLine, smallSunFill, smallSunLine } from './sun'
import { moonFill, moonLine, smallMoonFill, smallMoonLine } from './moon'
import { cloudFill, cloudLine, cloudyFill, cloudyLine, obliqueCloudFill, obliqueCloudLine } from './cloud'
import { rain } from './rain'
import { snow } from './snow'
import { lightning } from './lightning'
import { hail } from './hail'
import { hazeFill, hazeLine } from './haze'
import { smallFogFill, smallFogLine, fogFill, fogLine } from './fog'
import { floatDust, blowDust } from './dust'
import { windFill, windLine } from './wind'
import { na } from './na'

const lottieTemplate = (assembly) => {
  return {
    v: '5.9.6',
    meta: {
      g: 'LottieFiles AE 1.0.0',
      a: 'Bas Milius',
      k: 'Meteocons, Weather icons, Icon set',
      d: 'Rain - Meteocons.com',
      tc: ''
    },
    fr: 60,
    ip: 0,
    op: 360,
    w: 512,
    h: 512,
    nm: '模板',
    ddd: 0,
    assets: [],
    layers: [...assembly],
    markers: []
  }
}

const fnList = {
  // 晴-白天
  d00: (obj) => {
    if (isObject(obj)) {
      const { sun: sunColor, type } = obj
      const sunFu = type === 'line' ? sunLine : sunFill
      return lottieTemplate([...sunFu(sunColor)])
    } else {
      return lottieTemplate([...sunFill()])
    }
  },
  // 晴-晚上
  n00: (obj) => {
    if (isObject(obj)) {
      const { moon: moonColor, star: starColor, type } = obj
      const moonFu = type === 'line' ? moonLine : moonFill
      return lottieTemplate([...moonFu(moonColor, starColor)])
    } else {
      return lottieTemplate([...moonFill()])
    }
  },
  // 多云-白天
  d01: (obj) => {
    if (isObject(obj)) {
      const { light: lightColor, dark: darkColor, sun: sunColor, type } = obj
      const cloudyFn = type === 'line' ? cloudyLine : cloudyFill
      const smallSunFn = type === 'line' ? smallSunLine : smallSunFill
      return lottieTemplate([...cloudyFn(lightColor, darkColor), ...smallSunFn(sunColor)])
    } else {
      return lottieTemplate([...cloudyFill(), ...smallSunFill()])
    }
  },
  // 多云-晚上
  n01: (obj) => {
    if (isObject(obj)) {
      const { light: lightColor, dark: darkColor, moon: moonColor, type } = obj
      const cloudyFn = type === 'line' ? cloudyLine : cloudyFill
      const smallMoonFn = type === 'line' ? smallMoonLine : smallMoonFill
      return lottieTemplate([...cloudyFn(lightColor, darkColor), ...smallMoonFn(moonColor)])
    } else {
      return lottieTemplate([...cloudyFill(), ...smallMoonFill()])
    }
  },
  // 阴天
  '02': (obj) => {
    if (isObject(obj)) {
      const { light: lightColor, dark: darkColor, type } = obj
      const cloudFn = type === 'line' ? cloudyLine : cloudyFill
      return lottieTemplate([...cloudFn(lightColor, darkColor)])
    } else {
      return lottieTemplate([...cloudyFill()])
    }
  },
  // 小雨
  '07': (obj) => {
    if (isObject(obj)) {
      const { rain: rainColor, cloud: cloudColor, type } = obj
      const cloudFn = type === 'line' ? cloudLine : cloudFill
      return lottieTemplate([...rain('small', rainColor), ...cloudFn(cloudColor)])
    } else {
      return lottieTemplate([...rain('small'), ...cloudFill()])
    }
  },
  // 中雨
  '03': (obj) => {
    if (isObject(obj)) {
      const { rain: rainColor, cloud: cloudColor, type } = obj
      const cloudFn = type === 'line' ? cloudLine : cloudFill
      return lottieTemplate([...rain('medium', rainColor), ...cloudFn(cloudColor)])
    } else {
      return lottieTemplate([...rain('medium'), ...cloudFill()])
    }
  },
  // 大雨
  '09': (obj) => {
    if (isObject(obj)) {
      const { rain: rainColor, cloud: cloudColor, type } = obj
      const cloudFn = type === 'line' ? cloudLine : cloudFill
      return lottieTemplate([...rain('heavy', rainColor), ...cloudFn(cloudColor)])
    } else {
      return lottieTemplate([...rain('heavy'), ...cloudFill()])
    }
  },
  // 小雪
  14: (obj) => {
    if (isObject(obj)) {
      const { snow: snowColor, cloud: cloudColor, type } = obj
      const cloudFn = type === 'line' ? cloudLine : cloudFill
      return lottieTemplate([...snow('small', snowColor), ...cloudFn(cloudColor)])
    } else {
      return lottieTemplate([...snow('small'), ...cloudFill()])
    }
  },
  // 中雪
  13: (obj) => {
    if (isObject(obj)) {
      const { snow: snowColor, cloud: cloudColor, type } = obj
      const cloudFn = type === 'line' ? cloudLine : cloudFill
      return lottieTemplate([...snow('medium', snowColor), ...cloudFn(cloudColor)])
    } else {
      return lottieTemplate([...snow('medium'), ...cloudFill()])
    }
  },
  // 大雪
  16: (obj) => {
    if (isObject(obj)) {
      const { snow: snowColor, cloud: cloudColor, type } = obj
      const cloudFn = type === 'line' ? cloudLine : cloudFill
      return lottieTemplate([...snow('heavy', snowColor), ...cloudFn(cloudColor)])
    } else {
      return lottieTemplate([...snow('heavy'), ...cloudFill()])
    }
  },
  // 雨夹雪
  '06': (obj) => {
    if (isObject(obj)) {
      const { cloud: cloudColor, rain: rainColor, snow: snowColor, type } = obj
      const cloudFn = type === 'line' ? cloudLine : cloudFill
      return lottieTemplate([...rain('medium', rainColor), ...snow('medium', snowColor), ...cloudFn(cloudColor)])
    } else {
      return lottieTemplate([...rain('medium'), ...snow('medium'), ...cloudFill()])
    }
  },
  // 雷阵雨
  '04': (obj) => {
    if (isObject(obj)) {
      const { cloud: cloudColor, rain: rainColor, lightning: lightningColor, type } = obj
      const cloudFn = type === 'line' ? cloudLine : cloudFill
      return lottieTemplate([lightning(lightningColor), ...rain('medium', rainColor), ...cloudFn(cloudColor)])
    } else {
      return lottieTemplate([lightning(), ...rain('medium'), ...cloudFill()])
    }
  },
  // 雷阵雨伴有冰雹
  '05': (obj) => {
    if (isObject(obj)) {
      const { cloud: cloudColor, rain: rainColor, lightning: lightningColor, hail: hailColor, type } = obj
      const cloudFn = type === 'line' ? cloudLine : cloudFill
      return lottieTemplate([...rain('medium', rainColor), ...hail(hailColor), lightning(lightningColor), ...cloudFn(cloudColor)])
    } else {
      return lottieTemplate([...rain('medium'), ...hail(), lightning(), ...cloudFill()])
    }
  },
  // 雾
  18: (obj) => {
    if (isObject(obj)) {
      const { fog: fogColor, cloud: cloudColor, type } = obj
      const smallFogFn = type === 'line' ? smallFogLine : smallFogFill
      const cloudFn = type === 'line' ? cloudLine : cloudFill
      return lottieTemplate([...smallFogFn(fogColor), ...cloudFn(cloudColor)])
    } else {
      return lottieTemplate([...smallFogFill(), ...cloudFill()])
    }
  },
  // 浓雾
  32: (obj) => {
    if (isObject(obj)) {
      const { fog: fogColor, type } = obj
      const fogFn = type === 'line' ? fogLine : fogFill
      return lottieTemplate([...fogFn(fogColor)])
    } else {
      return lottieTemplate([...fogFill()])
    }
  },
  // 霾
  53: (obj) => {
    if (isObject(obj)) {
      const { haze: hazeColor, cloud: cloudColor, type } = obj
      const hazeFn = type === 'line' ? hazeLine : hazeFill
      const cloudFn = type === 'line' ? cloudLine : cloudFill
      return lottieTemplate([...hazeFn(hazeColor), ...cloudFn(cloudColor)])
    } else {
      return lottieTemplate([...hazeFill(), ...cloudFill()])
    }
  },
  // 浮尘
  29: (obj) => {
    if (isObject(obj)) {
      const { dust: dustColor, cloud: cloudColor, type } = obj
      const obliqueCloudFn = type === 'line' ? obliqueCloudLine : obliqueCloudFill
      return lottieTemplate([...floatDust(dustColor), ...obliqueCloudFn(cloudColor)])
    } else {
      return lottieTemplate([...floatDust(), ...obliqueCloudFill()])
    }
  },
  // 扬沙
  20: (obj) => {
    if (isObject(obj)) {
      const { wind: windColor, dust: dustColor, type } = obj
      const windFn = type === 'line' ? windLine : windFill
      return lottieTemplate([...blowDust(dustColor), ...windFn(windColor)])
    } else {
      return lottieTemplate([...blowDust(), ...windFill()])
    }
  },
  // 无
  99: (obj) => {
    if (isObject(obj)) {
      const { text: textColor } = obj
      return lottieTemplate([na(textColor)])
    } else {
      return lottieTemplate([na()])
    }
  },
  '08': (obj) => fnList['03'](obj),
  10: (obj) => fnList['09'](obj),
  11: (obj) => fnList['09'](obj),
  12: (obj) => fnList['09'](obj),
  15: (obj) => fnList['13'](obj),
  17: (obj) => fnList['16'](obj),
  19: (obj) => fnList['03'](obj),
  21: (obj) => fnList['07'](obj),
  22: (obj) => fnList['03'](obj),
  23: (obj) => fnList['09'](obj),
  24: (obj) => fnList['09'](obj),
  25: (obj) => fnList['09'](obj),
  26: (obj) => fnList['14'](obj),
  27: (obj) => fnList['13'](obj),
  28: (obj) => fnList['16'](obj),
  30: (obj) => fnList['20'](obj),
  31: (obj) => fnList['20'](obj),
  49: (obj) => fnList['32'](obj),
  54: (obj) => fnList['53'](obj),
  55: (obj) => fnList['53'](obj),
  56: (obj) => fnList['53'](obj),
  57: (obj) => fnList['32'](obj),
  58: (obj) => fnList['32'](obj),
  d301: (obj) => fnList['03'](obj),
  d302: (obj) => fnList['13'](obj)
}

export default fnList
