import React from "react";

// Exemple de données des recettes
const recipeData = {
  recommended: [
    {
      id: 1,
      name: "Green Salad",
      time: "10 min",
      image: "/assets/GreenSalad.jpg",
      tags: ["Heart Health", "Weight Loss"],
    },
    {
      id: 2,
      name: "Roasted Chicken",
      time: "50 min",
      image: "/assets/RoastedChiken.jpg",
      tags: ["B-12", "Protein Rich"],
    },
    {
      id: 3,
      name: "Banana Shake",
      time: "5 min",
      image: "/assets/BanaShake.jpg",
      tags: ["Quick", "Complex Carbs"],
    },
    {
      id: 4,
      name: "Sunny Side Up",
      time: "15 min",
      image: "/assets/SunnySideUp.jpg",
      tags: ["Heart Health", "Protein Rich"],
    },
  ],
  trending: [
    {
      id: 5,
      name: "Oats Pancakes",
      time: "35 min",
      image: "/assets/punkake.jpg",
      tags: ["Heart Health", "Weight Loss"],
    },
    {
      id: 6,
      name: "Whole Wheat Noodles",
      time: "15 min",
      image: "/assets/Noodles.jpg",
      tags: ["B-12", "Protein Rich"],
    },
    {
      id: 7,
      name: "Roasted Chicken Breast",
      time: "25 min",
      image: "/assets/ChikenBreast.jpg",
      tags: ["Quick", "Complex Carbs"],
    },
    {
      id: 8,
      name: "Roasted Veggies",
      time: "5 min",
      image: "/assets/veggies.jpg",
      tags: ["Heart Health", "Protein Rich"],
    },
  ],
  healerChoice: [
    {
      id: 9,
      name: "Green Salad",
      time: "10 min",
      image: "/assets/GreenSalad.jpg",
      tags: ["Heart Health", "Weight Loss"],
    },
    {
      id: 10,
      name: "Roasted Chicken",
      time: "50 min",
      image: "/assets/RoastedChiken.jpg",
      tags: ["B-12", "Protein Rich"],
    },
    {
      id: 11,
      name: "Banana Shake",
      time: "5 min",
      image: "/assets/BanaShake.jpg",
      tags: ["Quick", "Complex Carbs"],
    },
  ],
};

const Recipes = () => {
  const renderRecipeSection = (title, recipes) => (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow p-4">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="rounded-lg mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-lg font-semibold">{recipe.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{recipe.time}</p>
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className="p-6 bg-gray-100 min-h-screen overflow-y-auto"
      style={{ height: "calc(100vh - 64px)" }} // Ajuster la hauteur pour laisser un espace pour le header si nécessaire
    >
      {renderRecipeSection("Recommended Recipes", recipeData.recommended)}
      {renderRecipeSection("Trending Recipes", recipeData.trending)}
      {renderRecipeSection("Healer's Choice", recipeData.healerChoice)}
    </div>
  );
};

export default Recipes;
