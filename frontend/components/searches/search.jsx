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
            filtered: this.props.titles
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.titles
        });
    }

    handleChange (e) {
        let currentSearch = [];
        let newSearch = [];

        if (e.target.value !== "") {
            currentSearch = this.props.titles;

            newSearch = currentSearch.filter(title => {
                const lower = title.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lower.includes(filter);
            });
        } else {
            newSearch = this.props.titles;
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
                    {this.props.titles.map(title => (
                        <li key={title}>{title} &nbsp;</li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default Search;