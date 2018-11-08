import _ from 'lodash';
import "isomorphic-fetch"

export default class Util {
  static async fetchCategories() {
    const res = await fetch(`https://dev.cxcloud.com/api/v1/categories`);
    const json = await res.json();
    return json;
  }
  static async fetchProductById(productId) {
    const res = await fetch(`https://dev.cxcloud.com/api/v1/products/${productId}`);
    const json = await res.json();
    return json;
  }
  static async fetchProducts(categoryId) {
    const res = await fetch(`https://dev.cxcloud.com/api/v1/products/byCategory/${categoryId}`);
    const json = await res.json();
    return json;
  }
}
