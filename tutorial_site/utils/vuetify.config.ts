import 'vuetify/styles'
import { md3 } from 'vuetify/blueprints'
import { createVuetify, type ThemeDefinition } from "vuetify";
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'
import colors from 'vuetify/util/colors'

const myCustomLightTheme: ThemeDefinition = {
    dark: false,
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
export default defineVuetifyConfiguration({
    icons: {
        defaultSet: 'mdi',
        sets: ['mdi']
    },
    blueprint: md3,
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: "#ff00d4", // #E53935
                    secondary: colors.red.lighten4, // #FFCDD2

                },
            },
            dark: {
                dark: true,
                colors: {
                    primary: colors.red.darken1, // #E53935
                    secondary: colors.red.lighten4, // #FFCDD2

                },
            },
        },
    },
})

// export default defineNuxtPlugin((nuxtApp) => {
//   const vuetify = createVuetify({
//     ssr: true,
// 		components,
//     directives,
//     icons: {
//       defaultSet: "mdi",
//     },
//     theme: {
//       defaultTheme: 'myCustomLightTheme',
//       themes: {
//         myCustomLightTheme,
//       },
//     },
//   });
//   nuxtApp.vueApp.use(vuetify);
// });