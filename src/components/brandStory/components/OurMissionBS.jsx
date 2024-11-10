const OurMissionBS = () => {
  return (
    <section className="bg-orange-50 h-screen max-sm:py-0 box-content flex max-sm:flex-col-reverse justify-center sm:justify-end items-center">
      <div className="sm:w-[50%] p-8 sm:p-24">
        <h3 className="text-3xl sm:text-4xl text-center font-semibold opacity-90">OUR MISSION</h3> 
        <p className="text-xl sm:text-2xl font-serif leading-10 mt-5 text-center tracking-widest opacity-80">
          Enhance people's quality of life by simplifying daily healthcare and
          improving medication adherence, enabling them to live longer and
          better.
        </p>
      </div>
      <img className="w-[360px] max-sm:h-[330px] sm:w-[50%] max-h-full object-cover" src="https://pillup.com/assets/BrandStory/missionImg1.jpg" alt="flower" />
    </section>
  );
};

export default OurMissionBS;
