import React, { Component } from 'react';
import Password from "./Password"

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: "",
            confirm: ""
        }
    }

    render() {
        const { minimumLength } = this.props
        const { password, confirm } = this.state;

        let error = password.length < minimumLength || password !== confirm;

        return (
            <form className="d-flex flex-column align-items-center">
                <Password
                    onChange={(e) => {
                        let currentValue = e.currentTarget.value;
                        this.setState({ password: currentValue });
                    }}
                    label="Password"
                    value={this.state.password}
                    error={error}
                />
                <Password
                    onChange={(e) => {
                        let currentValue = e.currentTarget.value;
                        this.setState({ confirm: currentValue });
                    }}
                    label="Confirm Password"
                    value={this.state.confirm}
                    error={error}
                />
            </form >
        );
    }
}

export default SignUp;