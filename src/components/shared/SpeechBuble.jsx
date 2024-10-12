
import Proptyes from 'prop-types'
const SpeechBuble = ({ text, position, }) => {
    return (
        <div className={`${position === "right" ? "rounded-l-2xl rounded-tr-2xl" : "rounded-r-2xl rounded-tl-2xl"} bg-white min-w-40 h-12 py-8 px-4 flex justify-center items-center gap-2 text-black shadow-custom-inset`}>
            <p className='text-lg font-bold'>
                {text}
            </p>
        </div>
    )
}
SpeechBuble.propTypes = {
    text: Proptyes.string,
    position: Proptyes.string
}

export default SpeechBuble