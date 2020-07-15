import React from "react"
import { Typography, Layout } from "antd";
import 'antd/dist/antd.css'

import '../styles.scss'

import CardsContainer from "../components/cards";



const { Title } = Typography
const { Header, Content, Footer } = Layout

const IndexPage = () => {


  return (
    <Layout>
      <Header className='header' style={{ height: 78 }}>
        <Title>List of top restaurants in Chennai</Title>
      </Header>
      <Content style={{ paddingTop: '3rem' }}>
        <CardsContainer />
      </Content>
      <Footer>
        Developed By
        <a href="https://www.github.com/fyrepenguin" target='_blank' rel="noreferrer">Mourya</a>
      </Footer>
    </Layout>)
}


export default IndexPage
