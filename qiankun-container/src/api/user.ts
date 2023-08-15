import http from '../utils/http'
export const getUrserLogin = (data:{})=>{
   return http({
        url:'/main/users/login',
        method:'post',
        data
    })
}