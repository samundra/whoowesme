import axios from 'axios'
import config from './config'

const instance = axios.create()

instance.defaults.baseURL = config.apiBaseUrl

// If we have access token then send access token with every request
const accessToken = localStorage.getItem('access_token') || undefined
if (accessToken) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
}

// By default, we want to use application/json as content-type
instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.defaults.headers.post['Access-Control-Allow-Origin'] = ['*']

// Default Timeout is set to 5 seconds
instance.defaults.timeout = 5000 // 5seconds

export default instance
