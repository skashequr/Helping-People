import { useRef, useState } from "react";
import Swal from "sweetalert2";
import { createContext } from "react";
export const AssetContext = createContext("gtyujtyjtyujtfgutfr") 

const Hero = ({data}) => {

const [searchitems,setSearchitems] = useState([])
    
    const inputRef = useRef(null);
    // console.log(data)

    function handleClick() {
      
      console.log(inputRef.current.value);
     const finddata = data.filter((detail) => detail.Category.toLowerCase() === inputRef.current.value.toLowerCase())
     console.log(finddata);
     setSearchitems(finddata) 
     
      if (inputRef.current) {
        inputRef.current.value = '';
      }
      if (finddata.length === 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No Data Found in this name',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      
        
      }
    }
    return (
      <AssetContext.Provider value={searchitems}>
                   <div>
          <div className="hero min-h-screen bg-slate-200 bg-blend-screen" style={{backgroundImage: 'url(https://i.ibb.co/JHXn16P/image.png)'}}>
  <div className=" "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="text-5xl font-bold mb-10 text-black">I Grow By Helping People In Need</h1>
     <div className=" flex justify-center items-center">
     <input 
ref={inputRef}
type="text"
id="message"
name="message"  placeholder="Search here" className="input input-bordered text-black lg:w-[500px] w-[200px] " />
      <button onClick={handleClick} type="text" className="btn btn-primary lg:w-[110px] w-20 bg-[#FF444A]">Search</button>
     </div>
    </div>
  </div>
</div>
        </div>
      </AssetContext.Provider>

    );
};
export default Hero;