import React, { Component } from 'react';

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'',
            text: 'Please write an essay about your favorite DOM element.'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        const type = event.target.name;
        const name = type == 'name' ? 'value' : 'text';
        this.setState({
            [name]:event.target.value
        });
    }

    handleSubmit (event) {
        alert('A name was submitted: ' + this.state.value + ',' + this.state.text);
        event.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                <textarea name="text" value={this.state.text} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;