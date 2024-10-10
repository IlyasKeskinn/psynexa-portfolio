import BackgroundImage from "../shared/BackgroundImage";
import ProfessionalBackground from "../Skills/ProfessionalBackground";
import SkillsImage from "../Skills/SkillsImage";
import Testimonials from "../Skills/Testimonials";
import asterisk from "../../assets/svg/asterisk.svg"
import cogSVG from "../../assets/svg/vector2.svg"

const Skils = () => {
  return (
    <section id="skils-section relative">
      <Testimonials />
      <div className="relative">
        <BackgroundImage />
        <div id="skills-container" className="container mx-auto relative z-10 lg:py-0 py-10">
          <div className='md:px-8 px-5 py-12'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
              <SkillsImage />
              <ProfessionalBackground />
            </div>
          </div >
        </div>
        <div className='absolute -top-6 -left-6'>
          <img src={asterisk} alt="asterisk" />
        </div>
        <div className='absolute bottom-6 right-0'>
          <img src={cogSVG} alt="cogsvg" />
        </div>
      </div>

    </section>
  )
}

export default Skils;
