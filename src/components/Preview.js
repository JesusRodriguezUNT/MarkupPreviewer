import React from 'react';
import marked from 'marked';
import { connect } from 'react-redux';
import { INITIAL_MARKDOWN } from '../initialMarkdown';

class Preview extends React.Component {
    constructor(props) {
        super(props);

        let start = marked(INITIAL_MARKDOWN);
        this.state = {
            currentInput: { __html: start},
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.stateText !== this.props.stateText) {
            marked.setOptions({
                breaks: true,
            });
            let markdown = marked(this.props.stateText.update);
            this.setState({
                currentInput: { __html: markdown }
            })
        }
    }

    render() {
        return (
            <div id="preview-area">
                <div id="preview" dangerouslySetInnerHTML={this.state.currentInput}></div>
            </div>
        );
    }
}

const mapStateToProps = (text) => {
    return {
        stateText: text,
    }
}

export default connect(mapStateToProps, null)(Preview);