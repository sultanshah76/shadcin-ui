/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["m.media-amazon.com"]
    }
}

module.exports = nextConfig
module.exports = {
    eslint: {
      dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },
  }