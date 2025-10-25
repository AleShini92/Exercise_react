import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CocktailList() {
  const [cocktails, setCocktails] = useState([]);
  const [name, setName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((res) => res.json())
      .then((data) => setCocktails(data.drinks))
      .catch((err) => console.error("Errore nel fetch:", err));
  }, []);

  const filteredCocktails = cocktails.filter((drink) =>
    drink.strDrink.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    setSearchTerm(name.trim());
    setShowList(true);
  };



  // STYLE: <ul> container - <li> card

  const container = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10
  }

  const card = {
    flexGrow: 1,
    flexBasis: 200,
    listStyle: 'none',
    background: '#606060ff',
    padding: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'space-between'
  }


  return (
    <div>
      <h1>Lista Cocktail</h1>
      <input
        type="text"
        placeholder="Cerca un cocktail..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSearch}>Cerca</button>

      {showList && (
        <ul style={container}>
          {filteredCocktails.length > 0 ? (
            filteredCocktails.map((drink) => (
              <li key={drink.idDrink} style={card}>
                <strong>{drink.strDrink}</strong>
                {/* 🔗 Link dinamico verso la pagina dedicata */}
                <Link to={`/cocktail/${drink.idDrink}`}>
                  <img
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                    width="100"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </li>
            ))
          ) : (
            <p>Nessun cocktail trovato.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default CocktailList;
