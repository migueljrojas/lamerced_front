import React, { Component } from 'react';
import Link from 'next/link';
import { Config } from "../../config.js";
file
class Sumate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            lastname: '',
            email: '',
            age: '',
            phone: '',
            ocupation: '',
            message: '',
            submitEnabled: false,
            formSubmitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.isSubmitEnabled = this.isSubmitEnabled.bind(this);
    }

    submitForm(event) {
        event.preventDefault();
        console.log('submit');

        const { name, lastname, email, age, phone, ocupation, message } = this.state;
        const url = `${Config.apiUrl}/wp-json/wp/v2/voluntarios`;

        let formData = new FormData();
        formData.append('title', `${name} - ${lastname} - ${email} - ${age} - ${phone} - ${ocupation}`);
        formData.append('status', 'publish');
        formData.append('content', message);

        fetch(url, {
            credentials: 'same-origin',
            method: 'POST',
            mode: 'cors',
            headers: {
                'Authorization': `Basic YWRtaW46RGV2ZWxvcGVyXzE=`
            },
            body: formData
        }).then(res => res.json())
        .catch(error => {
            console.error('Error:', error);
        })
        .then(response => {
            console.log('Success');
            this.setState({formSubmitted: true});
        });
    }

    handleChange(event) {
        const key = event.target.name;
        const value = event.target.value;

        this.setState({[key]:[value]});
        this.isSubmitEnabled();
    }

    isSubmitEnabled() {
        const { name, lastname, email, age, phone, ocupation, message } = this.state;

        if ( name && lastname && email && age && phone && ocupation && message ) {
            this.setState({submitEnabled: true});
        } else {
            this.setState({submitEnabled: false});
        }
    }

    render() {
        const sumateData = this.props.data.acf;

        return(
          <main className="sumate">
            <section className="sumate__hero">
              <div className="sumate__hero__slider">
                <div className="sumate__hero__image"><img src={sumateData.intro.image.url} /></div>
              </div>
              <div className="sumate__hero__data">
                <h1 className="sumate__hero__data__title">{sumateData.intro.title}</h1>
                <p className="sumate__hero__data__text">{sumateData.intro.subtitulo}</p>
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
            <section className="sumate__body">
              <div className="container">
                <div className="row">
                  <div className="col-xs-24 col-sm-12">
                    <div className="sumate__body__content">
                      <p className="sumate__body__content__text sumate__body__content__text--intro" >{sumateData.contenido.intro}</p>
                      <h2 className="sumate__body__content__title">{sumateData.contenido.benefactores.titulo}</h2>
                      <div className="sumate__body__content__wrapper" dangerouslySetInnerHTML={{__html: sumateData.contenido.benefactores.contenido}} />
                      <h2 className="sumate__body__content__title">{sumateData.contenido.donaciones.titulo}</h2>
                      <div className="sumate__body__content__wrapper" dangerouslySetInnerHTML={{__html: sumateData.contenido.donaciones.contenido}}/>
                    </div>
                  </div>
                  <div className="col-xs-24 col-sm-12">
                    <h2 className="sumate__body__form__title">{sumateData.form.titulo}</h2>
                    <p className="sumate__body__form__text" dangerouslySetInnerHTML={{__html: sumateData.form.texto}}></p>
                    { !this.state.formSubmitted &&
                        <form
                            className="sumate__body__form row"
                            onSubmit={this.submitForm}
                        >
                          <div className="col-xs-24 col-sm-12">
                            <div className="sumate__body__form__group">
                              <label className="sumate__body__form__label">{'Nombre*'}</label>
                              <input
                                type="text"
                                className="sumate__body__form__input"
                                name='name'
                                onChange={this.handleChange}
                                value={this.state.name}
                              />
                            </div>
                          </div>
                          <div className="col-xs-24 col-sm-12">
                            <div className="sumate__body__form__group">
                              <label className="sumate__body__form__label">{'Apellido*'}</label>
                              <input
                                type="text"
                                className="sumate__body__form__input"
                                name='lastname'
                                onChange={this.handleChange}
                                value={this.state.lastname}
                              />
                            </div>
                          </div>
                          <div className="col-xs-24 col-sm-12">
                            <div className="sumate__body__form__group">
                              <label className="sumate__body__form__label">{'Email*'}</label>
                              <input
                                type="email"
                                className="sumate__body__form__input"
                                name='email'
                                onChange={this.handleChange}
                                value={this.state.email}
                              />
                            </div>
                          </div>
                          <div className="col-xs-24 col-sm-12">
                            <div className="sumate__body__form__group">
                              <label className="sumate__body__form__label">{'Edad'}</label>
                              <input
                                type="number"
                                className="sumate__body__form__input"
                                name='age'
                                onChange={this.handleChange}
                                value={this.state.age}
                              />
                            </div>
                          </div>
                          <div className="col-xs-24 col-sm-12">
                            <div className="sumate__body__form__group">
                              <label className="sumate__body__form__label">{'Telefono*'}</label>
                              <input
                                type="number"
                                className="sumate__body__form__input"
                                name='phone'
                                onChange={this.handleChange}
                                value={this.state.phone}
                              />
                            </div>
                          </div>
                          <div className="col-xs-24 col-sm-12">
                            <div className="sumate__body__form__group">
                              <label className="sumate__body__form__label">{'Ocupacion'}</label>
                              <input
                                  type="text"
                                  className="sumate__body__form__input"
                                  name='ocupation'
                                  onChange={this.handleChange}
                                  value={this.state.ocupation}
                              />
                            </div>
                          </div>
                          <div className="col-xs-24">
                            <div className="sumate__body__form__group">
                              <label className="sumate__body__form__label">{'Colaborar*'}</label>
                              <textarea
                                className="sumate__body__form__input sumate__body__form__input--textarea"
                                name='message'
                                onChange={this.handleChange}
                                value={this.state.message}
                              />
                            </div>
                          </div>
                          <div className="col-xs-24 col-sm-12 pull-right">
                            <div className="sumate__body__form__group">
                              <button
                                className="sumate__body__form__submit"
                                disabled={!this.state.submitEnabled}
                              >
                                {'Enviar'}
                              </button>
                            </div>
                          </div>
                        </form>
                    }
                    { this.state.formSubmitted &&
                        <div className='contacto__form'>
                            <h2 className='contacto__title'>{'Ya registramos sus datos.'}</h2>
                            <p className='contacto__text'>{'Muchas gracias por sumarte al equipo de La Merced Vida.'}</p>
                            <img className="img-responsive" src='/static/images/logo.png' />
                        </div>
                    }
                  </div>
                </div>
              </div>
            </section>
            <section className="sumate__image">  <img src={sumateData.image.url} /></section>
          </main>
        )
    }
}

export default Sumate;
