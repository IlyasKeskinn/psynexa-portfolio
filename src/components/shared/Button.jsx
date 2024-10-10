import Proptypes from 'prop-types'
const Button = ({
    imgSRC,
    textPrimary,
    textSecondary,
    isPrimaryHighlighted = false,
    isSecondaryHighlighted = false,
    backgroundColor = 'bg-customYellow',
    icon: IconComponent
}) => {
    return (
        <div className={`${backgroundColor} rounded-lg min-w-40 h-12 py-7 px-8 flex justify-center items-center gap-2 text-black shadow-custom-inset cursor-pointer hover:shadow-custom-inset-hover hover:opacity-90 transition-all duration-300`}>
            <div className='flex gap-2'>
                {imgSRC && <img src={imgSRC} alt="icon" />}
                <span className={`${isPrimaryHighlighted ? 'uppercase font-bold' : ''}`}>{textPrimary}</span>
                {textSecondary && (
                    <span className={`${isSecondaryHighlighted ? 'uppercase font-bold' : ''}`}>
                        {textSecondary}
                    </span>
                )}
            </div>
            {IconComponent && (
                <div>
                    <IconComponent size={20} />
                </div>
            )}
        </div>
    );
}


Button.propTypes = {
    imgSRC: Proptypes.string,
    textPrimary: Proptypes.string,
    textSecondary: Proptypes.string,
    isPrimaryHighlighted: Proptypes.bool,
    isSecondaryHighlighted: Proptypes.bool,
    backgroundColor: Proptypes.string,
    icon: Proptypes.element
}
export default Button;
