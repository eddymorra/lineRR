import React from 'react';
import Lines from '../../containers/Lines/Lines';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            search: e.target.value
        });
        this.props.onSearchLine(e.target.value)
    }

    render() {
        return(
            <div>
                <form>
                    <input type="text" name="searchName" value={this.state.search} onChange={this.onChange} className="form-control input-search" placeholder="Search line..." />
                </form>
                <Lines/>
            </div>
        );
    }
}

export default SearchForm;