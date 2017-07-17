import React, { Component} from 'react';
import Product from './product';

export default class ProductList extends Component {

    defaultProps = {
        data : []
    };

    render() {
        return (
          <ol>
              {this.props.data.data.map(product => {
                  return <li key={product.id}><Product data={product} /></li>;
              })}
          </ol>
        );
    }
}
