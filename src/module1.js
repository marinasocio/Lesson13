export const obj = {
  name: 'Marina',
};

export function getUserName() {
  return obj.name;
}

const product = {
  brand: 'Apple'
};

// export { product };

// export default product;

export default { product, obj };

