import { useLoaderData } from "react-router-dom";
import Cards from "../../Route/Components/Cards/Cards";
import Hero from "../../Route/Components/Hero/Hero";



const Home = () => {
    
    const data = useLoaderData()
   
    return (
        <div>
            <Hero data={data}></Hero>
            <Cards></Cards>
           
      
            
        </div>
    );
};

export default Home;