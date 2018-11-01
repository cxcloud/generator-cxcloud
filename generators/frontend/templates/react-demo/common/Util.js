import _ from 'lodash';
const accessToken = 'e6bdb60d3ec5313a17274fc3db04a4fe3d28b0fbe6b0b8305c2c84785a5ac700';
const spaceId = '52dq79v5sxg3';
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
