import React, {Component} from 'react';
import SearchButton from './search';
import ProductContainer from './productContainer'

class App extends Component {

    state = {
        searchTerm: ''
    };

    handleSearchTerm = (searchTerm) => {
        this.setState({ searchTerm });
    };

    render() {
        return (
            <div className="App">
                <SearchButton onClick={this.handleSearchTerm} />
                <ProductContainer searchTerm={this.state.searchTerm} />
            </div>
        );
    }
}

export default App;
