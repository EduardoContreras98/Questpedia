import React from 'react';

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  componentDidMount() { //se ejecuta cuando terminamos de cargar
    //se hacen las peticiones del api, manejo del dom
    //todo post rendereo
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Product;
