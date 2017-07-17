import React, {Component} from 'react';
import FetchProducts from './fetchProducts';
import ProductList from './productList'

export default class productContainer extends Component {


    render() {
        return (
            <FetchProducts searchTerm={`${this.props.searchTerm}`}>
                {({products, loading, error}) => (
                    <div>
                        {loading && <div>Loading...</div>}
                        {error && (
                            <div>
                                Error loading info for <code>{products}</code>
                                <pre>{JSON.stringify(error, null, 2)}</pre>
                            </div>
                        )}
                        {products && <ProductList data={products || []} />}
                    </div>
                )}
            </FetchProducts>
        );
    }
}
