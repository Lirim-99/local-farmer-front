import React, { Component } from 'react';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [], // Initialize an empty array to store the list of products
    };
  }

  componentDidMount() {
    // Fetch the list of products when the component is mounted
    fetch('http://localhost:5000/products/list') // Replace with the correct API endpoint
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data });
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }

  render() {
    return (
      <div>
        <h1>Add or Edit Product</h1>
        {/* Add a form to input product details */}
        <ul>
          {this.state.products.map((product) => (
            <li key={product._id}>
              {product.productName} - {product.description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductForm;
