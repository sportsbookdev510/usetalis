(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4345, 9181],
  {
    5633: (e, a, s) => {
      "use strict";
      s.d(a, { Topbar: () => N });
      var r = s(72133),
        t = s(64133),
        n = s.n(t),
        l = s(12214),
        i = s(50625),
        c = s(99011);
      let d = (0, c.A)("arrow-up-right", [
        ["path", { d: "M7 7h10v10", key: "1tivn9" }],
        ["path", { d: "M7 17 17 7", key: "1vkiza" }],
      ]);
      var h = s(20829);
      let o = (0, c.A)("menu", [
        ["path", { d: "M4 5h16", key: "1tepv9" }],
        ["path", { d: "M4 12h16", key: "1lakjw" }],
        ["path", { d: "M4 19h16", key: "1djgab" }],
      ]);
      var m = s(84520),
        p = s(29142),
        x = s(91109),
        b = s(12909),
        u = s(74642),
        f = s(82283),
        k = s(36811);
      let j =
        "inline-flex h-8 items-center gap-1.5 rounded-pill border border-rule bg-transparent px-2.5 text-xs text-muted transition-colors hover:border-fg hover:text-fg";
      function y(e) {
        let { className: a } = e,
          [s, t] = (0, i.useState)(!1);
        async function n() {
          try {
            await navigator.clipboard.writeText(p.CV.address),
              t(!0),
              setTimeout(() => t(!1), 1500);
          } catch (e) {
            t(!1);
          }
        }
        return (0, r.jsxs)("div", {
          className: (0, x.cn)("flex items-center gap-2", a),
          children: [
            (0, r.jsxs)("button", {
              type: "button",
              onClick: n,
              title: ""
                .concat(p.CV.symbol, " contract ")
                .concat(p.CV.address, " \xb7 click to copy"),
              "aria-label": s
                ? "Contract address copied"
                : "Copy the "
                    .concat(p.CV.symbol, " contract address ")
                    .concat(p.CV.address),
              className: (0, x.cn)(j, s && "border-success/60 text-success"),
              children: [
                (0, r.jsx)("span", { children: "CA" }),
                (0, r.jsx)("span", {
                  className: "font-mono tnum",
                  children: (0, k.Dc)(p.CV.address, 6, 4),
                }),
                s
                  ? (0, r.jsx)(b.A, {
                      className: "size-3",
                      "aria-hidden": "true",
                    })
                  : (0, r.jsx)(u.A, {
                      className: "size-3",
                      "aria-hidden": "true",
                    }),
                (0, r.jsx)("span", {
                  role: "status",
                  className: "sr-only",
                  children: s ? "Copied" : "",
                }),
              ],
            }),
            (0, r.jsxs)("a", {
              href: p.CV.chartUrl,
              target: "_blank",
              rel: "noreferrer noopener",
              title: "".concat(
                p.CV.symbol,
                " chart on DexScreener (opens in a new tab)"
              ),
              className: j,
              children: [
                "Chart",
                (0, r.jsx)(f.A, { className: "size-3", "aria-hidden": "true" }),
              ],
            }),
          ],
        });
      }
      function N() {
        let [e, a] = (0, i.useState)(!1),
          s = (0, l.usePathname)();
        return (0, r.jsxs)("header", {
          className: (0, x.cn)(
            "sticky z-40 border-b border-line bg-bg/85 backdrop-blur",
            p.Ag.topbar
          ),
          children: [
            (0, r.jsxs)("div", {
              className:
                "container-x flex h-16 items-center justify-between gap-4",
              children: [
                (0, r.jsx)(m.Sc, { tone: "black" }),
                (0, r.jsx)("nav", {
                  "aria-label": "Primary",
                  className: "hidden items-center gap-8 md:flex",
                  children: p.Ac.marketing.map((e) =>
                    (0, r.jsx)(
                      n(),
                      {
                        href: e.href,
                        className: (0, x.cn)(
                          "text-sm font-medium text-muted transition-colors hover:text-fg",
                          s === e.href && "text-fg"
                        ),
                        children: e.label,
                      },
                      e.href
                    )
                  ),
                }),
                (0, r.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, r.jsx)(y, { className: "hidden lg:flex" }),
                    (0, r.jsx)(m.$n, {
                      href: "https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=0xc8885f68acb213b144fda1835d61ef05d88ad687",
                      size: "sm",
                      className: "hidden sm:inline-flex",
                      children: "Buy $TALIS",
                    }),
                    // (0, r.jsx)(m.K0, {
                    //   href: "https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=0xc8885f68acb213b144fda1835d61ef05d88ad687",
                    //   "aria-label": "Open the app",
                    //   className: "hidden sm:inline-flex",
                    //   children: (0, r.jsx)(d, {
                    //     className: "size-4",
                    //     "aria-hidden": "true",
                    //   }),
                    // }),
                    (0, r.jsx)(m.K0, {
                      "aria-label": e ? "Close menu" : "Open menu",
                      "aria-expanded": e,
                      onClick: () => a((e) => !e),
                      className: "md:hidden",
                      children: e
                        ? (0, r.jsx)(h.A, {
                            className: "size-4",
                            "aria-hidden": "true",
                          })
                        : (0, r.jsx)(o, {
                            className: "size-4",
                            "aria-hidden": "true",
                          }),
                    }),
                  ],
                }),
              ],
            }),
            e
              ? (0, r.jsx)("nav", {
                  "aria-label": "Primary mobile",
                  className: "container-x border-t border-line pb-4 md:hidden",
                  children: (0, r.jsxs)("ul", {
                    className: "flex flex-col",
                    children: [
                      p.Ac.marketing.map((e) =>
                        (0, r.jsx)(
                          "li",
                          {
                            children: (0, r.jsx)(n(), {
                              href: e.href,
                              onClick: () => a(!1),
                              className: "block py-3 text-sm text-fg",
                              children: e.label,
                            }),
                          },
                          e.href
                        )
                      ),
                      (0, r.jsx)("li", {
                        className: "py-3",
                        children: (0, r.jsx)(y, {}),
                      }),
                      (0, r.jsx)("li", {
                        className: "pt-2",
                        children: (0, r.jsx)(m.$n, {
                          href: "https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=0xc8885f68acb213b144fda1835d61ef05d88ad687",
                          size: "sm",
                          className: "w-full",
                          children: "Buy $TALIS",
                        }),
                      }),
                    ],
                  }),
                })
              : null,
          ],
        });
      }
    },
    12909: (e, a, s) => {
      "use strict";
      s.d(a, { A: () => r });
      let r = (0, s(99011).A)("check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    20829: (e, a, s) => {
      "use strict";
      s.d(a, { A: () => r });
      let r = (0, s(99011).A)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    23473: (e, a, s) => {
      Promise.resolve().then(s.bind(s, 95646)),
        Promise.resolve().then(s.bind(s, 5633)),
        Promise.resolve().then(s.bind(s, 56749)),
        Promise.resolve().then(s.t.bind(s, 64133, 23)),
        Promise.resolve().then(s.t.bind(s, 25626, 23));
    },
    74642: (e, a, s) => {
      "use strict";
      s.d(a, { A: () => r });
      let r = (0, s(99011).A)("copy", [
        [
          "rect",
          {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea",
          },
        ],
        [
          "path",
          {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf",
          },
        ],
      ]);
    },
    82283: (e, a, s) => {
      "use strict";
      s.d(a, { A: () => r });
      let r = (0, s(99011).A)("external-link", [
        ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
        ["path", { d: "M10 14 21 3", key: "gplh6r" }],
        [
          "path",
          {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp",
          },
        ],
      ]);
    },
  },
  (e) => {
    e.O(
      0,
      [9276, 4133, 755, 3869, 756, 2976, 4520, 592, 2193, 4314, 4297, 7358],
      () => e((e.s = 23473))
    ),
      (_N_E = e.O());
  },
]);
