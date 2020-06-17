import axios from 'axios'

let http = axios.create()
http.defaults.baseURL = 'http://10.10.100.216:9900'
// http.defaults.baseURL = 'https://www.feiyanmath.com'

export default http