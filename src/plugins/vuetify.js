/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { pl, zhHans } from 'vuetify/locale'
import { VTreeview,VTreeviewItem,VTreeviewGroup } from 'vuetify/labs/VTreeview'


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VTreeview,VTreeviewItem,VTreeviewGroup
  },
  theme: {
    // defaultTheme: "dark",
  },
  locale: {
    locale: 'zhHans',
    // fallback: 'sv',
    messages: { zhHans, pl },
  },
});
