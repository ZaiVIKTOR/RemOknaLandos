import { defineStore } from 'pinia'

export const useDarkThemeStore = defineStore('dark_theme', {
    state: () => ({ theme: localStorage.getItem('dark_theme') ? JSON.parse(localStorage.getItem('dark_theme')) : false}),
    actions: {
      setTheme(theme) {
        this.theme = theme;
        localStorage.setItem('dark_theme', JSON.stringify(theme));
      }
    },
})