import React, { Component } from 'react';
import InputField from './InputField'

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fieldvalues: props.fields.map(() => "")
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, i) {
        // use slice to crerate new array copy with every character typed, state needs to detect there's a change 
        let fields = this.state.fieldvalues.slice();

        // specifies which index of "fieldvalues" state array we want to update the value of
        fields[i] = e.currentTarget.value;

        this.setState({ fieldvalues: fields });
    }

    handleSubmit(e) {
        e.preventDefault()

        this.props.handleSubmit(this.state)
    }

    render() {
        let { fields } = this.props;

        return (
            <form
                onSubmit={this.handleSubmit}
                className="form d-flex flex-column justify-content-center align-items-center mt-4"
            >
                {fields.map((field, i) => {
                    return <InputField
                        key={i}
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        value={this.state.name}
                        handleChange={e => this.handleChange(e, i)} // need the index to know which field each instance relates to
                        id={field.name}
                    />
                })}
                <button className="btn btn-primary">Submit</button>
            </form >
        );
    }
}

export default Form;

// fields = {
//     [
//         { label: "Name", name: "name", type: "text" },
//         { label: "E-mail", name: "email", type: "email" },
//         { label: "Telephone Number", name: "telephone", type: "tel" },
//         { label: "Date of Birth", name: "dob", type: "date" },
//   ]}