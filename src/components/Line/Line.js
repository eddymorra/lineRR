import React from 'react';

class Line extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.line.id,
            name: this.props.line.name,
            noEdited: true
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    onDelete(id) {
        this.props.onLineDelete(id);
    }

    onEdit(id) {
        this.setState({
            noEdited: !this.state.noEdited
        });
    }

    onChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onLineEdit(this.state.id, this.state.name);
        this.setState({
            noEdited: true
        });
    }

    onCancel() {
        this.setState({
            name: this.props.line.name,
            noEdited: !this.state.noEdited
        });
    }

    render() {
        return (
            <div id={this.props.line.id}>
                <div>
                    {this.state.noEdited ? (
                        <div>
                        <div className="line">{this.props.line.name}</div>
                            <button className="btn btn-warning" onClick={() => this.onEdit(this.props.line.id)} >Edit</button>
                            <button className="btn btn-danger" onClick={() => this.onDelete(this.props.line.id)} >Delete</button>
                        </div>
                    ) : (
                        <div>
                            <form onSubmit={this.onSubmit}>
                                <input type="text" value={this.state.name} onChange={this.onChange} className="form-control" />
                                <button className="btn btn-default" type="button" onClick={this.onCancel}>Cancel</button>
                                <button className="btn btn-info" type="submit">Save</button>
                            </form>
                        </div>
                    )}
                </div>
                <hr/>
            </div>
        )
    }

}

export default Line;