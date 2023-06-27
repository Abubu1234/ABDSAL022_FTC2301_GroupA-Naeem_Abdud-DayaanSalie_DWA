const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];
  
  // 9. Use forEach to console log each product name to the console.
  products.forEach(product => {
    console.log(product.product);
  });
  
  // 10. Use filter to filter out products that have a name longer than 5 characters.
  const filteredProducts = products.filter(product => product.product.length <= 5);
  console.log(filteredProducts);
  
  // 11. Using both filter and map, convert prices that are strings to numbers and remove products without prices. Then use reduce to calculate the combined price of all remaining products.
  const totalPrice = products
    .filter(product => typeof product.price === 'number' || (typeof product.price === 'string' && product.price.trim() !== ''))
    .map(product => Number(product.price))
    .reduce((acc, price) => acc + price, 0);
  console.log(totalPrice);
  
  // 12. Use reduce to concatenate all product names to create the following string: banana, mango, potato, avocado, coffee, and tea.
  const concatenatedNames = products.reduce((str, product) => {
    if (str !== '') {
      str += ', ';
    }
    return str + product.product;
  }, '');
  console.log(concatenatedNames);