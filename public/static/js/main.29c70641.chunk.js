(this["webpackJsonpreact-app"] = this["webpackJsonpreact-app"] || []).push([
  [0],
  {
    10: function (e, t, c) {},
    11: function (e, t, c) {
      "use strict";
      c.r(t);
      var n = c(0),
        r = c(1),
        a = c.n(r),
        s = c(3),
        o = c.n(s),
        i = (c(9), c.p + "static/media/logo.6ce24c58.svg");
      c(10);
      var p = function () {
          return Object(n.jsx)("div", {
            className: "App",
            children: Object(n.jsxs)("header", {
              className: "App-header",
              children: [
                Object(n.jsx)("img", {
                  src: i,
                  className: "App-logo",
                  alt: "logo",
                }),
                Object(n.jsxs)("p", {
                  children: [
                    "Edit ",
                    Object(n.jsx)("code", { children: "src/App.js" }),
                    " and save to reload.",
                  ],
                }),
                Object(n.jsx)("a", {
                  className: "App-link",
                  href: "https://reactjs.org",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Learn React",
                }),
              ],
            }),
          });
        },
        l = function (e) {
          e &&
            e instanceof Function &&
            c
              .e(3)
              .then(c.bind(null, 12))
              .then(function (t) {
                var c = t.getCLS,
                  n = t.getFID,
                  r = t.getFCP,
                  a = t.getLCP,
                  s = t.getTTFB;
                c(e), n(e), r(e), a(e), s(e);
              });
        };
      o.a.render(
        Object(n.jsx)(a.a.StrictMode, { children: Object(n.jsx)(p, {}) }),
        document.getElementById("root")
      ),
        l();
    },
    9: function (e, t, c) {},
  },
  [[11, 1, 2]],
]);
//# sourceMappingURL=main.29c70641.chunk.js.map
