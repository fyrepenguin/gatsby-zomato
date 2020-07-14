import React from "react"
import { graphql } from 'gatsby';
import { Divider, Card, Typography, Layout } from "antd";
import 'antd/dist/antd.css'

import palceholderImage from '../assets/placeholder.jpg'
import '../styles.scss'

const { Title, Paragraph, Text } = Typography
const { Header, Content, Footer } = Layout

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


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Header className='header' style={{ height: 78 }}><Title>List of top restaurants in Chennai</Title></Header>
      <Content style={{ paddingTop: '3rem' }}>
        <div className='container'>
          <div className="cards-container">
            {data.allRestaurant.nodes.map(({ restaurant }) => {
              const { name, id, average_cost_for_two, featured_image, url, user_rating, location } = restaurant
              return (

                <Card hoverable key={id} cover={<img src={featured_image || palceholderImage} alt={name} />}>
                  <Title level={3}>{name}</Title>
                  <Paragraph><Text strong>Average Price: </Text>₹{average_cost_for_two}</Paragraph>
                  <Paragraph><Text strong>User Rating: </Text>{user_rating.aggregate_rating}/5</Paragraph>
                  <div className='links'>

                    <a href={url} target='_blank' rel="noreferrer">View More</a>
                    <Divider type='vertical' style={{ height: 'auto', borderColor: "rgba(0,0,0,0.65)" }} />
                    <a href={`https://maps.google.com/?q=${location.latitude},${location.longitude}`} target='_blank' rel="noreferrer">View Location</a>
                  </div>
                </Card>
              )

            }
            )}
          </div>
        </div>
      </Content>
      {/* <div key={id} className='card'>
            <div className='img-container'>
              <img src={featured_image || palceholderImage} alt={name} />
            </div>

            <h3>{name}</h3>
            <Paragraph>Average Cost for 2 persons: {average_cost_for_two}</Paragraph>
            <Paragraph>Rating: {user_rating.aggregate_rating}</Paragraph>
            <div className='links'>
              <a href={url} target='_blank' rel="noreferrer">Go to restaurant page</a>
              <Divider type="vertical" />
              <a href={`https://maps.google.com/?q=${location.latitude},${location.longitude}`} target='_blank' rel="noreferrer">View On Map</a>
            </div>

          </div> */}
      <Footer>Developed By <a href="https://www.github.com/fyrepenguin" target='_blank' rel="noreferrer">Mourya</a></Footer>
    </Layout>)
}

export default IndexPage
