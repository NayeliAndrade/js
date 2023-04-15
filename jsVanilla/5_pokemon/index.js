"use strict";
import fetch from "node-fetch";

async function GetPokemonWeight(id) {
  let weight = 0;
  const test = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const payload = await test.json();
  return payload.weight;
}


async function compareWeightPokemon(id1, id2) {
  let pokemon1 = await GetPokemonWeight(id1);
  let pokemon2 = await GetPokemonWeight(id2);

  if (pokemon1 < pokemon2) {
    console.log("pokemon 1 pesa menos", "su peso es de: ", pokemon1);
  } else {
    console.log("pokemon 2 pesa menos", "su peso es de: ", pokemon2);
  }
}

compareWeightPokemon(10, 15);

async function weightMayor(id) {
  let pokemon1 = await GetPokemonWeight(id);
  
  if (pokemon1 > 100) {
    console.log(`El pokemon ${id} pesa mas de 100 kilos: ${pokemon1}`);
  } else {
    console.log(`El pokemon ${id} pesa menos de 100 kilos: ${pokemon1}`);
  }
}

weightMayor(10)


/* pokemon("pikachu") */

/* https://pokeapi.co/api/v2/pokemon/${pokemonName} */
