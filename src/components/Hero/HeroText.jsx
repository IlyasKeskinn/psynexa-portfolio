
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import Button from '../shared/Button';
import mailIcon from '../../assets/svg/sms-edit.svg';

const HeroText = () => {
    return (
        <div className='flex flex-col gap-12'>
            {/* The heading with the name */}
            <div>
                <span className='font-corinthia md:text-8.5xl text-7.5xl'>
                    I&#39;m James
                </span>
                <br />
                <span className='md:text-10xl text-8.5xl text-customYellow font-bold'>Thomas</span>
            </div>
            {/* The paragraph with a description */}
            <p className='md:text-4.5xl text-2xl leading-tight lg:w-[500px]'>
                I like making <span className="font-bold text-customGreen uppercase">fun</span>, interactive things with code. I also <span className="font-bold text-customGreen uppercase">talk</span> & <span className="font-bold text-customGreen uppercase">write</span> about those things.
            </p>
            {/* The call-to-action with two buttons */}
            <div id='buttons' className='flex items-center gap-4'>
                <Button
                    imgSRC={mailIcon}
                    textPrimary="hire"
                    textSecondary="me"
                    isSecondaryHighlighted={true}
                    icon={LuArrowUpRightFromCircle}
                />
                <Button
                    textPrimary="see"
                    textSecondary="portfolio"
                    isPrimaryHighlighted={true}
                    backgroundColor='bg-customPink'
                />
            </div>
        </div>
    )
}

export default HeroText