/**
 * Tidory Configuration
 * https://tidory.com/docs/configuration/
 */
module.exports = {
  ts_session: '', /*크롬 개발자도구-Application-Storage-Cookies-TSSESSION값*/
  url: '', /*개인 블로그 주소*/

  preview: {
    /**
     * homeType
     *
     * NONE
     * COVER
     */
    homeType: 'NONE',

    /**
     * Preview Mode
     *
     * index
     * entry
     * category
     * tag,
     * location
     * media,
     * guestbook
     */
    mode: 'category'
  },

  alias: {
    '@': 'assets',
    '~views': 'views'
  },

  /**
   * Webpack Configuration
   *
   * @param {object} webpackConfig
   */
  extends (webpackConfig) {
    webpackConfig.module.rules = [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      ...webpackConfig.module.rules
    ]

    webpackConfig.entry = {
      vendor: './assets/vendor.js',
      ...webpackConfig.entry
    }
  }
}
