import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer';
import { useStaticQuery } from 'gatsby';

import IndexPage from '../src/pages';

useStaticQuery.mockImplementationOnce(() => ({
  allRestaurant: {
    totalCount: 30,
    nodes: [
      {
        restaurant: {
          name: "K Foods",
          average_cost_for_two: 400,
          featured_image: "https://b.zmtcdn.com/data/pictures/chains/7/18750387/9a3be91fd9a330cdf19b118c90b7beea.jpg?output-format=webp",
          location: {
            latitude: "13.0193335601",
            longitude: "80.1426019147"
          },
          url: "https://www.zomato.com/chennai/k-foods-porur?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
          user_rating: {
            "aggregate_rating": "3.8"
          },
          id: 18750387,
          photos_url: "https://www.zomato.com/chennai/k-foods-porur/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop"
        }
      }
    ]
  }
}))

afterEach(cleanup)

describe("Index", () => {
  const data = {
    allRestaurant: {
      totalCount: 30,
      nodes: [
        {
          restaurant: {
            name: "K Foods",
            average_cost_for_two: 400,
            featured_image: "https://b.zmtcdn.com/data/pictures/chains/7/18750387/9a3be91fd9a330cdf19b118c90b7beea.jpg?output-format=webp",
            location: {
              latitude: "13.0193335601",
              longitude: "80.1426019147"
            },
            url: "https://www.zomato.com/chennai/k-foods-porur?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            user_rating: {
              "aggregate_rating": "3.8"
            },
            id: 18750387,
            photos_url: "https://www.zomato.com/chennai/k-foods-porur/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop"
          }
        }
      ]
    }
  }
  it("IndexPage Renders correctly", () => {
    const tree = renderer.create(<IndexPage data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Layout correctly', () => {
    const { container } = render(<IndexPage data={data} />)
    expect(container.querySelector('.ant-layout')).toBeInTheDocument()
  })

  it('renders Header correctly', () => {
    const { container } = render(<IndexPage data={data} />)
    expect(container.querySelector('header')).toBeInTheDocument()
  })

  it('renders Header text correctly', () => {
    const { container } = render(<IndexPage data={data} />)
    expect(container.querySelector('header h1')).toHaveTextContent('List of top restaurants in Chennai')
  })

  it('renders Content correctly', () => {
    const { container } = render(<IndexPage data={data} />)
    expect(container.querySelector('main')).toBeInTheDocument()
  })
  it('renders Content children correctly', () => {
    const { container } = render(<IndexPage data={data} />)
    expect(container.querySelector('.cards-container')).toBeInTheDocument()
  })

  it('renders Footer correctly', () => {
    const { container } = render(<IndexPage data={data} />)
    expect(container.querySelector('footer')).toBeInTheDocument()
  })

  it('renders Footer text correctly', () => {
    const { container } = render(<IndexPage data={data} />)
    expect(container.querySelector('footer')).toHaveTextContent('Developed By Mourya')
  })
})