// Street food data based on product.md specifications
const streetFoods = {
  'Dahibara Aloodum': {
    price: 30,
    times: ['morning', 'evening'],
    description: 'Very popular in mornings and evenings',
    category: 'main'
  },
  'Bara Ghuguni': {
    price: 25,
    times: ['morning'],
    description: 'Common breakfast item',
    category: 'breakfast'
  },
  'Chuda Mix': {
    price: 20,
    times: ['evening'],
    description: 'Cheap, quick evening snack',
    category: 'snack'
  },
  'Gupchup': {
    price: 25,
    times: ['evening'],
    description: 'Popular near markets and colleges',
    category: 'snack'
  },
  'Pakodi': {
    price: 30,
    times: ['evening'],
    description: 'Common during rainy evenings',
    category: 'snack'
  }
};

function recommend() {
  const time = document.getElementById("time").value;
  const budget = parseInt(document.getElementById("budget").value);
  const resultDiv = document.getElementById("result");

  // Validation
  if (!time) {
    resultDiv.innerHTML = '<div class="error">Please select a time of day</div>';
    return;
  }
  
  if (!budget || budget < 10) {
    resultDiv.innerHTML = '<div class="error">Please enter a valid budget (minimum ₹10)</div>';
    return;
  }

  let recommendations = [];
  let culturalNote = '';

  // Apply recommendation rules from product.md
  if (budget < 30) {
    // Rule: If budget is low → suggest Chuda Mix or Bara
    if (time === 'evening' && budget >= 20) {
      recommendations.push(streetFoods['Chuda Mix']);
    }
    if (time === 'morning' && budget >= 25) {
      recommendations.push(streetFoods['Bara Ghuguni']);
    }
  }

  // Time-based recommendations
  if (time === 'morning') {
    // Rule: If morning → suggest Bara Ghuguni or Dahibara
    if (budget >= 25) recommendations.push(streetFoods['Bara Ghuguni']);
    if (budget >= 30) recommendations.push(streetFoods['Dahibara Aloodum']);
  } else if (time === 'afternoon') {
    // Cultural note: avoid oily food due to heat, suggest light snacks
    culturalNote = 'During hot afternoons, locals prefer light snacks and avoid oily food. Consider visiting stalls after 5 PM for better options.';
  } else if (time === 'evening') {
    // Rule: If evening → suggest Gupchup or Pakodi
    if (budget >= 25) recommendations.push(streetFoods['Gupchup']);
    if (budget >= 30) recommendations.push(streetFoods['Pakodi']);
    if (budget >= 20) recommendations.push(streetFoods['Chuda Mix']);
    if (budget >= 30) recommendations.push(streetFoods['Dahibara Aloodum']);
  }

  // Filter recommendations by budget
  recommendations = recommendations.filter(food => food.price <= budget);

  // Remove duplicates
  recommendations = recommendations.filter((food, index, self) => 
    index === self.findIndex(f => f === food)
  );

  displayRecommendations(recommendations, time, budget, culturalNote);
}

function displayRecommendations(recommendations, time, budget, culturalNote) {
  const resultDiv = document.getElementById("result");
  
  if (recommendations.length === 0 && !culturalNote) {
    resultDiv.innerHTML = `
      <div class="no-results">
        <h3>No recommendations available</h3>
        <p>Try increasing your budget or selecting a different time. Most street food costs between ₹20–₹50.</p>
      </div>
    `;
    return;
  }

  let html = `<div class="recommendations">`;
  
  if (culturalNote) {
    html += `
      <div class="cultural-advice">
        <h3>🌡️ Afternoon Advisory</h3>
        <p>${culturalNote}</p>
      </div>
    `;
  }

  if (recommendations.length > 0) {
    html += `<h3>🍛 Recommended for ${time} (Budget: ₹${budget})</h3>`;
    
    recommendations.forEach(food => {
      const foodName = Object.keys(streetFoods).find(key => streetFoods[key] === food);
      html += `
        <div class="food-item">
          <div class="food-header">
            <span class="food-name">${foodName}</span>
            <span class="food-price">₹${food.price}</span>
          </div>
          <p class="food-description">${food.description}</p>
        </div>
      `;
    });

    // Add budget-specific advice
    if (budget < 30) {
      html += `
        <div class="budget-tip">
          <p><strong>💰 Student Budget Tip:</strong> You're in the preferred student budget range (under ₹30)!</p>
        </div>
      `;
    }

    // Add time-specific cultural notes
    if (time === 'evening') {
      html += `
        <div class="time-tip">
          <p><strong>🕐 Evening Tip:</strong> Street food stalls are at their peak now - perfect timing!</p>
        </div>
      `;
    }
  }

  html += `</div>`;
  resultDiv.innerHTML = html;
}
