import React, { Component} from 'react';

export default class SearchButton extends Component {

    onHandleSubmit = () => {
        this.props.onClick(this.textInput.value);
    };

    render() {
        return (
            <div>
                <input type="text" ref={(input) => { this.textInput = input; }} />
                <button onClick={this.onHandleSubmit}>Search</button>
            </div>
        );
    }

}
