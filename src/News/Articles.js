import React, { Component } from 'react';
import axios from '../ajax/axios';

class Articles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            articles: []
        }
    }

    componentDidMount() {
        axios.get("/articles").then(({ data }) => {
            this.setState({
                loaded: true,
                articles: data.data
            });
        });
    }

    render() {
        let { articles, loaded } = this.state;

        return !loaded ? <p>Loading...</p> : (
            <>
                <h2>Articles</h2>
                <ul className="list-group">
                    {articles.map(article => (
                        <li className="list-group-item" key={article.id}>
                            {article.title}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default Articles;