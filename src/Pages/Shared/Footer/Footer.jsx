import React from 'react';
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row'>
                <div className="footer footer-center bg-slate-600 text-white py-10 md:py-24">
                    <div>
                        <h2 className='uppercase text-3xl font-medium mb-6'>contact us</h2>
                        <div className='text-xs space-y-2'>
                            <p>
                                123 ABS street, Unit 21, Bangladesh
                            </p>
                            <p>+8801234567899</p>
                            <p>Mon-Fri: 80:00 - 22:00</p>
                            <p>Sat-Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
                <div className="footer footer-center bg-slate-900 text-white py-10 md:py-24">
                    <nav>
                        <h6 className="footer-title text-white text-2xl">Follow us</h6>
                        <p>Join us our Social Media</p>
                        <div className="mt-5 text-xl grid grid-cols-3 gap-5">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaTwitter /> 
                        </div>
                    </nav>
                </div>
            </div>
            <div className='py-4 bg-black text-white text-center'>
                <p>Copyright © {new Date().getFullYear()} CulinaryCloud. All right reserved.</p>
            </div>
        </div>
    );
};

export default Footer;