(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4219],
  {
    11638: (e, n, i) => {
      "use strict";
      i.r(n), i.d(n, { default: () => a });
      var r = i(72133),
        t = i(64133),
        s = i.n(t);
      function a(e) {
        let { error: n, reset: i } = e;
        return (0, r.jsx)("html", {
          lang: "en",
          children: (0, r.jsx)("body", {
            style: {
              margin: 0,
              background: "#002a18",
              color: "#f0eae4",
              fontFamily:
                "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
              minHeight: "100dvh",
            },
            children: (0, r.jsxs)("main", {
              style: { maxWidth: 560, margin: "0 auto", padding: "96px 16px" },
              children: [
                (0, r.jsx)("p", {
                  style: {
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#b8c8bf",
                    margin: 0,
                  },
                  children: "Talis \xb7 error",
                }),
                (0, r.jsxs)("h1", {
                  style: {
                    fontSize: 40,
                    lineHeight: 1.02,
                    letterSpacing: "-0.02em",
                    fontWeight: 600,
                    margin: "16px 0 0",
                  },
                  children: ["The page", (0, r.jsx)("br", {}), "did not load."],
                }),
                (0, r.jsx)("p", {
                  style: {
                    color: "#b8c8bf",
                    fontSize: 14,
                    lineHeight: 1.6,
                    margin: "24px 0 0",
                  },
                  children:
                    n.message || "The application shell threw while rendering.",
                }),
                n.digest
                  ? (0, r.jsxs)("p", {
                      style: {
                        color: "#9ab0a4",
                        fontSize: 11,
                        fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                        margin: "8px 0 0",
                      },
                      children: ["Reference ", n.digest],
                    })
                  : null,
                (0, r.jsxs)("div", {
                  style: {
                    display: "flex",
                    gap: 12,
                    marginTop: 32,
                    flexWrap: "wrap",
                  },
                  children: [
                    (0, r.jsx)("button", {
                      type: "button",
                      onClick: () => i(),
                      style: {
                        background: "#cce400",
                        color: "#0f1f18",
                        border: 0,
                        borderRadius: 999,
                        height: 40,
                        padding: "0 20px",
                        fontSize: 14,
                        fontWeight: 500,
                        cursor: "pointer",
                      },
                      children: "Retry",
                    }),
                    (0, r.jsx)(s(), {
                      href: "/",
                      style: {
                        color: "#f0eae4",
                        border: "1px solid rgba(240,234,228,0.2)",
                        borderRadius: 999,
                        height: 40,
                        padding: "0 20px",
                        fontSize: 14,
                        display: "inline-flex",
                        alignItems: "center",
                        textDecoration: "none",
                      },
                      children: "Home",
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    54366: (e, n, i) => {
      Promise.resolve().then(i.bind(i, 11638));
    },
  },
  (e) => {
    e.O(0, [4133, 4314, 4297, 7358], () => e((e.s = 54366))), (_N_E = e.O());
  },
]);
