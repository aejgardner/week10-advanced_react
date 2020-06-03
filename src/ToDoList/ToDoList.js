// import React, { Component } from 'react';
// import Input from './Input';

// class ToDoList extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             input: "",
//             items: []
//         }
//     }

//     handleChange(e) {
//         let currentValue = e.currentTarget.value

//         this.setState({ input: currentValue })
//     }

//     addTodo() {

//         this.setState({
//             items: [...items, input]
//         })
//     }

//     render() {

//         return (
//             <>
//                 <Input
//                     handleChange={this.handleChange}
//                     addTodo={this.addTodo}
//                     value={input}
//                 />
//                 <List
//             </>
//             );
//         }
//     }

// export default ToDoList;