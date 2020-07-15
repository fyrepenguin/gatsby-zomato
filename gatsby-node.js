
// Load the api key as env variable
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

// get data from zomato api
const axios = require('axios')

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions
  const { data } = await axios({
    method: 'GET',
    headers: {
      "user-key": process.env.ZOMATO_API_KEY
    },
    url: 'https://developers.zomato.com/api/v2.1/search',
    params: {
      "entity_id": '7',
      "entity_type": "city",
      "collection_id": '1',
      "count": 25
    }
  }).catch(err => console.log(err.message));

  const restaurants = data.restaurants
  restaurants.forEach(res => {
    createNode({
      ...res,
      id: createNodeId(`Restaurant-${res.restaurant.id}`),//req
      internal: {
        type: 'Restaurant',//req
        contentDigest: createContentDigest(res),//req
      }
    })
  })
}
