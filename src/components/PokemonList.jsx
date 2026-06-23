import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
//import {pokemons} from "../data/pokemons";
import PokemonCard from "./PokemonCard";
import { fetchPokemons } from "../services/pokemonService";

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {

            fetchPokemons().then((data) => {
                setPokemons(data);
            }).catch((error) => {
                alert("Error obtenido intentelo mas tarde " );
                console.error("Error Obtenido", error);
            });
        }, []);
    
    return (
        <Grid container spacing={2}>
            {pokemons.map(
                (pokemonItem) => (
                    <Grid key={pokemonItem.id} size={{ xs: 12, sm: 6, md: 4 }}>
                        <PokemonCard pokemon={pokemonItem} />
                    </Grid>
                )
            )} 
        </Grid>
    )
}
