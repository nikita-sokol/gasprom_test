import { getServiceNameRequestAction, getServiceNameSuccessAction } from "../store/serviceNameReduser";
import { getServiceContentRequestAction, getServiceContentSuccessAction } from "../store/serviceContentReduser";

export const fetchServiseContent = (store ,params) => {
    return dispatch => {
        if (!store.services.find(i => i.id == params.id)) {
            dispatch(getServiceContentRequestAction());
            fetch(`http://localhost:7070/api/services/${params.id}`)
                .then(response => response.json())
                .then(json => {

                    console.log('jsonDesc',json);
                    dispatch(getServiceContentSuccessAction(json));
                });
        }
    }
}

// export const fetchServiseContent = (store ,params) => {
//     return async dispatch => {
//         if (!store.services.find(i => i.id == params.id)) {
//             dispatch(getServiceRequestAction());
//             const response = await fetch(`http://localhost:7070/api/services/${params.id}`);
//             const json = await response.json();
//             console.log('jsonDesc',json);
//             dispatch(getServiceSuccessAction(json));
//         }
//     }
// }

export const fetchServiseName = () => {
    return dispatch => {
        dispatch(getServiceNameRequestAction());
        fetch('http://localhost:7070/api/services')
            .then(response => response.json())
            .then(json => {
                console.log('jsonName',json);
                dispatch(getServiceNameSuccessAction(json));
            });
    }
}