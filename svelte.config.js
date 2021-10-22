const preprocess = require("svelte-preprocess");
const { optimizeImports, elements } = require("carbon-preprocess-svelte");

module.exports = {
  disableDependencyReinclusion: ["@roxi/routify"],

  preprocess: [optimizeImports(), elements({ theme: "g90" }), preprocess()],
};
