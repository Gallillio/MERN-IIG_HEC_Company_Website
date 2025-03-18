import React from "react";

const Video = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <div className="flex flex-col mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="justify-center self-center">
          <iframe
            className="rounded-lg shadow-lg"
            title="YouTube Video Player"
            width="640"
            height="390"
            src={videoUrl}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
