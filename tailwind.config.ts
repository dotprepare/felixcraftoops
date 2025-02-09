import type { Config } from "tailwindcss";

export default {
    content: [
        './src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {}
    },
    plugins: [
        //require('daisyui')
    ],
} satisfies Config;

// module.exports = {
//     content: [
//         './src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}',
//     ],
//     applyBaseStyles: false,
//     plugins: [require('daisyui')],
// };
