const defaultState = {
    loading: false,
    services: []
};

export const GET_SERVICES_REQUESTED = 'GET_SERVICES_REQUESTED';
export const GET_SERVICES_SUCCESS = 'GET_SERVICES_SUCCESS';
export const GET_SERVICES_FAILURE = 'GET_SERVICES_FAILURE';


const serviceNameReduser = (state = defaultState, action) => {
    switch (action.type) {
        case GET_SERVICES_REQUESTED:
            return {
                loading: true,
                services: [...state.services]
            }
        case GET_SERVICES_SUCCESS:
            return {
                loading: false,
                services: [...action.payload]
            }
        case GET_SERVICES_FAILURE:
            return {
                loading: false,
                services: [...state.services],
                error: true
            }
        default:
            return state
    }
}

export const getServiceNameRequestAction = () => ({type: GET_SERVICES_REQUESTED});
export const getServiceNameSuccessAction = (payload) => ({type: GET_SERVICES_SUCCESS, payload});
export const getServiceNameErrorAction = () => ({type: GET_SERVICES_FAILURE});

export default serviceNameReduser;
