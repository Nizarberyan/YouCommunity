const mix = require("laravel-mix");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

mix.js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .options({
        processCssUrls: false,
    })
    .webpackConfig({
        plugins: [
            new BrowserSyncPlugin({
                proxy: "localhost",
                files: [
                    "app/**/*",
                    "resources/views/**/*",
                    "resources/js/**/*",
                    "resources/sass/**/*",
                    "routes/**/*",
                ],
                notify: false,
            }),
        ],
    });
