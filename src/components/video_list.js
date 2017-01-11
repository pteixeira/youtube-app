import React from 'react';
import VideoListItem from './video_list_item';

class VideoList extends React.Component {
  render() {
    const videoItems = this.props.videos.map((video, i) =>
      <VideoListItem
        onVideoSelect={this.props.onVideoSelect}
        video={video}
        key={video.etag} />
    );

    return (
      <ul className="col-md-6 list-group">
        {videoItems}
      </ul>
    );
  }
}

VideoList.propTypes = {
  videos: React.PropTypes.array,
  onVideoSelect: React.PropTypes.func.isRequired
}

export default VideoList;
