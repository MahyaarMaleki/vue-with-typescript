import { defineStore } from "pinia";
import { ref } from "vue";
import { useTheme } from "vuetify";

export const useThemeStore = defineStore('theme', () => {
  const theme = useTheme();
  const themeIcon = ref('');
  const isThemeDark = ref(false);
  const initTheme = () => {
    const theTheme = localStorage.getItem('theme');
    isThemeDark.value = false;
    if(theTheme) {
      theme.global.name.value = theTheme;
      isThemeDark.value = theTheme !== 'myCustomLightTheme';
    } else {
      theme.global.name.value = 'myCustomLightTheme';
      localStorage.setItem('theme', theme.global.name.value);
    }
    setThemeIcon();
  };
  const setThemeIcon = () => {
    themeIcon.value = isThemeDark.value ? 'mdi-weather-night' : 'mdi-white-balance-sunny';
  };
  const setTheme = (theTheme: boolean) => {
    isThemeDark.value = theTheme;
    setThemeIcon();
    theme.global.name.value = isThemeDark.value ? 'myCustomDarkTheme' : 'myCustomLightTheme';
    localStorage.setItem('theme', theme.global.name.value);
  }

  return {themeIcon, isThemeDark, initTheme, setTheme};
});
