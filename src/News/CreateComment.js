import React, { Component } from 'react';
import axios from '../ajax/axios';

class CreateComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            comment: "",
            saved: false
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
        e.preventDefault(); // always use this for SPAs, otherwise whole browser refreshes and users data is immediately lost

        let { email, comment } = this.state;
        let { articleID } = this.props;

        let success = () => {
            this.setState({
                saved: true,
                email: "",
                comment: ""
            });
        }

        // hide the saved message after 2 seconds
        setTimeout(() => this.setState({ saved: false }), 2000);

        axios.post(`/articles/${articleID}/comments`, {
            email: email,
            comment: comment
        }).then(success);
    }

    render() {
        let { saved, email, comment } = this.state;
        return (
            <>
                {saved ? <p className="alert alert-success">Comment added!</p> : null}

                <form onSubmit={this.handleSubmit} className="form container">
                    <div className="form-group">
                        <label className="mt-3">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => this.handleChange(e, "email")} className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label className="mt-3">Comment</label>
                        <input
                            value={comment}
                            onChange={e => this.handleChange(e, "comment")} className="form-control"
                        />
                    </div>

                    <button className="btn btn-primary">Create</button>
                </form>
            </>
        );
    }
}

export default CreateComment;