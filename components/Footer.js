import React from "react";
import Link from "next/link";

const Footer = () => (
    <footer className="footer">
        <div className="footer__contact">
            <div className="footer__contact__data"><i className="fa fa-phone"></i><a href="tel:+541147084108" className="footer__contact__data__phone">{'4708-4108'}</a><span className="footer__contact__data__text">{'Vos tambien podes sumarte!'}</span></div>
            <div className="footer__contact__buttons"><a className="footer__contact__button">{'VOLUNTARIADO'}</a><a className="footer__contact__button">{'DONACIONES'}</a></div>
        </div>
        <div className="footer__copyright"><span>{'La merced vida'} &copy;{' 2017, Todos los derechos reservados'}</span></div>
    </footer>
);

export default Footer;
