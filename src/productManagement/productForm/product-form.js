import React, { Component } from 'react';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [], // Initialize an empty array to store the list of products
      newProduct: {
        productName: '',
        description: '',
        price: 0,
        quantity: 0,
      },
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/products/list') // Replace with the correct API endpoint
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data });
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newProduct: {
        ...prevState.newProduct,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
  
    // Send the new product data to the server to create a new product
    fetch('http://localhost:5000/products/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.newProduct), // Send the entire newProduct object as JSON
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the list of products after successfully creating a new product
        this.setState((prevState) => ({
          products: [...prevState.products, data],
          newProduct: {
            productName: '',
            description: '',
            price: 0,
            quantity: 0,
          },
        }));
      })
      .catch((error) => {
        console.error('Error creating a new product:', error);
      });
  };
  

  render() {
    return (
      <div>
        <h1>Add or Edit Product</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Product Name:</label>
            <input
  type="text"
  name="productName"
  value={this.state.newProduct.productName}
  onChange={this.handleInputChange}
/>
          </div>
          <div>
            <label>Description:</label>
            <input
  type="text"
  name="description"
  value={this.state.newProduct.description}
  onChange={this.handleInputChange}
/>
          </div>
          <div>
            <label>Price:</label>
            <input
  type="number"
  name="price"
  value={this.state.newProduct.price}
  onChange={this.handleInputChange}
/>
          </div>
          <div>
            <label>Quantity:</label>
            <input
  type="number"
  name="quantity"
  value={this.state.newProduct.quantity}
  onChange={this.handleInputChange}
/>
          </div>
          <button type="submit">Create Product</button>
        </form>
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
