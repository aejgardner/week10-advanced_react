import React, { Component } from 'react';
import Password from "./Password"

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value1: "",
            value2: ""
        }
    }

    render() {
        const { minimumLength } = this.props
        const { value1, value2 } = this.state;

        let error = value1.length < minimumLength || value1 !== value2;

        return (
            <div className="d-flex flex-column align-items-center" >
                <Password
                    onChange={(e) => {
                        let currentValue = e.currentTarget.value;
                        this.setState({ value1: currentValue });
                    }}
                    minimumLength={minimumLength}
                    label="Password"
                    value={this.state.value1}
                    error={error}
                />
                <Password
                    onChange={(e) => {
                        let currentValue = e.currentTarget.value;
                        this.setState({ value2: currentValue });
                    }}
                    minimumLength={minimumLength}
                    label="Confirm Password"
                    value={this.state.value2}
                    error={error}
                />
            </div>
        );
    }
}

export default SignUp;