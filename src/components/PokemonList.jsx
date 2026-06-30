import { useState, useEffect } from "react";
import { pokemons as fallbackPokemons } from "../data/pokemons";
import PokemonCard from "./PokemonCard";
import { fetchPokemons } from "../services/pokemonService";

export default function PokemonList() {
    const [pokemons, setPokemons] = useState(fallbackPokemons);
    useEffect(() => {
            fetchPokemons().then((data) => {
                if (Array.isArray(data) && data.length > 0) {
                    setPokemons(data);
                }
            }).catch((error) => {
                console.warn("Fetch Pokemons failed, using local data", error);
            });
        }, []);
    
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            {pokemons.map((pokemonItem) => (
                <div key={pokemonItem.id} style={{ flex: '1 1 calc(33.333% - 16px)', boxSizing: 'border-box' }}>
                    <PokemonCard pokemon={pokemonItem} />
                </div>
            ))}
        </div>
    )
}
