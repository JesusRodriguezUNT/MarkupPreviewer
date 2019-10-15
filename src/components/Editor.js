import React from 'react';

import { connect } from 'react-redux';
import { update, renderMarkdown } from '../actions/actions';
import { INITIAL_MARKDOWN } from '../initialMarkdown';

class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textInput: INITIAL_MARKDOWN,
        }

        this.updateText = this.updateText.bind(this);
    }

    updateText(event) {
        this.props.markdownUpdate(event.target.value);
        this.props.markdownRender(event.target.value);

        this.setState = {
            textInput: event.target.value,
        }
    }

    render() {
        return (
            <textarea id="editor" rows="20" onChange={this.updateText}>{this.state.textInput}</textarea>
        )
    }
}

const mapStateToProps = (state) => {
    return { message: state };
}

const mapDispatchToProps = (dispatch) => {
    return { 
        markdownUpdate: (message) => dispatch(update(message)),
        markdownRender: (message) => dispatch(renderMarkdown(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);