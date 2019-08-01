import React from 'react';
import { withRouter } from 'react-router-dom';

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.post;
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.action(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            type="text"
                            onChange={this.update("summary")}
                            placeholder="Quote"
                        />
                    </label>

                    <label>
                        <textarea
                            onChange={this.update("caption")}
                            placeholder="Source"
                        />
                    </label>

                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default withRouter(QuoteForm);