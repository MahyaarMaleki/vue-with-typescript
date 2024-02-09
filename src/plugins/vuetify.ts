import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import type {ThemeDefinition} from "vuetify";
import {createVuetify} from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#ece6d9',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    subtitle: '#17bf66',

    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};
const myCustomDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#15202b',
    surface: '#242F46',
    primary: '#FFFFFF',
    'primary-darken-1': '#3700B3',
    secondary: '#03dac6',
    'secondary-darken-1': '#018786',
    subtitle: '#54A6C4',
    error: '#ff5722',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
};

export default createVuetify({
  components,
  directives,
  defaults: {
    VBtn: {
      variant: 'outlined',
      class: 'text-none text-decoration-none'
    },
  },
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {myCustomLightTheme, myCustomDarkTheme},
  },
})