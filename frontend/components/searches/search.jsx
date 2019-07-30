import React from 'react';

class Search extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            filtered: []
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            filtered: this.props.blogs
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.blogs
        });
    }

    handleChange (e) {
        let currentSearch = [];
        let newSearch = [];

        if (e.target.value !== "") {
            currentSearch = this.props.blogs;

            newSearch = currentSearch.filter(blog => {
                const lower = blog.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lower.includes(filter);
            });
        } else {
            newSearch = this.props.blogs;
        }

        this.setState({
            filtered: newSearch
        });
    }

    render () {
        return (
            <div>
                <input type="text"
                    className="search-bar"
                    onChange={this.handleChange}
                    placeholder="Search" 
                />

                <ul>
                    {this.props.blogs.map(blog => (
                        <li key={blog}>{blog} &nbsp;</li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default Search;