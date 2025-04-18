import boarData from '../data/board.json';
import { useStorage } from '@vueuse/core';

export const useBoardStore = defineStore('boardStore', () =>{
   const board = useStorage('board', boarData);

   function addColumn(columnName: string) {
      board.value.columns.unshift({
         name: columnName,
         tasks: []
      });
   }

   function deleteColumn(columnIndex: number) {
      board.value.columns.splice(columnIndex, 1);
   }
   
   return {
        board,
        addColumn,
        deleteColumn
   }
});
