hljs.addPlugin(
    new CopyButtonPlugin({
      hook: (text, el) => {
        let { replace, replacewith } = el.dataset;
        if (replace && replacewith) {
          return text.replace(replace, replacewith);
        }
        return text;
      },
      callback: (text, el) => {
       console.log(text);
      },
    })
  );
  hljs.highlightAll();
