import React, { Component } from 'react'
import Util from '../common/Util'
import styled from 'styled-components'
import Layout from '../components/Layout'
import _ from 'lodash';
import './index';
import ProductsCard from '../components/ProductsCard'
import Title from '../components/Title'

export default class extends Component {
  static async getInitialProps({ query, req }) {
    const productId = _.get(query, 'id');
    const productsList = await Util.fetchProducts(productId);
    const categoryName = _.get(query, 'name');

    return { productsList, categoryName };
  }

  render() {
    const { productsList, categoryName } = this.props;

    const SelectedCategory = styled.div`
      display: flex;
      flex-wrap: wrap;
      max-width: 100em;
      justify-content: center;
      margin: 0 auto;
    `;
    return (
      <Layout>
        <div>
          <Title name={categoryName}/>
          <SelectedCategory className="selected_category">
            {productsList !== undefined &&
              !(Object.keys(productsList).length === 0) ? (
                productsList.results.map((item, i) => (
                  <ProductsCard
                    key={i}
                    id={item.id}
                    name={item.name.en}
                    image={item.masterVariant.images[0].url}
                    description={item.slug.en}
                    price={item.masterVariant.prices[0].value.centAmount}
                    currency={item.masterVariant.prices[0].value.currencyCode}
                  />
                ))
              ) : (
                <p>No Products To Show</p>
              )}
          </SelectedCategory>
        </div>
      </Layout>
    )
  }
}
