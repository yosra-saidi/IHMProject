import React, { useState } from 'react';

// Exemples de repas
const initialMeals = [
  {
    img: process.env.PUBLIC_URL + "/assets/dejeuner.jpg",
    food: "Salade",
    meal: "Break Fast",
    calories: "250 kcal", // calories estimées
    priority: "Medium", // priorité
    carbs: "20g",
  },
  {
    img: process.env.PUBLIC_URL + "/assets/dinner.jpg",
    food: "Oeuf",
    meal: "Dinner",
    calories: "250 kcal", // calories estimées
    priority: "Medium", // priorité
    carbs: "20g",
  },
  {
    img: process.env.PUBLIC_URL + "/assets/lunch.jpg",
    food: "Riz",
    meal: "Lunch",
    calories: "250 kcal", // calories estimées
    priority: "Medium", // priorité
    carbs: "20g",
  },
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
  {
    img: process.env.PUBLIC_URL + "/assets/poullet.jpg",
    food: "Poulet Grillé",
    meal: "Lunch",
    calories: "400 kcal",
    priority: "High",
    carbs: "35g",
  },
  {
    img: process.env.PUBLIC_URL + "/assets/smoothie.jpg",
    food: "Smoothie",
    meal: "Snack",
    calories: "150 kcal",
    priority: "Low",
    carbs: "20g",
  },
  {
    img: process.env.PUBLIC_URL + "/assets/pates.jpg",
    food: "Pâtes",
    meal: "Dinner",
    calories: "600 kcal",
    priority: "Medium",
    carbs: "80g",
  },
  {
    img: process.env.PUBLIC_URL + "/assets/omlette.jpg",
    food: "Omelette",
    meal: "Break Fast",
    calories: "350 kcal",
    priority: "Medium",
    carbs: "10g",
  },
  {
    img: process.env.PUBLIC_URL + "/assets/saladeFruit.jpg",
    food: "Salade de Fruits",
    meal: "Snack",
    calories: "180 kcal",
    priority: "Low",
    carbs: "40g",
  },
];

function DietPlan() {
  const [meals, setMeals] = useState(initialMeals);
  const [editingMeal, setEditingMeal] = useState(null);
  const [formData, setFormData] = useState({
    food: "",
    meal: "",
    calories: "",
    priority: "",
    carbs: "",
  });

  const [isAdding, setIsAdding] = useState(false); // Flag to check if adding a new meal

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (Add or Edit meal)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingMeal) {
      // Editing an existing meal
      const updatedMeals = meals.map((meal) =>
        meal.food === editingMeal.food ? { ...meal, ...formData } : meal
      );
      setMeals(updatedMeals);
    } else {
      // Adding a new meal
      setMeals([...meals, formData]);
    }
    setFormData({
      food: "",
      meal: "",
      calories: "",
      priority: "",
      carbs: "",
    });
    setEditingMeal(null);
    setIsAdding(false); // Reset the adding flag
  };

  // Edit meal
  const handleEditMeal = (meal) => {
    setEditingMeal(meal);
    setFormData(meal);
    setIsAdding(false); // Reset to not adding a new meal
  };

  // Delete meal
  const handleDeleteMeal = (meal) => {
    setMeals(meals.filter((m) => m.food !== meal.food));
  };

  // Add new meal toggle
  const handleAddNewMeal = () => {
    setIsAdding(true);
    setFormData({
      food: "",
      meal: "",
      calories: "",
      priority: "",
      carbs: "",
    });
    setEditingMeal(null);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Conteneur principal avec défilement vertical */}
      <main className="flex-1 p-10 ml-1/5 overflow-y-auto h-screen">
        {/* Hero Section */}
        <section
          className="hero p-8 rounded-lg text-white mb-6"
          style={{
            background:
              "linear-gradient(to left, rgba(37, 99, 235, 0.8), rgba(129, 140, 248, 0.8)), url('/assets/diet.jpg')", // Gradient + image
            backgroundSize: "cover", // S'assurer que l'image couvre toute la section
            backgroundPosition: "right center", // Placer l'image à droite
            backgroundRepeat: "no-repeat", // Empêcher la répétition de l'image
          }}
        >
          <h2 className="text-3xl font-bold">Track Your Daily Diet</h2>
          <p>Stay healthy with a balanced diet plan and track your meals.</p>
        </section>

        {/* Meal Table */}
        <section className="mt-6 bg-white p-4 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-4">Today's Meals</h3>
          <button
            onClick={handleAddNewMeal}
            className="bg-blue-500 text-white p-2 rounded-lg mb-4 hover:bg-blue-600"
          >
            Add New Meal
          </button>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border-b text-left">Food</th>
                <th className="p-2 border-b text-left">Meal</th>
                <th className="p-2 border-b text-left">Calories</th>
                <th className="p-2 border-b text-left">Priority</th>
                <th className="p-2 border-b text-left">Carbs</th>
                <th className="p-2 border-b text-left">Actions</th>
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
                  <td className="p-2 border-b flex space-x-2">
                    <button
                      className="text-blue-500"
                      onClick={() => handleEditMeal(meal)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => handleDeleteMeal(meal)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Add/Edit Meal Form */}
        {(isAdding || editingMeal) && (
          <section className="mt-6 bg-white p-4 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-4">
              {editingMeal ? "Edit Meal" : "Add Meal"}
            </h3>
            <form onSubmit={handleFormSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="food" className="block text-sm font-medium text-gray-700">
                    Food
                  </label>
                  <input
                    type="text"
                    id="food"
                    name="food"
                    value={formData.food}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="meal" className="block text-sm font-medium text-gray-700">
                    Meal
                  </label>
                  <input
                    type="text"
                    id="meal"
                    name="meal"
                    value={formData.meal}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="calories" className="block text-sm font-medium text-gray-700">
                    Calories
                  </label>
                  <input
                    type="text"
                    id="calories"
                    name="calories"
                    value={formData.calories}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                    Priority
                  </label>
                  <input
                    type="text"
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="carbs" className="block text-sm font-medium text-gray-700">
                    Carbs
                  </label>
                  <input
                    type="text"
                    id="carbs"
                    name="carbs"
                    value={formData.carbs}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                  {editingMeal ? "Update Meal" : "Add Meal"}
                </button>
              </div>
            </form>
          </section>
        )}
      </main>
    </div>
  );
}

export default DietPlan;
