import BackgroundImage from "../shared/BackgroundImage";
import ProfessionalBackground from "../Skills/ProfessionalBackground";
import SkillsImage from "../Skills/SkillsImage";
import Testimonials from "../Skills/Testimonials";
import asterisk from "../../assets/svg/asterisk.svg"
import cogSVG from "../../assets/svg/vector2.svg"

const Skils = () => {
  return (
    <section id="skills-section" className="relative">
      <Testimonials />
      <div className="relative">
        <BackgroundImage />
        <div id="skills-container" className="container mx-auto relative z-10 lg:py-0 py-10">
          <div className='md:px-8 px-5 py-16'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
              <SkillsImage />
              <ProfessionalBackground />
            </div>
          </div >
        </div>
        <div className='absolute md:-top-12 md:-left-12 -top-6 -left-6 md:h-24 md:w-24 h-12 w-12'>
          <img src={asterisk} alt="asterisk" className="h-full w-full" />
        </div>
        <div className="absolute md:-bottom-12 md:left-24 -bottom-6 left-12 md:h-24 md:w-24 h-12 w-12" style={{ clipPath: "inset(0 0 50% 0)" }}>
          <img src={asterisk} alt="asterisk" className="h-full w-full" />
        </div>
        <div className='absolute bottom-6 right-0'>
          <img src={cogSVG} alt="cogsvg" />
        </div>
      </div>

    </section>
  )
}

export default Skils;
