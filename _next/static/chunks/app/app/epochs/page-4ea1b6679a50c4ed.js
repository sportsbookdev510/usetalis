(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5617],
  {
    1449: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => d });
      var a = n(72133),
        s = n(64133),
        r = n.n(s),
        i = n(84520),
        l = n(36811),
        o = n(32398),
        c = n(85726);
      function d(e) {
        let { markets: t, title: n = "Next series" } = e,
          s = t.filter((e) => e.nextSeries);
        if (0 === s.length) return null;
        let d = Date.now() / 1e3;
        return (0, a.jsxs)(i.Zp, {
          as: "section",
          "aria-labelledby": "next-series-title",
          children: [
            (0, a.jsx)(i.aR, {
              title: (0, a.jsx)("span", {
                id: "next-series-title",
                children: n,
              }),
              aside: (0, a.jsx)("span", {
                className: "label-caps",
                children: "registered \xb7 no series",
              }),
            }),
            (0, a.jsxs)(i.XI, {
              className: "min-w-[640px]",
              children: [
                (0, a.jsx)(i.D1, {
                  children: (0, a.jsxs)("tr", {
                    children: [
                      (0, a.jsx)(i.TH, { children: "Asset" }),
                      (0, a.jsx)(i.TH, { children: "Epoch" }),
                      (0, a.jsx)(i.TH, { children: "Creatable from" }),
                      (0, a.jsx)(i.TH, { children: "Open window (P0)" }),
                      (0, a.jsx)(i.TH, { children: "Settlement (S)" }),
                      (0, a.jsx)(i.TH, { children: "Status" }),
                    ],
                  }),
                }),
                (0, a.jsx)(i.vc, {
                  children: s.map((e) => {
                    let t = e.nextSeries,
                      n = d >= t.createFrom,
                      s = (0, c.o0)(t, d);
                    return (0, a.jsxs)(
                      i.TR,
                      {
                        children: [
                          (0, a.jsx)(i.TD, {
                            children: (0, a.jsxs)(r(), {
                              href: "https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=0xc8885f68acb213b144fda1835d61ef05d88ad687/".concat(
                                e.ticker.toLowerCase()
                              ),
                              className:
                                "flex items-center gap-2.5 rounded-md font-mono text-sm text-fg hover:text-accent",
                              children: [
                                (0, a.jsx)(i.xz, {
                                  ticker: e.ticker,
                                  size: 24,
                                  alt: "",
                                }),
                                e.ticker,
                              ],
                            }),
                          }),
                          (0, a.jsx)(i.TD, {
                            mono: !0,
                            children: (0, l.iI)(t.epoch),
                          }),
                          (0, a.jsx)(i.TD, {
                            mono: !0,
                            className: n ? "text-fg" : "text-muted",
                            children: (0, l.lF)(1e3 * t.createFrom),
                          }),
                          (0, a.jsxs)(i.TD, {
                            mono: !0,
                            className:
                              "upcoming" === s ? "text-muted" : "text-fg",
                            children: [
                              (0, l.lF)(1e3 * t.openWindowDay),
                              "upcoming" !== s
                                ? (0, a.jsx)("span", {
                                    className:
                                      "ml-1.5 font-sans text-[10px] text-dim",
                                    children:
                                      "today" === s ? "today" : "opened",
                                  })
                                : null,
                              (0, c.rn)(e)
                                ? (0, a.jsx)("span", {
                                    className:
                                      "block text-[10px] font-sans text-dim",
                                    children: "chosen at registration",
                                  })
                                : null,
                            ],
                          }),
                          (0, a.jsx)(i.TD, {
                            mono: !0,
                            className: "text-muted",
                            children: (0, l.lF)(1e3 * t.settleDay),
                          }),
                          (0, a.jsx)(i.TD, {
                            children: (0, a.jsx)(i.md, {
                              status: "registered",
                              label: (0, c.hX)(t, d),
                              className: "whitespace-nowrap",
                            }),
                          }),
                        ],
                      },
                      e.ticker
                    );
                  }),
                }),
              ],
            }),
            (0, a.jsxs)("p", {
              className: "mt-3 text-[11px] text-muted",
              children: [
                "createSeries is permissionless from ",
                o.yk / 86400,
                " days before the open window: the third Friday of the month before settlement, or, for a ticker's first epoch, the open day chosen at registration. P0 is that window's price; once the window has passed, open() takes it from the feed history at once. The auction runs the next trading day, 10:30–12:30 ET.",
              ],
            }),
          ],
        });
      }
    },
    3303: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      let a = (0, n(99011).A)("refresh-cw", [
        [
          "path",
          {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc",
          },
        ],
        ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
        [
          "path",
          {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3",
          },
        ],
        ["path", { d: "M8 16H3v5", key: "1cv678" }],
      ]);
    },
    90237: (e, t, n) => {
      "use strict";
      n.d(t, { EpochsView: () => ey });
      var a = n(72133),
        s = n(50625),
        r = n(84520),
        i = n(79461),
        l = n(91109),
        o = n(86635),
        c = n(1449),
        d = n(40453),
        u = n(36811),
        m = n(23515),
        h = n(49719),
        x = n(87317);
      let p = ["open", "auction", "trading", "settlement", "settled"],
        f = {
          open: "Open",
          auction: "Auction",
          trading: "Trading",
          settlement: "Settlement window",
          settled: "Settled",
        },
        b = {
          open: "success",
          auction: "upside",
          trading: "income",
          settlement: "warning",
          settled: "neutral",
        },
        y = {
          open: "P0 is the 30-minute window price on the open day: the third Friday of the previous month, or the day chosen at registration for a ticker's first epoch. Subscriptions and splits run until the auction starts.",
          auction:
            "The subscribed Upside lot is sold on the descending clock, 10:30–12:30 ET on the next trading day.",
          trading:
            "Positions are transferable ERC-20s. Merge Income + Upside back into the Stock Token at any time, free.",
          settlement:
            "S is the 30-minute window price on the third Friday. Upside pays max(S − K, 0); Income keeps min(S, K).",
          settled:
            "Claims are pulls from settle() onward, forever. The next epoch opens at S: no price gap.",
        };
      function v(e) {
        return "open" === e.phase && "created" === e.seriesState;
      }
      function g(e) {
        return v(e) ? "Created" : f[e.phase];
      }
      function j(e) {
        return e.settlesAt - 86400 * e.daysLeft;
      }
      function w(e) {
        let t = j(e),
          n = Math.max(0, p.indexOf(e.phase)),
          a = e.milestones.find((t) => t.phase === e.phase),
          s = e.milestones.find((e) => e.phase === p[n + 1]);
        return a && s && !(s.at <= a.at)
          ? {
              index: n,
              fraction: Math.min(Math.max((t - a.at) / (s.at - a.at), 0), 1),
            }
          : { index: n, fraction: +(n >= p.length - 1) };
      }
      function N(e) {
        if (e.openedAt <= 0) return 0;
        let t = e.settlesAt - e.openedAt;
        return t <= 0 ? 1 : Math.min(Math.max((j(e) - e.openedAt) / t, 0), 1);
      }
      let k = 360 / p.length,
        S = { w: 560, h: 480 },
        T = { w: 400, h: 400 };
      function C(e) {
        let { epoch: t, className: n } = e,
          r = (0, m.I)(),
          i = (function (e) {
            let [t, n] = (0, s.useState)(!0);
            return (
              (0, s.useEffect)(() => {
                let e = window.matchMedia("(min-width: ".concat(640, "px)")),
                  t = () => n(e.matches);
                return (
                  t(),
                  e.addEventListener("change", t),
                  () => e.removeEventListener("change", t)
                );
              }, [640]),
              t
            );
          })(640),
          o = i ? S : T,
          c = o.w / 2,
          d = o.h / 2,
          b = (e, t) =>
            (function (e, t, n, a) {
              let s = ((n - 90) * Math.PI) / 180;
              return { x: e + a * Math.cos(s), y: t + a * Math.sin(s) };
            })(c, d, e, t),
          { index: y, fraction: j } = w(t),
          N = (y + j) * k,
          C = 2 * Math.PI * 150,
          E = N / 360,
          D = b(N, 150);
        return (0, a.jsxs)("div", {
          className: (0, l.cn)(
            "relative mx-auto w-full",
            i ? "max-w-[560px]" : "max-w-[400px]",
            n
          ),
          children: [
            (0, a.jsxs)("svg", {
              viewBox: "0 0 ".concat(o.w, " ").concat(o.h),
              className: "relative h-auto w-full overflow-visible",
              role: "img",
              "aria-label": ""
                .concat(t.ticker, " epoch ")
                .concat((0, u.iI)(t.number), ": ")
                .concat(g(t), ", ")
                .concat((0, u.H_)(t.daysLeft)),
              children: [
                (0, a.jsx)("circle", {
                  cx: c,
                  cy: d,
                  r: 150,
                  fill: "none",
                  stroke: "var(--color-forest)",
                  strokeWidth: 3,
                }),
                (0, a.jsx)("path", {
                  d: "M "
                    .concat(b(360 - k, 150).x, " ")
                    .concat(b(360 - k, 150).y, " A ")
                    .concat(150, " ")
                    .concat(150, " 0 0 1 ")
                    .concat(b(360, 150).x, " ")
                    .concat(b(360, 150).y),
                  fill: "none",
                  stroke: "var(--color-panel)",
                  strokeWidth: 5,
                  strokeLinecap: "butt",
                }),
                (0, a.jsx)("path", {
                  d: "M "
                    .concat(b(360 - k, 150).x, " ")
                    .concat(b(360 - k, 150).y, " A ")
                    .concat(150, " ")
                    .concat(150, " 0 0 1 ")
                    .concat(b(360, 150).x, " ")
                    .concat(b(360, 150).y),
                  fill: "none",
                  stroke: "var(--color-forest)",
                  strokeWidth: 3,
                  strokeDasharray: "1 7",
                  strokeLinecap: "round",
                }),
                (0, a.jsx)(h.P.circle, {
                  cx: c,
                  cy: d,
                  r: 150,
                  fill: "none",
                  stroke: "var(--color-lime)",
                  strokeWidth: 3,
                  strokeLinecap: "round",
                  strokeDasharray: C,
                  initial: { strokeDashoffset: C },
                  animate: { strokeDashoffset: C * (1 - E) },
                  transition: r
                    ? { duration: 0 }
                    : { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
                  transform: "rotate(-90 ".concat(c, " ").concat(d, ")"),
                }),
                p.map((e, n) => {
                  let s = n * k,
                    r = b(s, 150),
                    l = b(s, 172),
                    o = t.milestones.find((t) => t.phase === e),
                    c = n < y,
                    d = n === y,
                    u = Math.cos(((s - 90) * Math.PI) / 180),
                    m = 0.2 > Math.abs(u) ? "middle" : u > 0 ? "start" : "end",
                    h = 0 === n ? -12 : 0;
                  return (0, a.jsxs)(
                    "g",
                    {
                      children: [
                        (0, a.jsx)("circle", {
                          cx: r.x,
                          cy: r.y,
                          r: 7,
                          fill: d
                            ? "var(--color-lime)"
                            : c
                            ? "var(--color-forest)"
                            : "var(--color-panel)",
                          stroke: d
                            ? "var(--color-lime)"
                            : c
                            ? "var(--color-income)"
                            : "var(--color-forest)",
                          strokeWidth: 2,
                        }),
                        i
                          ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)("text", {
                                  x: l.x,
                                  y: l.y + h,
                                  textAnchor: m,
                                  fontFamily: "var(--font-sans)",
                                  fontSize: 11,
                                  fontWeight: d ? 700 : 500,
                                  fill: d
                                    ? "var(--color-fg)"
                                    : "var(--color-muted)",
                                  letterSpacing: 1.5,
                                  children: f[e].toUpperCase(),
                                }),
                                o && o.at > 0
                                  ? (0, a.jsxs)("text", {
                                      x: l.x,
                                      y: l.y + h + 16,
                                      textAnchor: m,
                                      fontFamily: "var(--font-mono)",
                                      fontSize: 11,
                                      fill: o.expected
                                        ? "var(--color-dim)"
                                        : "var(--color-muted)",
                                      children: [
                                        o.expected ? "exp. " : "",
                                        (0, x.OP)(o.at, "ET"),
                                        " \xb7 ",
                                        (0, x.CH)(o.at, "ET"),
                                        " ET",
                                      ],
                                    })
                                  : null,
                              ],
                            })
                          : null,
                      ],
                    },
                    e
                  );
                }),
                (0, a.jsx)(h.P.g, {
                  initial: !1,
                  animate: { x: D.x, y: D.y },
                  transition: r
                    ? { duration: 0 }
                    : { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
                  children: (0, a.jsx)("circle", {
                    r: 4.5,
                    fill: "var(--color-forest-ink)",
                    stroke: "var(--color-lime)",
                    strokeWidth: 2.5,
                  }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              "aria-hidden": "true",
              className:
                "pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center",
              children: [
                (0, a.jsx)("span", {
                  className: "label-caps",
                  children: "Epoch",
                }),
                (0, a.jsx)("span", {
                  className: "mt-1 font-mono text-5xl text-fg tnum sm:text-6xl",
                  children: (0, u.iI)(t.number),
                }),
                (0, a.jsx)("span", {
                  className: "mt-2 font-mono text-xs text-upside tnum",
                  children: (0, u.H_)(t.daysLeft),
                }),
                (0, a.jsx)("span", {
                  className: (0, l.cn)(
                    "mt-2 rounded-pill border px-2.5 py-0.5 text-[11px] font-medium",
                    v(t)
                      ? "border-rule text-muted"
                      : "border-upside-fill/60 text-upside"
                  ),
                  children: g(t),
                }),
              ],
            }),
          ],
        });
      }
      function E(e) {
        let { epoch: t, series: n, name: s } = e,
          { index: i } = w(t),
          o = v(t);
        return (0, a.jsx)(r.Zp, {
          as: "section",
          padding: "lg",
          "aria-labelledby": "epoch-hero",
          className: "overflow-hidden",
          children: (0, a.jsxs)("div", {
            className:
              "grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-center xl:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_15rem] xl:items-stretch",
            children: [
              (0, a.jsxs)("div", {
                className: "flex min-w-0 flex-col gap-6",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, a.jsx)(r.xz, { ticker: t.ticker, size: 36 }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsxs)(r.eN, {
                            children: [
                              t.ticker,
                              " \xb7 ",
                              null != s ? s : "Stock Token",
                            ],
                          }),
                          (0, a.jsxs)("p", {
                            className: "mt-0.5 min-w-0 text-xs text-muted tnum",
                            children: [
                              n
                                ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsxs)("span", {
                                        className: "font-mono",
                                        title: n.id,
                                        children: [
                                          (0, a.jsx)("span", {
                                            className: "sm:hidden",
                                            children: (0, u.Dc)(n.id, 6, 4),
                                          }),
                                          (0, a.jsx)("span", {
                                            className: "hidden sm:inline",
                                            children: n.id,
                                          }),
                                        ],
                                      }),
                                      " \xb7 ",
                                    ],
                                  })
                                : null,
                              "settles ",
                              (0, x.gC)(t.settlesAt, "ET"),
                              " \xb7 ",
                              (0, a.jsx)("span", {
                                className: "font-mono",
                                children: t.settleDate,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(r.tQ, {
                    as: "h2",
                    size: "lg",
                    className: "break-words",
                    children: (0, a.jsxs)("span", {
                      id: "epoch-hero",
                      children: [
                        "Epoch ",
                        (0, u.iI)(t.number),
                        (0, a.jsx)("br", {}),
                        (0, a.jsx)("span", {
                          className: "text-muted",
                          children: (0, u.H_)(t.daysLeft),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("p", {
                    className: "max-w-md text-sm leading-relaxed text-muted",
                    children: v(t)
                      ? "The series is created: splits and subscriptions are open. open() fixes P0 and K after the open window and schedules the auction; nothing is priced until then."
                      : y[t.phase],
                  }),
                  (0, a.jsxs)("ol", {
                    className:
                      "hairline-rows rounded-card border border-line bg-panel px-4",
                    children: [
                      o
                        ? (0, a.jsxs)("li", {
                            className: "flex items-start gap-3 py-2.5",
                            "aria-current": "step",
                            children: [
                              (0, a.jsx)("span", {
                                "aria-hidden": "true",
                                className:
                                  "mt-1.5 inline-block size-2 shrink-0 rounded-full bg-upside-fill shadow-[0_0_8px_1px_rgba(204,228,0,0.7)]",
                              }),
                              (0, a.jsxs)("span", {
                                className:
                                  "flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "text-sm text-fg",
                                    children: "Created",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "text-[11px] text-muted tnum sm:text-right",
                                    children: "now \xb7 P0 and K not fixed",
                                  }),
                                ],
                              }),
                            ],
                          })
                        : null,
                      p.map((e, n) => {
                        let s = t.milestones.find((t) => t.phase === e),
                          r = n < i,
                          c = n === i && !o;
                        return (0, a.jsxs)(
                          "li",
                          {
                            className: "flex items-start gap-3 py-2.5",
                            "aria-current": c ? "step" : void 0,
                            children: [
                              (0, a.jsx)("span", {
                                "aria-hidden": "true",
                                className: (0, l.cn)(
                                  "mt-1.5 inline-block size-2 shrink-0 rounded-full",
                                  c
                                    ? "bg-upside-fill shadow-[0_0_8px_1px_rgba(204,228,0,0.7)]"
                                    : r
                                    ? "bg-income-fill"
                                    : "border border-rule bg-transparent"
                                ),
                              }),
                              (0, a.jsxs)("span", {
                                className:
                                  "flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: (0, l.cn)(
                                      "text-sm",
                                      c
                                        ? "text-fg"
                                        : r
                                        ? "text-income"
                                        : "text-muted"
                                    ),
                                    children: f[e],
                                  }),
                                  s && s.at > 0
                                    ? (0, a.jsxs)("span", {
                                        className:
                                          "text-[11px] text-muted tnum sm:text-right",
                                        children: [
                                          s.expected
                                            ? (0, a.jsx)("span", {
                                                className: "text-dim",
                                                children: "expected \xb7 ",
                                              })
                                            : null,
                                          (0, x.gC)(s.at, "ET"),
                                          " \xb7 ",
                                          (0, a.jsx)("span", {
                                            className: "font-mono",
                                            children: (0, x.vI)(s.at, "ET"),
                                          }),
                                          (0, a.jsxs)("span", {
                                            className:
                                              "hidden font-mono text-dim sm:inline",
                                            children: [
                                              " \xb7 ",
                                              (0, x.vI)(s.at, "UTC"),
                                            ],
                                          }),
                                        ],
                                      })
                                    : s
                                    ? (0, a.jsx)("span", {
                                        className:
                                          "text-[11px] text-dim tnum sm:text-right",
                                        children: "not scheduled",
                                      })
                                    : null,
                                ],
                              }),
                            ],
                          },
                          e
                        );
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(C, { epoch: t, className: "self-center" }),
              (0, a.jsxs)("figure", {
                className:
                  "relative hidden min-h-[26rem] overflow-hidden rounded-card bg-ivory xl:block",
                children: [
                  (0, a.jsx)(d.default, {
                    src: "/brand/fomo-measured-time.webp",
                    alt: "A forest-green plumb bob hanging on a wire over a lime arc drawn on a travertine floor",
                    fill: !0,
                    sizes: "240px",
                    className: "object-cover object-[50%_42%]",
                  }),
                  (0, a.jsxs)("figcaption", {
                    className:
                      "absolute inset-x-0 bottom-0 bg-linear-to-t from-ivory from-45% via-ivory/85 to-transparent px-4 pb-4 pt-14",
                    children: [
                      (0, a.jsx)("span", {
                        className: "display block text-lg text-ink",
                        children: "Every epoch matters.",
                      }),
                      (0, a.jsx)("span", {
                        className:
                          "mt-1 block text-[11px] text-paper-text-muted tnum",
                        children: "28 or 35 days \xb7 third Friday",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var D = n(82283),
        A = n(3303),
        P = n(54490),
        R = n(29142),
        W = n(15994),
        U = n(12533),
        q = n(32398),
        F = n(32410);
      let z = {
        0: "weekend",
        1: "closed day",
        2: "no session round",
        3: "bad round",
        4: "gross band",
        5: "pool band",
        6: "pool unavailable",
        7: "phase overlap",
        8: "too many rounds",
      };
      function I(e, t) {
        var n;
        return null != (n = e.windows[t]) ? n : (0, q.pH)(t);
      }
      function O(e) {
        return 0 !== e.openCursor ? e.openCursor : e.openWindowDay;
      }
      function M(e) {
        return 0 !== e.settleCursor ? e.settleCursor : e.effectiveSettleDay;
      }
      function K(e) {
        return "".concat((0, x.m7)(e, "ET"), " ").concat((0, F.QE)(e));
      }
      function _(e) {
        let t = (e % 100000000n).toString().padStart(8, "0").slice(0, 2);
        return "$"
          .concat((e / 100000000n).toLocaleString("en-US"), ".")
          .concat(t);
      }
      function H(e, t) {
        var n, a, s;
        if (e && e.day === t)
          return e.error
            ? "previewQualify: ".concat(e.error)
            : e.qualified && void 0 !== e.price
            ? ""
                .concat((0, x.m7)(t, "UTC"), " qualifies at ")
                .concat(_(e.price), " (")
                .concat(null != (n = e.rounds) ? n : 0, " in-window rounds)")
            : 0 !== e.reason || e.qualified
            ? ""
                .concat((0, x.m7)(t, "UTC"), " does not qualify: ")
                .concat(
                  void 0 === (a = e.reason)
                    ? "undecided"
                    : null != (s = z[a])
                    ? s
                    : "reason ".concat(a)
                )
            : "".concat(
                (0, x.m7)(t, "UTC"),
                ": verdict not available in one preview (a later candidate day, or the cursor moved)"
              );
      }
      var L = n(90756),
        Q = n(37762),
        B = n(89764),
        Z = n(71808),
        G = n(93617),
        V = n(36901),
        X = n(87898),
        $ = n(45188),
        J = n(55458),
        Y = n(42902);
      let ee = "0x0000000000000000000000000000000000000000";
      function et(e) {
        let t = Number(e);
        return 1 === t ? 1 : 2 * (2 === t);
      }
      function en(e) {
        return "bigint" == typeof e ? Number(e) : "number" == typeof e ? e : 0;
      }
      function ea(e) {
        return "bigint" == typeof e ? e : 0n;
      }
      function es(e, t, n) {
        switch (e) {
          case "open":
            return (0, Z.b0)(t.series, n);
          case "settle":
            return (0, Z.UV)(t.series, n);
          case "terminate":
            return (0, Z.Cr)(t.series, n);
          case "finalize": {
            let e = (0, Z.b5)(t.auction);
            return {
              ...e,
              context: {
                ...e.context,
                auctionStart: t.auctionStart,
                auctionEnd: t.auctionEnd,
              },
            };
          }
          case "reschedule":
            return (0, Z.GJ)(t.auction);
        }
      }
      let er = {
          done: "Done",
          ready: "Callable",
          advance: "Cursor step",
          blocked: "Not yet",
          hidden: "",
        },
        ei = {
          done: "income",
          ready: "success",
          advance: "warning",
          blocked: "neutral",
          hidden: "neutral",
        },
        el = ["Created", "Open", "Settled"],
        eo = ["warning", "success", "income"];
      function ec(e) {
        let { address: t, label: n } = e;
        return (0, a.jsxs)("a", {
          href: (0, W.Zv)(t),
          target: "_blank",
          rel: "noreferrer",
          className:
            "inline-flex items-center gap-1 font-mono text-xs text-muted underline-offset-2 hover:text-fg hover:underline",
          children: [
            null != n ? n : (0, u.Dc)(t, 6, 4),
            (0, a.jsx)(D.A, { className: "size-3", "aria-hidden": "true" }),
          ],
        });
      }
      function ed(e) {
        let { ts: t } = e;
        return t
          ? (0, a.jsxs)("span", {
              className: "font-mono text-[11px] text-muted tnum",
              children: [(0, x.gC)(t, "ET"), " \xb7 ", (0, x.vI)(t, "ET")],
            })
          : (0, a.jsx)("span", { className: "text-muted", children: "—" });
      }
      function eu(e) {
        let { s: t, now: n } = e,
          s = t.windows[t.effectiveSettleDay],
          r =
            0 === t.auctionRound
              ? "Scheduled when the series opens"
              : t.auctionFinalized
              ? t.auctionUnitsSold > 0n
                ? "Round ".concat(t.auctionRound, " cleared")
                : "Round ".concat(t.auctionRound, " sold nothing")
              : n < t.auctionStart
              ? "Round ".concat(t.auctionRound, " scheduled")
              : n < t.auctionEnd && 0 === t.clearingStepPlusOne
              ? "Round ".concat(t.auctionRound, " bidding")
              : "Round ".concat(
                  t.auctionRound,
                  " ended \xb7 awaiting finalize"
                ),
          i = [
            {
              label: "Created",
              value: (0, a.jsx)(ec, { address: t.series }),
              done: !0,
            },
            {
              label: "Opened",
              value:
                t.state >= 1
                  ? "P0 "
                      .concat(_(t.P0), " \xb7 K ")
                      .concat(_(t.K), " \xb7 day ")
                      .concat((0, x.m7)(t.openedDay, "UTC"))
                  : t.openCursor
                  ? "cursor at ".concat((0, x.m7)(t.openCursor, "UTC"))
                  : "window day ".concat((0, x.m7)(t.openWindowDay, "UTC")),
              when: t.openedAt,
              done: t.state >= 1,
            },
            {
              label: "Auction",
              value: r,
              when: t.auctionRound ? t.auctionStart : void 0,
              done: t.auctionFinalized,
            },
            {
              label: "Settlement window",
              value: s
                ? ""
                    .concat((0, x.m7)(t.effectiveSettleDay, "UTC"), " \xb7 ")
                    .concat((0, x.vI)(s.start, "ET"), "–")
                    .concat((0, x.vI)(s.end, "ET"))
                    .concat(t.collateralDay ? " \xb7 collateral-event day" : "")
                    .concat(
                      t.settleCursor
                        ? " \xb7 cursor at ".concat(
                            (0, x.m7)(t.settleCursor, "UTC")
                          )
                        : ""
                    )
                : (0, x.m7)(t.effectiveSettleDay, "UTC"),
              when: null == s ? void 0 : s.end,
              done:
                2 === t.state ||
                (0 !== t.settleCursor && t.settleCursor > t.effectiveSettleDay),
            },
            {
              label: 3 === t.settleKind ? "Terminated" : "Settled",
              value:
                2 === t.state
                  ? "S "
                      .concat(_(t.S), " \xb7 day ")
                      .concat((0, x.m7)(t.settledDay, "UTC"), " \xb7 kind ")
                      .concat(t.settleKind)
                  : "Claims open at settle() and never expire",
              when: t.settledAt,
              done: 2 === t.state,
            },
          ];
        return (0, a.jsx)("ol", {
          className:
            "hairline-rows rounded-card border border-line bg-panel px-4",
          children: i.map((e) =>
            (0, a.jsxs)(
              "li",
              {
                className: "flex items-start gap-3 py-2.5",
                children: [
                  (0, a.jsx)("span", {
                    "aria-hidden": "true",
                    className: (0, l.cn)(
                      "mt-1.5 inline-block size-2 shrink-0 rounded-full",
                      e.done ? "bg-income" : "border border-rule bg-transparent"
                    ),
                  }),
                  (0, a.jsxs)("span", {
                    className:
                      "flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4",
                    children: [
                      (0, a.jsxs)("span", {
                        className: "flex min-w-0 flex-col",
                        children: [
                          (0, a.jsx)("span", {
                            className: (0, l.cn)(
                              "text-sm",
                              e.done ? "text-fg" : "text-muted"
                            ),
                            children: e.label,
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "break-words font-mono text-[11px] text-muted tnum",
                            children: e.value,
                          }),
                        ],
                      }),
                      e.when ? (0, a.jsx)(ed, { ts: e.when }) : null,
                    ],
                  }),
                ],
              },
              e.label
            )
          ),
        });
      }
      function em(e) {
        let { value: t, onChange: n, disabled: s } = e;
        return (0, a.jsxs)("label", {
          className: "flex flex-col gap-1 text-xs text-muted",
          children: [
            (0, a.jsx)("span", {
              children:
                "Feed round hint (uint80 \xb7 0 = walk back from the latest round)",
            }),
            (0, a.jsx)("input", {
              inputMode: "numeric",
              value: t,
              disabled: s,
              onChange: (e) => n(e.target.value.replace(/[^\d]/g, "")),
              className:
                "h-8 w-full max-w-xs rounded-pill border border-rule bg-panel px-3 font-mono text-xs text-fg tnum outline-none focus:border-upside-fill disabled:opacity-50",
              "aria-label": "Feed round hint",
            }),
          ],
        });
      }
      function eh(e) {
        var t;
        let { series: n, ticker: i } = e,
          o = null == n ? void 0 : n.address,
          [c, d] = (0, s.useState)("0"),
          u = (0, s.useMemo)(() => ("" === c ? 0n : BigInt(c)), [c]),
          m = (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 15e3,
              [t, n] = (0, s.useState)(() => Math.floor(Date.now() / 1e3));
            return (
              (0, s.useEffect)(() => {
                let t = setInterval(() => n(Math.floor(Date.now() / 1e3)), e);
                return () => clearInterval(t);
              }, [e]),
              t
            );
          })(),
          h = (function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0n,
              n = (0, Q.U)(),
              a = (0, V.qK)();
            return (0, L.I)({
              queryKey: G.y.read(
                R.bQ,
                null != e ? e : "0x",
                "keeper",
                t.toString()
              ),
              queryFn: async () => {
                var a, s, r;
                let i,
                  l,
                  o = (0, B.B)(n, { chainId: R.bQ });
                if (!o || !e) throw Error("No RPC client");
                let c = (0, Y.h)(),
                  d = Math.floor(Date.now() / 1e3),
                  u = await o.multicall({
                    allowFailure: !0,
                    contracts: [
                      { address: e, abi: X.W, functionName: "state" },
                      { address: e, abi: X.W, functionName: "openWindowDay" },
                      { address: e, abi: X.W, functionName: "settleDay" },
                      {
                        address: e,
                        abi: X.W,
                        functionName: "effectiveSettleDay",
                      },
                      { address: e, abi: X.W, functionName: "collateralDay" },
                      { address: e, abi: X.W, functionName: "openCursor" },
                      { address: e, abi: X.W, functionName: "settleCursor" },
                      { address: e, abi: X.W, functionName: "openedAt" },
                      { address: e, abi: X.W, functionName: "openedDay" },
                      { address: e, abi: X.W, functionName: "settledAt" },
                      { address: e, abi: X.W, functionName: "settledDay" },
                      { address: e, abi: X.W, functionName: "settleKind" },
                      { address: e, abi: X.W, functionName: "P0" },
                      { address: e, abi: X.W, functionName: "K" },
                      { address: e, abi: X.W, functionName: "S" },
                      { address: e, abi: X.W, functionName: "prev" },
                      { address: e, abi: X.W, functionName: "TERMINATE_AFTER" },
                      { address: e, abi: X.W, functionName: "TERMINATE_QUEUE" },
                      { address: e, abi: X.W, functionName: "auction" },
                    ],
                  }),
                  m = (e) => {
                    var t;
                    return (null == (t = u[e]) ? void 0 : t.status) ===
                      "success"
                      ? u[e].result
                      : void 0;
                  };
                if ((null == (a = u[0]) ? void 0 : a.status) !== "success")
                  throw Error("Series unreadable");
                let h = et(m(0)),
                  x = en(m(1)),
                  p = en(m(2)),
                  f = en(m(3)) || p,
                  b = en(m(5)),
                  y = en(m(6)),
                  v = null != (s = m(15)) ? s : ee,
                  g = v.toLowerCase() === ee ? void 0 : v,
                  j = null != (r = m(18)) ? r : ee,
                  w = [...new Set([x, f, b, y].filter((e) => e > 0))],
                  N = await o.multicall({
                    allowFailure: !0,
                    contracts: [
                      ...w.map((t) => ({
                        address: e,
                        abi: X.W,
                        functionName: "windowOf",
                        args: [BigInt(t)],
                      })),
                      { address: j, abi: J.c, functionName: "round" },
                      { address: j, abi: J.c, functionName: "auctionStart" },
                      { address: j, abi: J.c, functionName: "auctionEnd" },
                      { address: j, abi: J.c, functionName: "finalized" },
                      { address: j, abi: J.c, functionName: "unitsSold" },
                      { address: j, abi: J.c, functionName: "lotTotal" },
                      {
                        address: j,
                        abi: J.c,
                        functionName: "clearingStepPlusOne",
                      },
                      { address: j, abi: J.c, functionName: "canReschedule" },
                      { address: j, abi: J.c, functionName: "nextSlot" },
                      {
                        address: null != g ? g : e,
                        abi: X.W,
                        functionName: "state",
                      },
                      {
                        address: null != g ? g : e,
                        abi: X.W,
                        functionName: "settleKind",
                      },
                      {
                        address: null != g ? g : e,
                        abi: X.W,
                        functionName: "effectiveSettleDay",
                      },
                      {
                        address: null != c ? c : e,
                        abi: $.O,
                        functionName: "terminateExecutedAt",
                        args: [e],
                      },
                    ],
                  }),
                  k = (e) => {
                    var t;
                    return (null == (t = N[e]) ? void 0 : t.status) ===
                      "success"
                      ? N[e].result
                      : void 0;
                  },
                  S = {};
                w.forEach((e, t) => {
                  let n = k(t);
                  n &&
                    n[1] > 0n &&
                    (S[e] = { start: Number(n[0]), end: Number(n[1]) });
                });
                let T = w.length,
                  C = k(T + 8),
                  E = {
                    series: e,
                    auction: j,
                    state: h,
                    openWindowDay: x,
                    settleDay: p,
                    effectiveSettleDay: f,
                    collateralDay: en(m(4)),
                    openCursor: b,
                    settleCursor: y,
                    openedAt: en(m(7)),
                    openedDay: en(m(8)),
                    settledAt: en(m(9)),
                    settledDay: en(m(10)),
                    settleKind: en(m(11)),
                    P0: ea(m(12)),
                    K: ea(m(13)),
                    S: ea(m(14)),
                    prev: g,
                    prevState: g ? et(k(T + 9)) : void 0,
                    prevSettleKind: g ? en(k(T + 10)) : void 0,
                    prevEffectiveSettleDay: g ? en(k(T + 11)) : void 0,
                    terminateAfter: en(m(16)) || 2592e3,
                    terminateQueue: en(m(17)) || 432e3,
                    terminateExecutedAt: c ? en(k(T + 12)) : 0,
                    windows: S,
                    auctionRound: en(k(T)),
                    auctionStart: en(k(T + 1)),
                    auctionEnd: en(k(T + 2)),
                    auctionFinalized: !0 === k(T + 3),
                    auctionUnitsSold: ea(k(T + 4)),
                    auctionLotTotal: ea(k(T + 5)),
                    clearingStepPlusOne: en(k(T + 6)),
                    canReschedule: !0 === k(T + 7),
                    nextSlot: void 0 === C ? void 0 : en(C),
                  },
                  D = (function (e, t) {
                    var n;
                    if (2 === e.state) return;
                    let a = 0 === e.state ? O(e) : M(e);
                    if (
                      0 !== e.state ||
                      !e.prev ||
                      2 !== e.prevState ||
                      1 !== e.prevSettleKind
                    )
                      return t >=
                        (null != (n = e.windows[a]) ? n : (0, q.pH)(a)).end
                        ? a
                        : void 0;
                  })(E, d);
                if (void 0 !== D)
                  try {
                    let [n, a, s, r] = await o.readContract({
                      address: e,
                      abi: X.W,
                      functionName: "previewQualify",
                      args: [BigInt(D), t],
                    });
                    i = {
                      day: D,
                      qualified: n,
                      price: a,
                      reason: Number(s),
                      rounds: Number(r),
                    };
                  } catch (e) {
                    i = {
                      day: D,
                      qualified: !1,
                      error: (0, F.GP)(e, {
                        action: 0 === h ? "open" : "settle",
                        now: d,
                      }).message,
                    };
                  }
                if (
                  1 === E.state &&
                  0 !== E.terminateExecutedAt &&
                  d >= E.effectiveSettleDay + E.terminateAfter &&
                  d >= E.terminateExecutedAt + E.terminateQueue
                )
                  try {
                    let [n, a] = await o.readContract({
                      address: e,
                      abi: X.W,
                      functionName: "previewTerminatePrice",
                      args: [t],
                    });
                    l = { s: n, fallbackToP0: a };
                  } catch (e) {
                    l = {
                      error: (0, F.GP)(e, { action: "terminate", now: d })
                        .message,
                    };
                  }
                return { ...E, qualify: i, terminatePreview: l };
              },
              enabled: R.KO && a && !!e,
              staleTime: 1e4,
              refetchInterval: 3e4,
            });
          })(o, u),
          p = h.data,
          f = (0, s.useMemo)(
            () =>
              p
                ? [
                    (function (e, t) {
                      let n = {
                        kind: "open",
                        label: "Open series",
                        call: "open(hint)",
                      };
                      if (2 === e.state)
                        return { ...n, status: "hidden", reason: "Settled." };
                      if (1 === e.state)
                        return {
                          ...n,
                          status: "done",
                          reason: "Opened "
                            .concat(K(e.openedAt), " \xb7 P0 ")
                            .concat(_(e.P0), " from ")
                            .concat((0, x.m7)(e.openedDay, "UTC"), " \xb7 K ")
                            .concat(_(e.K)),
                        };
                      if (e.prev && 2 === e.prevState && 1 === e.prevSettleKind)
                        return t + 1800 + 7200 >=
                          I(e, e.effectiveSettleDay).start
                          ? {
                              ...n,
                              status: "blocked",
                              reason:
                                "Too late to open: no two-hour auction fits before the settlement window.",
                            }
                          : {
                              ...n,
                              status: "ready",
                              reason:
                                "P0 copies the predecessor's settlement price; the auction is scheduled at the next slot.",
                            };
                      if (
                        e.prev &&
                        1 === e.prevState &&
                        void 0 !== e.prevEffectiveSettleDay &&
                        t >= (0, q.pH)(e.prevEffectiveSettleDay).end
                      )
                        return {
                          ...n,
                          status: "blocked",
                          reason:
                            "The previous epoch is due but not settled; settle it first, then open.",
                        };
                      let a = O(e),
                        s = I(e, a),
                        r = H(e.qualify, a);
                      return t < s.end
                        ? {
                            ...n,
                            status: "blocked",
                            reason: "Callable after the "
                              .concat((0, x.m7)(a, "UTC"), " window ends at ")
                              .concat((0, F.QE)(s.end))
                              .concat(
                                0 !== e.openCursor
                                  ? " (earlier days were disqualified)"
                                  : "",
                                "."
                              ),
                            detail: r,
                          }
                        : t + 1800 + 7200 >= I(e, e.effectiveSettleDay).start
                        ? {
                            ...n,
                            status: "blocked",
                            reason:
                              "Too late to open: no two-hour auction fits before the settlement window.",
                            detail: r,
                          }
                        : !e.qualify ||
                          e.qualify.day !== a ||
                          e.qualify.error ||
                          e.qualify.qualified ||
                          0 === e.qualify.reason
                        ? {
                            ...n,
                            status: "ready",
                            reason:
                              "P0 is the window price of the first qualifying day; the auction is scheduled at the next slot.",
                            detail: r,
                          }
                        : {
                            ...n,
                            status: "advance",
                            label: "Record disqualified day",
                            reason:
                              "The call records the verdict and advances the cursor to the next day; the series stays Created.",
                            detail: r,
                          };
                    })(p, m),
                    (function (e, t) {
                      let n = {
                        kind: "finalize",
                        label: "Finalize",
                        call: "auction.finalize()",
                        href: "/app/auctions",
                      };
                      if (0 === e.auctionRound)
                        return {
                          ...n,
                          status: 0 === e.state ? "blocked" : "hidden",
                          reason:
                            "No round is scheduled until the series opens.",
                        };
                      if (e.auctionFinalized)
                        return {
                          ...n,
                          status: "done",
                          reason:
                            e.auctionUnitsSold > 0n
                              ? "Round ".concat(
                                  e.auctionRound,
                                  " cleared; claims are open."
                                )
                              : "Round "
                                  .concat(
                                    e.auctionRound,
                                    " sold nothing; a re-run is "
                                  )
                                  .concat(
                                    e.canReschedule
                                      ? "possible"
                                      : "not possible",
                                    "."
                                  ),
                        };
                      if (t < e.auctionStart)
                        return {
                          ...n,
                          status: "blocked",
                          reason: "Round "
                            .concat(e.auctionRound, " starts ")
                            .concat(K(e.auctionStart), "."),
                        };
                      let a =
                        0 !== e.clearingStepPlusOne
                          ? e.auctionStart + 30 * e.clearingStepPlusOne
                          : void 0;
                      return void 0 !== a && t >= a
                        ? {
                            ...n,
                            status: "ready",
                            reason: "Demand crossed supply at step ".concat(
                              e.clearingStepPlusOne - 1,
                              "; finalize writes the clearing price and opens claims."
                            ),
                          }
                        : t >= e.auctionEnd
                        ? {
                            ...n,
                            status: "ready",
                            reason:
                              "The clock ran out; finalize writes the outcome of the round.",
                          }
                        : {
                            ...n,
                            status: "blocked",
                            reason:
                              void 0 !== a
                                ? "Crossed; callable once the clearing step ends at ".concat(
                                    (0, F.QE)(a),
                                    "."
                                  )
                                : "Bidding runs until ".concat(
                                    (0, F.QE)(e.auctionEnd),
                                    "."
                                  ),
                          };
                    })(p, m),
                    (function (e, t) {
                      let n = {
                        kind: "reschedule",
                        label: "Re-run auction",
                        call: "auction.reschedule()",
                        href: "/app/auctions",
                      };
                      if (0 === e.auctionRound || 1 !== e.state)
                        return {
                          ...n,
                          status: "hidden",
                          reason: "No round to re-run.",
                        };
                      if (!e.auctionFinalized)
                        return {
                          ...n,
                          status: "hidden",
                          reason:
                            "Only a finalized round that sold nothing can re-run.",
                        };
                      if (e.auctionUnitsSold > 0n)
                        return {
                          ...n,
                          status: "hidden",
                          reason: "The round sold; the sale is final.",
                        };
                      if (!e.canReschedule) {
                        let t = I(e, e.effectiveSettleDay).start,
                          a =
                            void 0 === e.nextSlot || e.nextSlot + 7200 >= t
                              ? "No auction slot fits before the settlement window; unsold Upside is claimable."
                              : "The contract refuses a re-run right now.";
                        return { ...n, status: "blocked", reason: a };
                      }
                      let a =
                        void 0 !== e.nextSlot && e.nextSlot >= t
                          ? " at ".concat(K(e.nextSlot))
                          : "";
                      return {
                        ...n,
                        status: "ready",
                        reason: "Round "
                          .concat(
                            e.auctionRound,
                            " sold nothing; a re-run schedules round "
                          )
                          .concat(e.auctionRound + 1)
                          .concat(
                            a,
                            ". Lots and reserves are open until then."
                          ),
                      };
                    })(p, m),
                    (function (e, t) {
                      let n = {
                        kind: "settle",
                        label: "Settle",
                        call: "settle(hint)",
                      };
                      if (0 === e.state)
                        return {
                          ...n,
                          status: "blocked",
                          reason: "The series has not opened.",
                        };
                      if (2 === e.state) {
                        let t =
                          3 === e.settleKind
                            ? "terminated"
                            : 2 === e.settleKind
                            ? "settled on the collateral-event day"
                            : "settled through the window";
                        return {
                          ...n,
                          status: "done",
                          reason: ""
                            .concat(t[0].toUpperCase())
                            .concat(t.slice(1), " ")
                            .concat(K(e.settledAt), " \xb7 S ")
                            .concat(_(e.S), " from ")
                            .concat((0, x.m7)(e.settledDay, "UTC")),
                        };
                      }
                      let a = M(e),
                        s = I(e, a),
                        r = H(e.qualify, a);
                      if (t < s.end) {
                        let t =
                          0 !== e.settleCursor
                            ? " (earlier days were disqualified)"
                            : 0 !== e.collateralDay
                            ? " (collateral-event day)"
                            : "";
                        return {
                          ...n,
                          status: "blocked",
                          reason: "Callable after the "
                            .concat((0, x.m7)(a, "UTC"), " window ends at ")
                            .concat((0, F.QE)(s.end))
                            .concat(t, "."),
                          detail: r,
                        };
                      }
                      return !e.qualify ||
                        e.qualify.day !== a ||
                        e.qualify.error ||
                        e.qualify.qualified ||
                        0 === e.qualify.reason
                        ? {
                            ...n,
                            status: "ready",
                            reason:
                              "S is the window price of the first qualifying day; claims open at once and never expire.",
                            detail: r,
                          }
                        : {
                            ...n,
                            status: "advance",
                            label: "Record disqualified day",
                            reason:
                              "The call records the verdict and advances the cursor to the next day; the series stays Open.",
                            detail: r,
                          };
                    })(p, m),
                    (function (e, t) {
                      let n = {
                        kind: "terminate",
                        label: "Terminate",
                        call: "terminate(hint)",
                      };
                      if (1 !== e.state)
                        return {
                          ...n,
                          status: "hidden",
                          reason: "Only an Open series can be terminated.",
                        };
                      let a = e.effectiveSettleDay + e.terminateAfter;
                      if (0 === e.terminateExecutedAt)
                        return {
                          ...n,
                          status: "hidden",
                          reason:
                            t < a
                              ? "Exit of last resort; possible from ".concat(
                                  (0, x.m7)(a, "UTC"),
                                  " after a factory queue."
                                )
                              : "Not queued by the factory.",
                        };
                      if (t < a)
                        return {
                          ...n,
                          status: "blocked",
                          reason: "Queued; callable from ".concat(
                            K(a),
                            " (30 days after the settlement day)."
                          ),
                        };
                      let s = e.terminateExecutedAt + e.terminateQueue;
                      if (t < s)
                        return {
                          ...n,
                          status: "blocked",
                          reason: "Queued "
                            .concat(
                              K(e.terminateExecutedAt),
                              "; callable from "
                            )
                            .concat(K(s), " (5-day queue)."),
                        };
                      let r = e.terminatePreview
                          ? e.terminatePreview.error
                            ? "previewTerminatePrice: ".concat(
                                e.terminatePreview.error
                              )
                            : void 0 !== e.terminatePreview.s
                            ? "S would be "
                                .concat(_(e.terminatePreview.s))
                                .concat(
                                  e.terminatePreview.fallbackToP0
                                    ? " (fallback to P0: the carry-in round is unreachable or outside the gross band)"
                                    : " (carry-in round of the settlement window)"
                                )
                            : void 0
                          : void 0,
                        i = (function (e) {
                          let t = (0, q.dA)(e);
                          return (0, q.GO)(t) <= e ? t : t - q.d_;
                        })(t);
                      if (0 === e.settleCursor || e.settleCursor <= i) {
                        let t =
                          0 === e.settleCursor
                            ? e.effectiveSettleDay
                            : e.settleCursor;
                        return {
                          ...n,
                          status: "blocked",
                          reason: "".concat(
                            (0, x.m7)(t, "UTC"),
                            " is not yet proven non-qualifying; call settle() first (it decides up to five days per call)."
                          ),
                          detail: r,
                        };
                      }
                      return {
                        ...n,
                        status: "ready",
                        reason:
                          "Every ended day is proven non-qualifying (or the feed is issuer-paused); the price is a function of history.",
                        detail: r,
                      };
                    })(p, m),
                  ]
                : [],
            [p, m]
          ),
          b = (function (e, t, n) {
            var a;
            let s = (0, Q.U)(),
              r = (0, V.qK)(),
              i = t
                .filter((e) => "ready" === e.status || "advance" === e.status)
                .map((e) => e.kind);
            return (0, L.I)({
              queryKey: G.y.read(
                R.bQ,
                null != (a = null == e ? void 0 : e.series) ? a : "0x",
                "keeper-dry-run",
                n.toString(),
                i.join(",")
              ),
              queryFn: async () => {
                let t = (0, B.B)(s, { chainId: R.bQ });
                if (!t || !e) throw Error("No RPC client");
                let a = {};
                return (
                  await Promise.all(
                    i.map(async (s) => {
                      let r = es(s, e, n);
                      try {
                        var i;
                        await t.simulateContract({
                          address: r.address,
                          abi: (0, F.JO)(r.abi),
                          functionName: r.functionName,
                          args: null != (i = r.args) ? i : [],
                        }),
                          (a[s] = { ok: !0 });
                      } catch (e) {
                        a[s] = { ok: !1, error: (0, F.GP)(e, r.context) };
                      }
                    })
                  ),
                  a
                );
              },
              enabled: R.KO && r && !!e && i.length > 0,
              staleTime: 1e4,
              refetchInterval: 3e4,
            });
          })(p, f, u),
          [y, v] = (0, s.useState)(null),
          g = (0, U.vr)(),
          j = f.filter((e) => "hidden" !== e.status),
          w = g.busy,
          N = async (e) => {
            p && (v(e.kind), await g.send(es(e.kind, p, u)));
          };
        return (0, a.jsxs)(r.Zp, {
          as: "section",
          "aria-labelledby": "keeper-title",
          children: [
            (0, a.jsx)(r.aR, {
              title: (0, a.jsx)("span", {
                id: "keeper-title",
                children: "Series timeline & keeper actions",
              }),
              aside: p
                ? (0, a.jsxs)("span", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, a.jsx)(r.Ex, {
                        tone: null != (t = eo[p.state]) ? t : "neutral",
                        children: el[p.state],
                      }),
                      (0, a.jsx)("button", {
                        type: "button",
                        onClick: () => {
                          h.refetch(), b.refetch();
                        },
                        disabled: h.isFetching || b.isFetching,
                        className:
                          "inline-flex size-7 items-center justify-center rounded-full border border-rule text-muted hover:border-fg hover:text-fg disabled:opacity-50",
                        "aria-label": "Re-read chain state",
                        title: "Re-read chain state",
                        children: (0, a.jsx)(A.A, {
                          className: (0, l.cn)(
                            "size-3.5",
                            (h.isFetching || b.isFetching) && "animate-spin"
                          ),
                          "aria-hidden": "true",
                        }),
                      }),
                    ],
                  })
                : (0, a.jsx)("span", {
                    className: "label-caps",
                    children: "permissionless",
                  }),
            }),
            R.KO
              ? o
                ? h.isError
                  ? (0, a.jsxs)("p", {
                      role: "alert",
                      className: "text-sm text-danger",
                      children: ["Chain read failed: ", (0, F.U)(h.error)],
                    })
                  : p
                  ? (0, a.jsxs)("div", {
                      className:
                        "grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex flex-col gap-3",
                          children: [
                            (0, a.jsx)(eu, { s: p, now: m }),
                            (0, a.jsxs)("p", {
                              className: "text-[11px] text-muted",
                              children: [
                                "Every transition is permissionless: the caller chooses nothing but the gas. open() and settle() price from feed history (first qualifying day); terminate() needs a factory queue and an exhausted feed. Auction calls live on",
                                " ",
                                (0, a.jsx)("a", {
                                  href: "/app/auctions",
                                  className:
                                    "text-fg underline-offset-2 hover:underline",
                                  children: "the auction page",
                                }),
                                " ",
                                "too.",
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex flex-col gap-3",
                          children: [
                            (0, a.jsx)(em, {
                              value: c,
                              onChange: d,
                              disabled: w,
                            }),
                            (0, a.jsx)("ol", {
                              className:
                                "hairline-rows rounded-card border border-line bg-panel px-4",
                              children: j.map((e) => {
                                var t;
                                let n =
                                    "ready" === e.status ||
                                    "advance" === e.status
                                      ? null == (t = b.data)
                                        ? void 0
                                        : t[e.kind]
                                      : void 0,
                                  s =
                                    ("ready" === e.status ||
                                      "advance" === e.status) &&
                                    !n &&
                                    b.isFetching,
                                  i = n && !n.ok,
                                  o =
                                    ("ready" === e.status ||
                                      "advance" === e.status) &&
                                    !i &&
                                    g.gate.canWrite &&
                                    !w,
                                  c = g.gate.canWrite
                                    ? i
                                      ? n.error.message
                                      : void 0
                                    : g.gate.reason;
                                return (0, a.jsxs)(
                                  "li",
                                  {
                                    className: "flex flex-col gap-2 py-3",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex flex-wrap items-center justify-between gap-2",
                                        children: [
                                          (0, a.jsxs)("span", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              (0, a.jsx)("span", {
                                                className: "text-sm text-fg",
                                                children: e.label,
                                              }),
                                              (0, a.jsx)("span", {
                                                className:
                                                  "font-mono text-[11px] text-muted",
                                                children: e.call,
                                              }),
                                              (0, a.jsx)(r.Ex, {
                                                tone: i
                                                  ? "warning"
                                                  : ei[e.status],
                                                children: i
                                                  ? "Refused"
                                                  : er[e.status],
                                              }),
                                            ],
                                          }),
                                          "ready" === e.status ||
                                          "advance" === e.status
                                            ? (0, a.jsx)(r.$n, {
                                                size: "sm",
                                                variant:
                                                  "ready" === e.status
                                                    ? "primary"
                                                    : "secondary",
                                                disabled: !o,
                                                title: c,
                                                onClick: () => void N(e),
                                                children:
                                                  w && y === e.kind
                                                    ? "Sending…"
                                                    : e.label,
                                              })
                                            : e.href && "done" !== e.status
                                            ? (0, a.jsx)(r.$n, {
                                                size: "sm",
                                                variant: "ghost",
                                                href: e.href,
                                                children: "Auction page",
                                              })
                                            : null,
                                        ],
                                      }),
                                      (0, a.jsx)("p", {
                                        className: (0, l.cn)(
                                          "text-xs",
                                          "done" === e.status
                                            ? "text-muted"
                                            : "text-fg/80"
                                        ),
                                        children: e.reason,
                                      }),
                                      e.detail
                                        ? (0, a.jsx)("p", {
                                            className:
                                              "font-mono text-[11px] text-muted tnum",
                                            children: e.detail,
                                          })
                                        : null,
                                      s
                                        ? (0, a.jsx)("p", {
                                            className: "text-[11px] text-muted",
                                            children:
                                              "Checking the call against the chain…",
                                          })
                                        : null,
                                      i
                                        ? (0, a.jsxs)("p", {
                                            role: "status",
                                            className:
                                              "text-[11px] text-warning",
                                            children: [
                                              "Contract refuses right now: ",
                                              n.error.message,
                                            ],
                                          })
                                        : (null == n ? void 0 : n.ok)
                                        ? (0, a.jsx)("p", {
                                            className:
                                              "text-[11px] text-success",
                                            children:
                                              "Dry run passes; the call would succeed now.",
                                          })
                                        : null,
                                      g.gate.canWrite ||
                                      ("ready" !== e.status &&
                                        "advance" !== e.status) ||
                                      i
                                        ? null
                                        : (0, a.jsx)("p", {
                                            className: "text-[11px] text-muted",
                                            children: g.gate.reason,
                                          }),
                                      y === e.kind && "idle" !== g.status
                                        ? (0, a.jsx)(P.R, {
                                            tx: g,
                                            hideSteps: !0,
                                            className: "mt-1",
                                          })
                                        : null,
                                    ],
                                  },
                                  e.kind
                                );
                              }),
                            }),
                            (0, a.jsx)("p", {
                              className: "text-[11px] text-muted",
                              children:
                                "Re-read every 30 s and after each confirmed transaction. A not-included transaction (nonce unchanged after the wait, checked twice) is reported as such; check the explorer, then send again.",
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, a.jsx)("div", {
                      "aria-busy": "true",
                      className:
                        "h-40 animate-pulse rounded-card border border-line bg-panel",
                    })
                : (0, a.jsxs)("p", {
                    className: "text-sm text-muted",
                    children: [
                      "No ",
                      null != i ? i : "",
                      " series on chain yet.",
                    ],
                  })
              : (0, a.jsx)("p", {
                  className: "text-sm text-muted",
                  children:
                    "Preview mode \xb7 the timeline and the keeper calls (open, finalize, re-run, settle, terminate) read and write chain state in live mode only.",
                }),
          ],
        });
      }
      function ex(e) {
        let { day: t, et: n, utc: s, expected: r } = e;
        return (0, a.jsxs)("span", {
          className: "block font-mono text-xs tnum",
          children: [
            (0, a.jsxs)("span", {
              className: r ? "block text-muted" : "block text-fg",
              children: [
                r
                  ? (0, a.jsx)("span", {
                      className: "font-sans text-[10px] text-dim",
                      children: "exp. ",
                    })
                  : null,
                t,
                " \xb7 ",
                n,
              ],
            }),
            (0, a.jsx)("span", {
              className: "block text-[11px] text-muted",
              children: s,
            }),
          ],
        });
      }
      function ep(e) {
        let { note: t } = e;
        return (0, a.jsx)("span", {
          className: "block font-mono text-xs text-dim",
          children: t,
        });
      }
      function ef(e) {
        let { epochs: t, selected: n, onSelect: s } = e;
        return (0, a.jsxs)(r.Zp, {
          as: "section",
          "aria-labelledby": "schedule-title",
          children: [
            (0, a.jsx)(r.aR, {
              title: (0, a.jsx)("span", {
                id: "schedule-title",
                children: "Schedule by ticker",
              }),
              aside: (0, a.jsx)("span", {
                className: "label-caps",
                children: "ET \xb7 UTC",
              }),
            }),
            (0, a.jsxs)(r.XI, {
              className: "min-w-[840px]",
              children: [
                (0, a.jsx)(r.D1, {
                  children: (0, a.jsxs)("tr", {
                    children: [
                      (0, a.jsx)(r.TH, { children: "Asset" }),
                      (0, a.jsx)(r.TH, { children: "Epoch" }),
                      (0, a.jsx)(r.TH, { children: "Open (P0 window)" }),
                      (0, a.jsx)(r.TH, { children: "Auction slot" }),
                      (0, a.jsx)(r.TH, { children: "Settlement (S window)" }),
                      (0, a.jsx)(r.TH, { align: "right", children: "Left" }),
                      (0, a.jsx)(r.TH, { children: "Phase" }),
                    ],
                  }),
                }),
                (0, a.jsx)(r.vc, {
                  children: t.map((e) => {
                    let t = e.ticker === n,
                      i = v(e) ? e.indicativeBasis : void 0,
                      o =
                        e.openedAt > 0
                          ? e.openedAt
                          : null == i
                          ? void 0
                          : i.opensAt,
                      c =
                        e.auctionStartsAt > 0
                          ? { start: e.auctionStartsAt, end: e.auctionEndsAt }
                          : i && i.auctionStartsAt > 0
                          ? { start: i.auctionStartsAt, end: i.auctionEndsAt }
                          : void 0;
                    return (0, a.jsxs)(
                      r.TR,
                      {
                        interactive: !0,
                        tabIndex: 0,
                        onClick: () => s(e.ticker),
                        onKeyDown: (t) => {
                          ("Enter" === t.key || " " === t.key) &&
                            (t.preventDefault(), s(e.ticker));
                        },
                        className: (0, l.cn)(t && "bg-raised"),
                        children: [
                          (0, a.jsx)(r.TD, {
                            children: (0, a.jsxs)("span", {
                              className: "flex items-center gap-2.5",
                              children: [
                                (0, a.jsx)(r.xz, {
                                  ticker: e.ticker,
                                  size: 24,
                                  alt: "",
                                }),
                                (0, a.jsx)("span", {
                                  className: "font-mono",
                                  children: e.ticker,
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)(r.TD, {
                            mono: !0,
                            children: (0, u.iI)(e.number),
                          }),
                          (0, a.jsx)(r.TD, {
                            children: o
                              ? (0, a.jsx)(ex, {
                                  day: (0, x.gC)(o, "ET"),
                                  et: (0, x.vI)(o, "ET"),
                                  utc: ""
                                    .concat((0, x.OP)(o, "UTC"), " \xb7 ")
                                    .concat((0, x.CH)(o, "UTC"), " UTC"),
                                  expected: !!i,
                                })
                              : (0, a.jsx)(ep, { note: "not opened" }),
                          }),
                          (0, a.jsx)(r.TD, {
                            children: c
                              ? (0, a.jsx)(ex, {
                                  day: (0, x.gC)(c.start, "ET"),
                                  et: (0, x.hO)(c.start, c.end, "ET"),
                                  utc: ""
                                    .concat((0, x.OP)(c.start, "UTC"), " \xb7 ")
                                    .concat((0, x.hO)(c.start, c.end, "UTC")),
                                  expected: !!i,
                                })
                              : (0, a.jsx)(ep, {
                                  note: "scheduled at the open",
                                }),
                          }),
                          (0, a.jsx)(r.TD, {
                            children: (0, a.jsx)(ex, {
                              day: (0, x.gC)(e.settlementWindowStart, "ET"),
                              et: (0, x.hO)(
                                e.settlementWindowStart,
                                e.settlementWindowEnd,
                                "ET"
                              ),
                              utc: ""
                                .concat(
                                  (0, x.OP)(e.settlementWindowStart, "UTC"),
                                  " \xb7 "
                                )
                                .concat(
                                  (0, x.hO)(
                                    e.settlementWindowStart,
                                    e.settlementWindowEnd,
                                    "UTC"
                                  )
                                ),
                            }),
                          }),
                          (0, a.jsx)(r.TD, {
                            align: "right",
                            children: (0, a.jsxs)("span", {
                              className:
                                "inline-flex items-center justify-end gap-2 font-mono text-xs tnum",
                              children: [
                                e.daysLeft,
                                "d",
                                (0, a.jsx)(r.yY, {
                                  progress: N(e),
                                  size: 22,
                                  label: ""
                                    .concat(
                                      Math.round(100 * N(e)),
                                      "% of epoch "
                                    )
                                    .concat((0, u.iI)(e.number), " elapsed"),
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)(r.TD, {
                            children: (0, a.jsx)(r.Ex, {
                              tone: v(e) ? "neutral" : b[e.phase],
                              children: g(e),
                            }),
                          }),
                        ],
                      },
                      e.ticker
                    );
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function eb(e) {
        let { epoch: t } = e,
          n = (0, x.Ep)(t.settlesAt - 172800, 6);
        return (0, a.jsxs)(r.Zp, {
          as: "section",
          "aria-labelledby": "third-friday",
          children: [
            (0, a.jsx)(r.aR, {
              title: (0, a.jsx)("span", {
                id: "third-friday",
                children: "The third-Friday schedule",
              }),
              aside: (0, a.jsx)("span", {
                className: "label-caps",
                children: "monthly",
              }),
            }),
            (0, a.jsxs)("div", {
              className:
                "grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]",
              children: [
                (0, a.jsxs)("div", {
                  className: "space-y-3 text-sm leading-relaxed text-muted",
                  children: [
                    (0, a.jsxs)("p", {
                      children: [
                        "Epochs are monthly and aligned to the listed-option expiry. ",
                        (0, a.jsx)("span", {
                          className: "text-fg",
                          children: "P0",
                        }),
                        " is the 30-minute window price in the last half hour of the regular session (15:30–16:00 ET) on the third Friday of the previous month. The auction runs the next trading day, normally the Monday, 10:30–12:30 ET. ",
                        (0, a.jsx)("span", {
                          className: "text-fg",
                          children: "S",
                        }),
                        " is the same window on the third Friday of the settlement month. Claims open at settle() and never expire.",
                      ],
                    }),
                    (0, a.jsx)("p", {
                      children:
                        "An epoch is 28 or 35 days long; the auction prices the difference. When an epoch settles through its window, the next one opens at that settlement price, so Income holders who claim and re-subscribe are not exposed to a price gap. A ticker's first epoch may instead open on a trading day chosen at registration, at least a week before its settlement; from epoch 1 on the third Friday rule applies. A third Friday that is a market holiday rolls to the next trading day; DST is computed per day, so the window is 19:30–20:00 UTC in summer and 20:30–21:00 UTC in winter.",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("p", {
                      className: "label-caps mb-2",
                      children: "Next settlement dates",
                    }),
                    (0, a.jsx)("ol", {
                      className:
                        "hairline-rows rounded-card border border-line bg-panel px-4",
                      children: n.map((e, n) =>
                        (0, a.jsxs)(
                          "li",
                          {
                            className:
                              "flex items-baseline justify-between gap-4 py-2 font-mono text-xs tnum",
                            children: [
                              (0, a.jsxs)("span", {
                                className: "text-muted",
                                children: ["Epoch ", (0, u.iI)(t.number + n)],
                              }),
                              (0, a.jsx)("span", {
                                className: "text-fg",
                                children: (0, x.m7)(e, "UTC"),
                              }),
                            ],
                          },
                          e
                        )
                      ),
                    }),
                    (0, a.jsx)("p", {
                      className: "mt-2 text-[11px] text-muted",
                      children:
                        "Third Fridays, computed; holiday rolls come from the factory's closed-day set.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function ey() {
        var e, t, n, d, u, m, h, x, p, f;
        let b = (0, o.Am)(),
          y = (0, o.og)(),
          v = (0, o.Vy)(),
          [g, j] = (0, s.useState)(null),
          w = null != (u = b.data) ? u : [],
          N =
            null !=
            (h =
              null !=
              (m =
                null != g
                  ? g
                  : null == (e = w.find((e) => "AAPL" === e.ticker))
                  ? void 0
                  : e.ticker)
                ? m
                : null == (t = w[0])
                ? void 0
                : t.ticker)
              ? h
              : null,
          k = null != (x = w.find((e) => e.ticker === N)) ? x : null,
          S = null == (n = y.data) ? void 0 : n.find((e) => e.ticker === N),
          T = null == (d = v.data) ? void 0 : d.find((e) => e.ticker === N);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(r.Av, {
              title: "Epochs",
              subtitle:
                "Monthly series on the third-Friday calendar. Open → Auction → Trading → Settlement window → Settled.",
              actions:
                w.length > 1
                  ? (0, a.jsx)("div", {
                      role: "group",
                      "aria-label": "Ticker",
                      className: "flex flex-wrap gap-2",
                      children: w.map((e) => {
                        let t = e.ticker === N;
                        return (0, a.jsxs)(
                          "button",
                          {
                            type: "button",
                            "aria-pressed": t,
                            onClick: () => j(e.ticker),
                            className: (0, l.cn)(
                              "inline-flex h-9 items-center gap-2 rounded-pill border px-3 font-mono text-sm transition-colors",
                              t
                                ? "border-upside-fill/70 bg-upside-fill/10 text-fg"
                                : "border-rule bg-panel text-muted hover:border-fg hover:text-fg"
                            ),
                            children: [
                              (0, a.jsx)(r.xz, {
                                ticker: e.ticker,
                                size: 18,
                                alt: "",
                              }),
                              e.ticker,
                            ],
                          },
                          e.ticker
                        );
                      }),
                    })
                  : void 0,
            }),
            b.isLoading
              ? (0, a.jsx)("div", {
                  "aria-busy": "true",
                  className:
                    "h-[32rem] animate-pulse rounded-card border border-line bg-panel",
                })
              : k
              ? (0, a.jsxs)("div", {
                  className: "flex flex-col gap-6",
                  children: [
                    (0, a.jsx)(E, {
                      epoch: k,
                      series: S,
                      name: null == T ? void 0 : T.token.name,
                    }),
                    (0, a.jsx)(r.Zp, {
                      padding: "md",
                      children: (0, a.jsx)(i.ht, {
                        ticker: k.ticker,
                        address:
                          null != (f = null == S ? void 0 : S.address)
                            ? f
                            : null == S
                            ? void 0
                            : S.id,
                        epoch: k,
                        epochNumber: k.number,
                      }),
                    }),
                    (0, a.jsx)(eh, { series: S, ticker: k.ticker }),
                    (0, a.jsx)(ef, {
                      epochs: w,
                      selected: k.ticker,
                      onSelect: j,
                    }),
                    (0, a.jsx)(eb, { epoch: k }),
                  ],
                })
              : (0, a.jsxs)("div", {
                  className: "flex flex-col gap-4",
                  children: [
                    (0, a.jsx)("p", {
                      className: "text-sm text-muted",
                      children:
                        "No epochs yet. An epoch appears when a series is created for a registered ticker.",
                    }),
                    (0, a.jsx)(c.V, { markets: null != (p = v.data) ? p : [] }),
                  ],
                }),
          ],
        });
      }
    },
    90850: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 90237));
    },
  },
  (e) => {
    e.O(
      0,
      [
        9276, 4133, 755, 3869, 756, 2976, 7349, 4520, 592, 9834, 3709, 7727,
        8368, 8473, 5458, 1812, 9930, 4314, 4297, 7358,
      ],
      () => e((e.s = 90850))
    ),
      (_N_E = e.O());
  },
]);
