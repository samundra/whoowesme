import axios from 'axios'
import config from './config'

const instance = axios.create()

instance.defaults.baseURL = config.apiBaseUrl

// By default, we want to use application/json as content-type
instance.defaults.headers.common['access-control-allow-origin'] = ['*']

// If we have access token then send access token with every request
const token = localStorage.getItem('accesstoken') ? localStorage.getItem('accesstoken') : null

if (token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  instance.defaults.headers.post['Authorization'] = `Bearer ${token}`
}

// Default Timeout is set to 5 seconds
instance.defaults.timeout = 5000 // 5seconds

export default instance
