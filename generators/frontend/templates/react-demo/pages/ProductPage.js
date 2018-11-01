import React, { Component } from 'react'
import Layout from '../components/Layout'
import ProductDetails from '../components/ProductDetails'
import Util from '../common/Util'
import _ from 'lodash'
import './index'
import styled from 'styled-components'

export default class extends Component {
  static async getInitialProps({ query, req }) {
    const productId = _.get(query, 'id');
    const product = await Util.fetchProductById(productId);

    return { product }
  }
  render() {
    const { product } = this.props;
    const priceInEuro = (product.masterVariant.prices[0].value.centAmount / 100).toFixed(2);

    return(
      <Layout>
        <ProductDetails
          id={product.id}
          name={product.name.en}
          color={product.masterVariant.attributes.find(product => product.name === 'color').value.label.en}
          size={product.masterVariant.attributes.find((product) => product.name === 'size').value}
          image={product.masterVariant.images[0].url}
          sku={product.masterVariant.sku}
          priceInEuro={priceInEuro}
          currency={product.masterVariant.prices[0].value.currencyCode} />
      </Layout>
    );
  }
}
