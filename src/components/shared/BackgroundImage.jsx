import backgroundImage from '../../assets/images/background.jpeg'; // Fotoğrafı import et
const BackgroundImage = () => {
    return (
        <div id="background-image" className="absolute top-0 left-0 w-full h-full z-0">
            <div className="w-full h-full bg-cover bg-center opacity-35" style={{
                backgroundImage: `url(${backgroundImage})`,
            }}></div>
        </div>

    )
}

export default BackgroundImage