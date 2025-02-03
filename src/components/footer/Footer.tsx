import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            &copy; {new Date().getFullYear()} Playground. All rights reserved.
        </footer>
    );
};

export default Footer;