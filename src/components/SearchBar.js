import React from 'react';

class SearchBar extends React.Component {
    
    state = {term: ''};
    
    onInputChange = (e) => {
        this.setState({term: e.target.value});
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        // TODO: Call a callback from the parent component
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search
                            <input type="text" value={this.state.term}
                            onChange={this.onInputChange} />
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
