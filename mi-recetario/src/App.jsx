import React, { useState } from 'react';
import { recipes } from './data/recipes';
import './App.css';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);

  return (
    <div className="app-container">
      <header className="header">
        <h1>🍳 Recetario Express</h1>
      </header>

      <main className="content">
        <aside className="recipe-selector">
          <h2>Recetas Disponibles</h2>
          {recipes.map((recipe) => (
            <button
              key={recipe.id}
              className={`selector-btn ${selectedRecipe.id === recipe.id ? 'active' : ''}`}
              onClick={() => setSelectedRecipe(recipe)}
            >
              <h3>{recipe.title}</h3>
              <span>⏱️ {recipe.time}</span>
            </button>
          ))}
        </aside>

        <section className="recipe-detail">
          <img src={selectedRecipe.image} alt={selectedRecipe.title} className="recipe-img" />
          <h2>{selectedRecipe.title}</h2>
          <p className="description">{selectedRecipe.description}</p>
          <div className="meta-info">
            <span><strong>Tiempo:</strong> {selectedRecipe.time}</span>
            <span><strong>Porciones:</strong> {selectedRecipe.servings}</span>
          </div>

          <div className="section-block">
            <h3>Ingredientes</h3>
            <ul>
              {selectedRecipe.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="section-block">
            <h3>Instrucciones</h3>
            <ol>
              {selectedRecipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;