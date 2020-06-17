import axios from 'axios'

let http = axios.create()
// http.defaults.baseURL = 'http://10.10.10.19:9900'
http.defaults.baseURL = 'http://api.fengtengge.com/'
// http.defaults.baseURL = 'https://www.feiyanmath.com'

export default http