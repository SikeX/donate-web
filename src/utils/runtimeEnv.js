export function isWeixn() {
  let ua = window.navigator.userAgent.toLowerCase()
  if (ua.indexOf('micromessenger') !== -1) {
    return true
  }
  return false
}

export function isIos() {
  let ua = window.navigator.userAgent
  if (ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    return true
  }
  return false
}
