const initialState = {userInfo: {}, isConnected: false}

export default function(state = initialState, action) {
    switch(action.type) {
        case "SET_USER":
            return {
                userInfo: action.data,
                isConnected: action.isConnected
            };
        default: 
            return state; 
    }
}