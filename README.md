# Mobile PDF Viewer

A lightweight mobile PDF viewer based on [PDF.js](https://github.com/mozilla/pdf.js), originally made for previewing PDFs inside Android WeChat.

It keeps the PDF.js viewer UI and adds a simple `url` query parameter so a PDF can be opened directly from a link.

## Usage

Deploy the contents of `build/`, then pass the PDF URL through `?url=`:

```text
https://your-domain.com/?url=https%3A%2F%2Fexample.com%2Ffile.pdf
```

The URL is read in [`web/app_options.js`](./web/app_options.js).

> The PDF source must allow cross-origin requests. If it does not, you will need to configure CORS on the server or proxy the file through your own service.

## Development

```bash
npm install
npm run build
```

The project is based on PDF.js, so most viewer behavior can be customized under `web/`.

## Preview

<p align="center">
  <img src="https://user-images.githubusercontent.com/12481935/84011650-fea44600-a9a8-11ea-87ed-a50d0f11b4a4.png" width="360" alt="Mobile PDF viewer preview" />
</p>

It also works outside mobile browsers, for example inside Electron or VS Code webviews.

<p align="center">
  <img src="https://user-images.githubusercontent.com/12481935/102684627-38d28800-4215-11eb-886d-fbb4d18faf8a.png" width="720" alt="VS Code preview" />
</p>

## License

Apache-2.0
