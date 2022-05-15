module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  outputDir : 'docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Online_Dating_App/'
    : '/',
  assetsDir: './',
}
