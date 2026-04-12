window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

function typesetMath(root) {
  if (!window.MathJax || typeof window.MathJax.typesetPromise !== "function") {
    return;
  }

  window.MathJax.startup.promise
    .then(() => {
      window.MathJax.typesetClear([root]);
      window.MathJax.texReset();
      return window.MathJax.typesetPromise([root]);
    })
    .catch((error) => {
      console.error("MathJax typeset failed.", error);
    });
}

document$.subscribe(({ body }) => {
  typesetMath(body);
});

window.addEventListener("load", () => {
  typesetMath(document.body);
});
