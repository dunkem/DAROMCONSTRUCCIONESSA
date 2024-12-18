module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: "eslint:recommended",
    parserOptions: {
        ecmaVersion: 12,
    },
    globals: {
        dataLayer: "readonly",
        gtag_report_conversion: "readonly" // Añade esta línea
    },
    rules: {
        // Aquí puedes agregar reglas personalizadas
    }
};