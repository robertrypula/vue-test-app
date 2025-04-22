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

   const getTask = computed(() => {
      return (taskId: string) => {
         for (const column of board.value.columns) {
            const task = column.tasks.find(task => task.id === taskId);

            if (task) {
               return task;
            }
         }
      }
   });

   function deleteColumn(columnIndex: number) {
      board.value.columns.splice(columnIndex, 1);
   }
   
   return {
      // state
      board,

      // getters
      getTask,

      // actions
      addColumn,
      deleteColumn
   }
});
