const WhoWeAreBS = () => {
    return (
      <section className="bg-orange-50 h-max sm:py-24 ">
        <div className="bg-[#dac0c0] w-[80%] max-lg:w-full max-sm:py-20 sm:p-5 pl-0 flex sm:flex-row-reverse flex-col-reverse justify-end items-center">
        <div className="sm:w-max px-2 md:px-10 lg:pl-[6%] h-max">
          <h3 className="text-3xl sm:text-5xl font- opacity-90 max-sm:text-center max-sm:mt-12">
            WHO WE ARE
          </h3>
          <p className=" max-sm:text-center text-[22px] lg:text-[28px] md:text-[25px] font-serif leading-[50px] mt-10 tracking-wide opacity-80">
          Think of us as your personal assistant,
          who helps you stay on track with your medications. From WhatsApp messages to app reminders, we send you reminders on your preferred method of communication. Even when you are travelling, your Pillup box will travel with you and remind you,</p>
          <p className="text-end font-serif text-[24px] lg:text-[30px] md:text-[27px] italic p-3">‘Hey, it’s time to take your medicine’</p>
        </div>
        <img
          className="w-[360px] max-sm:h-[330px] sm:w-[300px] max-h-[50%] object-cover"
          src="https://pillup.com/assets/BrandStory/whoWeAre.jpg"
          alt="flower"
        />
        </div>
      </section>
    );
  };
  
  export default WhoWeAreBS;
  