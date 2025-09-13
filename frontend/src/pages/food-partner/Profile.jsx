import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate(); // optional: to redirect if no id
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // dummy videos grid
  const videos = Array.from({ length: 12 }, (_, i) => ({ id: i + 1 }));

  useEffect(() => {
    if (!id) {
      // if id is missing, navigate back or show error
      navigate("/"); 
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/food-partner/${id}`,
          { withCredentials: true }
        );
        setProfile(res.data.foodPartner);
      } catch (err) {
        console.error(err);
        alert("Profile not found or server error");
        navigate("/"); // redirect on error
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start bg-gray-800 p-6 sm:p-8 shadow-md rounded-b-3xl">
        <img
          src={profile?.profilePhoto || "/default-profile.png"}
          alt="Profile"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-4 border-purple-500 shadow-lg object-cover"
        />

        <div className="mt-4 sm:mt-0 sm:ml-6 md:ml-8 text-center sm:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400 hover:text-purple-300 transition">
            {profile?.name || "Business Name"}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-1">
            {profile?.address || "Address not available"}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-4 sm:mt-6 bg-gray-800 flex justify-around shadow-inner rounded-lg mx-4 sm:mx-8">
        {["Posts", "Reels", "About"].map((tab) => (
          <button
            key={tab}
            className="flex-1 py-3 sm:py-4 font-semibold hover:bg-gray-700 transition rounded-md text-sm sm:text-base"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Videos / Reels Grid */}
      <div className="mt-4 sm:mt-6 px-2 sm:px-6 md:px-8 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative w-full aspect-square bg-gray-700 rounded-xl overflow-hidden shadow-md hover:scale-105 transition transform cursor-pointer flex items-center justify-center"
            >
              <p className="text-gray-400 font-semibold text-xs sm:text-sm md:text-base">
                Video {video.id}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
