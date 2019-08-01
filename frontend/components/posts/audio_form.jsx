import React from 'react';
import { withRouter } from 'react-router-dom';

class AudioForm extends React.Component {
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
                            type="url"
                            onChange={this.update("url")}
                            placeholder="Paste a URL"
                        />
                    </label>

                    <button>Post</button>
                </form>
            </div>
        );
    }
}

export default withRouter(AudioForm);