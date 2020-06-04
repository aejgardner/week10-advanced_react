import React, { Component } from 'react';
import axios from '../ajax/axios';
import FourOhFour from './FourOhFour';
import { formClass } from '../utilities';

class EditArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            tags: "",
            saved: false,
            loaded: false,
            notFound: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let { article } = this.props
        axios.get(`/articles/${article}`).then(({ data }) => {
            this.setState({
                loaded: true,
                title: data.data.title,
                content: data.data.content,
                tags: data.data.tags.join(", "),
            })
        }).catch(error => {
            this.setState({
                notFound: true
            });
        });
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
        let { article } = this.props;

        let success = () => {
            this.setState({
                saved: true
            });
        }

        // hide the saved message after 2 seconds
        setTimeout(() => this.setState({ saved: false }), 2000);

        axios.put(`/articles/${article}`, {
            title: title,
            content: content,
            tags: tags.split(", ")
        }).then(success);
    }

    render() {
        let { title, content, tags, loaded, saved, notFound } = this.state;

        return notFound ? <FourOhFour /> : (!loaded ? <p>Loading...</p> : (
            <>
                {saved ? <p className="alert alert-success">Article updated!</p> : null}

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

                    <button className="btn btn-primary">Update</button>
                </form>
            </>
        ));
    }
}

export default EditArticle;