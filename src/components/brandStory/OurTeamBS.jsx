import LinkedInIcon from '@mui/icons-material/LinkedIn';


const OurTeamBS = () => {
    return (
        <section className="p-20">
            <h2 className="text-center font-semibold text-3xl ">OUR TEAM</h2>
            <div className="mt-16 flex flex-wrap justify-center gap-10">
                <OurTeamCard name="Akanksha S" imgURL="https://pillup.com/assets/BrandStory/Akanksha.jpeg" linkedIn="https://www.linkedin.com/in/akanksha1511/" role="Co-founder" />
                <OurTeamCard name="Ankur Solanki" imgURL="https://pillup.com/assets/BrandStory/Ankur.png" linkedIn="https://www.linkedin.com/in/ankur-solanki/" role="Co-founder" />
                <OurTeamCard name="Vishal Sharai" imgURL="https://pillup.com/assets/BrandStory/Vishal.png" linkedIn="https://www.linkedin.com/in/vishalsharai/" role="Head of Technology" />
            </div>
        </section>
    )
}

const OurTeamCard = ({name, imgURL, linkedIn, role}) => {
    return (
        <div className="h-[440px] w-[320px] border-[2px] border-[#ededed]">
            <img className="w-full" src={imgURL} alt={"team member" + name} />
            <div className="px-4 pt-2">
            <p className="text-xl font-semibold">{name}</p>
            <p className="text-lg text-[#9b9b9b]">{role}</p>
            <a className="text-" href={linkedIn}><LinkedInIcon className='bg-[#dddddd] text-[#5e5e5e]  p-[5px] mt-2 box-content hover:text-[#1d1d1d] rounded-full' /></a>
            </div>
        </div>
    )
}

export default OurTeamBS