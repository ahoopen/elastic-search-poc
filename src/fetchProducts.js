import {Component} from 'react';
import axios from 'axios'

export default class fetchProducts extends Component {

    endpoint = `http://localhost:3000/mock.json`;

    state = {
        loading: false,
        error: null,
        products: null
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchTerm) {
            this.fetchElastic();
        }
    }

    fetchElastic() {
        this.setState({products: null, loading: true, error: null});

        axios.get(this.endpoint)
            .then(
                ({data: products}) => {
                    this.setState({products, error: null, loading: false});
                },
                error => this.setState({products: null, error, loading: false})
            )
    }

    render() {
        return this.props.children(this.state);
    }
}
