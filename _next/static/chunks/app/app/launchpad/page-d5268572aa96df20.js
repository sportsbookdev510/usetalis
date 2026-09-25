(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7849],
  {
    9887: (e, t, r) => {
      "use strict";
      r.d(t, { LaunchpadStepper: () => c });
      var s = r(72133),
        a = r(86635),
        n = r(91109),
        i = r(59204);
      function l(e) {
        let { counts: t, className: r } = e,
          a = (e) => {
            var r;
            return (
              0 === e || (null != (r = null == t ? void 0 : t[e]) ? r : 0) > 0
            );
          },
          l = 0;
        for (let e = 0; e < i.Am.length; e++) a(e) && (l = e);
        return (0, s.jsx)("ol", {
          className: (0, n.cn)("grid grid-cols-5 gap-1 md:gap-0", r),
          "aria-label": "Listing pipeline",
          children: i.Am.map((e, r) => {
            var c;
            let { step: o, label: d } = e,
              u = null != (c = null == t ? void 0 : t[r]) ? c : 0,
              m = r === i.Am.length - 1,
              h = a(r),
              x = r === l,
              p = !m && a(r + 1);
            return (0, s.jsxs)(
              "li",
              {
                className: "relative flex flex-col items-center text-center",
                children: [
                  m
                    ? null
                    : (0, s.jsxs)("span", {
                        "aria-hidden": "true",
                        className:
                          "absolute top-5 left-1/2 flex w-full items-center pl-7 pr-6",
                        children: [
                          (0, s.jsx)("span", {
                            className: (0, n.cn)(
                              "h-px flex-1 border-t",
                              p
                                ? "border-income-fill/70"
                                : "border-dashed border-rule"
                            ),
                          }),
                          (0, s.jsx)("span", {
                            className: (0, n.cn)(
                              "-ml-px size-0 border-y-[3px] border-l-[5px] border-y-transparent",
                              p ? "border-l-income-fill/70" : "border-l-rule"
                            ),
                          }),
                        ],
                      }),
                  (0, s.jsx)("span", {
                    "aria-current": x ? "step" : void 0,
                    className: (0, n.cn)(
                      "relative z-10 inline-flex size-10 items-center justify-center rounded-full border font-mono text-sm tnum transition-colors",
                      x
                        ? "border-lime bg-lime text-ink shadow-[0_0_0_4px_rgba(204,228,0,0.18)]"
                        : h
                        ? "border-forest bg-forest text-ivory"
                        : "border-forest/60 bg-panel text-muted"
                    ),
                    children: o,
                  }),
                  (0, s.jsx)("span", {
                    className:
                      "mt-2 text-[11px] leading-tight text-fg md:text-xs",
                    children: d,
                  }),
                  t
                    ? (0, s.jsxs)("span", {
                        className:
                          "mt-0.5 font-mono text-[11px] text-muted tnum",
                        children: [u, " ", 1 === u ? "token" : "tokens"],
                      })
                    : null,
                ],
              },
              o
            );
          }),
        });
      }
      function c() {
        let { data: e } = (0, a.WN)(),
          t = [0, 0, 0, 0, 0];
        for (let s of null != e ? e : []) {
          var r;
          for (let e = 0; e < s.step; e++)
            t[e] = (null != (r = t[e]) ? r : 0) + 1;
        }
        return (0, s.jsx)(l, { counts: e ? t : void 0 });
      }
    },
    12909: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      let s = (0, r(99011).A)("check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    20829: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      let s = (0, r(99011).A)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    25555: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 44712)),
        Promise.resolve().then(r.bind(r, 9887)),
        Promise.resolve().then(r.bind(r, 95916)),
        Promise.resolve().then(r.bind(r, 56749)),
        Promise.resolve().then(r.t.bind(r, 64133, 23)),
        Promise.resolve().then(r.t.bind(r, 25626, 23));
    },
    40453: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => a.a });
      var s = r(79869),
        a = r.n(s);
    },
    44712: (e, t, r) => {
      "use strict";
      r.d(t, { CandidatesTable: () => h });
      var s = r(72133),
        a = r(50625),
        n = r(64133),
        i = r.n(n),
        l = r(82283),
        c = r(72555),
        o = r(84520),
        d = r(86635),
        u = r(29142),
        m = r(36811);
      function h() {
        let { data: e, isPending: t, isError: r, source: n } = (0, d.WN)(),
          [h, x] = (0, a.useState)(!1),
          p = [...(null != e ? e : [])].sort(
            (e, t) => t.step - e.step || t.poolDepthUsd - e.poolDepthUsd
          ),
          f = h ? p : p.slice(0, 5),
          g = p.length - f.length;
        return (0, s.jsxs)("section", {
          "aria-labelledby": "candidates-title",
          className: "card-highlight p-5 md:p-6",
          children: [
            (0, s.jsxs)("div", {
              className: "mb-3 flex items-baseline justify-between gap-3",
              children: [
                (0, s.jsx)("h2", {
                  id: "candidates-title",
                  className: "text-sm font-medium text-fg",
                  children: "Latest candidates",
                }),
                (0, s.jsx)("p", {
                  className: "text-[11px] text-muted",
                  children:
                    "preview" === n
                      ? "Illustrative volumes \xb7 depths from research \xa75"
                      : "Live from the factory",
                }),
              ],
            }),
            (0, s.jsxs)(o.XI, {
              children: [
                (0, s.jsx)(o.D1, {
                  children: (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)(o.TH, { children: "Token" }),
                      (0, s.jsx)(o.TH, { children: "Symbol" }),
                      (0, s.jsx)(o.TH, {
                        align: "right",
                        children: "Pool depth",
                      }),
                      (0, s.jsx)(o.TH, {
                        align: "right",
                        children: "Volume (24h)",
                      }),
                      (0, s.jsx)(o.TH, { children: "Status" }),
                    ],
                  }),
                }),
                (0, s.jsx)(o.vc, {
                  children: t
                    ? (0, s.jsx)(o.TR, {
                        children: (0, s.jsx)(o.TD, {
                          colSpan: 5,
                          className: "py-6 text-center text-xs text-muted",
                          children: "Loading candidates…",
                        }),
                      })
                    : r
                    ? (0, s.jsx)(o.TR, {
                        children: (0, s.jsx)(o.TD, {
                          colSpan: 5,
                          className: "py-6 text-center text-xs text-warning",
                          children: "Could not load candidates.",
                        }),
                      })
                    : 0 === f.length
                    ? (0, s.jsx)(o.TR, {
                        children: (0, s.jsx)(o.TD, {
                          colSpan: 5,
                          className: "py-6 text-center text-xs text-muted",
                          children: "No candidates yet.",
                        }),
                      })
                    : f.map((e) => {
                        let t = "active" === e.status,
                          r = (0, s.jsxs)("span", {
                            className: "flex items-center gap-3",
                            children: [
                              (0, s.jsx)(o.xz, {
                                ticker: e.ticker,
                                size: 26,
                                alt: "",
                              }),
                              (0, s.jsx)("span", {
                                className: "text-fg",
                                children: e.name,
                              }),
                            ],
                          });
                        return (0, s.jsxs)(
                          o.TR,
                          {
                            children: [
                              (0, s.jsx)(o.TD, {
                                children: t
                                  ? (0, s.jsx)(i(), {
                                      href: "/app/markets/".concat(e.ticker),
                                      className:
                                        "rounded-md transition-colors hover:text-upside",
                                      children: r,
                                    })
                                  : r,
                              }),
                              (0, s.jsx)(o.TD, {
                                mono: !0,
                                children: (0, s.jsxs)("span", {
                                  className: "inline-flex items-center gap-1.5",
                                  children: [
                                    e.ticker,
                                    e.token.address
                                      ? (0, s.jsx)("a", {
                                          href: ""
                                            .concat(
                                              u.S5.explorerUrl,
                                              "/address/"
                                            )
                                            .concat(e.token.address),
                                          target: "_blank",
                                          rel: "noreferrer",
                                          "aria-label": "".concat(
                                            e.ticker,
                                            " Stock Token on Blockscout"
                                          ),
                                          className: "text-dim hover:text-fg",
                                          children: (0, s.jsx)(l.A, {
                                            className: "size-3",
                                            "aria-hidden": "true",
                                          }),
                                        })
                                      : null,
                                  ],
                                }),
                              }),
                              (0, s.jsx)(o.TD, {
                                mono: !0,
                                align: "right",
                                children: (0, m.dR)(e.poolDepthUsd, {
                                  compact: !0,
                                }),
                              }),
                              (0, s.jsx)(o.TD, {
                                mono: !0,
                                align: "right",
                                children:
                                  e.volume24hUsd > 0
                                    ? (0, m.dR)(e.volume24hUsd, { compact: !0 })
                                    : "—",
                              }),
                              (0, s.jsx)(o.TD, {
                                children: (0, s.jsx)(o.md, {
                                  status: e.status,
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
            p.length > 5
              ? (0, s.jsx)("div", {
                  className: "mt-3 flex justify-end",
                  children: (0, s.jsxs)("button", {
                    type: "button",
                    onClick: () => x((e) => !e),
                    "aria-expanded": h,
                    className:
                      "inline-flex items-center gap-1.5 rounded-md text-xs text-muted transition-colors hover:text-fg",
                    children: [
                      h ? "Show fewer" : "View All (".concat(g, " more)"),
                      (0, s.jsx)(c.A, {
                        className: h ? "size-3.5 -rotate-90" : "size-3.5",
                        "aria-hidden": "true",
                      }),
                    ],
                  }),
                })
              : null,
          ],
        });
      }
    },
    59204: (e, t, r) => {
      "use strict";
      r.d(t, { Am: () => n, _2: () => s, gY: () => a });
      let s = [
          {
            step: 1,
            title: "Live Stock Token",
            rule: "An 18-decimal Stock Token on Robinhood Chain behind the issuer's beacon registry.",
            check:
              "stock.decimals() == 18 \xb7 registry has code and answers isBlocked() \xb7 one registration per address and uid()",
          },
          {
            step: 2,
            title: "Chainlink RH<T>/USD feed",
            rule: 'The canonical Chainlink proxy for the ticker, 8 decimals, description "RH<T> / USD".',
            check:
              'feed.decimals() == 8 \xb7 feed.description() == "RH" ‖ label ‖ " / USD"',
          },
          {
            step: 3,
            title: "USDG V3 pool with depth",
            rule: "The Uniswap V3 <T>/USDG pool returned by the factory, with an observation buffer of at least 7,200 slots, whose spot agrees with the feed within 3 % at registration and at every series creation.",
            check:
              "pool == factory.getPool(USDG, stock, fee) \xb7 slot0().observationCardinalityNext ≥ 7,200 \xb7 |feed − poolSpot| ≤ 300 bps (registerTicker and createSeries revert on disagreement)",
          },
          {
            step: 4,
            title: "Registered by the owner",
            rule: "Registration is a direct call by the factory owner; no delay at launch (D78). No fee; no permissionless path at launch.",
            check:
              "factory.registerTicker(...) from owner() \xb7 every parameter within the bytecode bounds",
          },
          {
            step: 5,
            title: "Active",
            rule: "The first series is created at the next third-Friday window; from then on every epoch opens, auctions and settles permissionlessly.",
            check:
              "factory.createSeries(tickerId, capBps) \xb7 nextEpoch(tickerId) > 1 \xb7 ticker enabled",
          },
        ],
        a = {
          perSeriesUsd: 1e6,
          perTxUsd: 1e5,
          minCardinality: 7200,
          regBandBps: 300,
          listingDelayHours: 0,
          capChoicesPct: [0, 2, 5, 10],
        },
        n = [
          { step: 1, label: "Live Token" },
          { step: 2, label: "Chainlink Feed" },
          { step: 3, label: "USDG Pool Depth" },
          { step: 4, label: "Registered" },
          { step: 5, label: "Active" },
        ];
    },
    72555: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      let s = (0, r(99011).A)("arrow-right", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    79869: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return c;
          },
          getImageProps: function () {
            return l;
          },
        });
      let s = r(31727),
        a = r(11090),
        n = r(25626),
        i = s._(r(62898));
      function l(e) {
        let { props: t } = (0, a.getImgProps)(e, {
          defaultLoader: i.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let c = n.Image;
    },
    82283: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      let s = (0, r(99011).A)("external-link", [
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
    86635: (e, t, r) => {
      "use strict";
      r.d(t, {
        Am: () => b,
        At: () => h,
        NY: () => x,
        Vy: () => m,
        WN: () => j,
        dm: () => f,
        hR: () => v,
        og: () => p,
        tG: () => y,
        ur: () => g,
      });
      var s = r(90756),
        a = r(29142),
        n = r(50827),
        i = r(54096);
      let l = "live" === a.g ? 15e3 : 1 / 0,
        c = "live" === a.g && 3e4;
      function o(e) {
        return "preview" === a.g ? { initialData: e() } : {};
      }
      function d(e) {
        return Object.assign(e, { source: a.g });
      }
      function u() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return ["talis", a.g, ...t];
      }
      function m() {
        return d(
          (0, s.I)({
            queryKey: u("markets"),
            queryFn: async () => (await (0, i.U)()).markets(),
            staleTime: l,
            refetchInterval: c,
            ...o(() => n.B.markets()),
          })
        );
      }
      function h(e) {
        return d(
          (0, s.I)({
            queryKey: u("market", e),
            queryFn: async () => (e ? (await (0, i.U)()).market(e) : null),
            enabled: !!e,
            staleTime: l,
            refetchInterval: c,
            ...o(() => (e ? n.B.market(e) : null)),
          })
        );
      }
      function x(e) {
        return d(
          (0, s.I)({
            queryKey: u("series", e),
            queryFn: async () => (e ? (await (0, i.U)()).series(e) : null),
            enabled: !!e,
            staleTime: l,
            refetchInterval: c,
            ...o(() => (e ? n.B.series(e) : null)),
          })
        );
      }
      function p() {
        return d(
          (0, s.I)({
            queryKey: u("series"),
            queryFn: async () => (await (0, i.U)()).allSeries(),
            staleTime: l,
            refetchInterval: c,
            ...o(() => n.B.allSeries()),
          })
        );
      }
      function f(e) {
        return d(
          (0, s.I)({
            queryKey: u("auction", e),
            queryFn: async () => (e ? (await (0, i.U)()).auction(e) : null),
            enabled: !!e,
            staleTime: "live" === a.g ? 5e3 : l,
            refetchInterval: c,
            ...o(() => (e ? n.B.auction(e) : null)),
          })
        );
      }
      function g() {
        return d(
          (0, s.I)({
            queryKey: u("auctions"),
            queryFn: async () => (await (0, i.U)()).auctions(),
            staleTime: "live" === a.g ? 5e3 : l,
            refetchInterval: c,
            ...o(() => n.B.auctions()),
          })
        );
      }
      function y(e) {
        return d(
          (0, s.I)({
            queryKey: u("epoch", e),
            queryFn: async () => (e ? (await (0, i.U)()).epoch(e) : null),
            enabled: !!e,
            staleTime: l,
            refetchInterval: c,
            ...o(() => (e ? n.B.epoch(e) : null)),
          })
        );
      }
      function b() {
        return d(
          (0, s.I)({
            queryKey: u("epochs"),
            queryFn: async () => (await (0, i.U)()).epochs(),
            staleTime: l,
            refetchInterval: c,
            ...o(() => n.B.epochs()),
          })
        );
      }
      function j() {
        return d(
          (0, s.I)({
            queryKey: u("candidates"),
            queryFn: async () => (await (0, i.U)()).listingCandidates(),
            staleTime: l,
            ...o(() => n.B.listingCandidates()),
          })
        );
      }
      function v() {
        return d(
          (0, s.I)({
            queryKey: u("stats"),
            queryFn: async () => (await (0, i.U)()).protocolStats(),
            staleTime: l,
            refetchInterval: c,
            ...o(() => n.B.protocolStats()),
          })
        );
      }
    },
    95916: (e, t, r) => {
      "use strict";
      r.d(t, { ProposeMarketButton: () => m });
      var s = r(72133),
        a = r(50625),
        n = r(72555),
        i = r(20829),
        l = r(12909),
        c = r(84520),
        o = r(29142),
        d = r(36811),
        u = r(59204);
      function m() {
        let e = (0, a.useRef)(null),
          t = () => {
            var t;
            return null == (t = e.current) ? void 0 : t.close();
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(c.$n, {
              onClick: () => {
                var t;
                return null == (t = e.current) ? void 0 : t.showModal();
              },
              iconRight: (0, s.jsx)(n.A, {
                className: "size-4",
                "aria-hidden": "true",
              }),
              children: "Propose a Market",
            }),
            (0, s.jsx)("dialog", {
              ref: e,
              "aria-labelledby": "propose-title",
              className:
                "m-auto w-[min(100vw-32px,600px)] rounded-card-lg border border-line bg-panel p-0 text-fg shadow-card backdrop:bg-black/70 backdrop:backdrop-blur-sm",
              onClick: (r) => {
                r.target === e.current && t();
              },
              children: (0, s.jsxs)("div", {
                className: "p-5 md:p-7",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex items-start justify-between gap-4",
                    children: [
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("p", {
                            className: "label-caps",
                            children: "Listing requirements",
                          }),
                          (0, s.jsx)("h2", {
                            id: "propose-title",
                            className: "display mt-2 text-display-md text-fg",
                            children: "Propose a Market",
                          }),
                          (0, s.jsx)("p", {
                            className: "mt-2 max-w-md text-sm text-muted",
                            children:
                              "Any Stock Token with a feed and a pool can qualify. The factory checks every rule below at registration; nothing is listed on a promise.",
                          }),
                        ],
                      }),
                      (0, s.jsx)("button", {
                        type: "button",
                        onClick: t,
                        "aria-label": "Close",
                        className:
                          "inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-rule text-muted transition-colors hover:border-fg hover:text-fg",
                        children: (0, s.jsx)(i.A, {
                          className: "size-4",
                          "aria-hidden": "true",
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("ol", {
                    className: "mt-6 hairline-rows",
                    children: u._2.map((e) =>
                      (0, s.jsxs)(
                        "li",
                        {
                          className: "flex gap-4 py-3.5",
                          children: [
                            (0, s.jsx)("span", {
                              "aria-hidden": "true",
                              className:
                                "mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-forest text-ivory",
                              children: (0, s.jsx)(l.A, {
                                className: "size-3.5",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className: "min-w-0",
                              children: [
                                (0, s.jsxs)("p", {
                                  className: "text-sm text-fg",
                                  children: [
                                    (0, s.jsxs)("span", {
                                      className:
                                        "mr-2 font-mono text-xs text-muted tnum",
                                      children: ["0", e.step],
                                    }),
                                    e.title,
                                  ],
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "mt-1 text-xs leading-relaxed text-muted",
                                  children: e.rule,
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "mt-1 break-words font-mono text-[11px] leading-relaxed text-dim",
                                  children: e.check,
                                }),
                              ],
                            }),
                          ],
                        },
                        e.step
                      )
                    ),
                  }),
                  (0, s.jsxs)("dl", {
                    className:
                      "mt-5 grid grid-cols-2 gap-x-6 gap-y-2 rounded-card border border-line bg-raised p-4 text-xs sm:grid-cols-4",
                    children: [
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("dt", {
                            className: "text-muted",
                            children: "Series cap",
                          }),
                          (0, s.jsx)("dd", {
                            className: "mt-0.5 font-mono text-fg tnum",
                            children: (0, d.dR)(u.gY.perSeriesUsd, {
                              compact: !0,
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("dt", {
                            className: "text-muted",
                            children: "Per transaction",
                          }),
                          (0, s.jsx)("dd", {
                            className: "mt-0.5 font-mono text-fg tnum",
                            children: (0, d.dR)(u.gY.perTxUsd, { compact: !0 }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("dt", {
                            className: "text-muted",
                            children: "Cap choices",
                          }),
                          (0, s.jsx)("dd", {
                            className: "mt-0.5 font-mono text-fg tnum",
                            children: u.gY.capChoicesPct
                              .map((e) => "".concat(e, "%"))
                              .join(" \xb7 "),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("dt", {
                            className: "text-muted",
                            children: "Listing delay",
                          }),
                          (0, s.jsx)("dd", {
                            className: "mt-0.5 font-mono text-fg tnum",
                            children:
                              0 === u.gY.listingDelayHours
                                ? "none"
                                : "".concat(u.gY.listingDelayHours, " h"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                      (0, s.jsx)("p", {
                        className: "text-xs text-muted",
                        children:
                          "Proposals are discussed publicly and registered directly by the factory owner; no delay at launch (D78).",
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex shrink-0 gap-2",
                        children: [
                          (0, s.jsx)(c.$n, {
                            variant: "secondary",
                            size: "sm",
                            href: o.A.docs,
                            children: "Read the rules",
                          }),
                          (0, s.jsxs)("a", {
                            href: o.A.discord,
                            target: "_blank",
                            rel: "noreferrer",
                            className:
                              "inline-flex h-8 items-center gap-2 rounded-pill bg-primary px-3.5 text-xs font-medium text-on-primary transition-colors hover:bg-primary-hover",
                            children: [
                              "Open a proposal",
                              (0, s.jsx)(n.A, {
                                className: "size-3.5",
                                "aria-hidden": "true",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    99011: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => c });
      var s = r(50625);
      let a = (e) => {
          let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) =>
            r ? r.toUpperCase() : t.toLowerCase()
          );
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        n = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t
            .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
            .join(" ")
            .trim();
        };
      var i = {
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
            color: r = "currentColor",
            size: a = 24,
            strokeWidth: l = 2,
            absoluteStrokeWidth: c,
            className: o = "",
            children: d,
            iconNode: u,
            ...m
          } = e;
          return (0, s.createElement)(
            "svg",
            {
              ref: t,
              ...i,
              width: a,
              height: a,
              stroke: r,
              strokeWidth: c ? (24 * Number(l)) / Number(a) : l,
              className: n("lucide", o),
              ...(!d &&
                !((e) => {
                  for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t)
                      return !0;
                })(m) && { "aria-hidden": "true" }),
              ...m,
            },
            [
              ...u.map((e) => {
                let [t, r] = e;
                return (0, s.createElement)(t, r);
              }),
              ...(Array.isArray(d) ? d : [d]),
            ]
          );
        }),
        c = (e, t) => {
          let r = (0, s.forwardRef)((r, i) => {
            let { className: c, ...o } = r;
            return (0, s.createElement)(l, {
              ref: i,
              iconNode: t,
              className: n(
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
          return (r.displayName = a(e)), r;
        };
    },
  },
  (e) => {
    e.O(0, [4133, 755, 756, 4520, 592, 4314, 4297, 7358], () =>
      e((e.s = 25555))
    ),
      (_N_E = e.O());
  },
]);
