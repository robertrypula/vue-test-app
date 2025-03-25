<script setup lang="ts">
const pokemonName = ref('pikachu');
const pokemons = ref<string[]>([
    'bulbasaur',
    'ivysaur',
    'venusaur',
    'charmander',
    'charmeleon',
    'charizard',
    'squirtle',
    'wartortle',
    'blastoise',
    'caterpie',
    'metapod',
    'butterfree',
    'weedle',
    'kakuna',
    'beedrill',
    'pidgey',
    'pidgeotto',
    'pidgeot',
    'pikachu',
    'rattata',
    'raticate',
    'snorlax'
]);

const id = ref(0);
const name = ref('');
const sprite = ref('');

const getPokemon = async () => {
    try {
        const pokemon = await $fetch(`/api/${pokemonName.value}`);

        id.value = pokemon.id;
        name.value = pokemon.name;
        sprite.value = pokemon.sprite;
    } catch (error) {
        alert('Not found!');
    }
}
</script>

<template>
    <div>
        <BaseSelect v-model="pokemonName" label="Select a pokemon via select " :options="pokemons" />
    </div>
    <div>
        <BaseInput v-model="pokemonName" label="...or input " />
    </div>
    <div>
        <button @click="getPokemon">...and click here find it!</button>
    </div>

    <p>{{ id }}</p>
    <p>{{ name }}</p>
    <img :src="sprite" alt="pokemon sprite">
</template>
