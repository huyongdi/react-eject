web-hydtype
### 1.下载依赖
```bash
cnpm i jquery
cnpm i bootstrap@

```
### 2.webpack配置文件内增加：
```bash
var webpack = require("webpack");
module.exports = {
    resolve: {
            alias: {'jquery':'jquery'}
    },
    plugins: [
        new webpack.ProvidePlugin({
          $:"jquery",
          jQuery:"jquery",
        })
    ], 
}
```
### 3.如果要引用bootstrap
```bash
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
```
