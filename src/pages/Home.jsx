import FamilyGallery from "../components/sections/FamilyGallery"
import Footer from "../components/sections/Footer"
import Hero from "../components/sections/Hero"
import Skils from "../components/sections/Skils"

const Home = () => {
    return (
        <>
            <Hero />
            <Skils />
            <FamilyGallery />
            <Footer />
        </>
    )
}

export default Home