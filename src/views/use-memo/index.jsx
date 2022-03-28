import React, { useMemo, useState } from 'react';

const TestUseMemo = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const addProduct = (ev) => {
    ev.preventDefault();
    setProducts((prev) => {
      return [...prev, { name, price: parseInt(price) }];
    });
  };

  const totalPrice = useMemo(() => {
    const result = products.reduce((prev, next) => {
      return prev + next.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div>
      <form onSubmit={addProduct}>
        <div>
          Name:
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          Price:
          <input
            type="number"
            value={price}
            required
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <div>Totoal price: {totalPrice}</div>
      <div>
        List products:
        {products.map((p, index) => {
          return (
            <div key={index}>
              {index + 1} - {p.name} - {p.price}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestUseMemo;
