import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [activeSection, setActiveSection] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);

            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 50 && rect.bottom >= 50) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollTop]);

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setActiveSection('Home');
                break;
            case '/Team':
                setActiveSection('Team');
                break;
            case '/Gallery':
                setActiveSection('Gallery');
                break;
            default:
                setActiveSection('');
        }
    }, [location]);

    const navigationItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/#About' },
        { name: 'Projects', path: '/#Projects' },
        { name: 'Social Wall', path: '/#Socialwall' },
        { name: 'Gallery', path: '/Gallery' },
        { name: 'Sponsors', path: '/#Sponsors' },
        { name: 'Team', path: '/Team' },
        { name: 'FAQ', path: '/#FAQ' }
    ];

    return (
        <div id='Navbar' className="fixed top-0 z-50 w-full flex justify-center items-start px-2">
            <nav className={`w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] mt-2 sm:mt-3 lg:mt-4 
                rounded-xl sm:rounded-2xl transition-all duration-300 
                backdrop-blur-md bg-opacity-70 bg-gray-900 border border-gray-700/30
                shadow-lg ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}
                hover:bg-opacity-80`}>
                <div className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo and Brand */}
                        <Link to="/" className="flex items-center space-x-2">
                            <img src="/AbraxasLogo.png" className="h-7 sm:h-8 lg:h-10 rounded-full ring-2 ring-blue-500/50" alt="Logo" />
                            <span className="self-center text-base sm:text-lg lg:text-xl font-semibold text-white tracking-wide">
                                ABRAXAS
                            </span>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-1.5 sm:p-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle navigation"
                        >
                            {isMenuOpen ? (
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex lg:items-center">
                            <ul className="flex flex-wrap space-x-1">
                                {navigationItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.path}
                                            className={`block px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg text-sm font-medium transition-all duration-200
                                                ${activeSection === item.name.replace(' ', '')
                                                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                                                    : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'}`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div 
                        className={`${isMenuOpen ? 'max-h-96' : 'max-h-0'} lg:hidden overflow-hidden transition-all duration-300 ease-in-out`}
                    >
                        <ul className="flex flex-col space-y-1 mt-2 sm:mt-3">
                            {navigationItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200
                                            ${activeSection === item.name.replace(' ', '')
                                                ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                                                : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'}`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;