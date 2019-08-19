const purgecss = require("@fullhuman/postcss-purgecss");

/**
 * Custom PurgeCSS Extractor
 * https://github.com/FullHuman/purgecss
 */
class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g);
  }
}

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({
      features: {
        "nesting-rules": true,
        "custom-properties": true,
        "color-mod-function": true
      }
    }),
    process.env.NODE_ENV === 'production' &&
      purgecss({
        content: ["**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
        css: ["./src/**/*.css"],
        extractors: [
          {
            extractor: TailwindExtractor,
            // Specify the file extensions to include when scanning
            extensions: ["html", "js", "jsx", "css"]
          }
        ]
      })
  ]
}
