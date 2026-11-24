const path = require('path')

// The folders containing files importing twin.macro
const includedDirs = [path.resolve(__dirname, 'src')]

module.exports = function withTwin(nextConfig) {
  return {
    ...nextConfig,
    webpack(config, options) {
      const { dev } = options

      config.module = config.module || {}
      config.module.rules = config.module.rules || []
      // Runs before Next's own layer-aware SWC rules (enforce: 'pre'), so the
      // macro is expanded once and SWC still handles RSC/'use client' per layer.
      // Babel only parses TypeScript here; SWC does the actual TS/JSX transform.
      config.module.rules.push({
        test: /\.(tsx|ts)$/,
        include: includedDirs,
        enforce: 'pre',
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              configFile: false,
              sourceMaps: dev,
              plugins: [
                require.resolve('babel-plugin-twin'),
                require.resolve('babel-plugin-macros'),
                [
                  require.resolve('babel-plugin-styled-components'),
                  { ssr: true, displayName: true },
                ],
                [
                  require.resolve('@babel/plugin-syntax-typescript'),
                  { isTSX: true },
                ],
              ],
            },
          },
        ],
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }
      return config
    },
  }
}
