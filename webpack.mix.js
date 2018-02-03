let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss')

mix .setPublicPath('docs')
    .sass('./src/css/app.scss', './docs/css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })
    .js('./src/js/app.js', './docs/js')
    .copy('./src/index.html', './docs');