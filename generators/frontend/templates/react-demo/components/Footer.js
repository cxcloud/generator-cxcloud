import React from 'react';
import Link from 'next/link'
import styled from 'styled-components'

export default () => {
  const Wrapper = styled.div`
    color: darkslategrey;
    padding: 1.875rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    hr {
      border-top: 0.125 solid #f3f3f3;
      border-left-color: transparent;
      height: 0.375rem;
      border-right-color: transparent;
      border-bottom: 0.125rem solid #f3f3f3;
      width: 74%;
    }
    div {
      width: 100%;
      .copyright {
        font-size: 1.125rem;
        font-weight: 200;
        color: darkslategrey;
      }
      .copyright {
        margin-top: 3.125rem;
        font-size: 0.75rem;
        text-align: center;
      }
    }`;
  const Navbar = styled.div`
    margin: 1.875rem auto 0 auto;
    text-align: center;
    a {
      font-weight: 500;
      color: darkslategrey;
      margin: auto 3.125rem 0.625rem 3.125rem;
      text-decoration: none;
    }
  `;
  return(
    <Wrapper>
      <hr />
      <Navbar>
        <Link href={{ pathname: '/About', query: { name: 'about' } }}>
          <a className="footer-link">About</a>
        </Link>
        <Link href={{ pathname: '/Contact', query: { name: 'contact'}}}>
          <a className="footer-link">Contact us</a>
        </Link>
        <Link href={{ pathname: '/Privacy', query: { name: 'privacy'}}}>
          <a className="footer-link">Privacy Policy</a>
        </Link>
        <Link href={{ pathname: '/Stores', query: { name: 'stores'}}}>
          <a className="footer-link">Store Locator</a>
        </Link>
      </Navbar>
    <div>
      <p className="copyright">&copy; 2018 Tieto</p>
    </div>
  </Wrapper>
  );
}
