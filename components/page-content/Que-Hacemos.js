import React, { Component } from 'react';
import Link from 'next/link';

class QueHacemos extends Component {
    render() {
        const queHacemosData = this.props.data.acf;

        return(
          <main className="whatwedo">
            <section className="whatwedo__hero">
              <div className="whatwedo__hero__slider">
                <div className="whatwedo__hero__image"><img src={queHacemosData.intro.image.url} /></div>
              </div>
              <div className="whatwedo__hero__data">
                <h1 className="whatwedo__hero__data__title">{queHacemosData.intro.title}</h1>
                <p className="whatwedo__hero__data__text">{queHacemosData.intro.subtitle}</p>
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
            <section className="whatwedo__content">
              <div className="whatwedo__content__col">
                <div className="whatwedo__content__image"><img src={queHacemosData.contents.image.url} /></div>
              </div>
              <div className="whatwedo__content__col">
                <div className="whatwedo__content__container" dangerouslySetInnerHTML={{__html: queHacemosData.contents.text}} />
              </div>
            </section>
          </main>
        )
    }
}

export default QueHacemos;
