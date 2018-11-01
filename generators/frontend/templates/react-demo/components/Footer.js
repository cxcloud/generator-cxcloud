import React from 'react';
import Link from 'next/link'
import styled from 'styled-components'

export default () => {
  const Wrapper = styled.div`
    color: darkslategrey;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    hr {
      border-top: 2px solid #f3f3f3;;
      border-left-color: transparent;
      height: 6px;
      border-right-color: transparent;
      border-bottom: 2px solid #f3f3f3;;
      width: 74%;
    }
    div {
      width: 100%;
      .copyright {
      font-size: 18px;
      font-weight: 200;
      color: darkslategrey;
    }
    .copyright {
      margin-top: 50px;
      font-size: 12px;
      text-align: center;
    }
  }
  `
  const Navbar = styled.div`
    margin: 30px auto 0 auto;
    text-align: center;
    a {
      font-weight: 500;
      color: darkslategrey;
      margin: auto 50px 10px 50px;
      text-decoration: none;
    }
  `
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
