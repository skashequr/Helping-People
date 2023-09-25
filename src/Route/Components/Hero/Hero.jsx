
const Hero = () => {
    return (
        <div>
          <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/JHXn16P/image.png)'}}>
  <div className="background-blend-mode: overlay;"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="text-5xl font-bold mb-10 text-black">I Grow By Helping People In Need</h1>
     <div className=" flex justify-center items-center">
     <input type="text" placeholder="Search here" className="input input-bordered text-black w-[500px] " />
      <button className="btn btn-primary w-[110px] bg-[#FF444A]">Search</button>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;