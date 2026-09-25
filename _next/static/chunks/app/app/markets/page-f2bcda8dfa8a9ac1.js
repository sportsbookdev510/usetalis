(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3600],
  {
    4092: (e, t, n) => {
      "use strict";
      n.d(t, { s: () => u });
      var s = n(72133),
        a = n(35476),
        i = n(30983),
        r = n(13177),
        l = n(36811),
        c = n(65120),
        o = n(91109),
        d = n(29142);
      function u(e) {
        var t;
        let { label: n = "Protocol", className: u } = e,
          p = (0, c.qn)(),
          m = p.data,
          x = (null != (t = null == m ? void 0 : m.daily) ? t : []).map((e) =>
            (0, c.zf)(e.tvlUsd8)
          ),
          h = x.length > 1 && x.some((e) => e > 0) ? x.slice(-12) : void 0;
        return (0, s.jsxs)("section", {
          "aria-label": "".concat(n, " stats"),
          className: (0, o.cn)("flex min-w-0 flex-col gap-4", u),
          children: [
            (0, s.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-2",
              children: [
                (0, s.jsx)("h2", {
                  className: "text-sm font-semibold text-fg",
                  children: n,
                }),
                (0, s.jsx)(a.d, {
                  asOf: p.asOf,
                  source: p.source,
                  unavailable: p.unavailable,
                  compact: !0,
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4",
              children: [
                (0, s.jsx)(i.Tk, {
                  label: "Value locked",
                  value: m ? (0, l.dR)(m.tvlUsd, { compact: !0 }) : "—",
                  trend: h,
                  trendLabel: "Value locked by day",
                  note: m
                    ? "Stock Tokens held by series vaults (incl. unclaimed)"
                    : void 0,
                }),
                (0, s.jsx)(i.Tk, {
                  label: "Premium received (net)",
                  value: m ? (0, l.dR)((0, c.Gy)(m.premiumNetUsdg)) : "—",
                  note: m
                    ? ""
                        .concat(
                          (0, l.dR)((0, c.Gy)(m.premiumGrossUsdg)),
                          " paid by bidders \xb7 "
                        )
                        .concat(d.nl.feeBps / 100, " % fee to the vault")
                    : void 0,
                }),
                (0, s.jsx)(i.Tk, {
                  label: "Epochs settled",
                  value: m ? (0, r.oE)(m.epochsSettled) : "—",
                  note: m
                    ? "".concat((0, r.oE)(m.seriesTotal), " series created")
                    : void 0,
                }),
                (0, s.jsx)(i.Tk, {
                  label: "Active series",
                  value: m ? (0, r.oE)(m.activeSeries) : "—",
                  note: m
                    ? ""
                        .concat((0, r.oE)(m.tickers), " Stock Token")
                        .concat(1 === m.tickers ? "" : "s", " listed")
                    : void 0,
                }),
              ],
            }),
            p.unavailable
              ? (0, s.jsx)("p", {
                  className: "text-[11px] text-muted",
                  children: "no data yet",
                })
              : null,
          ],
        });
      }
    },
    9250: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      let s = (0, n(99011).A)("circle-check", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]);
    },
    10549: (e, t, n) => {
      "use strict";
      n.d(t, { Gp: () => x, mK: () => m, wC: () => h });
      var s = n(90756),
        a = n(50625),
        i = n(37762),
        r = n(32916),
        l = n(89764),
        c = n(4023),
        o = n(29142),
        d = n(93617),
        u = n(36901);
      function p(e) {
        let t = (0, l.B)(e, { chainId: o.bQ });
        if (!t) throw Error("No RPC client");
        return t;
      }
      function m(e, t) {
        let n = (0, i.U)(),
          l = (0, u.qK)(),
          { address: m } = (0, r.F)(),
          x = null != t ? t : m,
          h = (0, a.useMemo)(
            () => [
              ...new Set(e.filter((e) => !!e).map((e) => e.toLowerCase())),
            ],
            [e]
          );
        return (0, s.I)({
          queryKey: d.y.balances(o.bQ, x, h),
          queryFn: async () => {
            let e = await p(n).multicall({
                allowFailure: !0,
                contracts: h.map((e) => ({
                  address: e,
                  abi: c.ed,
                  functionName: "balanceOf",
                  args: [x],
                })),
              }),
              t = {};
            return (
              h.forEach((n, s) => {
                let a = e[s];
                (null == a ? void 0 : a.status) === "success" &&
                  (t[n] = a.result);
              }),
              t
            );
          },
          enabled: o.KO && l && !!x && h.length > 0,
          staleTime: 1e4,
        });
      }
      function x(e, t, n) {
        let a = (0, i.U)(),
          l = (0, u.qK)(),
          { address: m } = (0, r.F)(),
          x = null != n ? n : m,
          h = (0, s.I)({
            queryKey: d.y.allowance(
              o.bQ,
              x,
              null != e ? e : "0x",
              null != t ? t : "0x"
            ),
            queryFn: () =>
              p(a).readContract({
                address: e,
                abi: c.ed,
                functionName: "allowance",
                args: [x, t],
              }),
            enabled: o.KO && l && !!x && !!e && !!t,
            staleTime: 1e4,
          });
        return {
          allowance: h.data,
          isLoading: h.isLoading,
          isFetched: h.isFetched,
        };
      }
      function h(e, t) {
        var n, a, l;
        let c = (0, i.U)(),
          m = (0, u.qK)(),
          { address: x } = (0, r.F)(),
          h = null != (n = t.who) ? n : x;
        return (0, s.I)({
          queryKey: [...d.y.account(o.bQ, h), "multicall", t.id],
          queryFn: async () =>
            await p(c).multicall({ allowFailure: !0, contracts: e }),
          enabled:
            o.KO && m && !!h && e.length > 0 && (null == (a = t.enabled) || a),
          staleTime: null != (l = t.staleTime) ? l : 1e4,
          refetchInterval: t.refetchInterval,
        });
      }
    },
    12214: (e, t, n) => {
      "use strict";
      var s = n(67178);
      n.o(s, "usePathname") &&
        n.d(t, {
          usePathname: function () {
            return s.usePathname;
          },
        }),
        n.o(s, "useRouter") &&
          n.d(t, {
            useRouter: function () {
              return s.useRouter;
            },
          }),
        n.o(s, "useSearchParams") &&
          n.d(t, {
            useSearchParams: function () {
              return s.useSearchParams;
            },
          });
    },
    13892: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      let s = (0, n(99011).A)("circle-alert", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
        ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
      ]);
    },
    16033: (e, t, n) => {
      "use strict";
      n.d(t, { MarketsView: () => en });
      var s = n(72133),
        a = n(50625),
        i = n(12214),
        r = n(72555),
        l = n(84520),
        c = n(29142),
        o = n(86635),
        d = n(42726),
        u = n(36811),
        p = n(91109),
        m = n(25789),
        x = n(53063);
      function h(e) {
        let {
            capPct: t,
            onCapChange: n,
            split: a,
            mode: i,
            onMode: r,
            disabled: c,
            ticker: o,
            className: h,
          } = e,
          f = (0, d.zb)(a),
          b = ""
            .concat(Math.round(100 * d.S8.low), "–")
            .concat(Math.round(100 * d.S8.high), "% vol");
        return (0, s.jsxs)(l.Zp, {
          className: (0, p.cn)("flex flex-col gap-5", h),
          children: [
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)("div", {
                  className: "mb-3 flex items-baseline justify-between gap-3",
                  children: [
                    (0, s.jsx)("h2", {
                      className: "text-sm font-semibold text-fg",
                      children: "Select cap",
                    }),
                    (0, s.jsx)("p", {
                      className: "text-[11px] text-muted",
                      children: "A defined level. A clear split.",
                    }),
                  ],
                }),
                (0, s.jsx)(l.Ap, {
                  label: "Cap",
                  value: (0, m.mq)(t),
                  onChange: (e) => {
                    var s;
                    return n(null != (s = m.G6[e]) ? s : t);
                  },
                  min: 0,
                  max: m.G6.length - 1,
                  step: 1,
                  ticks: m.fF,
                  format: (e) => {
                    var t;
                    return "+".concat(null != (t = m.G6[e]) ? t : 0, "%");
                  },
                  hideLabel: !0,
                  knob: "lime",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "grid gap-3 sm:grid-cols-2",
              children: [
                (0, s.jsx)(v, {
                  kind: "income",
                  title: x._b,
                  value: (0, u.dR)(a.one),
                  sub: "Up to the cap",
                  share: (0, u.Oe)(a.oneShare, { signed: !1, approx: !0 }),
                  range: ""
                    .concat((0, u.dR)(a.spot - f), "–")
                    .concat((0, u.dR)(a.one), " at ")
                    .concat(b),
                  active: "split" === i,
                  action: (0, s.jsxs)(l.$n, {
                    variant: "income",
                    className: "w-full",
                    onClick: () => r("split"),
                    disabled: c,
                    "aria-pressed": "split" === i,
                    children: ["Buy ", x._b],
                  }),
                }),
                (0, s.jsx)(v, {
                  kind: "upside",
                  title: x.TE,
                  value: (0, u.dR)(a.convex),
                  sub: "Above the cap",
                  share: (0, u.Oe)(a.convexShare, { signed: !1, approx: !0 }),
                  range: ""
                    .concat((0, u.dR)(a.convex), "–")
                    .concat((0, u.dR)(f), " at ")
                    .concat(b),
                  active: "buy" === i,
                  action: (0, s.jsxs)(l.$n, {
                    variant: "upside",
                    className: "w-full",
                    onClick: () => r("buy"),
                    disabled: c,
                    "aria-pressed": "buy" === i,
                    children: ["Buy ", x.TE],
                  }),
                }),
              ],
            }),
            (0, s.jsxs)("p", {
              className: "text-[11px] text-dim tnum",
              children: [
                m.ER,
                " \xb7 ",
                (0, m.Te)(o),
                ". Income = deposit − Upside; shares are of one Stock Token unit.",
              ],
            }),
          ],
        });
      }
      function f(e) {
        let { kind: t } = e,
          n = "upside" === t;
        return (0, s.jsx)("span", {
          "aria-hidden": "true",
          className: (0, p.cn)(
            "inline-flex size-6 items-center justify-center rounded-full border",
            n ? "border-upside-fill/60" : "border-income-fill/60"
          ),
          children: (0, s.jsx)(l.CH, {
            size: 12,
            tone: "split",
            wedge: n ? void 0 : "transparent",
            block: n ? "transparent" : void 0,
          }),
        });
      }
      function v(e) {
        let {
            kind: t,
            title: n,
            value: a,
            sub: i,
            share: r,
            range: c,
            active: o,
            action: d,
          } = e,
          u = "upside" === t;
        return (0, s.jsxs)(l.Zp, {
          tone: u ? "upside" : "income",
          padding: "sm",
          className: (0, p.cn)(
            "flex flex-col gap-4 transition-shadow",
            o &&
              (u
                ? "shadow-[var(--shadow-glow-upside)] ring-1 ring-upside-fill/60"
                : "shadow-[var(--shadow-glow-income)] ring-1 ring-income-fill/50")
          ),
          children: [
            (0, s.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                (0, s.jsxs)("span", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, s.jsx)(f, { kind: t }),
                    (0, s.jsx)("span", {
                      className: "label-caps text-fg",
                      children: n,
                    }),
                  ],
                }),
                o
                  ? (0, s.jsx)("span", {
                      className: "label-caps text-[10px] text-fg",
                      children: "selected",
                    })
                  : null,
              ],
            }),
            (0, s.jsxs)("div", {
              className: "flex items-end justify-between gap-3",
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("p", {
                      className: "font-mono text-2xl font-medium tnum text-fg",
                      children: a,
                    }),
                    (0, s.jsx)("p", {
                      className: "mt-0.5 text-xs text-muted",
                      children: i,
                    }),
                  ],
                }),
                (0, s.jsxs)("p", {
                  className: "font-mono text-xs tnum text-muted",
                  children: [
                    r,
                    (0, s.jsx)("span", {
                      className: "sr-only",
                      children: " of deposit",
                    }),
                  ],
                }),
              ],
            }),
            c
              ? (0, s.jsx)("p", {
                  className: "-mt-2 text-[10px] tnum text-dim",
                  children: c,
                })
              : null,
            (0, s.jsx)("p", {
              className: "-mt-1 text-[11px] leading-snug text-muted",
              children: x.Sx[t],
            }),
            d,
          ],
        });
      }
      var b = n(22291),
        g = n(64133),
        j = n.n(g),
        y = n(85726);
      function k(e) {
        let { markets: t, className: n, status: a = !0 } = e,
          c = (0, i.useRouter)();
        return (0, s.jsxs)(l.XI, {
          className: (0, p.cn)(n),
          children: [
            (0, s.jsx)(l.D1, {
              children: (0, s.jsxs)("tr", {
                children: [
                  (0, s.jsx)(l.TH, { children: "Asset" }),
                  (0, s.jsx)(l.TH, { align: "right", children: "Cap" }),
                  (0, s.jsx)(l.TH, {
                    align: "right",
                    children: (0, s.jsxs)("span", {
                      className: "inline-flex items-center gap-1.5",
                      children: [
                        (0, s.jsx)("span", {
                          "aria-hidden": "true",
                          className:
                            "inline-block size-1.5 rounded-full bg-income-fill",
                        }),
                        x._b,
                      ],
                    }),
                  }),
                  (0, s.jsx)(l.TH, {
                    align: "right",
                    children: (0, s.jsxs)("span", {
                      className: "inline-flex items-center gap-1.5",
                      children: [
                        (0, s.jsx)("span", {
                          "aria-hidden": "true",
                          className:
                            "inline-block size-1.5 rounded-full bg-lime",
                        }),
                        x.TE,
                      ],
                    }),
                  }),
                  (0, s.jsx)(l.TH, { align: "right", children: "Epoch" }),
                  a
                    ? (0, s.jsx)(l.TH, { align: "right", children: "Status" })
                    : null,
                ],
              }),
            }),
            (0, s.jsxs)(l.vc, {
              children: [
                t.map((e) => {
                  let t = "https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=0xc8885f68acb213b144fda1835d61ef05d88ad687/".concat(e.ticker.toLowerCase()),
                    n = !!e.nextSeries,
                    i =
                      !n && "created" === e.seriesState && !!e.indicativeBasis,
                    o = i
                      ? "model \xb7 ".concat((0, y.e7)(e.indicativeBasis))
                      : n
                      ? "model"
                      : null,
                    d = o
                      ? (0, s.jsx)("span", {
                          className:
                            "block whitespace-nowrap text-[10px] font-sans text-dim",
                          children: o,
                        })
                      : null;
                  return (0, s.jsxs)(
                    l.TR,
                    {
                      interactive: !0,
                      onClick: (e) => {
                        e.target.closest("a") || c.push(t);
                      },
                      children: [
                        (0, s.jsx)(l.TD, {
                          children: (0, s.jsxs)(j(), {
                            href: t,
                            className:
                              "group inline-flex items-center gap-2.5 rounded-md",
                            children: [
                              (0, s.jsx)(l.xz, {
                                ticker: e.ticker,
                                size: 24,
                                alt: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "font-mono text-sm text-fg",
                                children: e.ticker,
                              }),
                              (0, s.jsx)(r.A, {
                                className:
                                  "size-3 text-lime opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",
                                "aria-hidden": "true",
                              }),
                              (0, s.jsxs)("span", {
                                className: "sr-only",
                                children: [e.token.name, " market details"],
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)(l.TD, {
                          align: "right",
                          mono: !0,
                          children: (0, u.Nd)(e.capBps),
                        }),
                        (0, s.jsxs)(l.TD, {
                          align: "right",
                          mono: !0,
                          className: "text-income",
                          children: [(0, u.dR)(e.oneValue), d],
                        }),
                        (0, s.jsxs)(l.TD, {
                          align: "right",
                          mono: !0,
                          className: "text-upside",
                          children: [(0, u.dR)(e.convexValue), d],
                        }),
                        (0, s.jsx)(l.TD, {
                          align: "right",
                          mono: !0,
                          className: "whitespace-nowrap text-muted",
                          children: n
                            ? ""
                                .concat((0, u.iI)(e.nextSeries.epoch), " \xb7 ")
                                .concat((0, y.p_)(e.nextSeries))
                            : i
                            ? "".concat(
                                (0, u.iI)(e.epoch.number),
                                " \xb7 created"
                              )
                            : ""
                                .concat((0, u.iI)(e.epoch.number), " \xb7 ")
                                .concat(e.epoch.daysLeft, "d"),
                        }),
                        a
                          ? (0, s.jsx)(l.TD, {
                              align: "right",
                              children: (0, s.jsx)(l.md, {
                                status: e.status,
                                label:
                                  "registered" === e.status
                                    ? "Registered \xb7 no series"
                                    : "created" === e.status
                                    ? "Created"
                                    : void 0,
                                className: "justify-end whitespace-nowrap",
                              }),
                            })
                          : null,
                      ],
                    },
                    e.ticker
                  );
                }),
                0 === t.length
                  ? (0, s.jsx)("tr", {
                      children: (0, s.jsx)("td", {
                        colSpan: a ? 6 : 5,
                        className: "py-8 text-center text-sm text-muted",
                        children: "No registered tickers yet.",
                      }),
                    })
                  : null,
              ],
            }),
          ],
        });
      }
      var w = n(20829),
        N = n(81122);
      function S(e) {
        let { open: t, onClose: n, ticker: i, action: r } = e,
          o = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
          let e = o.current;
          e && (t && !e.open && e.showModal(), !t && e.open && e.close());
        }, [t]);
        let d = r ? (0, N.ej)(r.units, N.Bs.stock, { maxFraction: 4 }) : "",
          u =
            (null == r ? void 0 : r.kind) === "unsubscribe"
              ? "pull "
                  .concat(
                    d,
                    " Upside back out of the auction lot through Series.unsubscribe (burns "
                  )
                  .concat(d, " Income, pays ")
                  .concat(i, " from the vault)")
              : (null == r ? void 0 : r.kind) === "subscribe"
              ? "deposit "
                  .concat(d, " ")
                  .concat(
                    i,
                    " through Series.subscribe (Income to you, Upside to the auction with reserve step "
                  )
                  .concat(r.reserveStep, "; ")
                  .concat(c.nl.auctionSteps - 1, " is the floor)")
              : r
              ? "deposit "
                  .concat(d, " ")
                  .concat(i, " through Series.split (Income and Upside to you)")
              : "open a position";
        return (0, s.jsx)("dialog", {
          ref: o,
          onClose: n,
          onClick: (e) => {
            e.target === o.current && n();
          },
          "aria-labelledby": "open-position-title",
          className:
            "m-auto w-[calc(100vw-32px)] max-w-md rounded-card-lg border border-line bg-raised p-0 text-fg shadow-[var(--shadow-card)] backdrop:bg-black/70 backdrop:backdrop-blur-sm",
          children: (0, s.jsxs)("div", {
            className: "flex flex-col gap-4 p-6",
            children: [
              (0, s.jsxs)("div", {
                className: "flex items-start justify-between gap-4",
                children: [
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("p", {
                        className: "label-caps",
                        children: "Preview",
                      }),
                      (0, s.jsx)("h2", {
                        id: "open-position-title",
                        className:
                          "mt-1 font-display text-xl font-semibold tracking-display",
                        children: "No live series yet",
                      }),
                    ],
                  }),
                  (0, s.jsx)("button", {
                    type: "button",
                    onClick: n,
                    "aria-label": "Close",
                    className:
                      "inline-flex size-8 items-center justify-center rounded-full border border-line text-muted hover:text-fg",
                    children: (0, s.jsx)(w.A, {
                      className: "size-4",
                      "aria-hidden": "true",
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("p", {
                className: "text-sm text-muted",
                children: [
                  "Talis is running on preview data. The numbers on this page are illustrative model values, and there is no ",
                  i,
                  " series on Robinhood Chain to sign against.",
                ],
              }),
              (0, s.jsxs)("p", {
                className: "text-sm text-muted",
                children: [
                  "Once a series opens, this button will ",
                  u,
                  (null == r ? void 0 : r.kind) === "unsubscribe"
                    ? ""
                    : ", with the Stock Token approval before it",
                  ".",
                ],
              }),
              (0, s.jsxs)("div", {
                className: "flex flex-wrap items-center gap-2 pt-1",
                children: [
                  (0, s.jsx)(l.$n, { onClick: n, children: "Got it" }),
                  (0, s.jsx)(l.$n, {
                    variant: "secondary",
                    href: "/app/launchpad",
                    children: "Launchpad",
                  }),
                  (0, s.jsx)(l.$n, {
                    variant: "ghost",
                    href: "/docs",
                    children: "Docs",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function A(e) {
        let {
          market: t,
          capBps: n,
          capPrice: a,
          capPriceHint: i,
          capPriceTag: r,
          className: c,
        } = e;
        return (0, s.jsxs)(l.Zp, {
          tone: "panel",
          padding: "sm",
          className: c,
          children: [
            (0, s.jsxs)(l.l7, {
              children: [
                (0, s.jsx)(l.jP, {
                  label: "Cap",
                  value: (0, u.Nd)(null != n ? n : t.capBps),
                }),
                (0, s.jsx)(l.jP, {
                  label: "Cap price (K)",
                  value: (0, u.dR)(null != a ? a : t.capPrice),
                  hint: null != r ? r : i ? "indicative" : void 0,
                  stack: !!r,
                }),
                (0, s.jsx)(l.jP, {
                  label: "Oracle",
                  value: (0, s.jsx)("span", {
                    className: "font-sans",
                    children: t.oracle,
                  }),
                }),
                (0, s.jsx)(l.jP, {
                  label: "Updated",
                  value: (0, u.KN)(t.updatedAgo),
                  tone: "muted",
                }),
              ],
            }),
            i
              ? (0, s.jsx)("p", {
                  className: "mt-2 text-[11px] leading-snug text-muted",
                  children: i,
                })
              : null,
          ],
        });
      }
      var T = n(82283),
        C = n(71808),
        P = n(10549);
      let U = (e) => (0, N.ej)(e, N.Bs.stock, { maxFraction: 4 }),
        B = c.nl.auctionSteps - 1;
      function F(e) {
        let {
            step: t,
            onChange: n,
            series: a,
            auction: i,
            indicativePrice: r,
            locked: o,
            disabled: m,
            className: x,
          } = e,
          h =
            i && i.pStart > 0
              ? { pStart: i.pStart, pFloor: i.pFloor }
              : a.p0 > 0
              ? (0, d.rS)(a.p0, a.startBps, a.floorBps)
              : r && r > 0
              ? (0, d.rS)(r, a.startBps, a.floorBps)
              : null,
          f = a.p0 > 0 ? a.p0 : null != r ? r : 0,
          v = a.p0 > 0 ? "of P0" : "of the feed price (indicative)",
          b = (null == i ? void 0 : i.stepSeconds) || c.nl.auctionStepSeconds,
          g = (e) =>
            h ? (0, d.Gg)(e, h.pStart, h.pFloor, { stepSeconds: b }) : null,
          j = g(t),
          y = [0, 60, 120, 180, B].map((e) => ({
            value: e,
            label: e === B ? "floor" : "#".concat(e),
          })),
          k = void 0 !== o;
        return (0, s.jsxs)("div", {
          className: x,
          children: [
            (0, s.jsx)(l.Ap, {
              label: "Reserve step",
              value: t,
              onChange: n,
              min: 0,
              max: B,
              ticks: y,
              format: (e) => {
                let t = g(e);
                return "#"
                  .concat(String(e).padStart(3, "0"))
                  .concat(
                    null !== t
                      ? " \xb7 ".concat((0, u.dR)(t, { decimals: 2 }))
                      : ""
                  );
              },
              knob: "lime",
              className: (0, p.cn)(
                (k || m) && "pointer-events-none opacity-60"
              ),
            }),
            (0, s.jsx)("p", {
              className: "mt-1.5 text-[11px] text-dim",
              children: k
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      "Your lot already carries reserve #",
                      o,
                      "; a second subscription repeats it. Change it on the auction page (setReserve) while the lot is open.",
                    ],
                  })
                : t === B
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      "Floor (default)",
                      null !== j && h
                        ? " \xb7 "
                            .concat(
                              (0, u.dR)(h.pFloor, { decimals: 2 }),
                              " per Upside, "
                            )
                            .concat(
                              (0, u.Oe)(a.floorBps / 1e4, {
                                signed: !1,
                                decimals: 0,
                              }),
                              " "
                            )
                            .concat(v)
                        : " \xb7 priced from P0 once the series opens",
                      ". Your Upside sells at any clearing price down to the floor.",
                    ],
                  })
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      "Sells down to ",
                      null !== j
                        ? (0, u.dR)(j, { decimals: 2 })
                        : "step #".concat(t),
                      null !== j && f > 0
                        ? " ("
                            .concat(
                              (0, u.Oe)(j / f, { signed: !1, decimals: 1 }),
                              " "
                            )
                            .concat(v, ")")
                        : "",
                      "; below it your Upside stays unsold and returns to you.",
                    ],
                  }),
            }),
          ],
        });
      }
      let R = { facts: {}, balances: {}, isLoading: !1 },
        E = (e) => (0, N.ej)(e, N.Bs.stock, { maxFraction: 4 });
      function D(e) {
        var t, n;
        let {
            market: i,
            series: o,
            auction: h,
            split: f,
            mode: v,
            onMode: b,
            onOpen: g,
            onSubscribe: j,
            busyLabel: k,
            blocker: w,
            account: S = R,
            className: A,
          } = e,
          D = (0, a.useId)(),
          L = (0, a.useId)(),
          O = (0, a.useId)(),
          z = (0, a.useId)(),
          [_, K] = (0, a.useState)("1"),
          [q, $] = (0, a.useState)(!1),
          [G, W] = (0, a.useState)(B),
          [Y, Z] = (0, a.useState)("exact"),
          { facts: V, balances: H } = S,
          Q = i.ticker,
          X = "created" === i.seriesState && !!i.indicativeBasis,
          J = i.indicativeBasis,
          ee = (0, N.C_)(_, N.Bs.stock),
          et = null !== ee ? (0, u.Uj)(ee, N.Bs.stock) : 0,
          en =
            h && "bidding" === h.state && h.currentPrice > 0
              ? { price: h.currentPrice, source: "clock" }
              : { price: f.convex, source: "model" },
          es = q ? "subscribe" : "split",
          ea =
            void 0 !== V.lot && V.lot > 0n && void 0 !== V.reserveStep
              ? V.reserveStep
              : void 0,
          ei = void 0 !== V.lot && V.lot > 0n;
        (0, a.useEffect)(() => {
          void 0 !== ea && W(ea);
        }, [ea]);
        let er = (function (e) {
            var t;
            let {
                token: n,
                spender: s,
                amount: i,
                symbol: r,
                decimals: l,
                owner: c,
              } = e,
              [o, d] = (0, a.useState)(null != (t = e.mode) ? t : "exact"),
              { allowance: u, isLoading: p } = (0, P.Gp)(n, s, c);
            return (0, a.useMemo)(() => {
              let e = void 0 !== u && void 0 !== i && u < i,
                t = void 0 !== i ? (0, N.ck)(i, o) : void 0,
                a =
                  n && s && void 0 !== i
                    ? (0, C.C6)({
                        token: n,
                        spender: s,
                        amount: i,
                        symbol: r,
                        decimals: l,
                        mode: o,
                      })
                    : null;
              return {
                allowance: u,
                isLoading: p,
                needsApproval: e,
                mode: o,
                setMode: d,
                approveAmount: t,
                step: a,
                chain: function () {
                  for (
                    var t = arguments.length, n = Array(t), s = 0;
                    s < t;
                    s++
                  )
                    n[s] = arguments[s];
                  return a && (e || void 0 === u) ? [a, ...n] : n;
                },
              };
            }, [u, p, i, o, n, s, r, l]);
          })({
            token: i.token.address,
            spender: null == o ? void 0 : o.address,
            amount: null != ee ? ee : void 0,
            symbol: Q,
            decimals: N.Bs.stock,
            mode: Y,
          }),
          el =
            "" !== _.trim() && null === ee
              ? "Not a valid amount \xb7 up to ".concat(N.Bs.stock, " decimals")
              : null,
          ec =
            "split" === v
              ? null !=
                (n =
                  null !=
                  (t =
                    null != w
                      ? w
                      : V.factoryPaused
                      ? "Guardian pause active \xb7 split and subscribe halted \xb7 merge and unsubscribe still run"
                      : V.stockPaused
                      ? "Issuer pause active \xb7 Stock Token transfers revert"
                      : V.blocked
                      ? "Address blocked on the issuer registry"
                      : void 0 !== V.vaultBalance &&
                        void 0 !== V.totalSupply &&
                        V.vaultBalance < V.totalSupply
                      ? "Vault in deficit \xb7 split refused"
                      : "subscribe" === es && !1 === V.canAddLot
                      ? "Subscriptions closed \xb7 the auction has started"
                      : null)
                    ? t
                    : el)
                ? n
                : (function (e) {
                    let { units: t, symbol: n, facts: s, balances: a } = e;
                    if (null === t) return "Enter an amount";
                    if (t <= 0n) return "Amount must be above zero";
                    if (
                      void 0 !== s.maxUnitsPerTx &&
                      s.maxUnitsPerTx > 0n &&
                      t > s.maxUnitsPerTx
                    )
                      return "Per-transaction cap is "
                        .concat(U(s.maxUnitsPerTx), " ")
                        .concat(n);
                    if (void 0 !== s.maxUnits && void 0 !== s.totalSupply) {
                      let e =
                        s.maxUnits > s.totalSupply
                          ? s.maxUnits - s.totalSupply
                          : 0n;
                      if (t > e)
                        return 0n === e
                          ? "Series cap reached"
                          : "Series cap \xb7 "
                              .concat(U(e), " ")
                              .concat(n, " left");
                    }
                    return void 0 !== a.stock && t > a.stock
                      ? "Balance is ".concat(U(a.stock), " ").concat(n)
                      : null;
                  })({ kind: es, units: ee, symbol: Q, facts: V, balances: H })
              : null,
          eo =
            void 0 !== V.maxUnitsPerTx &&
            V.maxUnitsPerTx > 0n &&
            null !== ee &&
            ee > V.maxUnitsPerTx,
          ed = !!k,
          eu = H.stock,
          ep = q ? "Subscribe" : "Split",
          em = c.KO && (er.needsApproval || void 0 === er.allowance),
          ex = null != k ? k : em ? "Approve ".concat(Q, " → ").concat(ep) : ep,
          eh = (0, s.jsx)("div", {
            role: "group",
            "aria-label": "Position type",
            className:
              "inline-flex shrink-0 rounded-pill border border-line bg-forest-deeper p-0.5",
            children: ["split", "buy"].map((e) =>
              (0, s.jsx)(
                "button",
                {
                  type: "button",
                  "aria-pressed": v === e,
                  onClick: () => b(e),
                  className: (0, p.cn)(
                    "whitespace-nowrap rounded-pill px-2.5 py-1 text-[11px] transition-colors",
                    v === e
                      ? "buy" === e
                        ? "bg-lime text-ink"
                        : "bg-forest text-ivory"
                      : "text-muted hover:text-fg"
                  ),
                  children: "split" === e ? "Split" : "Buy ".concat(x.TE),
                },
                e
              )
            ),
          });
        return (0, s.jsxs)(l.Zp, {
          className: (0, p.cn)("flex min-w-0 flex-col gap-4", A),
          children: [
            (0, s.jsxs)("div", {
              className: "flex items-center justify-between gap-3",
              children: [
                (0, s.jsx)("h2", {
                  className: "min-w-0 text-sm font-semibold text-fg",
                  children: "Position Preview",
                }),
                eh,
              ],
            }),
            (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)("div", {
                  className: "flex items-baseline justify-between gap-2",
                  children: [
                    (0, s.jsx)("label", {
                      htmlFor: D,
                      className: "text-xs text-muted",
                      children:
                        "split" === v
                          ? "Deposit (".concat(Q, " units)")
                          : "Upside units",
                    }),
                    "split" === v && void 0 !== eu
                      ? (0, s.jsxs)("button", {
                          type: "button",
                          onClick: () => K((0, N.WZ)(eu, N.Bs.stock)),
                          className:
                            "font-mono text-[11px] tnum text-muted underline-offset-2 hover:text-fg hover:underline",
                          "aria-label": "Use the whole balance, "
                            .concat(E(eu), " ")
                            .concat(Q),
                          children: ["Balance ", E(eu), " \xb7 Max"],
                        })
                      : null,
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "mt-1.5 flex items-center gap-2 rounded-lg border border-rule bg-forest-deeper px-3 transition-colors focus-within:border-lime",
                  children: [
                    (0, s.jsx)("input", {
                      id: D,
                      type: "text",
                      inputMode: "decimal",
                      autoComplete: "off",
                      value: _,
                      onChange: (e) => K(e.target.value),
                      "aria-invalid": eo || !!el || void 0,
                      "aria-describedby": el
                        ? "".concat(D, "-err")
                        : ec
                        ? z
                        : void 0,
                      className:
                        "h-9 w-full min-w-0 bg-transparent font-mono text-sm tnum text-fg outline-none placeholder:text-dim",
                      placeholder: "0.0",
                    }),
                    (0, s.jsx)("span", {
                      className: "font-mono text-xs text-muted",
                      children: "split" === v ? Q : "Upside",
                    }),
                  ],
                }),
                el
                  ? (0, s.jsx)("p", {
                      id: "".concat(D, "-err"),
                      className: "mt-1 text-[11px] text-warning",
                      children: el,
                    })
                  : null,
              ],
            }),
            "split" === v
              ? (0, s.jsxs)(l.l7, {
                  children: [
                    (0, s.jsx)(l.jP, {
                      label: "Deposit",
                      value: "".concat((0, u.bu)(et, 4), " ").concat(Q),
                      hint: (0, u.dR)(et * i.price),
                    }),
                    (0, s.jsx)(l.jP, {
                      label: "You receive ".concat(x._b),
                      value: "".concat((0, u.bu)(et, 4), " ").concat(x._b),
                      hint: "".concat((0, u.dR)(et * f.one), " \xb7 model"),
                      tone: "income",
                    }),
                    (0, s.jsx)(l.jP, {
                      label: q
                        ? "".concat(x.TE, " to auction")
                        : "You receive ".concat(x.TE),
                      value: "".concat((0, u.bu)(et, 4), " ").concat(x.TE),
                      hint: "".concat((0, u.dR)(et * f.convex), " \xb7 model"),
                      tone: "upside",
                    }),
                    (0, s.jsx)(l.jP, {
                      label: "Cap price (K)",
                      value: (0, u.dR)(f.capPrice),
                      hint: f.seriesK
                        ? "P0 ".concat((0, u.dR)(f.p0))
                        : X
                        ? m.Qw
                        : "indicative",
                      stack: X,
                    }),
                  ],
                })
              : (0, s.jsxs)(l.l7, {
                  children: [
                    (0, s.jsx)(l.jP, {
                      label: "Cost",
                      value: (0, u.dR)(et * en.price),
                      hint: "clock" === en.source ? "at the clock" : "model",
                    }),
                    (0, s.jsx)(l.jP, {
                      label: "Units",
                      value: "".concat((0, u.bu)(et, 4), " Upside"),
                      hint: "".concat((0, u.dR)(en.price), " / unit"),
                      tone: "upside",
                    }),
                    (0, s.jsx)(l.jP, {
                      label: "Breakeven",
                      value: (0, u.dR)((0, d.bj)(f.capPrice, en.price)),
                      hint: "K "
                        .concat((0, u.dR)(f.capPrice))
                        .concat(X ? " \xb7 indicative" : ""),
                    }),
                    (0, s.jsx)(l.jP, {
                      label: "Payoff at +20%",
                      value: (0, u.dR)(et * (0, d.Dn)(f.spot, f.capPrice, 0.2)),
                      hint: ""
                        .concat(
                          (0, u.dR)((0, d.Dn)(f.spot, f.capPrice, 0.2)),
                          " / unit from "
                        )
                        .concat((0, u.dR)(f.spot)),
                      tone: "success",
                    }),
                  ],
                }),
            c.KO && o ? (0, s.jsx)(I, { ticker: Q, account: S }) : null,
            "split" === v
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsxs)("label", {
                      htmlFor: L,
                      className:
                        "flex cursor-pointer items-start gap-2.5 text-xs text-muted",
                      children: [
                        (0, s.jsx)("input", {
                          id: L,
                          type: "checkbox",
                          checked: q,
                          onChange: (e) => {
                            $(e.target.checked),
                              null == j || j(e.target.checked);
                          },
                          className: "mt-0.5 size-3.5 accent-lime",
                        }),
                        (0, s.jsx)("span", {
                          children:
                            "Sell the Upside at this epoch's auction (subscribe): Upside goes to the auction, Income to you, USDG proceeds claimable here after the round.",
                        }),
                      ],
                    }),
                    q && o
                      ? (0, s.jsx)(F, {
                          step: G,
                          onChange: W,
                          series: o,
                          auction: h,
                          indicativePrice: null == J ? void 0 : J.price,
                          locked: ea,
                          disabled: ed,
                          className: "-mt-1",
                        })
                      : null,
                    c.KO && o
                      ? (0, s.jsxs)("label", {
                          htmlFor: O,
                          className:
                            "-mt-1 flex cursor-pointer items-start gap-2.5 text-[11px] text-dim",
                          children: [
                            (0, s.jsx)("input", {
                              id: O,
                              type: "checkbox",
                              checked: "max" === Y,
                              onChange: (e) =>
                                Z(e.target.checked ? "max" : "exact"),
                              className: "mt-0.5 size-3.5 accent-lime",
                            }),
                            (0, s.jsxs)("span", {
                              className: "break-words",
                              children: [
                                "Approve unlimited ",
                                Q,
                                " to the series. Off: the approval is the exact deposit",
                                void 0 !== er.allowance
                                  ? " (current allowance ".concat(
                                      (0, N.yb)(er.allowance, N.Bs.stock, Q, {
                                        maxFraction: 4,
                                      }),
                                      ")"
                                    )
                                  : "",
                                ".",
                              ],
                            }),
                          ],
                        })
                      : null,
                  ],
                })
              : (0, s.jsxs)("p", {
                  className: "text-[11px] text-dim",
                  children: [
                    "clock" === en.source
                      ? "The clock steps down every 30 s until demand meets supply; every winner pays the clearing price."
                      : "".concat(
                          m.ER,
                          ". Bids are placed while the epoch's auction is open."
                        ),
                    " ",
                    "Talis runs no venue for Upside mid-epoch: the auction is where it is bought.",
                  ],
                }),
            "split" === v && X && J
              ? (0, s.jsxs)("p", {
                  className: "-mt-2 text-[11px] text-dim",
                  children: [
                    "P0 and K are fixed at the open",
                    J.due ? "" : " (after ".concat((0, y.fm)(J), ")"),
                    "; until then K is the feed price \xd7 (1 + cap). Subscribed ",
                    x.TE,
                    " enters the first auction",
                    J.auctionStartsAt > 0
                      ? ", expected ".concat((0, y.Js)(J))
                      : "",
                    ".",
                  ],
                })
              : "split" !== v || f.seriesK
              ? null
              : (0, s.jsx)("p", {
                  className: "-mt-2 text-[11px] text-dim",
                  children: (0, m._9)(i, f),
                }),
            (0, s.jsxs)("div", {
              className: "flex flex-col gap-2",
              children: [
                "split" === v
                  ? (0, s.jsx)(l.$n, {
                      variant: "primary",
                      size: "lg",
                      className: "w-full min-w-0",
                      disabled: !!ec || ed,
                      "aria-describedby": ec ? z : void 0,
                      iconRight: (0, s.jsx)(r.A, {
                        className: "size-4",
                        "aria-hidden": "true",
                      }),
                      onClick: () => {
                        null !== ee &&
                          g(
                            q
                              ? {
                                  kind: "subscribe",
                                  units: ee,
                                  reserveStep: G,
                                  approve: Y,
                                }
                              : { kind: "split", units: ee, approve: Y }
                          );
                      },
                      children: (0, s.jsx)("span", {
                        className: "min-w-0 whitespace-normal leading-tight",
                        children: ex,
                      }),
                    })
                  : X
                  ? (0, s.jsx)(l.$n, {
                      variant: "upside",
                      size: "lg",
                      className: "w-full",
                      disabled: !0,
                      "aria-describedby": z,
                      children: "Auction is scheduled at the open",
                    })
                  : (0, s.jsx)(l.$n, {
                      variant: "upside",
                      size: "lg",
                      className: "w-full",
                      href: "/app/auctions?t=".concat(Q),
                      iconRight: (0, s.jsx)(T.A, {
                        className: "size-4",
                        "aria-hidden": "true",
                      }),
                      children: "Bid at the auction",
                    }),
                "split" === v && ec
                  ? (0, s.jsx)("p", {
                      id: z,
                      role: "status",
                      className: "text-center text-xs tnum text-muted",
                      children: ec,
                    })
                  : "buy" === v && w
                  ? (0, s.jsx)("p", {
                      id: z,
                      role: "status",
                      className: "text-center text-xs tnum text-muted",
                      children:
                        X && J
                          ? "Bids open on the clock".concat(
                              J.auctionStartsAt > 0
                                ? " \xb7 expected ".concat((0, y.Js)(J))
                                : ""
                            )
                          : w,
                    })
                  : null,
              ],
            }),
            "split" === v && c.KO && o && ei
              ? (0, s.jsx)(M, { ticker: Q, account: S, sending: ed, onOpen: g })
              : null,
          ],
        });
      }
      function I(e) {
        let { ticker: t, account: n } = e,
          { balances: a, facts: i } = n,
          r = (e) => (void 0 === e ? "—" : E(e)),
          c = n.account ? void 0 : "connect a wallet";
        return (0, s.jsxs)(l.l7, {
          className: "border-t border-line pt-1",
          children: [
            (0, s.jsx)(l.jP, {
              label: "Your ".concat(t),
              value: r(a.stock),
              hint: c,
              tone: "muted",
            }),
            (0, s.jsx)(l.jP, {
              label: "Your ".concat(x._b),
              value: r(a.one),
              hint: c,
              tone: "income",
            }),
            (0, s.jsx)(l.jP, {
              label: "Your ".concat(x.TE),
              value: r(a.convex),
              hint:
                void 0 !== i.lot && i.lot > 0n
                  ? "+ ".concat(E(i.lot), " in the auction lot")
                  : c,
              tone: "upside",
            }),
          ],
        });
      }
      function M(e) {
        var t;
        let { ticker: n, account: i, sending: r, onOpen: c } = e,
          o = (0, a.useId)(),
          d = (0, a.useId)(),
          { facts: u, balances: p } = i,
          m = null != (t = u.lot) ? t : 0n,
          [x, h] = (0, a.useState)(() => (0, N.WZ)(m, N.Bs.stock)),
          f = (0, N.C_)(x, N.Bs.stock),
          v =
            "" !== x.trim() && null === f
              ? "Not a valid amount \xb7 up to ".concat(N.Bs.stock, " decimals")
              : null,
          b =
            null != v
              ? v
              : !1 === u.canAddLot
              ? "Lot locked \xb7 the auction has started"
              : null === f
              ? "Enter an amount"
              : f <= 0n
              ? "Amount must be above zero"
              : void 0 !== u.lot && f > u.lot
              ? "Your lot is ".concat(U(u.lot), " Upside")
              : void 0 !== p.one && f > p.one
              ? "Unsubscribe burns Income \xb7 you hold ".concat(U(p.one))
              : null;
        return (0, s.jsxs)("div", {
          className: "flex flex-col gap-2 border-t border-line pt-4",
          children: [
            (0, s.jsxs)("div", {
              className: "flex items-baseline justify-between gap-2",
              children: [
                (0, s.jsxs)("p", {
                  className: "text-xs text-muted",
                  children: [
                    "In the auction lot: ",
                    (0, s.jsxs)("span", {
                      className: "font-mono tnum text-fg",
                      children: [E(m), " Upside"],
                    }),
                    void 0 !== u.reserveStep
                      ? (0, s.jsxs)("span", {
                          className: "text-dim",
                          children: [" \xb7 reserve #", u.reserveStep],
                        })
                      : null,
                  ],
                }),
                (0, s.jsx)("button", {
                  type: "button",
                  onClick: () => h((0, N.WZ)(m, N.Bs.stock)),
                  className:
                    "font-mono text-[11px] tnum text-muted underline-offset-2 hover:text-fg hover:underline",
                  children: "Max",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                (0, s.jsx)("label", {
                  htmlFor: o,
                  className: "sr-only",
                  children: "Units to unsubscribe",
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-rule bg-forest-deeper px-3 transition-colors focus-within:border-lime",
                  children: [
                    (0, s.jsx)("input", {
                      id: o,
                      type: "text",
                      inputMode: "decimal",
                      autoComplete: "off",
                      value: x,
                      onChange: (e) => h(e.target.value),
                      "aria-invalid": !!v || void 0,
                      "aria-describedby": b ? d : void 0,
                      className:
                        "h-8 w-full min-w-0 bg-transparent font-mono text-sm tnum text-fg outline-none",
                    }),
                    (0, s.jsx)("span", {
                      className: "font-mono text-xs text-muted",
                      children: "Upside",
                    }),
                  ],
                }),
                (0, s.jsx)(l.$n, {
                  variant: "secondary",
                  size: "sm",
                  disabled: !!b || r,
                  onClick: () => {
                    null !== f && c({ kind: "unsubscribe", units: f });
                  },
                  children: "Unsubscribe",
                }),
              ],
            }),
            (0, s.jsx)("p", {
              id: d,
              className: "text-[11px] text-dim",
              children:
                null != b
                  ? b
                  : "Burns the same amount of your Income and pays ".concat(
                      n,
                      " back from the vault. Allowed until the auction starts, and between rounds after a no-sale."
                    ),
            }),
          ],
        });
      }
      var L = n(4092),
        O = n(32398),
        z = n(12533);
      let _ = {
        idle: null,
        connecting: "Connecting wallet…",
        switching: "Switching chain…",
        approving: "Approving…",
        confirming: "Confirm in wallet…",
        done: null,
        error: null,
      };
      var K = n(90756),
        q = n(28879),
        $ = n(37762),
        G = n(32916),
        W = n(89764),
        Y = n(42902),
        Z = n(93617),
        V = n(36901);
      let H = (0, q.U)([
          "function paused() view returns (bool)",
          "function isBlocked(address account) view returns (bool)",
          "function totalSupply() view returns (uint256)",
          "function balanceOf(address owner) view returns (uint256)",
          "function maxUnits() view returns (uint256)",
          "function maxUnitsPerTx() view returns (uint256)",
          "function canAddLot() view returns (bool)",
          "function lotOf(address who) view returns (uint256)",
          "function reserveOf(address who) view returns (uint32)",
        ]),
        Q = "0x0000000000000000000000000000000000000000";
      var X = n(61396),
        J = n(54490),
        ee = n(32410);
      function et(e) {
        return "candidate" !== e.status;
      }
      function en() {
        var e, t;
        let n = (0, i.useRouter)(),
          d = (0, i.useSearchParams)(),
          {
            data: p,
            isLoading: x,
            error: f,
            refetch: v,
            isFetching: g,
          } = (0, o.Vy)(),
          j = null == (e = d.get("t")) ? void 0 : e.toUpperCase(),
          w = (0, a.useMemo)(() => {
            var e, t;
            if (p && 0 !== p.length)
              return null !=
                (t =
                  null != (e = p.find((e) => e.ticker === j))
                    ? e
                    : p.find((e) => "AAPL" === e.ticker))
                ? t
                : p[0];
          }, [p, j]),
          { data: N } = (0, o.NY)(null == w ? void 0 : w.ticker),
          { data: T } = (0, o.dm)(null == w ? void 0 : w.ticker),
          [U, B] = (0, a.useState)(5),
          [F, R] = (0, a.useState)("split"),
          [E, I] = (0, a.useState)(!1),
          [M, q] = (0, a.useState)(null),
          [en, es] = (0, a.useState)(!1),
          [ea, ei] = (0, a.useState)(!1),
          er = (function () {
            let e = (0, z.vr)(),
              [t, n] = (0, a.useState)(null),
              s = (0, a.useCallback)(
                async (t, n, s) => {
                  if (!s.address)
                    throw Error("This series has no on-chain address");
                  if ("unsubscribe" === t.kind)
                    return void (await e.send(
                      (0, C._m)({ series: s.address, units: t.units })
                    ));
                  let a = n.token.address;
                  if (!a) throw Error("This market has no Stock Token address");
                  let i = {
                    series: s.address,
                    stock: a,
                    units: t.units,
                    symbol: n.token.ticker,
                    approve: t.approve,
                  };
                  await e.send(
                    "subscribe" === t.kind
                      ? (0, C.GB)({ ...i, reserveStep: t.reserveStep })
                      : (0, C.Ms)(i)
                  );
                },
                [e]
              ),
              i = (0, a.useCallback)(
                async (e, t, a) => {
                  if (c.KO) {
                    n(null);
                    try {
                      await s(e, t, a);
                    } catch (e) {
                      n(e instanceof Error ? e.message : "Transaction failed");
                    }
                  }
                },
                [s]
              ),
              r = t
                ? "error"
                : (function (e) {
                    switch (e.status) {
                      case "idle":
                      case "preview":
                        return "idle";
                      case "connecting":
                        return "connecting";
                      case "switching":
                        return "switching";
                      case "simulating":
                      case "wallet":
                      case "pending":
                        var t;
                        return (
                          null == (t = e.currentLabel)
                            ? void 0
                            : t.startsWith("Approve")
                        )
                          ? "approving"
                          : "confirming";
                      case "confirmed":
                        return "done";
                      default:
                        return "error";
                    }
                  })(e),
              l = (0, a.useCallback)(() => {
                n(null), e.reset();
              }, [e]);
            return (0, a.useMemo)(() => {
              var n, s, a;
              return {
                run: i,
                status: r,
                busyLabel: _[r],
                hash: null != (s = e.hash) ? s : null,
                error:
                  null != t
                    ? t
                    : "failed" === e.status ||
                      "not-included" === e.status ||
                      "timeout" === e.status
                    ? null != (a = null == (n = e.error) ? void 0 : n.message)
                      ? a
                      : "Transaction failed"
                    : null,
                reset: l,
                tx: e,
                bridge: null,
              };
            }, [i, r, e, null, t, l]);
          })(),
          el = (function (e, t) {
            var n;
            let s = (0, $.U)(),
              i = (0, V.qK)(),
              { address: r } = (0, G.F)(),
              l = i ? r : void 0,
              o = null == t ? void 0 : t.address,
              d = null == e ? void 0 : e.token.address,
              u =
                null == e || null == (n = e.registration) ? void 0 : n.registry,
              p = null == t ? void 0 : t.auction,
              m = null == t ? void 0 : t.incomeToken,
              x = (0, Y.h)(),
              h = (0, K.I)({
                queryKey: Z.y.read(
                  c.bQ,
                  null != o ? o : "0x",
                  "account-facts",
                  null == l ? void 0 : l.toLowerCase()
                ),
                queryFn: async () => {
                  var e;
                  let t = (0, W.B)(s, { chainId: c.bQ });
                  if (!t) throw Error("No RPC client");
                  let n = null != l ? l : Q,
                    a = await t.multicall({
                      allowFailure: !0,
                      contracts: [
                        {
                          address: null != x ? x : Q,
                          abi: H,
                          functionName: "paused",
                        },
                        {
                          address: null != d ? d : Q,
                          abi: H,
                          functionName: "paused",
                        },
                        {
                          address: null != u ? u : Q,
                          abi: H,
                          functionName: "isBlocked",
                          args: [n],
                        },
                        {
                          address: null != m ? m : Q,
                          abi: H,
                          functionName: "totalSupply",
                        },
                        {
                          address: null != d ? d : Q,
                          abi: H,
                          functionName: "balanceOf",
                          args: [o],
                        },
                        { address: o, abi: H, functionName: "maxUnits" },
                        { address: o, abi: H, functionName: "maxUnitsPerTx" },
                        {
                          address: null != p ? p : Q,
                          abi: H,
                          functionName: "canAddLot",
                        },
                        {
                          address: null != p ? p : Q,
                          abi: H,
                          functionName: "lotOf",
                          args: [n],
                        },
                        {
                          address: null != p ? p : Q,
                          abi: H,
                          functionName: "reserveOf",
                          args: [n],
                        },
                      ],
                    }),
                    i = (e, t) => {
                      let n = a[e];
                      return t && (null == n ? void 0 : n.status) === "success"
                        ? n.result
                        : void 0;
                    },
                    r = !!l,
                    h = i(8, !!p && r);
                  return {
                    factoryPaused: i(0, !!x),
                    stockPaused: i(1, !!d),
                    blocked: i(2, !!u && r),
                    totalSupply: i(3, !!m),
                    vaultBalance: i(4, !!d),
                    maxUnits: i(5, !0),
                    maxUnitsPerTx: i(6, !0),
                    canAddLot: i(7, !!p),
                    lot: h,
                    reserveStep:
                      void 0 !== h
                        ? Number(null != (e = i(9, !0)) ? e : 0)
                        : void 0,
                  };
                },
                enabled: c.KO && i && !!o,
                staleTime: 1e4,
                refetchInterval: 3e4,
              }),
              f = (0, a.useMemo)(
                () => [d, m, null == t ? void 0 : t.upsideToken],
                [d, m, null == t ? void 0 : t.upsideToken]
              ),
              v = (0, P.mK)(f);
            return (0, a.useMemo)(() => {
              var e;
              let n = (e) => {
                var t;
                return e
                  ? null == (t = v.data)
                    ? void 0
                    : t[e.toLowerCase()]
                  : void 0;
              };
              return {
                facts: null != (e = h.data) ? e : {},
                balances: {
                  stock: n(d),
                  one: n(m),
                  convex: n(null == t ? void 0 : t.upsideToken),
                },
                isLoading: c.KO && !!o && h.isLoading,
                account: l,
              };
            }, [
              h.data,
              h.isLoading,
              v.data,
              d,
              m,
              null == t ? void 0 : t.upsideToken,
              o,
              l,
            ]);
          })(w, N);
        (0, a.useEffect)(() => {
          w && B(w.capBps / 100);
        }, [null == w ? void 0 : w.ticker, null == w ? void 0 : w.capBps]);
        let ec = (0, a.useMemo)(() => (w ? (0, m.A)(w, U) : null), [w, U]),
          eo = (0, a.useMemo)(() => (p ? (E ? p : p.filter(et)) : []), [p, E]),
          ed =
            (null != (t = null == p ? void 0 : p.length) ? t : 0) > eo.length,
          eu = (0, a.useMemo)(
            () =>
              w
                ? void 0 === N
                  ? "Loading series…"
                  : (function (e) {
                      let {
                        market: t,
                        series: n,
                        auction: s,
                        mode: a,
                        subscribe: i,
                        now: r,
                      } = e;
                      if (!t.seriesId || !n) {
                        var l;
                        if (
                          (null == (l = t.registration)
                            ? void 0
                            : l.enabled) === !1
                        )
                          return "Ticker disabled on the factory \xb7 no series can be created";
                        let e = t.nextSeries;
                        if (!e) return "No ".concat(t.ticker, " series yet");
                        let n = 0 === e.epoch ? "First" : "Next";
                        if (r < e.createFrom)
                          return ""
                            .concat(n, " series can be created from ")
                            .concat((0, u._$)(1e3 * e.createFrom));
                        let s = (0, y.o0)(e, r);
                        return "today" === s
                          ? "No series yet \xb7 creatable now \xb7 opens today"
                          : "opened" === s
                          ? "No series yet \xb7 can be created and opened now"
                          : "No series yet \xb7 creatable since ".concat(
                              (0, u._$)(1e3 * e.createFrom)
                            );
                      }
                      return "settled" === n.state
                        ? "Series settled \xb7 claims and merge only"
                        : "split" === a
                        ? "created" === n.state &&
                          r > n.openWindowDay + 30 * O.d_
                          ? "Series never opened \xb7 merge only"
                          : i &&
                            !(function (e, t) {
                              if (!e) return !0;
                              switch (e.state) {
                                case "unscheduled":
                                case "nosale":
                                  return !0;
                                case "scheduled":
                                  return t < e.startsAt;
                                default:
                                  return !1;
                              }
                            })(s, r)
                          ? "Subscriptions closed \xb7 the auction has started"
                          : null
                        : "created" === n.state
                        ? "Auction is scheduled at the open"
                        : s && "unscheduled" !== s.state
                        ? "scheduled" === s.state
                          ? "Auction starts ".concat(
                              (0, u.lF)(1e3 * s.startsAt)
                            )
                          : "bidding" === s.state
                          ? null
                          : "nosale" === s.state
                          ? "Round sold nothing \xb7 re-run pending"
                          : "Auction closed"
                        : "Auction not scheduled \xb7 bids open after the series opens";
                    })({
                      market: w,
                      series: N,
                      auction: T,
                      mode: F,
                      subscribe: ea,
                      now: Date.now() / 1e3,
                    })
                : null,
            [w, N, T, F, ea]
          );
        function ep(e) {
          if (!eu) {
            if ((q(e), !c.KO || !w || !N)) return void es(!0);
            er.reset(), er.run(e, w, N);
          }
        }
        return f
          ? (0, s.jsxs)("div", {
              className: "flex flex-col items-start gap-3",
              children: [
                (0, s.jsxs)("p", {
                  role: "alert",
                  className: "break-words text-sm text-danger",
                  children: ["Could not load markets: ", (0, ee.U)(f)],
                }),
                (0, s.jsx)(l.$n, {
                  variant: "secondary",
                  size: "sm",
                  onClick: () => void v(),
                  disabled: g,
                  children: g ? "Retrying…" : "Retry",
                }),
              ],
            })
          : x || !p
          ? (0, s.jsx)(X.g, { rows: 4 })
          : w && ec
          ? (0, s.jsxs)("div", {
              className: "flex flex-col gap-4",
              children: [
                er.bridge,
                (0, s.jsxs)("div", {
                  className:
                    "grid gap-4 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start",
                  children: [
                    (0, s.jsx)(b.yo, {
                      market: w,
                      markets: p,
                      onSelect: (e) => n.replace("https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=0xc8885f68acb213b144fda1835d61ef05d88ad687?t=".concat(e)),
                    }),
                    (0, s.jsx)(A, {
                      market: w,
                      capBps: ec.capBps,
                      capPrice: ec.capPrice,
                      capPriceHint:
                        "created" !== w.seriesState || ec.seriesK
                          ? (0, m._9)(w, ec)
                          : "P0 and K are fixed by open() after the open window.",
                      capPriceTag:
                        "created" !== w.seriesState || ec.seriesK
                          ? void 0
                          : m.Qw,
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start",
                  children: [
                    (0, s.jsx)(h, {
                      capPct: U,
                      onCapChange: B,
                      split: ec,
                      mode: F,
                      onMode: R,
                      ticker: w.ticker,
                    }),
                    (0, s.jsx)(D, {
                      market: w,
                      series: N,
                      auction: T,
                      split: ec,
                      mode: F,
                      onMode: R,
                      onOpen: ep,
                      onSubscribe: ei,
                      busyLabel: er.busyLabel,
                      blocker: eu,
                      account: el,
                    }),
                  ],
                }),
                c.KO
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(J.R, {
                          tx: er.tx,
                          children:
                            M &&
                            !eu &&
                            ("not-included" === er.tx.status ||
                              "timeout" === er.tx.status)
                              ? (0, s.jsxs)(l.$n, {
                                  size: "sm",
                                  variant: "secondary",
                                  onClick: () => ep(M),
                                  children: [
                                    "Send again \xb7 ",
                                    "unsubscribe" === M.kind
                                      ? "Unsubscribe"
                                      : "subscribe" === M.kind
                                      ? "Subscribe"
                                      : "Split",
                                  ],
                                })
                              : null,
                        }),
                        "idle" === er.tx.status && er.error
                          ? (0, s.jsx)("p", {
                              role: "alert",
                              className: "text-xs text-danger",
                              children: er.error,
                            })
                          : null,
                      ],
                    })
                  : null,
                (0, s.jsx)(l.Zp, { children: (0, s.jsx)(L.s, {}) }),
                (0, s.jsxs)(l.Zp, {
                  as: "section",
                  "aria-labelledby": "markets-table-title",
                  children: [
                    (0, s.jsx)(l.aR, {
                      title: (0, s.jsx)("span", {
                        id: "markets-table-title",
                        children: "Markets",
                      }),
                      aside:
                        ed || E
                          ? (0, s.jsxs)("button", {
                              type: "button",
                              onClick: () => I((e) => !e),
                              className:
                                "inline-flex items-center gap-1 rounded-md text-xs text-muted hover:text-fg",
                              children: [
                                E ? "Active only" : "View all",
                                (0, s.jsx)(r.A, {
                                  className: "size-3",
                                  "aria-hidden": "true",
                                }),
                              ],
                            })
                          : null,
                    }),
                    (0, s.jsx)(k, { markets: eo }),
                    (0, s.jsxs)("p", {
                      className: "mt-3 text-[11px] text-muted tnum",
                      children: [m.ER, " \xb7 ", m.lg],
                    }),
                  ],
                }),
                (0, s.jsx)(S, {
                  open: en,
                  onClose: () => es(!1),
                  ticker: w.ticker,
                  action: M,
                }),
              ],
            })
          : (0, s.jsx)("p", {
              className: "text-sm text-muted",
              children: "No tickers registered on the factory yet.",
            });
      }
    },
    19007: (e) => {
      e.exports = { headerBackdrop: "markets_headerBackdrop__s4YIT" };
    },
    20829: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      let s = (0, n(99011).A)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    22291: (e, t, n) => {
      "use strict";
      n.d(t, { yo: () => x, Lb: () => p });
      var s = n(72133),
        a = n(40453);
      let i = (0, n(99011).A)("chevron-down", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
      var r = n(84520),
        l = n(36811),
        c = n(91109),
        o = n(85726),
        d = n(19007),
        u = n.n(d);
      function p(e) {
        let t = (e.epoch.settlesAt - e.epoch.openedAt) / 86400;
        return t > 0 ? Math.min(1, Math.max(0, 1 - e.epoch.daysLeft / t)) : 0;
      }
      function m(e) {
        let { market: t, className: n } = e;
        if (t.nextSeries) {
          let e = t.nextSeries,
            a = (0, o.XU)(e);
          return (0, s.jsxs)("span", {
            className: (0, c.cn)(
              "inline-flex items-center gap-3 rounded-pill border border-line bg-forest-deeper py-1.5 pl-3.5 pr-2",
              n
            ),
            children: [
              (0, s.jsxs)("span", {
                className: "flex flex-col leading-tight",
                children: [
                  (0, s.jsxs)("span", {
                    className: "font-mono text-xs tnum text-fg",
                    children: [
                      "Epoch ",
                      (0, l.iI)(e.epoch),
                      " \xb7 ",
                      (0, s.jsx)("span", {
                        className: "text-muted",
                        children: "no series yet",
                      }),
                    ],
                  }),
                  (0, s.jsx)("span", {
                    className: "text-[11px] text-muted",
                    children: a,
                  }),
                ],
              }),
              (0, s.jsx)(r.yY, {
                progress: 0,
                size: 26,
                label: "Epoch "
                  .concat((0, l.iI)(e.epoch), ": no series yet, ")
                  .concat(a),
              }),
            ],
          });
        }
        if ("created" === t.seriesState && t.indicativeBasis) {
          let e = (0, o.Iu)(t.indicativeBasis);
          return (0, s.jsxs)("span", {
            className: (0, c.cn)(
              "inline-flex items-center gap-3 rounded-pill border border-line bg-forest-deeper py-1.5 pl-3.5 pr-2",
              n
            ),
            children: [
              (0, s.jsxs)("span", {
                className: "flex flex-col leading-tight",
                children: [
                  (0, s.jsxs)("span", {
                    className: "font-mono text-xs tnum text-fg",
                    children: [
                      "Epoch ",
                      (0, l.iI)(t.epoch.number),
                      " \xb7 ",
                      (0, s.jsx)("span", {
                        className: "text-muted",
                        children: "created",
                      }),
                    ],
                  }),
                  (0, s.jsx)("span", {
                    className: "text-[11px] text-muted",
                    children: e,
                  }),
                ],
              }),
              (0, s.jsx)(r.yY, {
                progress: 0,
                size: 26,
                label: "Epoch "
                  .concat((0, l.iI)(t.epoch.number), ": created, ")
                  .concat(e),
              }),
            ],
          });
        }
        return (0, s.jsxs)("span", {
          className: (0, c.cn)(
            "inline-flex items-center gap-3 rounded-pill border border-line bg-forest-deeper py-1.5 pl-3.5 pr-2",
            n
          ),
          children: [
            (0, s.jsxs)("span", {
              className: "flex flex-col leading-tight",
              children: [
                (0, s.jsxs)("span", {
                  className: "font-mono text-xs tnum text-fg",
                  children: ["Epoch ", (0, l.iI)(t.epoch.number)],
                }),
                (0, s.jsx)("span", {
                  className: "text-[11px] text-muted",
                  children: (0, l.H_)(t.epoch.daysLeft),
                }),
              ],
            }),
            (0, s.jsx)(r.yY, {
              progress: p(t),
              size: 26,
              label: "Epoch "
                .concat((0, l.iI)(t.epoch.number), ": ")
                .concat((0, l.H_)(t.epoch.daysLeft)),
            }),
          ],
        });
      }
      function x(e) {
        let { market: t, markets: n, onSelect: o, className: d } = e,
          p = t.change24h >= 0,
          x = Number.isNaN(t.change24h);
        return (0, s.jsxs)(r.Zp, {
          className: (0, c.cn)(
            "relative isolate flex flex-col gap-5 overflow-hidden bg-forest-deep",
            d
          ),
          children: [
            (0, s.jsx)(a.default, {
              src: "/brand/bg-income-position.webp",
              alt: "",
              "aria-hidden": "true",
              fill: !0,
              sizes: "(min-width: 1024px) 60vw, 100vw",
              priority: !1,
              className: (0, c.cn)(
                "pointer-events-none -z-10 select-none object-cover object-right",
                u().headerBackdrop
              ),
            }),
            (0, s.jsxs)("div", {
              className: "flex flex-wrap items-start justify-between gap-3",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, s.jsx)(r.xz, { ticker: t.ticker, size: 44, alt: "" }),
                    (0, s.jsxs)("div", {
                      className: "min-w-0",
                      children: [
                        n && o
                          ? (0, s.jsxs)("label", {
                              className: "relative inline-flex items-center",
                              children: [
                                (0, s.jsx)("span", {
                                  className: "sr-only",
                                  children: "Market",
                                }),
                                (0, s.jsx)("select", {
                                  value: t.ticker,
                                  onChange: (e) => o(e.target.value),
                                  className:
                                    "appearance-none rounded-md bg-transparent py-0.5 pl-0 pr-6 font-mono text-base text-fg tnum hover:text-accent",
                                  children: n.map((e) =>
                                    (0, s.jsx)(
                                      "option",
                                      {
                                        value: e.ticker,
                                        className: "bg-forest-deep text-fg",
                                        children: e.ticker,
                                      },
                                      e.ticker
                                    )
                                  ),
                                }),
                                (0, s.jsx)(i, {
                                  className:
                                    "pointer-events-none absolute right-1 size-3.5 text-muted",
                                  "aria-hidden": "true",
                                }),
                              ],
                            })
                          : (0, s.jsx)("p", {
                              className: "font-mono text-base text-fg tnum",
                              children: t.ticker,
                            }),
                        (0, s.jsx)("p", {
                          className: "truncate text-xs text-muted",
                          children: t.token.name,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)(m, { market: t }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "flex flex-wrap items-baseline gap-x-3 gap-y-1",
              children: [
                (0, s.jsx)("span", {
                  className:
                    "font-mono text-3xl font-medium tnum text-fg md:text-4xl",
                  children: (0, l.dR)(t.price),
                }),
                (0, s.jsx)("span", {
                  className: (0, c.cn)(
                    "font-mono text-sm tnum",
                    x ? "text-dim" : p ? "text-success" : "text-muted"
                  ),
                  children: (0, l.Oe)(t.change24h, { decimals: 2 }),
                }),
                (0, s.jsx)("span", {
                  className: "sr-only",
                  children: x ? "24 hour change unavailable" : "24 hour change",
                }),
              ],
            }),
          ],
        });
      }
    },
    23515: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => r });
      var s = n(37539),
        a = n(32132),
        i = n(50625);
      function r() {
        s.r.current || (0, a.Uu)();
        let [e] = (0, i.useState)(s.O.current);
        return e;
      }
    },
    25789: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => o,
        ER: () => d,
        G6: () => i,
        Ln: () => c,
        Qw: () => x,
        Te: () => m,
        _9: () => h,
        fF: () => r,
        lg: () => u,
        mq: () => l,
      });
      var s = n(29142),
        a = n(42726);
      let i = s.nl.capChoicesBps.map((e) => e / 100),
        r = i.map((e, t) => ({ value: t, label: "".concat(e, "%") }));
      function l(e) {
        var t, n;
        return Math.max(
          0,
          i.indexOf(
            ((t = e),
            i.reduce(
              (e, n) => (Math.abs(n - t) < Math.abs(e - t) ? n : e),
              null != (n = i[0]) ? n : 0
            ))
          )
        );
      }
      function c(e) {
        return e.epoch.daysLeft > 0 ? e.epoch.daysLeft : a.Ln.daysToSettlement;
      }
      function o(e, t) {
        var n;
        let s = Math.round(100 * t),
          i = c(e);
        return e.seriesId &&
          e.capBps === s &&
          (null != (n = e.p0) ? n : 0) > 0 &&
          e.capPrice > 0
          ? {
              ...(0, a.p6)({
                spot: e.price,
                p0: e.p0,
                capPrice: e.capPrice,
                capBps: s,
                daysToSettlement: i,
              }),
              seriesK: !0,
            }
          : {
              ...(0, a.oZ)({ p0: e.price, capBps: s, daysToSettlement: i }),
              seriesK: !1,
            };
      }
      let d = "Indicative (model) \xb7 the auction sets the price",
        u = "model at ".concat(Math.round(100 * a.S8.low), "% vol"),
        p = { NVDA: "45–65%" };
      function m(e) {
        let t = e ? p[e.toUpperCase()] : void 0;
        return t
          ? "".concat(u, "; ").concat(e.toUpperCase(), " has run ").concat(t)
          : u;
      }
      let x = "indicative (feed) \xb7 fixed at open";
      function h(e, t) {
        if (!t.seriesK)
          return "created" === e.seriesState
            ? x
            : "K from the feed price \xb7 no series at this cap";
      }
    },
    30983: (e, t, n) => {
      "use strict";
      n.d(t, {
        Es: () => i.E,
        bl: () => s.b,
        Tk: () => u,
        Jm: () => a.J,
        Kf: () => r.K,
      }),
        n(58190);
      var s = n(18133),
        a = n(28301),
        i = n(71280),
        r = n(78936),
        l = n(72133),
        c = n(91109),
        o = n(96373),
        d = n(96816);
      function u(e) {
        var t;
        let {
            label: n,
            value: s,
            delta: a,
            trend: i,
            trendLabel: r,
            asOf: o,
            note: d,
            className: u,
            hero: m,
          } = e,
          x =
            a && "neutral" !== a.upIsGood && "flat" !== a.direction
              ? ("up" === a.direction) === (null == (t = a.upIsGood) || t)
                ? "text-success"
                : "text-danger"
              : "text-muted",
          h =
            (null == a ? void 0 : a.direction) === "up"
              ? "↑"
              : (null == a ? void 0 : a.direction) === "down"
              ? "↓"
              : "→";
        return (0, l.jsxs)("div", {
          className: (0, c.cn)("flex min-w-0 flex-col gap-1.5", u),
          children: [
            (0, l.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                (0, l.jsx)("span", {
                  className: "text-xs text-muted",
                  children: n,
                }),
                o,
              ],
            }),
            (0, l.jsx)("span", {
              className: (0, c.cn)(
                "font-sans font-semibold text-fg [font-variant-numeric:proportional-nums]",
                m
                  ? "text-[48px] leading-none tracking-display"
                  : "text-2xl leading-tight"
              ),
              children: s,
            }),
            a
              ? (0, l.jsxs)("span", {
                  className: (0, c.cn)(
                    "inline-flex items-center gap-1 text-xs",
                    x
                  ),
                  children: [
                    (0, l.jsx)("span", { "aria-hidden": "true", children: h }),
                    (0, l.jsx)("span", {
                      className: "font-mono tnum",
                      children: a.text,
                    }),
                    a.vs
                      ? (0, l.jsx)("span", {
                          className: "text-muted",
                          children: a.vs,
                        })
                      : null,
                    (0, l.jsx)("span", {
                      className: "sr-only",
                      children: a.direction,
                    }),
                  ],
                })
              : null,
            i && i.length > 1
              ? (0, l.jsx)(p, {
                  values: i,
                  label: null != r ? r : "".concat(n, " trend"),
                })
              : null,
            d
              ? (0, l.jsx)("span", {
                  className: "text-[11px] text-muted",
                  children: d,
                })
              : null,
          ],
        });
      }
      function p(e) {
        let { values: t, label: n } = e,
          [s, a] = (0, d.Xx)(t),
          i = o.M$.markerRadius + o.M$.ringWidth,
          r = (0, d.om)([0, t.length - 1], [i, 120 - i]),
          c = (0, d.om)(s === a ? [s - 1, a + 1] : [s, a], [28 - i, i]),
          u = t.map((e, t) => [r(t), c(e)]),
          p = u
            .map((e, t) => {
              let [n, s] = e;
              return ""
                .concat(0 === t ? "M" : "L")
                .concat(n.toFixed(1), " ")
                .concat(s.toFixed(1));
            })
            .join(""),
          m = u[u.length - 2],
          x = u[u.length - 1],
          h = t[0],
          f = t[t.length - 1];
        return (0, l.jsxs)("svg", {
          width: 120,
          height: 28,
          viewBox: "0 0 ".concat(120, " ").concat(28),
          role: "img",
          "aria-label": ""
            .concat(n, ": ")
            .concat(t.length, " points, from ")
            .concat(h, " to ")
            .concat(f),
          className: "block",
          children: [
            (0, l.jsx)("path", {
              d: p,
              fill: "none",
              stroke: "var(--chart-deemphasis)",
              strokeWidth: o.M$.lineWidth,
              strokeLinejoin: "round",
              strokeLinecap: "round",
            }),
            (0, l.jsx)("path", {
              d: "M"
                .concat(m[0].toFixed(1), " ")
                .concat(m[1].toFixed(1), "L")
                .concat(x[0].toFixed(1), " ")
                .concat(x[1].toFixed(1)),
              fill: "none",
              stroke: "var(--chart-emphasis)",
              strokeWidth: o.M$.lineWidth,
              strokeLinecap: "round",
            }),
            (0, l.jsx)("circle", {
              cx: x[0],
              cy: x[1],
              r: o.M$.markerRadius,
              fill: "var(--chart-emphasis)",
              stroke: "var(--chart-surface)",
              strokeWidth: o.M$.ringWidth,
            }),
          ],
        });
      }
      n(93616);
    },
    32132: (e, t, n) => {
      "use strict";
      n.d(t, { Uu: () => i });
      var s = n(37539);
      let a = "undefined" != typeof window;
      function i() {
        if (((s.r.current = !0), a))
          if (window.matchMedia) {
            let e = window.matchMedia("(prefers-reduced-motion)"),
              t = () => (s.O.current = e.matches);
            e.addEventListener("change", t), t();
          } else s.O.current = !1;
      }
    },
    32398: (e, t, n) => {
      "use strict";
      n.d(t, {
        GO: () => l,
        dA: () => r,
        d_: () => s,
        do: () => d,
        pH: () => c,
        tt: () => m,
        vd: () => p,
        xP: () => h,
        yk: () => o,
      });
      let s = 86400,
        a = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          hour: "numeric",
          hourCycle: "h23",
        });
      function i(e) {
        var t, n;
        let s = new Date(1e3 * e),
          i = Number(
            null !=
              (n =
                null == (t = a.formatToParts(s).find((e) => "hour" === e.type))
                  ? void 0
                  : t.value)
              ? n
              : s.getUTCHours()
          );
        return (s.getUTCHours() - i + 24) % 24;
      }
      function r(e) {
        return e - (e % s);
      }
      function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = r(e),
          s = i(n + 43200);
        return n + (t ? 13 : 16) * 3600 + 3600 * s;
      }
      function c(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = l(e, t);
        return { start: n - 1800, end: n };
      }
      let o = 14 * s;
      function d(e, t) {
        let n = new Date(Date.UTC(e, t, 1)).getUTCDay();
        return Date.UTC(e, t, 15 + ((5 - n + 7) % 7)) / 1e3;
      }
      function u(e) {
        let { year: t, m0: n } = {
          year: Math.floor(e / 12),
          m0: ((e % 12) + 12) % 12,
        };
        return d(t, n);
      }
      function p(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          s = e + t,
          a = 0 === t && n > 0 ? r(n) : u(s - 1),
          i = u(s);
        return {
          epoch: t,
          settleMonth: s,
          openWindowDay: a,
          settleDay: i,
          createFrom: a - o,
        };
      }
      let m = 7200;
      function x(e) {
        let t = r(e);
        return t + 37800 + 3600 * i(t + 43200);
      }
      function h(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : () => !1,
          n = r(e);
        for (let a = 0; a < 10; a++, n += s)
          if (
            !(
              !(function (e) {
                let t = new Date(1e3 * r(e)).getUTCDay();
                return t >= 1 && t <= 5;
              })(n) || t(n)
            )
          ) {
            if (e + 1800 <= x(n)) return x(n);
            if (
              e + 1800 <=
              (function (e) {
                let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                return l(e, t) - m - 1800;
              })(n)
            )
              return e + 1800;
          }
      }
    },
    37539: (e, t, n) => {
      "use strict";
      n.d(t, { O: () => s, r: () => a });
      let s = { current: null },
        a = { current: !1 };
    },
    40453: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => a.a });
      var s = n(79869),
        a = n.n(s);
    },
    42902: (e, t, n) => {
      "use strict";
      n.d(t, { h: () => i });
      var s = n(95445),
        a = n(29142);
      function i() {
        var e;
        return null !== a.Bb && void 0 !== a.Bb
          ? a.Bb
          : null == (e = s.b[String(a.bQ)])
          ? void 0
          : e.factory;
      }
    },
    61396: (e, t, n) => {
      "use strict";
      n.d(t, { g: () => i });
      var s = n(72133),
        a = n(91109);
      function i(e) {
        let { rows: t = 3, className: n } = e;
        return (0, s.jsxs)("div", {
          role: "status",
          "aria-live": "polite",
          "aria-busy": "true",
          className: (0, a.cn)("flex flex-col gap-3", n),
          children: [
            (0, s.jsx)("span", { className: "sr-only", children: "Loading…" }),
            Array.from({ length: t }).map((e, t) =>
              (0, s.jsx)(
                "div",
                {
                  "aria-hidden": "true",
                  className:
                    "h-24 animate-pulse rounded-card border border-line bg-raised",
                },
                t
              )
            ),
          ],
        });
      }
    },
    65120: (e, t, n) => {
      "use strict";
      n.d(t, {
        B0: () => a.B0,
        Gy: () => s.Gy,
        MD: () => s.MD,
        MS: () => a.MS,
        Qx: () => a.Qx,
        oA: () => a.oA,
        qn: () => a.qn,
        zf: () => s.zf,
      });
      var s = n(48299),
        a = n(68757);
      n(41474);
    },
    72555: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      let s = (0, n(99011).A)("arrow-right", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    72987: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      let s = (0, n(99011).A)("circle", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ]);
    },
    75647: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      let s = (0, n(99011).A)("circle-slash", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }],
      ]);
    },
    77829: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 16033));
    },
    79869: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return c;
          },
          getImageProps: function () {
            return l;
          },
        });
      let s = n(31727),
        a = n(11090),
        i = n(25626),
        r = s._(n(62898));
      function l(e) {
        let { props: t } = (0, a.getImgProps)(e, {
          defaultLoader: r.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let c = i.Image;
    },
    82283: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      let s = (0, n(99011).A)("external-link", [
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
    85726: (e, t, n) => {
      "use strict";
      n.d(t, {
        Iu: () => x,
        Js: () => f,
        XU: () => l,
        e7: () => h,
        fm: () => m,
        hX: () => c,
        o0: () => i,
        p_: () => r,
        rn: () => o,
      });
      var s = n(32398),
        a = n(36811);
      function i(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Date.now() / 1e3;
        return t >= (0, s.pH)(e.openWindowDay).end
          ? "opened"
          : (0, s.dA)(t) === e.openWindowDay
          ? "today"
          : "upcoming";
      }
      function r(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Date.now() / 1e3,
          n = i(e, t),
          r = (0, s.dA)(t) === e.openWindowDay;
        return "upcoming" === n
          ? "opens ".concat((0, a.XV)(1e3 * e.openWindowDay))
          : "today" === n
          ? "opens today"
          : r
          ? "opened today"
          : "opened ".concat((0, a.XV)(1e3 * e.openWindowDay));
      }
      function l(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Date.now() / 1e3,
          n = r(e, t);
        return t >= e.createFrom
          ? "".concat(n, " \xb7 creatable now")
          : ""
              .concat(n, " \xb7 creatable from ")
              .concat((0, a.XV)(1e3 * e.createFrom));
      }
      function c(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Date.now() / 1e3;
        if (t < e.createFrom) return "Registered \xb7 no series";
        switch (i(e, t)) {
          case "upcoming":
            return "Creatable now \xb7 none yet";
          case "today":
            return "Opens today \xb7 creatable now";
          case "opened":
            return "Opened \xb7 create and open now";
        }
      }
      function o(e) {
        var t, n;
        return (
          !!e.nextSeries &&
          0 === e.nextSeries.epoch &&
          (null != (n = null == (t = e.registration) ? void 0 : t.firstOpenDay)
            ? n
            : 0) > 0
        );
      }
      let d = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          hourCycle: "h23",
          hour: "2-digit",
          minute: "2-digit",
        }),
        u = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          month: "short",
          day: "numeric",
        }),
        p = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          weekday: "short",
          month: "short",
          day: "numeric",
        });
      function m(e) {
        return "".concat(d.format(new Date(1e3 * e.opensAt)), " ET");
      }
      function x(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Date.now() / 1e3;
        if (e.due || t >= e.opensAt) return "open pending \xb7 anyone can call";
        let n = (0, s.dA)(t) === (0, s.dA)(e.opensAt);
        return "opens after "
          .concat(m(e), " ")
          .concat(n ? "today" : u.format(new Date(1e3 * e.opensAt)));
      }
      function h(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Date.now() / 1e3;
        return e.due || t >= e.opensAt
          ? "open pending"
          : (0, s.dA)(t) === (0, s.dA)(e.opensAt)
          ? "opens tonight"
          : "opens ".concat((0, a.XV)(1e3 * e.opensAt));
      }
      function f(e) {
        if (!(e.auctionStartsAt > 0)) return "—";
        let t = new Date(1e3 * e.auctionStartsAt);
        return "".concat(p.format(t), " \xb7 ").concat(d.format(t), " ET");
      }
    },
    93811: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      let s = (0, n(99011).A)("loader-circle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    95445: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => s });
      let s = {
        4663: {
          chainId: 4663,
          factory: "0x8E56E71d805D935F2429bDE5D4Fc988722e6de43",
          feeVault: "0x38441c57EF732795d74061E7533c652a9cB59344",
          usdg: "0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168",
          timestamp: 0x6ab5a70d,
          mode: "direct",
        },
      };
    },
    99011: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => c });
      var s = n(50625);
      let a = (e) => {
          let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
            n ? n.toUpperCase() : t.toLowerCase()
          );
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        i = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t
            .filter((e, t, n) => !!e && "" !== e.trim() && n.indexOf(e) === t)
            .join(" ")
            .trim();
        };
      var r = {
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
      let l = (0, s.forwardRef)((e, t) => {
          let {
            color: n = "currentColor",
            size: a = 24,
            strokeWidth: l = 2,
            absoluteStrokeWidth: c,
            className: o = "",
            children: d,
            iconNode: u,
            ...p
          } = e;
          return (0, s.createElement)(
            "svg",
            {
              ref: t,
              ...r,
              width: a,
              height: a,
              stroke: n,
              strokeWidth: c ? (24 * Number(l)) / Number(a) : l,
              className: i("lucide", o),
              ...(!d &&
                !((e) => {
                  for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t)
                      return !0;
                })(p) && { "aria-hidden": "true" }),
              ...p,
            },
            [
              ...u.map((e) => {
                let [t, n] = e;
                return (0, s.createElement)(t, n);
              }),
              ...(Array.isArray(d) ? d : [d]),
            ]
          );
        }),
        c = (e, t) => {
          let n = (0, s.forwardRef)((n, r) => {
            let { className: c, ...o } = n;
            return (0, s.createElement)(l, {
              ref: r,
              iconNode: t,
              className: i(
                "lucide-".concat(
                  a(e)
                    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                    .toLowerCase()
                ),
                "lucide-".concat(e),
                c
              ),
              ...o,
            });
          });
          return (n.displayName = a(e)), n;
        };
    },
  },
  (e) => {
    e.O(
      0,
      [
        328, 9276, 4133, 755, 3869, 756, 2976, 4520, 592, 9834, 3709, 7727,
        8368, 8473, 4314, 4297, 7358,
      ],
      () => e((e.s = 77829))
    ),
      (_N_E = e.O());
  },
]);
