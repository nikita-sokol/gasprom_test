const defaultState = {
    loading: false,
    services: [],
    error: false
};

export const GET_SERVICE_REQUESTED = 'GET_SERVICE_REQUESTED';
export const GET_SERVICE_SUCCESS = 'GET_SERVICE_SUCCESS';
export const GET_SERVICE_FAILURE = 'GET_SERVICE_FAILURE';

const serviceContentReduser = (state = defaultState, action) => {
    switch (action.type) {
        case GET_SERVICE_REQUESTED:
            return {
                loading: true,
                services: [...state.services],
                error: false
            }
        case GET_SERVICE_SUCCESS:
            return {
                loading: false,
                services: [...state.services, {...action.payload}],
                error: false
            }
        case GET_SERVICE_FAILURE:
            return {
                loading: false,
                services: [...state.services],
                error: true
            }
        default:
            return state
    }
}

export const getServiceContentRequestAction = () => ({type: GET_SERVICE_REQUESTED});
export const getServiceContentSuccessAction = (payload) => ({type: GET_SERVICE_SUCCESS, payload});
export const getServiceContentErrorAction = () => ({type: GET_SERVICE_FAILURE});

export default serviceContentReduser;
