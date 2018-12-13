import React, { Component } from "react";
import Link from "next/link";
import { Config } from "../config.js";

class Menu extends Component {
  constructor() {
      super();
  }

  getSlug(url) {
      const parts = url.split("/");
      return parts.length > 2 ? parts[parts.length - 2] : "";
  }



  render() {
      const menuItems = this.props.data.items.map((item, index) => {
          const slug = this.getSlug(item.url);
          const actualPage = item.object === 'category' ? 'category' : 'post';
          return (
                <li key={index}>
                    <Link
                        prefetch
                        as={`/${slug}`}
                        href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
                    >
                        <a>{item.title}</a>
                    </Link>
                </li>
            )
      });

    return(
      <header className="header -ontop">
        <div className="header__secondary">
          <div className="header__container"><a href="tel:+541147080148" className="header__contact-number"><span>{'LLAMANOS AL '}</span><strong>{'4708-0148'}</strong></a>
            <ul className="header__social">
              <li><a><i className="fa fa-facebook"></i></a></li>
              <li><a><i className="fa fa-twitter"></i></a></li>
              <li><a><i className="fa fa-youtube"></i></a></li>
              <li><a><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="header__primary">
          <div className="header__container">
            <div className="header__logo">
            <Link
                href={'/'}
            >
                <a><img src="/static/images/logo.png" /></a>
            </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__menu">
                {menuItems}
              </ul>
            </nav>
            <div className="header__hamburguer"><span></span><span></span><span></span></div>
          </div>
        </div>
      </header>
    )
  }
}

export default Menu;
