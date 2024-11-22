import React from 'react';
import ActivityCard from './ActivityCard';
import Schedule from './Schedule';
import Goals from './Goals';

// Image du goal progress
const goalProgressImage = process.env.PUBLIC_URL + "/assets/goalProgress.png";

// Exemples de repas
const meals = [
  {
    img: process.env.PUBLIC_URL + "/assets/burger.jpg",
    food: "Burger",
    meal: "Lunch",
    calories: "500 kcal",
    priority: "High",
    carbs: "50g",
  },
  {
    img: process.env.PUBLIC_URL + "/assets/pizza.jpg",
    food: "Pizza",
    meal: "Dinner",
    calories: "700 kcal",
    priority: "Medium",
    carbs: "60g",
  },
  {
    img: process.env.PUBLIC_URL + "/assets/sandwitch.jpg",
    food: "Sandwich",
    meal: "Snack",
    calories: "300 kcal",
    priority: "Low",
    carbs: "30g",
  },
];

function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Conteneur principal avec défilement vertical */}
      <main className="flex-1 p-10 ml-1/5 overflow-y-auto h-screen">
        {/* Hero Section */}
        <section 
  className="hero p-8 rounded-lg text-white mb-6"
  style={{
    background: "linear-gradient(to left, rgba(37, 99, 235, 0.8), rgba(129, 140, 248, 0.8)), url('/assets/im (2).jpg')",  // Gradient + image
    backgroundSize: 'cover',  // S'assurer que l'image couvre toute la section
    backgroundPosition: 'right center',  // Placer l'image à droite
    backgroundRepeat: 'no-repeat',  // Empêcher la répétition de l'image
  }}
>
  <h2 className="text-3xl font-bold">Track Your Daily Activities</h2>
  <p>Stay on top of your health with our customized tracking.</p>
</section>


        {/* Activity Overview */}
        <div className="activity-cards grid grid-cols-3 gap-4 mb-6">
          <ActivityCard title="Workout" value="4 hrs" color="bg-[#08C5D1]" />
          <ActivityCard title="Calories" value="1800 kcal" color="bg-[#DB6A8F]" />
          <ActivityCard title="Water Intake" value="4 liters" color="bg-[#6B0AB8]" />
        </div>

        {/* Image Goal Progress */}
        <img src={goalProgressImage} alt="Goal Progress" className="w-full h-auto mt-4" />

        {/* Meal Table */}
        <section className="mt-6 bg-white p-4 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-4">Today's Meals</h3>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border-b text-left">Food</th>
                <th className="p-2 border-b text-left">Meal</th>
                <th className="p-2 border-b text-left">Calories</th>
                <th className="p-2 border-b text-left">Priority</th>
                <th className="p-2 border-b text-left">Carbs</th>
              </tr>
            </thead>
            <tbody>
              {meals.map((meal, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-2 border-b flex items-center">
                    <img src={meal.img} alt={meal.food} className="w-10 h-10 mr-2 rounded" />
                    {meal.food}
                  </td>
                  <td className="p-2 border-b">{meal.meal}</td>
                  <td className="p-2 border-b">{meal.calories}</td>
                  <td className="p-2 border-b">{meal.priority}</td>
                  <td className="p-2 border-b">{meal.carbs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Schedule & Goals */}
        <div className="flex mt-6 space-x-6">
          <Schedule />
          <Goals />
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-1/5 p-5 bg-gray-100 h-screen overflow-y-auto">
        {/* My Schedule */}
        <section className="mb-10 mt-20">
          <h3 className="text-lg font-bold mb-4">My Schedule</h3>
          <ul className="space-y-4">
            <li>
              <span className="block font-semibold">Monday</span>
              <span className="text-gray-600">Stretch - 20 Sets</span>
            </li>
            <li>
              <span className="block font-semibold">Tuesday</span>
              <span className="text-gray-600">Back Stretch - 10 Rounds</span>
            </li>
            <li>
              <span className="block font-semibold">Wednesday</span>
              <span className="text-gray-600">Yoga - 20 mins</span>
            </li>
          </ul>
        </section>
        

        {/* Goals */}
        <section>
          <h3 className="text-lg font-bold mb-4">Goals</h3>
          <ul className="space-y-4">
            <li>
              <span className="block font-semibold">ABS & Stretch</span>
              <span className="text-gray-600">Saturday, April 14 08:00 AM</span>
            </li>
            <li>
              <span className="block font-semibold">Push Up</span>
              <span className="text-gray-600">Sunday, April 15 08:00 AM</span>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
}

export default Dashboard;
