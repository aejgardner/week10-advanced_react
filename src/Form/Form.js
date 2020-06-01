import React, { Component } from 'react';
import InputField from './InputField'

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, key) {
        let currentValue = e.currentTarget.value;

        this.setState({
            [key]: currentValue
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        const { handleSubmit } = this.props;

        handleSubmit(this.state)
    }

    render() {
        let style = { width: 300 };

        return (
            <form
                onSubmit={this.handleSubmit}
                className="d-flex flex-column justify-content-center align-items-center mt-4"
            >
                <InputField
                    labelText="Name"
                    name="name"
                    style={style}
                    value={this.state.name}
                    handleChange={e => this.handleChange(e, "name")}
                    id="name"
                    type="text"
                />
                <InputField
                    labelText="Email"
                    name="email"
                    style={style}
                    value={this.state.email}
                    handleChange={e => this.handleChange(e, "email")}
                    id="email"
                    type="email"
                />
                <button className="btn btn-primary">Submit</button>
            </form >
        );
    }
}

export default Form;