const plugin = require("tailwindcss");
const { postcss } = require("tailwindcss");
const tailwindConfig = require("./tailwind.config");

module.exports = {
    style: {
        postcss: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
}