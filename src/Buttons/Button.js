import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clickCount: 0
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleClick() {
        let { clickCount } = this.state;

        this.setState({ clickCount: clickCount + 1 });
    }

    handleButtonClick() {
        let { handleUpdate } = this.props;

        handleUpdate(this.state.clickCount);
    }

    render() {
        const { clickCount } = this.state;
        return (
            <>
                <p
                    className="mb-0"
                    style={{ cursor: "pointer", fontSize: 40 }}
                    onClick={this.handleClick}>{clickCount}
                </p>
                <button
                    className="btn btn-primary"
                    onClick={this.handleButtonClick}>Click me
                </button>
            </>
        )
    }
}

export default Button;