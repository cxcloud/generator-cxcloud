import React, { Component } from 'react'
import CategoriesList from './CategoriesList'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/fontawesome-free-solid'

export default ({
  id,
  name,
  image,
  priceInEuro,
  currency,
  sku,
  color,
  size
}) => {
  const Wrapper = styled.div`
    margin: 10em auto auto auto;
    display: flex;
    justify-content: center;
    padding: 1.25rem 2.5rem;
    text-transform: capitalize;
    color: darkslategrey;`;
  const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    .price {
      font-weight: bold;
    }
    @media only screen and (max-width: 580px) {display: flex;
      flex-direction: column;}`;
  const ProductImg = styled.div`
    text-align: center;
    max-width: 30em;`;
  const ProductInfo = styled.div`
    max-width: 50em;
    @media only screen and (max-width: 1100px) {padding: 0 2.5rem;
      line-height: 1.62rem;}
    h1 {
      font-weight: bold;
      font-size: 1.75rem;
      color: darkslategray;
    }`;
  const Rating = styled.div`
    display: inline-flex;
    align-items: center;
    p {
      margin-left: 0.93rem;
      a {
        color: lightgray;
        :visited {
          color: #000000;
        }
      }
    }`;
  const Cart = styled.div`
    button {
      padding: 0.93rem 1.25rem;
      border-radius: 0.12rem;
      background-color: #fff;
      color: #d3b756
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      box-shadow: inset 0rem 0rem 0.5rem -0.18rem darkslategrey;
      :hover {
        border-color: transparent;
        background-color: rgba(89, 85, 85, 0.1);
        color: darkslategrey;
      }
    }
  `;
  return(
    <Wrapper>
      <ProductContainer>
        <ProductImg>
          <img height="640" width="480" src={image} alt="blank" />
        </ProductImg>
        <ProductInfo>
          <div>
            <h1>{name}</h1>
            <p>{sku}</p>
          </div>
          <Rating>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <p>
              <a href="">Write first review</a>
            </p>
          </Rating>
          <p>Color: {color}</p>
          <p>Size: {size}</p>
          <p className="price">€ {priceInEuro}</p>
          <Cart>
            <button>Add to cart</button>
          </Cart>
        </ProductInfo>
      </ProductContainer>
    </Wrapper>
  );
}
