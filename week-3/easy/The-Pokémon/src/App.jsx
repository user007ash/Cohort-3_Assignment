import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import Loading from "./Loading"

function App() {
  const [noOfPokemon, setnoOfPokemon] = useState(0);
  const [pokemonType, setPokemonType] = useState([]);
  const [type, setType] = useState(null);
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/type/`);
      const data = await res.json();
      setPokemonType(data.results);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!type || !noOfPokemon) return;
      const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await res.json();
      const limitedPokemon = data.pokemon.slice(0, noOfPokemon);
      setPokemonList(limitedPokemon);
    })();
  }, [type, noOfPokemon]);

  useEffect(() => {
    if (pokemonList.length === 0) return;
    
    (async () => {
      setIsLoading(true)
      const detail = await Promise.all(
        pokemonList.map((p) => fetch(p.pokemon.url).then((res) => res.json()))
      );
      setIsLoading(false);
      setPokemonDetail(detail);
    })();

  }, [pokemonList]);

  return (
    <div className="bg-neutral-700 text-white font-semibold text-xl min-h-screen">
      {/* Navbar */}
      <nav className="bg-neutral-800 w-full px-4 py-3 flex justify-center shadow-md">
        <h1 className="text-3xl font-bold tracking-wide text-yellow-300">
          PokeShow
        </h1>
      </nav>

      {/* Content Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 p-6">
        {/* Pokémon Type Dropdown */}
        <div className="flex flex-col items-start gap-2 w-full max-w-xs">
          <label className="text-sm text-neutral-400">Pokémon Type</label>
          <select
            className="bg-neutral-800 text-white text-base px-4 py-2 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            onChange={(e) => setType(e.target.value)}
            value={type || ""}
          >
            <option value="">Select a Pokémon Type</option>
            {pokemonType.map((typeObj, key) => (
              <option key={key} value={typeObj.name}>
                {typeObj.name}
              </option>
            ))}
          </select>
        </div>

        {/* Pokémon Count Dropdown */}
        <div className="flex flex-col items-start gap-2 w-full max-w-xs">
          <label className="text-sm text-neutral-400">No. of Pokémon</label>
          <select
            className="bg-neutral-800 text-white text-base px-4 py-2 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
            onChange={(e) => setnoOfPokemon(Number(e.target.value))}
            value={noOfPokemon || ""}
          >
            <option value="">Select Quantity</option>
            {[1, 3, 5, 10, 20, 30, 50].map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Placeholder for Pokémon Cards */}
      <div className="p-8">
        <div className="flex justify-center p-6">
          <div className="text-neutral-400 text-center">
            Select options above to show Pokémon cards.
          </div>
        </div>
        {isLoading? isLoading&&<Loading/>:
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6 place-items-center">
          {pokemonDetail.map((data, key) => {
            // console.log(data.sprites.front_default)
            return (
              <Card
              key={key}
              name={data.name}
              image={data.sprites.front_default}
              weight={data.weight}
              type={type}
              />
            );
          })}
        </div>
        }
      </div>
    </div>
  );
}

export default App;
