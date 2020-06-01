import React, { Component } from 'react';
import Button from '../Buttons/Button';

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
        const { name, email } = this.state
        return (
            <form
                onSubmit={this.handleSubmit}
                className="d-flex flex-column justify-content-center align-items-center mt-4"
            >
                <div className="form-group">
                    <label className="font-weight-bold" htmlFor="name">Name</label>
                    <input
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        style={style}
                        value={name}
                        onChange={e => this.handleChange(e, "name")}
                    />
                </div>

                <div className="form-group">
                    <label className="font-weight-bold" htmlFor="email">Email</label>
                    <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        style={style}
                        value={email}
                        onChange={e => this.handleChange(e, "email")}
                    />
                </div>

                <button className="btn btn-primary">Submit</button>
            </form >
        );
    }
}

export default Form;