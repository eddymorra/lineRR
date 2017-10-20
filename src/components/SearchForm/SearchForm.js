import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            currentDisplay: this.props.lines
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            search: e.target.value
        });
        let newDisplay = this.state.currentDisplay.filter(o => o.name.toLowerCase().includes(e.target.value.toLowerCase()));
        this.props.onSearchLine(newDisplay);
    }

    render() {
        return(
            <div>
                <input type="text" name="searchName" value={this.state.search} onChange={this.onChange} className="form-control" placeholder="Search line..." />
            </div>
        );
    }
}

export default SearchForm;