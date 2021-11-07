const defaultState = {
    loading: false,
    services: []
};

const GET_SERVICES_REQUESTED = 'GET_SERVICES_REQUESTED';
const GET_SERVICES_SUCCESS = 'GET_SERVICES_SUCCESS';

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
        default:
            return state
    }
}

export const getServiceNameRequestAction = () => ({type: GET_SERVICES_REQUESTED});
export const getServiceNameSuccessAction = (payload) => ({type: GET_SERVICES_SUCCESS, payload});

export default serviceNameReduser;