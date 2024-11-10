const OurVisionBS = () => {
    return (
      <section className="bg-red-400  h-[100vh] max-sm:h-max  max-sm:pt-16 box-content flex flex-row-reverse max-sm:flex-col-reverse justify-center sm:justify-end items-center">
        <div className="sm:w-[50%] px-6 py-10 sm:p-24">
          <h3 className="text-white text-3xl sm:text-4xl text-center font-semibold opacity-90">OUR VISION</h3> 
          <p className="text-white  text-xl sm:text-2xl font-serif max-sm:leading-[37px] leading-10 mt-5 text-center tracking-widest opacity-80">
          Our vision is to create a world-class product that makes accessing and managing medications simple, convenient, and stress-free for all. With our cutting-edge technology, manual sorting and dispensing of medications will be eliminated.
          </p>
        </div>
        <img className="w-[80%] max-sm:max-w-[360px] max-sm:h-[330px] sm:w-[50%] max-h-full object-cover" src="https://pillup.com/assets/BrandStory/vissionImg.jpg" alt="medicine in hand" />
      </section>
    );
  };
  
  export default OurVisionBS;
  