# axios使用  
- http请求时，控制台报以下错误：  
```js
TypeError: Cannot read property 'cancelToken' of undefined
    at throwIfCancellationRequested (dispatchRequest.js?6598:14)
    at dispatchRequest (dispatchRequest.js?6598:26)
```
我是因为在axios的配置里写的有问题。
```js
axios.interceptors.request.use(config=>{
  config.headers={
    "Content-Type":"application/x-www-form-urlencoded"
  };
  config.params=config.data;
  config.url="http://localhost:8080/accountBook_web/"+config.url+".do"
  return config;//这里没有返回
},err=>{
  return Promise.reject(err);
});
```
