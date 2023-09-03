const sourceDir = 'dist/apps/gale';

module.exports = {
  content: [`${sourceDir}/index.html`, `${sourceDir}/*.js`],
  css: [`${sourceDir}/*.css`],
  output: sourceDir,
  safelist: {
    standard: [/red1$/],
    deep: [
      /modal/,
      /ag-menu/,
      /ag-header-active/,
      /^cm-s-neat/,
      /offcanvas-end/,
    ],
    greedy: [/noUi-/],
  },
};
