export const INITIAL_STATE = {
    authLoading: false,
    data: {},
};

function reducer(state, action) {
    switch (action.type) {
        case 'set_auth_loading': {
            return { ...state, authLoading: action.payload.status };
        }
        case 'update_metadata': {
            return { ...state, data: action.payload.data };
        }
        case 'create_template': {
            const newTemplate = action.payload;
            const newTemplates = [...state.data.templates, newTemplate];
            const newData = { ...state.data, templates: newTemplates };
            return { ...state, data: newData };
        }
        case 'delete_template': {
            const newTemplates = [...state.data.templates].filter((t) => t._id !== action.payload.id);
            const newData = { ...state.data, templates: newTemplates };
            return { ...state, data: newData };
        }
        case 'update_template': {
            let newTemplates = [...state.data.templates];
            const templateIndex = newTemplates.findIndex((t) => t._id === action.payload._id);
            newTemplates.splice(templateIndex, 1, action.payload);
            const newData = { ...state.data, templates: newTemplates };
            return { ...state, data: newData };
        }
        default: {
            throw new Error('Invalid Actions');
        }
    }
}

export default reducer;
