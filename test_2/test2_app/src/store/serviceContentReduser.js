const defaultState = {
    loading: false,
    services: []
};

const GET_SERVICE_REQUESTED = 'GET_SERVICE_REQUESTED';
const GET_SERVICE_SUCCESS = 'GET_SERVICE_SUCCESS';

const serviceContentReduser = (state = defaultState, action) => {
    switch (action.type) {
        case GET_SERVICE_REQUESTED:
            return {
                loading: true,
                services: [...state.services]
            }
        case GET_SERVICE_SUCCESS:
            return {
                loading: false,
                services: [...state.services, {...action.payload}]
            }
        default:
            return state
    }
}

export const getServiceContentRequestAction = () => ({type: GET_SERVICE_REQUESTED});
export const getServiceContentSuccessAction = (payload) => ({type: GET_SERVICE_SUCCESS, payload});

export default serviceContentReduser;