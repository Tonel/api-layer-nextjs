import { PokemonAPI } from "@/api/PokemonAPI";
import styles from "./page.module.css";
import Image from "next/image";

export default async function Page({ params }) {
  // retrieve the data related to the current Pokemon
  // on the server
  const pokemon = await PokemonAPI.get(params.name);

  return (
    <div className={styles.card}>
      <div className={styles.title}>{pokemon.name}</div>
      <div>
        {pokemon.sprites?.other?.["official-artwork"]?.front_default && (
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className={styles.image}
            width={300}
            height={300}
          />
        )}
      </div>
    </div>
  );
}
