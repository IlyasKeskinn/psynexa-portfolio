import PropTypes from 'prop-types';

const Skill = ({ number, skill_name, skill_description, color, lastElement = false }) => {
    return (
        <div className={`flex gap-2 items-center py-5 my-4 ${!lastElement ? 'border-b border-gray-700' : ''}`}>
            <div className={`bg-${color} h-11 w-11 text-black rounded-sm flex items-center justify-center flex-shrink-0`}>
                <span className="text-2xl font-semibold">{number}</span>
            </div>
            <div className="w-full">
                <h4 className="text-2xl font-semibold">{skill_name}</h4>
                <p className="font-medium">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
        </div>
    )
}

Skill.propTypes = {
    number: PropTypes.string.isRequired,
    skill_name: PropTypes.string.isRequired,
    skill_description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    lastElement: PropTypes.bool,
}

export default Skill