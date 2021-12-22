const user = (state = {}, action) => {
    switch (action.type) {
        case 'fetch-user':
            return action.user;
        case 'update-user':
            return action.user;
        default:
            return state
    }
}
export default user;