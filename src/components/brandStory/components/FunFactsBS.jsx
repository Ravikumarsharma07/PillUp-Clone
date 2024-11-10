const FunFactsBS = () => {
  return (
    <section className="py-20 sm:p-20 bg-[#e9e9e9] flex flex-col items-center max-w-full overflow-hidden">
      <h3 className="text-center text-4xl sm:text-5xl font-semibold">Fun Facts!</h3>

      <div className="max-w-[1200px] py-16 px-20 flex flex-wrap gap-20 justify-center">
       {/* &&&&&&&&&&&&&&&&&&&&&     FIRST CARD     &&&&&&&&&&&&&&&&&&&&&&&&&& */}
        <div className="h-[330px] w-[330px] sm:h-[360px] sm:w-[360px] bg-white py-10 px-7 flex flex-col justify-between items-center">
          <h4 className="text-lg font-semibold text-center">
            Our daily medicines per customer range from
          </h4>
          <img
            className="h-24"
            src="https://pillup.com/assets/BrandStory/funFact1.png"
            alt="tablets icon"
          />
          <p className="text-5xl font-bold">4-25</p>
        </div>


       {/* &&&&&&&&&&&&&&&&&&&&&     SECOND CARD     &&&&&&&&&&&&&&&&&&&&&&&&&& */}
        <div className="h-[330px] w-[330px] sm:h-[360px] sm:w-[360px]  bg-white py-10 px-7 flex flex-col justify-between items-center">
          <h4 className="text-lg font-semibold text-center">
            Our daily medicine doses range from
          </h4>
          <img
            className="h-24"
            src="https://pillup.com/assets/BrandStory/funFact2.png"
            alt="tablets icon"
          />
          <p className="text-5xl font-bold">
            2-8<span className="text-lg font-normal">pouches</span>
          </p>
        </div>


       {/* &&&&&&&&&&&&&&&&&&&&&     THIRD CARD     &&&&&&&&&&&&&&&&&&&&&&&&&& */}
        <div className="h-[330px] w-[330px] sm:h-[360px] sm:w-[360px] bg-white py-10 px-7 flex flex-col justify-between items-center">
          <h4 className="text-lg font-semibold text-center">
            The healthcare problems we help you with
          </h4>
          <div  className="flex justify-between gap-4 items-center w-full pb-6 ">
            <img
              width="100px"
              src="https://pillup.com/assets/BrandStory/funFact3.png"
              alt="heart on hand icon"
            />
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-lg font-semibold  relative right-1">
                <img
                  width="50px"
                  src="https://pillup.com/assets/BrandStory/ff31.png"
                  alt="diabetes"
                />
                Diabetes
              </p>{" "}
              <p className="flex items-center gap-2 text-lg font-semibold mt-3">
                <img
                  width="40px"
                  src="https://pillup.com/assets/BrandStory/ff32.png"
                  alt="diabetes"
                />
                Cardiovascular
              </p>{" "}
              <p className="flex items-center gap-2 text-lg font-semibold mt-3">
                <img
                  width="40px"
                  src="https://pillup.com/assets/BrandStory/ff33.png"
                  alt="diabetes"
                />
                Neurological
              </p>
            </div>
          </div>
        </div>



       {/* &&&&&&&&&&&&&&&&&&&&&     FOURTH CARD     &&&&&&&&&&&&&&&&&&&&&&&&&& */}
        <div className="h-[330px] w-[330px] sm:h-[360px] sm:w-[360px]  bg-white py-10 px-7 flex flex-col justify-between items-center">
          <h4 className="text-lg font-semibold text-center">
            Our top health goals
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-6">
          <CardComponent imgURL="https://pillup.com/assets/BrandStory/ff41.png" text="Increase Adherence" />
          <CardComponent imgURL="https://pillup.com/assets/BrandStory/ff43.png" text="No Medicine wastage" />
          <CardComponent imgURL="https://pillup.com/assets/BrandStory/ff42.png" text="Precise dosage" />
          <CardComponent imgURL="https://pillup.com/assets/BrandStory/ff44.png" text="Healthier life" />
          </div>

        </div>
      </div>
    </section>
  );
};

const CardComponent = ({imgURL, text}) => {
    return(
        <div className="w-[120px] flex flex-col justify-center items-center">
            <img className="w-[50px]" src={imgURL} alt="fun fact icon" />
            <p className="text-center text-[17px] font-semibold">{text}</p>
        </div>
    )
}

export default FunFactsBS;
