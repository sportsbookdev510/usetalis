(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8189],
  {
    1449: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => c });
      var s = n(72133),
        a = n(64133),
        l = n.n(a),
        i = n(84520),
        r = n(36811),
        o = n(32398),
        d = n(85726);
      function c(e) {
        let { markets: t, title: n = "Next series" } = e,
          a = t.filter((e) => e.nextSeries);
        if (0 === a.length) return null;
        let c = Date.now() / 1e3;
        return (0, s.jsxs)(i.Zp, {
          as: "section",
          "aria-labelledby": "next-series-title",
          children: [
            (0, s.jsx)(i.aR, {
              title: (0, s.jsx)("span", {
                id: "next-series-title",
                children: n,
              }),
              aside: (0, s.jsx)("span", {
                className: "label-caps",
                children: "registered \xb7 no series",
              }),
            }),
            (0, s.jsxs)(i.XI, {
              className: "min-w-[640px]",
              children: [
                (0, s.jsx)(i.D1, {
                  children: (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)(i.TH, { children: "Asset" }),
                      (0, s.jsx)(i.TH, { children: "Epoch" }),
                      (0, s.jsx)(i.TH, { children: "Creatable from" }),
                      (0, s.jsx)(i.TH, { children: "Open window (P0)" }),
                      (0, s.jsx)(i.TH, { children: "Settlement (S)" }),
                      (0, s.jsx)(i.TH, { children: "Status" }),
                    ],
                  }),
                }),
                (0, s.jsx)(i.vc, {
                  children: a.map((e) => {
                    let t = e.nextSeries,
                      n = c >= t.createFrom,
                      a = (0, d.o0)(t, c);
                    return (0, s.jsxs)(
                      i.TR,
                      {
                        children: [
                          (0, s.jsx)(i.TD, {
                            children: (0, s.jsxs)(l(), {
                              href: "/app/markets/".concat(
                                e.ticker.toLowerCase()
                              ),
                              className:
                                "flex items-center gap-2.5 rounded-md font-mono text-sm text-fg hover:text-accent",
                              children: [
                                (0, s.jsx)(i.xz, {
                                  ticker: e.ticker,
                                  size: 24,
                                  alt: "",
                                }),
                                e.ticker,
                              ],
                            }),
                          }),
                          (0, s.jsx)(i.TD, {
                            mono: !0,
                            children: (0, r.iI)(t.epoch),
                          }),
                          (0, s.jsx)(i.TD, {
                            mono: !0,
                            className: n ? "text-fg" : "text-muted",
                            children: (0, r.lF)(1e3 * t.createFrom),
                          }),
                          (0, s.jsxs)(i.TD, {
                            mono: !0,
                            className:
                              "upcoming" === a ? "text-muted" : "text-fg",
                            children: [
                              (0, r.lF)(1e3 * t.openWindowDay),
                              "upcoming" !== a
                                ? (0, s.jsx)("span", {
                                    className:
                                      "ml-1.5 font-sans text-[10px] text-dim",
                                    children:
                                      "today" === a ? "today" : "opened",
                                  })
                                : null,
                              (0, d.rn)(e)
                                ? (0, s.jsx)("span", {
                                    className:
                                      "block text-[10px] font-sans text-dim",
                                    children: "chosen at registration",
                                  })
                                : null,
                            ],
                          }),
                          (0, s.jsx)(i.TD, {
                            mono: !0,
                            className: "text-muted",
                            children: (0, r.lF)(1e3 * t.settleDay),
                          }),
                          (0, s.jsx)(i.TD, {
                            children: (0, s.jsx)(i.md, {
                              status: "registered",
                              label: (0, d.hX)(t, c),
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
            (0, s.jsxs)("p", {
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
    12909: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      let s = (0, n(99011).A)("check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    48542: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 60586));
    },
    60586: (e, t, n) => {
      "use strict";
      n.d(t, { AuctionsView: () => eu });
      var s = n(72133),
        a = n(50625),
        l = n(84520),
        i = n(86635),
        r = n(29142),
        o = n(36811),
        d = n(1449),
        c = n(79461),
        u = n(12909),
        p = n(91109),
        m = n(87317);
      let x = {
          unscheduled: "Not scheduled",
          scheduled: "Scheduled",
          bidding: "Live",
          crossed: "Crossed \xb7 awaiting finalize",
          sold: "Cleared",
          nosale: "No sale \xb7 re-run",
        },
        h = {
          unscheduled: "neutral",
          scheduled: "neutral",
          bidding: "upside",
          crossed: "income",
          sold: "income",
          nosale: "neutral",
        };
      function f(e) {
        return "unscheduled" === e.state && "created" === e.seriesState;
      }
      function g(e) {
        return f(e) ? "Scheduled at the open" : x[e.state];
      }
      function b(e, t) {
        return "unscheduled" === e && "created" === t ? "created" : e;
      }
      function j(e) {
        if (f(e))
          return "The series has not opened. open() fixes P0 and K after the open window and schedules this round; subscribers can add lots or change their reserve until the clock starts.";
        switch (e.state) {
          case "unscheduled":
            return "The series has not opened. Subscribers can still add lots or change their reserve.";
          case "scheduled":
            return "Lots are frozen at the start. The clock begins at pStart and halves every 20 minutes.";
          case "bidding":
            return "Bids are firm at the clock price of their step. No bid is accepted after the crossing.";
          case "crossed":
            return "Demand met supply, or the clock ran out. finalize() writes the clearing price and opens claims; anyone can call it.";
          case "sold":
            return "Every filled bid pays the clearing price. Claims are pulls and never expire.";
          case "nosale":
            return "Round ".concat(
              e.round,
              " sold nothing. Anyone can reschedule while a slot exists before the settlement window; subscribers may adjust lots and reserves in between."
            );
        }
      }
      function v(e) {
        let { auctions: t, selected: n, onSelect: a } = e;
        return (0, s.jsx)("div", {
          role: "group",
          "aria-label": "Series",
          className:
            "-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:px-0",
          children: t.map((e) => {
            let t = e.ticker === n;
            return (0, s.jsxs)(
              "button",
              {
                type: "button",
                "aria-pressed": t,
                onClick: () => a(e.ticker),
                className: (0, p.cn)(
                  "inline-flex h-9 shrink-0 items-center gap-2 rounded-pill border px-3 text-sm transition-colors",
                  t
                    ? "border-upside-fill/70 bg-upside-fill/10 text-fg"
                    : "border-rule bg-panel text-muted hover:border-fg hover:text-fg"
                ),
                children: [
                  (0, s.jsx)(l.xz, { ticker: e.ticker, size: 18, alt: "" }),
                  (0, s.jsx)("span", {
                    className: "font-mono",
                    children: e.ticker,
                  }),
                  (0, s.jsx)(l.md, {
                    status: b(e.state, e.seriesState),
                    label: g(e),
                    className: "text-[11px] text-muted",
                  }),
                ],
              },
              e.seriesId
            );
          }),
        });
      }
      function k(e) {
        let { auction: t, name: n } = e,
          a = f(t) ? t.indicativeBasis : void 0,
          i =
            t.startsAt > 0
              ? { start: t.startsAt, end: t.endsAt, expected: !1 }
              : a && a.auctionStartsAt > 0
              ? { start: a.auctionStartsAt, end: a.auctionEndsAt, expected: !0 }
              : null;
        return (0, s.jsxs)("div", {
          className:
            "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
          children: [
            (0, s.jsxs)("div", {
              className: "flex items-center gap-3",
              children: [
                (0, s.jsx)(l.xz, { ticker: t.ticker, size: 44 }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsxs)("p", {
                      className: "flex flex-wrap items-center gap-2",
                      children: [
                        (0, s.jsx)("span", {
                          className: "font-mono text-lg text-fg",
                          children: t.ticker,
                        }),
                        (0, s.jsx)("span", {
                          className: "text-sm text-muted",
                          children: null != n ? n : "Stock Token",
                        }),
                        (0, s.jsxs)(l.Ex, {
                          tone: h[t.state],
                          children: [
                            "bidding" === t.state
                              ? (0, s.jsxs)("span", {
                                  "aria-hidden": "true",
                                  className: "relative inline-flex size-1.5",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "absolute inline-flex size-full animate-ping rounded-full bg-upside-fill opacity-60 motion-reduce:hidden",
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "relative inline-flex size-1.5 rounded-full bg-upside-fill",
                                    }),
                                  ],
                                })
                              : "sold" === t.state
                              ? (0, s.jsx)(u.A, {
                                  className: "size-3",
                                  "aria-hidden": "true",
                                })
                              : null,
                            g(t),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("p", {
                      className: "mt-0.5 min-w-0 text-xs text-muted tnum",
                      children: [
                        "Epoch ",
                        (0, s.jsx)("span", {
                          className: "font-mono",
                          children: (0, o.iI)(t.epoch),
                        }),
                        " \xb7 Round ",
                        (0, s.jsx)("span", {
                          className: "font-mono",
                          children: t.round,
                        }),
                        " \xb7",
                        " ",
                        (0, s.jsxs)("span", {
                          className: "font-mono",
                          title: t.seriesId,
                          children: [
                            (0, s.jsx)("span", {
                              className: "md:hidden",
                              children: (0, o.Dc)(t.seriesId, 6, 4),
                            }),
                            (0, s.jsx)("span", {
                              className: "hidden md:inline",
                              children: t.seriesId,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("dl", {
              className:
                "grid grid-cols-2 gap-x-6 gap-y-1 text-xs md:text-right",
              children: [
                (0, s.jsx)("dt", {
                  className: "text-muted md:col-start-1",
                  children: (null == i ? void 0 : i.expected)
                    ? "Expected slot"
                    : "Slot",
                }),
                (0, s.jsx)("dd", {
                  className: (0, p.cn)(
                    "tnum md:col-start-2",
                    (null == i ? void 0 : i.expected) ? "text-muted" : "text-fg"
                  ),
                  children: i
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, m.gC)(i.start, "ET"),
                          " \xb7 ",
                          (0, s.jsx)("span", {
                            className: "font-mono",
                            children: (0, m.hO)(i.start, i.end, "ET"),
                          }),
                        ],
                      })
                    : "not scheduled",
                }),
                (0, s.jsx)("dt", {
                  className: "text-muted md:col-start-1",
                  children: "UTC",
                }),
                (0, s.jsx)("dd", {
                  className: "font-mono text-muted tnum md:col-start-2",
                  children: i ? (0, m.hO)(i.start, i.end, "UTC") : "—",
                }),
              ],
            }),
          ],
        });
      }
      var N = n(49719),
        S = n(23515),
        y = n(42726);
      function w(e) {
        let { rung: t, ticker: n, reduce: a } = e,
          l = "current" === t.kind,
          i = "clearing" === t.kind,
          r = l || i,
          d = ("ahead" === t.kind || "unreached" === t.kind) && !t.floor,
          c = t.floor && !r;
        return (0, s.jsxs)("li", {
          className: "relative",
          children: [
            t.gapBefore > 0
              ? (0, s.jsxs)("div", {
                  className: "relative flex h-7 items-center pl-14 md:pl-16",
                  children: [
                    (0, s.jsx)("span", {
                      "aria-hidden": "true",
                      className:
                        "absolute left-[1.3125rem] top-0 h-full border-l border-dashed border-rule md:left-[1.5625rem]",
                    }),
                    (0, s.jsxs)("span", {
                      className: "font-mono text-[10px] text-dim tnum",
                      children: ["+", t.gapBefore, " steps not shown"],
                    }),
                  ],
                })
              : null,
            (0, s.jsxs)("div", {
              "aria-current": l ? "step" : void 0,
              className: (0, p.cn)(
                "relative grid items-center gap-x-3 py-2.5 pl-14 pr-4 md:pl-16",
                "grid-cols-[3.25rem_1fr_auto] md:grid-cols-[3.25rem_4.5rem_1fr_6.5rem_6.5rem]",
                d && "opacity-45"
              ),
              children: [
                r
                  ? (0, s.jsx)(N.P.span, {
                      layoutId: "rung-highlight",
                      transition: a
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 260, damping: 30 },
                      "aria-hidden": "true",
                      className:
                        "absolute inset-x-2 inset-y-0 -z-0 rounded-xl glass-upside shadow-[var(--shadow-glow-upside)]",
                    })
                  : null,
                c
                  ? (0, s.jsx)("span", {
                      "aria-hidden": "true",
                      className:
                        "absolute inset-x-2 inset-y-0 -z-0 rounded-xl border border-lime-soft/40 bg-lime-soft/10",
                    })
                  : null,
                (0, s.jsx)("span", {
                  "aria-hidden": "true",
                  className: (0, p.cn)(
                    "absolute left-4 top-1/2 z-10 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border md:left-5",
                    r
                      ? "border-upside-fill bg-upside-fill shadow-[0_0_12px_2px_rgba(204,228,0,0.55)]"
                      : c
                      ? "border-lime-soft bg-lime-soft/30"
                      : "passed" === t.kind
                      ? "border-income-fill bg-income-fill"
                      : "border-rule bg-panel"
                  ),
                }),
                (0, s.jsxs)("span", {
                  className: (0, p.cn)(
                    "relative font-mono text-[11px] tnum",
                    r ? "text-fg" : c ? "text-lime-soft" : "text-muted"
                  ),
                  children: ["#", String(t.step).padStart(3, "0")],
                }),
                (0, s.jsx)("span", {
                  className: (0, p.cn)(
                    "relative hidden font-mono text-[11px] tnum md:block",
                    r ? "text-fg" : "text-muted"
                  ),
                  children: (0, m.CH)(t.at, "ET", !0),
                }),
                (0, s.jsxs)("span", {
                  className: "relative flex min-w-0 items-baseline gap-2",
                  children: [
                    (0, s.jsx)("span", {
                      className: (0, p.cn)(
                        "font-mono tnum",
                        r
                          ? "text-lg text-upside md:text-xl"
                          : "text-sm text-fg md:text-base",
                        "passed" === t.kind && "text-income",
                        c && "text-lime-soft"
                      ),
                      children: (0, o.dR)(t.price, { decimals: 4 }),
                    }),
                    l
                      ? (0, s.jsx)("span", {
                          className: "label-caps text-[9px] text-upside",
                          children: "now",
                        })
                      : null,
                    i
                      ? (0, s.jsx)("span", {
                          className: "label-caps text-[9px] text-upside",
                          children: "cleared \xb7 sold",
                        })
                      : null,
                    t.floor
                      ? (0, s.jsx)("span", {
                          className: (0, p.cn)(
                            "label-caps text-[9px]",
                            r ? "text-upside" : "text-lime-soft"
                          ),
                          children: "floor",
                        })
                      : null,
                  ],
                }),
                (0, s.jsxs)("span", {
                  className:
                    "relative text-right font-mono text-[11px] text-muted tnum md:text-xs",
                  children: [
                    (0, s.jsxs)("span", {
                      className: "md:hidden",
                      children: [(0, o.bu)(t.supply, 0), " / "],
                    }),
                    (0, s.jsx)("span", {
                      className: "hidden md:inline",
                      children: (0, o.bu)(t.supply, 0),
                    }),
                    (0, s.jsx)("span", {
                      className: "md:hidden",
                      children:
                        void 0 === t.demand ? "—" : (0, o.bu)(t.demand, 0),
                    }),
                  ],
                }),
                (0, s.jsx)("span", {
                  className:
                    "relative hidden text-right font-mono text-xs text-muted tnum md:block",
                  children: void 0 === t.demand ? "—" : (0, o.bu)(t.demand, 0),
                }),
                (0, s.jsx)("span", {
                  className: "sr-only",
                  children: ""
                    .concat(n, " step ")
                    .concat(t.step, ": ")
                    .concat((0, o.dR)(t.price, { decimals: 4 }), " per unit, ")
                    .concat((0, o.bu)(t.supply, 0), " units on the curve")
                    .concat(t.floor ? ", the floor" : ""),
                }),
              ],
            }),
          ],
        });
      }
      function C(e) {
        var t;
        let { auction: n, clock: a } = e,
          i = null != (t = (0, S.I)()) && t,
          r = (function (e, t) {
            let n = e.steps - 1,
              s = e.stepSeconds || 30,
              a = new Set(e.ladder.map((e) => e.step));
            for (let e of (a.add(0), a.add(n), [-2, -1, 0, 1, 2]))
              a.add((0, y.qE)(t + e, 0, n));
            void 0 !== e.clearingStep && a.add(e.clearingStep);
            let l = [...a].sort((e, t) => e - t),
              i = [...e.ladder].sort((e, t) => e.step - t.step),
              r =
                "sold" === e.state ||
                "nosale" === e.state ||
                "crossed" === e.state,
              o = r && void 0 !== e.clearingStep ? e.clearingStep : t,
              d = -1;
            return l.map((a) => {
              var l;
              let c,
                u,
                p = ((e) => {
                  let t = i[0];
                  for (let n of i) n.step <= e && (t = n);
                  return t;
                })(a),
                m =
                  null != (l = null == p ? void 0 : p.supply) ? l : e.lotTotal;
              a <= o &&
                (c = a === o ? e.totalDemand : null == p ? void 0 : p.demand),
                (u =
                  r && void 0 !== e.clearingStep
                    ? a < e.clearingStep
                      ? "passed"
                      : a === e.clearingStep
                      ? "clearing"
                      : "unreached"
                    : a < t
                    ? "passed"
                    : a === t
                    ? "current"
                    : "ahead");
              let x = {
                step: a,
                at: e.startsAt + a * s,
                price: (0, y.Gg)(a, e.pStart, e.pFloor, { stepSeconds: s }),
                supply: m,
                demand: c,
                kind: u,
                floor: a === n,
                gapBefore: d < 0 ? 0 : a - d - 1,
              };
              return (d = a), x;
            });
          })(n, a.step),
          d = n.stepSeconds || 30,
          c = n.startsAt + a.step * d;
        return (0, s.jsxs)(l.Zp, {
          padding: "none",
          className: "min-w-0 overflow-hidden",
          children: [
            (0, s.jsxs)("div", {
              className:
                "flex items-center justify-between gap-3 border-b border-line px-4 py-3 md:px-5",
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("p", {
                      className: "label-caps",
                      children: "Price ladder \xb7 USDG per Upside unit",
                    }),
                    (0, s.jsxs)("p", {
                      className: "mt-1 font-mono text-xs text-muted tnum",
                      children: [
                        "Step ",
                        String(a.step).padStart(3, "0"),
                        " of ",
                        n.steps,
                        " \xb7 ",
                        (0, m.CH)(c, "ET", !0),
                        " ",
                        (0, m.AN)(c, "ET"),
                        " \xb7 ",
                        d,
                        "s per step",
                      ],
                    }),
                  ],
                }),
                a.running
                  ? (0, s.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, s.jsx)(l.yY, {
                          progress: a.stepProgress,
                          size: 40,
                          stroke: 2,
                          label: ""
                            .concat(a.secondsLeft, " seconds left in step ")
                            .concat(a.step),
                          children: (0, s.jsxs)("span", {
                            className: "font-mono text-[11px] text-upside tnum",
                            "aria-hidden": "true",
                            children: [a.secondsLeft, "s"],
                          }),
                        }),
                        (0, s.jsxs)("span", {
                          className:
                            "hidden text-[11px] leading-snug text-muted md:block",
                          "aria-hidden": "true",
                          children: [
                            "next step",
                            (0, s.jsx)("br", {}),
                            (0, s.jsxs)("span", {
                              className: "font-mono text-upside tnum",
                              children: ["in ", a.secondsLeft, "s"],
                            }),
                          ],
                        }),
                      ],
                    })
                  : null,
              ],
            }),
            (0, s.jsxs)("div", {
              "aria-hidden": "true",
              className:
                "grid gap-x-3 pb-1 pl-14 pr-4 pt-3 text-[10px] text-dim md:pl-16 grid-cols-[3.25rem_1fr_auto] md:grid-cols-[3.25rem_4.5rem_1fr_6.5rem_6.5rem]",
              children: [
                (0, s.jsx)("span", { children: "step" }),
                (0, s.jsx)("span", {
                  className: "hidden md:block",
                  children: "ET",
                }),
                (0, s.jsx)("span", { children: "price" }),
                (0, s.jsxs)("span", {
                  className: "text-right",
                  children: [
                    (0, s.jsx)("span", {
                      className: "md:hidden",
                      children: "supply / demand",
                    }),
                    (0, s.jsx)("span", {
                      className: "hidden md:inline",
                      children: "supply",
                    }),
                  ],
                }),
                (0, s.jsx)("span", {
                  className: "hidden text-right md:block",
                  children: "demand",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "relative",
              children: [
                (0, s.jsx)("span", {
                  "aria-hidden": "true",
                  className:
                    "absolute bottom-3 left-4 top-3 w-px bg-rule md:left-5",
                }),
                (0, s.jsx)("ol", {
                  "aria-label": "".concat(n.ticker, " descending clock"),
                  className: "relative",
                  children: r.map((e) =>
                    (0, s.jsx)(
                      w,
                      { rung: e, ticker: n.ticker, reduce: i },
                      e.step
                    )
                  ),
                }),
              ],
            }),
            (0, s.jsxs)("p", {
              className:
                "border-t border-line px-4 py-3 text-[11px] leading-relaxed text-muted md:px-5",
              children: [
                "The clock starts at ",
                (0, o.dR)(n.pStart),
                " (50 % of P0), halves every 20 minutes and floors at ",
                (0, o.dR)(n.pFloor),
                " (2 % of P0). It crosses at the first step where demand reaches the supply that would remain at the next step; every filled bid pays the clearing price.",
              ],
            }),
          ],
        });
      }
      function T(e) {
        var t;
        let { auction: n, clock: a, p0: i, feeBps: r } = e,
          d = "sold" === n.state,
          c =
            d && void 0 !== n.net && n.unitsSold ? n.net / n.unitsSold : void 0,
          u = n.stepSeconds || 30;
        return (0, s.jsxs)(l.Zp, {
          as: "section",
          "aria-labelledby": "summary-title",
          children: [
            (0, s.jsx)(l.aR, {
              title: (0, s.jsx)("span", {
                id: "summary-title",
                children: d ? "Round result" : "This step",
              }),
              aside: (0, s.jsxs)("span", {
                className: "label-caps",
                children: ["Round ", n.round],
              }),
            }),
            (0, s.jsxs)("div", {
              className: "grid grid-cols-2 gap-4",
              children: [
                (0, s.jsx)(l.$k, {
                  label: d ? "Clearing price" : "Clock price",
                  value: (0, o.dR)(a.price, { decimals: 4 }),
                  sub: i
                    ? ""
                        .concat(
                          (0, o.Oe)(a.price / i, { signed: !1, decimals: 2 }),
                          " of P0 "
                        )
                        .concat((0, o.dR)(i))
                    : void 0,
                  tone: "upside",
                }),
                (0, s.jsx)(l.$k, {
                  label: d ? "Clearing step" : "Step",
                  value: "#".concat(String(a.step).padStart(3, "0")),
                  sub: (0, m.vI)(n.startsAt + a.step * u, "ET", !0),
                }),
              ],
            }),
            (0, s.jsxs)(l.l7, {
              className: "mt-4",
              children: [
                (0, s.jsx)(l.jP, {
                  label: "Supply at this step",
                  value: "".concat((0, o.bu)(n.lotTotal, 4), " units"),
                }),
                (0, s.jsx)(l.jP, {
                  label: "Demand so far",
                  value: "".concat((0, o.bu)(n.totalDemand, 4), " units"),
                  hint: "".concat(
                    (0, o.Oe)(n.lotTotal ? n.totalDemand / n.lotTotal : 0, {
                      signed: !1,
                      decimals: 0,
                    }),
                    " of lot"
                  ),
                }),
                d
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(l.jP, {
                          label: "Units sold",
                          value: (0, o.bu)(
                            null != (t = n.unitsSold) ? t : 0,
                            4
                          ),
                        }),
                        (0, s.jsx)(l.jP, {
                          label: "Gross",
                          value: (0, o.dR)(n.gross),
                        }),
                        (0, s.jsx)(l.jP, {
                          label: "Fee (".concat(
                            (0, o.Nd)(null != r ? r : 500, { signed: !1 }),
                            " of proceeds)"
                          ),
                          value: (0, o.dR)(n.fee),
                          tone: "muted",
                        }),
                        (0, s.jsx)(l.jP, {
                          label: "Net to subscribers",
                          value: (0, o.dR)(n.net),
                          tone: "income",
                        }),
                        (0, s.jsx)(l.jP, {
                          label: "Premium per sold unit",
                          value:
                            void 0 !== c ? (0, o.dR)(c, { decimals: 4 }) : "—",
                          hint:
                            i && void 0 !== c
                              ? "".concat(
                                  (0, o.Oe)(c / i, { signed: !1, decimals: 2 }),
                                  " of P0"
                                )
                              : void 0,
                        }),
                      ],
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(l.jP, {
                          label: "Start \xb7 floor",
                          value: ""
                            .concat((0, o.dR)(n.pStart), " \xb7 ")
                            .concat((0, o.dR)(n.pFloor)),
                        }),
                        (0, s.jsx)(l.jP, {
                          label: "Steps",
                          value: "".concat(n.steps, " \xd7 ").concat(u, "s"),
                          hint: "2 h",
                        }),
                      ],
                    }),
              ],
            }),
            (0, s.jsx)("p", {
              className: "mt-3 text-[11px] leading-relaxed text-muted",
              children: j(n),
            }),
          ],
        });
      }
      function R(e) {
        var t, n;
        let { auctions: a, selected: i, onSelect: r } = e;
        return (0, s.jsxs)(l.Zp, {
          as: "section",
          "aria-labelledby": "all-auctions",
          children: [
            (0, s.jsx)(l.aR, {
              title: (0, s.jsx)("span", {
                id: "all-auctions",
                children: "All auctions",
              }),
              aside: (0, s.jsxs)("span", {
                className: "label-caps",
                children: [
                  "Epoch ",
                  (0, o.iI)(
                    null != (n = null == (t = a[0]) ? void 0 : t.epoch) ? n : 0
                  ),
                ],
              }),
            }),
            (0, s.jsxs)(l.XI, {
              children: [
                (0, s.jsx)(l.D1, {
                  children: (0, s.jsxs)("tr", {
                    children: [
                      (0, s.jsx)(l.TH, { children: "Series" }),
                      (0, s.jsx)(l.TH, { children: "Slot (ET)" }),
                      (0, s.jsx)(l.TH, { align: "right", children: "Lot" }),
                      (0, s.jsx)(l.TH, { align: "right", children: "Demand" }),
                      (0, s.jsx)(l.TH, { align: "right", children: "Price" }),
                      (0, s.jsx)(l.TH, { align: "right", children: "Net" }),
                      (0, s.jsx)(l.TH, { children: "State" }),
                    ],
                  }),
                }),
                (0, s.jsx)(l.vc, {
                  children: a.map((e) => {
                    let t = e.ticker === i,
                      n = f(e) ? e.indicativeBasis : void 0,
                      a =
                        e.startsAt > 0
                          ? { start: e.startsAt, end: e.endsAt }
                          : n && n.auctionStartsAt > 0
                          ? { start: n.auctionStartsAt, end: n.auctionEndsAt }
                          : null;
                    return (0, s.jsxs)(
                      l.TR,
                      {
                        interactive: !0,
                        tabIndex: 0,
                        onClick: () => r(e.ticker),
                        onKeyDown: (t) => {
                          ("Enter" === t.key || " " === t.key) &&
                            (t.preventDefault(), r(e.ticker));
                        },
                        className: t ? "bg-raised" : void 0,
                        children: [
                          (0, s.jsx)(l.TD, {
                            children: (0, s.jsxs)("span", {
                              className: "flex items-center gap-2.5",
                              children: [
                                (0, s.jsx)(l.xz, {
                                  ticker: e.ticker,
                                  size: 24,
                                  alt: "",
                                }),
                                (0, s.jsx)("span", {
                                  className: "font-mono",
                                  children: e.ticker,
                                }),
                                (0, s.jsx)("span", {
                                  className:
                                    "hidden text-xs text-muted lg:inline",
                                  children: e.seriesId,
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)(l.TD, {
                            mono: !0,
                            className: "text-xs text-muted",
                            children: a
                              ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    n
                                      ? (0, s.jsx)("span", {
                                          className:
                                            "font-sans text-[10px] text-dim",
                                          children: "exp. ",
                                        })
                                      : null,
                                    (0, m.OP)(a.start, "ET"),
                                    " \xb7 ",
                                    (0, m.CH)(a.start, "ET"),
                                    "–",
                                    (0, m.CH)(a.end, "ET"),
                                  ],
                                })
                              : "—",
                          }),
                          (0, s.jsx)(l.TD, {
                            mono: !0,
                            align: "right",
                            children: (0, o.bu)(e.lotTotal, 0),
                          }),
                          (0, s.jsx)(l.TD, {
                            mono: !0,
                            align: "right",
                            children: (0, o.bu)(e.totalDemand, 0),
                          }),
                          (0, s.jsx)(l.TD, {
                            mono: !0,
                            align: "right",
                            className:
                              "sold" === e.state
                                ? "text-upside"
                                : n
                                ? "text-dim"
                                : void 0,
                            children: n
                              ? "—"
                              : (0, o.dR)(
                                  "sold" === e.state
                                    ? e.clearingPrice
                                    : e.currentPrice,
                                  { decimals: 2 }
                                ),
                          }),
                          (0, s.jsx)(l.TD, {
                            mono: !0,
                            align: "right",
                            children:
                              void 0 !== e.net
                                ? (0, o.dR)(e.net, { compact: !0 })
                                : "—",
                          }),
                          (0, s.jsx)(l.TD, {
                            children: (0, s.jsx)(l.md, {
                              status: b(e.state, e.seriesState),
                              label: g(e),
                              className: "whitespace-nowrap",
                            }),
                          }),
                        ],
                      },
                      e.seriesId
                    );
                  }),
                }),
              ],
            }),
          ],
        });
      }
      let z = (0, n(99011).A)("arrow-down", [
        ["path", { d: "M12 5v14", key: "s699le" }],
        ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
      ]);
      var F = n(54490),
        A = n(71808),
        P = n(81122),
        E = n(12533),
        D = n(3982),
        O = n(32410),
        U = n(53063);
      function I(e) {
        let t = Math.max(0, Math.floor(e)),
          n = Math.floor(t / 86400),
          s = Math.floor((t % 86400) / 3600),
          a = Math.floor((t % 3600) / 60),
          l = t % 60,
          i = (e) => String(e).padStart(2, "0");
        return n > 0
          ? "".concat(n, "d ").concat(i(s), ":").concat(i(a), ":").concat(i(l))
          : s > 0
          ? "".concat(i(s), ":").concat(i(a), ":").concat(i(l))
          : "".concat(i(a), ":").concat(i(l));
      }
      function B(e, t) {
        return (
          !!e && 0 !== e.round && !e.finalized && t >= e.auctionStart - 900
        );
      }
      let L = [
          "Settles on a 30-minute average of the feed's rounds, not the closing print.",
          "Cap price K = P0 \xd7 (1 + cap) is not on the listed contract grid.",
          "Reinvested dividends count toward the cap price: the feed is a total-return price.",
          "An issuer event (termination, a frozen vault) can settle the series early, with notice.",
        ],
        M = function (e) {
          var t;
          let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return "".concat(
            (0, P.ej)(e, 6, {
              maxFraction: null != (t = n.maxFraction) ? t : 6,
              minFraction: 2,
              rounding: n.rounding,
            }),
            " USDG"
          );
        };
      function G(e) {
        let { needsApproval: t, known: n } = e;
        return (0, s.jsxs)("ol", {
          className: "flex flex-wrap items-center gap-1.5 text-[11px]",
          "aria-label": "Send sequence",
          children: [
            (0, s.jsxs)("li", {
              className: (0, p.cn)(
                "inline-flex h-6 items-center gap-1.5 rounded-pill px-2.5 font-medium",
                n
                  ? t
                    ? "bg-income-fill text-ivory"
                    : "border border-income-fill/60 text-income"
                  : "border border-line text-muted"
              ),
              children: [
                n && !t
                  ? (0, s.jsx)(u.A, {
                      className: "size-3",
                      "aria-hidden": "true",
                    })
                  : (0, s.jsx)("span", {
                      className: "font-mono tnum",
                      children: "1",
                    }),
                "Approve USDG",
                n && !t
                  ? (0, s.jsx)("span", {
                      className: "sr-only",
                      children:
                        ", allowance already covers the escrow, skipped",
                    })
                  : null,
              ],
            }),
            (0, s.jsx)("li", {
              className: "text-muted",
              "aria-hidden": "true",
              children: "→",
            }),
            (0, s.jsxs)("li", {
              className:
                "inline-flex h-6 items-center gap-1.5 rounded-pill bg-upside-fill px-2.5 font-medium text-on-accent",
              children: [
                (0, s.jsx)("span", {
                  className: "font-mono tnum",
                  children: "2",
                }),
                "Bid",
              ],
            }),
          ],
        });
      }
      function _(e) {
        var t, n, i;
        let {
            auction: d,
            address: c,
            live: u,
            now: h,
            clock: f,
            spot: g,
            capPrice: b,
          } = e,
          j = (0, a.useId)(),
          [v, k] = (0, a.useState)(""),
          [N, S] = (0, a.useState)("exact"),
          y = (0, E.vr)({ onConfirmed: () => k("") }),
          w = u.snapshot,
          C = (0, P.C_)(v, P.Bs.position),
          T = w && h ? (0, D.OH)(h, w.auctionStart) : f.step,
          R =
            w && h
              ? (0, D.mt)(h, w.auctionStart, w.pStart, w.pFloor)
              : (0, o.J1)(f.price, P.Bs.usdg),
          B = null !== C && C > 0n ? (0, D.NL)(C, R) : void 0,
          _ =
            w && void 0 === u.skew
              ? (0, D.vR)(Math.max(T - 1, 0), w.pStart, w.pFloor)
              : R,
          H = null !== C && C > 0n ? (0, D.NL)(C, _) : void 0,
          K =
            w && h
              ? w
                ? 0 === w.round
                  ? { ok: !1, reason: "No round scheduled yet" }
                  : h < w.auctionStart
                  ? {
                      ok: !1,
                      reason: "Opens "
                        .concat((0, m.gC)(w.auctionStart, "ET"), " ")
                        .concat((0, O.QE)(w.auctionStart), " \xb7 in ")
                        .concat(I(w.auctionStart - h)),
                      until: w.auctionStart,
                    }
                  : w.finalized
                  ? {
                      ok: !1,
                      reason:
                        w.unitsSold > 0n
                          ? "Round finalized"
                          : "Round finalized \xb7 sold nothing",
                    }
                  : w.clearingStepPlusOne > 0
                  ? {
                      ok: !1,
                      reason: "Crossed at step #".concat(
                        String(w.clearingStepPlusOne - 1).padStart(3, "0"),
                        " \xb7 no more bids"
                      ),
                    }
                  : h >= w.auctionEnd
                  ? { ok: !1, reason: "Round ended \xb7 awaiting finalize" }
                  : 0n === w.lotTotal
                  ? { ok: !1, reason: "No Upside lot in this round" }
                  : {
                      ok: !0,
                      reason: "Ends in ".concat(I(w.auctionEnd - h)),
                      until: w.auctionEnd,
                    }
                : { ok: !1, reason: "Waiting for the chain" }
              : r.KO
              ? {
                  ok: !1,
                  reason: u.error
                    ? "Chain read failed \xb7 retrying"
                    : "Waiting for the chain",
                }
              : "bidding" === d.state
              ? { ok: !0 }
              : {
                  ok: !1,
                  reason: "".concat(x[d.state], " \xb7 bidding closed"),
                },
          $ =
            ((i = u.account),
            null === C
              ? { ok: !1, reason: "Enter units (up to 18 decimals)" }
              : C < 10n ** 15n
              ? { ok: !1, reason: "Minimum bid is 0.001 Upside" }
              : w && C > w.lotTotal
              ? { ok: !1, reason: "Bid exceeds the lot on offer" }
              : C > 2n ** 96n - 1n
              ? { ok: !1, reason: "Bid too large" }
              : i && void 0 !== B && i.usdgBalance < B
              ? { ok: !1, reason: "Insufficient USDG for the escrow" }
              : { ok: !0 }),
          q =
            void 0 === u.account || void 0 === B || u.account.usdgAllowance < B,
          W = !K.ok || !$.ok || y.busy || (r.KO && !w),
          Z = w
            ? (0, P.ej)(w.lotTotal, 18, { maxFraction: 4 })
            : (0, o.bu)(d.lotTotal, 4),
          Y =
            !!w &&
            !!h &&
            (w.finalized || w.clearingStepPlusOne > 0 || h >= w.auctionEnd),
          Q = y.busy
            ? null != (n = y.currentLabel)
              ? n
              : "Sending…"
            : K.ok
            ? r.KO
              ? y.gate.canWrite
                ? null === C
                  ? "Enter units"
                  : q
                  ? "Approve USDG → Bid ".concat(
                      (0, P.ej)(C, 18, { maxFraction: 4 })
                    )
                  : "Bid ".concat(
                      (0, P.ej)(C, 18, { maxFraction: 4 }),
                      " Upside"
                    )
                : (
                    null == (t = y.gate.reason)
                      ? void 0
                      : t.startsWith("Switch")
                  )
                ? "Switch chain & bid"
                : "Connect & bid"
              : "Bid (preview)"
            : "Bid",
          X = async () => {
            var e, t;
            null !== C &&
              (await y.send(
                (0, A.Xe)({
                  auction:
                    null != c
                      ? c
                      : "0x0000000000000000000000000000000000000000",
                  units: C,
                  priceHint: R,
                  auctionStart:
                    null != (e = null == w ? void 0 : w.auctionStart)
                      ? e
                      : d.startsAt,
                  auctionEnd:
                    null != (t = null == w ? void 0 : w.auctionEnd)
                      ? t
                      : d.endsAt,
                  approve: N,
                })
              ));
          },
          V = async (e) => {
            e.preventDefault(), W || (await X());
          },
          J =
            ("not-included" === y.status || "timeout" === y.status) &&
            null !== C &&
            K.ok &&
            $.ok,
          ee = w ? Number(w.pStart) / 1e6 : d.pStart,
          et =
            void 0 !== g && void 0 !== b && g > 0 && b > 0
              ? Math.max(g - b, 0)
              : 0,
          en = et > ee && ee > 0 ? { intrinsic: et, pStart: ee } : null;
        if (Y && w) {
          let e = w.finalized
            ? "Round "
                .concat(w.round, " finalized")
                .concat(
                  w.unitsSold > 0n ? "" : " \xb7 sold nothing",
                  " \xb7 claims below"
                )
            : w.clearingStepPlusOne > 0
            ? "Crossed at step #".concat(
                String(w.clearingStepPlusOne - 1).padStart(3, "0"),
                " \xb7 finalize pending"
              )
            : "Clock ran out \xb7 finalize pending";
          return (0, s.jsxs)(l.Zp, {
            tone: "upside",
            as: "section",
            "aria-labelledby": "".concat(j, "-title"),
            padding: "sm",
            children: [
              (0, s.jsx)(l.aR, {
                title: (0, s.jsx)("span", {
                  id: "".concat(j, "-title"),
                  children: "Bidding closed",
                }),
                aside: (0, s.jsx)("span", {
                  className: "label-caps text-upside",
                  children: U.TE,
                }),
                className: "mb-2",
              }),
              (0, s.jsx)("p", {
                role: "status",
                className: "font-mono text-xs text-muted tnum",
                children: e,
              }),
              (0, s.jsx)(F.R, {
                tx: y,
                className: "mt-3",
                previewNote: "the bid would escrow the USDG shown above",
              }),
            ],
          });
        }
        return (0, s.jsxs)(l.Zp, {
          tone: "upside",
          as: "section",
          "aria-labelledby": "".concat(j, "-title"),
          children: [
            (0, s.jsx)(l.aR, {
              title: (0, s.jsx)("span", {
                id: "".concat(j, "-title"),
                children: "Bid at this step",
              }),
              aside: (0, s.jsx)("span", {
                className: "label-caps text-upside",
                children: U.TE,
              }),
            }),
            (0, s.jsxs)("form", {
              onSubmit: V,
              className: "flex flex-col gap-4",
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsxs)("label", {
                      htmlFor: "".concat(j, "-units"),
                      className: "text-xs text-muted",
                      children: ["Units of ", d.ticker, " ", U.TE],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "mt-1.5 flex items-center gap-2 rounded-xl border border-rule bg-bg/60 px-3 focus-within:border-upside",
                      children: [
                        (0, s.jsx)("input", {
                          id: "".concat(j, "-units"),
                          inputMode: "decimal",
                          value: v,
                          onChange: (e) => k(e.target.value),
                          disabled: y.busy,
                          "aria-describedby": "".concat(j, "-hint"),
                          "aria-invalid":
                            ("" !== v.trim() && (null === C || !$.ok)) ||
                            void 0,
                          className:
                            "h-11 w-full min-w-0 bg-transparent font-mono text-base text-fg outline-none tnum placeholder:text-dim disabled:opacity-50",
                          placeholder: "0.000",
                        }),
                        (0, s.jsx)("span", {
                          className: "font-mono text-xs text-muted",
                          children: "units",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("p", {
                      id: "".concat(j, "-hint"),
                      className: "mt-1.5 text-[11px] text-muted",
                      children: [
                        "Min 0.001 \xb7 max ",
                        Z,
                        " (the lot)",
                        w
                          ? " \xb7 demand so far ".concat(
                              (0, P.ej)(w.totalDemand, 18, { maxFraction: 2 })
                            )
                          : "",
                        $.ok || "" === v.trim()
                          ? null
                          : (0, s.jsxs)("span", {
                              className: "text-warning",
                              children: [" \xb7 ", $.reason],
                            }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "flex items-center justify-center text-muted",
                  "aria-hidden": "true",
                  children: (0, s.jsx)(z, { className: "size-4" }),
                }),
                (0, s.jsxs)(l.l7, {
                  children: [
                    (0, s.jsx)(l.jP, {
                      label: "Clock price at step",
                      value: M(R),
                      hint: "#".concat(String(T).padStart(3, "0")),
                      tone: "upside",
                    }),
                    (0, s.jsx)(l.jP, {
                      label: "Escrow pulled now",
                      value: $.ok && void 0 !== B ? M(B) : "—",
                      hint: "ceil to 1e-6",
                    }),
                    (0, s.jsx)(l.jP, {
                      label: "Pays at most",
                      value:
                        $.ok && void 0 !== H
                          ? M(H, { maxFraction: 2, rounding: "ceil" })
                          : "—",
                      hint:
                        void 0 === u.skew && w
                          ? "previous step's price until the chain clock is read"
                          : "filled at the clearing price",
                    }),
                    u.account
                      ? (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(l.jP, {
                              label: "USDG balance",
                              value: (0, P.ej)(u.account.usdgBalance, 6, {
                                maxFraction: 2,
                                minFraction: 2,
                              }),
                              tone:
                                void 0 !== B && u.account.usdgBalance < B
                                  ? "muted"
                                  : "default",
                            }),
                            (0, s.jsx)(l.jP, {
                              label: "USDG allowance to the auction",
                              value: (0, P.yb)(u.account.usdgAllowance, 6, "", {
                                maxFraction: 2,
                                minFraction: 2,
                              }),
                              hint:
                                void 0 === B
                                  ? void 0
                                  : q
                                  ? "approve first"
                                  : "covers this bid",
                            }),
                          ],
                        })
                      : null,
                  ],
                }),
                (0, s.jsxs)("label", {
                  className: "flex items-center gap-2 text-[11px] text-muted",
                  children: [
                    (0, s.jsx)("input", {
                      type: "checkbox",
                      checked: "max" === N,
                      onChange: (e) => S(e.target.checked ? "max" : "exact"),
                      disabled: y.busy,
                      className: "size-3.5 accent-accent",
                    }),
                    "Approve unlimited USDG to this auction (default: the exact escrow)",
                  ],
                }),
                (0, s.jsx)(G, {
                  needsApproval: q,
                  known: !!u.account && void 0 !== B,
                }),
                (0, s.jsx)(l.$n, {
                  type: "submit",
                  variant: "upside",
                  size: "lg",
                  disabled: W,
                  title: K.ok ? ($.ok ? void 0 : $.reason) : K.reason,
                  className: "w-full min-w-0",
                  children: (0, s.jsx)("span", {
                    className: "min-w-0 whitespace-normal leading-tight",
                    children: Q,
                  }),
                }),
                K.reason
                  ? (0, s.jsx)("p", {
                      className: (0, p.cn)(
                        "text-center font-mono text-[11px] tnum",
                        K.ok || K.until ? "text-upside" : "text-muted"
                      ),
                      "aria-live": "off",
                      children: K.reason,
                    })
                  : null,
                (0, s.jsx)(F.R, {
                  tx: y,
                  previewNote: "the bid would escrow the USDG shown above",
                  children: J
                    ? (0, s.jsxs)(l.$n, {
                        size: "sm",
                        variant: "secondary",
                        onClick: () => void X(),
                        children: [
                          "Send again \xb7 ",
                          (0, P.ej)(C, 18, { maxFraction: 4 }),
                          " Upside",
                        ],
                      })
                    : null,
                }),
                en
                  ? (0, s.jsxs)("p", {
                      role: "status",
                      className:
                        "rounded-md border border-warning/40 px-3 py-2 text-[11px] leading-relaxed text-warning",
                      children: [
                        "Intrinsic value ",
                        (0, o.dR)(en.intrinsic, { decimals: 4 }),
                        " per unit (spot − K) is above the clock start ",
                        (0, o.dR)(en.pStart, { decimals: 4 }),
                        ": after a gap the round can clear below intrinsic. The clock only falls; a bid at the start price is the most a bidder pays.",
                      ],
                    })
                  : null,
                (0, s.jsx)("p", {
                  className: "text-[11px] leading-relaxed text-muted",
                  children:
                    "A bid is a firm limit order at the clock price of the step in which it is mined; the clock only falls, so the escrow above is the most it pulls. It cannot be cancelled and fills at the clearing price if the round clears at or below its step. Unfilled escrow is refundable after finalize.",
                }),
                (0, s.jsxs)("div", {
                  className: "text-[11px] leading-relaxed text-muted",
                  children: [
                    (0, s.jsx)("p", {
                      className: "mb-1 label-caps",
                      children: "Hedging basis",
                    }),
                    (0, s.jsx)("ul", {
                      className: "list-disc space-y-0.5 pl-4",
                      children: L.map((e) =>
                        (0, s.jsx)("li", { children: e }, e)
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function H(e) {
        let { auction: t, address: n, live: i } = e,
          o = (0, E.vr)(),
          [d, c] = (0, a.useState)(null),
          u = [
            ...(function (e, t) {
              if (!t) return [];
              let n = [];
              for (let s of e) {
                let e =
                    s.round !== t.round || t.finalized
                      ? { ok: !0 }
                      : { ok: !1, reason: "After finalize" },
                  a = s.round !== t.round,
                  l = "Bid #"
                    .concat(s.id.toString(), " \xb7 step #")
                    .concat(String(s.step).padStart(3, "0"))
                    .concat(a ? " \xb7 round ".concat(s.round) : ""),
                  i = !s.upsideClaimed && !s.refundClaimed,
                  r = !e.ok,
                  o = r
                    ? "escrow ".concat(
                        (0, P.ej)(s.escrow, 6, {
                          maxFraction: 2,
                          minFraction: 2,
                        }),
                        " USDG \xb7 fill at finalize"
                      )
                    : void 0;
                n.push({
                  key: "fill-".concat(s.id),
                  kind: "claimFill",
                  bidId: s.id,
                  title: "".concat(l, " \xb7 Upside + refund"),
                  fn: "claimFill(bidId)",
                  amounts: r
                    ? []
                    : [
                        { value: s.fill, decimals: 18, symbol: U.TE },
                        { value: s.refund, decimals: 6, symbol: "USDG" },
                      ],
                  amountNote: o,
                  gate: e.ok
                    ? i
                      ? { ok: !0 }
                      : {
                          ok: !1,
                          reason:
                            "One leg already claimed \xb7 use the single leg",
                        }
                    : e,
                  claimed: s.upsideClaimed && s.refundClaimed,
                  primary: i,
                }),
                  n.push({
                    key: "upside-".concat(s.id),
                    kind: "claimFillUpside",
                    bidId: s.id,
                    title: "".concat(l, " \xb7 filled Upside"),
                    fn: "claimFillUpside(bidId)",
                    amounts: r
                      ? []
                      : [{ value: s.fill, decimals: 18, symbol: U.TE }],
                    amountNote: r ? "— \xb7 set at finalize" : void 0,
                    gate: e.ok
                      ? s.upsideClaimed
                        ? { ok: !1, reason: "Claimed" }
                        : { ok: !0 }
                      : e,
                    claimed: s.upsideClaimed,
                    primary: !i && !s.upsideClaimed,
                  }),
                  n.push({
                    key: "refund-".concat(s.id),
                    kind: "claimRefund",
                    bidId: s.id,
                    title: "".concat(l, " \xb7 refund"),
                    fn: "claimRefund(bidId)",
                    amounts: r
                      ? []
                      : [{ value: s.refund, decimals: 6, symbol: "USDG" }],
                    amountNote: r ? "— \xb7 set at finalize" : void 0,
                    gate: e.ok
                      ? s.refundClaimed
                        ? { ok: !1, reason: "Claimed" }
                        : { ok: !0 }
                      : e,
                    claimed: s.refundClaimed,
                    primary: !i && !s.refundClaimed,
                  });
              }
              return n;
            })(i.bids, i.snapshot),
            ...(function (e, t) {
              if (!e || !t) return [];
              let n = [],
                s = e.finalized && e.unitsSold > 0n;
              if (t.lotOf > 0n || t.proceedsClaimed || t.unsoldClaimed) {
                n.push({
                  key: "proceeds",
                  kind: "claimProceeds",
                  title: "Subscriber proceeds",
                  fn: "claimProceeds()",
                  amounts: [{ value: t.proceeds, decimals: 6, symbol: "USDG" }],
                  gate: t.proceedsClaimed
                    ? { ok: !1, reason: "Claimed" }
                    : s
                    ? 0n === t.lotOf
                      ? { ok: !1, reason: "No lot" }
                      : {
                          ok: !0,
                          reason:
                            0n === t.proceeds
                              ? "Reserve above the clearing step \xb7 claims zero"
                              : void 0,
                        }
                    : {
                        ok: !1,
                        reason: e.finalized
                          ? "The round sold nothing \xb7 no proceeds"
                          : "After a round sells",
                      },
                  claimed: t.proceedsClaimed,
                  primary: !0,
                });
                let a = e.finalized && 0n === e.unitsSold && e.canReschedule;
                n.push({
                  key: "unsold",
                  kind: "claimUnsold",
                  title: "Unsold Upside",
                  fn: "claimUnsold()",
                  amounts: [{ value: t.unsold, decimals: 18, symbol: U.TE }],
                  gate: t.unsoldClaimed
                    ? { ok: !1, reason: "Claimed" }
                    : e.finalized
                    ? 0n === t.lotOf
                      ? { ok: !1, reason: "No lot" }
                      : a
                      ? {
                          ok: !1,
                          reason:
                            "A re-run is still possible \xb7 unlocks once it is not",
                        }
                      : {
                          ok: !0,
                          reason:
                            0n === e.unitsSold
                              ? "Final no-sale \xb7 pulls the whole lot off the curve"
                              : void 0,
                        }
                    : { ok: !1, reason: "After finalize" },
                  claimed: t.unsoldClaimed,
                  primary: !0,
                });
              }
              if (s) {
                let s =
                  t.account.toLowerCase() === e.feeRecipient.toLowerCase()
                    ? "to this address"
                    : "to the fee vault \xb7 anyone may call";
                n.push({
                  key: "fee",
                  kind: "claimFee",
                  title: "Auction fee → vault",
                  fn: "claimFee()",
                  amounts: [{ value: e.fee, decimals: 6, symbol: "USDG" }],
                  gate: e.feeClaimed
                    ? { ok: !1, reason: "Claimed" }
                    : { ok: !0, reason: s },
                  claimed: e.feeClaimed,
                  primary: !0,
                });
              }
              return n;
            })(i.snapshot, i.account),
          ],
          p = !!i.account,
          m = async (e) => {
            c(e.key),
              await o.send(
                (function (e, t) {
                  switch (e.kind) {
                    case "claimFill":
                      return (0, A.Yp)(t, e.bidId);
                    case "claimFillUpside":
                      return (0, A.Gj)(t, e.bidId);
                    case "claimRefund":
                      return (0, A.vS)(t, e.bidId);
                    case "claimProceeds":
                      return (0, A.Uo)(t);
                    case "claimUnsold":
                      return (0, A.Yj)(t);
                    case "claimFee":
                      return (0, A.$G)(t);
                  }
                })(
                  e,
                  null != n ? n : "0x0000000000000000000000000000000000000000"
                )
              );
          },
          x = r.KO
            ? p
              ? i.isLoading || i.bidsLoading
                ? "Reading the chain…"
                : "No bids or lot from this wallet on "
                    .concat(t.ticker, " epoch ")
                    .concat(t.epoch, ".")
              : "Connect a wallet to see its bids, lot and claims on this auction."
            : "Preview data \xb7 claims are read from the chain in live mode.";
        return (0, s.jsxs)(l.Zp, {
          as: "section",
          "aria-labelledby": "claims-title",
          children: [
            (0, s.jsx)(l.aR, {
              title: (0, s.jsxs)("span", {
                id: "claims-title",
                children: ["Claims \xb7 ", t.ticker],
              }),
              aside: (0, s.jsxs)("span", {
                className: "label-caps",
                children: ["round ", t.round, " \xb7 pulls \xb7 no expiry"],
              }),
            }),
            0 === u.length
              ? (0, s.jsx)("p", {
                  className: "text-sm text-muted",
                  children: x,
                })
              : (0, s.jsxs)(l.XI, {
                  children: [
                    (0, s.jsx)(l.D1, {
                      children: (0, s.jsxs)("tr", {
                        children: [
                          (0, s.jsx)(l.TH, { children: "Claim" }),
                          (0, s.jsx)(l.TH, {
                            align: "right",
                            children: "Amount",
                          }),
                          (0, s.jsx)(l.TH, {
                            align: "right",
                            children: "Action",
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)(l.vc, {
                      children: u.map((e) => {
                        var t, n;
                        let a = d === e.key && "idle" !== o.status,
                          i = a && o.busy,
                          r =
                            a &&
                            ("not-included" === o.status ||
                              "timeout" === o.status) &&
                            e.gate.ok,
                          c =
                            void 0 !== e.bidId &&
                            d === "fill-".concat(e.bidId) &&
                            "failed" === o.status,
                          u =
                            e.gate.ok &&
                            (e.primary || (c && "claimFill" !== e.kind));
                        return (0, s.jsxs)(
                          l.TR,
                          {
                            className: e.claimed ? "opacity-60" : void 0,
                            children: [
                              (0, s.jsxs)(l.TD, {
                                children: [
                                  (0, s.jsx)("span", {
                                    className: "block text-sm",
                                    children: e.title,
                                  }),
                                  (0, s.jsx)("span", {
                                    className:
                                      "block font-mono text-[11px] text-muted",
                                    children: e.fn,
                                  }),
                                  a
                                    ? (0, s.jsx)(F.R, {
                                        tx: o,
                                        className: "mt-2",
                                        hideSteps: !0,
                                        previewNote:
                                          "claims are pulls to msg.sender",
                                        children: r
                                          ? (0, s.jsx)(l.$n, {
                                              size: "sm",
                                              variant: "secondary",
                                              onClick: () => void m(e),
                                              children: "Send again",
                                            })
                                          : null,
                                      })
                                    : null,
                                ],
                              }),
                              (0, s.jsx)(l.TD, {
                                mono: !0,
                                align: "right",
                                children:
                                  0 === e.amounts.length
                                    ? null != (n = e.amountNote)
                                      ? n
                                      : "—"
                                    : e.amounts
                                        .map((e) =>
                                          ""
                                            .concat(
                                              (0, P.ej)(e.value, e.decimals, {
                                                maxFraction:
                                                  6 === e.decimals ? 2 : 4,
                                                minFraction:
                                                  2 * (6 === e.decimals),
                                              }),
                                              " "
                                            )
                                            .concat(e.symbol)
                                        )
                                        .join(" + "),
                              }),
                              (0, s.jsx)(l.TD, {
                                align: "right",
                                children: (0, s.jsxs)("span", {
                                  className: "flex flex-col items-end gap-1",
                                  children: [
                                    (0, s.jsx)(l.$n, {
                                      size: "sm",
                                      variant: u ? "primary" : "secondary",
                                      disabled: !e.gate.ok || o.busy,
                                      title: e.gate.reason,
                                      onClick: () => m(e),
                                      children: i
                                        ? null != (t = o.currentLabel)
                                          ? t
                                          : "Sending…"
                                        : e.claimed
                                        ? "Claimed"
                                        : "Claim",
                                    }),
                                    e.gate.reason && !e.claimed
                                      ? (0, s.jsx)("span", {
                                          className:
                                            "max-w-[14rem] text-right text-[11px] text-muted",
                                          children: e.gate.reason,
                                        })
                                      : null,
                                  ],
                                }),
                              }),
                            ],
                          },
                          e.key
                        );
                      }),
                    }),
                  ],
                }),
            i.bidsTruncated
              ? (0, s.jsx)("p", {
                  className: "mt-2 text-[11px] text-warning",
                  children:
                    "Only the first 5,000 bids of this auction are listed; later bids are not shown here.",
                })
              : null,
            (0, s.jsx)("p", {
              className: "mt-3 text-[11px] text-muted",
              children:
                "Bidders pull filled Upside and the unfilled escrow per bid: claimFill takes both legs in one call; the single legs exist for a blocked refund and stay secondary until the combined call is gated. Fill and refund are set at finalize. Subscribers pull net USDG proceeds and unsold Upside. claimFee sweeps the fee to the vault; anyone may call it once a round sold.",
            }),
          ],
        });
      }
      let K = "0x0000000000000000000000000000000000000000";
      function $(e) {
        var t, n, a;
        let { auction: i, address: o, live: d, now: c } = e,
          u = (0, E.vr)(),
          p = d.snapshot,
          x = { ok: !1, reason: "Waiting for the chain" },
          h = r.KO
            ? p && c
              ? (function (e, t) {
                  if (!e) return { ok: !1, reason: "Waiting for the chain" };
                  if (0 === e.round)
                    return { ok: !1, reason: "No round scheduled" };
                  if (e.finalized)
                    return { ok: !1, reason: "Already finalized" };
                  let n =
                    e.clearingStepPlusOne > 0
                      ? Math.min(
                          e.auctionStart +
                            e.clearingStepPlusOne * r.nl.auctionStepSeconds,
                          e.auctionEnd
                        )
                      : e.auctionEnd;
                  if (t < e.auctionStart)
                    return { ok: !1, reason: "Round not started", until: n };
                  if (t < n) {
                    let s =
                      e.clearingStepPlusOne > 0
                        ? "clearing step ends"
                        : "round ends";
                    return {
                      ok: !1,
                      reason: "Finalizable "
                        .concat((0, O.QE)(n), " \xb7 in ")
                        .concat(I(n - t), " (")
                        .concat(s, ")"),
                      until: n,
                    };
                  }
                  return {
                    ok: !0,
                    reason:
                      e.clearingStepPlusOne > 0
                        ? "Crossed \xb7 writes pClear and opens claims"
                        : "Clock ran out \xb7 finds the crossing and opens claims",
                  };
                })(p, c)
              : x
            : "crossed" === i.state
            ? { ok: !0 }
            : { ok: !1, reason: "Nothing to finalize" },
          f = r.KO
            ? p
              ? p
                ? p.finalized
                  ? p.unitsSold > 0n
                    ? { ok: !1, reason: "The round sold \xb7 no re-run" }
                    : p.canReschedule
                    ? {
                        ok: !0,
                        reason:
                          "Round sold nothing \xb7 anyone may re-run it at the next slot",
                      }
                    : {
                        ok: !1,
                        reason: "No auction slot before the settlement window",
                      }
                  : { ok: !1, reason: "Only after a finalized round" }
                : { ok: !1, reason: "Waiting for the chain" }
              : x
            : "nosale" === i.state
            ? { ok: !0 }
            : { ok: !1, reason: "Only after a no-sale" };
        if (
          "bidding" !== i.state &&
          "crossed" !== i.state &&
          "nosale" !== i.state &&
          "idle" === u.status
        )
          return null;
        let g = null == (t = u.steps[0]) ? void 0 : t.label,
          b = (null == p ? void 0 : p.nextSlot)
            ? ""
                .concat((0, m.gC)(p.nextSlot, "ET"), " \xb7 ")
                .concat((0, m.vI)(p.nextSlot, "ET"))
            : void 0,
          j = () => u.send((0, A.b5)(null != o ? o : K)),
          v = () => u.send((0, A.GJ)(null != o ? o : K)),
          k =
            "not-included" === u.status || "timeout" === u.status
              ? "Re-run" === g
                ? f.ok
                  ? v
                  : null
                : h.ok
                ? j
                : null
              : null;
        return (0, s.jsxs)(l.Zp, {
          as: "section",
          "aria-labelledby": "keeper-title",
          padding: "sm",
          children: [
            (0, s.jsx)(l.aR, {
              title: (0, s.jsx)("span", {
                id: "keeper-title",
                children: "Round transitions",
              }),
              aside: (0, s.jsx)("span", {
                className: "label-caps",
                children: "anyone can call",
              }),
              className: "mb-3",
            }),
            (0, s.jsxs)("div", {
              className: "flex flex-col gap-3",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex flex-wrap items-center gap-3",
                  children: [
                    (0, s.jsx)(l.$n, {
                      size: "sm",
                      variant: h.ok ? "primary" : "secondary",
                      disabled: !h.ok || u.busy,
                      title: h.reason,
                      onClick: () => void j(),
                      children:
                        u.busy && "Finalize" === g
                          ? null != (n = u.currentLabel)
                            ? n
                            : "Sending…"
                          : "sold" === i.state
                          ? "Round ".concat(i.round, " finalized")
                          : "Finalize round ".concat(i.round),
                    }),
                    (0, s.jsx)("span", {
                      className: "font-mono text-[11px] text-muted tnum",
                      children: h.reason,
                    }),
                  ],
                }),
                "nosale" === i.state || f.ok
                  ? (0, s.jsxs)("div", {
                      className: "flex flex-wrap items-center gap-3",
                      children: [
                        (0, s.jsx)(l.$n, {
                          size: "sm",
                          variant: f.ok ? "primary" : "secondary",
                          disabled: !f.ok || u.busy,
                          title: f.reason,
                          onClick: () => void v(),
                          children:
                            u.busy && "Re-run" === g
                              ? null != (a = u.currentLabel)
                                ? a
                                : "Sending…"
                              : "Re-run at the next slot",
                        }),
                        (0, s.jsx)("span", {
                          className: "text-[11px] text-muted",
                          children:
                            f.ok && b ? "Next slot ".concat(b) : f.reason,
                        }),
                      ],
                    })
                  : null,
                (0, s.jsx)(F.R, {
                  tx: u,
                  hideSteps: !0,
                  previewNote:
                    "finalize / reschedule are permissionless keeper calls",
                  children: k
                    ? (0, s.jsx)(l.$n, {
                        size: "sm",
                        variant: "secondary",
                        onClick: () => void k(),
                        children: "Send again",
                      })
                    : null,
                }),
                (0, s.jsx)("p", {
                  className: "text-[11px] leading-relaxed text-muted",
                  children:
                    "finalize() writes the clearing price and opens claims; it is permissionless and pays nothing to the caller. A round that sold nothing may be re-run by anyone while an auction slot exists before the settlement window; lots and reserves reopen in between.",
                }),
              ],
            }),
          ],
        });
      }
      function q(e) {
        var t, n, i, d, c, u;
        let {
            auction: p,
            address: x,
            live: h,
            now: f,
            p0: g,
            indicative: b = !1,
          } = e,
          [j, v] = (0, a.useState)(null),
          k = (0, E.vr)({ onConfirmed: () => v(null) }),
          N = p.steps - 1,
          S = p.stepSeconds || 30,
          w = h.account,
          C =
            null != (t = null != j ? j : null == w ? void 0 : w.reserveOf)
              ? t
              : p.defaultReserveStep,
          T = (0, y.Gg)(C, p.pStart, p.pFloor, { stepSeconds: S }),
          R = [0, 60, 120, 180, N].map((e) => ({
            value: e,
            label: e === N ? "floor" : "#".concat(e),
          })),
          z =
            "unscheduled" === p.state ||
            "scheduled" === p.state ||
            "nosale" === p.state,
          O = r.KO
            ? h.snapshot
              ? ((i = h.snapshot),
                (d = w),
                (c = C),
                (u = f),
                i
                  ? d
                    ? 0n === d.lotOf
                      ? {
                          ok: !1,
                          reason:
                            "No Upside lot under this address \xb7 subscribe from the markets page",
                        }
                      : i.canAddLot
                      ? c < 0 || c >= D.UT
                        ? { ok: !1, reason: "Reserve step out of range" }
                        : c === d.reserveOf
                        ? { ok: !1, reason: "Unchanged" }
                        : { ok: !0 }
                      : i.round > 0 && u >= i.auctionStart && !i.finalized
                      ? {
                          ok: !1,
                          reason:
                            "Lots and reserves are frozen while the round runs",
                        }
                      : { ok: !1, reason: "Lots are locked" }
                    : { ok: !1, reason: "Connect a wallet" }
                  : { ok: !1, reason: "Waiting for the chain" })
              : { ok: !1, reason: "Waiting for the chain" }
            : z
            ? { ok: !0 }
            : { ok: !1, reason: "Lots and reserves are frozen for this round" },
          I = !!w && w.lotOf > 0n,
          B = () =>
            k.send(
              (0, A.Ti)(
                null != x ? x : "0x0000000000000000000000000000000000000000",
                C
              )
            ),
          L = ("not-included" === k.status || "timeout" === k.status) && O.ok;
        return (0, s.jsxs)(l.Zp, {
          as: "section",
          "aria-labelledby": "reserve-title",
          children: [
            (0, s.jsx)(l.aR, {
              title: (0, s.jsx)("span", {
                id: "reserve-title",
                children: "Your reserve (sellers)",
              }),
              aside: (0, s.jsxs)("span", {
                className: "label-caps text-income",
                children: [U._b, " side"],
              }),
            }),
            (0, s.jsx)("p", {
              className: "mb-4 text-[11px] leading-relaxed text-muted",
              children:
                "Your reserve step is the last clock step at which you sell. Supply at a step is the lot of subscribers whose reserve is at or beyond it, so it shrinks as the clock falls. If the auction clears above your reserve you keep your Upside; otherwise you sell pro rata at the clearing price.",
            }),
            (0, s.jsx)(l.Ap, {
              knob: "lime",
              label: "Reserve step",
              value: C,
              onChange: v,
              min: 0,
              max: N,
              ticks: R,
              format: (e) =>
                "#"
                  .concat(String(e).padStart(3, "0"), " \xb7 ")
                  .concat(
                    (0, o.dR)(
                      (0, y.Gg)(e, p.pStart, p.pFloor, { stepSeconds: S }),
                      { decimals: 2 }
                    )
                  ),
            }),
            (0, s.jsxs)(l.l7, {
              className: "mt-2",
              children: [
                (0, s.jsx)(l.jP, {
                  label: "Reserve price",
                  value: (0, o.dR)(T, { decimals: 4 }),
                  hint: g
                    ? ""
                        .concat(
                          (0, o.Oe)(T / g, { signed: !1, decimals: 2 }),
                          " of "
                        )
                        .concat(b ? "the feed price \xb7 indicative" : "P0")
                    : b
                    ? "indicative"
                    : void 0,
                  tone: "income",
                }),
                p.startsAt > 0
                  ? (0, s.jsx)(l.jP, {
                      label: "Clock reaches it",
                      value: (0, m.CH)(p.startsAt + C * S, "ET", !0),
                      hint: "ET",
                    })
                  : (0, s.jsx)(l.jP, {
                      label: "Clock reaches it",
                      value: "".concat(Math.round((C * S) / 60), " min in"),
                      hint: "once scheduled",
                      tone: "muted",
                    }),
                w
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(l.jP, {
                          label: "Your lot",
                          value: "".concat(
                            (0, P.ej)(w.lotOf, 18, { maxFraction: 4 }),
                            " Upside"
                          ),
                          tone: I ? "default" : "muted",
                        }),
                        (0, s.jsx)(l.jP, {
                          label: "Reserve on chain",
                          value: I
                            ? "#".concat(String(w.reserveOf).padStart(3, "0"))
                            : "—",
                          hint:
                            I && null !== j && j !== w.reserveOf
                              ? "→ #".concat(String(j).padStart(3, "0"))
                              : void 0,
                        }),
                      ],
                    })
                  : null,
                (0, s.jsx)(l.jP, {
                  label: "Default",
                  value: "#"
                    .concat(p.defaultReserveStep, " \xb7 floor ")
                    .concat((0, o.dR)(p.pFloor, { decimals: 2 })),
                  hint: b ? "indicative" : void 0,
                  tone: "muted",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "mt-4 flex flex-wrap items-center gap-3",
              children: [
                (0, s.jsx)(l.$n, {
                  variant: "income",
                  disabled: !O.ok || k.busy,
                  title: O.reason,
                  onClick: B,
                  children: k.busy
                    ? null != (n = k.currentLabel)
                      ? n
                      : "Sending…"
                    : "Set reserve to #".concat(String(C).padStart(3, "0")),
                }),
                null !== j && w
                  ? (0, s.jsx)("button", {
                      type: "button",
                      className:
                        "text-[11px] text-muted underline-offset-2 hover:text-fg hover:underline",
                      onClick: () => v(null),
                      children: "Reset to on-chain",
                    })
                  : null,
                !O.ok && O.reason
                  ? (0, s.jsx)("span", {
                      className: "text-[11px] text-muted",
                      children: O.reason,
                    })
                  : null,
              ],
            }),
            (0, s.jsx)(F.R, {
              tx: k,
              className: "mt-3",
              hideSteps: !0,
              previewNote:
                "setReserve(step) moves your lot between reserve buckets",
              children: L
                ? (0, s.jsxs)(l.$n, {
                    size: "sm",
                    variant: "secondary",
                    onClick: () => void B(),
                    children: ["Send again \xb7 #", String(C).padStart(3, "0")],
                  })
                : null,
            }),
            (0, s.jsxs)("p", {
              className: "mt-3 text-[11px] text-muted",
              children: [
                z
                  ? "Reserves can be set or changed until the auction starts, and between rounds after a no-sale."
                  : "Lots and reserves are frozen for this round. They reopen only if the round sells nothing and is re-run.",
                " ",
                "The floor is only the default reserve; the protocol sets no price.",
              ],
            }),
          ],
        });
      }
      var W = n(72555),
        Z = n(85726);
      function Y(e) {
        let { auction: t, feeBps: n } = e,
          a = t.indicativeBasis,
          i =
            a && a.auctionStartsAt > 0
              ? ""
                  .concat((0, m.gC)(a.auctionStartsAt, "ET"), " \xb7 ")
                  .concat((0, m.hO)(a.auctionStartsAt, a.auctionEndsAt, "ET"))
              : "—";
        return (0, s.jsxs)(l.Zp, {
          as: "section",
          "aria-labelledby": "pending-open-title",
          children: [
            (0, s.jsx)(l.aR, {
              title: (0, s.jsx)("span", {
                id: "pending-open-title",
                children: "Scheduled at the open",
              }),
              aside: (0, s.jsx)("span", {
                className: "label-caps",
                children: "round 1 \xb7 not yet scheduled",
              }),
            }),
            (0, s.jsxs)(l.l7, {
              children: [
                (0, s.jsx)(l.jP, {
                  label: "Series opens",
                  value: (0, s.jsx)("span", {
                    className: "font-sans",
                    children: a ? (0, Z.Iu)(a) : "—",
                  }),
                }),
                (0, s.jsx)(l.jP, {
                  label: "Expected slot",
                  value: i,
                  hint: "set by open()",
                  tone: "upside",
                }),
                (0, s.jsx)(l.jP, {
                  label: "".concat(U.TE, " subscribed so far"),
                  value: "".concat((0, o.bu)(t.lotTotal, 4), " units"),
                  hint: "on chain",
                }),
                (0, s.jsx)(l.jP, {
                  label: "Clock start \xb7 floor",
                  value:
                    a && a.price > 0
                      ? ""
                          .concat((0, o.dR)(t.pStart), " \xb7 ")
                          .concat((0, o.dR)(t.pFloor))
                      : "—",
                  hint: "indicative (feed) \xb7 fixed at open",
                }),
                (0, s.jsx)(l.jP, {
                  label: "Feed price",
                  value: a ? (0, o.dR)(a.price) : "—",
                  hint: "stands in for P0",
                  tone: "muted",
                }),
                (0, s.jsx)(l.jP, {
                  label: "Fee",
                  value: "".concat((n / 100).toFixed(+(n % 100 != 0)), "%"),
                  hint: "of proceeds",
                  tone: "muted",
                }),
              ],
            }),
            (0, s.jsx)("p", {
              className: "mt-3 text-[11px] leading-relaxed text-muted",
              children: j(t),
            }),
            (0, s.jsx)("p", {
              className: "mt-1 text-[11px] leading-relaxed text-muted",
              children:
                "open() is permissionless from the window end: it prices P0 from the feed history, fixes K = P0 \xd7 (1 + cap) and schedules this round at the next trading day, 10:30–12:30 ET. Bids are placed on the clock only.",
            }),
            (0, s.jsx)(l.$n, {
              variant: "secondary",
              size: "sm",
              className: "mt-4",
              href: "/app/markets?t=".concat(t.ticker),
              iconRight: (0, s.jsx)(W.A, {
                className: "size-3.5",
                "aria-hidden": "true",
              }),
              children: "Split or subscribe on the market page",
            }),
          ],
        });
      }
      var Q = n(90756),
        X = n(37762),
        V = n(32916),
        J = n(89764),
        ee = n(55458),
        et = n(4023),
        en = n(93617),
        es = n(36901);
      let ea = [
        {
          type: "function",
          name: "getCurrentBlockTimestamp",
          stateMutability: "view",
          inputs: [],
          outputs: [{ name: "timestamp", type: "uint256" }],
        },
      ];
      function el(e) {
        let t = (0, J.B)(e, { chainId: r.bQ });
        if (!t) throw Error("No RPC client");
        return t;
      }
      function ei(e) {
        return e && "success" === e.status ? e.result : void 0;
      }
      function er(e, t) {
        let n = ei(e);
        if (void 0 === n) throw Error("Auction read failed: ".concat(t));
        return n;
      }
      let eo = new Map();
      async function ed(e, t, n) {
        var s;
        let a = t.toLowerCase(),
          l = null != (s = eo.get(a)) ? s : [],
          i = Math.min(n, 5e3),
          r = l;
        for (let n = l.length; n < i; n += 250) {
          let s = Array.from({ length: Math.min(i, n + 250) - n }, (e, t) =>
              BigInt(n + t)
            ),
            l = await e.multicall({
              allowFailure: !0,
              contracts: s.map((e) => ({
                address: t,
                abi: ee.c,
                functionName: "bids",
                args: [e],
              })),
            }),
            o = [];
          s.forEach((e, t) => {
            let n = er(l[t], "bids(".concat(e, ")"));
            o.push({
              id: e,
              bidder: n[0],
              units: n[1],
              step: Number(n[2]),
              round: Number(n[3]),
              prio: n[4],
              escrow: n[6],
            });
          }),
            (r = r.concat(o)),
            eo.set(a, r);
        }
        return { all: r, truncated: n > 5e3 };
      }
      function ec() {
        return (0, s.jsxs)("div", {
          "aria-busy": "true",
          className: "grid gap-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]",
          children: [
            (0, s.jsx)("div", {
              className:
                "h-[32rem] animate-pulse rounded-card border border-line bg-panel",
            }),
            (0, s.jsxs)("div", {
              className: "flex flex-col gap-4",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "h-48 animate-pulse rounded-card border border-line bg-panel",
                }),
                (0, s.jsx)("div", {
                  className:
                    "h-64 animate-pulse rounded-card border border-line bg-panel",
                }),
              ],
            }),
          ],
        });
      }
      function eu() {
        var e, t, n, u, p, m, x, h, g, b, j, N, S, w;
        let z = (0, i.ur)(),
          F = (0, i.og)(),
          A = (0, i.Vy)(),
          [P, E] = (0, a.useState)(null);
        (0, a.useEffect)(() => {
          var e, t;
          let n = new URLSearchParams(window.location.search),
            s =
              null == (e = null != (t = n.get("t")) ? t : n.get("ticker"))
                ? void 0
                : e.trim().toUpperCase();
          s && E(s);
        }, []);
        let U = (0, a.useMemo)(() => {
            var e;
            return null != (e = z.data) ? e : [];
          }, [z.data]),
          I = U.find((e) => "bidding" === e.state),
          L =
            null !=
            (x =
              null !=
              (m =
                null != (p = P && U.some((e) => e.ticker === P) ? P : null)
                  ? p
                  : null == I
                  ? void 0
                  : I.ticker)
                ? m
                : null == (e = U[0])
                ? void 0
                : e.ticker)
              ? x
              : null,
          M = null != (h = U.find((e) => e.ticker === L)) ? h : null,
          G =
            null == (t = F.data)
              ? void 0
              : t.find((e) => e.id === (null == M ? void 0 : M.seriesId)),
          K =
            null == (n = A.data)
              ? void 0
              : n.find((e) => e.ticker === (null == M ? void 0 : M.ticker)),
          W = null == G ? void 0 : G.auction,
          Z = (function (e) {
            var t, n, s, l, i, o, d, c, u, p, m, x;
            let h = (0, X.U)(),
              f = (0, es.qK)(),
              { address: g } = (0, V.F)(),
              b = f ? g : void 0,
              j = (0, Q.I)({
                queryKey: en.y.read(
                  r.bQ,
                  null != e ? e : "0x",
                  "auction-live",
                  null != b ? b : "none"
                ),
                queryFn: async () => {
                  var t, n, s, a, l, i, o;
                  let d,
                    c = el(h),
                    u = function (t) {
                      let n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : [];
                      return {
                        address: e,
                        abi: ee.c,
                        functionName: t,
                        args: n,
                      };
                    },
                    p = [
                      {
                        address:
                          null !=
                          (a =
                            null == (s = c.chain) ||
                            null == (n = s.contracts) ||
                            null == (t = n.multicall3)
                              ? void 0
                              : t.address)
                            ? a
                            : "0xcA11bde05977b3631167028862bE2a173976CA11",
                        abi: ea,
                        functionName: "getCurrentBlockTimestamp",
                        args: [],
                      },
                      u("round"),
                      u("auctionStart"),
                      u("auctionEnd"),
                      u("pStart"),
                      u("pFloor"),
                      u("lotTotal"),
                      u("totalDemand"),
                      u("clearingStepPlusOne"),
                      u("finalized"),
                      u("unitsSold"),
                      u("pClear"),
                      u("gross"),
                      u("fee"),
                      u("net"),
                      u("canReschedule"),
                      u("canAddLot"),
                      u("bidCount"),
                      u("feeRecipient"),
                      u("feeClaimed"),
                      u("nextSlot"),
                      ...(b
                        ? [
                            u("lotOf", [b]),
                            u("reserveOf", [b]),
                            u("soldOf", [b]),
                            u("proceedsClaimed", [b]),
                            u("unsoldClaimed", [b]),
                            {
                              address: r.Bj,
                              abi: et.ed,
                              functionName: "balanceOf",
                              args: [b],
                            },
                            {
                              address: r.Bj,
                              abi: et.ed,
                              functionName: "allowance",
                              args: [b, e],
                            },
                          ]
                        : []),
                    ],
                    m = await c.multicall({ allowFailure: !0, contracts: p }),
                    x = ei(m[0]),
                    f =
                      void 0 === x
                        ? void 0
                        : Number(x) - Math.floor(Date.now() / 1e3),
                    g = m.slice(1),
                    j = {
                      round: Number(er(g[0], "round")),
                      auctionStart: Number(er(g[1], "auctionStart")),
                      auctionEnd: Number(er(g[2], "auctionEnd")),
                      pStart: er(g[3], "pStart"),
                      pFloor: er(g[4], "pFloor"),
                      lotTotal: er(g[5], "lotTotal"),
                      totalDemand: er(g[6], "totalDemand"),
                      clearingStepPlusOne: Number(
                        er(g[7], "clearingStepPlusOne")
                      ),
                      finalized: er(g[8], "finalized"),
                      unitsSold: er(g[9], "unitsSold"),
                      pClear: er(g[10], "pClear"),
                      gross: er(g[11], "gross"),
                      fee: er(g[12], "fee"),
                      net: er(g[13], "net"),
                      canReschedule: null != (l = ei(g[14])) && l,
                      canAddLot: er(g[15], "canAddLot"),
                      bidCount: Number(er(g[16], "bidCount")),
                      feeRecipient: er(g[17], "feeRecipient"),
                      feeClaimed: er(g[18], "feeClaimed"),
                      nextSlot: (() => {
                        let e = ei(g[19]);
                        return void 0 === e ? void 0 : Number(e);
                      })(),
                    };
                  if (b) {
                    let e = er(g[22], "soldOf");
                    d = {
                      account: b,
                      lotOf: er(g[20], "lotOf"),
                      reserveOf: Number(er(g[21], "reserveOf")),
                      sold: e[0],
                      unsold: e[1],
                      proceeds: e[2],
                      proceedsClaimed: er(g[23], "proceedsClaimed"),
                      unsoldClaimed: er(g[24], "unsoldClaimed"),
                      usdgBalance: null != (i = ei(g[25])) ? i : 0n,
                      usdgAllowance: null != (o = ei(g[26])) ? o : 0n,
                    };
                  }
                  return { snapshot: j, account: d, skew: f };
                },
                enabled: r.KO && f && !!e,
                staleTime: 5e3,
                refetchInterval: (e) => {
                  var t;
                  return B(
                    null == (t = e.state.data) ? void 0 : t.snapshot,
                    Date.now() / 1e3
                  )
                    ? 1e4
                    : 3e4;
                },
              }),
              v = B(
                null == (t = j.data) ? void 0 : t.snapshot,
                Date.now() / 1e3
              ),
              k =
                null !=
                (c = null == (n = j.data) ? void 0 : n.snapshot.bidCount)
                  ? c
                  : 0,
              N = (0, Q.I)({
                queryKey: en.y.read(
                  r.bQ,
                  null != e ? e : "0x",
                  "my-bids",
                  null != b ? b : "none",
                  k
                ),
                queryFn: async () => {
                  let t = el(h),
                    { all: n, truncated: s } = await ed(t, e, k),
                    a = b.toLowerCase(),
                    l = n.filter((e) => e.bidder.toLowerCase() === a);
                  if (0 === l.length) return { bids: [], truncated: s };
                  let i = await t.multicall({
                      allowFailure: !0,
                      contracts: l.flatMap((t) => [
                        {
                          address: e,
                          abi: ee.c,
                          functionName: "bids",
                          args: [t.id],
                        },
                        {
                          address: e,
                          abi: ee.c,
                          functionName: "fillOf",
                          args: [t.id],
                        },
                      ]),
                    }),
                    r = l.map((e, t) => {
                      let n = er(i[2 * t], "bids(".concat(e.id, ")")),
                        s = er(i[2 * t + 1], "fillOf(".concat(e.id, ")"));
                      return {
                        id: e.id,
                        units: e.units,
                        step: e.step,
                        round: e.round,
                        prio: e.prio,
                        escrow: e.escrow,
                        upsideClaimed: n[7],
                        refundClaimed: n[8],
                        fill: s[0],
                        pay: s[1],
                        refund: s[2],
                      };
                    });
                  return (
                    r.sort((e, t) => (e.id > t.id ? -1 : +(e.id < t.id))),
                    { bids: r, truncated: s }
                  );
                },
                enabled: r.KO && f && !!e && !!b && k > 0,
                staleTime: 5e3,
                refetchInterval: v ? 1e4 : 3e4,
              }),
              S = (0, a.useMemo)(() => [], []);
            return {
              snapshot: null == (s = j.data) ? void 0 : s.snapshot,
              account: null == (l = j.data) ? void 0 : l.account,
              bids:
                null != (u = null == (i = N.data) ? void 0 : i.bids) ? u : S,
              bidsTruncated:
                null != (p = null == (o = N.data) ? void 0 : o.truncated) && p,
              isLoading: j.isLoading,
              bidsLoading: N.isLoading,
              error:
                null != (x = null != (m = j.error) ? m : N.error) ? x : void 0,
              updatedAt: j.dataUpdatedAt,
              hot: v,
              skew: null == (d = j.data) ? void 0 : d.skew,
              refetch: () => {
                j.refetch(), N.refetch();
              },
            };
          })(W),
          J = (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1e3,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              [n, s] = (0, a.useState)(0);
            return (
              (0, a.useEffect)(() => {
                let n = () => s(Math.floor(Date.now() / 1e3 + t));
                n();
                let a = setInterval(n, e);
                return () => clearInterval(a);
              }, [e, t]),
              n
            );
          })(1e3, null != (g = Z.skew) ? g : 0),
          eo = (0, a.useMemo)(
            () =>
              M && J
                ? (function (e, t, n) {
                    if (!t || 0 === t.round) return e;
                    let s = (0, o.Uj)(t.pStart, 6),
                      a = (0, o.Uj)(t.pFloor, 6),
                      l =
                        0 === t.round
                          ? "unscheduled"
                          : n < t.auctionStart
                          ? "scheduled"
                          : t.finalized
                          ? t.unitsSold > 0n
                            ? "sold"
                            : "nosale"
                          : t.clearingStepPlusOne > 0 || n >= t.auctionEnd
                          ? "crossed"
                          : "bidding",
                      i = (0, D.OH)(n, t.auctionStart),
                      r =
                        t.clearingStepPlusOne > 0
                          ? t.clearingStepPlusOne - 1
                          : "crossed" === l
                          ? D.UT - 1
                          : void 0,
                      d = t.finalized
                        ? (0, o.Uj)(t.pClear, 6)
                        : void 0 !== r
                        ? (0, o.Uj)((0, D.vR)(r, t.pStart, t.pFloor), 6)
                        : void 0,
                      c = (0, o.Uj)(t.lotTotal, 18),
                      u = (0, o.Uj)(t.totalDemand, 18);
                    return {
                      ...e,
                      state: l,
                      round: t.round,
                      pStart: s,
                      pFloor: a,
                      startsAt: t.auctionStart,
                      endsAt: t.auctionEnd,
                      currentStep: i,
                      currentPrice: (0, o.Uj)(
                        (0, D.vR)(i, t.pStart, t.pFloor),
                        6
                      ),
                      lotTotal: c,
                      totalDemand: u,
                      clearingStep: r,
                      clearingPrice: d,
                      unitsSold: t.finalized
                        ? (0, o.Uj)(t.unitsSold, 18)
                        : void 0,
                      gross: t.finalized ? (0, o.Uj)(t.gross, 6) : void 0,
                      fee: t.finalized ? (0, o.Uj)(t.fee, 6) : void 0,
                      net: t.finalized ? (0, o.Uj)(t.net, 6) : void 0,
                      ladder: e.ladder.map((n) => ({
                        ...n,
                        at: t.auctionStart + n.step * (e.stepSeconds || 30),
                        price: (0, y.Gg)(n.step, s, a, {
                          stepSeconds: e.stepSeconds || 30,
                        }),
                        supply: c,
                        demand: n.step <= i ? u : n.demand,
                      })),
                    };
                  })(M, Z.snapshot, J)
                : M,
            [M, Z.snapshot, J]
          ),
          eu = (0, a.useMemo)(
            () =>
              eo ? U.map((e) => (e.seriesId === eo.seriesId ? eo : e)) : U,
            [U, eo]
          ),
          ep = (function (e) {
            let [t, n] = (0, a.useState)(0),
              s = (0, a.useRef)(0),
              l = null == e ? void 0 : e.seriesId,
              i = null == e ? void 0 : e.state,
              r = null == e ? void 0 : e.currentStep,
              o = null == e ? void 0 : e.round;
            if (
              ((0, a.useEffect)(() => {
                if (((s.current = Date.now()), n(0), "bidding" !== i)) return;
                let e = setInterval(
                  () => n((Date.now() - s.current) / 1e3),
                  250
                );
                return () => clearInterval(e);
              }, [l, i, r, o]),
              !e)
            )
              return null;
            let d = e.stepSeconds || 30,
              c = e.steps - 1;
            if ("bidding" !== e.state) {
              var u, p;
              let t =
                null != (u = e.clearingStep)
                  ? u
                  : (0, y.qE)(e.currentStep, 0, c);
              return {
                step: t,
                price:
                  null != (p = e.clearingPrice)
                    ? p
                    : (0, y.Gg)(t, e.pStart, e.pFloor, { stepSeconds: d }),
                secondsLeft: 0,
                stepProgress: 0,
                running: !1,
                atFloor: t >= c,
              };
            }
            let m = (0, y.qE)(e.currentStep + Math.floor(t / d), 0, c),
              x = t % d;
            return {
              step: m,
              price: (0, y.Gg)(m, e.pStart, e.pFloor, { stepSeconds: d }),
              secondsLeft: Math.max(0, Math.ceil(d - x)),
              stepProgress: (0, y.qE)(x / d, 0, 1),
              running: !0,
              atFloor: m >= c,
            };
          })(eo),
          em =
            null != (b = null == G ? void 0 : G.address)
              ? b
              : eo && /^0x[0-9a-fA-F]{40}$/.test(eo.seriesId)
              ? eo.seriesId
              : void 0,
          ex = (0, c.MY)(
            em,
            null != eo ? eo : { state: "unscheduled", startsAt: 0 },
            J
          ),
          eh = !!eo && f(eo);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(l.Av, {
              title: "Auctions",
              subtitle:
                "Descending-clock, uniform-price sale of each series' subscribed Upside for USDG. Thirty-second steps, per-subscriber reserves, one price for every fill.",
            }),
            !z.isLoading && eo && ep
              ? (0, s.jsxs)("div", {
                  className: "flex flex-col gap-6",
                  children: [
                    (0, s.jsx)(v, {
                      auctions: eu,
                      selected: eo.ticker,
                      onSelect: E,
                    }),
                    (0, s.jsx)(k, {
                      auction: eo,
                      name: null == K ? void 0 : K.token.name,
                    }),
                    r.KO
                      ? (0, s.jsx)("p", {
                          className:
                            "-mt-4 font-mono text-[11px] text-muted tnum",
                          "aria-live": "off",
                          children: Z.error
                            ? "Chain read failed \xb7 retrying (".concat(
                                (0, O.U)(Z.error),
                                ")"
                              )
                            : Z.updatedAt
                            ? "Chain \xb7 read "
                                .concat(
                                  (0, o.KN)(
                                    Math.max(
                                      0,
                                      (Date.now() - Z.updatedAt) / 1e3
                                    )
                                  ),
                                  " \xb7 every "
                                )
                                .concat((Z.hot ? 1e4 : 3e4) / 1e3, "s")
                                .concat(
                                  void 0 !== Z.skew
                                    ? " \xb7 chain clock "
                                        .concat(Z.skew >= 0 ? "+" : "")
                                        .concat(Z.skew, "s")
                                    : ""
                                )
                                .concat(W ? " \xb7 ".concat(W) : "")
                            : "Chain \xb7 reading…",
                        })
                      : null,
                    eh
                      ? (0, s.jsxs)("div", {
                          className:
                            "grid gap-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-start",
                          children: [
                            (0, s.jsx)(Y, {
                              auction: eo,
                              feeBps:
                                null != (N = null == G ? void 0 : G.feeBps)
                                  ? N
                                  : r.nl.feeBps,
                            }),
                            (0, s.jsx)(q, {
                              auction: eo,
                              address: W,
                              live: Z,
                              now: J,
                              p0:
                                null == (u = eo.indicativeBasis)
                                  ? void 0
                                  : u.price,
                              indicative: !0,
                            }),
                          ],
                        })
                      : (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(c.T, {
                              auction: eo,
                              seriesAddress: em,
                              book: ex,
                              live: Z,
                              now: J,
                              clock: ep,
                              p0:
                                G && G.p0 > 0
                                  ? G.p0
                                  : null == K
                                  ? void 0
                                  : K.price,
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "grid gap-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-start",
                              children: [
                                (0, s.jsx)(C, { auction: eo, clock: ep }),
                                (0, s.jsxs)("div", {
                                  className: "flex min-w-0 flex-col gap-4",
                                  children: [
                                    (0, s.jsx)(T, {
                                      auction: eo,
                                      clock: ep,
                                      p0:
                                        G && G.p0 > 0
                                          ? G.p0
                                          : null == K
                                          ? void 0
                                          : K.price,
                                      feeBps:
                                        null !=
                                        (S = null == G ? void 0 : G.feeBps)
                                          ? S
                                          : r.nl.feeBps,
                                    }),
                                    (0, s.jsx)(_, {
                                      auction: eo,
                                      address: W,
                                      live: Z,
                                      now: J,
                                      clock: ep,
                                      spot: null == K ? void 0 : K.price,
                                      capPrice: null == G ? void 0 : G.capPrice,
                                    }),
                                    (0, s.jsx)($, {
                                      auction: eo,
                                      address: W,
                                      live: Z,
                                      now: J,
                                    }),
                                    (0, s.jsx)(q, {
                                      auction: eo,
                                      address: W,
                                      live: Z,
                                      now: J,
                                      p0:
                                        G && G.p0 > 0
                                          ? G.p0
                                          : null == K
                                          ? void 0
                                          : K.price,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsx)(c.mg, {
                              auction: eo,
                              book: ex,
                              now: J,
                              feeBps:
                                null != (w = null == G ? void 0 : G.feeBps)
                                  ? w
                                  : r.nl.feeBps,
                            }),
                          ],
                        }),
                    (0, s.jsxs)("div", {
                      className: "grid gap-4 2xl:grid-cols-2",
                      children: [
                        (0, s.jsx)(R, {
                          auctions: eu,
                          selected: eo.ticker,
                          onSelect: E,
                        }),
                        eh
                          ? null
                          : (0, s.jsx)(H, { auction: eo, address: W, live: Z }),
                      ],
                    }),
                  ],
                })
              : z.isLoading
              ? (0, s.jsx)(ec, {})
              : (0, s.jsxs)("div", {
                  className: "flex flex-col gap-4",
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-sm text-muted",
                      children:
                        "No auctions scheduled. A series schedules its auction when it opens.",
                    }),
                    (0, s.jsx)(d.V, {
                      markets: null != (j = A.data) ? j : [],
                      title: "Next series to auction",
                    }),
                  ],
                }),
          ],
        });
      }
    },
    72555: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      let s = (0, n(99011).A)("arrow-right", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
  },
  (e) => {
    e.O(
      0,
      [
        9276, 4133, 755, 3869, 756, 2976, 7349, 4520, 592, 9834, 3709, 7727,
        8368, 8473, 5458, 9930, 4314, 4297, 7358,
      ],
      () => e((e.s = 48542))
    ),
      (_N_E = e.O());
  },
]);
