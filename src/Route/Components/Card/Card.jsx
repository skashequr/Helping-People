
import { Link, useParams } from "react-router-dom";
import {useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Card = ({ card }) => {
    const { Picture, Title, Category, Button_bg, Text_bg, id} = card;
    // console.log(Button_bg, Text_bg);
  
    const cardStyle = {
      backgroundColor: Button_bg, // Set the background color for Category
    };
  
    const textStyle = {
      color: Text_bg, // Set the text color for Title
    };
    const CategoryStyle = {
      backgroundColor: Button_bg, 
  }
    

  const idd = useParams()



  const handleDonateCare = () => {
    const addeddonation = [];

    const donations = JSON.parse(localStorage.getItem("donation"));

    
    if (!donations) {
      addeddonation.push(card);
      localStorage.setItem("donation", JSON.stringify(addeddonation));
      alert("Sheikh okk add alaart")
    } 
    
    else {


      const isExits = donations.find((donate) => donate.id === id);

      
      if (!isExits) {

        addeddonation.push(...donations, card);
        localStorage.setItem("donation", JSON.stringify(addeddonation));
        alert("Sheikh okk add alaart")
       
      } else {
        alert("Sheikh okk add")
      }

    


    }



    
  };
  


  
 
    return (
      
      <div>
        <Link to={`/Donation/Deatils/${id}`}><div className="card bg-base-100 shadow-xl" style={cardStyle}>
          <figure>
            <img className="w-full" src={Picture} alt="Product" />
          </figure>
          <div>
            <div className=" w-24 p-2 m-2 rounded-sm" style={CategoryStyle}>
            <h2 className=" flex justify-center items-center " style={textStyle}>{Category}</h2>
            </div>
            <p className="font-semibold text-lg p-2" style={textStyle}>{Title}</p>
          </div>
        </div></Link>
        
      </div>
    );
  };
  
  export default Card;
  