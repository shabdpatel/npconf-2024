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
        const paths = {
            '/': 'Home',
            '/Team': 'Team',
            '/Paper_call': 'Paper_call'
        };
        setActiveSection(paths[location.pathname] || '');
    }, [location]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div id='Navbar' className="relative">
            <div className="fixed top-0 left-0 w-full h-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-gray-900/30 to-black/30 blur-2xl -z-10" />
            <nav
                className={`fixed w-full z-20 top-0 start-0 transition-all duration-300 backdrop-blur-md bg-black/20 border-b border-white/10 ${
                    isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <Link to="/" className="flex items-center space-x-3">
                            <img src="/abraxas.jpeg" className="h-10 w-10 rounded-full ring-2 ring-purple-500/50" alt="Abraxas Logo" />
                            <span className="text-xl font-semibold text-white tracking-wider">
                                Abraxas
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['Home', 'About', 'Projects', 'Work', 'Gallery', 'Timeline', 'Team', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    to={item === 'Home' ? '/' : `/${item === 'Contact' ? 'FAQ' : item}`}
                                    className={`relative px-3 py-2 text-sm transition-colors duration-200 ${
                                        activeSection === item 
                                            ? 'text-purple-400'
                                            : 'text-gray-300 hover:text-white'
                                    } group`}
                                >
                                    {item}
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform origin-left transition-transform duration-200 ${
                                        activeSection === item ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                    }`} />
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}>
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/30 backdrop-blur-lg rounded-lg mb-4">
                            {['Home', 'About', 'Projects', 'Work', 'Gallery', 'Timeline', 'Team', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    to={item === 'Home' ? '/' : `/${item === 'Contact' ? 'FAQ' : item}`}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                                        activeSection === item
                                            ? 'text-purple-400 bg-purple-900/20'
                                            : 'text-gray-300 hover:bg-purple-900/10 hover:text-white'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;