import React, { Component } from 'react';
import CategoryCard from './CategoryCard';
import Util from '../common/Util';
import styled from 'styled-components';

export default class extends Component {
  state = {
    categories: [],
    productsList: [],
    show: true
  };

  async componentDidMount() {
    const cats = await Util.fetchCategories();
    const prods = await Util.fetchProducts(cats[0].id);
    this.setState(
      {
        categories: cats,
        productsList: prods.results
      }
    );
  }

  onClickCategory = (e, categoryId) => {
    e.preventDefault()
    Util.fetchProducts(categoryId).then(list => {
      this.setState({ productsList: list.results });
    });
  }

  showProductsList = (e) => {
    e.preventDefault()
    this.setState({ show: false})
  }

  render() {
    const { categories, productsList } = this.state;

    const Wrapper = styled.div`
      margin: 1.875rem auto;
        padding: 1.25rem 2.5rem;
        color: darkslategrey;
        @media only screen and (max-width: 400px) {
          padding: 0 1.25rem;
        }
      }
    `;
    const ListOfCategories = styled.div`
      margin: 0 auto 2em auto;
      max-width: 100em;
      padding-bottom: 5em;
      border-bottom: 0.12rem solid #f3f3f3;
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      :active {
        color: rgba(211, 183, 86, 1);
      }
      :focus {
        color: red;
      }
      :target {
        color: red;
      }
      :nth-child(2n) {
        flex-grow: 1;
      }
    @media only screen and (max-width: 1600px) {
      max-width: 65em;
    `;
    const CategoryName = styled.div`
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-color: rgba(74, 74, 74, 0.7);
      width: 24em;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 13em;
      text-align: center;
      margin: 1.125rem;
      text-decoration: none;
      text-transform: uppercase;
      border-radius: 0.12rem;
      h1 {
        font-size: 1.375rem;
        background-color: rgba(245, 245, 245, 0.8);
        padding: 1.875rem;
        :hover {
          cursor: pointer;
          color: rgba(245, 245, 245);
        }
      }
      `;
    const SelectedCategory = styled.div`
      display: flex;
      flex-wrap: wrap;
      max-width: 100em;
      margin: 0 auto;
      justify-content: center;
      `;
    return(
      <Wrapper>
        <ListOfCategories>
          {categories.map((category, i) => (
            <CategoryCard
            key={i}
            id={category.id}
            name={category.name.en} />
          ))}
        </ListOfCategories>
      </Wrapper>
    );
  }
}
