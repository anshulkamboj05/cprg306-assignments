"use Client"

import React, {useState, useEffect} from "react";

const fetchMealIdeas = async (ingredient) => {
    console.log("fetchMealIdeas", ingredient);
    const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data.meals || [];
    }
    catch (error) {
        console.error("error fetching meal ideas", error);
        return [];
    }
};

const MealIdeas = ({ingredient}) => {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const fetchedMeal = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeal);
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
};

export default MealIdeas;