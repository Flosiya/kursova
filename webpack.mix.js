const mix = require('laravel-mix');
const SVGSprite = require('svg-spritemap-webpack-plugin');
const path = require('path');

mix.setPublicPath(path.normalize('public'));

mix.webpackConfig({
    resolve: {
        alias: {
            '@node': path.resolve(__dirname, 'node_modules'),
            '@': path.resolve(__dirname, 'resources/assets/js/'),
            '@scss': path.resolve(__dirname, 'resources/assets/scss'),
            '@base': path.resolve(__dirname, 'resources/assets/scss/base'),
            '@components': path.resolve(__dirname, 'resources/assets/scss/components'),
            '@header': path.resolve(__dirname, 'resources/assets/scss/layouts/header'),
            '@footer': path.resolve(__dirname, 'resources/assets/scss/layouts/footer'),
            '@pages': path.resolve(__dirname, 'resources/assets/scss/pages'),
            '@ui': path.resolve(__dirname, 'resources/assets/scss/ui'),
            // '@admin-text': path.resolve(__dirname, 'resources/assets/scss/admin-text'),
            '@globals': path.resolve(__dirname, 'resources/assets/scss/global-styles.scss'),
        }
    },
});

mix.webpackConfig({
    plugins: [
        new SVGSprite('./src/img/*.svg', {
            output: {
                filename: './img/sprite.svg',
                chunk: {
                    keep: true,
                },
            },
            sprite: {
                prefix: false,
            }
        }),
    ]
});

mix.version(["public/img/sprite.svg"]);

mix.js('src/js/index.js',  'js');
mix.sass('src/scss/index.scss', 'css');
mix.browserSync({
    files: [ 
    "./src/*",
    "./index.html"
    ],
    notify: false,
    proxy: "http://127.0.0.1:5500",
});