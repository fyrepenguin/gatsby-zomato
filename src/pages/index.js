import React from "react"
import { graphql } from 'gatsby';
import { Typography, Layout } from "antd";

import 'antd/dist/antd.css'
import '../styles.scss'

import CardsContainer from "../components/cards";


const { Title } = Typography
const { Header, Content, Footer } = Layout

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <Header className='header'>
        <Title>List of top restaurants in Chennai</Title>
      </Header>
      <Content style={{ paddingTop: '3rem' }}>
        <CardsContainer data={data} />
      </Content>
      <Footer>
        {`Developed By `}
        <a href="https://www.github.com/fyrepenguin" target='_blank' rel="noreferrer">Mourya</a>
      </Footer>
    </Layout>)
}
// Gets data of restaurants
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
export default IndexPage
