import baseConfig from '@extension/tailwindcss-config';
import { withUI } from '@extension/ui';

export default withUI({
  ...baseConfig,
  content: ['src/**/*.{ts,tsx}'],
  plugins: [
    // require('daisyui'),
  ],
  corePlugins:{
    preflight:false
  },
  important: "#__seo-ck"
});
