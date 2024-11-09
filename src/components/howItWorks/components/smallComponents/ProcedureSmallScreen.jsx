import  { StepHIW_SmallScreen }  from "./StepsHIW";

const ProcedureSmallScreen = () =>{

    return (
      <section className="relative bg-[#d0eaff] flex flex-col items-center py-16 overflow-hidden">

        <h2 className="text-3xl sm:text-5xl font-semibold relative z-50">How it Works</h2>
        <StepHIW_SmallScreen
          imageSRC="https://pillup.com/assets/HowItWorks/timeline1.png"
          heading="Register & Upload your Prescription"
          details="Register now and upload prescription. Click here to know more about valid Prescription."
          />
        <StepHIW_SmallScreen
          imageSRC="https://pillup.com/assets/HowItWorks/timeline2.png"
          heading="Confirmation Call from our Pharmacist "
          details="They monitor the entire process end-to-end right from examining prescription to preparing your medicine sachets."
        />
        <StepHIW_SmallScreen
          imageSRC="https://pillup.com/assets/HowItWorks/timeline3.png"
          heading="Verify your PillUp Routine"
          details="Your personalised medicine schedule and invoice is prepared and sent to you."
        />
        <StepHIW_SmallScreen
          imageSRC="https://pillup.com/assets/HowItWorks/timeline4.png"
          heading="Payment Confirmation"
          details="Once the payment is received, your medicine are organised in pre-sorted pouches with date and time mentioned"
       />
        <StepHIW_SmallScreen
          imageSRC="https://pillup.com/assets/HowItWorks/timeline5.png"
          heading="Packed and Delivered"
          details="Dispenser is delivered at your doorstep with easy-to-read prescription."
        />
        <StepHIW_SmallScreen
          imageSRC="https://pillup.com/assets/HowItWorks/timeline6.png"
          heading="Medicine Reminders"
          details="You start recieving app reminders as per your created PillUp Medicine schedule."
        />
      </section>
    );
}

export default ProcedureSmallScreen