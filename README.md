# aswsome

> aswsome

## getting start

```bash
npm install
```

## file structure

* `src/*`: all source code
* `app.js`: entrance of the Weex page
* `build/*`: some build scripts
* `dist/*`: where places generated code
* `assets/*`: some assets for Web preview
* `index.html`: a page with Web preview and qrcode of Weex js bundle
* `weex.html`: Web render
* `.babelrc`: babel config (preset-2015 by default)
* `.eslintrc`: eslint config (standard by default)

## npm scripts

```bash
# build both two js bundles for Weex and Web
npm run build

# build the two js bundles and watch file changes
npm run dev

# start a Web server at 8080 port
npm run serve

# start weex-devtool for debugging with native
npm run debug
```

## notes

You can config more babel, ESLint and PostCSS plugins in `webpack.config.js`

### LOG
* weex 默认宽高 宽：720px=100%         高：1250px =100%

### weex命令
* 初始化项目
        weex init name
        npm install(安装依赖)
        npm run dev(watch模式,实时更新代码)
        npm run serve(服务器)
* 实时预览
        weex src/foo.vue(单页预览)
        weex src --entry src/foo.vue(项目预览)
* 打包项目
        weex compile src/foo.vue dist
* debug
        weex debug src/foo.vue (debug 指定页面)

