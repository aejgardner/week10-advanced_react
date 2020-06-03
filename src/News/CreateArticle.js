import React, { Component } from 'react';
import axios from '../ajax/axios';

class CreateArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            article: "",
            tags: "",
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

        let { title, article, tags } = this.state;

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

        axios.post("/articles", {
            saved: false,
            title: title,
            content: article,
            tags: tags.split(", ")
        }).then(success);
    }

    render() {
        let { saved, title, article, tags } = this.state;
        return (
            <>
                {saved ? <p className="alert alert-success">Saved!</p> : null}

                <form onSubmit={this.handleSubmit} className="form container">
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
                            value={article}
                            onChange={e => this.handleChange(e, "article")} className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label className="mt-3">Tags</label>
                        <input
                            value={tags}
                            onChange={e => this.handleChange(e, "tags")} className="form-control"
                        />
                    </div>

                    <button className="btn btn-primary">Create</button>
                </form>
            </>
        );
    }
}

export default CreateArticle;