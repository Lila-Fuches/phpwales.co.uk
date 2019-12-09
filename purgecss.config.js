module.exports = {
  whitelist: ['html', 'body', 'markdown'],
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.md'
  ],
  extractors: [{
    extensions: ['vue', 'js', 'jsx', 'md'],
    extractor: class TailwindExtractor {
      static extract(content) {
        return content.match(/[\w-/:]+(?<!:)/g) || []
      }
    },
  }],
}
