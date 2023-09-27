import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import { useContext } from "react";
import { AssetContext } from "../Hero/Hero";


const Cards = () => {
    const searchData = useContext(AssetContext)
   const cardsData = useLoaderData()
   console.log(searchData)
    return (
        <div>
           <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16 p-8 max-w-screen-fit mx-auto justify-center items-center">
           {
                cardsData.map(card => <Card key={card.id} card={card}></Card>)
            }
           </div>
        </div>
    );
};

export default Cards;