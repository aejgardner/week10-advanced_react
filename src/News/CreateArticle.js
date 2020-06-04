import React, { Component } from 'react';
import axios from '../ajax/axios';
import { formClass } from '../utilities';

class CreateArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            tags: "",
            saved: false
        }

        // this.handleChange = this.handleChange.bind(this); - method does NOT have to be bound if you are calling it from an anonymous function, which is what you are doing for this method in your JSX. If JAVASCRIPT calls the method and not you, it gets bound to the global scope so you need to do the binding yourself
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

        let { title, content, tags } = this.state;

        let success = () => {
            this.setState({
                saved: true,
                title: "",
                content: "",
                tags: ""
            });
        }

        // hide the saved message after 2 seconds
        setTimeout(() => this.setState({ saved: false }), 2000);

        // post the current state to API, then pass success function above to reset the state
        axios.post("/articles", {
            title: title,
            content: content,
            tags: tags.split(", ")
        }).then(success);
    }

    render() {
        let { saved, title, content, tags } = this.state;
        return (
            <>
                {saved ? <p className="alert alert-success">Saved!</p> : null}

                <form
                    onSubmit={this.handleSubmit}
                    className={formClass}
                    style={{ width: "30rem" }}
                >
                    <div className="form-group">
                        <label className="mt-3">Title</label>
                        <input
                            value={title}
                            onChange={e => this.handleChange(e, "title")} className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label className="mt-3">Article</label>
                        <input
                            value={content}
                            onChange={e => this.handleChange(e, "content")} className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label className="mt-3">Tags</label>
                        <input
                            value={tags}
                            onChange={e => this.handleChange(e, "tags")} className="form-control"
                        />
                    </div>

                    <button className="btn btn-primary mb-4">Create</button>
                </form>
            </>
        );
    }
}

export default CreateArticle;