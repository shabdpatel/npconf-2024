import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 sm:py-8 px-4 sm:px-6 mt-64  h-auto lg:px-8">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 mt-8 gap-8">
                {/* First Column - About */}
                <div className="mb-8 md:mb-0">
                    <div className="flex items-center mb-4">
                        <img 
                            src="/abraxas.jpeg" 
                            alt="SRM NPC 2024 Logo" 
                            className="h-12 w-12 rounded-full object-cover" 
                        />
                        <h2 className="text-white ml-4 text-2xl">Abraxas</h2>
                    </div>
                    <p className="text-slate-200 text-sm sm:text-base">
                        The engineering physics branch's departmental club is Team Abraxas - a vibrant community of individuals fueled by passion, creativity, and technology. Let's ignite your curiosity, spark new ideas and demonstrate your expertise.
                    </p>
                </div>

                {/* Second Column - Quick Links */}
                <div className="mb-8 md:mb-0">
                    <h2 className="font-semibold text-lg mb-4 text-white">Quick Links</h2>
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <ul className="space-y-2 text-gray-300">
                                <li><a href="/#" className="hover:underline text-sm sm:text-base">Home</a></li>
                                <li><a href="/#About" className="hover:underline text-sm sm:text-base">About</a></li>
                                <li><a href="/#Projects" className="hover:underline text-sm sm:text-base">Projects</a></li>
                                <li><a href="/#Events" className="hover:underline text-sm sm:text-base">Events</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-2 text-gray-300">
                                <li><a href="/Gallery" className="hover:underline text-sm sm:text-base">Gallery</a></li>
                                <li><a href="/#Timeline" className="hover:underline text-sm sm:text-base">Timeline</a></li>
                                <li><a href="/Team" className="hover:underline text-sm sm:text-base">Team</a></li>
                                <li><a href="/#Contact" className="hover:underline text-sm sm:text-base">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Third Column - Contact Info */}
                <div>
                    <h2 className="font-semibold text-lg mb-4 text-white">Contact Info</h2>
                    <div className="text-gray-300 text-sm sm:text-base">
                        <strong>Department of Physics and Photonics Science</strong>
                        <p className="mt-2">
                            NIT Hamirpur-177005, Hamirpur(H.P.)
                        </p>
                        <div className="mt-4 w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4711.614329452839!2d76.5232916401509!3d31.707890413851345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d414dbcbe5a9%3A0xc507ee79945d6bd6!2sPhysics%20Department!5e1!3m2!1sen!2sin!4v1720333486211!5m2!1sen!2sin"
                                className="w-full h-48 border-2 border-gray-300 rounded-lg"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Abraxas. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;