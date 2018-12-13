import React from "react";
import { Config } from "../config.js";

const PageWrapper = Comp => (
  class extends React.Component {
    static async getInitialProps(args) {
      const headerMenuRes = await fetch(
        `${Config.apiUrl}/wp-json/menus/v1/menus/header-menu`
      );

      const headerMenu = await headerMenuRes.json();

      const videosRes = await fetch(
        `${Config.apiUrl}/wp-json/wp/v2/videos`
      );

      const videos = await videosRes.json();

      const newsRes = await fetch(
        `${Config.apiUrl}/wp-json/wp/v2/news?per_page=20`
      );

      const news = await newsRes.json();

      return {
        headerMenu,
        videos,
        news,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null),
      };
    }

    render() {
      return (
        <Comp {...this.props} />
      )
    }
  }
)

export default PageWrapper;
