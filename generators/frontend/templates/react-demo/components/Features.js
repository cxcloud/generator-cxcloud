import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHandSpock, faShippingFast, faHeart } from '@fortawesome/fontawesome-free-solid';

export default class extends Component {
  render() {
    const Wrapper = styled.div`
      display: flex;
      max-width: 82em;
      flex-direction: column;
      text-align: center;
      flex-wrap: wrap;
      margin: 0 auto;
      h1 {
        font-size: 1.25rem;
        color: darkslategrey;
        text-transform: uppercase;
      }
      div {
        display: inline-flex;
        margin-top: 1.25rem;
      `;
    const Feature = styled.div`
      display: flex;
      flex-direction: column;
      width: 32em;
      margin: 0 1.875rem;
      line-height: 1.75;
      color: darkslategrey;
        .icon {
          margin: 0.625rem auto;
          margin-bottom: 1.25rem;
          justify-content: center;
        }
        h1 {
          margin: 0;
          text-align: center;
          font-size: 	1rem;
          font-weight: 600;
          color: darkslategrey;
        }
        .heart {
          margin-top: 1.75rem;
          }
        }
      `;
      return(
        <Wrapper>
          <h1>Amazing Features</h1>
          <div>
            <Feature>
              <div className="icon">
              <FontAwesomeIcon icon={faShippingFast} size="4x" color="rgba(47,79,79, 0.6)" />
              </div>
              <h1>Free shipping</h1>
              <p>
                Get free shipping on all orders over €100! and free returns to
                our Finnish return centre! Items are dispatched from the US
                and will arrive in 5-8 days.
              </p>
            </Feature>
            <Feature>
              <div className="icon">
              <FontAwesomeIcon icon={faHandSpock} size="4x" color="rgba(47,79,79, 0.6)" />
              </div>
              <h1>Amazing customer service</h1>
              <p>
                Get Free Shipping on all orders over €100 and and free returns
                to our Finnish return centre. Items are dispatched from the US
                and will arrive in 5-8 days.
              </p>
            </Feature>
            <Feature>
              <div className="icon">
              <FontAwesomeIcon icon={faHeart} size="4x" color="rgba(47,79,79, 0.6)" />
              </div>
              <h1 className="heart">No custom or duty fees!</h1>
              <p>
                We pay these fees so you don't have to! The total billed at
                checkout is rthe final amount you pay, inclusive of VAT, with
                no additional charges at hte time of delivery!
              </p>
            </Feature>
          </div>
      </Wrapper>
    );
  }
}
