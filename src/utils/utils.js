export function getCookie(response, key) {
  const cookies = response.cookies[0]
  // 以一行的开头或者空格作为开头
  const reg = new RegExp(`(^| )${key}=([^;]*)(;|$)`)
  return cookies.match(reg)[2]
}

export function serialize(data) {
  const query = Object.keys(data)
    .map(key => data[key] && `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

  return `?${query}`
}