import React from 'react';

class Explore extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        if (this.props.posts.length === 0) {
            return null
        };

        let colOne = Math.floor(this.props.posts.length / 3);
        let colTwo = colOne + colOne;
        let colThree = this.props.posts.length;

        return (
            <div className='explore-index'>
                <ul className='col col-1'>
                    {this.props.posts.map((post, idx) => {
                        if (idx < colOne) {
                            return (
                                <div key={idx} className='explore-post'>
                                    <li>
                                        <a
                                            href={`#/blogs/${post.author_id}`}
                                            className='username'
                                        >{post.user.username}</a>
                                        <h2>{post.title}</h2>
                                        <img
                                            src={post.image_url}
                                            className='explore-pictures'
                                        />
                                        <a href={post.url}>{post.url}</a>
                                        <p className={post.post_type === 'quote' ? 'post-quote' : 'post-caption'}>{post.caption}</p>
                                        <p className={post.summary ? 'post-source' : 'post-summary'}>{post.summary}</p>
                                        <p className='post-description'>{post.description}</p>
                                    </li>
                                </div>
                            );
                        }
                    })}
                </ul>
                <ul className='col col-2'>
                    {this.props.posts.map((post, idx) => {
                        if (idx < colTwo && idx > colOne - 1) {
                            return (
                                <div key={idx} className='explore-post'>
                                    <li>
                                        <a
                                            href={`#/blogs/${post.author_id}`}
                                            className='username'
                                        >{post.user.username}</a>
                                        <h2>{post.title}</h2>
                                        <img
                                            src={post.image_url}
                                            className='explore-pictures'
                                        />
                                        <a href={post.url}>{post.url}</a>
                                        <p className={post.post_type === 'quote' ? 'post-quote' : 'post-caption'}>{post.caption}</p>
                                        <p className={post.summary ? 'post-source' : 'post-summary'}>{post.summary}</p>
                                        <p className='post-description'>{post.description}</p>
                                    </li>
                                </div>
                            );
                        }
                    })}
                </ul>
                <ul className='col col-3'>
                    {this.props.posts.map((post, idx) => {
                        if (idx < colThree && idx > colTwo - 1) {
                            return (
                                <div key={idx} className='explore-post'>
                                    <li>
                                        <a
                                            href={`#/blogs/${post.author_id}`}
                                            className='username'
                                        >{post.user.username}</a>
                                        <h2>{post.title}</h2>
                                        <img
                                            src={post.image_url}
                                            className='explore-pictures'
                                        />
                                        <a href={post.url}>{post.url}</a>
                                        <p className={post.post_type === 'quote' ? 'post-quote' : 'post-caption'}>{post.caption}</p>
                                        <p className={post.summary ? 'post-source' : 'post-summary'}>{post.summary}</p>
                                        <p className='post-description'>{post.description}</p>
                                    </li>
                                </div>
                            );
                        }
                    })}
                </ul>
            </div>
        )
    }
}

export default Explore;