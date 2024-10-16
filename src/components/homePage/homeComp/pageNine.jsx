import "./styles/pageNine.css";
import { useRef, useState } from "react";


function PageNine() {
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
  })  
  
  const [customer3, setCustomer3] = useState({
    id: 3,
    name: "Sarthak",
    nameAndAge: "26, Sarthak ",
    image: "https://img.youtube.com/vi/z8i4ayMzXIg/sddefault.jpg",
    video: "https://www.youtube.com/embed/z8i4ayMzXIg?si=rGSdH7RqXksaPKDx",
  })


  function firstHandler(){
      const currentVideo = videoToShow;
      const customer = customer1;
      setVideoToShow(prevCustomer => customer)
      setCustomer1(prevVideo => currentVideo);
      console.log(customer);
  }

  function secondHandler(){
      const currentVideo = videoToShow;
      const customer = customer2;
      setVideoToShow(prevVideo => customer)
      setCustomer2(prevCustomer => currentVideo); 
      console.log(customer);

  }
  
  function thirdHandler(){
      const currentVideo = videoToShow;
      const customer = customer3;
      setVideoToShow(prevVideo => customer);
      setCustomer3(prevCustomer => currentVideo);
  }


  return (
    <section className="page-9-container">
      <h2>People are loving PillUp</h2>
      <iframe
        key={videoToShow.id}
        src={videoToShow.video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>


      <div className="page-9-videos-container" key={videoToShow}>
      <div id="first" onClick={firstHandler} key={customer1.id} >
          <img src={customer1.image} alt="customer" />
          <h3>PillUp Customer Story | {customer1.name}</h3>
          <p>{customer1.nameAndAge}</p>
        </div>
        
        <div id="second" onClick={secondHandler} key={customer2.id} >
          <img src={customer2.image} alt="customer" />
          <h3>PillUp Customer Story | {customer2.name}</h3>
          <p>{customer2.nameAndAge}</p>
        </div>
        
        <div id="third" onClick={thirdHandler} key={customer3.id} >
          <img src={customer3.image} alt="customer" />
          <h3>PillUp Customer Story | {customer3.name}</h3>
          <p>{customer3.nameAndAge}</p>
        </div>
      </div>
    </section>
  );
}

export default PageNine;
