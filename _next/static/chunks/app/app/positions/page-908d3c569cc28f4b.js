(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5301],
  {
    9250: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => n });
      let n = (0, t(99011).A)("circle-check", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]);
    },
    11576: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 78850));
    },
    12909: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => n });
      let n = (0, t(99011).A)("check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    13892: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => n });
      let n = (0, t(99011).A)("circle-alert", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
        ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
      ]);
    },
    16127: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => n });
      let n = (0, t(99011).A)("plus", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "M12 5v14", key: "s699le" }],
      ]);
    },
    20829: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => n });
      let n = (0, t(99011).A)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    35737: (e, s, t) => {
      "use strict";
      t.d(s, { f: () => h });
      var n = t(72133),
        a = t(50625),
        i = t(12909),
        l = t(16127),
        r = t(74642),
        c = t(55167),
        d = t(84520),
        o = t(29142),
        m = t(91109),
        x = t(36901),
        u = t(26511);
      function h(e) {
        let {
            size: s = "sm",
            variant: t = "secondary",
            className: r,
            showFacts: h = !0,
          } = e,
          j = (0, x.vT)(),
          { switchChainAsync: f, isPending: g } = (0, c.R)(),
          [b, v] = (0, a.useState)({ kind: "idle" }),
          N = j.mounted && "ethereum" in window;
        async function y() {
          v({ kind: "idle" });
          try {
            await f({ chainId: o.bQ, addEthereumChainParameter: (0, u.sr)() }),
              v({ kind: "added" });
          } catch (s) {
            let e = s instanceof Error ? s.message : String(s);
            v({
              kind: "error",
              message: /rejected|denied/i.test(e)
                ? "Request rejected in the wallet."
                : e.split("\n")[0].slice(0, 160),
            });
          }
        }
        return j.onChain
          ? (0, n.jsxs)("p", {
              className: (0, m.cn)(
                "inline-flex items-center gap-1.5 text-xs text-muted",
                r
              ),
              children: [
                (0, n.jsx)(i.A, {
                  className: "size-3.5 text-success",
                  "aria-hidden": "true",
                }),
                "Wallet on ",
                o.S5.name,
                " (",
                o.S5.id,
                ")",
              ],
            })
          : (0, n.jsxs)("div", {
              className: (0, m.cn)("flex flex-col items-start gap-2", r),
              children: [
                (0, n.jsx)(d.$n, {
                  size: s,
                  variant: t,
                  onClick: y,
                  disabled: !j.mounted || !N || g,
                  icon: (0, n.jsx)(l.A, {
                    className: "size-3.5",
                    "aria-hidden": "true",
                  }),
                  title: N
                    ? "wallet_addEthereumChain \xb7 chain ".concat(o.S5.id)
                    : "No injected wallet found",
                  children: g
                    ? "Confirm in the wallet…"
                    : "Add ".concat(o.S5.name, " to wallet"),
                }),
                "added" === b.kind
                  ? (0, n.jsxs)("p", {
                      role: "status",
                      className:
                        "inline-flex items-center gap-1.5 text-xs text-success",
                      children: [
                        (0, n.jsx)(i.A, {
                          className: "size-3.5",
                          "aria-hidden": "true",
                        }),
                        " ",
                        o.S5.name,
                        " added and selected.",
                      ],
                    })
                  : "error" === b.kind
                  ? (0, n.jsx)("p", {
                      role: "alert",
                      className: "text-xs text-danger",
                      children: b.message,
                    })
                  : null,
                h
                  ? (0, n.jsx)(p, { hasProvider: N, mounted: j.mounted })
                  : null,
              ],
            });
      }
      function p(e) {
        let { hasProvider: s, mounted: t } = e,
          [l, c] = (0, a.useState)(null),
          d = [
            ["Chain id", String(o.S5.id)],
            ["RPC", "https://rpc.mainnet.chain.robinhood.com"],
            [
              "Currency",
              ""
                .concat(o.S5.nativeCurrency.symbol, " (")
                .concat(o.S5.nativeCurrency.decimals, ")"),
            ],
            ["Explorer", o.S5.explorerUrl],
          ];
        async function m(e) {
          try {
            await navigator.clipboard.writeText(e),
              c(e),
              setTimeout(() => c(null), 1500);
          } catch (e) {
            c(null);
          }
        }
        return (0, n.jsxs)("dl", {
          className:
            "grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1 text-[11px] text-muted",
          children: [
            t && !s
              ? (0, n.jsx)("p", {
                  className: "col-span-2 text-[11px] text-muted",
                  children:
                    "No injected wallet found \xb7 add the network by hand:",
                })
              : null,
            d.map((e) => {
              let [s, t] = e;
              return (0, n.jsxs)(
                "div",
                {
                  className: "contents",
                  children: [
                    (0, n.jsx)("dt", { children: s }),
                    (0, n.jsxs)("dd", {
                      className: "flex min-w-0 items-center gap-1.5",
                      children: [
                        (0, n.jsx)("span", {
                          className: "truncate font-mono text-fg",
                          children: t,
                        }),
                        (0, n.jsx)("button", {
                          type: "button",
                          onClick: () => m(t),
                          "aria-label": "Copy ".concat(s),
                          className:
                            "inline-flex size-5 shrink-0 items-center justify-center rounded text-muted hover:text-fg",
                          children:
                            l === t
                              ? (0, n.jsx)(i.A, {
                                  className: "size-3",
                                  "aria-hidden": "true",
                                })
                              : (0, n.jsx)(r.A, {
                                  className: "size-3",
                                  "aria-hidden": "true",
                                }),
                        }),
                      ],
                    }),
                  ],
                },
                s
              );
            }),
          ],
        });
      }
    },
    40453: (e, s, t) => {
      "use strict";
      t.d(s, { default: () => a.a });
      var n = t(79869),
        a = t.n(n);
    },
    72987: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => n });
      let n = (0, t(99011).A)("circle", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ]);
    },
    74642: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => n });
      let n = (0, t(99011).A)("copy", [
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
    75647: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => n });
      let n = (0, t(99011).A)("circle-slash", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }],
      ]);
    },
    76698: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => n });
      let n = (0, t(99011).A)("wallet", [
        [
          "path",
          {
            d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
            key: "18etb6",
          },
        ],
        [
          "path",
          { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" },
        ],
      ]);
    },
    78850: (e, s, t) => {
      "use strict";
      t.d(s, { PositionsView: () => Z });
      var n = t(72133),
        a = t(50625),
        i = t(64133),
        l = t.n(i),
        r = t(76698),
        c = t(72555),
        d = t(84520),
        o = t(53063),
        m = t(36811),
        x = t(26511),
        u = t(96677),
        h = t(14141),
        p = t(82283),
        j = t(29142),
        f = t(91109),
        g = t(15994),
        b = t(20833),
        v = t(99011);
      let N = (0, v.A)("send", [
        [
          "path",
          {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3",
          },
        ],
        ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
      ]);
      var y = t(34817),
        w = t(81122);
      function k(e) {
        var s, t, i, l, r, c, m;
        let { row: x, tx: u } = e,
          h = (0, a.useId)(),
          p = (0, a.useId)(),
          g = (0, a.useId)(),
          [v, k] = (0, a.useState)("income"),
          [C, S] = (0, a.useState)(""),
          [A, U] = (0, a.useState)(""),
          T = x.exact,
          z =
            "income" === v
              ? null != (l = null == T ? void 0 : T.one)
                ? l
                : (0, b.fq)(x.position.oneUnits)
              : null != (r = null == T ? void 0 : T.convex)
              ? r
              : (0, b.fq)(x.position.convexUnits),
          P =
            "income" === v
              ? null != (c = null == T ? void 0 : T.income)
                ? c
                : null == (s = x.series)
                ? void 0
                : s.incomeToken
              : null != (m = null == T ? void 0 : T.upside)
              ? m
              : null == (t = x.series)
              ? void 0
              : t.upsideToken,
          E = "income" === v ? x.incomeSymbol : x.upsideSymbol,
          R = (0, w.C_)(A, w.Bs.position),
          _ = "" !== A.trim() && null === R,
          I = null !== R && R > z,
          H = "" !== C.trim() && !(0, y.P)(C.trim()),
          D = j.KO && !u.gate.canWrite,
          M = u.tx.busy,
          O = null !== R && R > 0n && !I && (0, y.P)(C.trim()),
          L =
            "h-9 w-full rounded-pill border bg-panel px-3 font-mono text-xs text-fg tnum placeholder:text-dim focus:outline-none disabled:opacity-50";
        return (0, n.jsxs)("form", {
          onSubmit: (e) => {
            e.preventDefault(),
              O &&
                null !== R &&
                u.send({
                  kind: "transfer",
                  series: x.position.seriesId,
                  token: null != P ? P : "",
                  to: C.trim(),
                  amount: R,
                  symbol: E,
                });
          },
          noValidate: !0,
          className: "space-y-3",
          children: [
            (0, n.jsxs)("div", {
              className: "grid gap-3 sm:grid-cols-[auto_1fr]",
              children: [
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("label", {
                      htmlFor: h,
                      className: "mb-1 block text-[11px] text-muted",
                      children: "Token",
                    }),
                    (0, n.jsxs)("select", {
                      id: h,
                      value: v,
                      onChange: (e) => k(e.target.value),
                      disabled: M,
                      className: (0, f.cn)(L, "appearance-none pr-8"),
                      children: [
                        (0, n.jsxs)("option", {
                          value: "income",
                          children: [o._b, " \xb7 ", x.incomeSymbol],
                        }),
                        (0, n.jsxs)("option", {
                          value: "upside",
                          children: [o.TE, " \xb7 ", x.upsideSymbol],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("label", {
                      htmlFor: p,
                      className: "mb-1 block text-[11px] text-muted",
                      children: "To",
                    }),
                    (0, n.jsx)("input", {
                      id: p,
                      type: "text",
                      inputMode: "text",
                      autoComplete: "off",
                      spellCheck: !1,
                      placeholder: "0x…",
                      value: C,
                      onChange: (e) => S(e.target.value),
                      "aria-invalid": H || void 0,
                      disabled: M,
                      className: (0, f.cn)(
                        L,
                        H ? "border-danger" : "border-rule focus:border-accent"
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "mb-1 flex items-center justify-between text-[11px] text-muted",
                  children: [
                    (0, n.jsx)("label", { htmlFor: g, children: "Amount" }),
                    (0, n.jsxs)("span", {
                      children: [
                        "Balance ",
                        (0, n.jsx)("span", {
                          className: "font-mono tnum text-fg",
                          children: (0, b.H1)(z, 6),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, n.jsx)("input", {
                      id: g,
                      type: "text",
                      inputMode: "decimal",
                      autoComplete: "off",
                      placeholder: "0.0",
                      value: A,
                      onChange: (e) => U(e.target.value),
                      "aria-invalid": I || _ || void 0,
                      "aria-describedby": "".concat(g, "-hint"),
                      disabled: M || 0n === z,
                      className: (0, f.cn)(
                        L,
                        "pr-16",
                        I || _
                          ? "border-danger"
                          : "border-rule focus:border-accent"
                      ),
                    }),
                    (0, n.jsx)("button", {
                      type: "button",
                      onClick: () => U((0, w.WZ)(z, w.Bs.position)),
                      disabled: M || 0n === z,
                      className:
                        "absolute right-1.5 top-1/2 h-6 -translate-y-1/2 rounded-pill border border-rule px-2 text-[10px] text-muted transition-colors hover:border-accent hover:text-fg disabled:opacity-40",
                      children: "Max",
                    }),
                  ],
                }),
                (0, n.jsx)("p", {
                  id: "".concat(g, "-hint"),
                  className: (0, f.cn)(
                    "mt-1 text-[11px]",
                    I || _ || H ? "text-danger" : "text-muted"
                  ),
                  children: H
                    ? "Recipient is not an address."
                    : _
                    ? "Up to 18 decimals."
                    : I
                    ? "You hold ".concat((0, b.H1)(z, 6), " ").concat(E, ".")
                    : "Sends the token; the entitlement travels with it. Proceeds of a subscription do not.",
                }),
              ],
            }),
            (0, n.jsx)(d.$n, {
              type: "submit",
              size: "sm",
              variant: "secondary",
              disabled: !O || M || D,
              title: D ? u.gate.reason : void 0,
              icon: (0, n.jsx)(N, {
                className: "size-3.5",
                "aria-hidden": "true",
              }),
              children:
                M && (null == (i = u.active) ? void 0 : i.kind) === "transfer"
                  ? "Sending…"
                  : "Send ".concat("income" === v ? o._b : o.TE),
            }),
            D
              ? (0, n.jsx)("p", {
                  className: "text-[11px] text-muted",
                  children: u.gate.reason,
                })
              : null,
          ],
        });
      }
      var C = t(93628),
        S = t(83899);
      function A(e) {
        var s, t, a, i, r, x, u, p, g, v;
        let { row: N, tx: y } = e,
          w = N.position,
          A = w.seriesId,
          z = N.exact,
          P = y.tx.busy,
          E = y.active && (0, S.Gt)(y.active) === A ? y : null,
          R = j.KO && !y.gate.canWrite,
          _ =
            null != (u = null == z ? void 0 : z.one)
              ? u
              : (0, b.fq)(w.oneUnits),
          I =
            null != (p = null == z ? void 0 : z.convex)
              ? p
              : (0, b.fq)(w.convexUnits),
          H = N.price > 0 ? N.payoff.oneUsd / N.price : 0,
          D = N.price > 0 ? N.payoff.convexUsd / N.price : 0,
          M = N.settled
            ? R
              ? y.gate.reason
              : void 0
            : N.settleDate
            ? "after settlement \xb7 ".concat((0, m.lF)(new Date(N.settleDate)))
            : "after settlement",
          O = (e) => N.claimable && e > 0n && !P && !R,
          L = _ > 0n || I > 0n;
        return (0, n.jsxs)(d.Zp, {
          as: "article",
          id: "position-".concat(A),
          tabIndex: -1,
          className:
            "scroll-mt-24 outline-none focus-visible:ring-2 focus-visible:ring-accent",
          children: [
            (0, n.jsxs)("header", {
              className:
                "mb-5 flex flex-wrap items-center justify-between gap-3",
              children: [
                (0, n.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, n.jsx)(d.xz, { ticker: N.ticker, size: 36 }),
                    (0, n.jsxs)("div", {
                      className: "leading-tight",
                      children: [
                        (0, n.jsxs)("h3", {
                          className: "text-sm font-medium text-fg",
                          children: [
                            N.ticker,
                            " ",
                            (0, n.jsx)("span", {
                              className: "text-muted",
                              children: "\xb7",
                            }),
                            " Epoch ",
                            (0, m.iI)(N.epoch),
                            " ",
                            (0, n.jsx)("span", {
                              className: "text-muted",
                              children: "\xb7",
                            }),
                            " Cap",
                            " ",
                            (0, n.jsx)("span", {
                              className: "font-mono tnum",
                              children: (0, m.Nd)(N.capBps),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("p", {
                          className: "mt-0.5 font-mono text-[11px] text-muted",
                          children: [
                            (0, n.jsx)(U, {
                              symbol: N.incomeSymbol,
                              address:
                                null != (g = null == z ? void 0 : z.income)
                                  ? g
                                  : null == (s = N.series)
                                  ? void 0
                                  : s.incomeToken,
                            }),
                            " \xb7 ",
                            (0, n.jsx)(U, {
                              symbol: N.upsideSymbol,
                              address:
                                null != (v = null == z ? void 0 : z.upside)
                                  ? v
                                  : null == (t = N.series)
                                  ? void 0
                                  : t.upsideToken,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                N.settled
                  ? N.claimable
                    ? (0, n.jsx)(d.Ex, {
                        tone: "success",
                        children: "Claimable",
                      })
                    : (0, n.jsx)(d.md, { status: "settled" })
                  : (0, n.jsx)(d.md, {
                      status: "active",
                      label: "Open \xb7 ".concat(N.daysLeft, "d left"),
                    }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "grid gap-3 sm:grid-cols-2",
              children: [
                (0, n.jsx)(T, {
                  tone: "income",
                  name: o._b,
                  role: "Up to the cap",
                  symbol: N.incomeSymbol,
                  units: (0, b.H1)(_),
                  ticker: N.ticker,
                  nowUnits:
                    N.settled && z
                      ? (0, b.H1)(z.entitlement.one, 6)
                      : (0, m.bu)(N.oneUnitsNow, 4),
                  nowUsd: N.oneUsdNow,
                  perUnit: N.payoff.oneUsd,
                  rule: "min(S, K)",
                  modelUsd:
                    N.settled || null == (a = N.series) ? void 0 : a.oneValue,
                  modelUnits: w.oneUnits,
                }),
                (0, n.jsx)(T, {
                  tone: "upside",
                  name: o.TE,
                  role: "Above the cap",
                  symbol: N.upsideSymbol,
                  units: (0, b.H1)(I),
                  ticker: N.ticker,
                  nowUnits:
                    N.settled && z
                      ? (0, b.H1)(z.entitlement.convex, 6)
                      : (0, m.bu)(N.convexUnitsNow, 4),
                  nowUsd: N.convexUsdNow,
                  perUnit: N.payoff.convexUsd,
                  rule: "max(S − K, 0)",
                  modelUsd:
                    N.settled || null == (i = N.series)
                      ? void 0
                      : i.convexValue,
                  modelUnits: w.convexUnits,
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "mt-4",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "mb-1.5 flex items-center justify-between gap-3 text-[11px] text-muted",
                  children: [
                    (0, n.jsxs)("span", {
                      className: "inline-flex items-center gap-1.5",
                      children: [
                        (0, n.jsx)(d.CH, { size: 14, tone: "split" }),
                        "Split of one unit at ",
                        N.priceIsSettlement ? "settlement" : "current",
                        " price",
                      ],
                    }),
                    (0, n.jsxs)("span", {
                      className: "font-mono tnum",
                      children: [
                        o._b,
                        " ",
                        (0, m.Oe)(H, { signed: !1 }),
                        " \xb7 ",
                        o.TE,
                        " ",
                        (0, m.Oe)(D, { signed: !1 }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "flex h-1.5 w-full overflow-hidden rounded-full bg-rule",
                  role: "img",
                  "aria-label": ""
                    .concat(o._b, " ")
                    .concat((0, m.Oe)(H, { signed: !1 }), ", ")
                    .concat(o.TE, " ")
                    .concat((0, m.Oe)(D, { signed: !1 }), " of one unit"),
                  children: [
                    (0, n.jsx)("span", {
                      className: "h-full bg-income-fill",
                      style: { width: "".concat(100 * H, "%") },
                    }),
                    (0, n.jsx)("span", {
                      className: "h-full bg-upside-fill",
                      style: { width: "".concat(100 * D, "%") },
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)(d.l7, {
              className: "mt-4",
              children: [
                (0, n.jsx)(d.jP, {
                  label: N.priceIsSettlement
                    ? "Settlement price S"
                    : "Current price S",
                  value: (0, m.dR)(N.price),
                  hint: N.priceIsSettlement
                    ? "30-min window TWAP"
                    : "Chainlink feed",
                }),
                (0, n.jsx)(d.jP, {
                  label: "Cap price K",
                  value: (0, m.dR)(N.capPrice),
                  hint:
                    N.series && N.series.p0 > 0
                      ? "P0 ".concat((0, m.dR)(N.series.p0))
                      : (null == (r = N.series) ? void 0 : r.state) ===
                        "created"
                      ? "indicative (feed) \xb7 fixed at open"
                      : "P0 ".concat(
                          (0, m.dR)(null == (x = N.market) ? void 0 : x.price)
                        ),
                }),
                (0, n.jsx)(d.jP, {
                  label: "Settles",
                  value: N.settleDate ? (0, m.lF)(new Date(N.settleDate)) : "—",
                  hint: N.settled ? "settled" : "".concat(N.daysLeft, " days"),
                }),
                (0, n.jsx)(d.jP, {
                  label: "Mergeable pairs",
                  value: (0, b.H1)(N.mergeableWei),
                  hint:
                    N.mergeableWei > 0n
                      ? "→ "
                          .concat((0, b.H1)(N.mergeableWei), " ")
                          .concat(N.ticker)
                      : void 0,
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "mt-5 flex flex-wrap items-center gap-2",
              children: [
                (0, n.jsxs)(d.$n, {
                  size: "sm",
                  variant: "income",
                  disabled: !O(_),
                  title: R ? y.gate.reason : void 0,
                  onClick: () =>
                    y.send({ kind: "claimIncome", series: A, units: _ }),
                  "aria-describedby": M ? "claim-hint-".concat(A) : void 0,
                  children: ["Claim ", o._b],
                }),
                (0, n.jsxs)(d.$n, {
                  size: "sm",
                  variant: "upside",
                  disabled: !O(I),
                  title: R ? y.gate.reason : void 0,
                  className: (0, f.cn)(!O(I) && "shadow-none"),
                  onClick: () =>
                    y.send({ kind: "claimUpside", series: A, units: I }),
                  "aria-describedby": M ? "claim-hint-".concat(A) : void 0,
                  children: ["Claim ", o.TE],
                }),
                N.mergeableWei > 0n
                  ? (0, n.jsxs)(l(), {
                      href: "/app/recompose?series=".concat(
                        encodeURIComponent(A)
                      ),
                      className:
                        "inline-flex h-8 items-center gap-1.5 rounded-pill px-3 text-xs text-muted transition-colors hover:text-fg",
                      children: [
                        (0, n.jsx)(h.A, {
                          className: "size-3.5",
                          "aria-hidden": "true",
                        }),
                        "Recompose",
                        (0, n.jsx)(c.A, {
                          className: "size-3.5",
                          "aria-hidden": "true",
                        }),
                      ],
                    })
                  : null,
                M
                  ? (0, n.jsx)("span", {
                      id: "claim-hint-".concat(A),
                      className: "ml-auto text-[11px] text-muted",
                      children: N.settled ? M : "Claims open ".concat(M),
                    })
                  : null,
              ],
            }),
            E ? (0, n.jsx)(C.t, { tx: E, className: "mt-3" }) : null,
            L
              ? (0, n.jsxs)("details", {
                  className:
                    "mt-4 rounded-card border border-line bg-panel/60 p-3",
                  children: [
                    (0, n.jsx)("summary", {
                      className:
                        "cursor-pointer select-none text-xs text-muted hover:text-fg",
                      children: "Send position tokens",
                    }),
                    (0, n.jsx)("div", {
                      className: "mt-3",
                      children: (0, n.jsx)(k, { row: N, tx: y }),
                    }),
                  ],
                })
              : null,
            (0, n.jsx)("p", {
              className: "mt-4 text-[11px] leading-relaxed text-muted",
              children: N.priceIsSettlement
                ? "Paid in Stock Tokens. "
                    .concat(o._b, " and ")
                    .concat(
                      o.TE,
                      " claims of the same pair sum to the pair's collateral within 1 wei. No expiry."
                    )
                : "Preview at the feed price. Settlement uses the 30-minute window average of the Chainlink feed (\xb10.5 %). Underlying downside exposure remains: if the Stock Token falls, ".concat(
                    o._b,
                    " falls with it."
                  ),
            }),
          ],
        });
      }
      function U(e) {
        let { symbol: s, address: t } = e;
        return j.KO && t
          ? (0, n.jsxs)("a", {
              href: (0, g.Zv)(t),
              target: "_blank",
              rel: "noreferrer",
              className:
                "inline-flex items-center gap-0.5 underline-offset-2 hover:text-fg hover:underline",
              children: [
                s,
                (0, n.jsx)(p.A, {
                  className: "size-2.5",
                  "aria-hidden": "true",
                }),
              ],
            })
          : (0, n.jsx)("span", { children: s });
      }
      function T(e) {
        let {
            tone: s,
            name: t,
            role: a,
            symbol: i,
            units: l,
            ticker: r,
            nowUnits: c,
            nowUsd: o,
            perUnit: x,
            rule: u,
            modelUsd: h,
            modelUnits: p,
          } = e,
          j = "upside" === s;
        return (0, n.jsxs)("div", {
          className: (0, f.cn)(
            "rounded-card p-4",
            j ? "glass-upside" : "glass-income"
          ),
          children: [
            (0, n.jsxs)("div", {
              className: "flex items-baseline justify-between",
              children: [
                (0, n.jsxs)("span", {
                  className: "label-caps flex items-center gap-1.5 text-fg",
                  children: [
                    (0, n.jsx)(d.CH, {
                      size: 12,
                      tone: "split",
                      wedge: j ? void 0 : "transparent",
                      block: j ? "transparent" : void 0,
                    }),
                    t,
                  ],
                }),
                (0, n.jsx)("span", {
                  className: "label-caps text-[10px]",
                  children: a,
                }),
              ],
            }),
            (0, n.jsx)("p", {
              className: (0, f.cn)(
                "mt-2 font-mono text-2xl tnum",
                j ? "text-upside" : "text-fg"
              ),
              children: l,
            }),
            (0, n.jsx)("p", {
              className: "font-mono text-[10px] text-muted",
              children: i,
            }),
            (0, n.jsxs)("dl", {
              className: "mt-3 space-y-1 border-t border-line/70 pt-3 text-xs",
              children: [
                (0, n.jsxs)("div", {
                  className: "flex justify-between gap-2",
                  children: [
                    (0, n.jsx)("dt", {
                      className: "text-muted",
                      children: "Per unit",
                    }),
                    (0, n.jsxs)("dd", {
                      className: "font-mono tnum text-fg",
                      children: [
                        (0, m.dR)(x),
                        " ",
                        (0, n.jsx)("span", {
                          className: "text-muted",
                          children: u,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "flex justify-between gap-2",
                  children: [
                    (0, n.jsx)("dt", {
                      className: "text-muted",
                      children: "Entitlement",
                    }),
                    (0, n.jsxs)("dd", {
                      className: "font-mono tnum text-fg",
                      children: [c, " ", r],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "flex justify-between gap-2",
                  children: [
                    (0, n.jsx)("dt", {
                      className: "text-muted",
                      children: "Value",
                    }),
                    (0, n.jsx)("dd", {
                      className: (0, f.cn)(
                        "font-mono tnum",
                        j ? "text-upside" : "text-fg"
                      ),
                      children: (0, m.dR)(o),
                    }),
                  ],
                }),
                void 0 !== h
                  ? (0, n.jsxs)("div", {
                      className: "flex justify-between gap-2",
                      children: [
                        (0, n.jsx)("dt", {
                          className: "text-muted",
                          children: "Model",
                        }),
                        (0, n.jsxs)("dd", {
                          className: "text-right font-mono tnum text-muted",
                          children: [
                            (0, m.dR)(h * p),
                            " ",
                            (0, n.jsx)("span", {
                              className: "text-[10px]",
                              children: "indicative",
                            }),
                          ],
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          ],
        });
      }
      function z(e) {
        let { totals: s } = e;
        return (0, n.jsxs)(d.Zp, {
          padding: "none",
          className:
            "grid grid-cols-2 divide-y divide-line md:grid-cols-4 md:divide-x md:divide-y-0",
          children: [
            (0, n.jsx)(d.$k, {
              label: "Series held",
              value: (0, m.bu)(s.seriesCount, 0),
              sub: "".concat(o._b, " / ").concat(o.TE, " positions"),
              className: "p-4 md:p-5",
            }),
            (0, n.jsx)(d.$k, {
              label: "".concat(o._b, " \xb7 at price"),
              value: (0, m.dR)(s.oneUsd),
              sub: "min(S, K) per unit \xb7 indicative",
              tone: "income",
              className: "border-l border-line p-4 md:border-l-0 md:p-5",
            }),
            (0, n.jsx)(d.$k, {
              label: "".concat(o.TE, " \xb7 at price"),
              value: (0, m.dR)(s.convexUsd),
              sub: "max(S − K, 0) per unit \xb7 indicative",
              tone: "upside",
              className: "p-4 md:p-5",
            }),
            (0, n.jsx)(d.$k, {
              label: "Proceeds claimable",
              value: "".concat((0, m.bu)(s.proceedsUsdg, 2), " USDG"),
              sub:
                s.mergeablePairs > 0
                  ? "".concat(
                      (0, m.bu)(s.mergeablePairs, 4),
                      " pairs mergeable"
                    )
                  : "auction premium \xb7 paid to the subscriber",
              className: "border-l border-line p-4 md:border-l-0 md:p-5",
            }),
          ],
        });
      }
      let P = (0, v.A)("chevron-right", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ]);
      function E(e) {
        let { rows: s } = e,
          t = (e) => {
            let s = document.getElementById("position-".concat(e));
            null == s ||
              s.scrollIntoView({ behavior: "smooth", block: "start" }),
              null == s || s.focus({ preventScroll: !0 });
          };
        return (0, n.jsxs)(d.XI, {
          "aria-label": "Holdings per series",
          children: [
            (0, n.jsx)(d.D1, {
              children: (0, n.jsxs)("tr", {
                children: [
                  (0, n.jsx)(d.TH, { children: "Asset" }),
                  (0, n.jsx)(d.TH, { children: "Cap" }),
                  (0, n.jsx)(d.TH, { align: "right", children: o._b }),
                  (0, n.jsx)(d.TH, { align: "right", children: o.TE }),
                  (0, n.jsx)(d.TH, { align: "right", children: "Price" }),
                  (0, n.jsx)(d.TH, {
                    align: "right",
                    children: "Entitlement now",
                  }),
                  (0, n.jsx)(d.TH, { children: "Epoch" }),
                  (0, n.jsx)(d.TH, { children: "Status" }),
                  (0, n.jsx)(d.TH, {
                    children: (0, n.jsx)("span", {
                      className: "sr-only",
                      children: "Details",
                    }),
                  }),
                ],
              }),
            }),
            (0, n.jsx)(d.vc, {
              children: s.map((e) => {
                let s = e.position.seriesId;
                return (0, n.jsxs)(
                  d.TR,
                  {
                    interactive: !0,
                    tabIndex: 0,
                    onClick: () => t(s),
                    onKeyDown: (e) => {
                      ("Enter" === e.key || " " === e.key) &&
                        (e.preventDefault(), t(s));
                    },
                    "aria-label": ""
                      .concat(e.ticker, " epoch ")
                      .concat((0, m.iI)(e.epoch), " details"),
                    children: [
                      (0, n.jsx)(d.TD, {
                        children: (0, n.jsxs)("span", {
                          className: "flex items-center gap-2.5",
                          children: [
                            (0, n.jsx)(d.xz, {
                              ticker: e.ticker,
                              size: 24,
                              alt: "",
                            }),
                            (0, n.jsxs)("span", {
                              className: "flex flex-col leading-tight",
                              children: [
                                (0, n.jsx)("span", {
                                  className: "text-sm text-fg",
                                  children: e.ticker,
                                }),
                                (0, n.jsx)("span", {
                                  className: "font-mono text-[10px] text-muted",
                                  children: e.incomeSymbol,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, n.jsx)(d.TD, {
                        mono: !0,
                        children: (0, m.Nd)(e.capBps),
                      }),
                      (0, n.jsx)(d.TD, {
                        mono: !0,
                        align: "right",
                        className: "text-income",
                        children: e.exact
                          ? (0, b.H1)(e.exact.one)
                          : (0, m.bu)(e.position.oneUnits, 4),
                      }),
                      (0, n.jsx)(d.TD, {
                        mono: !0,
                        align: "right",
                        className: "text-upside",
                        children: e.exact
                          ? (0, b.H1)(e.exact.convex)
                          : (0, m.bu)(e.position.convexUnits, 4),
                      }),
                      (0, n.jsx)(d.TD, {
                        mono: !0,
                        align: "right",
                        children: (0, m.dR)(e.price),
                      }),
                      (0, n.jsx)(d.TD, {
                        mono: !0,
                        align: "right",
                        children: (0, n.jsxs)("span", {
                          className: "flex flex-col items-end leading-tight",
                          children: [
                            (0, n.jsx)("span", {
                              children: (0, m.dR)(e.oneUsdNow + e.convexUsdNow),
                            }),
                            (0, n.jsxs)("span", {
                              className: "text-[10px] text-muted",
                              children: [
                                (0, m.bu)(e.oneUnitsNow + e.convexUnitsNow, 4),
                                " ",
                                e.ticker,
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, n.jsxs)(d.TD, {
                        mono: !0,
                        children: [
                          (0, m.iI)(e.epoch),
                          " \xb7 ",
                          e.settled ? "settled" : "".concat(e.daysLeft, "d"),
                        ],
                      }),
                      (0, n.jsx)(d.TD, {
                        children: e.settled
                          ? e.claimable
                            ? (0, n.jsx)(d.Ex, {
                                tone: "success",
                                children: "Claimable",
                              })
                            : (0, n.jsx)(d.md, { status: "settled" })
                          : (0, n.jsx)(d.md, {
                              status: "active",
                              label: "Open",
                            }),
                      }),
                      (0, n.jsx)(d.TD, {
                        align: "right",
                        children: (0, n.jsx)(P, {
                          className: "ml-auto size-4 text-muted",
                          "aria-hidden": "true",
                        }),
                      }),
                    ],
                  },
                  s
                );
              }),
            }),
          ],
        });
      }
      function R(e) {
        let { rows: s, tx: t } = e,
          a = s.filter((e) => e.subscription);
        if (0 === a.length) return null;
        let i = t.tx.busy,
          r = j.KO && !t.gate.canWrite;
        return (0, n.jsxs)(d.Zp, {
          as: "section",
          "aria-labelledby": "subscriber-heading",
          children: [
            (0, n.jsx)(d.aR, {
              title: (0, n.jsx)("span", {
                id: "subscriber-heading",
                children: "Subscriber proceeds & unsold lots",
              }),
              aside: (0, n.jsxs)("span", {
                className: "hidden text-[11px] text-muted sm:inline",
                children: [
                  "Paid to the subscriber address \xb7 not attached to ",
                  o._b,
                ],
              }),
            }),
            (0, n.jsx)("ul", {
              className: "hairline-rows",
              children: a.map((e) => {
                var s;
                let a = e.subscription,
                  x = e.exact,
                  u = e.position.seriesId,
                  h =
                    null != (s = a.auctionAddress)
                      ? s
                      : "".concat(u, ":auction"),
                  f =
                    t.active &&
                    ((0, S.Gt)(t.active) === u ||
                      ("auction" in t.active && t.active.auction === h))
                      ? t
                      : null,
                  v = a.canClaimProceeds && !i && !r,
                  N = a.canClaimUnsold && !i && !r;
                return (0, n.jsxs)(
                  "li",
                  {
                    className: "py-4 first:pt-0 last:pb-0",
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-wrap items-center justify-between gap-3",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [
                              (0, n.jsx)(d.xz, {
                                ticker: e.ticker,
                                size: 28,
                                alt: "",
                              }),
                              (0, n.jsxs)("div", {
                                className: "leading-tight",
                                children: [
                                  (0, n.jsxs)("p", {
                                    className: "text-sm text-fg",
                                    children: [
                                      e.ticker,
                                      " ",
                                      (0, n.jsx)("span", {
                                        className: "text-muted",
                                        children: "\xb7",
                                      }),
                                      " Epoch ",
                                      (0, m.iI)(e.epoch),
                                      " ",
                                      (0, n.jsx)("span", {
                                        className: "text-muted",
                                        children: "\xb7",
                                      }),
                                      " ",
                                      (0, n.jsx)("span", {
                                        className: "font-mono tnum",
                                        children: (0, m.Nd)(e.capBps),
                                      }),
                                      void 0 !== a.round && a.round > 0
                                        ? (0, n.jsxs)("span", {
                                            className: "text-muted",
                                            children: [" \xb7 round ", a.round],
                                          })
                                        : null,
                                    ],
                                  }),
                                  (0, n.jsxs)("p", {
                                    className:
                                      "font-mono text-[11px] text-muted",
                                    children: [
                                      e.upsideSymbol,
                                      " lot",
                                      void 0 !== a.reserveStep
                                        ? " \xb7 reserve step ".concat(
                                            a.reserveStep
                                          )
                                        : "",
                                      j.KO && a.auctionAddress
                                        ? (0, n.jsxs)(n.Fragment, {
                                            children: [
                                              " \xb7 ",
                                              (0, n.jsxs)("a", {
                                                href: (0, g.Zv)(
                                                  a.auctionAddress
                                                ),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className:
                                                  "inline-flex items-center gap-0.5 underline-offset-2 hover:text-fg hover:underline",
                                                children: [
                                                  (0, m.Dc)(
                                                    a.auctionAddress,
                                                    6,
                                                    4
                                                  ),
                                                  (0, n.jsx)(p.A, {
                                                    className: "size-2.5",
                                                    "aria-hidden": "true",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          })
                                        : null,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsx)(d.md, {
                            status: a.state,
                            label: (function (e) {
                              switch (e) {
                                case "bidding":
                                  return "Auction running";
                                case "crossed":
                                  return "Crossed \xb7 finalize pending";
                                case "sold":
                                  return "Sold";
                                case "nosale":
                                  return "No sale";
                                case "scheduled":
                                  return "Auction scheduled";
                                default:
                                  return "Lot queued";
                              }
                            })(a.state),
                          }),
                        ],
                      }),
                      (0, n.jsxs)("dl", {
                        className:
                          "mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:grid-cols-4",
                        children: [
                          (0, n.jsx)(_, {
                            label: "Lot",
                            value: ""
                              .concat(
                                x ? (0, b.H1)(x.lot) : (0, m.bu)(a.lotUnits, 4),
                                " "
                              )
                              .concat(e.ticker),
                          }),
                          (0, n.jsx)(_, {
                            label: "Sold",
                            value: x
                              ? (0, b.H1)(x.sold)
                              : (0, m.bu)(a.soldUnits, 4),
                          }),
                          (0, n.jsx)(_, {
                            label: "Unsold",
                            value: x
                              ? (0, b.H1)(x.unsold)
                              : (0, m.bu)(a.unsoldUnits, 4),
                            tone: a.unsoldUnits > 0 ? "upside" : void 0,
                          }),
                          (0, n.jsx)(_, {
                            label:
                              "bidding" === a.state
                                ? "Clock price"
                                : "Clearing price",
                            value:
                              "bidding" === a.state
                                ? (0, m.dR)(a.currentPrice)
                                : (0, m.dR)(a.clearingPrice),
                            sub:
                              "sold" === a.state && e.series
                                ? "fee ".concat(
                                    (0, m.Nd)(e.series.feeBps, { signed: !1 }),
                                    " of proceeds"
                                  )
                                : void 0,
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: "mt-3 flex flex-wrap items-center gap-2",
                        children: [
                          (0, n.jsxs)("p", {
                            className: "mr-auto font-mono text-sm tnum text-fg",
                            children: [
                              x
                                ? (0, b.XQ)(x.proceeds)
                                : (0, m.bu)(a.proceedsUsdg, 2),
                              " ",
                              (0, n.jsx)("span", {
                                className: "text-muted",
                                children: "USDG net",
                              }),
                            ],
                          }),
                          (0, n.jsx)(d.$n, {
                            size: "sm",
                            variant: "primary",
                            disabled: !v,
                            title: r ? t.gate.reason : a.proceedsReason,
                            onClick: () =>
                              t.send({
                                kind: "claimProceeds",
                                auction: h,
                                series: u,
                              }),
                            children: "Claim proceeds",
                          }),
                          (0, n.jsxs)(d.$n, {
                            size: "sm",
                            variant: "secondary",
                            disabled: !N,
                            title: r ? t.gate.reason : a.unsoldReason,
                            onClick: () =>
                              t.send({
                                kind: "claimUnsold",
                                auction: h,
                                series: u,
                              }),
                            children: ["Claim unsold ", o.TE],
                          }),
                        ],
                      }),
                      (a.proceedsReason || a.unsoldReason || r) &&
                      !(a.canClaimProceeds && a.canClaimUnsold)
                        ? (0, n.jsx)("p", {
                            className: "mt-1.5 text-[11px] text-muted",
                            children: r
                              ? t.gate.reason
                              : [
                                  a.proceedsReason && !a.canClaimProceeds
                                    ? "Proceeds: ".concat(a.proceedsReason)
                                    : null,
                                  a.unsoldReason && !a.canClaimUnsold
                                    ? "Unsold: ".concat(a.unsoldReason)
                                    : null,
                                ]
                                  .filter(Boolean)
                                  .join(" \xb7 "),
                          })
                        : null,
                      f ? (0, n.jsx)(C.t, { tx: f, className: "mt-2" }) : null,
                      (0, n.jsxs)("p", {
                        className:
                          "mt-2 flex flex-wrap items-center gap-x-3 text-[11px] text-muted",
                        children: [
                          (0, n.jsx)("span", {
                            children: (function (e) {
                              switch (e) {
                                case "bidding":
                                  return "The clock is descending. Your reserve is the only floor you control; the round resolves at the clock price when demand crosses supply.";
                                case "crossed":
                                  return "Demand met supply. Anyone can finalize; claims open after that.";
                                case "sold":
                                  return "All buyers paid the clearing price. Proceeds and unsold units are pull claims with no expiry.";
                                case "nosale":
                                  return "This round sold nothing. It can be re-run on the next trading day; unsold ".concat(
                                    o.TE,
                                    " is claimable once no re-run is possible."
                                  );
                                default:
                                  return "Until the auction starts you can unsubscribe, change your reserve or add to the lot.";
                              }
                            })(a.state),
                          }),
                          (0, n.jsxs)(l(), {
                            href: "/app/auctions?t=".concat(
                              encodeURIComponent(e.ticker)
                            ),
                            className:
                              "inline-flex items-center gap-1 text-fg underline-offset-2 hover:underline",
                            children: [
                              "Auction, bids & fills ",
                              (0, n.jsx)(c.A, {
                                className: "size-3",
                                "aria-hidden": "true",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  u
                );
              }),
            }),
          ],
        });
      }
      function _(e) {
        let { label: s, value: t, sub: a, tone: i } = e;
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)("dt", { className: "text-muted", children: s }),
            (0, n.jsx)("dd", {
              className: "font-mono tnum ".concat(
                "upside" === i ? "text-upside" : "text-fg"
              ),
              children: t,
            }),
            a
              ? (0, n.jsx)("dd", {
                  className: "text-[10px] text-muted",
                  children: a,
                })
              : null,
          ],
        });
      }
      var I = t(97827),
        H = t(86635),
        D = t(68757),
        M = t(33034),
        O = t(13052);
      function L(e) {
        let { address: s, className: t } = e,
          [i, l] = (0, a.useState)([...O.Qh]),
          r = i.length === O.Qh.length,
          c = (0, D.iv)(s, { kinds: r ? [...O.Qh] : i, limit: 25 }),
          o = (0, H.og)(),
          x = (0, a.useMemo)(() => {
            var e, s;
            let t = new Map();
            for (let n of null != (e = o.data) ? e : []) {
              let e = (null != (s = n.address) ? s : n.id).toLowerCase();
              t.set(
                e,
                "".concat(n.ticker, " \xb7 ").concat((0, m.iI)(n.epoch))
              );
            }
            return t;
          }, [o.data]);
        return s
          ? (0, n.jsx)(M.K, {
              id: "account-history",
              title: "History",
              subtitle:
                "splits \xb7 subscriptions \xb7 bids \xb7 claims \xb7 merges",
              result: c,
              offered: O.Qh,
              kinds: i,
              onKinds: l,
              showAccount: !1,
              seriesLabel: (e) => x.get(e.toLowerCase()),
              emptyText: "No activity for this account yet.",
              className: t,
            })
          : (0, n.jsxs)(d.Zp, {
              as: "section",
              "aria-labelledby": "account-history-title",
              className: t,
              children: [
                (0, n.jsx)("h2", {
                  id: "account-history-title",
                  className: "text-sm font-semibold text-fg",
                  children: "History",
                }),
                (0, n.jsx)("p", {
                  className: "mt-2 text-sm text-muted",
                  children:
                    "Connect a wallet to list its splits, subscriptions, bids, claims and merges.",
                }),
              ],
            });
      }
      var F = t(35737);
      function K(e) {
        let { className: s } = e;
        return (0, n.jsx)("div", {
          "aria-hidden": "true",
          className: (0, f.cn)(
            "animate-pulse rounded-card border border-line bg-panel",
            s
          ),
        });
      }
      function $(e) {
        let { wide: s } = e;
        return (0, n.jsxs)("div", {
          className: "mb-6 flex flex-col gap-2",
          "aria-hidden": "true",
          children: [
            (0, n.jsx)("div", {
              className: (0, f.cn)(
                "h-8 animate-pulse rounded-md bg-raised",
                s ? "w-56" : "w-40"
              ),
            }),
            (0, n.jsx)("div", {
              className:
                "h-3.5 w-72 max-w-full animate-pulse rounded bg-raised/70",
            }),
          ],
        });
      }
      function B(e) {
        let { variant: s = "list", label: t = "Loading…" } = e;
        return (0, n.jsxs)("div", {
          role: "status",
          "aria-live": "polite",
          "aria-busy": "true",
          className: "flex flex-col",
          children: [
            (0, n.jsx)("span", { className: "sr-only", children: t }),
            "markets" === s
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "grid gap-4 lg:grid-cols-[minmax(0,1fr)_260px]",
                      children: [
                        (0, n.jsx)(K, { className: "h-40" }),
                        (0, n.jsx)(K, { className: "h-40" }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]",
                      children: [
                        (0, n.jsx)(K, { className: "h-72" }),
                        (0, n.jsx)(K, { className: "h-72" }),
                      ],
                    }),
                    (0, n.jsx)(K, { className: "mt-4 h-64" }),
                  ],
                })
              : "market" === s
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsxs)("div", {
                      className: "mb-5 flex items-center gap-3",
                      "aria-hidden": "true",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "size-8 animate-pulse rounded-full bg-raised",
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "h-6 w-48 animate-pulse rounded-md bg-raised",
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "mb-5 flex gap-1.5",
                      "aria-hidden": "true",
                      children: [0, 1, 2, 3].map((e) =>
                        (0, n.jsx)(
                          "div",
                          {
                            className:
                              "h-8 w-20 animate-pulse rounded-pill bg-raised/70",
                          },
                          e
                        )
                      ),
                    }),
                    (0, n.jsxs)("div", {
                      className: "grid gap-4 lg:grid-cols-3",
                      children: [
                        (0, n.jsx)(K, { className: "h-64" }),
                        (0, n.jsx)(K, { className: "h-64" }),
                        (0, n.jsx)(K, { className: "h-64" }),
                      ],
                    }),
                  ],
                })
              : "auctions" === s
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)($, {}),
                    (0, n.jsxs)("div", {
                      className:
                        "grid gap-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]",
                      children: [
                        (0, n.jsx)(K, { className: "h-[32rem]" }),
                        (0, n.jsxs)("div", {
                          className: "flex flex-col gap-4",
                          children: [
                            (0, n.jsx)(K, { className: "h-48" }),
                            (0, n.jsx)(K, { className: "h-64" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : "epochs" === s
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)($, {}),
                    (0, n.jsx)(K, { className: "h-[32rem]" }),
                  ],
                })
              : "positions" === s || "recompose" === s
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)($, { wide: !0 }),
                    (0, n.jsxs)("div", {
                      className: "grid gap-4 sm:grid-cols-3",
                      children: [
                        (0, n.jsx)(K, { className: "h-24" }),
                        (0, n.jsx)(K, { className: "h-24" }),
                        (0, n.jsx)(K, { className: "h-24" }),
                      ],
                    }),
                    (0, n.jsx)(K, { className: "mt-4 h-56" }),
                  ],
                })
              : "launchpad" === s
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)($, {}),
                    (0, n.jsx)(K, { className: "h-28" }),
                    (0, n.jsx)(K, { className: "mt-8 h-72" }),
                  ],
                })
              : "rewards" === s
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)($, {}),
                    (0, n.jsxs)("div", {
                      className: "grid gap-4 lg:grid-cols-2",
                      children: [
                        (0, n.jsx)(K, { className: "h-80" }),
                        (0, n.jsx)(K, { className: "h-80" }),
                      ],
                    }),
                  ],
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)($, {}),
                    (0, n.jsx)(K, { className: "h-24" }),
                    (0, n.jsx)(K, { className: "mt-3 h-24" }),
                    (0, n.jsx)(K, { className: "mt-3 h-24" }),
                  ],
                }),
          ],
        });
      }
      var W = t(32410);
      function Z() {
        let {
            rows: e,
            isPending: s,
            isError: t,
            error: i,
            source: h,
            wallet: p,
            needsWallet: f,
          } = (0, I.y)(),
          g = (0, S.ED)(),
          b = (0, a.useMemo)(() => (0, u.vA)(e), [e]),
          v = "preview" === h,
          N =
            p.isConnected && p.address
              ? (0, m.Dc)(p.address)
              : v
              ? "Preview wallet"
              : "Not connected";
        return (0, n.jsxs)(n.Fragment, {
          children: [
            g.bridge,
            (0, n.jsx)(d.Av, {
              title: "Positions",
              subtitle: ""
                .concat(o._b, " / ")
                .concat(
                  o.TE,
                  " balances per series, entitlement at the current price, claims after settlement."
                ),
              actions: (0, n.jsxs)(d.Ex, {
                tone: p.isConnected ? "success" : "neutral",
                className: "h-8 px-3",
                children: [
                  (0, n.jsx)(r.A, {
                    className: "size-3.5",
                    "aria-hidden": "true",
                  }),
                  (0, n.jsx)("span", {
                    className: "font-mono tnum",
                    children: N,
                  }),
                ],
              }),
            }),
            p.isConnected && !p.onChain
              ? (0, n.jsxs)(d.Zp, {
                  role: "status",
                  className:
                    "mb-4 flex flex-wrap items-center justify-between gap-3 text-sm",
                  children: [
                    (0, n.jsxs)("span", {
                      className: "text-muted",
                      children: [
                        "Balances are read from ",
                        x.UL.name,
                        ". Switch the wallet to send a claim or a merge.",
                      ],
                    }),
                    (0, n.jsxs)("span", {
                      className: "flex flex-wrap items-center gap-2",
                      children: [
                        (0, n.jsx)(d.$n, {
                          size: "sm",
                          variant: "secondary",
                          onClick: p.switchToActive,
                          disabled: p.switching,
                          children: p.switching
                            ? "Switching…"
                            : "Switch to ".concat(x.UL.name),
                        }),
                        (0, n.jsx)(F.f, { showFacts: !1, variant: "ghost" }),
                      ],
                    }),
                  ],
                })
              : null,
            f
              ? (0, n.jsx)(q, {
                  title: "Connect a wallet",
                  body: "Balances, entitlements and claims are read per address.",
                  children: (0, n.jsxs)("div", {
                    className: "flex flex-wrap items-start gap-3",
                    children: [
                      (0, n.jsx)(d.$n, {
                        size: "sm",
                        onClick: p.connect,
                        disabled: p.connecting,
                        children: p.connecting
                          ? "Connecting…"
                          : "Connect wallet",
                      }),
                      (0, n.jsx)(F.f, {}),
                    ],
                  }),
                })
              : s
              ? (0, n.jsx)(B, {
                  variant: "positions",
                  label: "Loading positions…",
                })
              : t
              ? (0, n.jsxs)(d.Zp, {
                  role: "alert",
                  className: "text-sm text-danger",
                  children: ["Positions could not be loaded. ", (0, W.U)(i)],
                })
              : 0 === e.length
              ? (0, n.jsxs)("div", {
                  className: "space-y-6",
                  children: [
                    (0, n.jsx)(q, {
                      title: "No positions yet",
                      body: "Split a Stock Token or buy ".concat(
                        o.TE,
                        " in a market to open a position."
                      ),
                      children: (0, n.jsx)(d.$n, {
                        href: "/app/markets",
                        variant: "secondary",
                        size: "sm",
                        iconRight: (0, n.jsx)(c.A, {
                          className: "size-3.5",
                          "aria-hidden": "true",
                        }),
                        children: "Open Markets",
                      }),
                    }),
                    j.KO && p.address
                      ? (0, n.jsx)(L, { address: p.address })
                      : null,
                  ],
                })
              : (0, n.jsxs)("div", {
                  className: "space-y-6",
                  children: [
                    (0, n.jsx)(z, { totals: b }),
                    (0, n.jsxs)(d.Zp, {
                      as: "section",
                      "aria-labelledby": "holdings-heading",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "mb-3 flex items-center justify-between",
                          children: [
                            (0, n.jsx)("h2", {
                              id: "holdings-heading",
                              className: "text-sm font-medium text-fg",
                              children: "Holdings",
                            }),
                            (0, n.jsx)("span", {
                              className: "text-[11px] text-muted",
                              children: v
                                ? "Entitlement now = balances \xd7 payoff rule at the feed price"
                                : "Balances read from the chain \xb7 entitlement = balances \xd7 payoff rule at the feed price",
                            }),
                          ],
                        }),
                        (0, n.jsx)(E, { rows: e }),
                      ],
                    }),
                    (0, n.jsx)("section", {
                      "aria-label": "Series details",
                      className: "grid gap-4 lg:grid-cols-2",
                      children: e.map((e) =>
                        (0, n.jsx)(A, { row: e, tx: g }, e.position.seriesId)
                      ),
                    }),
                    (0, n.jsx)(R, { rows: e, tx: g }),
                    j.KO && p.address
                      ? (0, n.jsx)(L, { address: p.address })
                      : null,
                    (0, n.jsxs)("p", {
                      className: "text-[11px] leading-relaxed text-muted",
                      children: [
                        "Positions are transferable tokens. Talis operates no market for them and seeds no pool. Expect to hold to settlement (28–35 days) unless you find a counterparty. Merging one ",
                        o._b,
                        " position with one ",
                        o.TE,
                        " position of the same series returns one Stock Token at any time, free.",
                        " ",
                        (0, n.jsx)(l(), {
                          href: "/app/recompose",
                          className:
                            "text-fg underline-offset-2 hover:underline",
                          children: "Recompose →",
                        }),
                      ],
                    }),
                  ],
                }),
          ],
        });
      }
      function q(e) {
        let { title: s, body: t, children: a } = e;
        return (0, n.jsxs)(d.Zp, {
          className: "flex flex-col items-start gap-3 py-10",
          children: [
            (0, n.jsx)("h2", {
              className: "display text-display-md text-fg",
              children: s,
            }),
            (0, n.jsx)("p", {
              className: "max-w-md text-sm text-muted",
              children: t,
            }),
            a,
          ],
        });
      }
    },
    79869: (e, s, t) => {
      "use strict";
      Object.defineProperty(s, "__esModule", { value: !0 }),
        !(function (e, s) {
          for (var t in s)
            Object.defineProperty(e, t, { enumerable: !0, get: s[t] });
        })(s, {
          default: function () {
            return c;
          },
          getImageProps: function () {
            return r;
          },
        });
      let n = t(31727),
        a = t(11090),
        i = t(25626),
        l = n._(t(62898));
      function r(e) {
        let { props: s } = (0, a.getImgProps)(e, {
          defaultLoader: l.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, t] of Object.entries(s)) void 0 === t && delete s[e];
        return { props: s };
      }
      let c = i.Image;
    },
    93811: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => n });
      let n = (0, t(99011).A)("loader-circle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    99011: (e, s, t) => {
      "use strict";
      t.d(s, { A: () => c });
      var n = t(50625);
      let a = (e) => {
          let s = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, s, t) =>
            t ? t.toUpperCase() : s.toLowerCase()
          );
          return s.charAt(0).toUpperCase() + s.slice(1);
        },
        i = function () {
          for (var e = arguments.length, s = Array(e), t = 0; t < e; t++)
            s[t] = arguments[t];
          return s
            .filter((e, s, t) => !!e && "" !== e.trim() && t.indexOf(e) === s)
            .join(" ")
            .trim();
        };
      var l = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let r = (0, n.forwardRef)((e, s) => {
          let {
            color: t = "currentColor",
            size: a = 24,
            strokeWidth: r = 2,
            absoluteStrokeWidth: c,
            className: d = "",
            children: o,
            iconNode: m,
            ...x
          } = e;
          return (0, n.createElement)(
            "svg",
            {
              ref: s,
              ...l,
              width: a,
              height: a,
              stroke: t,
              strokeWidth: c ? (24 * Number(r)) / Number(a) : r,
              className: i("lucide", d),
              ...(!o &&
                !((e) => {
                  for (let s in e)
                    if (s.startsWith("aria-") || "role" === s || "title" === s)
                      return !0;
                })(x) && { "aria-hidden": "true" }),
              ...x,
            },
            [
              ...m.map((e) => {
                let [s, t] = e;
                return (0, n.createElement)(s, t);
              }),
              ...(Array.isArray(o) ? o : [o]),
            ]
          );
        }),
        c = (e, s) => {
          let t = (0, n.forwardRef)((t, l) => {
            let { className: c, ...d } = t;
            return (0, n.createElement)(r, {
              ref: l,
              iconNode: s,
              className: i(
                "lucide-".concat(
                  a(e)
                    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                    .toLowerCase()
                ),
                "lucide-".concat(e),
                c
              ),
              ...d,
            });
          });
          return (t.displayName = a(e)), t;
        };
    },
  },
  (e) => {
    e.O(
      0,
      [
        9276, 4133, 755, 3869, 756, 2976, 4520, 592, 9834, 3709, 8368, 8473,
        5458, 1812, 4814, 3034, 4314, 4297, 7358,
      ],
      () => e((e.s = 11576))
    ),
      (_N_E = e.O());
  },
]);
