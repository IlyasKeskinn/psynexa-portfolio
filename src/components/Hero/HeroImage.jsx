
import elegantMan from '../../assets/images/elegant_man.png';

const HeroImage = () => {
    return (
        <div className='lg:flex hidden  items-center justify-center'>
            <div className='h-auto w-full -mt-24'>
                <div className='relative overflow-hidden'>
                    {/* The rounded green background */}
                    <div className='w-[400px] h-full absolute z-0 top-24 left-0 right-0 mx-auto'>
                        <div className='absolute top-0 left-0 bg-customGreen h-full w-full rounded-t-full z-0'></div>
                    </div>
                    {/* The image of the elegant man */}
                    <div className='w-[500px] h-full relative mx-auto z-50'>
                        <img src={elegantMan} alt="heroImage" className='object-cover h-full w-full z-50' />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeroImage