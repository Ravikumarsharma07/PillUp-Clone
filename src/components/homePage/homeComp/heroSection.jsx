
function HeroSection(){
    return (
        <section className="h-[80vh] w-full px-10 xl:px-20 flex gap-3 md:gap-6 flex-col justify-center items-center">
            <h2 className="text-[40px] leading-[60px] md:leading-[70px] md:text-[60px] font-semibold text-center">We organize, pack and deliver your medicines. Simple!</h2>
            <p className="text-xl md:text-2xl text-center">Never miss a dose of your medication again.</p>
            <a className="w-[180px] md:w-[200px] h-12 mt-3 md:mt-5 flex-center text-xl rounded-full border-2 border-[#cfcfcf]" href="https://api.whatsapp.com/send/?phone=%2B918920878094&text=Hi+I+am+interested+in+ordering+from+PillUp&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">Order Now</a>
        </section>
    )
}
export default HeroSection;