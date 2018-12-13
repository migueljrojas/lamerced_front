import React, { Component } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import Videos from "../Videos.js"

class Home extends Component {
    render() {
        const homeData = this.props.data.acf;

        const sliderSettings = {
            dots: true,
            fade: true,
            arrows:  false,
            infinite: true,
            autoplay: true
        }

        const multiSliderSettings = {
            dots: true,
            infinite: true,
            arrows: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }

        const slides = homeData.slider.map((slide, index) => {
            return (
              <div className="home__hero__slide" key={index}>
                <div className="home__hero__image">
                    <img src={slide.slider_image} />
                </div>
              </div>
            );
        });

        const allNews = this.props.news.map(news => {
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

        const homeNews = allNews.slice(0, 6);

        const newsSlides = homeNews.map((slide, index) => {
            return (
              <div className="home__news__slide" key={index}>
                <div className="home__news__article">
                  <div className="home__news__article__image"><img src={slide.image} /></div>
                  <div className="home__news__article__data">
                    <h2 className="home__news__article__data__title">{slide.title}</h2>
                    <p className="home__news__article__data__text" dangerouslySetInnerHTML={{__html:slide.extract}}/>
                    <Link
                        prefetch
                        as={`/nota/${slide.url}`}
                        href={`/post?slug=${slide.url}&apiRoute=news`}
                    >
                        <a className="home__news__article__data__more">{'Seguir leyendo...'}</a>
                    </Link>
                  </div>
                </div>
              </div>
            );
        });

        return(
            <main className="home">
                <section className="home__hero">
                    <Slider
                        className="home__hero__slider _slider"
                        {...sliderSettings}
                    >
                        {slides}
                    </Slider>
                    <div className="home__hero__data">
                        <h1 className="home__hero__data__title">{homeData.hero.title}</h1>
                        <p className="home__hero__data__text">{homeData.hero.subtitle}</p>
                        <a className="home__hero__data__button">{homeData.hero.call_to_action}</a>
                    </div>
                </section>
                <section className="home__about">
                  <div className="home__about__wrapper">
                    <div className="home__about__col">
                      <div className="home__about__image"><img src={homeData.quienes_somos.image} /></div>
                    </div>
                    <div className="home__about__col">
                      <div className="home__about__content">
                        <h2 className="home__about__content__title">{'¿Quienes somos?'}</h2>
                        <p className="home__about__content__text">{'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor iont incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudti exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}</p>
                        <p className="home__about__content__text">{'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor iont incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudti exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}</p>
                        <p className="home__about__content__text">{'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor iont incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudti exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}</p>
                      </div>
                    </div>
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
                          <p className="donate-cta__phone">{'LLAMANOS AL '} <a href="tel:+54 11 4708-0148"><strong>{'4708-0148'}</strong></a></p>
                          <button className="donate-cta__donation-link">{'HAS TU DONACION '}</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="home__what-we-do">
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-24 col-sm-12">
                        <div className="home__what-we-do__data">
                          <h2 className="home__what-we-do__data__title">{'Qué hacemos'}</h2>
                          <p className="home__what-we-do__data__text">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}</p>
                          <p className="home__what-we-do__data__text">{'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</p>
                        </div>
                      </div>
                      <div className="col-xs-24 col-sm-12">
                        <div className="home__what-we-do__list">
                          <ul>
                            <li><span className="home__what-we-do__list__number">{'1.'}</span>
                              <p className="home__what-we-do__list__text">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad'}</p>
                            </li>
                            <li><span className="home__what-we-do__list__number">{'2.'}</span>
                              <p className="home__what-we-do__list__text">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad'}</p>
                            </li>
                            <li><span className="home__what-we-do__list__number">{'3.'}</span>
                              <p className="home__what-we-do__list__text">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad'}</p>
                            </li>
                            <li><span className="home__what-we-do__list__number">{'4.'}</span>
                              <p className="home__what-we-do__list__text">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad'}</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="home__news">
                  <div className="container">
                    <div className="row nopadding-xs">
                      <div className="col-xs-24">
                        <h2 className="home__news__title">{'NOVEDADES'}</h2>
                      </div>
                      <div className="col-xs-24">
                        <Slider
                            className="_slidermulti home__news__slider"
                            {...multiSliderSettings}
                        >
                            {newsSlides}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="home__sindrome">
                  <div className="home__sindrome__col home__sindrome__col--image">
                    <div className="home__sindrome__image"><img src={homeData.sindrome_post_aborto.image} /></div>
                  </div>
                  <div className="home__sindrome__col home__sindrome__col--data">
                    <div className="home__sindrome__data">
                      <h2 className="home__sindrome__data__title">{homeData.sindrome_post_aborto.title}</h2>
                      <p className="home__sindrome__data__text" dangerouslySetInnerHTML = {{__html: homeData.sindrome_post_aborto.text}}></p>
                      <a className="home__sindrome__data__more">{'Quiero saber mas'}</a>
                    </div>
                  </div>
                </section>
                <Videos allVideos={this.props.videos}/>
              </main>
        )
    }
}

export default Home;
