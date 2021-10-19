import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import renderMathInElement from "katex/dist/contrib/auto-render";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/night.css";
import "katex/dist/katex.css";

let deck = new Reveal({
  plugins: [Markdown],
});
deck.initialize();

document.addEventListener("DOMContentLoaded", function () {
  renderMathInElement(document.body, {
    // customised options
    // • auto-render specific keys, e.g.:
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true },
    ],
    // • rendering keys, e.g.:
    throwOnError: false,
  });
});
