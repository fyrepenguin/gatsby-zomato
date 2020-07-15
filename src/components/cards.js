import React from 'react'
import { Divider, Card, Typography } from "antd";

import palceholderImage from '../assets/placeholder.jpg'


const { Title, Paragraph, Text } = Typography

export const CardsContainer = ({ data }) => {
  const { allRestaurant } = data

  return (<div className="cards-container">
    {allRestaurant.nodes.length > 0 ? allRestaurant.nodes.map(({ restaurant }) => {
      const { name, id, average_cost_for_two, featured_image, url, user_rating, location } = restaurant
      return (
        <Card hoverable key={id} cover={<img data-testid="card-img" src={featured_image || palceholderImage} alt={name} style={{
          cursor: 'initial',
          borderRadius: '0.5rem'
        }} />}>
          <Title level={3}>{name}</Title>
          <Paragraph data-testid='price'><Text strong>Average Price: </Text>{`₹ ${average_cost_for_two}`}</Paragraph>
          <Paragraph data-testid='rating'><Text strong>User Rating: </Text>{`${user_rating.aggregate_rating} /5`}</Paragraph>
          <div className='links'>

            <a title='Restaurant Page' href={url} target='_blank' rel="noreferrer">View More</a>
            <Divider type='vertical' style={{ height: 'auto', borderColor: "rgba(0,0,0,0.65)" }} />
            <a title='location' href={`https://maps.google.com/?q=${location.latitude},${location.longitude}`} target='_blank' rel="noreferrer">View Location</a>
          </div>
        </Card>
      )
    }
    ) : <div>No Data Found</div>}
  </div>
  )
}



export default CardsContainer