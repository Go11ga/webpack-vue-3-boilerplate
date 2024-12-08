import { defineStore } from 'pinia';

export const testStore = defineStore('test', () => {
  const getTest = () => {
    return 'test'
  }
  
  return {
  	getTest,
  };
});
