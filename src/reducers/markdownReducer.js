import { MARKDOWN_UPDATE, MARKDOWN_RENDER } from "../actions/actionTypes";

const initialState = ''

export default function(state = initialState, action) {
    switch(action.type) {
        case MARKDOWN_UPDATE:
            let newState = action.payload;
            return newState;
        case MARKDOWN_RENDER:
            return action.payload;
        default:
            return state;
    }
}