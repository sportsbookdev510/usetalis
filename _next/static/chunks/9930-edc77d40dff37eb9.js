"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9930],
  {
    3982: (e, t, n) => {
      n.d(t, {
        NL: () => d,
        OH: () => l,
        UT: () => o,
        mt: () => i,
        vR: () => r,
      });
      var a = n(81122);
      let o = 240;
      function l(e, t) {
        let n = Math.floor(e);
        if (!t || n <= t) return 0;
        let a = Math.floor((n - t) / Number(30n));
        return a >= o ? o - 1 : a;
      }
      function r(e, t, n) {
        let a = 30n * BigInt(Math.min(Math.max(Math.floor(e), 0), o - 1)),
          l = t >> (a / 1200n),
          r = l - ((l / 2n) * (a % 1200n)) / 1200n;
        return r > n ? r : n;
      }
      function i(e, t, n, a) {
        return r(l(e, t), n, a);
      }
      function d(e, t) {
        return (0, a.dq)(e, t);
      }
    },
    32398: (e, t, n) => {
      n.d(t, {
        GO: () => i,
        dA: () => r,
        d_: () => a,
        do: () => s,
        pH: () => d,
        tt: () => h,
        vd: () => p,
        xP: () => f,
        yk: () => c,
      });
      let a = 86400,
        o = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          hour: "numeric",
          hourCycle: "h23",
        });
      function l(e) {
        var t, n;
        let a = new Date(1e3 * e),
          l = Number(
            null !=
              (n =
                null == (t = o.formatToParts(a).find((e) => "hour" === e.type))
                  ? void 0
                  : t.value)
              ? n
              : a.getUTCHours()
          );
        return (a.getUTCHours() - l + 24) % 24;
      }
      function r(e) {
        return e - (e % a);
      }
      function i(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = r(e),
          a = l(n + 43200);
        return n + (t ? 13 : 16) * 3600 + 3600 * a;
      }
      function d(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = i(e, t);
        return { start: n - 1800, end: n };
      }
      let c = 14 * a;
      function s(e, t) {
        let n = new Date(Date.UTC(e, t, 1)).getUTCDay();
        return Date.UTC(e, t, 15 + ((5 - n + 7) % 7)) / 1e3;
      }
      function u(e) {
        let { year: t, m0: n } = {
          year: Math.floor(e / 12),
          m0: ((e % 12) + 12) % 12,
        };
        return s(t, n);
      }
      function p(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          a = e + t,
          o = 0 === t && n > 0 ? r(n) : u(a - 1),
          l = u(a);
        return {
          epoch: t,
          settleMonth: a,
          openWindowDay: o,
          settleDay: l,
          createFrom: o - c,
        };
      }
      let h = 7200;
      function m(e) {
        let t = r(e);
        return t + 37800 + 3600 * l(t + 43200);
      }
      function f(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : () => !1,
          n = r(e);
        for (let o = 0; o < 10; o++, n += a)
          if (
            !(
              !(function (e) {
                let t = new Date(1e3 * r(e)).getUTCDay();
                return t >= 1 && t <= 5;
              })(n) || t(n)
            )
          ) {
            if (e + 1800 <= m(n)) return m(n);
            if (
              e + 1800 <=
              (function (e) {
                let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                return i(e, t) - h - 1800;
              })(n)
            )
              return e + 1800;
          }
      }
    },
    63517: (e, t, n) => {
      n.d(t, { Te: () => h, _R: () => p, xV: () => u });
      var a = n(90756),
        o = n(50625),
        l = n(29142),
        r = n(48299),
        i = n(68757),
        d = n(19043),
        c = n(54498),
        s = n(36901);
      function u() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = (0, s.qK)();
        return (0, a.I)({
          queryKey: ["chain", "head"],
          queryFn: () => (0, d.Qo)(),
          enabled: l.KO && n,
          staleTime: 1e4,
          refetchInterval: null != (e = t.refetchInterval) ? e : 3e4,
          retry: 1,
        });
      }
      function p() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 15e3,
          [t, n] = (0, o.useState)(0);
        return (
          (0, o.useEffect)(() => {
            let t = () => n(Math.floor(Date.now() / 1e3));
            t();
            let a = setInterval(t, e);
            return () => clearInterval(a);
          }, [e]),
          t
        );
      }
      function h() {
        let e = u(),
          t = (0, i.FU)(),
          { feeds: n, isPending: a } = (function () {
            let e = (0, i.Uw)(),
              t = p();
            return {
              feeds: (0, o.useMemo)(() => {
                var n;
                return (null != (n = e.data) ? n : []).map((e) => {
                  var n, a, o, l;
                  return (0, c.jg)(
                    {
                      ticker: e.label,
                      feed: e.feed,
                      answer: e.latest ? (0, r.zf)(e.latest.answer) : null,
                      roundId:
                        null !=
                        (o = null == (n = e.latest) ? void 0 : n.roundId)
                          ? o
                          : null,
                      updatedAt:
                        null !=
                        (l = null == (a = e.latest) ? void 0 : a.updatedAt)
                          ? l
                          : null,
                    },
                    t || Math.floor(Date.now() / 1e3)
                  );
                });
              }, [e.data, t]),
              source: e.source,
              isPending: e.isPending,
            };
          })(),
          l = p();
        return (0, o.useMemo)(() => {
          var o, i;
          let d = l || Math.floor(Date.now() / 1e3),
            s = (0, r.WC)(),
            u = s && !t.isError,
            p = (0, c.qD)(
              null != (o = t.data) ? o : null,
              {
                configured: s,
                reachable: u,
                error: t.error instanceof Error ? t.error.message : null,
              },
              d
            ),
            h = (0, c.Qf)(null != (i = e.data) ? i : null, d);
          return {
            ...(0, c.i3)({ chain: h, feeds: n, indexer: p }, d),
            isPending: e.isPending || a || (s && t.isPending),
          };
        }, [
          e.data,
          e.isPending,
          t.data,
          t.isError,
          t.error,
          t.isPending,
          n,
          a,
          l,
        ]);
      }
    },
    79461: (e, t, n) => {
      n.d(t, { T: () => N, ht: () => O, mg: () => C, MY: () => M });
      var a = n(72133),
        o = n(50625),
        l = n(35476),
        r = n(84520),
        i = n(68757),
        d = n(28301),
        c = n(87317),
        s = n(96373),
        u = n(36811),
        p = n(3982),
        h = n(48299),
        m = n(42726);
      function f(e) {
        return "#".concat(String(Math.max(0, Math.floor(e))).padStart(3, "0"));
      }
      function v(e, t) {
        let n = t.steps > 0 ? t.steps : 240,
          a = null == e ? void 0 : e.ladder;
        if (
          a &&
          a.price.length === n &&
          g((0, h.Gy)(a.pStart), t.pStart) &&
          g((0, h.Gy)(a.pFloor), t.pFloor)
        )
          return {
            prices: a.price.map((e) => (0, h.Gy)(e)),
            source: "indexer",
          };
        let o = t.stepSeconds || 30;
        return {
          prices: Array.from({ length: n }, (e, n) =>
            (0, m.Gg)(n, t.pStart, t.pFloor, { stepSeconds: o })
          ),
          source: "local",
        };
      }
      function g(e, t) {
        return Math.abs(e - t) <= Math.max(1e-6, 1e-9 * Math.abs(t));
      }
      function x(e, t, n) {
        if (void 0 !== e && Number.isFinite(e) && !(e < 0) && !(e >= n))
          return Math.floor(e / Math.max(1, Math.floor(t)));
      }
      function y(e) {
        let t = [];
        for (let n of e) {
          if (!n) continue;
          let e = t.find((e) => e.step === n.step);
          e
            ? (e.label = "".concat(e.label, " \xb7 ").concat(n.label))
            : t.push({ ...n });
        }
        return t;
      }
      let b = {
          scheduled: "Scheduled",
          live: "Live",
          awaiting: "Awaiting finalize",
          sold: "Cleared",
          nosale: "No sale",
        },
        w = (e) => (e && e > 0 ? e : void 0);
      function A(e) {
        let {
            auction: t,
            book: n,
            asOf: l,
            isRefreshing: r,
            liveStep: i,
            bidStep: p,
            clearingStep: h,
            reserveStep: m,
            p0: g,
            className: x,
          } = e,
          b = t.steps > 0 ? t.steps : 240,
          w = t.stepSeconds || 30,
          A = (0, o.useMemo)(() => v(n, t), [n, t]),
          S = (0, o.useMemo)(
            () => A.prices.map((e, t) => ({ x: t, y: e })),
            [A]
          ),
          T = (e) =>
            void 0 === e ? void 0 : A.prices[Math.min(Math.max(e, 0), b - 1)],
          D = (0, o.useMemo)(
            () =>
              y([
                void 0 !== i ? { step: i, label: "now ".concat(f(i)) } : void 0,
                void 0 !== p
                  ? { step: p, label: "your bid ".concat(f(p)) }
                  : void 0,
                void 0 !== h
                  ? { step: h, label: "cleared ".concat(f(h)) }
                  : void 0,
                void 0 !== m
                  ? { step: m, label: "reserve ".concat(f(m)) }
                  : void 0,
              ]),
            [i, p, h, m]
          ).map((e) => ({ x: e.step, label: e.label })),
          j = T(m),
          M = [
            {
              y: t.pFloor,
              label: "floor ".concat((0, u.dR)(t.pFloor, { decimals: 2 })),
            },
            ...(void 0 !== j && void 0 !== m && m < b - 1
              ? [
                  {
                    y: j,
                    label: "your reserve ".concat(
                      (0, u.dR)(j, { decimals: 2 })
                    ),
                  },
                ]
              : []),
          ],
          N = T(i),
          k = [
            ""
              .concat(t.ticker, " auction clock, round ")
              .concat(t.round, ": ")
              .concat(
                (0, u.dR)(t.pStart, { decimals: 2 }),
                " at step 0 falling to "
              )
              .concat((0, u.dR)(t.pFloor, { decimals: 2 }), " at step ")
              .concat(b - 1),
            void 0 !== i && void 0 !== N
              ? "now at step "
                  .concat(i, ", ")
                  .concat((0, u.dR)(N, { decimals: 4 }))
              : null,
            void 0 !== p ? "your bid would land on step ".concat(p) : null,
            void 0 !== h ? "cleared at step ".concat(h) : null,
            void 0 !== m ? "your reserve is step ".concat(m) : null,
          ]
            .filter(Boolean)
            .join("; "),
          C =
            t.startsAt > 0
              ? "Starts ".concat((0, c.vI)(t.startsAt, "ET"))
              : "Not scheduled",
          E = ""
            .concat(C, " \xb7 ")
            .concat(w, " s per step \xb7 halves every 20 min \xb7 floor ")
            .concat(
              g ? (0, u.Oe)(t.pFloor / g, { signed: !1, decimals: 0 }) : "2 %",
              " of P0"
            )
            .concat(
              "local" === A.source
                ? " \xb7 curve from the round's pStart and pFloor"
                : ""
            );
        return (0, a.jsx)(d.J, {
          className: x,
          title: "Clock price",
          subtitle: "USDG per Upside unit \xb7 "
            .concat(b, " steps \xb7 round ")
            .concat(t.round),
          ariaLabel: k,
          asOf: l,
          isRefreshing: r,
          series: [
            { id: "clock", label: "Clock price", color: "upside", points: S },
          ],
          xType: "linear",
          xDomain: [0, b - 1],
          xFormat: f,
          xColumn: "Step",
          yFormat: "usd4",
          markers: "none",
          endLabels: !1,
          zeroBased: !0,
          references: M,
          xReferences: D,
          overlay: (e) =>
            (0, a.jsxs)("g", {
              "aria-hidden": "true",
              children: [
                void 0 !== i
                  ? (0, a.jsx)("line", {
                      x1: e.x(i),
                      x2: e.x(i),
                      y1: e.top,
                      y2: e.top + e.plotH,
                      stroke: "var(--chart-now)",
                      strokeWidth: s.M$.lineWidth,
                      strokeLinecap: "round",
                      shapeRendering: "crispEdges",
                    })
                  : null,
                void 0 !== p && void 0 !== T(p)
                  ? (0, a.jsx)("circle", {
                      cx: e.x(p),
                      cy: e.y(T(p)),
                      r: s.M$.markerRadius + 1,
                      fill: "var(--chart-upside)",
                      stroke: "var(--chart-surface)",
                      strokeWidth: s.M$.ringWidth,
                    })
                  : null,
                void 0 !== h && void 0 !== T(h)
                  ? (0, a.jsx)("circle", {
                      cx: e.x(h),
                      cy: e.y(T(h)),
                      r: s.M$.markerRadius + 1,
                      fill: "var(--chart-income)",
                      stroke: "var(--chart-surface)",
                      strokeWidth: s.M$.ringWidth,
                    })
                  : null,
              ],
            }),
          note: E,
        });
      }
      var S = n(71280),
        T = n(93616),
        D = n(53063);
      function j(e) {
        var t, n, l;
        let {
            auction: r,
            book: i,
            asOf: d,
            isRefreshing: s,
            empty: p,
            liveStep: m,
            bidStep: v,
            clearingStep: g,
            className: b,
          } = e,
          [w, A] = (0, T.W)(),
          j = r.steps > 0 ? r.steps : 240,
          M = r.stepSeconds || 30,
          N = A >= 600 ? 10 : 20,
          k = (0, o.useMemo)(
            () =>
              i
                ? (function (e, t) {
                    let n = Math.max(
                        e.supplyByStep.length,
                        e.cumDemandByStep.length,
                        e.demandByStep.length
                      ),
                      a = Math.max(1, Math.floor(t)),
                      o = [];
                    for (let t = 0; t < n; t += a) {
                      let l = Math.min(t + a - 1, n - 1),
                        r = 0;
                      for (let n = t; n <= l; n++)
                        r += (0, h.MD)(e.demandByStep[n]);
                      o.push({
                        from: t,
                        to: l,
                        supply: (0, h.MD)(e.supplyByStep[l]),
                        demand: (0, h.MD)(e.cumDemandByStep[l]),
                        bids: r,
                      });
                    }
                    return o;
                  })(i, N)
                : [],
            [i, N]
          ),
          C = k.map((e) => String(e.from)),
          E = k.map((e) =>
            r.startsAt > 0
              ? ""
                  .concat(f(e.from), "–")
                  .concat(f(e.to), " \xb7 ")
                  .concat((0, c.CH)(r.startsAt + e.from * M, "ET"), "–")
                  .concat((0, c.CH)(r.startsAt + (e.to + 1) * M, "ET"), " ET")
              : "".concat(f(e.from), "–").concat(f(e.to))
          ),
          R = y([
            void 0 !== m
              ? { step: null != (t = x(m, N, j)) ? t : -1, label: "now" }
              : void 0,
            void 0 !== v
              ? { step: null != (n = x(v, N, j)) ? n : -1, label: "your bid" }
              : void 0,
            void 0 !== g
              ? { step: null != (l = x(g, N, j)) ? l : -1, label: "cleared" }
              : void 0,
          ]).filter((e) => e.step >= 0),
          F = R.map((e) => ({ index: e.step, label: e.label })),
          O = k.every((e) => 0 === e.supply && 0 === e.demand),
          U = k.length > 0 ? k[k.length - 1].demand : 0,
          P = ""
            .concat(r.ticker, " auction round ")
            .concat(r.round, ": ")
            .concat(
              (0, u.bu)(r.lotTotal, 2),
              " units on the curve at the start, "
            )
            .concat((0, u.bu)(U, 2), " units of demand so far, in bins of ")
            .concat(N, " steps")
            .concat(
              R.length > 0
                ? "; ".concat(
                    R.map((e) =>
                      "".concat(e.label, " in bin ").concat(e.step + 1)
                    ).join(", ")
                  )
                : ""
            );
        return (0, a.jsx)("div", {
          ref: w,
          className: b,
          children: (0, a.jsx)(S.E, {
            title: "Supply and demand",
            subtitle: "Units per ".concat(
              N,
              " steps \xb7 supply on the curve vs demand placed"
            ),
            ariaLabel: P,
            asOf: d,
            isRefreshing: s,
            categories: C,
            categoryLabels: E,
            series: [
              {
                id: "supply",
                label: "".concat(D._b, " lot on the curve"),
                color: "income",
                values: k.map((e) => e.supply),
              },
              {
                id: "demand",
                label: "".concat(D.TE, " demand, cumulative"),
                color: "upside",
                values: k.map((e) => e.demand),
              },
            ],
            format: "units",
            categoryColumn: "Steps",
            highlights: F,
            isEmpty: 0 === k.length || O,
            empty: null != p ? p : "No lots or bids yet",
            note: "Supply at a step is the lot of subscribers whose reserve is at or beyond it; the round crosses at the first step where demand reaches the supply of the next.",
          }),
        });
      }
      function M(e, t, n) {
        let a =
          "bidding" === t.state ||
          "crossed" === t.state ||
          ("scheduled" === t.state && n > 0 && t.startsAt - n <= 600);
        return (0, i.Qx)(e, { refetchInterval: a ? 1e4 : 6e4 });
      }
      function N(e) {
        var t, n;
        let {
            auction: i,
            seriesAddress: d,
            book: c,
            live: s,
            now: u,
            clock: h,
            p0: m,
            className: f,
          } = e,
          g = "bidding" === i.state,
          x = g ? h.step : void 0,
          y = g
            ? ((t = s.snapshot),
              (n = h.step),
              t && u > 0 ? (0, p.OH)(u, t.auctionStart) : n)
            : void 0,
          b =
            "crossed" === i.state || "sold" === i.state || "nosale" === i.state
              ? i.clearingStep
              : void 0,
          w = s.account && s.account.lotOf > 0n ? s.account.reserveOf : void 0,
          S = (0, o.useMemo)(() => v(c.data, i).source, [c.data, i]),
          T = (0, o.useMemo)(
            () =>
              s.updatedAt > 0
                ? {
                    block: 0,
                    blockTime: null,
                    head: null,
                    lagBlocks: null,
                    lagSeconds: 0,
                    stale: !1,
                    updatedAt: Math.floor(s.updatedAt / 1e3),
                  }
                : void 0,
            [s.updatedAt]
          ),
          D =
            "indexer" === S
              ? (0, a.jsx)(l.d, { asOf: c.asOf, source: c.source, compact: !0 })
              : T
              ? (0, a.jsx)(l.d, { asOf: T, source: "chain", compact: !0 })
              : null,
          M = (0, a.jsx)(l.d, {
            asOf: c.asOf,
            source: c.source,
            unavailable: !!d && c.unavailable,
            compact: !0,
          }),
          N = c.isFetching && !!c.data,
          k = d
            ? c.unavailable
              ? "Indexer unreachable \xb7 no data yet"
              : c.isPending && !c.data
              ? "Reading the book…"
              : "No lots or bids yet"
            : "No data yet";
        return (0, a.jsx)("div", {
          className: f,
          children: (0, a.jsxs)("div", {
            className: "grid gap-4 lg:grid-cols-2 lg:items-start",
            children: [
              (0, a.jsx)(r.Zp, {
                padding: "md",
                className: "min-w-0",
                children: (0, a.jsx)(A, {
                  auction: i,
                  book: c.data,
                  asOf: D,
                  isRefreshing: N,
                  liveStep: x,
                  bidStep: y,
                  clearingStep: b,
                  reserveStep: w,
                  p0: m,
                }),
              }),
              (0, a.jsx)(r.Zp, {
                padding: "md",
                className: "min-w-0",
                children: (0, a.jsx)(j, {
                  auction: i,
                  book: c.data,
                  asOf: M,
                  isRefreshing: N,
                  empty: k,
                  liveStep: x,
                  bidStep: y,
                  clearingStep: b,
                }),
              }),
            ],
          }),
        });
      }
      let k = {
        scheduled: "neutral",
        live: "upside",
        awaiting: "income",
        sold: "income",
        nosale: "neutral",
      };
      function C(e) {
        var t, n, o;
        let { auction: i, book: d, now: s, feeBps: p, className: m } = e,
          v =
            ((o =
              null != (n = null == (t = d.data) ? void 0 : t.rounds) ? n : []),
            [...o]
              .sort((e, t) => t.round - e.round)
              .map((e) => {
                let t = e.finalized ? (0, h.MD)(e.unitsSold) : null,
                  n = e.finalized
                    ? null !== t && t > 0
                      ? "sold"
                      : "nosale"
                    : null !== e.clearingStep || (s > 0 && s >= e.endAt)
                    ? "awaiting"
                    : s > 0 && s >= e.startAt
                    ? "live"
                    : "scheduled";
                return {
                  round: e.round,
                  startAt: e.startAt,
                  endAt: e.endAt,
                  pStart: (0, h.Gy)(e.pStart),
                  pFloor: (0, h.Gy)(e.pFloor),
                  lotAtSchedule: (0, h.MD)(e.lotAtSchedule),
                  clearingStep: e.clearingStep,
                  clearingPrice:
                    e.finalized && e.pClear ? (0, h.Gy)(e.pClear) : null,
                  unitsSold: t,
                  gross: e.finalized ? (0, h.Gy)(e.gross) : null,
                  fee: e.finalized ? (0, h.Gy)(e.fee) : null,
                  net: e.finalized ? (0, h.Gy)(e.net) : null,
                  finalizedAt: e.finalizedAt,
                  state: n,
                };
              })),
          g = v.filter((e) => "sold" === e.state),
          x = g.reduce((e, t) => {
            var n;
            return e + (null != (n = t.gross) ? n : 0);
          }, 0),
          y = g.reduce((e, t) => {
            var n;
            return e + (null != (n = t.fee) ? n : 0);
          }, 0);
        return (0, a.jsxs)(r.Zp, {
          as: "section",
          "aria-labelledby": "rounds-title",
          className: m,
          children: [
            (0, a.jsx)(r.aR, {
              title: (0, a.jsx)("span", {
                id: "rounds-title",
                children: "Rounds",
              }),
              aside: (0, a.jsxs)("span", {
                className: "flex items-center gap-3",
                children: [
                  (0, a.jsx)("span", {
                    className: "label-caps",
                    children: i.ticker,
                  }),
                  (0, a.jsx)(l.d, {
                    asOf: d.asOf,
                    source: d.source,
                    unavailable: d.unavailable,
                    compact: !0,
                  }),
                ],
              }),
            }),
            (0, a.jsxs)(r.XI, {
              className: "min-w-[760px]",
              children: [
                (0, a.jsx)(r.D1, {
                  children: (0, a.jsxs)("tr", {
                    children: [
                      (0, a.jsx)(r.TH, { children: "Round" }),
                      (0, a.jsx)(r.TH, { children: "Slot (ET)" }),
                      (0, a.jsx)(r.TH, {
                        align: "right",
                        children: "Start \xb7 floor",
                      }),
                      (0, a.jsx)(r.TH, {
                        align: "right",
                        children: "Cleared at",
                      }),
                      (0, a.jsx)(r.TH, {
                        align: "right",
                        children: "Units sold",
                      }),
                      (0, a.jsx)(r.TH, {
                        align: "right",
                        children: "Proceeds",
                      }),
                      (0, a.jsxs)(r.TH, {
                        align: "right",
                        children: [
                          "Fee",
                          void 0 !== p
                            ? " (".concat((0, u.Nd)(p, { signed: !1 }), ")")
                            : "",
                        ],
                      }),
                      (0, a.jsx)(r.TH, { align: "right", children: "Net" }),
                      (0, a.jsx)(r.TH, { children: "State" }),
                    ],
                  }),
                }),
                (0, a.jsxs)(r.vc, {
                  children: [
                    0 === v.length
                      ? (0, a.jsx)(r.TR, {
                          children: (0, a.jsx)(r.TD, {
                            colSpan: 9,
                            className: "text-muted",
                            children: d.unavailable
                              ? "Indexer unreachable \xb7 no rounds yet"
                              : d.isPending && !d.data
                              ? "Reading rounds…"
                              : "No rounds yet",
                          }),
                        })
                      : null,
                    v.map((e) =>
                      (0, a.jsxs)(
                        r.TR,
                        {
                          children: [
                            (0, a.jsx)(r.TD, { mono: !0, children: e.round }),
                            (0, a.jsxs)(r.TD, {
                              mono: !0,
                              className: "text-xs text-muted",
                              children: [
                                (0, c.OP)(e.startAt, "ET"),
                                " \xb7 ",
                                (0, c.CH)(e.startAt, "ET"),
                                "–",
                                (0, c.CH)(e.endAt, "ET"),
                              ],
                            }),
                            (0, a.jsxs)(r.TD, {
                              mono: !0,
                              align: "right",
                              className: "text-xs",
                              children: [
                                (0, u.dR)(e.pStart, { decimals: 2 }),
                                " \xb7 ",
                                (0, u.dR)(e.pFloor, { decimals: 2 }),
                              ],
                            }),
                            (0, a.jsx)(r.TD, {
                              mono: !0,
                              align: "right",
                              className:
                                "sold" === e.state ? "text-upside" : void 0,
                              children:
                                null !== e.clearingStep
                                  ? ""
                                      .concat(f(e.clearingStep))
                                      .concat(
                                        null !== e.clearingPrice
                                          ? " \xb7 ".concat(
                                              (0, u.dR)(e.clearingPrice, {
                                                decimals: 4,
                                              })
                                            )
                                          : ""
                                      )
                                  : "—",
                            }),
                            (0, a.jsx)(r.TD, {
                              mono: !0,
                              align: "right",
                              children:
                                null !== e.unitsSold
                                  ? (0, u.bu)(e.unitsSold, 4)
                                  : "—",
                            }),
                            (0, a.jsx)(r.TD, {
                              mono: !0,
                              align: "right",
                              children:
                                null !== e.gross ? (0, u.dR)(e.gross) : "—",
                            }),
                            (0, a.jsx)(r.TD, {
                              mono: !0,
                              align: "right",
                              className: "text-muted",
                              children: null !== e.fee ? (0, u.dR)(e.fee) : "—",
                            }),
                            (0, a.jsx)(r.TD, {
                              mono: !0,
                              align: "right",
                              className:
                                null !== e.net && e.net > 0
                                  ? "text-income"
                                  : void 0,
                              children: null !== e.net ? (0, u.dR)(e.net) : "—",
                            }),
                            (0, a.jsx)(r.TD, {
                              children: (0, a.jsx)(r.Ex, {
                                tone: k[e.state],
                                children: b[e.state],
                              }),
                            }),
                          ],
                        },
                        e.round
                      )
                    ),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("p", {
              className: "mt-3 text-[11px] text-muted tnum",
              children:
                g.length > 0
                  ? ""
                      .concat(g.length, " cleared round")
                      .concat(1 === g.length ? "" : "s", " \xb7 proceeds ")
                      .concat((0, u.dR)(x), " \xb7 fees ")
                      .concat(
                        (0, u.dR)(y),
                        " \xb7 every filled bid paid the clearing price."
                      )
                  : "A round that sells nothing can be re-run at the next slot before the settlement window; a round that clears pays every filled bid the clearing price.",
            }),
          ],
        });
      }
      var E = n(78936),
        R = n(63517);
      let F = (e) => !!e && /^0x[0-9a-fA-F]{40}$/.test(e);
      function O(e) {
        var t, n;
        let {
            ticker: r,
            address: d,
            epoch: c,
            epochNumber: s,
            title: p,
            className: m,
          } = e,
          f = (0, i.oA)(F(d) ? d : void 0),
          v = (0, R.xV)(),
          g = (0, R._R)(15e3),
          x = v.data
            ? v.data.timestamp +
              Math.max(0, (g || v.data.readAt) - v.data.readAt)
            : g || void 0,
          { marks: y, spans: b } = (0, o.useMemo)(
            () =>
              (function (e) {
                var t, n, a, o, l, r, i, d, c, s, p, m, f;
                let { detail: v, epoch: g, now: x } = e,
                  y = w(null == v ? void 0 : v.createdAt),
                  b =
                    null !=
                    (l =
                      null != (o = w(null == v ? void 0 : v.schedule.openedAt))
                        ? o
                        : w(null == v ? void 0 : v.openedAt))
                      ? l
                      : w(null == g ? void 0 : g.openedAt),
                  A =
                    null !=
                    (r = w(
                      null == v || null == (t = v.auction) ? void 0 : t.start
                    ))
                      ? r
                      : w(null == g ? void 0 : g.auctionStartsAt),
                  S =
                    null !=
                    (i = w(
                      null == v || null == (n = v.auction) ? void 0 : n.end
                    ))
                      ? i
                      : w(null == g ? void 0 : g.auctionEndsAt),
                  T = null == v || null == (a = v.auction) ? void 0 : a.round,
                  D =
                    null != (d = w(null == v ? void 0 : v.schedule.windowStart))
                      ? d
                      : w(null == g ? void 0 : g.settlementWindowStart),
                  j =
                    null != (c = w(null == v ? void 0 : v.schedule.windowEnd))
                      ? c
                      : w(null == g ? void 0 : g.settlementWindowEnd),
                  M =
                    null != (s = w(null == v ? void 0 : v.schedule.settledAt))
                      ? s
                      : w(null == v ? void 0 : v.settledAt),
                  N =
                    null !=
                    (m =
                      null !=
                      (p = w(
                        null == v ? void 0 : v.schedule.effectiveSettleDay
                      ))
                        ? p
                        : w(null == v ? void 0 : v.schedule.settleDay))
                      ? m
                      : w(null == g ? void 0 : g.settlesAt),
                  k = null != (f = null != M ? M : j) ? f : N,
                  C = (null == v ? void 0 : v.p0) ? (0, h.zf)(v.p0) : void 0,
                  E =
                    b || (null == g ? void 0 : g.seriesState) !== "created"
                      ? void 0
                      : g.indicativeBasis,
                  R = [
                    y ? { id: "created", at: y, label: "Created" } : void 0,
                    b
                      ? {
                          id: "open",
                          at: b,
                          label: "Open",
                          detail: C ? "P0 ".concat((0, u.dR)(C)) : void 0,
                        }
                      : E
                      ? {
                          id: "open",
                          at: E.opensAt,
                          label: "Open",
                          detail: "expected \xb7 P0 and K fixed by open()",
                        }
                      : void 0,
                    A
                      ? {
                          id: "auction",
                          at: A,
                          label: "Auction",
                          detail: T ? "round ".concat(T) : void 0,
                        }
                      : E && E.auctionStartsAt > 0
                      ? {
                          id: "auction",
                          at: E.auctionStartsAt,
                          label: "Auction",
                          detail: "expected slot",
                        }
                      : void 0,
                    S
                      ? { id: "trading", at: S, label: "Trading" }
                      : E && E.auctionEndsAt > 0
                      ? {
                          id: "trading",
                          at: E.auctionEndsAt,
                          label: "Trading",
                          detail: "expected",
                        }
                      : void 0,
                    D
                      ? { id: "settlement", at: D, label: "Settlement window" }
                      : void 0,
                    k ? { id: "settled", at: k, label: "Settled" } : void 0,
                  ],
                  F = [];
                for (let e of R) e && F.push(e);
                if ((F.sort((e, t) => e.at - t.at), x > 0)) {
                  let e = -1;
                  F.forEach((t, n) => {
                    let a = "settled" === t.id ? void 0 !== M : t.at <= x;
                    (t.state = a ? "done" : "upcoming"), a && (e = n);
                  }),
                    e >= 0 && void 0 === M && (F[e].state = "current");
                } else if (void 0 !== M) for (let e of F) e.state = "done";
                let O = [];
                return (
                  A && S && S > A
                    ? O.push({
                        id: "auction",
                        from: A,
                        to: S,
                        label: T ? "Auction round ".concat(T) : "Auction",
                        color: "upside",
                      })
                    : E &&
                      E.auctionStartsAt > 0 &&
                      E.auctionEndsAt > E.auctionStartsAt &&
                      O.push({
                        id: "auction",
                        from: E.auctionStartsAt,
                        to: E.auctionEndsAt,
                        label: "Auction (expected)",
                        color: "upside",
                      }),
                  D &&
                    j &&
                    j > D &&
                    O.push({
                      id: "window",
                      from: D,
                      to: j,
                      label: "Settlement window",
                      color: "income",
                    }),
                  { marks: F, spans: O }
                );
              })({ detail: f.data, epoch: c, now: null != x ? x : 0 }),
            [f.data, c, x]
          ),
          A =
            null !=
            (n = null != s ? s : null == (t = f.data) ? void 0 : t.epoch)
              ? n
              : null == c
              ? void 0
              : c.number,
          S = void 0 !== A ? "Epoch ".concat((0, u.iI)(A)) : "Epoch",
          T = ""
            .concat(r, " ")
            .concat(S.toLowerCase(), " timeline: ")
            .concat(
              y
                .map((e) =>
                  ""
                    .concat(e.label)
                    .concat(e.state ? " (".concat(e.state, ")") : "")
                )
                .join(", ") || "no milestones yet"
            );
        return (0, a.jsx)(E.K, {
          className: m,
          title: null != p ? p : "".concat(S, " timeline"),
          subtitle:
            "Created → Open → Auction → Trading → Settlement window → Settled",
          ariaLabel: T,
          asOf: (0, a.jsx)(l.d, {
            asOf: f.asOf,
            source: f.source,
            unavailable: F(d) && f.unavailable,
            compact: !0,
          }),
          marks: y,
          spans: b,
          now: x,
          isEmpty: 0 === y.length,
          note: "Times in UTC; hover a milestone for its distance from now. The settlement window is the last 30 minutes of the session on the third Friday.",
        });
      }
    },
    85726: (e, t, n) => {
      n.d(t, {
        Iu: () => m,
        Js: () => v,
        XU: () => i,
        e7: () => f,
        fm: () => h,
        hX: () => d,
        o0: () => l,
        p_: () => r,
        rn: () => c,
      });
      var a = n(32398),
        o = n(36811);
      function l(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Date.now() / 1e3;
        return t >= (0, a.pH)(e.openWindowDay).end
          ? "opened"
          : (0, a.dA)(t) === e.openWindowDay
          ? "today"
          : "upcoming";
      }
      function r(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Date.now() / 1e3,
          n = l(e, t),
          r = (0, a.dA)(t) === e.openWindowDay;
        return "upcoming" === n
          ? "opens ".concat((0, o.XV)(1e3 * e.openWindowDay))
          : "today" === n
          ? "opens today"
          : r
          ? "opened today"
          : "opened ".concat((0, o.XV)(1e3 * e.openWindowDay));
      }
      function i(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Date.now() / 1e3,
          n = r(e, t);
        return t >= e.createFrom
          ? "".concat(n, " \xb7 creatable now")
          : ""
              .concat(n, " \xb7 creatable from ")
              .concat((0, o.XV)(1e3 * e.createFrom));
      }
      function d(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Date.now() / 1e3;
        if (t < e.createFrom) return "Registered \xb7 no series";
        switch (l(e, t)) {
          case "upcoming":
            return "Creatable now \xb7 none yet";
          case "today":
            return "Opens today \xb7 creatable now";
          case "opened":
            return "Opened \xb7 create and open now";
        }
      }
      function c(e) {
        var t, n;
        return (
          !!e.nextSeries &&
          0 === e.nextSeries.epoch &&
          (null != (n = null == (t = e.registration) ? void 0 : t.firstOpenDay)
            ? n
            : 0) > 0
        );
      }
      let s = new Intl.DateTimeFormat("en-US", {
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
      function h(e) {
        return "".concat(s.format(new Date(1e3 * e.opensAt)), " ET");
      }
      function m(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Date.now() / 1e3;
        if (e.due || t >= e.opensAt) return "open pending \xb7 anyone can call";
        let n = (0, a.dA)(t) === (0, a.dA)(e.opensAt);
        return "opens after "
          .concat(h(e), " ")
          .concat(n ? "today" : u.format(new Date(1e3 * e.opensAt)));
      }
      function f(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : Date.now() / 1e3;
        return e.due || t >= e.opensAt
          ? "open pending"
          : (0, a.dA)(t) === (0, a.dA)(e.opensAt)
          ? "opens tonight"
          : "opens ".concat((0, o.XV)(1e3 * e.opensAt));
      }
      function v(e) {
        if (!(e.auctionStartsAt > 0)) return "—";
        let t = new Date(1e3 * e.auctionStartsAt);
        return "".concat(p.format(t), " \xb7 ").concat(s.format(t), " ET");
      }
    },
    87317: (e, t, n) => {
      n.d(t, {
        AN: () => d,
        CH: () => c,
        Ep: () => f,
        OP: () => m,
        gC: () => p,
        hO: () => s,
        m7: () => h,
        vI: () => u,
      });
      var a = n(32398);
      let o = "America/New_York",
        l = new Map();
      function r(e, t) {
        let n = l.get(e);
        return n || ((n = new Intl.DateTimeFormat("en-US", t)), l.set(e, n)), n;
      }
      function i(e) {
        return "ET" === e ? o : "UTC";
      }
      function d(e, t) {
        var n, a;
        return "UTC" === t
          ? "UTC"
          : null !=
            (a =
              null ==
              (n = r("abbr", {
                timeZone: o,
                timeZoneName: "short",
                hour: "numeric",
              })
                .formatToParts(new Date(1e3 * e))
                .find((e) => "timeZoneName" === e.type))
                ? void 0
                : n.value)
          ? a
          : "ET";
      }
      function c(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return r("clock:".concat(t, ":").concat(n), {
          timeZone: i(t),
          hourCycle: "h23",
          hour: "2-digit",
          minute: "2-digit",
          second: n ? "2-digit" : void 0,
        }).format(new Date(1e3 * e));
      }
      function s(e, t, n) {
        return "".concat(c(e, n), "–").concat(c(t, n), " ").concat(d(e, n));
      }
      function u(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return "".concat(c(e, t, n), " ").concat(d(e, t));
      }
      function p(e, t) {
        return r("wd:".concat(t), {
          timeZone: i(t),
          weekday: "short",
          month: "short",
          day: "numeric",
        }).format(new Date(1e3 * e));
      }
      function h(e, t) {
        return r("date:".concat(t), {
          timeZone: i(t),
          month: "short",
          day: "numeric",
          year: "numeric",
        }).format(new Date(1e3 * e));
      }
      function m(e, t) {
        return r("short:".concat(t), {
          timeZone: i(t),
          month: "short",
          day: "numeric",
        }).format(new Date(1e3 * e));
      }
      function f(e, t) {
        let n = new Date(1e3 * e),
          o = n.getUTCFullYear(),
          l = n.getUTCMonth(),
          r = [];
        for (; r.length < t; ) {
          let t = (0, a.do)(o, l);
          t > e && r.push(t), (l += 1) > 11 && ((l = 0), (o += 1));
        }
        return r;
      }
    },
  },
]);
