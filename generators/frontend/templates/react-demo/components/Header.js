import React, { Component } from 'react'
import Link from 'next/link'
import Util from '../common/Util'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHandSpock, faShippingFast, faHeart, faAngleDown } from '@fortawesome/fontawesome-free-solid'

export default class extends Component {
  render() {
    const Wrapper = styled.div`
      margin: 1.25rem;
      flex-direction: row;
      list-style: none;
      display: flex;
      width: contain;
      justify-content: space-between;
      ul {
        padding-right: 2.5rem;
        display: flex;
        li {
          display: flex;
          flex-direction: row;
          align-items: center;
          font-size: 1.125rem;
          font-weight: 500;
          margin: auto 1.25rem;
          a {
            display: flex;
            flex-direction: row;
            align-items: center;
            text-decoration: none;
            color: darkslategrey;
          }
          p {
            margin-right: 0.625rem;
          }
        }
      }
    `;
    const Logo = styled.img`
      display: flex;
      justify-content: flex-start;
    `;
    return(
      <Wrapper>
        <Link href={{ pathname: '/' }}>
        <a>
          <Logo src="../static/images/cx-cloud-logo.png" />
          </a>
        </Link>
        <ul>
          <li>
            <Link href={{ pathname: '/' }}>
              <a><p>Home</p><FontAwesomeIcon icon={faAngleDown} /></a>
            </Link>
          </li>
          <li>
            <Link href={{ pathname: '/CategoryPage' }}>
              <a><p>Categories</p><FontAwesomeIcon icon={faAngleDown} /></a>
            </Link>
          </li>
          <li>
            <Link href={{ pathname: '/About' }}>
              <a><p>About</p><FontAwesomeIcon icon={faAngleDown} /></a>
            </Link>
          </li>
        </ul>
      </Wrapper>
    );
  }
}
