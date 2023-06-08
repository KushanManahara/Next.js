import React from "react";
import VideoThumbnail from "./VideoThumbnail";
import styles from "./styles.module.css";

const VideoCategory = ({ category }) => {
  return (
    <div className={styles["video-category"]}>
      <h2>{category.name}</h2>
      <div className={styles["video-thumbnails"]}>
        {category.videos.map((video) => (
          <VideoThumbnail key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoCategory;
