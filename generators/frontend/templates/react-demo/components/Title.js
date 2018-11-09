import React, { Component } from 'react';
import styled from 'styled-components';

export default class extends Component {
  static async getInitialProps({ query, req }) {
  }
  render() {
    const { name } = this.props;
    const Wrapper = styled.div`
      margin-top: 10em;
      h1 {
        position: fixed;
        color: #2f4f4f;
        font-size: 38px;
        letter-spacing: 6px;
        font-weight: 400;
        text-align: center;
        text-transform: uppercase;
      }`;
    return (
      <Wrapper>
        <h1>{name}</h1>
      </Wrapper>
    )
  }
}
