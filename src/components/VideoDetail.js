import React from 'react';

//functional component

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return ( 
    <div>
        <div className="ui embed">
        <iframe src={videoSrc}  />
        </div> 
        <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        {video.snippet.description}
        </div>
    </div>
    );
}

export default VideoDetail;
