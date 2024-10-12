import { useState } from "react";
import PropTypes from 'prop-types';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const menuItems = [
        { name: "Home", href: "#hero-section" },
        { name: "Skills", href: "#skills-section" },
        { name: "About", href: "#about-section" },
        { name: "Footer", href: "#footer-section" },
    ];

    return (
        <div className="container mx-auto relative z-50">
            <nav className="relative p-5 rounded-full shadow-lg flex justify-end items-center transition-all duration-500">
                <div
                    onClick={handleToggle}
                    className="cursor-pointer absolute right-12"
                >
                    <HamburgerIcon menuOpen={menuOpen} />
                </div>

                <Menu menuOpen={menuOpen} menuItems={menuItems} />
            </nav>
        </div>
    );
};

// Hamburger Icon Component
const HamburgerIcon = ({ menuOpen }) => {
    return (
        <div className="flex flex-col justify-center items-center cursor-pointer">
            <span
                className={`block w-7 h-0.5 bg-gray-100 rounded-full transition-transform duration-500 ${menuOpen ? "bg-pink-300 rotate-45" : "-translate-y-2"
                    }`}
            />
            <span
                className={`block w-7 h-0.5 bg-gray-100 rounded-full transition-transform duration-500 ${menuOpen ? "bg-pink-300 opacity-0" : ""
                    }`}
            />
            <span
                className={`block w-7 h-0.5 bg-gray-100 rounded-full transition-transform duration-500 ${menuOpen ? "bg-pink-300 -translate-y-1 -rotate-45" : "translate-y-2"
                    }`}
            />
        </div>
    );
};

HamburgerIcon.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
};


// Menu Component
const Menu = ({ menuOpen, menuItems }) => {
    return (
        <ul
            className={`flex justify-center items-center gap-4 bg-transparent list-none pl-0 transition-all duration-500 overflow-hidden ${menuOpen ? "w-[450px]" : "w-0 opacity-0"
                }`}
        >
            {menuItems.map((item, index) => (
                <li key={index}>
                    <a
                        href={item.href}
                        className="text-gray-100 uppercase font-semibold hover:text-customYellow transition-all duration-500"
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

Menu.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
