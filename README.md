# Mobile PDF Viewer

基于 [PDF.js](https://github.com/mozilla/pdf.js) 的轻量 PDF 查看器，最初用于解决 Android 微信内无法直接预览 PDF 的问题。

保留 PDF.js 的查看器能力，并增加了简单的 `url` 查询参数，可以通过链接直接打开指定 PDF。

## 使用

部署 `build/` 目录中的文件，然后通过 `?url=` 传入 PDF 地址：

```text
https://your-domain.com/?url=https%3A%2F%2Fexample.com%2Ffile.pdf
```

URL 参数读取逻辑位于 [`web/app_options.js`](./web/app_options.js)。

> PDF 地址需要允许跨域请求。如果源站没有配置 CORS，可以在服务端开启跨域，或通过自己的代理服务转发文件。

## 开发

```bash
npm install
npm run build
```

项目基于 PDF.js，大部分查看器相关的界面和行为都可以在 `web/` 目录中调整。

## 效果

<p align="center">
  <img src="https://user-images.githubusercontent.com/12481935/84011650-fea44600-a9a8-11ea-87ed-a50d0f11b4a4.png" width="360" alt="Mobile PDF viewer preview" />
</p>

除了移动端浏览器，也可以用于 Electron、VS Code Webview 等场景。

<p align="center">
  <img src="https://user-images.githubusercontent.com/12481935/102684627-38d28800-4215-11eb-886d-fbb4d18faf8a.png" width="720" alt="VS Code preview" />
</p>

## License

Apache-2.0
