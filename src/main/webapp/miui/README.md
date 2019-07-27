# cnpm安装  
由于我们被墙的厉害,在着网络的慢，所以使用npm下载模块时候会发现效率真的很慢，所以推荐淘宝的镜像，安装说明 推荐：
```js
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```
安装cnpm，安装成功以后，将npm改成使用cnpm安装模块即可，简单，省事

# vue中的全局样式  
我们使用全局样式可以在在入口函数里直接引用特别是ui框架的样式。  
```js
import "../static/css/ui/css/lib/animate.min.css";
import "../static/css/ui/css/lib/app.min.1.css";
import "../static/css/ui/css/lib/app.min.2.css";
import "../static/css/ui/css/lib/sweetalert.css";
import "../static/css/ui/css/material-design-iconic-font/dist/css/material-design-iconic-font.min.css";
```
在[main.js](./src/main.js)  
