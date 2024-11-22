import React from 'react';
import { FaMusic, FaYoutube } from 'react-icons/fa';

// Composant pour afficher des informations sur le genre musical relaxant
function RelaxMusicInfo() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://via.placeholder.com/50"
          alt="Music Icon"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h4 className="font-semibold">Yoga & Relaxation</h4>
          <p className="text-sm text-gray-500">Soothing Music for Stress Relief</p>
        </div>
      </div>
      <div className="bg-blue-100 text-blue-700 p-4 rounded-lg text-center">
        <h4 className="text-lg font-semibold">Relaxing Playlist</h4>
        <p className="text-sm">Perfect for meditation and stress relief</p>
      </div>
    </div>
  );
}

// Composant pour les vidéos de relaxation
function RelaxingMusicVideos() {
  const videos = [
    { id: 1, title: "Relaxing Yoga Music", url: "https://www.youtube.com/embed/1ZYbU82GVz4" },
    { id: 2, title: "Anti-Stress Music", url: "https://www.youtube.com/embed/2OEL4P1Rz04" },
    { id: 3, title: "Meditation & Relaxation", url: "https://www.youtube.com/embed/1ZYbU82GVz4" }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h4 className="text-lg font-semibold mb-4 flex items-center">
        <FaYoutube className="mr-2" /> Relaxing Music Videos
      </h4>
      <div className="space-y-4">
        {videos.map((video) => (
          <div key={video.id} className="mb-4">
            <iframe
              width="100%"
              height="200"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h5 className="mt-2 font-semibold text-center">{video.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

// Composant principal Help
function Help() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header fixe */}
      <header className="bg-white shadow-md p-4 sticky top-0 z-10">
        <h3 className="text-xl font-semibold text-center">Stress Relief & Yoga Music</h3>
      </header>

      {/* Contenu principal avec scroll */}
      <div className="overflow-auto flex-1 p-6 bg-gray-100">
        {/* Bannière de bienvenue */}
        <div
          className="text-white p-11 rounded-lg mb-11"
          style={{
            backgroundImage: "url('/assets/yoga.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h3 className="text-lg font-semibold">Find Peace with Relaxing Music</h3>
          <p className="text-sm">Unwind and relax with our curated playlist</p>
        </div>

        {/* Sections principales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RelaxMusicInfo />
          <RelaxingMusicVideos />
        </div>

        {/* Promotion pour un abonnement premium */}
        <div className="bg-blue-100 p-4 rounded-lg mt-6 text-center">
          <h4 className="text-blue-700 font-semibold">Free Access to Premium Music</h4>
          <p className="text-sm text-gray-500">Unlock soothing playlists for better relaxation</p>
          <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-full">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
}

export default Help;
