


const WhyUs_Quality = () => {
    return (
        <section className="bg-[#deefff] py-16"> 
            <h3 className="text-2xl sm:text-4xl py-10 text-center font-medium font-serif">Quality you don’t have to question</h3>
            <div className="flex justify-around px-2 sm:px-0 flex-wrap gap-10 max-sm:gap-16">
                <CardComponent imageUrl="https://pillup.com/assets/Why%20Us/quality1.png" text="Third party lab tested" /> 
                <CardComponent imageUrl="https://pillup.com/assets/Why%20Us/quality2.png" text="Genuine medicines" />               
                <CardComponent imageUrl="https://pillup.com/assets/Why%20Us/quality3.png" text="Supply chain tracking" />               
                <CardComponent imageUrl="https://pillup.com/assets/Why%20Us/quality4.png" text="Qualified pharmacists" />               
            </div>
        </section>
    )
}


const CardComponent = ({imageUrl, text}) =>{
    return(
        <div className="flex flex-col w-max items-center">
            <img className="w-[120px] h-[120px]" src={imageUrl} alt="" />
            <p className="text-lg sm:text-xl sm:font-semibold mt-2">{text}</p>
        </div>
    )
}

export default WhyUs_Quality