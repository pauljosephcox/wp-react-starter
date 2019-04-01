export default (state = {}, action) => {

    switch (action.type) {

        case 'CONFIGURE':
            return {
                site: action.payload.site,
            }
        case 'GET_CONFIGURATION_SUCCESS':
            return Object.assign({},state,{...action.payload.configuration})
        default:
            return state
    }
}
