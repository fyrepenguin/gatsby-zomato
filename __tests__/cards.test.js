import React from 'react';

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer';
import CardsContainer from './../src/components/cards';

afterEach(cleanup)

describe("Cards", () => {
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
  it("Cards Renders correctly", () => {
    const tree = renderer.create(<CardsContainer data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the Image Correctly', () => {
    const src = 'https://b.zmtcdn.com/data/pictures/chains/7/18750387/9a3be91fd9a330cdf19b118c90b7beea.jpg?output-format=webp'
    const { getByTestId } = render(<CardsContainer data={data} />)
    expect(getByTestId('card-img').src).toEqual(src)
  })

  it('renders the Restaurant Name Correctly', () => {
    const name = "K Foods"
    const { getByText } = render(<CardsContainer data={data} />)
    expect(getByText(name)).toBeInTheDocument()
  })

  it('renders the Average Price Correctly', () => {
    const price = '400'
    const { getByTestId } = render(<CardsContainer data={data} />)
    expect(getByTestId('price')).toHaveTextContent(price)
  })

  it('renders the Restaurant Rating Correctly', () => {
    const rating = "3.8"
    const { getByTestId } = render(<CardsContainer data={data} />)
    expect(getByTestId('rating')).toHaveTextContent(rating)
  })

  it('renders the Restaurant Link Correctly', () => {
    const restaurantLink = "https://www.zomato.com/chennai/k-foods-porur?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1"
    const { getByTitle } = render(<CardsContainer data={data} />)
    expect(getByTitle('Restaurant Page').href).toEqual(restaurantLink)
  })

  it('renders the Location Link Correctly', () => {
    const locationLink = "https://maps.google.com/?q=13.0193335601,80.1426019147"
    const { getByTitle } = render(<CardsContainer data={data} />)
    expect(getByTitle('location').href).toEqual(locationLink)
  })
})
