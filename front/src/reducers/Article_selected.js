const initialState = {article_selected: 0}

export default function(state = initialState, action) {
    switch(action.type) {
        case "UPDATE_ARTICLE_SELECTED":
            console.log(action)
            return {
                article_selected: action.selected
            };
        default: 
            return state; 
    }
}