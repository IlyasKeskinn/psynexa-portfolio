
import PropTypes from 'prop-types';

const Testimonial = ({ number, label1, label2, isMiddle }) => {
    return (
        <div className={`flex flex-col items-center justify-center ${isMiddle ? 'border-l border-r border-black' : ''}`}>
            <span className="font-bold text-5.5xl">{number}</span>
            <span className="text-xl">{label1}</span>
            <span className="font-bold text-xl">{label2}</span>
        </div>
    );
}

Testimonial.propTypes = {
    number: PropTypes.number.isRequired,
    label1: PropTypes.string.isRequired,
    label2: PropTypes.string.isRequired,
    isMiddle: PropTypes.bool,
};

export default Testimonial