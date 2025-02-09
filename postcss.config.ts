import path from 'path'

module.exports = {
  plugins: {
    "@tailwindcss/postcss": {
      config: path.join(__dirname, 'tailwind.config.ts'),
    },
    autoprefixer: {},
  },
};
