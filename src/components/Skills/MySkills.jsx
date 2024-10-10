import Skill from "./Skill"

const MySkills = () => {
    return (
        <>
            <Skill
                number={"01"}
                skill_name={"Data Analysis"}
                color="customPink"
            />
            <Skill
                number={"02"}
                skill_name={"Mobile App Development"}
                color="customGreen"
            />
            <Skill
                number={"03"}
                skill_name={"Process Engineering"}
                color="customPurple"
            />
            <Skill
                number={"04"}
                skill_name={"Web Development"}
                color="customYellow"
                lastElement={true}
            />
        </>
    )
}

export default MySkills