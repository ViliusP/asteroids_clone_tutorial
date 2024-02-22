import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "@/assets/variables.scss";

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#383a32',
    surface: '#12140e',
    primary: '#b1d18a',
    'primary-darken-1': '#1f3701',
    secondary: '#bfcbad',
    'secondary-darken-1': '#2a331e',
    error: '#ffb4ab',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    // background: '#383a32',
    // surface: '#12140e',
    // primary: '#b1d18a',
    // 'primary-darken-1': '#1f3701',
    // secondary: '#bfcbad',
    // 'secondary-darken-1': '#2a331e',
    // error: '#ffb4ab',
    // info: '#2196F3',
    // success: '#4CAF50',
    // warning: '#FB8C00',
    'shiki-bg': '#292D3E',
  },
}


export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    icons: {
      defaultSet: "mdi",
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        "dark": darkTheme,
        "light": lightTheme,
      },
    },
  });
  // @ts-ignore
  nuxtApp.vueApp.use(vuetify);
});
