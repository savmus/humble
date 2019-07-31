import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        debugger;
        return (
            <div>
                {this.props.posts.map((post, idx) => {
                    return (
                        <li key={idx}>{post.post_type}</li> // temporary
                    );
                })}
            </div>
        );
    }
};

export default PostIndexItem;