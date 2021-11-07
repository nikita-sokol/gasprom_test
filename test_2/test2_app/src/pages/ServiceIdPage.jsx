import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchServiseContent} from "../asyncActions/fetching";

const ServiceIdPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const store = useSelector(store => store.serviceContent);

    useEffect(()=>{
        dispatch(fetchServiseContent(store, params));
    },[]);

    const loading = store.loading;
    const service = store.services.find(i => i.id == params.id);

    return (
        <div style={{textAlign: 'left', paddingLeft: '20px'}}>
            {
                (!loading && service) ?
                    (<div>
                        <h1>{service.name}</h1>
                        <p>{service.content}</p>
                        <p>Цена: {service.price} р.</p>
                    </div>)
                    :   "Подождать нужно..."
            }
        </div>
    );
};

export default ServiceIdPage;