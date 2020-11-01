import client from '../Services/Client'

export const initialState = {
    showRegister: false,
    user: {},
}

function reducer (state, action) {
    switch(action.type) {
        case 'SHOW_REGISTER':
            return {
                ...state,
                showRegister: action.item,
            };
        case 'ADD_USER':
            client.setDataAndToken(action.item)
            return {
                ...state,
                user: action.item
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.item
            }
        default:
            return state;
    }
}

export default reducer