import React, { Component } from 'react'
import Link from 'next/link'
import Util from '../common/Util'
import styled from 'styled-components'

export default class extends Component {

  render() {
    const Wrapper = styled.div`
      @media only screen and (max-width: 480px) {display: flex;
      flex-direction: column;
    }
    background-image: url('https://www.zastavki.com/pictures/originals/2013/Girls___Beautyful_Girls___Girl_on_white_background_041541_.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 8.75rem;
    height: 50em;
    width: 100%;
    div {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 16%;
      h2 {
        font-size: 2.25rem;
        margin: 0;
      }
      h1 {
        margin: 0;
        font-size: 3.125rem;
        text-transform: uppercase;
      }
    }
  `;
  return(
    <Wrapper>
      <div>
      <h2>Welcome to</h2>
      <h1>CX-Cloud E-shop</h1>
      </div>
    </Wrapper>
    )
  }
}
