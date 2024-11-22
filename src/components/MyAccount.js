import React, { useState } from 'react';

const MyAccount = () => {
  // Exemple de données utilisateur
  const [user] = useState({
    name: "Yosra SAIDI",
    email: "yosrrasaidi123@gmail.com",
    phone: "+216 20651644",
    age: 23,
    height: 169,
    weight: 67,
    joinedDate: "2 Nov, 2024",
  });

  // Liste dynamique des objectifs (Goals)
  const [goals, setGoals] = useState([
    { id: 1, title: "Getting slim and fit for the marriage photoshoot", status: "Active" },
    { id: 2, title: "Tracking new bicycle performance on tracking", status: "Active" },
    { id: 3, title: "Getting slim and fit for the marriage photoshoot", status: "Ended" },
  ]);

  // État pour le titre du nouvel objectif
  const [newGoalTitle, setNewGoalTitle] = useState('');

  // Fonction pour ajouter un nouvel objectif
  const addGoal = () => {
    if (newGoalTitle.trim() === "") {
      alert("Veuillez entrer un titre pour l'objectif.");
      return;
    }
    const newGoal = { id: goals.length + 1, title: newGoalTitle, status: "Active" };
    setGoals([...goals, newGoal]);
    setNewGoalTitle('');
  };

  // Fonction pour changer le statut d'un objectif
  const toggleGoalStatus = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, status: goal.status === "Active" ? "Ended" : "Active" } : goal
      )
    );
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      

      {/* Contenu principal */}
      <div className="flex-1 overflow-auto p-6">
        {/* Informations utilisateur */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-sky-300">
          <div className="flex items-center">
            <img
              src="/assets/profile.jpg"
              alt="User"
              className="w-24 h-24 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-pink-500">{user.name}</h3>
              <p className="text-sky-600">Email: {user.email}</p>
              <p className="text-sky-600">Phone: {user.phone}</p>
              <p className="text-sky-600">Age: {user.age}</p>
              <p className="text-sky-600">Height: {user.height} cm</p>
              <p className="text-sky-600">Weight: {user.weight} kg</p>
              <p className="text-sky-600">Joined: {user.joinedDate}</p>
            </div>
          </div>
        </div>

        {/* Liste des objectifs */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-sky-300">
          <h3 className="text-lg font-semibold mb-4 text-pink-500">My Goals</h3>
          <div className="max-h-80 overflow-y-auto">
            <ul>
              {goals.map((goal) => (
                <li
                  key={goal.id}
                  className="flex justify-between items-center py-2 border-b last:border-none"
                >
                  <span className="text-sky-600">{goal.title}</span>
                  <button
                    onClick={() => toggleGoalStatus(goal.id)}
                    className={`px-4 py-1 rounded-full text-white ${
                      goal.status === "Active" ? "bg-pink-500" : "bg-sky-400"
                    }`}
                  >
                    {goal.status}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Ajouter un nouvel objectif */}
          <div className="mt-4 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Set a new goal"
              value={newGoalTitle}
              onChange={(e) => setNewGoalTitle(e.target.value)}
              className="flex-1 border rounded px-4 py-2 border-sky-300"
            />
            <button
              onClick={addGoal}
              className="bg-pink-500 text-white px-4 py-2 rounded-full"
            >
              Add Goal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
