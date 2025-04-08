import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800 pb-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 dark:text-white"></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="aspect-[9/16]">
            <video
              className="w-full h-full rounded-lg shadow-lg object-cover"
              src="https://github.com/platohedro/nounsxplatohedro/raw/refs/heads/main/src/video/1.mp4" 
              title="Video 1"
              controls
            ></video>
          </div>
          
          <div className="aspect-[9/16]">
            <video
              className="w-full h-full rounded-lg shadow-lg object-cover"
              src="https://github.com/platohedro/nounsxplatohedro/raw/refs/heads/main/src/video/2.mp4" 
              title="Video 1"
              controls
            ></video>
          </div>
          <div className="aspect-[9/16]">
            <video
              className="w-full h-full rounded-lg shadow-lg object-cover"
              src="https://github.com/platohedro/nounsxplatohedro/raw/refs/heads/main/src/video/3.mp4" 
              title="Video 1"
              controls
            ></video>
          </div>
          <div className="aspect-[9/16]">
            <video
              className="w-full h-full rounded-lg shadow-lg object-cover"
              src="https://github.com/platohedro/nounsxplatohedro/raw/refs/heads/main/src/video/4.mp4" 
              title="Video 1"
              controls
            ></video>
          </div>
          <div className="aspect-[9/16]">
            <video
              className="w-full h-full rounded-lg shadow-lg object-cover"
              src="https://github.com/platohedro/nounsxplatohedro/raw/refs/heads/main/src/video/5.mp4" 
              title="Video 1"
              controls
            ></video>
          </div>
          <div className="aspect-[9/16]">
            <video
              className="w-full h-full rounded-lg shadow-lg object-cover"
              src="https://github.com/platohedro/nounsxplatohedro/raw/refs/heads/main/src/video/6.mp4" 
              title="Video 1"
              controls
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
