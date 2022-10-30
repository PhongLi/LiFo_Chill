export const INITIAL_STATE = {
    authLoading: false,
};

function reducer(state, action) {
    switch (action.type) {
        case 'set_auth_loading': {
            return { ...state, authLoading: action.payload.status };
        }

        default: {
            throw new Error('Invalid Actions');
        }
    }
}

export default reducer;
