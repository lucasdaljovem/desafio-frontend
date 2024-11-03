// src/stores/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    usuarios: [],
  }),
  actions: {
    cadastrarUsuario(usuario) {
      this.usuarios.push(usuario);
    },
  },
  getters: {
    getUsuarios: (state) => state.usuarios,
  },
});
