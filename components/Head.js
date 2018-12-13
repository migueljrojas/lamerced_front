import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "./Header.js";
import { Config } from "../config.js";
import stylesheet from '../src/styles/style.scss'

class PageHead extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <Head>
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta charSet="utf-8" />
                    <title>
                        LA MERCED VIDA
                    </title>
                </Head>
            </div>
        );
    }
}

export default PageHead;
