/**
 *  Sort array by array of custom values
 */
export function sortByCustomValues(array, order, path) {
  return array.sort(function(a, b) {
    const A = resolveProperty(a, path);
    const B = resolveProperty(b, path);
    return order.indexOf(A.toLowerCase()) > order.indexOf(B.toLowerCase())
      ? 1
      : -1;
  });
}

/**
 *  Accessing nested object values with string key
 */
export function resolveProperty(obj, path) {
  return path.split('.').reduce(function(prev, curr) {
    return prev ? prev[curr] : undefined;
  }, obj || self);
}

export function buildUrlQuery(query) {
  return Object.keys(query)
    .map(key => `${key}=${query[key]}`)
    .join('&');
}

export function getCategory(categoriesStr) {
  const catArray = categoriesStr.split(';');
  if (catArray.length === 0) {
    return '';
  }
  return catArray[0].replace(/>/g, ' → ');
}
