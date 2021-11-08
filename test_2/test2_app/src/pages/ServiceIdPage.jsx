import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {GET_SERVICE_REQUESTED} from "../saga/reducers/serviceContentReducer";
import ErrorBlock from "../components/UI/error/ErrorBlock";
import Loader from "../components/UI/Loader/Loader";

const ServiceIdPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const store = useSelector(store => store.serviceContent);
    const error = store.error;
    const loading = store.loading;
    const service = store.services.find(i => i.id === params.id);

    useEffect(()=>{
        if (!service) {
            dispatch({type:GET_SERVICE_REQUESTED, payload: params.id});
        }
    },[]);



    return (
        <div style={{textAlign: 'left', paddingLeft: '20px'}}>
            {
                (!loading && service) ?
                    (<div>
                        <h1>{service.name}</h1>
                        <p>{service.content}</p>
                        <p>Цена: {service.price} р.</p>
                    </div>)
                    : (error) ?
                        <ErrorBlock action={{type:GET_SERVICE_REQUESTED, payload: params.id}}/>
                    : <Loader/>
            }
        </div>
    );
};

export default ServiceIdPage;