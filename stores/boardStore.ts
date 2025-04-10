import boarData from '../data/board.json'

export const useBoardStore = defineStore('boardStore', () =>{
   const board = ref(boarData);

   return {
        board
   }
});
