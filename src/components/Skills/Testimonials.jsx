import Testimonial from "./Testimonial"

const Testimonials = () => {
    return (
        <div className="w-full h-36 bg-customGreen flex items-center">
            <div className="container mx-auto">
                <div className="max-w-screen-lg mx-auto">
                    <div className="grid grid-cols-3 gap-4 justify-center text-black">
                        <Testimonial number="7+" label1="years of" label2="experience" />
                        <Testimonial number="50+" label1="complete" label2="projects" isMiddle={true} />
                        <Testimonial number="30+" label1="happy" label2="customers" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials