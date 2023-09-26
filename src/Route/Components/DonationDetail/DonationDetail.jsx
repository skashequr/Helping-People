
import { Link, useParams } from "react-router-dom";
import {useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'



const DonationDetail = ({carddetails}) => {
    // console.log(carddetails)
    const { Picture, Title, Category, Button_bg, Text_bg, id , Category_bg , Price,Description} = carddetails
    


  const idd = useParams()



  const handleDonateCare = () => {
    const addeddonation = [];

    const donations = JSON.parse(localStorage.getItem("donation"));

    
    if (!donations) {
      addeddonation.push(carddetails);
      localStorage.setItem("donation", JSON.stringify(addeddonation));
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    } 
    
    else {


      const isExits = donations.find((donate) => donate.id === id);

      
      if (!isExits) {

        addeddonation.push(...donations, carddetails);
        localStorage.setItem("donation", JSON.stringify(addeddonation));
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
       
      } else {
        
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You Already Donate This',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }

    


    }
  }



    const cardStyle = {
        backgroundColor: Button_bg, 
      };
    const ButtonBg = {
      backgroundColor: Text_bg,
    }
     
    return (
       
      <div className="flex justify-center items-center">
         {/* <div className="h-[650px] mt-14">
        <div className="h-[650px]">
          <div>
          <img
            className="rounded object-cover w-[1300px] mx-auto shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-[700px]"
            src={Picture}
            alt=""
          />
          <div className=" -mt"><button onClick={handleDonateCare} className="p-3 rounded-md text-white " style={ButtonBg}>
            Donate {Price}
          </button></div>
          </div>
        </div>
        <div className=" m-24">
          
          <h1> {Title} </h1>
          <p>{Description}</p>
        </div>
      </div> */}
      <div className="card mt-16 bg-base-100 shadow-xl bg-cover w-[1200px] ">
  <figure><img className=" w-full " src={Picture} alt="Shoes" /></figure>
  <div className=" -mt-32 p-10 bg-black bg-opacity-30 bg-mix-blend-darken"><button onClick={handleDonateCare} className="p-3 rounded-md text-white " style={ButtonBg}>
            Donate {Price}
          </button></div>
  <div className="card-body">
    <h2 className="card-title text-black font-bold text-4xl">{ Title}</h2>
    
    <p className=" mt-6">{ Description}</p>
  </div>
</div>
    </div>
    
    
    
    

    );
};

export default DonationDetail;