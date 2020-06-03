import React, { Component } from 'react';
import axios from '../ajax/axios';

class Comments extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            comments: []
        }
    }

    componentDidMount() {
        let { articleID } = this.props
        axios.get(`/articles/${articleID}/comments`).then(({ data }) => {
            this.setState({
                loaded: true,
                comments: data.data
            });
        });
    }

    render() {
        let { comments, loaded } = this.state;

        return !loaded ? <p>Loading comments...</p> : (
            <ul>
                {comments.map((comment) => (
                    <li style={{ listStyle: "none" }} key={comment.id}>{comment.comment}</li>
                ))}
            </ul>
        );
    }
}

export default Comments;