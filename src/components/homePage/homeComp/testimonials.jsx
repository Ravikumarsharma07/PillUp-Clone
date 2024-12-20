import { useState } from "react";


const Testimonials = () => {

  const [videoToShow, setVideoToShow] = useState({
    id: 0,
    name: "Dr. Aruna Broota",
    nameAndAge: "60, Aruna ",
    image: "https://img.youtube.com/vi/fymHY2CRsD8/sddefault.jpg",
    video: "https://www.youtube.com/embed/fymHY2CRsD8?si=E9ArCaDsQ24C_bKY",
  });

  const [customer1, setCustomer1] = useState({
    id: 1,
    name: "Sanjana",
    nameAndAge: "35, Sanjana ",
    image: "https://img.youtube.com/vi/m7Jcg6pkjIw/sddefault.jpg",
    video: "https://www.youtube.com/embed/m7Jcg6pkjIw?si=sRTISONeWdkXq9OI",
  });

  const [customer2, setCustomer2] = useState({
    id: 2,
    name: "Fawzan",
    nameAndAge: "29, Fawzan ",
    image: "https://img.youtube.com/vi/VrFLwZfic7o/sddefault.jpg",
    video: "https://www.youtube.com/embed/VrFLwZfic7o?si=9402XOHHAOxme4PI",
  });

  const [customer3, setCustomer3] = useState({
    id: 3,
    name: "Sarthak",
    nameAndAge: "26, Sarthak ",
    image: "https://img.youtube.com/vi/z8i4ayMzXIg/sddefault.jpg",
    video: "https://www.youtube.com/embed/z8i4ayMzXIg?si=rGSdH7RqXksaPKDx",
  });



  const handleClick = (customer, setCustomer) =>{
    let customerData = customer;
    setCustomer(videoToShow);
    setVideoToShow(customerData);
  }




  return (
    <section className=" overflow-hidden py-10 flex  flex-col gap-6 sm:gap-10 items-center">
      <h2 className="text-3xl sm:text-4xl text-center font-semibold">
        People are loving PillUp
      </h2>
      <iframe
        className="h-[250px] sm:h-[360px] md:h-[450px] lg:h-[550px] xl:h-[540px] w-5/6 max-w-[840px] rounded-xl shadow-2xl"
        key={videoToShow.id}
        src={videoToShow.video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div
        className="grid  sm:grid-cols-3 gap-3 sm:gap-10 w-5/6 max-w-[840px]"
        key={videoToShow}
      >
        <div
          id="first"
          onClick={() => handleClick(customer1, setCustomer1)}
          key={customer1.id}
          className="max-sm:flex max-sm:gap-2"
        >
          <img
            src={customer1.image}
            alt="customer"
            className="rounded-xl max-sm:w-32"
          />
          <div>
            <h3 className="font-bold">
              PillUp Customer Story | {customer1.name}
            </h3>
            <p className="opacity-90">{customer1.nameAndAge}</p>
          </div>
        </div>

        <div
          id="second"
          onClick={() => handleClick(customer2, setCustomer2)}
          key={customer2.id}
          className="max-sm:flex max-sm:gap-2"
        >
          <img
            src={customer2.image}
            alt="customer"
            className="rounded-xl max-sm:w-32"
          />
          <div>
            <h3 className="font-bold ">
              PillUp Customer Story | {customer2.name}
            </h3>
            <p className="opacity-90">{customer2.nameAndAge}</p>
          </div>
        </div>

        <div
          id="third"
          onClick={() => handleClick(customer3, setCustomer3)}
          key={customer3.id}
          className="max-sm:flex max-sm:gap-2"
        >
          <img
            src={customer3.image}
            alt="customer"
            className="rounded-xl max-sm:w-32"
          />
          <div>
            <h3 className="font-bold">
              PillUp Customer Story | {customer3.name}
            </h3>
            <p className="opacity-90">{customer3.nameAndAge}</p>
          </div>
        </div>
      </div>
    </section>
  );
}



export default Testimonials;
