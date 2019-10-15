import { MARKDOWN_UPDATE, MARKDOWN_RENDER } from './actionTypes';

export const update = function(text) {
    return {
        type: MARKDOWN_UPDATE,
        payload: text,
    }
}

export const renderMarkdown = function(text) {
    return {
        type: MARKDOWN_RENDER,
        payload: text,
    }
}