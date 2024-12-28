



const HowItWorks_Hero = () => {

  const handleClick = () => {
    if(window.innerWidth > 600){
      window.scrollTo({top:4700, behavior:"smooth" })
    }else{
      window.scrollTo({top:3500, behavior:"smooth" })
      setTimeout(() => {
        window.scrollTo({top:4500, behavior:"smooth" })
      }, 1000);
    }
  }

  return (
    <section className="max-sm:h-[70vh] h-[90vh] bg-gradient-to-r from-violet-500 to-blue-300 flex gap-16 justify-center items-center flex-col">
      <div>
        <HeadingHIW text="PULL - PEEL - POP" />
        <HeadingHIW text="Make Life Easy Today" />
      </div>
      <button onClick={handleClick} className="h-12 w-36 sm:w-44 sm:h-[65px] text-xl font-semibold bg-white rounded-full border border-black">How it works</button>
    </section>
  );
};


const HeadingHIW = ({ text }) => {
  return <h2 className="max-xsm:text-3xl text-[46px] md:text-6xl lg:text-6xl text-center mt-4 text-white font-semibold">{text}</h2>;
};

export default HowItWorks_Hero;
