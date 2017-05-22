type Product = {
  '_id': string,
  'price': string,
  'picture': string,
  'title': string
};

type CartItem = {
  product: Product,
  action: 'add' | 'remove'
};
