import React from "react"
import { graphql } from 'gatsby';

import '../styles.scss'

export const query = graphql`
{
  allRestaurant {
    totalCount
    nodes {
      restaurant {
        name
        average_cost_for_two
        featured_image
        location {
          latitude
          longitude
        }
        url
        user_rating {
          aggregate_rating
        }
        id
        photos_url
      }
    }
  }
}
`


export default ({ data }) => {
  return (<main>
    <h2>List of top restaurants in zomato</h2>
    <div className='container'>
      <div className="cards-container">
        {data.allRestaurant.nodes.map(({ restaurant }) => {
          const { name, id, average_cost_for_two, featured_image, photos_url, url, user_rating } = restaurant
          return (<div key={id} className='card'>
            <h3>{name}</h3>
            <p>{average_cost_for_two}</p>
            <img src={featured_image || photos_url} alt={name} />
            <p>{user_rating.aggregate_rating}</p>
            <a href={url}>Go to restaurant page</a>
            {/*   <p>{`${location.latitude}, ${location.longitude}`}</p> */}
          </div>)
        }
        )}
      </div>
    </div>

  </main>)
}
