import React, { Component } from 'react';
import Link from 'next/link';

class Principios extends Component {
    render() {
        const principiosData = this.props.data.acf;

          const listItems = principiosData.contents.valores.map((valor, index) => {
              return (
                    <li className="principios__valores__item" key={index}>
                        <span className="principios__valores__number">{`${index + 1}.`}</span>
                        <p className="principios__valores__text">{valor.item}</p>
                    </li>
                )
          });

        return(
          <main className="principios">
            <section className="principios__hero">
              <div className="principios__hero__slider">
                <div className="principios__hero__image"><img src={principiosData.intro.image.url} /></div>
              </div>
              <div className="principios__hero__data">
                <h1 className="principios__hero__data__title">{principiosData.intro.title}</h1>
                <p className="principios__hero__data__text">{principiosData.intro.subtitle}</p>
              </div>
            </section>
            <section className="donate-cta">
              <div className="container">
                <div className="row flexrow">
                  <div className="col-xs-24 col-sm-12">
                    <h2 className="donate-cta__text">{'¿COMO PUEDES '}<span>{'AYUDAR?'}</span></h2>
                  </div>
                  <div className="col-xs-24 col-sm-12">
                    <div className="donate-cta__contact-wrapper">
                      <p className="donate-cta__phone">{'LLAMANOS AL '}<a href="tel:+541147080148"><strong>{'4708-0148'}</strong></a></p>
                      <button className="donate-cta__donation-link">{'HAS TU DONACION'}</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="principios__valores">
              <div className="principios__valores__col">
                <div className="principios__valores__image"><img src={principiosData.contents.image.url} /></div>
              </div>
              <div className="principios__valores__col">
                <div className="principios__valores__content">
                  <h2 className="principios__valores__title">{principiosData.contents.title}</h2>
                  <ul className="principios__valores__list">
                    {listItems}
                  </ul>
                </div>
              </div>
            </section>
          </main>
        )
    }
}

export default Principios;
