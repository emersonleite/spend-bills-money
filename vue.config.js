/* Configuração de domínio no github pages */
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/spend-bills-money/" : "/",
  outputDir: "docs",
};
