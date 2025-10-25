import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CocktailDetail() {
  const { id } = useParams(); // 🔹 Recupera l'ID dall'URL
  const [drink, setDrink] = useState(null);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setDrink(data.drinks[0]))
      .catch((err) => console.error("Errore nel fetch del dettaglio:", err));
  }, [id]);

  if (!drink) return <p>Caricamento...</p>;

  return (
    <div>
      <Link to="/">⬅ Torna alla lista</Link>
      <h2>{drink.strDrink}</h2>
      <img
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        width="250"
        style={{ borderRadius: "10px" }}
      />
      <p><strong>Categoria:</strong> {drink.strCategory}</p>
      <p><strong>Alcolico:</strong> {drink.strAlcoholic}</p>
      <p><strong>Bicchiere:</strong> {drink.strGlass}</p>
      <p><strong>Istruzioni:</strong> {drink.strInstructions}</p>

      <h4>Ingredienti:</h4>
      <ul>
        {Array.from({ length: 15 }).map((_, i) => {
          const ingredient = drink[`strIngredient${i + 1}`];
          const measure = drink[`strMeasure${i + 1}`];
          return (
            ingredient && (
              <li key={i}>
                {ingredient} {measure ? `- ${measure}` : ""}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}

export default CocktailDetail;