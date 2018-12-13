import Layout from "../components/Layout.js";
import React, { Component } from "react";
import Router from 'next/router';
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import Header from "../components/Header.js";
import { Config } from "../config.js";
import Nosotros from "../components/page-content/Nosotros.js";
import QueHacemos from "../components/page-content/Que-Hacemos.js";
import Novedades from "../components/page-content/Novedades.js";
import Principios from "../components/page-content/Principios.js";
import Sumate from "../components/page-content/Sumate.js";
import Contacto from "../components/page-content/Contacto.js";
import Nota from "../components/page-content/Nota.js";

class Post extends Component {
    static async getInitialProps(context) {
        const { slug, apiRoute } = context.query;

        console.log('Slug', slug);
        console.log('apiRoute', apiRoute);

        const resUrl = apiRoute === 'news' ? `${Config.apiUrl}/wp-json/wp/v2/${apiRoute}?slug=${slug}` : `${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`;

        const res = await fetch(resUrl);

        const post = await res.json();

        return { post };
    }

    constructor() {
        super();

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.setState({
            loading: false
        });
    }

    getPageContent(data) {
        const page = data.slug;

        switch (page) {
            case 'nosotros':
                return <Nosotros data={data} videos={this.props.videos}/>
                break;
            case 'que-hacemos':
                return <QueHacemos data={data} />
                break;
            case 'principios':
                return <Principios data={data} />
                break;
            case 'novedades':
                return <Novedades data={data} allNews={this.props.news} />
                break;
            case 'sumate':
                return <Sumate data={data} />
                break;
            case 'contacto':
                return <Contacto data={data} />
                break;
            default:
                return <Nota data={data} />
        }
    }

    validatePage(pageData) {
        const dataType = Array.isArray(pageData) ? 'news' : 'page';

        if(dataType === 'news' && dataType[0].title) {
            return true;
        } else if (dataType === 'page' && dataType.title) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const handleRouteChange = url => {
            this.setState({
                loading: true
            });
        }

        const handleRouteComplete = url => {
            this.setState({
                loading: false
            });
        }

        const isLoading = this.state.loading;

        Router.onRouteChangeStart = (url) => handleRouteChange(url);
        Router.onRouteChangeComplete = (url) => handleRouteComplete(url);

        if(this.validatePage(this.props.post)) return <Error statusCode={404} />;

        return (
            <Layout menu={this.props.headerMenu}>
            {isLoading &&
                <div className="loading">
                    <div className="loading__box">
                        <div className="loading__ring"><div></div><div></div><div></div><div></div></div>
                        <span className="loading__text">
                            {'Cargando...'}
                        </span>
                    </div>
                </div>
            }

            {!isLoading &&
                this.getPageContent(this.props.post)}
            </Layout>
        );
    }
}

export default PageWrapper(Post);
