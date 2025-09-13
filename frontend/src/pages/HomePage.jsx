import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const videos = [
  {
    id: 1,
    url: "https://ik.imagekit.io/jddvohkyx/5f7baf16-1a8a-47d9-877f-90c118dcbe15_xnf61IDKBH",
    description: "This is a cool product you must check out. Limited stock available!",
  },
  {
    id: 2,
    url: "https://ik.imagekit.io/jddvohkyx/5f7baf16-1a8a-47d9-877f-90c118dcbe15_xnf61IDKBH",
    description: "Another trending item that you will love. Don't miss it!",
  },
  {
    id: 3,
    url: "https://ik.imagekit.io/jddvohkyx/5f7baf16-1a8a-47d9-877f-90c118dcbe15_xnf61IDKBH",
    description: "Stylish, modern, and perfect for daily use. Visit our store now!",
  },
];

export default function HomePage() {
  const videoRefs = useRef([]);
  const navigate = useNavigate();
  const [videos, setVideos] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);


  useEffect(() => {
    axios.get('http://localhost:3000/api/food').then((resp) => {
      setv
    })
  }, [])

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-black flex justify-center">
      <div className="w-full md:w-[450px] h-screen">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="relative h-screen w-full flex-shrink-0 snap-start"
          >
       
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.url}
              className="h-full w-full object-cover rounded-md"
              loop
              muted
              playsInline
            />

           
            <div className="absolute top-10 left-0 w-full flex flex-col items-center px-4">
              <p className="text-white text-center text-lg line-clamp-2 mb-3 drop-shadow-lg">
                {video.description}
              </p>
              <button className="bg-white text-black font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-gray-200 transition">
                Visit Store
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
