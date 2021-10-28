const minimist = require('minimist')

const envSettings = {
  string: 'env',
  default: {
    env: process.env.NODE_ENV || 'development'
  }
}

const options = minimist(process.argv.slice(2), envSettings)
const production = options.env === 'production'

const config = {
  dirs: {
    src: './src',
    dist: './dist'
  },
  envProduction: production
}

const tasks = {
  html: {
    src: `${config.dirs.src}/html/**/*.html`,
    dist: `${config.dirs.dist}`
  },
  scss: {
    src: `${config.dirs.src}/scss/style.scss`,
    dist: `${config.dirs.dist}/css`
  },
  webpack: {
    src: `${config.dirs.src}/js/index.js`,
    dist: `${config.dirs.dist}/js`,
    filename: 'bundle.js'
  },
  watch: {
    html: [`${config.dirs.src}/html/**/*.html`],
    css: [`${config.dirs.src}/scss/**/*.scss`],
    image: [`${config.dirs.src}/images/**/*`],
    webpack: [`${config.dirs.src}/js/**/*.js`]
  },
  images: {
    src: `${config.dirs.src}/images`,
    dist: `${config.dirs.dist}/images`
  },
  fonts: {
    src: `${config.dirs.src}/fonts/**/*`,
    dist: `${config.dirs.dist}/fonts`
  },
  server: {
    browserSyncOptions: {
      server: {
        baseDir: `${config.dirs.dist}`
      },
      open: 'external'
    }
  },
  clean: [config.dirs.dist]
}

config.tasks = tasks
module.exports = config
