"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1595],
  {
    23515: (e, t, n) => {
      n.d(t, { I: () => i });
      var r = n(37539),
        a = n(32132),
        o = n(50625);
      function i() {
        r.r.current || (0, a.Uu)();
        let [e] = (0, o.useState)(r.O.current);
        return e;
      }
    },
    25789: (e, t, n) => {
      n.d(t, {
        A: () => l,
        ER: () => d,
        G6: () => o,
        Ln: () => s,
        Qw: () => h,
        Te: () => m,
        _9: () => x,
        fF: () => i,
        lg: () => u,
        mq: () => c,
      });
      var r = n(29142),
        a = n(42726);
      let o = r.nl.capChoicesBps.map((e) => e / 100),
        i = o.map((e, t) => ({ value: t, label: "".concat(e, "%") }));
      function c(e) {
        var t, n;
        return Math.max(
          0,
          o.indexOf(
            ((t = e),
            o.reduce(
              (e, n) => (Math.abs(n - t) < Math.abs(e - t) ? n : e),
              null != (n = o[0]) ? n : 0
            ))
          )
        );
      }
      function s(e) {
        return e.epoch.daysLeft > 0 ? e.epoch.daysLeft : a.Ln.daysToSettlement;
      }
      function l(e, t) {
        var n;
        let r = Math.round(100 * t),
          o = s(e);
        return e.seriesId &&
          e.capBps === r &&
          (null != (n = e.p0) ? n : 0) > 0 &&
          e.capPrice > 0
          ? {
              ...(0, a.p6)({
                spot: e.price,
                p0: e.p0,
                capPrice: e.capPrice,
                capBps: r,
                daysToSettlement: o,
              }),
              seriesK: !0,
            }
          : {
              ...(0, a.oZ)({ p0: e.price, capBps: r, daysToSettlement: o }),
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
      let h = "indicative (feed) \xb7 fixed at open";
      function x(e, t) {
        if (!t.seriesK)
          return "created" === e.seriesState
            ? h
            : "K from the feed price \xb7 no series at this cap";
      }
    },
    30983: (e, t, n) => {
      n.d(t, {
        Es: () => o.E,
        bl: () => r.b,
        Tk: () => u,
        Jm: () => a.J,
        Kf: () => i.K,
      }),
        n(58190);
      var r = n(18133),
        a = n(28301),
        o = n(71280),
        i = n(78936),
        c = n(72133),
        s = n(91109),
        l = n(96373),
        d = n(96816);
      function u(e) {
        var t;
        let {
            label: n,
            value: r,
            delta: a,
            trend: o,
            trendLabel: i,
            asOf: l,
            note: d,
            className: u,
            hero: m,
          } = e,
          h =
            a && "neutral" !== a.upIsGood && "flat" !== a.direction
              ? ("up" === a.direction) === (null == (t = a.upIsGood) || t)
                ? "text-success"
                : "text-danger"
              : "text-muted",
          x =
            (null == a ? void 0 : a.direction) === "up"
              ? "↑"
              : (null == a ? void 0 : a.direction) === "down"
              ? "↓"
              : "→";
        return (0, c.jsxs)("div", {
          className: (0, s.cn)("flex min-w-0 flex-col gap-1.5", u),
          children: [
            (0, c.jsxs)("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                (0, c.jsx)("span", {
                  className: "text-xs text-muted",
                  children: n,
                }),
                l,
              ],
            }),
            (0, c.jsx)("span", {
              className: (0, s.cn)(
                "font-sans font-semibold text-fg [font-variant-numeric:proportional-nums]",
                m
                  ? "text-[48px] leading-none tracking-display"
                  : "text-2xl leading-tight"
              ),
              children: r,
            }),
            a
              ? (0, c.jsxs)("span", {
                  className: (0, s.cn)(
                    "inline-flex items-center gap-1 text-xs",
                    h
                  ),
                  children: [
                    (0, c.jsx)("span", { "aria-hidden": "true", children: x }),
                    (0, c.jsx)("span", {
                      className: "font-mono tnum",
                      children: a.text,
                    }),
                    a.vs
                      ? (0, c.jsx)("span", {
                          className: "text-muted",
                          children: a.vs,
                        })
                      : null,
                    (0, c.jsx)("span", {
                      className: "sr-only",
                      children: a.direction,
                    }),
                  ],
                })
              : null,
            o && o.length > 1
              ? (0, c.jsx)(p, {
                  values: o,
                  label: null != i ? i : "".concat(n, " trend"),
                })
              : null,
            d
              ? (0, c.jsx)("span", {
                  className: "text-[11px] text-muted",
                  children: d,
                })
              : null,
          ],
        });
      }
      function p(e) {
        let { values: t, label: n } = e,
          [r, a] = (0, d.Xx)(t),
          o = l.M$.markerRadius + l.M$.ringWidth,
          i = (0, d.om)([0, t.length - 1], [o, 120 - o]),
          s = (0, d.om)(r === a ? [r - 1, a + 1] : [r, a], [28 - o, o]),
          u = t.map((e, t) => [i(t), s(e)]),
          p = u
            .map((e, t) => {
              let [n, r] = e;
              return ""
                .concat(0 === t ? "M" : "L")
                .concat(n.toFixed(1), " ")
                .concat(r.toFixed(1));
            })
            .join(""),
          m = u[u.length - 2],
          h = u[u.length - 1],
          x = t[0],
          f = t[t.length - 1];
        return (0, c.jsxs)("svg", {
          width: 120,
          height: 28,
          viewBox: "0 0 ".concat(120, " ").concat(28),
          role: "img",
          "aria-label": ""
            .concat(n, ": ")
            .concat(t.length, " points, from ")
            .concat(x, " to ")
            .concat(f),
          className: "block",
          children: [
            (0, c.jsx)("path", {
              d: p,
              fill: "none",
              stroke: "var(--chart-deemphasis)",
              strokeWidth: l.M$.lineWidth,
              strokeLinejoin: "round",
              strokeLinecap: "round",
            }),
            (0, c.jsx)("path", {
              d: "M"
                .concat(m[0].toFixed(1), " ")
                .concat(m[1].toFixed(1), "L")
                .concat(h[0].toFixed(1), " ")
                .concat(h[1].toFixed(1)),
              fill: "none",
              stroke: "var(--chart-emphasis)",
              strokeWidth: l.M$.lineWidth,
              strokeLinecap: "round",
            }),
            (0, c.jsx)("circle", {
              cx: h[0],
              cy: h[1],
              r: l.M$.markerRadius,
              fill: "var(--chart-emphasis)",
              stroke: "var(--chart-surface)",
              strokeWidth: l.M$.ringWidth,
            }),
          ],
        });
      }
      n(93616);
    },
    32132: (e, t, n) => {
      n.d(t, { Uu: () => o });
      var r = n(37539);
      let a = "undefined" != typeof window;
      function o() {
        if (((r.r.current = !0), a))
          if (window.matchMedia) {
            let e = window.matchMedia("(prefers-reduced-motion)"),
              t = () => (r.O.current = e.matches);
            e.addEventListener("change", t), t();
          } else r.O.current = !1;
      }
    },
    37539: (e, t, n) => {
      n.d(t, { O: () => r, r: () => a });
      let r = { current: null },
        a = { current: !1 };
    },
    40453: (e, t, n) => {
      n.d(t, { default: () => a.a });
      var r = n(79869),
        a = n.n(r);
    },
    40564: (e, t, n) => {
      n.d(t, { g: () => k });
      var r = n(72133),
        a = n(50625),
        o = n(30983),
        i = n(58190),
        c = n(84520),
        s = n(96373),
        l = n(36811),
        d = n(42726),
        u = n(53063),
        p = n(91109);
      function m(e) {
        return Math.round(100 * e) / 100;
      }
      function h(e) {
        let { p0: t, capPrice: n, spot: r } = e,
          a = t > 0 ? t : Math.max(n, r, 1),
          o = 0.7 * a,
          i = 1.3 * a;
        return (
          r > 0 && ((o = Math.min(o, 0.95 * r)), (i = Math.max(i, 1.05 * r))),
          n > 0 && ((o = Math.min(o, 0.95 * n)), (i = Math.max(i, 1.1 * n))),
          [m(Math.max(0, o)), m(i)]
        );
      }
      function x(e, t) {
        let n = (0, d.vn)(e, t);
        return {
          stock: n.settlementPrice,
          income: n.oneUsd,
          upside: n.convexUsd,
        };
      }
      function f(e, t) {
        return Number.isFinite(e) ? m(Math.min(t[1], Math.max(t[0], e))) : t[0];
      }
      function g(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return Math.max(0.01, m((e > 0 ? e : 1) * (t ? 0.05 : 0.01)));
      }
      let v = (e) => (0, l.dR)(e, { decimals: 2 * !Number.isInteger(e) });
      function k(e) {
        let {
            ticker: t,
            p0: n,
            capPrice: s,
            spot: g,
            premium: k,
            premiumNote: j,
            auctionPremium: y,
            feeBps: w = 500,
            seriesK: M = !0,
            kNote: R = "K from the feed price, no series at this cap",
            title: N,
            subtitle: P,
            asOf: S,
            note: E,
            height: C = 240,
            className: A,
          } = e,
          W = (0, a.useMemo)(
            () => ({ p0: n, capPrice: s, spot: g }),
            [n, s, g]
          ),
          L = (0, a.useMemo)(() => h(W), [W]),
          [T, I] = (0, a.useState)(() => f(g > 0 ? g : n, L));
        (0, a.useEffect)(() => {
          I((e) => f(e, L));
        }, [L]);
        let K = (0, a.useMemo)(() => {
            let e = (function (e, t) {
              let n = (function (e) {
                  let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : h(e),
                    [n, r] = t,
                    a = Math.max(m((e.p0 > 0 ? e.p0 : r) * 0.01), 0.01),
                    o = new Set();
                  for (let e = n; e <= r + 1e-9; e += a) o.add(m(e));
                  for (let t of (o.add(r), [e.p0, e.capPrice, e.spot]))
                    t >= n && t <= r && o.add(m(t));
                  return [...o].sort((e, t) => e - t);
                })(e, t),
                r = [],
                a = [],
                o = [];
              for (let t of n) {
                let n = x(t, e.capPrice);
                r.push({ x: t, y: n.stock }),
                  a.push({ x: t, y: n.income }),
                  o.push({ x: t, y: n.upside });
              }
              return { stock: r, income: a, upside: o };
            })(W, L);
            return [
              {
                id: "stock",
                label: "".concat(t, " Stock Token"),
                color: "stock",
                points: e.stock,
              },
              { id: "income", label: u._b, color: "income", points: e.income },
              { id: "upside", label: u.TE, color: "upside", points: e.upside },
            ];
          }, [W, L, t]),
          _ = (0, a.useMemo)(() => {
            let e = [];
            return (
              n > 0 && e.push({ x: n, label: "P0 ".concat((0, l.dR)(n)) }),
              s > 0 && e.push({ x: s, label: "K ".concat((0, l.dR)(s)) }),
              g > 0 && Math.abs(g - n) >= 0.005
                ? e.push({ x: g, label: "now ".concat((0, l.dR)(g)) })
                : g > 0 &&
                  e.length > 0 &&
                  (e[0] = { x: n, label: "P0 \xb7 now ".concat((0, l.dR)(n)) }),
              e
            );
          }, [n, s, g]),
          F = x(T, s),
          O = n > 0 ? (T - n) / n : NaN,
          D = !!y && y.price > 0,
          U = D ? y.price : k,
          $ = D ? U * (1 - w / 1e4) : k,
          z = (0, d.bj)(s, U),
          B = F.income + $,
          G = D
            ? "+ net premium "
                .concat((0, l.dR)($), " if subscribed = ")
                .concat((0, l.dR)(B))
            : "+ premium "
                .concat((0, l.dR)(k), " if subscribed (model) = ")
                .concat((0, l.dR)(B)),
          V = D
            ? "breakeven ".concat((0, l.dR)(z), " at the clearing price")
            : "breakeven ".concat((0, l.dR)(z), " (model)"),
          q = (0, a.useCallback)(
            (e) =>
              (0, r.jsx)(b, {
                geo: e,
                value: T,
                domain: L,
                p0: n,
                capPrice: s,
                onChange: I,
              }),
            [T, L, n, s]
          ),
          Z = "Value per "
            .concat(t, " unit at settlement across settlement prices ")
            .concat((0, l.dR)(L[0]), " to ")
            .concat((0, l.dR)(L[1]), ": Stock Token, ")
            .concat(u._b, " capped at K ")
            .concat((0, l.dR)(s), ", ")
            .concat(u.TE, " above it.");
        return (0, r.jsxs)("div", {
          className: (0, p.cn)("flex min-w-0 flex-col gap-3", A),
          children: [
            (0, r.jsx)(o.bl, {
              title: null != N ? N : "Value at settlement",
              subtitle: P,
              ariaLabel: Z,
              asOf: S,
              series: K,
              xType: "linear",
              xFormat: v,
              xColumn: "Settlement price S",
              xDomain: L,
              yFormat: "usd",
              zeroBased: !0,
              markers: "none",
              xReferences: _,
              overlay: q,
              height: C,
              note: E,
            }),
            (0, r.jsxs)(c.l7, {
              className: "text-sm",
              children: [
                (0, r.jsx)(c.jP, {
                  label: "Settlement price S",
                  value: (0, l.dR)(T),
                  hint: Number.isNaN(O)
                    ? "drag the handle"
                    : "".concat((0, l.Oe)(O, { decimals: 1 }), " vs P0"),
                }),
                (0, r.jsx)(c.jP, {
                  label: (0, r.jsxs)("span", {
                    className: "inline-flex items-center gap-1.5",
                    children: [
                      (0, r.jsx)(i.rp, { color: "income" }),
                      " ",
                      u._b,
                      " \xb7 min(S, K)",
                    ],
                  }),
                  value: (0, l.dR)(F.income),
                  hint: G,
                }),
                (0, r.jsx)(c.jP, {
                  label: (0, r.jsxs)("span", {
                    className: "inline-flex items-center gap-1.5",
                    children: [
                      (0, r.jsx)(i.rp, { color: "upside" }),
                      " ",
                      u.TE,
                      " \xb7 max(S − K, 0)",
                    ],
                  }),
                  value: (0, l.dR)(F.upside),
                  hint: V,
                }),
              ],
            }),
            (0, r.jsxs)("p", {
              className: "text-[11px] leading-relaxed text-muted tnum",
              children: [
                D
                  ? (0, r.jsxs)(r.Fragment, {
                      children: [
                        "Premium at the auction ",
                        (0, r.jsx)("span", {
                          className: "font-mono text-fg",
                          children: (0, l.dR)(y.price),
                        }),
                        " per unit (round ",
                        y.round,
                        ") \xb7",
                        " ",
                        (0, r.jsx)("span", {
                          className: "font-mono text-fg",
                          children: (0, l.dR)($),
                        }),
                        " net of the ",
                        w / 100,
                        " % fee to subscribers \xb7",
                        " ",
                      ],
                    })
                  : null,
                "Indicative premium ",
                (0, r.jsx)("span", {
                  className: "font-mono text-fg",
                  children: (0, l.dR)(k),
                }),
                " per unit",
                j ? " \xb7 ".concat(j) : "",
                " \xb7 the auction sets the price",
                M ? "" : " \xb7 ".concat(R),
                ". Values per unit; ",
                u._b,
                " is paid in Stock Tokens worth min(S, K); the premium goes to subscribers only.",
              ],
            }),
          ],
        });
      }
      function b(e) {
        let {
            geo: t,
            value: n,
            domain: o,
            p0: c,
            capPrice: d,
            onChange: p,
          } = e,
          m = (0, a.useId)(),
          h = t.x(n),
          v = t.top + t.plotH,
          k = x(n, d),
          [b, j] = (0, a.useState)(!1),
          [y, w] = (0, a.useState)(!1),
          M = (0, a.useCallback)(
            (e) => {
              var n;
              let r = (
                null != (n = e.currentTarget.ownerSVGElement)
                  ? n
                  : e.currentTarget
              ).getBoundingClientRect();
              return f(t.x.invert(e.clientX - r.left), o);
            },
            [t, o]
          );
        function R(e) {
          e.stopPropagation(),
            e.currentTarget.hasPointerCapture(e.pointerId) &&
              e.currentTarget.releasePointerCapture(e.pointerId),
            j(!1);
        }
        let N = "Settlement price "
            .concat((0, l.dR)(n), ": ")
            .concat(u._b, " ")
            .concat((0, l.dR)(k.income), ", ")
            .concat(u.TE, " ")
            .concat((0, l.dR)(k.upside)),
          P = h + 8 + ((0, l.dR)(n).length + 2) * 7 > t.left + t.plotW;
        return (0, r.jsxs)("g", {
          "data-handle": "settlement",
          children: [
            (0, r.jsx)("line", {
              x1: h,
              x2: h,
              y1: t.top,
              y2: v,
              stroke: "var(--chart-text)",
              strokeWidth: 1.5,
              strokeOpacity: 0.85,
              shapeRendering: "crispEdges",
              pointerEvents: "none",
            }),
            [
              ["stock", k.stock],
              ["income", k.income],
              ["upside", k.upside],
            ].map((e) => {
              let [n, a] = e;
              return (0, r.jsx)(
                "circle",
                {
                  cx: h,
                  cy: t.y(a),
                  r: s.M$.markerRadius + 1,
                  fill: "var(--chart-".concat(n, ")"),
                  stroke: "var(--chart-surface)",
                  strokeWidth: s.M$.ringWidth,
                  pointerEvents: "none",
                },
                n
              );
            }),
            (0, r.jsxs)("text", {
              x: P ? h - 8 : h + 8,
              y: t.top + 4,
              dy: "0.9em",
              textAnchor: P ? "end" : "start",
              style: { ...i.DZ, ...i.J3, fontWeight: 600 },
              pointerEvents: "none",
              children: ["S ", (0, l.dR)(n)],
            }),
            y
              ? (0, r.jsx)("circle", {
                  cx: h,
                  cy: v,
                  r: 11,
                  fill: "none",
                  stroke: "var(--color-accent)",
                  strokeWidth: 2,
                  pointerEvents: "none",
                })
              : null,
            (0, r.jsx)("circle", {
              cx: h,
              cy: v,
              r: b ? 8 : 7,
              fill: "var(--chart-text)",
              stroke: "var(--chart-surface)",
              strokeWidth: s.M$.ringWidth,
              pointerEvents: "none",
            }),
            (0, r.jsx)("rect", {
              id: "".concat(m, "-handle"),
              x: h - 14,
              y: t.top,
              width: 28,
              height: t.plotH + 16,
              fill: "transparent",
              role: "slider",
              tabIndex: 0,
              "aria-label": "Settlement price",
              "aria-orientation": "horizontal",
              "aria-valuemin": o[0],
              "aria-valuemax": o[1],
              "aria-valuenow": n,
              "aria-valuetext": N,
              style: {
                cursor: b ? "grabbing" : "ew-resize",
                touchAction: "none",
                outline: "none",
              },
              onFocus: (e) => w(e.currentTarget.matches(":focus-visible")),
              onBlur: () => w(!1),
              onPointerDown: function (e) {
                e.stopPropagation(),
                  e.preventDefault(),
                  e.currentTarget.setPointerCapture(e.pointerId),
                  j(!0),
                  p(M(e));
              },
              onPointerMove: function (e) {
                b && (e.stopPropagation(), p(M(e)));
              },
              onPointerUp: R,
              onPointerCancel: R,
              onKeyDown: function (e) {
                let t = g(c),
                  r = g(c, !0),
                  a = null;
                "ArrowRight" === e.key || "ArrowUp" === e.key
                  ? (a = n + (e.shiftKey ? r : t))
                  : "ArrowLeft" === e.key || "ArrowDown" === e.key
                  ? (a = n - (e.shiftKey ? r : t))
                  : "PageUp" === e.key
                  ? (a = n + r)
                  : "PageDown" === e.key
                  ? (a = n - r)
                  : "Home" === e.key
                  ? (a = o[0])
                  : "End" === e.key && (a = o[1]),
                  null !== a &&
                    (e.preventDefault(), e.stopPropagation(), p(f(a, o)));
              },
            }),
          ],
        });
      }
    },
    65120: (e, t, n) => {
      n.d(t, {
        B0: () => a.B0,
        Gy: () => r.Gy,
        MD: () => r.MD,
        MS: () => a.MS,
        Qx: () => a.Qx,
        oA: () => a.oA,
        qn: () => a.qn,
        zf: () => r.zf,
      });
      var r = n(48299),
        a = n(68757);
      n(41474);
    },
    72555: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(99011).A)("arrow-right", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    79869: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return s;
          },
          getImageProps: function () {
            return c;
          },
        });
      let r = n(31727),
        a = n(11090),
        o = n(25626),
        i = r._(n(62898));
      function c(e) {
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
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let s = o.Image;
    },
    99011: (e, t, n) => {
      n.d(t, { A: () => s });
      var r = n(50625);
      let a = (e) => {
          let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
            n ? n.toUpperCase() : t.toLowerCase()
          );
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        o = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t
            .filter((e, t, n) => !!e && "" !== e.trim() && n.indexOf(e) === t)
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
      let c = (0, r.forwardRef)((e, t) => {
          let {
            color: n = "currentColor",
            size: a = 24,
            strokeWidth: c = 2,
            absoluteStrokeWidth: s,
            className: l = "",
            children: d,
            iconNode: u,
            ...p
          } = e;
          return (0, r.createElement)(
            "svg",
            {
              ref: t,
              ...i,
              width: a,
              height: a,
              stroke: n,
              strokeWidth: s ? (24 * Number(c)) / Number(a) : c,
              className: o("lucide", l),
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
                return (0, r.createElement)(t, n);
              }),
              ...(Array.isArray(d) ? d : [d]),
            ]
          );
        }),
        s = (e, t) => {
          let n = (0, r.forwardRef)((n, i) => {
            let { className: s, ...l } = n;
            return (0, r.createElement)(c, {
              ref: i,
              iconNode: t,
              className: o(
                "lucide-".concat(
                  a(e)
                    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                    .toLowerCase()
                ),
                "lucide-".concat(e),
                s
              ),
              ...l,
            });
          });
          return (n.displayName = a(e)), n;
        };
    },
  },
]);
