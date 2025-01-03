import "./styles/pageFour.css";

const  ContactPage = () => {
  return(
    <>
      {window.innerWidth > 776 ? <ForBigScreen /> : <ForMobile />}
    </>
  )
}


function ForMobile(){
  return (
    <section className="home-section-4">
        <img src="https://pillup.com/assets/quoteImg.png" alt="person" />
      <div className="section-4-box-2">
        <p>“Ready to try PillUp for free?”</p>
        <a href="tel:+918920878094">Request Call</a>
      </div>
    </section>
  );
}


function ForBigScreen(){
return (
  <section className="home-section-4 p-10 lg:p-20">
    <div className="section-4-box-1">
      <img src="https://pillup.com/assets/quoteElement1.svg" alt="design" />
      <img src="https://pillup.com/assets/quoteImg.png" alt="person" />
    </div>
    <div className="section-4-box-2">
      <p>“Ready to try PillUp for free?”</p>
      <a href="tel:+918920878094">Request Call</a>
      <img src="https://pillup.com/assets/quoteElement2.svg" alt="design" />
    </div>
  </section>
);
}
export default ContactPage;
