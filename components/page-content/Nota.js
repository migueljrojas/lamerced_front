import React, { Component } from 'react';
import Link from 'next/link';

class Nota extends Component {

    formatDate(date) {
        const dateObject = new Date(date);
        const day = dateObject.getDate();
        const month = dateObject.getMonth();
        const year = dateObject.getFullYear();

        return `${day}/${month}/${year}`;
    }

    render() {
        const mock = {
                date:'10/10/2010',
                acf:{
                    imagen:{
                        url:'nosotros'
                    }
                },
                title:{
                    rendered:'Bien'
                },
                content:{
                    rendered:'mal'
                }
            };

        const notaData = this.props.data[0] ? this.props.data[0] : mock;
        const notaDate = this.formatDate(notaData.date);

        return(
          <main className="articulos">
            <section className="articulos__hero"><img src={notaData.acf.imagen.url} /></section>
            <section className="articulos__body">
              <div className="container">
                <div className="row nopadding">
                  <div className="col-xs-24 col-md-16 col-md-offset-4">
                    <h1 className="articulos__body__title">{notaData.title.rendered}</h1>
                    <div className="articulos__body__social">
                    <span className="articulos__body__social__date">{notaDate}</span>
                      <ul>
                        <li><a><i className="fa fa-facebook"></i></a></li>
                        <li><a><i className="fa fa-twitter"></i></a></li>
                        <li><a><i className="fa fa-youtube"></i></a></li>
                        <li><a><i className="fa fa-instagram"></i></a></li>
                      </ul>
                    </div>
                    <div dangerouslySetInnerHTML={{__html:notaData.content.rendered}} />
                  </div>
                </div>
              </div>
            </section>
          </main>
        )
    }
}

export default Nota;
