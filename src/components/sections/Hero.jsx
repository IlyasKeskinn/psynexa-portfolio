import BackgroundImage from '../shared/BackgroundImage';
import Header from '../shared/Header';
import leftPinkBrackets from "../../assets/svg/vector1.svg"
import asterisk from "../../assets/svg/asterisk.svg"
import HeroText from '../Hero/HeroText';
import HeroImage from '../Hero/HeroImage';


const Hero = () => {
    return (
        <section id="hero-section" className="relative">
            {/* The header component */}
            <Header />
            {/* The background image component */}
            <BackgroundImage />
            {/* The pink brackets on the left on large screens */}
            <div className='lg:absolute hidden left-0 top-1/2 transform -translate-y-1/2 lg:block'>
                <img src={leftPinkBrackets} alt="leftbrackets" />
            </div>
            {/* The asterisk on the bottom right */}
            <div className='absolute  -bottom-6 right-4 transform'>
                <img src={asterisk} alt="asterisk" />
            </div>
            {/* The container for the hero content */}
            <div id="hero-container" className="container mx-auto relative z-10 lg:py-0 py-10">
                <div className='md:px-8 px-5'>
                    {/* The opening bracket */}
                    <div>
                        <p className='text-customGray md:text-7.5xl text-5xl'> &#123; </p>
                    </div>
                    {/* The hero text and image components */}
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                        <HeroText />
                        <HeroImage />
                    </div>
                </div >
            </div>
        </section >
    )
}

export default Hero



