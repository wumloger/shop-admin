import axios from 'axios'
// import { useCookies } from "@vueuse/integrations/useCookies";
import { ElNotification } from 'element-plus'
import { toast } from '~/utils/toast'
import { getToken } from '~/utils/auth'

const service = axios.create({
    baseURL: "http://127.0.0.1:4523/m1/2571711-0-default/api"
})
//添加请求拦截
service.interceptors.request.use(
    function (config) {
        //向header中添加token
        const token = getToken()
        if (token) {
            config.headers['token'] = token
        }
        return config;
    },
    function (error) {
        return Promise.reject(error)
    }
)
//添加响应拦截
service.interceptors.response.use(
    function (response) {
        return response.data
    },
    function (error) {
        //对于响应信息的处理
        toast('响应失败', 'error')
        return Promise.reject(error)
    }
)


export default service