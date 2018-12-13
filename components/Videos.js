import React, { Component } from "react";

class Videos extends Component {
    constructor(props) {
        super();
    }

    createVideosHtml(list) {
        return list.map((videoUrl, index) => {
            const videoId = this.getVideoId(videoUrl);

            return (
              <div className="col-xs-24 col-sm-6" key={index}>
                <div className="videos__player">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={`https://www.youtube.com/embed/${videoId}`} className="embed-responsive-item"></iframe>
                  </div>
                </div>
              </div>
            )
        });
    }

    getVideoId(url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);

        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return 'error';
        }
    }

    render() {
        const videosList = this.props.allVideos.map(video => video.acf.video);

        const videoHtml = this.createVideosHtml(videosList);

        return(
            <section className="videos">
              <div className="container">
                <div className="row">
                  <div className="col-xs-24">
                    <h2 className="videos__title">{'VIDEOS'}</h2>
                  </div>
                </div>
                <div className="row">
                {videoHtml}
                </div>
              </div>
            </section>
        )
    }
}

export default Videos;
