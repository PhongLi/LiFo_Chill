const setAuthLoading = (payload) => ({
    type: 'set_auth_loading',
    payload,
});

const forceUpdateMetaData = (payload) => ({
    type: 'update_metadata',
    payload,
});
const createTemplate = (payload) => ({
    type: 'create_template',
    payload,
});
const deleteTemplate = (payload) => ({
    type: 'delete_template',
    payload,
});
const updateTemplate = (payload) => ({
    type: 'update_template',
    payload,
});
export { setAuthLoading, forceUpdateMetaData, createTemplate, deleteTemplate, updateTemplate };
