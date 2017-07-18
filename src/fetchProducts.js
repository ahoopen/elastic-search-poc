import {Component} from 'react';
import axios from 'axios'

export default class fetchProducts extends Component {

    state = {
        loading: false,
        error: null,
        products: null
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchTerm) {
            this.fetchElastic(nextProps);
        }
    }

    fetchElastic({searchTerm}) {
        this.setState({products: null, loading: true, error: null});

        axios.get(`http://localhost:3000/mock.json?search=${searchTerm}`)
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
