import boardData from '../data/board.json';
import { v4 as uuid } from 'uuid';
import { useStorage } from '@vueuse/core';

export const useBoardStore = defineStore('boardStore', () => {
   const board = useStorage('board', boardData);

   function addColumn(columnName: string) {
      board.value.columns.push({
         id: uuid(),
         name: columnName,
         tasks: []
      });
   }

   function addTask({ columnIndex, taskName }) {
      board.value.columns[columnIndex].tasks.push({
         id: uuid(),
         name: taskName,
         description: '',
      });
   }

   function deleteTask(taskId) {
      console.log(taskId, board.value.columns);

      for (const column of board.value.columns) {
         const taskIndex = column.tasks.findIndex(task => task.id === taskId);

         if (taskIndex !== -1) {
            column.tasks.splice(taskIndex, 1);
            return;
         }
      }
   }

   function moveTask({ fromTaskIndex, toTaskIndex, fromColumnIndex, toColumnIndex }) {
      const task = board.value.columns[fromColumnIndex].tasks.splice(fromTaskIndex, 1)[0];

      board.value.columns[toColumnIndex].tasks.splice(toTaskIndex, 0, task);
   }

   
   function moveColumn({ fromColumnIndex, toColumnIndex }) {
      const column = board.value.columns.splice(fromColumnIndex, 1)[0];

      board.value.columns.splice(toColumnIndex, 0, column);
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
      deleteColumn,
      addTask,
      deleteTask,
      moveTask,
      moveColumn
   }
});
