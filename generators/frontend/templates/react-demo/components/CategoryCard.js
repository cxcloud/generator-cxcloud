import React, { Component } from 'react'
import Link from 'next/link'
import Util from '../common/Util'
import styled from 'styled-components'

export default ({ id, name }) => {

  const Wrapper = styled.div`
    color: darkslategrey;
    margin: 40px 20px auto 20px;
    width: 14em;
    border-color: transparent;
    height: 10em;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
    background-color: whitesmoke;
    div {
      padding: 20px;
      font-size: 16px;
      text-transform: uppercase;
      background-color: rgba(255,255,255, 0.9);
    }
    :first-child {
      background-image: url(http://www.pngmart.com/files/3/Beautiful-Girl-Transparent-Background.png);
      background-repeat: no-repeat;
      background-position-x: -32px;
      background-size: cover;
    }
    :nth-child(2) {
      background-image: url(http://www.pngmart.com/files/1/Women-Bag-Transparent-Background.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    :nth-child(3) {
      background-image: url(http://www.pngmart.com/files/3/Branded-Watch-PNG-Pic.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
    :nth-child(4) {
      background-image: url(http://www.pngmart.com/files/3/Sunglasses-PNG-Transparent-Image.png);
      background-position-y: 28px;
      background-position-x: -8px;
      background-repeat: no-repeat;
      background-size: cover;
    }
    :nth-child(5) {
      background-image: url(http://www.pngmart.com/files/7/Guy-Transparent-Images-PNG.png);
      background-position-y: 10px;
      background-position-x: 62px;
      background-repeat: no-repeat;
      background-size: cover;
    }
    :nth-child(6) {
      background-image: url(http://www.pngmart.com/files/5/Purse-PNG-File.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  `
  return (
    <Wrapper>
      <Link href={`/CategoryPage?name=${name}&id=${id}`}>
        <div>
          <a>
            {name}
          </a>
        </div>
      </Link>

    </Wrapper>
  );
}
