


const WhyUsCard = ({imgURL, heading, description}) => {
    return (
        <div className="w-[370px] h-max flex flex-col items-center mt-10">
            <img className="max-sm:h-[250px] h-[300px]" src={imgURL} alt={imgURL} />  
            <h3 className="text-center text-2xl sm:font-semibold py-4">{heading}</h3>
            <p className="text-center leading-5">{description}</p>          
        </div>
    )
}


export default WhyUsCard;