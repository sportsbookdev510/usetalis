(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5522],
  {
    4092: (e, s, t) => {
      "use strict";
      t.d(s, { s: () => m });
      var a = t(72133),
        n = t(35476),
        l = t(30983),
        i = t(13177),
        r = t(36811),
        c = t(65120),
        d = t(91109),
        o = t(29142);
      function m(e) {
        var s;
        let { label: t = "Protocol", className: m } = e,
          u = (0, c.qn)(),
          x = u.data,
          h = (null != (s = null == x ? void 0 : x.daily) ? s : []).map((e) =>
            (0, c.zf)(e.tvlUsd8)
          ),
          p = h.length > 1 && h.some((e) => e > 0) ? h.slice(-12) : void 0;
        return (0, a.jsxs)("section", {
          "aria-label": "".concat(t, " stats"),
          className: (0, d.cn)("flex min-w-0 flex-col gap-4", m),
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-2",
              children: [
                (0, a.jsx)("h2", {
                  className: "text-sm font-semibold text-fg",
                  children: t,
                }),
                (0, a.jsx)(n.d, {
                  asOf: u.asOf,
                  source: u.source,
                  unavailable: u.unavailable,
                  compact: !0,
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4",
              children: [
                (0, a.jsx)(l.Tk, {
                  label: "Value locked",
                  value: x ? (0, r.dR)(x.tvlUsd, { compact: !0 }) : "—",
                  trend: p,
                  trendLabel: "Value locked by day",
                  note: x
                    ? "Stock Tokens held by series vaults (incl. unclaimed)"
                    : void 0,
                }),
                (0, a.jsx)(l.Tk, {
                  label: "Premium received (net)",
                  value: x ? (0, r.dR)((0, c.Gy)(x.premiumNetUsdg)) : "—",
                  note: x
                    ? ""
                        .concat(
                          (0, r.dR)((0, c.Gy)(x.premiumGrossUsdg)),
                          " paid by bidders \xb7 "
                        )
                        .concat(o.nl.feeBps / 100, " % fee to the vault")
                    : void 0,
                }),
                (0, a.jsx)(l.Tk, {
                  label: "Epochs settled",
                  value: x ? (0, i.oE)(x.epochsSettled) : "—",
                  note: x
                    ? "".concat((0, i.oE)(x.seriesTotal), " series created")
                    : void 0,
                }),
                (0, a.jsx)(l.Tk, {
                  label: "Active series",
                  value: x ? (0, i.oE)(x.activeSeries) : "—",
                  note: x
                    ? ""
                        .concat((0, i.oE)(x.tickers), " Stock Token")
                        .concat(1 === x.tickers ? "" : "s", " listed")
                    : void 0,
                }),
              ],
            }),
            u.unavailable
              ? (0, a.jsx)("p", {
                  className: "text-[11px] text-muted",
                  children: "no data yet",
                })
              : null,
          ],
        });
      }
    },
    12214: (e, s, t) => {
      "use strict";
      var a = t(67178);
      t.o(a, "usePathname") &&
        t.d(s, {
          usePathname: function () {
            return a.usePathname;
          },
        }),
        t.o(a, "useRouter") &&
          t.d(s, {
            useRouter: function () {
              return a.useRouter;
            },
          }),
        t.o(a, "useSearchParams") &&
          t.d(s, {
            useSearchParams: function () {
              return a.useSearchParams;
            },
          });
    },
    21404: (e, s, t) => {
      "use strict";
      t.d(s, { CapSection: () => h });
      var a = t(72133),
        n = t(50625),
        l = t(84520),
        i = t(42726),
        r = t(36811),
        c = t(91109),
        d = t(25789),
        o = t(40564),
        m = t(36564),
        u = t(53063);
      let x = [0, 2, 5, 10].map((e) => ({
        value: e,
        label: "".concat(e, "%"),
      }));
      function h() {
        let [e, s] = (0, n.useState)(5),
          t = (0, i.oZ)({
            p0: 250,
            capBps: Math.round(100 * e),
            daysToSettlement: i.Ln.daysToSettlement,
          });
        return (0, a.jsx)(m.w, {
          id: "cap",
          children: (0, a.jsxs)("div", {
            className:
              "grid gap-12 md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] md:gap-16 [&>*]:min-w-0",
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-10",
                children: [
                  (0, a.jsx)(m.Y, {
                    heading: (0, a.jsxs)(a.Fragment, {
                      children: [
                        "A defined level.",
                        (0, a.jsx)("br", {}),
                        "A clear split.",
                      ],
                    }),
                    lead: "Choose the cap. K is fixed for the epoch.",
                    copy: (0, a.jsxs)("p", {
                      children: [
                        "A higher cap keeps more of the move in ",
                        u._b,
                        ". A lower cap sells more of it to ",
                        u.TE,
                        ", for a larger premium. At settlement,",
                        " ",
                        u.TE,
                        " takes the amount above K; ",
                        u._b,
                        " keeps the rest plus the premium.",
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "max-w-xl",
                    children: [
                      (0, a.jsx)(l.Ap, {
                        label: "Cap",
                        value: e,
                        onChange: s,
                        min: 0,
                        max: 10,
                        step: 0.5,
                        ticks: x,
                        format: (e) =>
                          (0, r.Nd)(Math.round(100 * e), {
                            decimals: +(e % 1 != 0),
                          }),
                      }),
                      (0, a.jsxs)("p", {
                        className:
                          "mt-3 text-[11px] leading-relaxed text-muted tnum",
                        children: [
                          "AAPL at ",
                          (0, a.jsx)("span", {
                            className: "font-mono",
                            children: (0, r.dR)(250),
                          }),
                          " \xb7 cap price (K) ",
                          (0, a.jsx)("span", {
                            className: "font-mono",
                            children: (0, r.dR)(t.capPrice),
                          }),
                          " \xb7",
                          " ",
                          (0, a.jsx)("span", {
                            className: "font-mono",
                            children: i.Ln.daysToSettlement,
                          }),
                          " days \xb7 ",
                          d.ER,
                          " \xb7 model at",
                          " ",
                          (0, a.jsxs)("span", {
                            className: "font-mono",
                            children: [Math.round(100 * i.Ln.sigma), "%"],
                          }),
                          " vol",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-3",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "rounded-card-lg bg-raised p-4 ring-1 ring-line md:p-5",
                    children: (0, a.jsx)(o.g, {
                      ticker: "AAPL",
                      p0: 250,
                      capPrice: t.capPrice,
                      spot: 250,
                      premium: t.convex,
                      premiumNote: "model at "
                        .concat(Math.round(100 * i.Ln.sigma), "% vol \xb7 ")
                        .concat(i.Ln.daysToSettlement, " days"),
                      title: "Value at settlement",
                      subtitle: "Per unit \xb7 AAPL at "
                        .concat((0, r.dR)(250), " \xb7 cap ")
                        .concat(
                          (0, r.Nd)(Math.round(100 * e), {
                            decimals: +(e % 1 != 0),
                          }),
                          " \xb7 K "
                        )
                        .concat((0, r.dR)(t.capPrice)),
                      height: 220,
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col gap-3",
                    "aria-live": "polite",
                    children: [
                      (0, a.jsx)(p, {
                        name: u._b,
                        kind: "Up to the cap",
                        value: (0, r.dR)(t.one),
                        share: (0, r.Oe)(t.oneShare, {
                          signed: !1,
                          approx: !0,
                        }),
                        bar: t.oneShare,
                        tone: "income",
                      }),
                      (0, a.jsx)(p, {
                        name: u.TE,
                        kind: "Above the cap",
                        value: (0, r.dR)(t.convex),
                        share: (0, r.Oe)(t.convexShare, {
                          signed: !1,
                          approx: !0,
                        }),
                        bar: t.convexShare,
                        tone: "upside",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function p(e) {
        let { name: s, kind: t, value: n, share: i, bar: r, tone: d } = e,
          o = "upside" === d;
        return (0, a.jsxs)(l.Zp, {
          tone: o ? "upside" : "income",
          padding: "none",
          className: "p-5",
          children: [
            (0, a.jsxs)("p", {
              className: "flex items-baseline gap-2",
              children: [
                (0, a.jsxs)("span", {
                  className: "label-caps flex items-center gap-1.5 text-fg",
                  children: [
                    (0, a.jsx)(l.CH, {
                      size: 12,
                      tone: "split",
                      wedge: o ? void 0 : "transparent",
                      block: o ? "transparent" : void 0,
                    }),
                    s,
                  ],
                }),
                (0, a.jsxs)("span", {
                  className: "text-xs text-muted",
                  children: ["(", t, ")"],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "mt-3 flex items-baseline justify-between gap-4",
              children: [
                (0, a.jsx)("p", {
                  className: "font-mono text-2xl text-fg tnum md:text-3xl",
                  children: n,
                }),
                (0, a.jsxs)("p", {
                  className: "font-mono text-xs text-muted tnum",
                  children: [
                    i,
                    " ",
                    (0, a.jsx)("span", {
                      className: "sr-only",
                      children: "of spot",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className:
                "mt-4 h-1 w-full overflow-hidden rounded-full bg-rule/60",
              "aria-hidden": "true",
              children: (0, a.jsx)("div", {
                className: (0, c.cn)(
                  "h-full rounded-full transition-[width] duration-300 ease-out-soft",
                  o ? "bg-upside-fill" : "bg-income-fill"
                ),
                style: {
                  width: "".concat(Math.max(1.5, Math.min(100, 100 * r)), "%"),
                },
              }),
            }),
          ],
        });
      }
    },
    36564: (e, s, t) => {
      "use strict";
      t.d(s, { Y: () => d, w: () => o });
      var a = t(72133),
        n = t(64133),
        l = t.n(n),
        i = t(72555),
        r = t(84520),
        c = t(91109);
      function d(e) {
        let { heading: s, lead: t, copy: n, link: d, className: o } = e;
        return (0, a.jsxs)("div", {
          className: (0, c.cn)("flex flex-col gap-5", o),
          children: [
            (0, a.jsx)(r.tQ, { size: "lg", children: s }),
            t
              ? (0, a.jsx)("p", {
                  className:
                    "max-w-sm text-[15px] font-medium leading-snug text-fg",
                  children: t,
                })
              : null,
            n
              ? (0, a.jsx)("div", {
                  className: "max-w-sm text-sm leading-relaxed text-muted",
                  children: n,
                })
              : null,
            d
              ? (0, a.jsxs)(l(), {
                  href: d.href,
                  className:
                    "inline-flex w-fit items-center gap-2 border-b border-rule pb-0.5 text-sm text-fg transition-colors hover:border-income",
                  children: [
                    d.label,
                    (0, a.jsx)(i.A, {
                      className: "size-3.5",
                      "aria-hidden": "true",
                    }),
                  ],
                })
              : null,
          ],
        });
      }
      function o(e) {
        let { id: s, className: t, children: n } = e;
        return (0, a.jsx)("section", {
          id: s,
          className: (0, c.cn)("scroll-mt-28 border-b border-line", t),
          children: (0, a.jsx)("div", {
            className: "container-x py-16 md:py-24",
            children: n,
          }),
        });
      }
    },
    43580: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 21404)),
        Promise.resolve().then(t.bind(t, 93578)),
        Promise.resolve().then(t.bind(t, 56749)),
        Promise.resolve().then(t.t.bind(t, 64133, 23)),
        Promise.resolve().then(t.t.bind(t, 25626, 23));
    },
    86635: (e, s, t) => {
      "use strict";
      t.d(s, {
        Am: () => v,
        At: () => x,
        NY: () => h,
        Vy: () => u,
        WN: () => b,
        dm: () => f,
        hR: () => y,
        og: () => p,
        tG: () => j,
        ur: () => g,
      });
      var a = t(90756),
        n = t(29142),
        l = t(50827),
        i = t(54096);
      let r = "live" === n.g ? 15e3 : 1 / 0,
        c = "live" === n.g && 3e4;
      function d(e) {
        return "preview" === n.g ? { initialData: e() } : {};
      }
      function o(e) {
        return Object.assign(e, { source: n.g });
      }
      function m() {
        for (var e = arguments.length, s = Array(e), t = 0; t < e; t++)
          s[t] = arguments[t];
        return ["talis", n.g, ...s];
      }
      function u() {
        return o(
          (0, a.I)({
            queryKey: m("markets"),
            queryFn: async () => (await (0, i.U)()).markets(),
            staleTime: r,
            refetchInterval: c,
            ...d(() => l.B.markets()),
          })
        );
      }
      function x(e) {
        return o(
          (0, a.I)({
            queryKey: m("market", e),
            queryFn: async () => (e ? (await (0, i.U)()).market(e) : null),
            enabled: !!e,
            staleTime: r,
            refetchInterval: c,
            ...d(() => (e ? l.B.market(e) : null)),
          })
        );
      }
      function h(e) {
        return o(
          (0, a.I)({
            queryKey: m("series", e),
            queryFn: async () => (e ? (await (0, i.U)()).series(e) : null),
            enabled: !!e,
            staleTime: r,
            refetchInterval: c,
            ...d(() => (e ? l.B.series(e) : null)),
          })
        );
      }
      function p() {
        return o(
          (0, a.I)({
            queryKey: m("series"),
            queryFn: async () => (await (0, i.U)()).allSeries(),
            staleTime: r,
            refetchInterval: c,
            ...d(() => l.B.allSeries()),
          })
        );
      }
      function f(e) {
        return o(
          (0, a.I)({
            queryKey: m("auction", e),
            queryFn: async () => (e ? (await (0, i.U)()).auction(e) : null),
            enabled: !!e,
            staleTime: "live" === n.g ? 5e3 : r,
            refetchInterval: c,
            ...d(() => (e ? l.B.auction(e) : null)),
          })
        );
      }
      function g() {
        return o(
          (0, a.I)({
            queryKey: m("auctions"),
            queryFn: async () => (await (0, i.U)()).auctions(),
            staleTime: "live" === n.g ? 5e3 : r,
            refetchInterval: c,
            ...d(() => l.B.auctions()),
          })
        );
      }
      function j(e) {
        return o(
          (0, a.I)({
            queryKey: m("epoch", e),
            queryFn: async () => (e ? (await (0, i.U)()).epoch(e) : null),
            enabled: !!e,
            staleTime: r,
            refetchInterval: c,
            ...d(() => (e ? l.B.epoch(e) : null)),
          })
        );
      }
      function v() {
        return o(
          (0, a.I)({
            queryKey: m("epochs"),
            queryFn: async () => (await (0, i.U)()).epochs(),
            staleTime: r,
            refetchInterval: c,
            ...d(() => l.B.epochs()),
          })
        );
      }
      function b() {
        return o(
          (0, a.I)({
            queryKey: m("candidates"),
            queryFn: async () => (await (0, i.U)()).listingCandidates(),
            staleTime: r,
            ...d(() => l.B.listingCandidates()),
          })
        );
      }
      function y() {
        return o(
          (0, a.I)({
            queryKey: m("stats"),
            queryFn: async () => (await (0, i.U)()).protocolStats(),
            staleTime: r,
            refetchInterval: c,
            ...d(() => l.B.protocolStats()),
          })
        );
      }
    },
    93578: (e, s, t) => {
      "use strict";
      t.d(s, { LiveMarkets: () => f });
      var a = t(72133),
        n = t(64133),
        l = t.n(n),
        i = t(12214),
        r = t(72555),
        c = t(84520),
        d = t(86635),
        o = t(36811),
        m = t(25789),
        u = t(4092),
        x = t(36564),
        h = t(53063);
      let p = ["NVDA", "AAPL", "MSFT", "QQQ", "TSLA"];
      function f() {
        let e = (0, i.useRouter)(),
          { data: s, isPending: t, isError: n } = (0, d.Vy)(),
          f = (null != s ? s : [])
            .filter(
              (e) =>
                ("active" === e.status || "created" === e.status) &&
                p.includes(e.ticker)
            )
            .sort((e, s) => p.indexOf(e.ticker) - p.indexOf(s.ticker));
        // return (0, a.jsxs)(x.w, {
        //   id: "markets",
        //   children: [
        //     (0, a.jsxs)("div", {
        //       className: "mb-6 flex flex-wrap items-end justify-between gap-3",
        //       children: [
        //         (0, a.jsx)(c.tQ, { size: "md", children: "Live markets" }),
        //         (0, a.jsx)("p", {
        //           className: "text-xs text-muted",
        //           children:
        //             "One series per Stock Token, epoch and cap. Prices from the Chainlink feed.",
        //         }),
        //       ],
        //     }),
        //     (0, a.jsx)(u.s, {
        //       label: "On chain",
        //       className:
        //         "mb-8 rounded-card-lg border border-line bg-raised p-5",
        //     }),
        //     (0, a.jsxs)(c.XI, {
        //       "aria-busy": t || void 0,
        //       className: "min-w-[560px]",
        //       children: [
        //         (0, a.jsx)(c.D1, {
        //           children: (0, a.jsxs)("tr", {
        //             children: [
        //               (0, a.jsx)(c.TH, { children: "Asset" }),
        //               (0, a.jsx)(c.TH, { align: "right", children: "Cap" }),
        //               (0, a.jsx)(c.TH, {
        //                 align: "right",
        //                 children: (0, a.jsxs)("span", {
        //                   className: "inline-flex items-center gap-1.5",
        //                   children: [
        //                     (0, a.jsx)("span", {
        //                       "aria-hidden": "true",
        //                       className:
        //                         "inline-block size-1.5 rounded-full bg-income-fill",
        //                     }),
        //                     h._b,
        //                   ],
        //                 }),
        //               }),
        //               (0, a.jsx)(c.TH, {
        //                 align: "right",
        //                 children: (0, a.jsxs)("span", {
        //                   className: "inline-flex items-center gap-1.5",
        //                   children: [
        //                     (0, a.jsx)("span", {
        //                       "aria-hidden": "true",
        //                       className:
        //                         "inline-block size-1.5 rounded-full bg-upside-fill",
        //                     }),
        //                     h.TE,
        //                   ],
        //                 }),
        //               }),
        //               (0, a.jsx)(c.TH, { align: "right", children: "Epoch" }),
        //               (0, a.jsx)(c.TH, { align: "right", children: "Status" }),
        //             ],
        //           }),
        //         }),
        //         (0, a.jsxs)(c.vc, {
        //           children: [
        //             t
        //               ? p.map((e) =>
        //                   (0, a.jsx)(
        //                     c.TR,
        //                     {
        //                       children: (0, a.jsx)(c.TD, {
        //                         colSpan: 6,
        //                         children: (0, a.jsx)("span", {
        //                           className:
        //                             "block h-4 w-2/3 animate-pulse rounded bg-panel",
        //                         }),
        //                       }),
        //                     },
        //                     e
        //                   )
        //                 )
        //               : null,
        //             n
        //               ? (0, a.jsx)(c.TR, {
        //                   children: (0, a.jsx)(c.TD, {
        //                     colSpan: 6,
        //                     className: "text-muted",
        //                     children: "Markets could not be loaded.",
        //                   }),
        //                 })
        //               : null,
        //             t || n || 0 !== f.length
        //               ? null
        //               : (0, a.jsx)(c.TR, {
        //                   children: (0, a.jsx)(c.TD, {
        //                     colSpan: 6,
        //                     className: "text-muted",
        //                     children: "No active series at the moment.",
        //                   }),
        //                 }),
        //             f.map((s) => {
        //               let t = "/app/markets/".concat(s.ticker);
        //               return (0, a.jsxs)(
        //                 c.TR,
        //                 {
        //                   interactive: !0,
        //                   onClick: () => e.push(t),
        //                   children: [
        //                     (0, a.jsx)(c.TD, {
        //                       children: (0, a.jsxs)(l(), {
        //                         href: t,
        //                         className:
        //                           "inline-flex items-center gap-3 rounded-md font-mono text-sm text-fg",
        //                         onClick: (e) => e.stopPropagation(),
        //                         children: [
        //                           (0, a.jsx)(c.xz, {
        //                             ticker: s.ticker,
        //                             size: 26,
        //                             alt: "",
        //                           }),
        //                           s.ticker,
        //                         ],
        //                       }),
        //                     }),
        //                     (0, a.jsx)(c.TD, {
        //                       mono: !0,
        //                       align: "right",
        //                       children: (0, o.Nd)(s.capBps),
        //                     }),
        //                     (0, a.jsxs)(c.TD, {
        //                       mono: !0,
        //                       align: "right",
        //                       className: "text-income",
        //                       children: [
        //                         (0, o.dR)(s.oneValue),
        //                         "created" === s.status
        //                           ? (0, a.jsx)("span", {
        //                               className:
        //                                 "block text-[10px] font-sans text-paper-text-muted",
        //                               children: "model",
        //                             })
        //                           : null,
        //                       ],
        //                     }),
        //                     (0, a.jsxs)(c.TD, {
        //                       mono: !0,
        //                       align: "right",
        //                       className: "text-upside",
        //                       children: [
        //                         (0, o.dR)(s.convexValue),
        //                         "created" === s.status
        //                           ? (0, a.jsx)("span", {
        //                               className:
        //                                 "block text-[10px] font-sans text-paper-text-muted",
        //                               children: "model",
        //                             })
        //                           : null,
        //                       ],
        //                     }),
        //                     (0, a.jsxs)(c.TD, {
        //                       mono: !0,
        //                       align: "right",
        //                       className: "text-muted",
        //                       children: [
        //                         "created" === s.status
        //                           ? "".concat(
        //                               (0, o.iI)(s.epoch.number),
        //                               " \xb7 created"
        //                             )
        //                           : ""
        //                               .concat(
        //                                 (0, o.iI)(s.epoch.number),
        //                                 " \xb7 "
        //                               )
        //                               .concat(s.epoch.daysLeft, "d"),
        //                         "created" === s.status
        //                           ? null
        //                           : (0, a.jsxs)("span", {
        //                               className: "sr-only",
        //                               children: [
        //                                 " (",
        //                                 (0, o.H_)(s.epoch.daysLeft),
        //                                 ")",
        //                               ],
        //                             }),
        //                       ],
        //                     }),
        //                     (0, a.jsx)(c.TD, {
        //                       align: "right",
        //                       children: (0, a.jsx)(c.md, {
        //                         status:
        //                           "created" === s.status ? "created" : "active",
        //                       }),
        //                     }),
        //                   ],
        //                 },
        //                 s.ticker
        //               );
        //             }),
        //           ],
        //         }),
        //       ],
        //     }),
        //     (0, a.jsxs)("div", {
        //       className:
        //         "mt-5 flex flex-wrap items-center justify-between gap-3",
        //       children: [
        //         (0, a.jsxs)(l(), {
        //           href: "/app/markets",
        //           className:
        //             "inline-flex items-center gap-2 rounded-md text-sm font-medium text-income transition-colors hover:text-forest-deep",
        //           children: [
        //             "View all markets",
        //             (0, a.jsx)(r.A, {
        //               className: "size-3.5",
        //               "aria-hidden": "true",
        //             }),
        //           ],
        //         }),
        //         (0, a.jsx)("p", {
        //           className: "text-[11px] text-muted",
        //           children: m.ER,
        //         }),
        //       ],
        //     }),
        //   ],
        // });
      }
    },
  },
  (e) => {
    e.O(
      0,
      [
        9276, 4133, 755, 3869, 756, 2976, 4520, 592, 9834, 3709, 7727, 1595,
        4314, 4297, 7358,
      ],
      () => e((e.s = 43580))
    ),
      (_N_E = e.O());
  },
]);
