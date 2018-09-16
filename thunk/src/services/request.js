const urlPrefix = ''
const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent

function filterJSON (res) {
    return res.json()
  }

function filterStatus (res) {
    if (res.status >= 200 && res.status < 300) {
      return res
    }	else {
      let error = new Error(res.statusText)
      error.res = res
      error.type = 'http'
      throw error
    }
  }
  
  

export function get (url, params, header) {
    url = urlPrefix + url
  
    if (isDebuggingInChrome) {
      console.info('GET: ', url)
      console.info('Params: ', params)
    }
  
    return fetch(url, header)
          .then(filterStatus)
          .then(filterJSON)
  }
  