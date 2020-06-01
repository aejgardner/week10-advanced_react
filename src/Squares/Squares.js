import React, { Component } from 'react';
import Square from './Square';

class Squares extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 1
        }
    }

    render() {
        const { color } = this.props;
        return (
            <div className="row">
                <Square
                    color={color}
                    selected={this.state.selected === 1}
                    handleClick={() => this.setState({ selected: 1 })}
                />

                <Square
                    color={color}
                    selected={this.state.selected === 2}
                    handleClick={() => this.setState({ selected: 2 })}
                />
            </div>
        );
    }
}

export default Squares;