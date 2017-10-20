import React from 'react';

class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.initLocalState();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    initLocalState () {
        this.state = {
            id: '',
            name: ''
        }
    }

    onChange(e) {
        let value = e.target.value;
        this.setState({
            id: + Date.now(),
            name: value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAddLine(this.state);
        this.setState({
            name: ''
        });
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="lineName" value={this.state.name} onChange={this.onChange} className="form-control" placeholder="Add a line" />
                    <button type="submit" className="btn btn-info">Add</button>
                </form>
            </div>
        );
    }

}

export default AddForm;