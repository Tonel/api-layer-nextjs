import styles from "./page.module.css";
import { PokemonAPI } from "@/api/PokemonAPI";
import Link from "next/link";

export default async function Home() {
  // retrieve the list of Pokemon on the server using
  // the API layer
  const pokemonList = await PokemonAPI.getPaginated({
    limit: 21,
    offset: 0,
  });

  return (
    <div className={styles.gridContainer}>
      {pokemonList.results.map((pokemon, index) => (
        <Link
          href={`/pokemon/${pokemon.name}`}
          key={index}
          className={styles.linkContent}
        >
          {pokemon.name}
        </Link>
      ))}
    </div>
  );
}
