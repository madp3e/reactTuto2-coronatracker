import React from 'react';
const Recipe = ({title,calories,image,ingredients}) => {
    return ( 
        <div>
            <ol>
                {ingredients.map((ingredient) => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt="" />

        </div>
     );
}
 
export default Recipe;