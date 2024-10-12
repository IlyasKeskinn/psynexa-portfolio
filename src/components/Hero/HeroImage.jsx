
import elegantMan from '../../assets/images/elegant_man.png';
import SpeechBuble from '../shared/SpeechBuble';

const HeroImage = () => {
    return (
        <div className='lg:flex hidden  items-center justify-center'>
            <div className='h-auto w-full -mt-24'>
                <div className='relative overflow-hidden'>
                    {/* The rounded green background */}
                    <div className='w-[375px] h-full absolute z-0 top-24 left-0 right-0 mx-auto'>
                        <div className='absolute top-0 left-0 bg-customGreen h-full w-full rounded-t-full z-0'></div>
                    </div>
                    {/* The image of the elegant man */}
                    <div className='w-[425px] h-full relative mx-auto z-50'>
                        <img src={elegantMan} alt="heroImage" className='object-cover h-full w-full z-50' />
                        <div className='absolute bottom-24 -left-8 '>
                            <SpeechBuble text={"App Development"} position={"right"} />
                        </div>
                        <div className='absolute top-72 -right-12 '>
                            <SpeechBuble text={"Data Analysis"} position={"left"} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeroImage