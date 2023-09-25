import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetail from "../DonationDetail/DonationDetail";



const DonateDetails = () => {
    
    // const [donat , setDonate] = useState()
    const {id} = useParams()
    const data = useLoaderData()
    console.log(data)
    const [carddetails,setDetails] = useState({})
    useEffect(()=>{
    const findCard = data.find((card)=> card.id == id )
   
    setDetails(findCard)
    
    },[data,id])
    // console.log(carddetails)

    return (
        <div>
            <DonationDetail carddetails={carddetails}></DonationDetail>
           
        
        </div>
    );
};

export default DonateDetails;