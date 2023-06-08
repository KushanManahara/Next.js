import React from "react";
import styles from "./styles.module.css";

const VideoThumbnail = ({ video }) => {
  return (
    <div className={styles["video-thumbnail"]}>
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        <img src={video.thumbnailUrl} alt={video.title} />
        <h3>{video.title}</h3>
      </a>
    </div>
  );
};

export default VideoThumbnail;
