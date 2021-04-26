module.exports = {
  locales: ["en", "fr"],
  defaultLocale: "en",
  pages: {
    "*": ["common"],
    "/404": ["error"],
    "/": ["home"],
  },
  interpolation: {
    prefix: "${",
    suffix: "}",
  },
  loadLocaleFrom: (locale, namespace) =>
    import(`./src/common/translations/${namespace}_${locale}`).then((m) => m.default),
};
