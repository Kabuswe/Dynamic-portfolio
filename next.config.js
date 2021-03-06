const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public/images/svg'),
  webpack(config, options) {
    return config
  },
  images: {
    domains: ['media-exp1.licdn.com'],
  },
})