import React from 'react';
import FooterCol from './FooterCol';
import footerLogo from "../../../images/footer-logo.PNG"

const Footer = () => {
    const noNamed = [
        { name: "Our motto is to fulfill customer demand by making them satisfied with growing their business" }
    ]
    const support = [
        { name: "Account" },
        { name: "Support Center" },
        { name: "Feedback" },
        { name: "Contact us" },

    ]
    const company = [
        { name: "Our Team" },
        { name: "Partner with us" },
        { name: "FAQ" },
        { name: "Blog" }
    ]
    const about = [
        { name: "About Us" },
        { name: "Features" },
        { name: "News" },
        { name: "Career" }
    ]
    const logo = <img src={footerLogo} alt="logo" />
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={logo} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="About US" menuItems={about} />
                    <FooterCol key={3} menuTitle="Company" menuItems={company} />
                    <FooterCol key={4} menuTitle="Support" menuItems={support} />
                </div>
                <div className="copyRight text-center">
                    <p> &copy; Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;