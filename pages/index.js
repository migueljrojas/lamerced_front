import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Router from 'next/router';
import PageWrapper from "../components/PageWrapper.js";
import Header from "../components/Header.js";
import { Config } from "../config.js";
import Home from "../components/page-content/Home.js";

class Index extends Component {
    static async getInitialProps(context) {

        const pageRes = await fetch(
            `${Config.apiUrl}/wp-json/postlight/v1/page?slug=home`
        );

        const page = await pageRes.json();

        const postsRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/posts?_embed`
        );

        const posts = await postsRes.json();

        const pagesRes = await fetch(
            `${Config.apiUrl}/wp-json/wp/v2/pages?_embed`
        );

        const pages = await pagesRes.json();

        return { page, posts, pages };
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

    render() {
        const handleRouteChange = () => {
            this.setState({
                loading: true
            });
        }

        const handleRouteComplete = () => {
            this.setState({
                loading: false
            });
        }

        Router.onRouteChangeStart = () => handleRouteChange();
        Router.onRouteChangeComplete = () => handleRouteComplete();

        const isLoading = this.state.loading;

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
                <Home data={this.props.page} videos={this.props.videos} news={this.props.news}/>}
            </Layout>
        );
    }
}

export default PageWrapper(Index);
