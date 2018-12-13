import React, { Component } from 'react';
import Link from 'next/link';
import { Config } from "../../config.js";

class Contacto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
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

        const { name, email, phone, message } = this.state;
        const url = `${Config.apiUrl}/wp-json/wp/v2/consultas`;

        let formData = new FormData();
        formData.append('title', `${name} - ${email} - ${phone}`);
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
        const { name, email, phone, message } = this.state;

        if ( name && email && phone && message ) {
            this.setState({submitEnabled: true});
        } else {
            this.setState({submitEnabled: false});
        }
    }

    render() {
        const contactoData = this.props.data.acf;

        return(
          <main className="contacto">
            <section className="contacto__hero">
              <div className="contacto__hero__image"><img src={contactoData.intro.imagen.url} /></div>
              <div className="contacto__hero__data">
                <h1 className="contacto__hero__data__title">{contactoData.intro.titulo}</h1>
                <p className="contacto__hero__data__text">{contactoData.intro.bajada}</p>
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
            <section className="contacto__body">
              <div className="contacto__body__col">
                { !this.state.formSubmitted &&
                    <form
                        className="contacto__form"
                        onSubmit={this.submitForm}
                    >
                      <h2>{'Déjanos tu mensaje'}</h2>
                      <div className="contacto__form__group">
                        <label className="contacto__form__label">{'Nombre de Contacto'}</label>
                        <input
                            type="text"
                            className="contacto__form__input"
                            name='name'
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                      </div>
                      <div className="contacto__form__group">
                        <label className="contacto__form__label">{'E-Mail'}</label>
                        <input
                            type="email"
                            className="contacto__form__input"
                            name='email'
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                      </div>
                      <div className="contacto__form__group">
                        <label className="contacto__form__label">{'Numero de Telefono'}</label>
                        <input
                            type="number"
                            className="contacto__form__input"
                            name='phone'
                            onChange={this.handleChange}
                            value={this.state.phone}
                        />
                      </div>
                      <div className="contacto__form__group">
                        <label className="contacto__form__label">{'Su Mensaje'}</label>
                        <textarea
                            className="contacto__form__input contacto__form__input--textarea"
                            name='message'
                            onChange={this.handleChange}
                            value={this.state.message}
                        />
                      </div>
                      <div className="contacto__form__group">
                        <button
                            className="contacto__form__submit"
                            disabled={!this.state.submitEnabled}
                        >
                            {'Enviar'}
                        </button>
                      </div>
                    </form>
                }
                { this.state.formSubmitted &&
                    <div className='contacto__form'>
                        <h2 className='contacto__title'>{'Ya recibimos tu mensaje.'}</h2>
                        <p className='contacto__text'>{'Muchas gracias por comunicarte con La Merced Vida.'}</p>
                        <img className="img-responsive" src='/static/images/logo.png' />
                    </div>
                }
              </div>
              <div className="contacto__body__col">
                <div className="contacto__body__image"><img src={contactoData.main.image.url} /></div>
              </div>
            </section>
          </main>

        )
    }
}

export default Contacto;
