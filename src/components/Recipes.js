import React from "react";
import RecipeItem from "./RecipesItem";

const Recipes = (props) => {
    const { recipes } = props;
    return (

        <div className="card-columns" >
            <h1>All Food Recipes
            related your search...</h1>
            {
                recipes.map(recipe =>
                    <RecipeItem
                        key={Math.random() * 100}
                        name={recipe.recipe.name}
                        image={recipe.recipe.image}
                        ingredientLines={recipe.recipe.ingredientLines} />)
            }
        </div>
    );
}
export default Recipes;