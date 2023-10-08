import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import ServiceDetailCard from './ServiceDetailCard';

const ServicesDetail = () => {
    const [eventData,setEventData]=useState([])
    const data=useLoaderData([])
     
    const {id}=useParams();
     
    useEffect(()=>{
        if(data.length>0){
            const findClickedItem=data.find(item=>item.id ==id)
        setEventData(findClickedItem)
        }
    },[data,id])

    return (
        <>
            <div>
                <ServiceDetailCard eventData={eventData}></ServiceDetailCard>
            </div>  
        </>
    );
};

ServicesDetail.propTypes = {
    
};

export default ServicesDetail;