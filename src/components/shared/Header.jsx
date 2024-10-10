import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    return (
        <div className="container mx-auto relative z-50">
            <div className="header bg-transparent h-[12dvh] flex items-center justify-end">
                <div className="cursor-pointer">
                    <RxHamburgerMenu size={30} />
                </div>
            </div>
        </div>
    )
}

export default Header