import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const handleClick = (item) => {
        console.log(item);

        if (item === "Home") navigate("/");
        else if (item === "Work") navigate("/work");
        else if (item === "Services") navigate("/skill");
        else if (item === "About") navigate("/about");
        else if (item === "Contact") navigate("/contact");
    };
    return (
        <>
            <footer className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white overflow-hidden rounded-t-3xl ">
                {/* Background Pattern */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            "url('data:image/svg+xml,%3Csvg width=\"52\" height=\"26\" viewBox=\"0 0 52 26\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.2\"%3E%3Cpath d=\"M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                    }}
                ></div>

                {/* Gradient circles */}
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen opacity-20 filter blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen opacity-20 filter blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
                        {/* About */}
                        <div className="space-y-4 relative z-10">
                            <h3 className="text-lg font-bold uppercase bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                Address
                            </h3>
                            <p className="text-gray-200">
                                Basirhat, Bara Jirakpur, North 24 Parganas, West Bengal, India
                            </p>
                            <p className="text-gray-200">Phone: +91 6264797636</p>

                        </div>

                        {/* Links */}
                        <div className="relative z-10">
                            <h3 className="text-lg font-bold uppercase mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                                Links
                            </h3>
                            <ul className="space-y-2">
                                {['Home', 'Work', 'Services', 'About', 'Contact'].map((link) => (
                                    <li key={link} onClick={() => handleClick(link)}>
                                        <a

                                            className="text-gray-300 hover:text-white transition-colors flex items-center group"
                                        >
                                            <span className="bg-gradient-to-r from-pink-500 to-purple-500 w-1 h-4 mr-2 transition-all group-hover:w-2"></span>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="relative z-10">
                            <h3 className="text-lg font-bold uppercase mb-4 bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
                                Contact
                            </h3>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center hover:text-white transition-colors">
                                    <svg
                                        className="w-5 h-5 mr-3"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    bonnny2001@gmail.com
                                </li>
                            </ul>
                        </div>

                        {/* Follow us */}
                        <div className="relative z-10">
                            <h3 className="text-lg font-bold uppercase mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Follow us
                            </h3>
                            <div className="flex space-x-6">
                                {/* Facebook */}
                                <a
                                    target="_blank"
                                    href="https://www.facebook.com/arkopravo.adhikary/?locale=cy_GB"
                                    className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 
        5.373-12 12c0 5.99 4.388 10.954 10.125 
        11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 
        1.792-4.669 4.533-4.669 1.312 0 2.686.235 
        2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 
        1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 
        23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>

                                {/* Instagram */}
                                <a
                                    target="_blank"
                                    href="instagram.com/mr.arko_official
"
                                    className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 
        7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 
        16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 
        7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 
        3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8 2.25a.75.75 
        0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 7a5 5 0 1 0 0 
        10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 
        7 3.5 3.5 0 0 1 0-7z" />
                                    </svg>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/"
                                    className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 0h-14C2.239 0 0 2.239 
        0 5v14c0 2.761 2.239 5 5 
        5h14c2.761 0 5-2.239 
        5-5V5c0-2.761-2.239-5-5-5zM7.12 
        20.452H3.56V9h3.56v11.452zM5.34 
        7.432a2.062 2.062 0 1 1 
        0-4.125 2.062 2.062 0 0 1 
        0 4.125zM20.452 
        20.452h-3.56v-5.604c0-1.336-.026-3.055-1.86-3.055-1.861 
        0-2.147 1.454-2.147 
        2.957v5.702h-3.56V9h3.417v1.561h.049c.476-.9 
        1.637-1.849 3.368-1.849 
        3.6 0 4.267 2.371 
        4.267 5.455v6.285z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Bottom */}
                    <div className="border-t border-white/10 py-6 relative z-10">
                        <p className="text-center text-sm text-gray-300">
                            &copy; {new Date().getFullYear()} Company
                        </p>
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;
