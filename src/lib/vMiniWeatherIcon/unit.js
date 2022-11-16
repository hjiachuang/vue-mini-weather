export const checkColor = (color) => {
  return isArray(color) &&
        color.length === 3 &&
        typeof color[0] === 'number' &&
        typeof color[1] === 'number' &&
        typeof color[2] === 'number' &&
        ((color[0] >= 0) && (color[0] <= 255)) &&
        ((color[1] >= 0) && (color[1] <= 255)) &&
        ((color[2] >= 0) && (color[2] <= 255))
}
export const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
export const isArray = (arr) => {
  return Object.prototype.toString.call(arr) === '[object Array]'
}
export const hasOwnProperty = (obj, property) => {
  return Object.prototype.hasOwnProperty.call(obj, property)
}
