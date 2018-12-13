import React, { Component } from 'react';
import Link from 'next/link';
import Videos from "../Videos.js"

class Nosotros extends Component {
    render() {
        const nosotrosData = this.props.data.acf;

        return(
          <main className="nosotros">
            <section className="nosotros__hero">
              <div className="nosotros__hero__image"><img src={nosotrosData.intro.image.url} /></div>
              <div className="nosotros__hero__data">
                <h1 className="nosotros__hero__data__title">{nosotrosData.intro.title}</h1>
                <p className="nosotros__hero__data__text">{nosotrosData.intro.subtitle}</p>
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
            <section className="nosotros__mision-vision">
              <div className="nosotros__mision-vision__col">
                <div className="nosotros__mision-vision__image"><img src={nosotrosData.contenido.image.url} /></div>
              </div>
              <div className="nosotros__mision-vision__col">
                <div className="nosotros__mision-vision__content">
                  <h2 className="nosotros__mision-vision__title">{nosotrosData.contenido.misionTitle}</h2>
                  <p className="nosotros__mision-vision__text">{nosotrosData.contenido.misionText}</p>
                  <div className="nosotros__mision-vision__divider"></div>
                  <h2 className="nosotros__mision-vision__title">{nosotrosData.contenido.visionTitle}</h2>
                  <p className="nosotros__mision-vision__text">{nosotrosData.contenido.visionText}</p>
                </div>
              </div>
            </section>
            <Videos allVideos={this.props.videos}/>
          </main>
        )
    }
}

export default Nosotros;
