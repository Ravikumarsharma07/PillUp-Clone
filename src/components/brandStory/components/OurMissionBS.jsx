const OurMissionBS = () => {
  return (
    <section className="bg-orange-50 h-max lg:h-screen max-md:gap-10 flex max-md:flex-col-reverse pb-16 md:py-0 justify-between items-center">
      <div className="md:w-[50%] max-md:px-3">
        <h3 className="text-3xl sm:text-4xl text-center font-semibold opacity-90">OUR MISSION</h3> 
        <p className="text-xl sm:text-2xl font-serif leading-10 mt-5 text-center tracking-widest opacity-80">
          Enhance people's quality of life by simplifying daily healthcare and
          improving medication adherence, enabling them to live longer and
          better.
        </p>
      </div>
      <img className="w-4/5 h-[500px] md:w-[50%] md:h-full overflow-hidden object-cover" src="https://pillup.com/assets/BrandStory/missionImg1.jpg" alt="flower" />
    </section>
  );
};

export default OurMissionBS;
