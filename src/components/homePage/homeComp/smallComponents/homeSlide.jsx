import "./../styles/pageFive.css";

function Slide(props) {
  console.log(props)
  return (
    <section
      className="w-screen flex max-md:flex-col max-md:gap-16 max-lg:py-16 justify-between items-center p-4 md:px-10"
      style={{ backgroundColor: props.bgColor }}
    >
      <div className="md:w-[45%]">
        <h3 className="text-2xl md:text-3xl lg:text-[2.25rem] max-md:text-center mb-4 font-semibold">{props.num}</h3>
        <h3 className="text-2xl md:text-3xl lg:text-[2.25rem] max-md:text-center mb-4 ">{props.heading}</h3>
        <p className="max-md:text-center text-lg">{props.text}</p>
      </div>

      <div style={{ backgroundColor: props.bgColorImg}} className={`rounded-full h-[300px] md:h-[350px] lg:h-[500px] w-[300px] md:w-[350px] lg:w-[500px] flex-center`}>
        <img className={`w-[120px] md:w-[150px] lg:w-[200px] ${props.scaleForSmall} md:${props.scale}`} src={props.image} alt={props.alt} />
      </div>
    </section>
  );
}
export default Slide;
