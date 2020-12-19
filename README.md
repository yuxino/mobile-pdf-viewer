安卓微信浏览器不支持打开 pdf。解决这个东西有个办法就是使用`mozilla`家的[pdf.js](https://github.com/search?q=pdf+reader&type=Repositories)。但是这玩意属实有点古老了用的还是`gulp`。虽然里边也有`webpack`的案例，但是没什么卵用。

公司有个需求是在微信里面也要能打开 pdf，那唯一的办法就是自己用 js 使浏览器支持 pdf。样子倒是没太讲究能用就行，于是我魔改了官方`example/mobile-viewer`目录下的文件。单独导出在了自己的[项目](https://github.com/yuxino/mobile-pdf-viewer)里。如果有人也有这个需求尽管 fork 或者克隆下来用就可以了，通过`build`打包出来就完事了。唯一可能要改的地方就是这[一行](https://github.com/yuxino/mobile-pdf-viewer/blob/master/src/index.js#L18)

我在这里是想直接通过把`query`里面的`url`当做参数来展示 pdf 的。比如这样

> http://mqpdf.surge.sh/?url=http://121.199.30.170:10000/site?url=https://web.mit.edu/alexmv/6.037/sicp.pdf

这里有一个可能会遇到的问题是，文件有跨域的问题，这个需要服务端和运维配合你修改，如果是自家的服务器，改一下很容易，如果不是自己家的话，可能你得开个代理服务器去做这个事情。

我这里开了一个代理

最终效果会是这样的

![image](https://user-images.githubusercontent.com/12481935/84011650-fea44600-a9a8-11ea-87ed-a50d0f11b4a4.png)

其实可以做得更完美一点，区分一下系统，iOS 微信是支持 pdf 的。直接用自带的打开就好了，自带的有个好处，不会显示进度条，就是内个下载的进度条。而且打开速度也很快。这里木有做特意的区分，如果你需要的话可以 fork 项目直接修改做一个重定向, 或者直接在跳转之前在你项目里面做。

![image](https://user-images.githubusercontent.com/12481935/84011841-46c36880-a9a9-11ea-8665-756c66d928e9.png)

关于这个下载进度条，其实是这样的，因为 pdf.js 只能把 pdf 转成图片，大概是因为转成图片比处理 pdf 奇奇怪怪的样式之类的容易吧，它是一个同步的过程，需要读文件的 IO，然后转，所以会有个进度条慢慢的在处理。

遇到大文件的时候速度可能会比较慢。

不过这个滚动条吧，我一开始是很排斥的，但是直到我有一天在百度云看书，发现百度云也有 ... 然后我就释怀了。

## 使用方法

直接把 build 那份文件夹拷出来就可以了。如果需要自己修改的话可以更改 web 那份代码。src 那个没必要动了，如果有必要也可以改, 我只改了这里接收[参数](https://github.com/yuxino/mobile-pdf-viewer/blob/master/web/app_options.js#L18-L24)的方式目前
