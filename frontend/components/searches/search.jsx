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
            filtered: this.props.usernames
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.usernames
        });
    }

    handleChange (e) {
        let currentSearch = [];
        let newSearch = [];

        if (e.target.value !== "") {
            currentSearch = this.props.usernames;

            newSearch = currentSearch.filter(username => {
                const lower = username.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lower.includes(filter);
            });
        } else {
            newSearch = this.props.usernames;
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
                    {this.props.usernames.map(username => (
                        <li key={username}>{username} &nbsp;</li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default Search;