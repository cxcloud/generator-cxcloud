import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

export default ({children}) => {
  const Wrapper = styled.div`
    margin: 0 auto;
    font-family: Helvetica, Geneva, Tahoma, sans-serif;
    color: #2f4f4f;
  `;
  const button = styled.button`
    background-color: #f1ca5a;
    padding: 0.5rem 1.87rem;
    color: #fff;
    font-weight: 400;
    font-size: 1.12rem;
    border-radius: 0.5rem;
    margin-top: 1.25rem;
    border-color: transparent;
    a {
      color: #fff;
      text-decoration: none;
    }
  `;
  return(
    <Wrapper>
        <Header global />
        <main className="main">{children}</main>
        <Footer />
    </Wrapper>
  );
}
