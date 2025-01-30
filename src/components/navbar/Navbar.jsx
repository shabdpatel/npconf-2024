import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [activeSection, setActiveSection] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Existing scroll and location effects remain the same
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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div id='Navbar' className="flex justify-center w-full fixed top-0 z-50 px-4">
            <nav
                className={`w-full max-w-5xl mx-8 mt-4 rounded-2xl transition-all duration-300 
                backdrop-blur-md bg-opacity-70 bg-gray-900 border border-gray-700/30
                shadow-lg ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}
                hover:bg-opacity-80 transition-all duration-300`}
            >
                <div className="flex flex-wrap items-center justify-between px-6 py-3">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/abraxas.jpeg" className="h-10 rounded-full ring-2 ring-blue-500/50" alt="Physteo Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white tracking-wide">
                            ABRAXAS
                        </span>
                    </Link>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:border-gray-700">
                            <li>
                                <Link
                                    to="/"
                                    className={`block py-3 px-4 rounded md:p-2 ${activeSection === 'Home' ? ' text-blue-700 border border-blue-300' : 'text-gray-200 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                    aria-current="page"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/#About"
                                    className={`block py-3 px-4 rounded md:p-2 ${activeSection === 'About' ? ' text-blue-700 border border-blue-300' : 'text-gray-200 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/#Speakers"
                                    className={`block py-3 px-4 rounded md:p-2 ${activeSection === 'Speakers' ? ' text-blue-700 border border-blue-300' : 'text-gray-200 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Speakers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/#Socialwall"
                                    className={`block py-3 px-4 rounded md:p-2 ${activeSection === 'Socialwall' ? ' text-blue-700 border border-blue-300' : 'text-gray-200 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Social Wall
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Gallery"
                                    className={`block py-3 px-4 rounded md:p-2 ${activeSection === 'Gallery' ? ' text-blue-700 border border-blue-300' : 'text-gray-200 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/#Sponsors"
                                    className={`block py-3 px-4 rounded md:p-2 ${activeSection === 'Sponsors' ? ' text-blue-700 border border-blue-300' : 'text-gray-200 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Sponsors
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Team"
                                    className={`block py-3 px-4 rounded md:p-2 ${activeSection === 'Team' ? ' text-blue-700 border border-blue-300' : 'text-gray-200 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/#FAQ"
                                    className={`block py-3 px-4 rounded md:p-2 ${activeSection === 'FAQ' ? ' text-blue-700 border border-blue-300' : 'text-gray-200 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700'} dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    FAQ
                                </Link>
                            </li>
                        <span className="sr-only">Open menu</span>
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>

                    <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                        <ul className="flex flex-col md:flex-row md:space-x-1 mt-4 md:mt-0">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About', path: '/#About' },
                                { name: 'Speakers', path: '/#Speakers' },
                                { name: 'Social Wall', path: '/#Socialwall' },
                                { name: 'Call for Papers', path: '/Paper_call' },
                                { name: 'Sponsors', path: '/#Sponsors' },
                                { name: 'Team', path: '/Team' },
                                { name: 'FAQ', path: '/#FAQ' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
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