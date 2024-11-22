import React from 'react';
import { FaDumbbell, FaRunning, FaBurn } from 'react-icons/fa';

// Composant pour l'entraîneur
function TrainerInfo() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md col-span-1">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://via.placeholder.com/50"
          alt="Trainer"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h4 className="font-semibold">Adrianna Lamb</h4>
          <p className="text-sm text-gray-500">Fitness Trainer</p>
        </div>
      </div>
      <div className="bg-purple-100 text-purple-700 p-4 rounded-lg flex flex-col items-center">
        <h4 className="text-lg font-semibold">Legs Workout</h4>
        <p className="text-sm">Lower Body - Beginner</p>
      </div>
    </div>
  );
}

// Composant pour les accomplissements
function Achievements() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
      <h4 className="text-lg font-semibold mb-4">Achievements</h4>
      <div className="flex space-x-4">
        <div className="flex flex-col items-center bg-pink-100 text-pink-600 p-4 rounded-lg">
          <FaRunning size={24} />
          <p className="mt-2">Hours</p>
          <p className="text-lg font-semibold">15</p>
        </div>
        <div className="flex flex-col items-center bg-pink-100 text-pink-600 p-4 rounded-lg">
          <FaBurn size={24} />
          <p className="mt-2">Kcal</p>
          <p className="text-lg font-semibold">550</p>
        </div>
        <div className="flex flex-col items-center bg-pink-100 text-pink-600 p-4 rounded-lg">
          <FaDumbbell size={24} />
          <p className="mt-2">Sets</p>
          <p className="text-lg font-semibold">5</p>
        </div>
      </div>
    </div>
  );
}

// Composant principal Workout
function Workout() {
  return (
    <div className="h-screen flex flex-col">
      {/* Header fixe avec positionnement sticky */}
  

      {/* Conteneur déroulant pour le contenu principal */}
      <div className="overflow-auto flex-1 p-6 bg-gray-100">
        {/* Bannière de l'entraînement */}
        <div
          className="text-white p-11 rounded-lg mb-11"
          style={{
            background:
              "linear-gradient(to left, rgba(37, 99, 235, 0.8), rgba(129, 140, 248, 0.8)), url('/assets/im (2).jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h3 className="text-lg font-semibold">Start Your Workout From Today</h3>
          <p className="text-sm">No more excuses, your fitness journey starts today!</p>
        </div>

        {/* Intégration de la vidéo */}
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-4">Watch the Workout Video</h4>
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/embed/Eml2xnoLpYE?si=Uw-XNjH_3IW2Finw"
            title="Workout Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Contenu principal avec sous-composants */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <TrainerInfo />
          <Achievements />
        </div>

        {/* Nouveau contenu pour faire défiler */}
        <div className="bg-purple-100 p-4 rounded-lg mt-6 text-center">
          <h4 className="text-purple-700 font-semibold">50% off on Premium Membership</h4>
          <p className="text-sm text-gray-500">
            Don’t stop when you’re tired. Stop when you’re done
          </p>
          <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded-full">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}

export default Workout;
