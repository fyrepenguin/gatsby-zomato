
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})


module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`
  ],
}
