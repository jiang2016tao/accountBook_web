/**
 * axios配置信息
 * Created by Administrator on 2019/7/30.
 */
import axios from "axios";
axios.defaults.timeout=2000000;
axios.defaults.baseURL="";
axios.interceptors.request.use(config=>{
  config.headers={
    "Content-Type":"application/x-www-form-urlencoded"
  };
  config.params=config.data;
  config.url="http://localhost:8080/accountBook_web/"+config.url+".do"
  return config;
},err=>{
  return Promise.reject(err);
});
axios.interceptors.response.use(response=>{
  return response;
},err=>{
  console.log(err);
  return Promise.reject(err.response.data);
});
export default axios;
