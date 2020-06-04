import React, { Component } from 'react';
import Input from './Input';
import List from './List';

class ToDoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: "",
            items: ["Make bed", "Learn React"]
        }

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(e) {
        let currentValue = e.currentTarget.value

        this.setState({ input: currentValue })
    }

    addTodo() {
        let { items, input } = this.state;

        this.setState({
            items: [...items, input],
            input: ""
        })
    }

    handleDelete(i) {
        let { items } = this.state

        console.log(i)

        this.setState({
            items: items.filter(item => {
                return item !== items[i]
            })
        })
    }

    render() {
        let { items, input } = this.state;
        return (
            <div className="container mt-5 d-flex flex-column align-items-center" style={{ width: "20rem" }}>
                <Input
                    handleChange={this.handleChange}
                    addTodo={this.addTodo}
                    value={input}
                />
                <List items={items} handleDelete={(i) => this.handleDelete(i)} />
            </div>
        );
    }
}

export default ToDoList;