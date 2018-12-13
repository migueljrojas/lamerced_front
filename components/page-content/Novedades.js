import React, { Component } from 'react';
import Link from 'next/link';

class Novedades extends Component {
    createMainNewHtml(mainNew) {
        if(mainNew.length > 0) {
            return(
              <div className="novedades__body__main-new">
                <div className="container">
                  <div className="row nopadding flexrow">
                    <div className="col-xs-24 col-sm-12 novedades__body__main-new__col">
                      <div className="novedades__body__main-new__image"><a href="/articulos"><img src={mainNew[0].image} /></a></div>
                    </div>
                    <div className="col-xs-24 col-sm-12 novedades__body__main-new__col">
                      <div className="novedades__body__main-new__article"><a href="/articulos">
                          <h2 className="novedades__body__main-new__title">{mainNew[0].title}</h2></a>
                        <p className="novedades__body__main-new__text" dangerouslySetInnerHTML={{__html: mainNew[0].extract}} />
                        <Link
                            prefetch
                            as={`/nota/${mainNew[0].url}`}
                            href={`/post?slug=${mainNew[0].url}&apiRoute=news`}
                        >
                            <a href="/articulos" className="novedades__body__main-new__more">{'Seguir leyendo...'}</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        }

        return null;
    }

    createTopNewsHtml(topNews) {
        return topNews.map((item, index) => {
            return(
                <div className="col-xs-24 col-sm-8" key={index}>
                  <div className="novedades__body__top-news__image"><img src={item.image} /></div>
                  <div className="novedades__body__top-news__article">
                    <h2 className="novedades__body__top-news__article__title">{item.title}</h2>
                    <p className="novedades__body__top-news__article__text" dangerouslySetInnerHTML={{__html: item.extract}} />
                    <Link
                        prefetch
                        as={`/nota/${item.url}`}
                        href={`/post?slug=${item.url}&apiRoute=news`}
                    >
                        <a className="novedades__body__top-news__article__more">{'Seguir leyendo...'}</a>
                    </Link>
                  </div>
                </div>
            )
        })
    }

    createOtherNewsHtml(otherNews) {
        return otherNews.map((item, index) => {
            if(item.index === 4 || item.index === 5 || item.index === 8 || item.index === 9) {
                return(
                    <div className="col-xs-24 col-sm-12 novedades__body__other-news__wrapper" key={index}>
                      <div className="novedades__body__other-news__wrapper__col">
                        <div className="novedades__body__other-news__image"><img src={item.image} /></div>
                      </div>
                      <div className="novedades__body__other-news__wrapper__col">
                        <div className="novedades__body__other-news__article">
                          <h2 className="novedades__body__other-news__article__title">{item.title}</h2>
                          <p className="novedades__body__other-news__article__text" dangerouslySetInnerHTML={{__html: item.extract}} />
                        <Link
                            prefetch
                            as={`/nota/${item.url}`}
                            href={`/post?slug=${item.url}&apiRoute=news`}
                        >
                            <a className="novedades__body__other-news__article__more">{'Seguir leyendo...'}</a>
                        </Link>
                        </div>
                      </div>
                    </div>
                )
            } else {
                return(
                    <div className="col-xs-24 col-sm-12 novedades__body__other-news__wrapper" key={index}>
                      <div className="novedades__body__other-news__wrapper__col novedades__body__other-news__wrapper__col--image">
                        <div className="novedades__body__other-news__image"><img src={item.image} /></div>
                      </div>
                      <div className="novedades__body__other-news__wrapper__col novedades__body__other-news__wrapper__col--article">
                        <div className="novedades__body__other-news__article">
                          <h2 className="novedades__body__other-news__article__title">{item.title}</h2>
                          <p className="novedades__body__other-news__article__text" dangerouslySetInnerHTML={{__html: item.extract}} />
                        <Link
                            prefetch
                            as={`/nota/${item.url}`}
                            href={`/post?slug=${item.url}&apiRoute=news`}
                        >
                            <a className="novedades__body__other-news__article__more">{'Seguir leyendo...'}</a>
                        </Link>
                        </div>
                      </div>
                    </div>
                )
            }
        })
    }

    createNewsListHtml(newsList) {
        return newsList.map((item, index) => {
            return(
                <div className="col-xs-24 col-sm-12" key={index}>
                  <div className="novedades__body__news-list__article">
                    <h2 className="novedades__body__news-list__article__title">{item.title}</h2>
                    <p className="novedades__body__news-list__article__text" dangerouslySetInnerHTML={{__html: item.extract}} />
                    <Link
                        prefetch
                        as={`/nota/${item.url}`}
                        href={`/post?slug=${item.url}&apiRoute=news`}
                    >
                        <a className="novedades__body__news-list__article__more">{'Seguir leyendo...'}</a>
                    </Link>
                  </div>
                </div>
            )
        })
    }

    render() {
        const novedadesData = this.props.data.acf;

        const allNews = this.props.allNews.map(news => {
            let newsData = {};

            if (news && news.title && news.title.rendered !== '') {
                newsData = {
                    image:news.acf.imagen.url,
                    title:news.title.rendered,
                    extract:news.excerpt.rendered,
                    url:news.slug,
                }
            }

            return newsData;
        });


        const mainNew = this.createMainNewHtml(allNews.slice(0, 1));
        const topNews = this.createTopNewsHtml(allNews.slice(1, 4));
        const otherNews = this.createOtherNewsHtml(allNews.slice(4, 10));
        const newsList = this.createNewsListHtml(allNews.slice(10));

        return(
          <main className="novedades">
            <section className="novedades__hero">
              <div className="novedades__hero__slider">
                <div className="novedades__hero__image"><img src={novedadesData.intro.image.url} /></div>
              </div>
              <div className="novedades__hero__data">
                <h1 className="novedades__hero__data__title">{novedadesData.intro.title}</h1>
                <p className="novedades__hero__data__text">{novedadesData.intro.subtitle }</p>
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
            <section className="novedades__body">
              <h1 className="novedades__body__title">{'NOVEDADES'}</h1>
              {mainNew}
              <div className="novedades__body__top-news">
                <div className="container">
                  <div className="row">
                    {topNews}
                  </div>
                </div>
              </div>
              <div className="novedades__body__other-news">
                <div className="container">
                  <div className="row">
                    {otherNews}
                  </div>
                </div>
              </div>
              <div className="novedades__body__news-list">
                <div className="container">
                  <div className="row">
                    {newsList}
                  </div>
                </div>
              </div>
            </section>
          </main>
        )
    }
}

export default Novedades;
