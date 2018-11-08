import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

export default ({ id, name, image, description, price, currency, title }) => {
  const Wrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: left;
    margin: 1.25rem 0rem;
    padding: 1.25rem 1.87rem;
    max-width: 16em;
    min-height: 24em;
    margin: 1.25rem;
    width: 100%;
    font-weight: bold;
    box-shadow: inset 0rem 0rem 0.81rem -0.31rem darkslategrey;
    border-radius: 0.18rem;
    a {
      width: 100%;
      text-decoration: none;
      color: darkslategrey;
      font-size: 0.87rem;
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
    }`;
  const Title = styled.h1`
    font-weight: bold;
    font-size: 1.25rem;`;
  const Price = styled.p`
    padding-top: 0.62rem;
    border-top: 0.12rem solid rgba(204, 204, 204, 0.4);
  `;
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
