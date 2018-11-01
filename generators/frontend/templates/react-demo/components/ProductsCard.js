import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export default ({ id, name, image, description, price, currency, title }) => {
  const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: left;
    margin: 20px 0px 20px 0px;
    padding: 20px 30px 20px 30px;
    max-width: 16em;
    min-height: 24em;
    margin: 20px;
    width: 100%;
    font-weight: bold;
    box-shadow: inset 0px 0px 13px -5px darkslategrey;
    border-radius: 3px;
    a {
      width: 100%;
      text-decoration: none;
      color: darkslategrey;
      font-size: 14px;
      font-weight: 500;
      text-transform: capitalize;
      .description {
        display: flex;
        flex-direction: column;
      }
    }
    a:hover {
      color: #3a4048;
    }
    a:visited {
      color: darkslategrey;
    }
  `
  const Title = styled.h1`
    font-weight: bold;
    font-size: 20px;
  `
  const Price = styled.p`
    padding-top: 10px;
    border-top: 2px solid rgba(204, 204, 204, 0.4);
  `
  const priceInEuro = (price / 100).toFixed(2);

  return(
    <Wrapper>
      <Link href={`/ProductPage?id=${id}`}>
        <a>
          <div>
            <img src={image} width="180" height="240" alt="" />
          </div>
          <div className="description">
            <Title>{name}</Title>
            <p>{description}</p>
            <Price>
              {priceInEuro} {currency}
            </Price>
          </div>
        </a>
      </Link>
    </Wrapper>
  );
}
