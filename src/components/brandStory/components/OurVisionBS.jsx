const OurVisionBS = () => {
    return (
      <section className="bg-red-400  h-max lg:h-screen max-md:gap-10 flex flex-row-reverse max-md:flex-col-reverse pb-16 md:py-0 justify-between items-center">
        <div className="md:w-[50%] max-md:px-3">
          <h3 className="text-white text-3xl sm:text-4xl text-center font-semibold opacity-90">OUR VISION</h3> 
          <p className="text-white  text-xl sm:text-2xl font-serif max-sm:leading-[37px] leading-10 mt-5 text-center tracking-widest opacity-80">
          Our vision is to create a world-class product that makes accessing and managing medications simple, convenient, and stress-free for all. With our cutting-edge technology, manual sorting and dispensing of medications will be eliminated.
          </p>
        </div>
        <img className="w-4/5 h-[500px] md:w-[50%] md:h-full overflow-hidden object-cover" src="https://pillup.com/assets/BrandStory/vissionImg.jpg" alt="medicine in hand" />
      </section>
    );
  };
  
  export default OurVisionBS;
  