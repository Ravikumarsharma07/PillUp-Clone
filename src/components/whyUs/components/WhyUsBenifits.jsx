import WhyUsCard from "./smallComponents/WhyUsCard";


const WhyUSBenifits = () =>{

    const cardDetaills = [
        {
            image:"https://pillup.com/assets/Why%20Us/card1.png",
            heading:"Pre-Sorted Medication",
            description:"Get easy pouches of pre sorted medication by time and date."
        },
        {
            image:"https://pillup.com/assets/Why%20Us/card2.png",
            heading:"Minimal Fee",
            description:"You only pay Rs. 99 for dispensing every month, for no matter how many medicines."
        },
        {
            image:"https://pillup.com/assets/Why%20Us/card3.png",
            heading:"Medicine Reminders",
            description:"At your choice of platform for every dose and time"
        },
    ]

    return (
        <section className="bg-[#fff3e4] flex flex-1 py-16 px-8 max-sm:px-6 justify-center gap-8 flex-wrap ">
            {cardDetaills.map((card) => {
                return <WhyUsCard key={card.heading} imgURL={card.image} heading={card.heading} description={card.description}/>
            })}            
        </section>
    )
}



export default WhyUSBenifits;