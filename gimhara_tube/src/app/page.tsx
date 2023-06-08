import React from "react";
import VideoCategory from "./components/VideoCategory";
import videosData from "./videos.json";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <h1 className="title">Gimhara-Tube</h1>
      <div className="video-categories">
        {videosData.categories.map((category) => (
          <VideoCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Home;
