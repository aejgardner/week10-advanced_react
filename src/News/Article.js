import React, { Component } from 'react';
import axios from '../ajax/axios';
import Comments from './Comments';
import CreateComment from './CreateComment';
import FourOhFour from './FourOhFour';

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            article: {},
            notFound: false
        }
    }

    componentDidMount() {
        let { article } = this.props
        axios.get(`/articles/${article}`).then(({ data }) => {
            this.setState({
                loaded: true,
                article: data.data
            });
        }).catch(error => {
            this.setState({
                notFound: true
            });
        });
    }

    render() {
        let { article, loaded, notFound } = this.state;

        return notFound ? <FourOhFour /> : (!loaded ? <p>Loading...</p> : (
            <>
                <h2>{article.title}</h2>
                <p>{article.content}</p>
                <ul className="d-flex justify-content-center">
                    {article.tags.map((tag, i) => (
                        <li
                            style={{
                                listStyle: "none",
                                cursor: "pointer"
                            }}
                            key={i}
                            className="mr-2">{tag}
                        </li>
                    ))}
                </ul>
                <Comments articleID={article.id} />
                <CreateComment articleID={article.id} />
            </>
        )
        );
    }
}

export default Article;