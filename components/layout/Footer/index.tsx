import TBlabLogo from "../../../public/images/bitmap/tblab.png";
import Responsive from "../Responsive";
import { BsFillSuitHeartFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <Responsive className="flex shadow-3xl md:gap-4 md:flex-col text-white py-4">    
            <footer className="flex justify-between w-full items-center">
                <p className="flex gap-1">Created with <BsFillSuitHeartFill className="my-auto" color="red" /> by <a href="https://id.linkedin.com/in/deinsteins" target="blank">Deni Hidayat</a></p>
                <p>Copyright © 2023 - <span className="footer_logo">TB Lab</span> </p>
            </footer>
        </Responsive>
    );
};

export default Footer;
