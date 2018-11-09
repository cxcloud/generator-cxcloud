import React from 'react';
import CategoriesList from '../components/CategoriesList';
import Util from '../common/Util';
import Layout from '../components/Layout';
import Features from '../components/Features';
import Cover from '../components/Cover';
import _ from 'lodash';

export default class extends React.Component {
  static async getInitialProps({ query, req }) {
    const categories = await Util.fetchCategories();
    return { categories };
  }
  render() {
    const { categories } = this.props;
    return (
      <Layout className="Homepage">
        <Cover />
        <CategoriesList categories={categories} />
        <Features />
      </Layout>
    );
  }
}
