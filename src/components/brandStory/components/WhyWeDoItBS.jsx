const WhyWeDoItBS = () => {
  return (
    <section className="bg-orange-50 h-max py-24 box-content flex max-sm:flex-col-reverse justify-center sm:justify-between items-center">
      <div className="sm:w-[54%] p-8 md:px-10 lg:px-[10%] h-max">
        <h3 className="text-3xl sm:text-5xl font- opacity-90 max-sm:text-center max-sm:mt-8">
          WHY WE DO IT
        </h3>
        <p className=" max-sm:text-center text-[22px] lg:text-[28px] md:text-[25px] font-serif leading-[55px] mt-10 tracking-wider opacity-80">
          Our goal is to improve the lives of patients and their families by
          ensuring that every medication is delivered accurately, on time, and
          with the highest level of care. We are obsessed with good health and
          believe that by improving medication adherence, we can improve the
          impact of medicines drastically, reduce healthcare bills, and
          ultimately improve the long-term health of all.
        </p>
      </div>
      <img
        className="w-[360px] max-sm:h-[330px] sm:w-[40%] max-h-[80%] object-cover"
        src="https://pillup.com/assets/BrandStory/whyWeDo1.jpg"
        alt="flower"
      />
    </section>
  );
};

export default WhyWeDoItBS;
