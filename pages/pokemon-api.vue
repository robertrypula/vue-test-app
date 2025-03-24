<script setup lang="ts">
const data = await $fetch('/api/snorlax')
const pokemonName = ref('pikachu');

const getPokemon = async () => {
    const pokemon = await $fetch(`/api/${pokemonName.value}`);

    console.log(pokemon)
}
</script>

<template>
    <input v-model="pokemonName" />
    <button @click="getPokemon">Get Pokemon</button>

    <p>{{ data.id }}</p>
    <p>{{ data.name }}</p>
    <img :src="data.sprite" alt="pokemon sprite">
</template>
