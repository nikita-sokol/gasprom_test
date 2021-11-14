import React, {useEffect} from 'react';
import MyLink from "./UI/link/MyLink";
import {useDispatch, useSelector} from "react-redux";
import {getServiceNameRequestAction} from "../store/serviceNameReducer";
import ErrorBlock from "./UI/error/ErrorBlock";
import Loader from "./UI/Loader/Loader";
import {fetchServiseName} from "../asyncActions/fetching";

const ServiceList = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchServiseName());
    },[]);

    const store = useSelector(store => store.serviceName);
    const loading = store.loading;
    const services = store.services;
    const error = store.error;

    return (
        <div>
                {
                    (!loading && services) ?
                        store.services.map((service)=>
                            <MyLink to={`/${service.id}/details`} key={service.id} >{service.name}</MyLink>
                        )
                    : (error) ?
                            <ErrorBlock action={getServiceNameRequestAction()}/>
                    : <Loader/>
                }
        </div>
    );
};

export default ServiceList;
