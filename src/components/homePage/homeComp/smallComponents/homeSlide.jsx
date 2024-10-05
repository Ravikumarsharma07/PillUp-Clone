import "./../styles/pageFive.css";

function Slide(props) {
  return (
    <section
      className="home-page-5-slides"
      style={{ backgroundColor: props.bgColor }}
    >
      <div>
        <h3>{props.num}</h3>
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
      </div>
      <div style={{ backgroundColor: props.bgColorImg,position:props.position}}>
        <img style={{height:props.imgSize,position:props.imgPosition,bottom:"0px",}} src={props.image} alt={props.alt} />
      </div>
    </section>
  );
}
export default Slide;
