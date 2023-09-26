
const Donation = ({donateinf}) => {
   console.log(donateinf)
   const {Picture, Button_bg , Text_bg ,  Category_bg , Category , Title , Price ,Card_bg} = donateinf;

   const cardStyle = {
    backgroundColor: Button_bg, 
  };
  const btnbg = {
    backgroundColor: Text_bg, 
  };
  const cattext = {
    color : Text_bg,
  }



    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl gap-5" style={cardStyle}>
  <figure><img className=" w-full h-full" src={Picture} alt="Movie"/></figure>
  <div className="card-body">
  <div className=" w-20 p-1 m-1 rounded-sm" style={cardStyle}>
            <h2 className="flex justify-center items-center" style={cattext}>{Category}</h2>
            </div>

            <h1 className="text-2xl font-bold text-gray-900">
            {Title}
        </h1>
        <h1 className="text-xl font-bold text-gray-700">
                {Price}
            </h1>

            <button className="px-3 mt-3 py-4 px-6 text-xs font-bold text-white rounded" style={btnbg}>
            View Details
            </button>
  </div>
</div>
        </div>
    );
};

export default Donation;