
const Donation = ({donateinf}) => {
   console.log(donateinf)
   const {Picture, Button_bg , Text_bg ,  Category_bg , Category , Title , Price} = donateinf;

   const cardStyle = {
    backgroundColor: Button_bg, // Set the background color for Category
  };

  const textStyle = {
    color: Text_bg, // Set the text color for Title
  };
  const CategoryStyle = {
    backgroundColor: Button_bg, 
}
const CatagoryBg ={
    backgroundColor: Category_bg,
  }


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl gap-5">
  <figure><img className=" w-full h-full" src={Picture} alt="Movie"/></figure>
  <div className="card-body">
  <div className=" w-20 p-1 m-1 rounded-sm" style={CategoryStyle}>
            <h2 className="flex justify-center items-center" style={textStyle}>{Category}</h2>
            </div>

            <h1 className="text-2xl font-bold text-gray-900">
            {Title}
        </h1>
        <h1 className="text-xl font-bold text-gray-700">
                {Price}
            </h1>

            <button className="px-3 mt-3 py-4 px-6 text-xs font-bold text-white rounded" style={CatagoryBg}>
            View Details
            </button>
  </div>
</div>
        </div>
    );
};

export default Donation;