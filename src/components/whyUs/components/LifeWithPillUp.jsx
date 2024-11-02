import { useState } from "react";

const LifeWithPillUp = () => {
  const texts = [
    {
      id: 1,
      text: "Take exact doses, pre-sorted with clear instructions on the PillUp pouch and set your time and energy free.",
    },
    {
      id: 2,
      text: "No more buying of full strips of medicines and seeing them lying in your drawers. Pay for only the medicines you need.",
    },
    {
      id: 3,
      text: "Now you will never miss your medicines, thanks to our reminder system. Take your Medicines on time, ALL the time.",
    },
    {
      id: 4,
      text: "Clear labels on every sachet which indicates date, time & the medicine to be taken along with readable prescription.",
    },
    {
      id: 5,
      text: "Take exact doses, pre-sorted with clear instructions on the PillUp pouch and set your time and energy free.",
    },
  ];

  const [textToShow, setTextToshow] = useState(texts[0].text);

  const [topDistance, setTopDistance] = useState("top-[0%]");

  const handleHover = (e) => {
    const textId = e.target.id;
    const textToUpdate = texts.find((text) => text.id === Number(textId));
    setTextToshow(textToUpdate.text);
    switch (textId) {
      case "1":
        setTopDistance("top-[0%]");
        break;
      case "2":
        setTopDistance("top-[22%]");
        break;
      case "3":
        setTopDistance("top-[42%]");
        break;
      case "4":
        setTopDistance("top-[62%]");
        break;
      case "5":
        setTopDistance("top-[83%]");
        break;
        default:
            setTopDistance("top-[0%]")
            break
    }
  };

  return (
    <section className="sm:h-screen bg-orange-200 py-16 px-2 sm:px-10 flex flex-col items-center">
      <h3 className="text-2xl sm:text-6xl font-normal font-serif ">
        Life is easy with PillUp
      </h3>
      <div className="mt-10 flex items-center justify-center">
        <div className="py-5 px-2 sm:px-4">
          <TextLine
            handler={handleHover}
            id="1"
            text="Automatically refill your next dose"
          />
          <TextLine
            handler={handleHover}
            id="2"
            text="Helps elders become more independent"
          />
          <TextLine
            handler={handleHover}
            id="3"
            text="Ensures medicines are taken on time"
          />
          <TextLine
            handler={handleHover}
            id="4"
            text="Offer discounts on order & delivery"
          />
          <TextLine
            handler={handleHover}
            id="5"
            text="Avoids over or under dosage of medicines"
          />
        </div>
        <div className="rounded-full bg-[gray] h-[400px] w-[7px] relative">
          <span
            className={`transition-all duration-200 ease-linear absolute ${topDistance} rounded-full w-[9px] bg-black h-16`}
          ></span>
        </div>

        <div className="w-[85%] sm:w-3/6 px-2 sm:px-16">
          <p className="max-sm:text-2xl text-6xl font-semibold">“</p>
          <p className="max-sm:text-xl text-3xl text-center sm:tracking-wider font-serif leading-[70px]">
            {textToShow} 
          </p>
          <p className="text-6xl font-semibold text-end">”</p>
        </div>
      </div>
    </section>
  );
};

const TextLine = ({ text, id, handler }) => {
  return (
    <p
      onMouseOver={handler}
      id={id}
      className="cursor-pointer sm:text-2xl leading-[35px] max-sm:mt-5 sm:leading-[75px] text-center sm:font-semibold"
    >
      {text}
    </p>
  );
};

export default LifeWithPillUp;
