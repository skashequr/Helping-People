import Donation from "../Donation/Donation";
import { useEffect, useState } from "react";



const Donations = () => {
    const [donate,setDonate] = useState([]);
    const [noDataFound,setNoDataFound] = useState(false);
    const [seeMore , setSeeMore] = useState(false)
    useEffect(()=>{
        const donations = JSON.parse(localStorage.getItem("donation"));
        if (donations) {
            setDonate(donations);

        }else{
            setNoDataFound("No Data Found");
        }
    },[])
    // console.log(donate)
    const handleSeeMore = ()=> {
        setSeeMore(!seeMore);
        console.log(seeMore)
       
    }
    return (
        <div>
           {
            seeMore ? 
            <div>
            {
                noDataFound ? <p className=" font-extrabold font-black text-4xl flex justify-center items-center h-[80vh]">{noDataFound}</p> 
                :  
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-2 gap-5 p-10">
                    {
                        donate.map(donateinf => <Donation key={donateinf.id} donateinf={donateinf}></Donation>)
                    }
                </div>
            }
           
        </div>
            
            :
            
<div>
            {
                noDataFound ? <p className=" font-extrabold font-black text-4xl flex justify-center items-center h-[80vh]">{noDataFound}</p> 
                :  
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-2 gap-5 p-10">
                    {
                        donate.slice(0, 4).map(donateinf => <Donation key={donateinf.id} donateinf={donateinf}></Donation>)
                    }
                </div>
            }
           
        </div>
            
           }
            
       
       {
        donate.length > 3 ?  <div className=" flex justify-center items-center"><button onClick={handleSeeMore} class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        Primary
    </button></div>
        : "  "
       }
        
        </div>
    
    );
};

export default Donations;




//     // console.log(carddetails)
//     const { Picture, Title, Category, Button_bg, Text_bg, id , Category_bg } = carddetails
    

//     const cardStyle = {
//         backgroundColor: Button_bg, // Set the background color for Category
//       };
    
//       const textStyle = {
//         color: Text_bg, // Set the text color for Title
//       };
//       const CategoryStyle = {
//         backgroundColor: Button_bg, 
//     }
//     const CatagoryBg ={
//         backgroundColor: Category_bg,
//       }
//     return (
       



//     );
// };


