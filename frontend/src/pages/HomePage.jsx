import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {
  const videoRefs = useRef([]);
  const [videos, setVideos] = useState([]);

  

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food", { withCredentials: true })
      .then((resp) => {
        console.log("API response 👉", resp.data);

        let fetched = [];
        if (!resp.data) {
          fetched = [];
        } else if (Array.isArray(resp.data.foodItems)) {
          fetched = resp.data.foodItems;
        } else if (Array.isArray(resp.data.food)) {
          fetched = resp.data.food;
        } else if (Array.isArray(resp.data)) {
          fetched = resp.data;
        } else if (resp.data.food) {
          fetched = [resp.data.food];
        }

        setVideos(fetched);
        videoRefs.current = []; // reset refs
      })
      .catch((err) => {
        console.error("API error:", err);
        setVideos([]);
      });
  }, []);

 

  useEffect(() => {
    if (!videos.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [videos]);

  

  const getVideoUrl = (video) => {
    if (!video) return "";
    return video; 
  };

  
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-black flex justify-center">
      <div className="w-full md:w-[450px] h-screen">
        {videos.length > 0 ? (
          videos.map((video, index) => (
            <div
              key={video.id || video.id || index}
              className="relative h-screen w-full flex-shrink-0 snap-start">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={getVideoUrl(video.video)}
                className="h-full w-full object-cover rounded-md bg-black"
                loop
                muted
                playsInline
                controls={false}
                preload="metadata"/>

              <div className="absolute top-10 left-0 w-full flex flex-col items-center px-4">
                <p className="text-white text-center text-lg line-clamp-2 mb-3 drop-shadow-lg">
                  {video.description || "No description available"}
                </p>
                <Link
                  className="bg-white text-black font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-gray-200 transition"
                  to={`/food-partner/${video.foodPartner || ""}`}
                >
                  Visit Store
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="h-screen flex items-center justify-center text-white">
            No videos available
          </div>
        )}
      </div>
    </div>
  );
}
