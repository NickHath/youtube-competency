import React from 'react';

export default function Video(props) {
  console.log('VIDEO PROPS', props);
  return (
    <div className='video-wrapper'>
      <h1>Video Title: { props.video.snippet.title }</h1>
      <img src={ props.video.snippet.thumbnails.default.url } alt="video thumbnail"/>
      <p>Video Title: { props.video.snippet.description }</p>
      <p>Channel Title: { props.video.snippet.channelTitle }</p>
      <p>Published At: {props.video.snippet.publishedAt}</p>
      <p>IDS:</p>
      <p>Video: { props.video.id.videoId }</p>
      <p>Channel: { props.video.snippet.channelId }</p>
    </div>
  )
}