import { access } from "../constances/access"

const initialState = {
    accessCode: '',
    message: '',
    displayColor: 'green'
}

const reducerAccess = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MESSAGE':
            return {
                ...state,
                message: `${state.accessCode === access ?
                    'Access Granted' : 'Access Denied'}`,
                displayColor: `${state.accessCode === access ?
                    'green' : 'red'}`,
                accessCode: ''
            };
        case 'SET_ACCESSCODE':
            return {
                ...state,
                accessCode: action.value,
                message: `${'*'.repeat(action.value.length)}`,
                displayColor: 'green'
            };
        case 'CLEAR':
            return {
                ...state,
                accessCode: '',
                message: '',
                displayColor: 'green'
            };
        default:
            return state
    };
};

export default reducerAccess;