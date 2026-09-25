"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7727],
  {
    18133: (e, t, l) => {
      l.d(t, { b: () => p });
      var a = l(72133),
        n = l(50625),
        r = l(23515),
        i = l(96373),
        s = l(96816),
        o = l(13177),
        c = l(58190),
        d = l(93616);
      let h = { top: 12, right: 16, bottom: 26, left: 8 },
        u = [],
        x = [];
      function p(e) {
        var t, l, p, f, g;
        let {
            series: y,
            xType: v = "time",
            curve: b = "linear",
            height: k = 220,
            yFormat: j = "units",
            markers: M = "auto",
            references: w = [],
            endLabels: N = !0,
            area: E = !1,
            xReferences: W = u,
            xSpans: R = x,
          } = e,
          [C, S] = (0, d.W)(),
          D = null != (t = (0, r.I)()) && t,
          [L, H] = (0, n.useState)(null),
          O = (0, n.useId)(),
          q = (0, n.useMemo)(() => (0, o.G2)(j), [j]),
          F = (0, n.useMemo)(() => (0, o.G2)(j, { axis: !0 }), [j]),
          $ = (0, n.useMemo)(() => {
            var t;
            return null != (t = e.xFormat)
              ? t
              : "time" === v
              ? (e) => (0, o.Sp)(e)
              : (e) => String(e);
          }, [e.xFormat, v]),
          A = (0, n.useMemo)(() => {
            var t;
            let l = new Set(),
              a = [];
            for (let e of y) for (let t of e.points) l.add(t.x), a.push(t.y);
            let n = [...l].sort((e, t) => e - t);
            if (0 === n.length || 0 === S) return null;
            let r = [...a, ...w.map((e) => e.y)],
              i =
                null != (t = e.yDomain)
                  ? t
                  : e.zeroBased
                  ? (0, s.Sp)(r)
                  : (0, s.O)((0, s.Z3)(r), 5),
              o = (0, s.at)(i, 5).filter(
                (e, t, l) => 0 === t || F(e) !== F(l[t - 1])
              ),
              d = o.map(F),
              u = h.left + Math.max(...d.map((e) => (0, c.sc)(e)), 20) + 8,
              x =
                N && y.length > 0
                  ? Math.max(
                      ...y.map((e) => {
                        var t, l;
                        return (0, c.sc)(
                          q(
                            null !=
                              (l =
                                null == (t = e.points[e.points.length - 1])
                                  ? void 0
                                  : t.y)
                              ? l
                              : 0
                          ),
                          11
                        );
                      })
                    ) + 18
                  : 0,
              p = h.right + x,
              m = Math.max(40, S - u - p),
              f =
                1 === n.length ? [n[0] - 1, n[0] + 1] : [n[0], n[n.length - 1]],
              g = e.xDomain && e.xDomain[1] > e.xDomain[0] ? e.xDomain : f,
              j = (0, s.om)(g, [u, u + m]),
              M = W.filter((e) => {
                let t;
                return (t = e.x) >= g[0] && t <= g[1];
              })
                .map((e) => ({ ...e, px: j(e.x), w: (0, c.sc)(e.label) }))
                .sort((e, t) => e.px - t.px),
              E = [],
              C = M.map((e) => {
                let t = (0, s.qE)(e.px - e.w / 2, u, u + m - e.w),
                  l = E.findIndex((e) => t > e + 8);
                return l < 0 && (l = E.length), (E[l] = t + e.w), l;
              }),
              D = h.top + (M.length > 0 ? 13 * E.length + 2 : 0),
              L = Math.max(40, k - D - h.bottom),
              H = (0, s.om)(i, [D + L, D]),
              O =
                "time" === v
                  ? (0, s.Cf)(g, Math.max(3, Math.floor(m / 80)))
                  : {
                      ticks: (0, s.at)(g, Math.max(3, Math.floor(m / 90))),
                      unit: "day",
                      step: 0,
                    },
              $ = R.filter((e) => e.to > g[0] && e.from < g[1]).map((e) => {
                let t = (0, s.qE)(j(e.from), u, u + m),
                  l = (0, s.qE)(j(e.to), u, u + m);
                return { ...e, x0: t, w: Math.max(2, l - t) };
              }),
              A = y.map((e) => {
                let t = e.points,
                  l = "";
                t.forEach((e, t) => {
                  let a = j(e.x).toFixed(1),
                    n = H(e.y).toFixed(1);
                  0 === t
                    ? (l += "M".concat(a, " ").concat(n))
                    : "step" === b
                    ? (l += "H".concat(a, "V").concat(n))
                    : (l += "L".concat(a, " ").concat(n));
                });
                let a =
                  t[t.length - 1] && t.length > 0
                    ? ""
                        .concat(l, "V")
                        .concat((D + L).toFixed(1), "H")
                        .concat(j(t[0].x).toFixed(1), "Z")
                    : "";
                return { d: l, areaD: a };
              });
            return {
              xs: n,
              x: j,
              y: H,
              yTicks: o,
              xt: O,
              left: u,
              right: p,
              top: D,
              plotW: m,
              plotH: L,
              paths: A,
              xrefs: M,
              xrefRows: C,
              spans: $,
            };
          }, [
            y,
            S,
            k,
            e.yDomain,
            e.zeroBased,
            e.xDomain,
            F,
            q,
            N,
            w,
            W,
            R,
            v,
            b,
          ]),
          T = (0, n.useCallback)(
            (e) =>
              y.map((t) => {
                let l = t.points.map((e) => e.x),
                  a = "step" === b ? (0, s.BM)(l, e) : (0, s.zo)(l, e);
                return { s: t, p: a >= 0 ? t.points[a] : void 0 };
              }),
            [y, b]
          ),
          z = (0, n.useMemo)(() => {
            if (!A || null === L) return null;
            let e = A.xs[L];
            if (void 0 === e) return null;
            let t = T(e)
                .filter((e) => e.p)
                .map((e) => ({
                  id: e.s.id,
                  label: e.s.label,
                  value: q(e.p.y),
                  color: e.s.color,
                  kind: "step" === b ? "step" : "line",
                })),
              l = Math.min(...T(e).map((e) => (e.p ? A.y(e.p.y) : 1 / 0)));
            return {
              x: A.x(e),
              y: Number.isFinite(l) ? l : A.top,
              title: $(e),
              rows: t,
            };
          }, [A, L, b, $, q, T]),
          I = [
            ...y.map((e) => ({
              id: e.id,
              label: e.label,
              color: e.color,
              kind: "step" === b ? "step" : "line",
            })),
            ...(null != (l = null == A ? void 0 : A.spans) ? l : []).map(
              (e) => ({
                id: "span:".concat(e.id),
                label: e.label,
                color: e.color,
                kind: "bar",
              })
            ),
          ],
          B =
            null != (f = e.xColumn)
              ? f
              : "time" === v
              ? "Time"
              : null != (p = e.xLabel)
              ? p
              : "x",
          Y = (0, n.useMemo)(() => {
            let t = [
              ...new Set(y.flatMap((e) => e.points.map((e) => e.x))),
            ].sort((e, t) => e - t);
            return {
              caption: "string" == typeof e.title ? e.title : e.ariaLabel,
              columns: [
                { key: "x", label: B },
                ...y.map((e) => ({
                  key: e.id,
                  label: e.label,
                  align: "right",
                })),
              ],
              rows: t.map((e) => {
                let t = { x: $(e) };
                for (let l of T(e)) t[l.s.id] = l.p ? q(l.p.y) : "—";
                return t;
              }),
            };
          }, [y, $, q, B, e.title, e.ariaLabel, T]),
          Z =
            null != (g = e.isEmpty) ? g : y.every((e) => 0 === e.points.length);
        function _(e) {
          if (!A) return;
          let t = e.currentTarget.getBoundingClientRect(),
            l = e.clientX - t.left,
            a = A.x.invert(l);
          H((0, s.zo)(A.xs, a));
        }
        let P = A
          ? {
              x: A.x,
              y: A.y,
              left: A.left,
              top: A.top,
              plotW: A.plotW,
              plotH: A.plotH,
              width: S,
              height: k,
            }
          : null;
        return (0, a.jsx)(c.Cw, {
          title: e.title,
          subtitle: e.subtitle,
          legend: I,
          table: Y,
          asOf: e.asOf,
          note: e.note,
          empty: e.empty,
          isEmpty: Z,
          isRefreshing: e.isRefreshing,
          className: e.className,
          children: (0, a.jsxs)("div", {
            ref: C,
            className: "relative w-full",
            style: { height: k },
            onPointerLeave: () => H(null),
            children: [
              A
                ? (0, a.jsxs)("svg", {
                    width: S,
                    height: k,
                    viewBox: "0 0 ".concat(S, " ").concat(k),
                    className: "chart-svg block select-none",
                    role: "group",
                    "aria-label": e.ariaLabel,
                    tabIndex: 0,
                    onPointerMove: _,
                    onPointerDown: _,
                    onKeyDown: function (e) {
                      if (!A) return;
                      let t = A.xs.length;
                      if ("ArrowRight" === e.key)
                        H((e) => (0, s.qE)((null != e ? e : -1) + 1, 0, t - 1));
                      else if ("ArrowLeft" === e.key)
                        H((e) => (0, s.qE)((null != e ? e : t) - 1, 0, t - 1));
                      else if ("Home" === e.key) H(0);
                      else if ("End" === e.key) H(t - 1);
                      else {
                        if ("Escape" !== e.key) return;
                        H(null);
                      }
                      e.preventDefault();
                    },
                    onBlur: () => H(null),
                    children: [
                      A.yTicks.map((e) =>
                        (0, a.jsxs)(
                          "g",
                          {
                            children: [
                              (0, a.jsx)("line", {
                                x1: A.left,
                                x2: A.left + A.plotW,
                                y1: A.y(e),
                                y2: A.y(e),
                                stroke: "var(--chart-grid)",
                                strokeWidth: i.M$.gridWidth,
                                shapeRendering: "crispEdges",
                              }),
                              (0, a.jsx)("text", {
                                x: A.left - 8,
                                y: A.y(e),
                                dy: "0.35em",
                                textAnchor: "end",
                                style: c.Ee,
                                children: F(e),
                              }),
                            ],
                          },
                          e
                        )
                      ),
                      (0, a.jsx)("line", {
                        x1: A.left,
                        x2: A.left + A.plotW,
                        y1: A.top + A.plotH,
                        y2: A.top + A.plotH,
                        stroke: "var(--chart-axis)",
                        strokeWidth: 1,
                        shapeRendering: "crispEdges",
                      }),
                      A.xt.ticks.map((t) =>
                        (0, a.jsx)(
                          "text",
                          {
                            x: A.x(t),
                            y: A.top + A.plotH + 16,
                            textAnchor: "middle",
                            style: c.Ee,
                            children:
                              "time" === v
                                ? (0, o.RC)(t, A.xt.unit)
                                : e.xFormat
                                ? e.xFormat(t)
                                : String(t),
                          },
                          t
                        )
                      ),
                      A.spans.map((e) =>
                        (0, a.jsx)(
                          "rect",
                          {
                            x: e.x0,
                            y: A.top,
                            width: e.w,
                            height: A.plotH,
                            fill: (0, i.f4)(e.color),
                            fillOpacity: 0.14,
                          },
                          e.id
                        )
                      ),
                      A.xrefs.map((e, t) => {
                        var l;
                        let n = null != (l = A.xrefRows[t]) ? l : 0,
                          r = (0, s.qE)(
                            e.px,
                            A.left + e.w / 2,
                            A.left + A.plotW - e.w / 2
                          );
                        return (0, a.jsxs)(
                          "g",
                          {
                            children: [
                              (0, a.jsx)("line", {
                                x1: e.px,
                                x2: e.px,
                                y1: A.top,
                                y2: A.top + A.plotH,
                                stroke: "var(--chart-axis)",
                                strokeWidth: 1,
                                strokeDasharray: "3 4",
                              }),
                              (0, a.jsx)("text", {
                                x: r,
                                y: h.top + 13 * n + 8,
                                textAnchor: "middle",
                                style: { ...c.Ee, ...c.J3 },
                                children: e.label,
                              }),
                            ],
                          },
                          "".concat(e.label, ":").concat(e.x)
                        );
                      }),
                      w.map((e) => {
                        let t = A.y(e.y);
                        if (t < A.top || t > A.top + A.plotH) return null;
                        let l = y.some((e) => {
                          let l = e.points[e.points.length - 1];
                          return (
                            !!l &&
                            12 > Math.abs(A.y(l.y) - t) &&
                            A.x(l.x) > A.left + 0.6 * A.plotW
                          );
                        });
                        return (0, a.jsxs)(
                          "g",
                          {
                            children: [
                              (0, a.jsx)("line", {
                                x1: A.left,
                                x2: A.left + A.plotW,
                                y1: t,
                                y2: t,
                                stroke: "var(--chart-axis)",
                                strokeWidth: 1,
                                strokeDasharray: "3 4",
                              }),
                              (0, a.jsx)("text", {
                                x: l ? A.left + 4 : A.left + A.plotW - 4,
                                y: t - 4,
                                textAnchor: l ? "start" : "end",
                                style: { ...c.Ee, ...c.J3 },
                                children: e.label,
                              }),
                            ],
                          },
                          e.label
                        );
                      }),
                      y.map((e, t) => {
                        let l = (0, i.f4)(e.color),
                          n = A.paths[t];
                        return (0, a.jsxs)(
                          "g",
                          {
                            children: [
                              E && 1 === y.length
                                ? (0, a.jsx)("path", {
                                    d: n.areaD,
                                    fill: l,
                                    fillOpacity: i.M$.areaOpacity,
                                  })
                                : null,
                              (0, a.jsx)("path", {
                                d: n.d,
                                fill: "none",
                                stroke: l,
                                strokeWidth: i.M$.lineWidth,
                                strokeLinejoin: "round",
                                strokeLinecap: "round",
                                strokeDasharray: e.dashed ? "4 4" : void 0,
                                style: D
                                  ? void 0
                                  : {
                                      transition:
                                        "d 200ms var(--ease-out-soft)",
                                    },
                              }),
                              "always" === M ||
                              ("auto" === M && e.points.length <= 40)
                                ? e.points.map((e, t) =>
                                    (0, a.jsx)(
                                      "circle",
                                      {
                                        cx: A.x(e.x),
                                        cy: A.y(e.y),
                                        r: i.M$.markerRadius,
                                        fill: l,
                                        stroke: "var(--chart-surface)",
                                        strokeWidth: i.M$.ringWidth,
                                      },
                                      t
                                    )
                                  )
                                : null,
                            ],
                          },
                          e.id
                        );
                      }),
                      N
                        ? (0, a.jsx)(m, { series: y, x: A.x, y: A.y, fmt: q })
                        : null,
                      null !== L && void 0 !== A.xs[L]
                        ? (0, a.jsxs)("g", {
                            "aria-hidden": "true",
                            children: [
                              (0, a.jsx)("line", {
                                x1: A.x(A.xs[L]),
                                x2: A.x(A.xs[L]),
                                y1: A.top,
                                y2: A.top + A.plotH,
                                stroke: "var(--chart-text-3)",
                                strokeWidth: 1,
                                strokeOpacity: 0.7,
                                shapeRendering: "crispEdges",
                              }),
                              T(A.xs[L]).map((e) => {
                                let { s: t, p: l } = e;
                                return l
                                  ? (0, a.jsx)(
                                      "circle",
                                      {
                                        cx: A.x(A.xs[L]),
                                        cy: A.y(l.y),
                                        r: i.M$.markerRadius + 1,
                                        fill: (0, i.f4)(t.color),
                                        stroke: "var(--chart-surface)",
                                        strokeWidth: i.M$.ringWidth,
                                      },
                                      t.id
                                    )
                                  : null;
                              }),
                            ],
                          })
                        : null,
                      e.overlay && P ? e.overlay(P) : null,
                      (0, a.jsx)("desc", {
                        id: "".concat(O, "-desc"),
                        children: e.ariaLabel,
                      }),
                    ],
                  })
                : (0, a.jsx)("div", { className: "h-full w-full" }),
              (0, a.jsx)(c.m_, { state: z, width: S }),
              (0, a.jsx)(c.nJ, { state: z }),
            ],
          }),
        });
      }
      function m(e) {
        let { series: t, x: l, y: n, fmt: r } = e,
          s = t
            .map((e) => {
              let t = e.points[e.points.length - 1];
              return t
                ? {
                    id: e.id,
                    color: e.color,
                    px: l(t.x),
                    py: n(t.y),
                    text: r(t.y),
                  }
                : null;
            })
            .filter((e) => null !== e)
            .sort((e, t) => e.py - t.py),
          o = [];
        for (let e of s)
          (0 === o.length || e.py - o[o.length - 1].py >= 13) && o.push(e);
        return (0, a.jsx)("g", {
          children: o.map((e) =>
            (0, a.jsxs)(
              "g",
              {
                children: [
                  (0, a.jsx)("circle", {
                    cx: e.px + 9,
                    cy: e.py,
                    r: 2.5,
                    fill: (0, i.f4)(e.color),
                  }),
                  (0, a.jsx)("text", {
                    x: e.px + 15,
                    y: e.py,
                    dy: "0.35em",
                    style: c.DZ,
                    children: e.text,
                  }),
                ],
              },
              e.id
            )
          ),
        });
      }
    },
    28301: (e, t, l) => {
      l.d(t, { J: () => r });
      var a = l(72133),
        n = l(18133);
      function r(e) {
        return (0, a.jsx)(n.b, { ...e, curve: "step" });
      }
    },
    58190: (e, t, l) => {
      l.d(t, {
        Cw: () => d,
        DZ: () => m,
        Ee: () => p,
        J3: () => f,
        m_: () => u,
        nJ: () => x,
        rp: () => o,
        sc: () => g,
      });
      var a = l(72133),
        n = l(50625),
        r = l(84520),
        i = l(91109),
        s = l(96373);
      function o(e) {
        let { color: t, kind: l = "line" } = e,
          n = (0, s.f4)(t);
        return "bar" === l
          ? (0, a.jsx)("span", {
              "aria-hidden": "true",
              className: "inline-block h-2.5 w-2.5 rounded-[2px]",
              style: { background: n },
            })
          : "dot" === l
          ? (0, a.jsx)("span", {
              "aria-hidden": "true",
              className: "inline-block size-2.5 rounded-full",
              style: { background: n },
            })
          : (0, a.jsx)("svg", {
              "aria-hidden": "true",
              width: "14",
              height: "8",
              viewBox: "0 0 14 8",
              className: "shrink-0",
              children:
                "step" === l
                  ? (0, a.jsx)("path", {
                      d: "M1 6H6V2H13",
                      fill: "none",
                      stroke: n,
                      strokeWidth: s.M$.lineWidth,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    })
                  : (0, a.jsx)("path", {
                      d: "M1 4H13",
                      fill: "none",
                      stroke: n,
                      strokeWidth: s.M$.lineWidth,
                      strokeLinecap: "round",
                    }),
            });
      }
      function c(e) {
        let { items: t, className: l } = e;
        return t.length < 2
          ? null
          : (0, a.jsx)("ul", {
              className: (0, i.cn)(
                "flex flex-wrap items-center gap-x-4 gap-y-1",
                l
              ),
              "aria-label": "Series",
              children: t.map((e) =>
                (0, a.jsxs)(
                  "li",
                  {
                    className:
                      "inline-flex items-center gap-1.5 text-[11px] text-muted",
                    children: [
                      (0, a.jsx)(o, { color: e.color, kind: e.kind }),
                      (0, a.jsx)("span", { children: e.label }),
                    ],
                  },
                  e.id
                )
              ),
            });
      }
      function d(e) {
        let {
            title: t,
            subtitle: l,
            legend: r = [],
            table: s,
            asOf: o,
            note: d,
            empty: u,
            isEmpty: x,
            isRefreshing: p,
            className: m,
            children: f,
          } = e,
          [g, y] = (0, n.useState)("chart"),
          v = (0, n.useId)(),
          b = "table" === g;
        return (0, a.jsxs)("figure", {
          className: (0, i.cn)("min-w-0", m),
          "aria-labelledby": "".concat(v, "-title"),
          children: [
            (0, a.jsxs)("div", {
              className:
                "mb-3 flex flex-wrap items-start justify-between gap-x-3 gap-y-2",
              children: [
                (0, a.jsxs)("figcaption", {
                  className: "min-w-0",
                  children: [
                    (0, a.jsx)("span", {
                      id: "".concat(v, "-title"),
                      className: "block text-sm font-semibold text-fg",
                      children: t,
                    }),
                    l
                      ? (0, a.jsx)("span", {
                          className: "mt-0.5 block text-xs text-muted",
                          children: l,
                        })
                      : null,
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex shrink-0 items-center gap-2",
                  children: [
                    o,
                    (0, a.jsx)("button", {
                      type: "button",
                      "aria-pressed": b,
                      onClick: () => y(b ? "chart" : "table"),
                      className:
                        "inline-flex h-7 items-center rounded-pill border border-line bg-panel px-2.5 text-[11px] font-medium text-muted transition-colors hover:border-fg hover:text-fg",
                      children: b ? "Chart" : "Table",
                    }),
                  ],
                }),
              ],
            }),
            b || x ? null : (0, a.jsx)(c, { items: r, className: "mb-2" }),
            (0, a.jsx)("div", {
              className: (0, i.cn)(
                "relative transition-opacity",
                p && "opacity-60"
              ),
              "aria-busy": p || void 0,
              children: x
                ? b
                  ? (0, a.jsx)(h, { spec: s })
                  : (0, a.jsx)("div", {
                      className:
                        "flex min-h-24 items-center justify-center rounded-card border border-dashed border-line px-4 text-xs text-muted",
                      children: null != u ? u : "No data yet",
                    })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      b
                        ? null
                        : (0, a.jsx)("div", {
                            className: "chart-well p-2",
                            children: f,
                          }),
                      (0, a.jsx)("div", {
                        className: b ? void 0 : "sr-only",
                        children: (0, a.jsx)(h, { spec: s }),
                      }),
                    ],
                  }),
            }),
            d
              ? (0, a.jsx)("p", {
                  className: "mt-2 text-[11px] text-muted",
                  children: d,
                })
              : null,
          ],
        });
      }
      function h(e) {
        let { spec: t } = e;
        return (0, a.jsxs)(r.XI, {
          fade: !1,
          className: "min-w-0 text-xs",
          children: [
            (0, a.jsx)("caption", {
              className: "sr-only",
              children: t.caption,
            }),
            (0, a.jsx)(r.D1, {
              children: (0, a.jsx)("tr", {
                children: t.columns.map((e) => {
                  var t;
                  return (0, a.jsx)(
                    r.TH,
                    {
                      align: null != (t = e.align) ? t : "left",
                      className: "py-2 text-[11px]",
                      children: e.label,
                    },
                    e.key
                  );
                }),
              }),
            }),
            (0, a.jsxs)(r.vc, {
              children: [
                0 === t.rows.length
                  ? (0, a.jsx)(r.TR, {
                      children: (0, a.jsx)(r.TD, {
                        colSpan: t.columns.length,
                        className: "text-muted",
                        children: "No data yet",
                      }),
                    })
                  : null,
                t.rows.map((e, l) =>
                  (0, a.jsx)(
                    r.TR,
                    {
                      children: t.columns.map((t) => {
                        var l, n;
                        return (0, a.jsx)(
                          r.TD,
                          {
                            align: null != (l = t.align) ? l : "left",
                            mono: "right" === t.align,
                            className: "py-2",
                            children: null != (n = e[t.key]) ? n : "—",
                          },
                          t.key
                        );
                      }),
                    },
                    l
                  )
                ),
              ],
            }),
          ],
        });
      }
      function u(e) {
        var t;
        let { state: l, width: r } = e,
          i = (0, n.useRef)(null),
          [s, c] = (0, n.useState)(160);
        if (
          ((0, n.useLayoutEffect)(() => {
            i.current && c(i.current.offsetWidth);
          }, [l]),
          !l)
        )
          return null;
        let d = l.x + 12;
        return (
          r > 0 && d + s > r && (d = l.x - 12 - s),
          d < 0 &&
            (d =
              r > 0
                ? ((t = l.x - s / 2),
                  Math.min(Math.max(4, r - s - 4), Math.max(4, t)))
                : 4),
          (0, a.jsxs)("div", {
            ref: i,
            role: "presentation",
            className:
              "pointer-events-none absolute z-10 min-w-32 max-w-[calc(100%-8px)] rounded-md border border-line bg-raised px-2.5 py-2 text-xs shadow-[var(--shadow-card)]",
            style: { left: d, top: Math.max(0, l.y - 8) },
            children: [
              (0, a.jsx)("p", {
                className:
                  "mb-1 whitespace-nowrap font-mono text-[10.5px] text-muted tnum",
                children: l.title,
              }),
              (0, a.jsx)("ul", {
                className: "flex flex-col gap-0.5",
                children: l.rows.map((e) =>
                  (0, a.jsxs)(
                    "li",
                    {
                      className: "flex items-baseline justify-between gap-3",
                      children: [
                        (0, a.jsxs)("span", {
                          className:
                            "inline-flex min-w-0 items-center gap-1.5 whitespace-nowrap text-muted",
                          children: [
                            e.color
                              ? (0, a.jsx)(o, { color: e.color, kind: e.kind })
                              : null,
                            (0, a.jsx)("span", {
                              className: "max-w-[12rem] truncate",
                              children: e.label,
                            }),
                          ],
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "whitespace-nowrap font-mono font-medium text-fg tnum",
                          children: e.value,
                        }),
                      ],
                    },
                    e.id
                  )
                ),
              }),
            ],
          })
        );
      }
      function x(e) {
        let { state: t } = e;
        return (0, a.jsx)("p", {
          className: "sr-only",
          "aria-live": "polite",
          children: t
            ? ""
                .concat(t.title, ": ")
                .concat(
                  t.rows
                    .map((e) => "".concat(e.label, " ").concat(e.value))
                    .join(", ")
                )
            : "",
        });
      }
      let p = {
          fontFamily: "var(--font-mono)",
          fontSize: 10.5,
          fill: "var(--chart-text-3)",
          fontVariantNumeric: "tabular-nums",
        },
        m = {
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          fill: "var(--chart-text)",
          fontVariantNumeric: "tabular-nums",
        },
        f = {
          paintOrder: "stroke",
          stroke: "var(--chart-surface)",
          strokeWidth: 3,
          strokeLinejoin: "round",
        };
      function g(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10.5;
        return e.length * t * 0.62;
      }
    },
    71280: (e, t, l) => {
      l.d(t, { E: () => u });
      var a = l(72133),
        n = l(50625),
        r = l(96373),
        i = l(96816),
        s = l(13177),
        o = l(58190),
        c = l(93616);
      let d = { top: 18, right: 12, bottom: 26, left: 8 },
        h = [];
      function u(e) {
        var t, l, u;
        let {
            categories: p,
            series: m,
            stacked: f = !1,
            horizontal: g = !1,
            format: y = "units",
            height: v = 220,
            labels: b = "ends",
            highlights: k = h,
          } = e,
          [j, M] = (0, c.W)(),
          [w, N] = (0, n.useState)(null),
          E = (0, n.useId)(),
          W = (0, n.useMemo)(() => (0, s.G2)(y), [y]),
          R = (0, n.useMemo)(() => (0, s.G2)(y, { axis: !0 }), [y]),
          C = null != (t = e.categoryLabels) ? t : p,
          S = (0, n.useMemo)(() => {
            if (0 === M || 0 === p.length || 0 === m.length) return null;
            let e = p.map((e, t) => {
                let l = m.map((e) => {
                  var l;
                  return null != (l = e.values[t]) ? l : 0;
                });
                return f
                  ? [
                      l.filter((e) => e > 0).reduce((e, t) => e + t, 0),
                      l.filter((e) => e < 0).reduce((e, t) => e + t, 0),
                    ]
                  : l;
              }),
              t = (0, i.Sp)(e.flat()),
              l = (0, i.at)(t, 5).filter(
                (e, t, l) => 0 === t || R(e) !== R(l[t - 1])
              ),
              a = l.map(R),
              n = Math.max(...C.map((e) => (0, o.sc)(e))),
              s =
                d.left +
                (g
                  ? Math.min(n, 120)
                  : Math.max(...a.map((e) => (0, o.sc)(e)), 20)) +
                8,
              c = Math.max(40, M - s - d.right),
              h = Math.max(40, v - d.top - d.bottom),
              u = (0, i._m)(
                p.length,
                g ? [d.top, d.top + h] : [s, s + c],
                0.35
              ),
              x = (0, i.om)(t, g ? [s, s + c] : [d.top + h, d.top]),
              y = x(0),
              b = f ? 1 : m.length,
              k = r.M$.surfaceGap,
              j = Math.min(
                r.M$.barMaxThickness,
                (u.bandwidth - k * (b - 1)) / b
              ),
              w = j * b + k * (b - 1),
              N = [];
            return (
              p.forEach((e, t) => {
                let l = u(t) + (u.bandwidth - w) / 2,
                  a = 0,
                  n = 0;
                m.forEach((e, r) => {
                  var i;
                  let s = null != (i = e.values[t]) ? i : 0;
                  if (0 === s && f) return;
                  let o = s < 0,
                    c = f ? (o ? n : a) : 0,
                    d = c + s;
                  f && (o ? (n = d) : (a = d));
                  let h = x(c),
                    u = x(d),
                    p = l + (f ? 0 : r * (j + k)),
                    y = f && 0 !== c ? k : 0,
                    v =
                      !f ||
                      r ===
                        (function (e, t, l) {
                          for (let n = e.length - 1; n >= 0; n--) {
                            var a;
                            let r = null != (a = e[n].values[t]) ? a : 0;
                            if (l ? r < 0 : r > 0) return n;
                          }
                          return -1;
                        })(m, t, o);
                  if (g) {
                    let l = Math.min(h, u) + (o ? 0 : y),
                      a = Math.max(0, Math.abs(u - h) - y);
                    N.push({
                      key: "".concat(e.id, ":").concat(t),
                      ci: t,
                      si: r,
                      x: l,
                      y: p,
                      w: a,
                      h: j,
                      value: s,
                      end: v,
                      negative: o,
                    });
                  } else {
                    let l = Math.min(h, u) + (o ? y : 0),
                      a = Math.max(0, Math.abs(u - h) - y);
                    N.push({
                      key: "".concat(e.id, ":").concat(t),
                      ci: t,
                      si: r,
                      x: p,
                      y: l,
                      w: j,
                      h: a,
                      value: s,
                      end: v,
                      negative: o,
                    });
                  }
                });
              }),
              {
                left: s,
                plotW: c,
                plotH: h,
                band: u,
                v: x,
                zero: y,
                ticks: l,
                marks: N,
                thick: j,
              }
            );
          }, [M, v, p, C, m, f, g, R]),
          D = m.map((e) => ({
            id: e.id,
            label: e.label,
            color: e.color,
            kind: "bar",
          })),
          L = null != (l = e.categoryColumn) ? l : "Category",
          H = (0, n.useMemo)(
            () => ({
              caption: "string" == typeof e.title ? e.title : e.ariaLabel,
              columns: [
                { key: "c", label: L },
                ...m.map((e) => ({
                  key: e.id,
                  label: e.label,
                  align: "right",
                })),
                ...(f && m.length > 1
                  ? [{ key: "_total", label: "Total", align: "right" }]
                  : []),
              ],
              rows: p.map((e, t) => {
                var l, a;
                let n = { c: null != (l = C[t]) ? l : "" },
                  r = 0;
                for (let e of m) {
                  let l = null != (a = e.values[t]) ? a : 0;
                  (r += l), (n[e.id] = W(l));
                }
                return f && m.length > 1 && (n._total = W(r)), n;
              }),
            }),
            [p, C, m, W, f, L, e.title, e.ariaLabel]
          ),
          O = (0, n.useMemo)(() => {
            var e;
            if (!S || !w) return null;
            let t = Number(w.slice(w.lastIndexOf(":") + 1));
            if (!Number.isInteger(t) || t < 0 || t >= p.length) return null;
            let l = m.map((e) => {
                var l;
                return {
                  id: e.id,
                  label: e.label,
                  value: W(null != (l = e.values[t]) ? l : 0),
                  color: e.color,
                  kind: "bar",
                };
              }),
              a = S.marks.filter((e) => e.ci === t),
              n =
                a.length > 0
                  ? g
                    ? Math.max(...a.map((e) => e.x + e.w))
                    : Math.min(...a.map((e) => e.y))
                  : S.zero,
              r = S.band(t) + S.band.bandwidth / 2;
            return {
              x: g ? n : r,
              y: g ? r : n,
              title: null != (e = C[t]) ? e : "",
              rows: l,
            };
          }, [S, w, m, W, C, g, p.length]),
          q =
            null != (u = e.isEmpty)
              ? u
              : 0 === p.length || m.every((e) => e.values.every((e) => !e)),
          F = w ? Number(w.slice(w.lastIndexOf(":") + 1)) : -1;
        return (0, a.jsx)(o.Cw, {
          title: e.title,
          subtitle: e.subtitle,
          legend: D,
          table: H,
          asOf: e.asOf,
          note: e.note,
          empty: e.empty,
          isEmpty: q,
          isRefreshing: e.isRefreshing,
          className: e.className,
          children: (0, a.jsxs)("div", {
            ref: j,
            className: "relative w-full",
            style: { height: v },
            onPointerLeave: () => N(null),
            children: [
              S
                ? (0, a.jsxs)("svg", {
                    width: M,
                    height: v,
                    viewBox: "0 0 ".concat(M, " ").concat(v),
                    className: "chart-svg block select-none",
                    role: "group",
                    "aria-label": e.ariaLabel,
                    children: [
                      S.ticks.map((e) =>
                        g
                          ? (0, a.jsxs)(
                              "g",
                              {
                                children: [
                                  (0, a.jsx)("line", {
                                    x1: S.v(e),
                                    x2: S.v(e),
                                    y1: d.top,
                                    y2: d.top + S.plotH,
                                    stroke: "var(--chart-grid)",
                                    strokeWidth: r.M$.gridWidth,
                                    shapeRendering: "crispEdges",
                                  }),
                                  (0, a.jsx)("text", {
                                    x: S.v(e),
                                    y: d.top + S.plotH + 16,
                                    textAnchor: "middle",
                                    style: o.Ee,
                                    children: R(e),
                                  }),
                                ],
                              },
                              e
                            )
                          : (0, a.jsxs)(
                              "g",
                              {
                                children: [
                                  (0, a.jsx)("line", {
                                    x1: S.left,
                                    x2: S.left + S.plotW,
                                    y1: S.v(e),
                                    y2: S.v(e),
                                    stroke: "var(--chart-grid)",
                                    strokeWidth: r.M$.gridWidth,
                                    shapeRendering: "crispEdges",
                                  }),
                                  (0, a.jsx)("text", {
                                    x: S.left - 8,
                                    y: S.v(e),
                                    dy: "0.35em",
                                    textAnchor: "end",
                                    style: o.Ee,
                                    children: R(e),
                                  }),
                                ],
                              },
                              e
                            )
                      ),
                      k
                        .filter((e) => e.index >= 0 && e.index < p.length)
                        .map((e) => {
                          let t =
                              S.band(e.index) -
                              (S.band.step - S.band.bandwidth) / 2,
                            l = S.band(e.index) + S.band.bandwidth / 2;
                          return (0, a.jsx)(
                            "g",
                            {
                              "aria-hidden": "true",
                              children: g
                                ? (0, a.jsx)("rect", {
                                    x: S.left,
                                    y: t,
                                    width: S.plotW,
                                    height: S.band.step,
                                    fill: "var(--chart-now)",
                                    fillOpacity: 0.1,
                                  })
                                : (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsx)("rect", {
                                        x: t,
                                        y: d.top,
                                        width: S.band.step,
                                        height: S.plotH,
                                        fill: "var(--chart-now)",
                                        fillOpacity: 0.1,
                                      }),
                                      (0, a.jsx)("text", {
                                        x: l,
                                        y: d.top - 6,
                                        textAnchor:
                                          l > S.left + S.plotW - 30
                                            ? "end"
                                            : l < S.left + 30
                                            ? "start"
                                            : "middle",
                                        style: {
                                          ...o.Ee,
                                          fontFamily: "var(--font-sans)",
                                          fill: "var(--chart-text-2)",
                                          letterSpacing: 1,
                                        },
                                        children: e.label.toUpperCase(),
                                      }),
                                    ],
                                  }),
                            },
                            "hl:".concat(e.index)
                          );
                        }),
                      g
                        ? (0, a.jsx)("line", {
                            x1: S.zero,
                            x2: S.zero,
                            y1: d.top,
                            y2: d.top + S.plotH,
                            stroke: "var(--chart-axis)",
                            strokeWidth: 1,
                            shapeRendering: "crispEdges",
                          })
                        : (0, a.jsx)("line", {
                            x1: S.left,
                            x2: S.left + S.plotW,
                            y1: S.zero,
                            y2: S.zero,
                            stroke: "var(--chart-axis)",
                            strokeWidth: 1,
                            shapeRendering: "crispEdges",
                          }),
                      p.map((e, t) => {
                        var l;
                        let n = S.band(t) + S.band.bandwidth / 2;
                        return g
                          ? (0, a.jsx)(
                              "text",
                              {
                                x: S.left - 8,
                                y: n,
                                dy: "0.35em",
                                textAnchor: "end",
                                style: o.Ee,
                                children: x(
                                  null != (l = C[t]) ? l : e,
                                  Math.floor((S.left - 16) / 6.5)
                                ),
                              },
                              e
                            )
                          : (0, a.jsx)(
                              "text",
                              {
                                x: n,
                                y: d.top + S.plotH + 16,
                                textAnchor: "middle",
                                style: o.Ee,
                                children: x(e, Math.floor(S.band.step / 6.5)),
                              },
                              e
                            );
                      }),
                      p.map((e, t) => {
                        var l, n;
                        let r = S.marks.find((e) => e.ci === t),
                          i = r
                            ? r.key
                            : ""
                                .concat(
                                  null !=
                                    (n = null == (l = m[0]) ? void 0 : l.id)
                                    ? n
                                    : "s",
                                  ":"
                                )
                                .concat(t),
                          s = S.band(t) - (S.band.step - S.band.bandwidth) / 2;
                        return g
                          ? (0, a.jsx)(
                              "rect",
                              {
                                x: S.left,
                                y: s,
                                width: S.plotW,
                                height: Math.max(S.band.step, 24),
                                fill: "transparent",
                                onPointerEnter: () => N(i),
                                onPointerMove: () => N(i),
                              },
                              "hit:".concat(t)
                            )
                          : (0, a.jsx)(
                              "rect",
                              {
                                x: s,
                                y: d.top,
                                width: Math.max(S.band.step, 24),
                                height: S.plotH,
                                fill: "transparent",
                                onPointerEnter: () => N(i),
                                onPointerMove: () => N(i),
                              },
                              "hit:".concat(t)
                            );
                      }),
                      S.marks.map((e) => {
                        var t;
                        let l = m[e.si],
                          n = ""
                            .concat(null != (t = C[e.ci]) ? t : "", " \xb7 ")
                            .concat(l.label, ": ")
                            .concat(W(e.value));
                        return (0, a.jsx)(
                          "path",
                          {
                            d: (function (e, t) {
                              let l = Math.min(
                                  r.M$.barEndRadius,
                                  e.w / 2,
                                  e.h / 2
                                ),
                                { x: a, y: n, w: i, h: s } = e;
                              return !e.end || l <= 0
                                ? "M"
                                    .concat(a, " ")
                                    .concat(n, "h")
                                    .concat(i, "v")
                                    .concat(s, "h")
                                    .concat(-i, "Z")
                                : t
                                ? e.negative
                                  ? "M"
                                      .concat(a + l, " ")
                                      .concat(n, "h")
                                      .concat(i - l, "v")
                                      .concat(s, "h")
                                      .concat(-(i - l), "a")
                                      .concat(l, " ")
                                      .concat(l, " 0 0 1 ")
                                      .concat(-l, " ")
                                      .concat(-l, "v")
                                      .concat(-(s - 2 * l), "a")
                                      .concat(l, " ")
                                      .concat(l, " 0 0 1 ")
                                      .concat(l, " ")
                                      .concat(-l, "Z")
                                  : "M"
                                      .concat(a, " ")
                                      .concat(n, "h")
                                      .concat(i - l, "a")
                                      .concat(l, " ")
                                      .concat(l, " 0 0 1 ")
                                      .concat(l, " ")
                                      .concat(l, "v")
                                      .concat(s - 2 * l, "a")
                                      .concat(l, " ")
                                      .concat(l, " 0 0 1 ")
                                      .concat(-l, " ")
                                      .concat(l, "h")
                                      .concat(-(i - l), "Z")
                                : e.negative
                                ? "M"
                                    .concat(a, " ")
                                    .concat(n, "h")
                                    .concat(i, "v")
                                    .concat(s - l, "a")
                                    .concat(l, " ")
                                    .concat(l, " 0 0 1 ")
                                    .concat(-l, " ")
                                    .concat(l, "h")
                                    .concat(-(i - 2 * l), "a")
                                    .concat(l, " ")
                                    .concat(l, " 0 0 1 ")
                                    .concat(-l, " ")
                                    .concat(-l, "Z")
                                : "M"
                                    .concat(a, " ")
                                    .concat(n + l, "a")
                                    .concat(l, " ")
                                    .concat(l, " 0 0 1 ")
                                    .concat(l, " ")
                                    .concat(-l, "h")
                                    .concat(i - 2 * l, "a")
                                    .concat(l, " ")
                                    .concat(l, " 0 0 1 ")
                                    .concat(l, " ")
                                    .concat(l, "v")
                                    .concat(s - l, "h")
                                    .concat(-i, "Z");
                            })(e, g),
                            fill: (0, r.f4)(l.color),
                            className: "chart-mark",
                            "data-hover": F === e.ci || void 0,
                            tabIndex: 0,
                            role: "img",
                            "aria-label": n,
                            pointerEvents: "none",
                            onFocus: () => N(e.key),
                            onBlur: () => N(null),
                          },
                          e.key
                        );
                      }),
                      "ends" === b && (1 === m.length || f)
                        ? p.map((e, t) => {
                            let l = m.reduce((e, l) => {
                              var a;
                              return e + (null != (a = l.values[t]) ? a : 0);
                            }, 0);
                            if (!l) return null;
                            let n = W(l),
                              r = (0, o.sc)(n, 11),
                              i = S.v(l);
                            if (g) {
                              let e = S.marks.find((e) => e.ci === t);
                              return !e || i + r + 6 > S.left + S.plotW
                                ? null
                                : (0, a.jsx)(
                                    "text",
                                    {
                                      x: i + 6,
                                      y: e.y + e.h / 2,
                                      dy: "0.35em",
                                      style: o.DZ,
                                      children: n,
                                    },
                                    t
                                  );
                            }
                            if (r > S.band.step - 4) return null;
                            let s = S.band(t) + S.band.bandwidth / 2;
                            return (0, a.jsx)(
                              "text",
                              {
                                x: s,
                                y: l < 0 ? i + 13 : i - 6,
                                textAnchor: "middle",
                                style: o.DZ,
                                children: n,
                              },
                              t
                            );
                          })
                        : null,
                      (0, a.jsx)("desc", {
                        id: "".concat(E, "-desc"),
                        children: e.ariaLabel,
                      }),
                    ],
                  })
                : (0, a.jsx)("div", { className: "h-full w-full" }),
              (0, a.jsx)(o.m_, { state: O, width: M }),
              (0, a.jsx)(o.nJ, { state: O }),
            ],
          }),
        });
      }
      function x(e, t) {
        return t < 3 || e.length <= t
          ? e
          : "".concat(e.slice(0, Math.max(1, t - 1)), "…");
      }
    },
    78936: (e, t, l) => {
      l.d(t, { K: () => u });
      var a = l(72133),
        n = l(50625),
        r = l(96373),
        i = l(96816),
        s = l(13177),
        o = l(58190),
        c = l(93616);
      let d = { top: 22, right: 16, bottom: 24, left: 16 },
        h = { done: "done", current: "current", upcoming: "upcoming" };
      function u(e) {
        var t, l;
        let { marks: u, spans: x = [], now: p, height: m = 120 } = e,
          [f, g] = (0, c.W)(),
          [y, v] = (0, n.useState)(null),
          b = (0, n.useId)(),
          k = (0, n.useMemo)(() => [...u].sort((e, t) => e.at - t.at), [u]),
          j = null != p ? p : Math.floor(Date.now() / 1e3),
          M = (0, n.useCallback)(
            (e) => {
              var t;
              return null != (t = e.state)
                ? t
                : e.at <= j
                ? "done"
                : "upcoming";
            },
            [j]
          ),
          w = (0, n.useMemo)(() => {
            var t, l;
            if (0 === g || (0 === k.length && 0 === x.length)) return null;
            let a = [
                ...k.map((e) => e.at),
                ...x.flatMap((e) => [e.from, e.to]),
                ...(p ? [p] : []),
              ],
              n = null != (t = e.start) ? t : Math.min(...a),
              r = null != (l = e.end) ? l : Math.max(...a);
            if (
              (r <= n && ((n -= 3600), (r += 3600)),
              void 0 === e.start || void 0 === e.end)
            ) {
              let t = (r - n) * 0.04;
              void 0 === e.start && (n -= t), void 0 === e.end && (r += t);
            }
            let c = d.left,
              h = Math.max(40, g - d.left - d.right),
              u = (0, i.om)([n, r], [c, c + h]),
              m = x.length,
              f = (0, i.Cf)([n, r], Math.max(2, Math.floor(h / 100))),
              y = k.map((e) => u(e.at)),
              v = (function (e, t, l) {
                let a = [],
                  n = 0;
                for (; n < e.length; ) {
                  let r = n;
                  for (; r + 1 < e.length && e[r + 1] - e[n] <= 24; ) r++;
                  let i = Array.from({ length: r - n + 1 }, (e, t) => n + t),
                    s = i.map((e) => t[e]).join(" \xb7 "),
                    c =
                      1 === i.length || (0, o.sc)(s, 11) <= l
                        ? s
                        : "".concat(t[n], " +").concat(i.length - 1);
                  a.push({ members: i, label: c }), (n = r + 1);
                }
                return a;
              })(
                y,
                k.map((e) => e.label),
                h / 2
              ).map((e) => {
                let t = e.members.map((e) => M(k[e])),
                  l = t.includes("current")
                    ? "current"
                    : t.every((e) => "done" === e)
                    ? "done"
                    : t.every((e) => "upcoming" === e)
                    ? "upcoming"
                    : "current",
                  a =
                    e.members.reduce((e, t) => e + y[t], 0) / e.members.length;
                return {
                  members: e.members,
                  px: a,
                  at: k[e.members[0]].at,
                  label: e.label,
                  state: l,
                };
              }),
              b = [],
              j = [],
              w = [],
              N = [];
            v.forEach((e) => {
              var t;
              let l = (0, o.sc)(e.label, 11),
                a = (0, i.qE)(e.px, c + l / 2, c + h - l / 2),
                n = a - l / 2,
                r = w.findIndex((e) => n > e + 8);
              r < 0 &&
                (r = w.length < 4 ? w.length : w.indexOf(Math.min(...w))),
                b.push(r),
                j.push(a),
                (w[r] = Math.max(null != (t = w[r]) ? t : -1 / 0, n + l)),
                N.push({ x0: n, x1: n + l, row: r });
            });
            let E = 13 * Math.max(2, w.length) + 6,
              W = d.top + 14 * m + E,
              R = null;
            if (void 0 !== p && p >= n && p <= r) {
              let e = u(p),
                t = (0, o.sc)("NOW", 10.5) + 6,
                l = (l, a) => e + t / 2 > l && e - t / 2 < a,
                a = Math.max(0, ...b);
              N.some((e) => e.row === a && l(e.x0, e.x1))
                ? f.ticks.some((e) => {
                    let t = (0, o.sc)((0, s.RC)(e, f.unit));
                    return l(u(e) - t / 2, u(e) + t / 2);
                  }) || (R = { x: e, y: W + 16 })
                : (R = { x: e, y: d.top - 8 });
            }
            return {
              x: u,
              xs: v.map((e) => e.px),
              xt: f,
              left: c,
              plotW: h,
              axisY: W,
              rows: b,
              labelX: j,
              labelH: E,
              lo: n,
              hi: r,
              clusters: v,
              markX: y,
              nowCaption: R,
            };
          }, [g, k, x, p, e.start, e.end, M]),
          N = (0, n.useCallback)(
            (e) =>
              e >= j
                ? "in ".concat((0, s.p0)(e - j))
                : "".concat((0, s.p0)(j - e), " ago"),
            [j]
          ),
          E = (0, n.useMemo)(() => {
            if (!w || null === y) return null;
            let e = w.clusters[y];
            if (!e) return null;
            let t = e.members.map((e) => k[e]),
              l = 1 === t.length ? t[0] : null,
              a = x.filter((e) =>
                t.some((t) => t.at >= e.from && t.at <= e.to)
              ),
              n = l
                ? [
                    { id: "when", label: "when", value: N(l.at) },
                    { id: "state", label: "state", value: h[M(l)] },
                    ...(l.detail
                      ? [{ id: "detail", label: "note", value: l.detail }]
                      : []),
                  ]
                : t.map((e) => ({
                    id: e.id,
                    label: e.label,
                    value: "".concat((0, s.Sp)(e.at), " \xb7 ").concat(h[M(e)]),
                  }));
            n.push(
              ...a.map((e) => ({
                id: e.id,
                label: e.label,
                value: ""
                  .concat((0, s.Sp)(e.from), " → ")
                  .concat((0, s.Sp)(e.to)),
                color: e.color,
                kind: "bar",
              }))
            );
            let r = l
              ? "".concat(l.label, " \xb7 ").concat((0, s.Sp)(l.at))
              : ""
                  .concat(t.length, " milestones \xb7 ")
                  .concat((0, s.Sp)(t[0].at));
            return { x: e.px, y: w.axisY - 24, title: r, rows: n };
          }, [w, y, k, x, N, M]),
          W = x.map((e) => ({
            id: e.id,
            label: e.label,
            color: e.color,
            kind: "bar",
          })),
          R = (0, n.useMemo)(
            () => ({
              caption: "string" == typeof e.title ? e.title : e.ariaLabel,
              columns: [
                { key: "what", label: "Milestone" },
                { key: "at", label: "Time (UTC)", align: "right" },
                { key: "rel", label: "Relative", align: "right" },
                { key: "state", label: "State", align: "right" },
              ],
              rows: [
                ...k.map((e) => ({
                  what: e.label,
                  at: (0, s.Sp)(e.at),
                  rel: N(e.at),
                  state: h[M(e)],
                })),
                ...x.map((e) => ({
                  what: e.label,
                  at: ""
                    .concat((0, s.Sp)(e.from), " → ")
                    .concat((0, s.Sp)(e.to)),
                  rel: (0, s.p0)(e.to - e.from),
                  state:
                    j < e.from ? "upcoming" : j > e.to ? "done" : "current",
                })),
              ],
            }),
            [k, x, j, N, M, e.title, e.ariaLabel]
          );
        function C(e) {
          if (!w || 0 === w.xs.length) return;
          let t = e.currentTarget.getBoundingClientRect();
          v((0, i.zo)(w.xs, e.clientX - t.left));
        }
        let S = Math.max(
            m,
            d.top +
              14 * x.length +
              (null != (t = null == w ? void 0 : w.labelH) ? t : 32) +
              d.bottom +
              ((null == w ? void 0 : w.nowCaption) && w.nowCaption.y > w.axisY
                ? 12
                : 0)
          ),
          D = null != (l = e.isEmpty) ? l : 0 === u.length && 0 === x.length;
        return (0, a.jsx)(o.Cw, {
          title: e.title,
          subtitle: e.subtitle,
          legend: W,
          table: R,
          asOf: e.asOf,
          note: e.note,
          isEmpty: D,
          className: e.className,
          children: (0, a.jsxs)("div", {
            ref: f,
            className: "relative w-full",
            style: { height: S },
            onPointerLeave: () => v(null),
            children: [
              w
                ? (0, a.jsxs)("svg", {
                    width: g,
                    height: S,
                    viewBox: "0 0 ".concat(g, " ").concat(S),
                    className: "chart-svg block select-none",
                    role: "img",
                    "aria-label": e.ariaLabel,
                    tabIndex: 0,
                    onPointerMove: C,
                    onPointerDown: C,
                    onKeyDown: function (e) {
                      if (!w) return;
                      let t = w.xs.length;
                      if (0 !== t) {
                        if ("ArrowRight" === e.key)
                          v((e) =>
                            (0, i.qE)((null != e ? e : -1) + 1, 0, t - 1)
                          );
                        else if ("ArrowLeft" === e.key)
                          v((e) =>
                            (0, i.qE)((null != e ? e : t) - 1, 0, t - 1)
                          );
                        else if ("Home" === e.key) v(0);
                        else if ("End" === e.key) v(t - 1);
                        else {
                          if ("Escape" !== e.key) return;
                          v(null);
                        }
                        e.preventDefault();
                      }
                    },
                    onBlur: () => v(null),
                    children: [
                      x.map((e, t) => {
                        let l = (0, i.qE)(
                            w.x(e.from),
                            w.left,
                            w.left + w.plotW
                          ),
                          n = (0, i.qE)(w.x(e.to), w.left, w.left + w.plotW),
                          s = d.top + 14 * t;
                        return (0, a.jsx)(
                          "rect",
                          {
                            x: l,
                            y: s,
                            width: Math.max(2, n - l),
                            height: 10,
                            rx: r.M$.barEndRadius,
                            fill: (0, r.f4)(e.color),
                          },
                          e.id
                        );
                      }),
                      (0, a.jsx)("line", {
                        x1: w.left,
                        x2: w.left + w.plotW,
                        y1: w.axisY,
                        y2: w.axisY,
                        stroke: "var(--chart-axis)",
                        strokeWidth: 1,
                        shapeRendering: "crispEdges",
                      }),
                      w.xt.ticks.map((e) =>
                        (0, a.jsxs)(
                          "g",
                          {
                            children: [
                              (0, a.jsx)("line", {
                                x1: w.x(e),
                                x2: w.x(e),
                                y1: w.axisY,
                                y2: w.axisY + 4,
                                stroke: "var(--chart-axis)",
                                strokeWidth: 1,
                                shapeRendering: "crispEdges",
                              }),
                              (0, a.jsx)("text", {
                                x: w.x(e),
                                y: w.axisY + 16,
                                textAnchor: "middle",
                                style: o.Ee,
                                children: (0, s.RC)(e, w.xt.unit),
                              }),
                            ],
                          },
                          e
                        )
                      ),
                      void 0 !== p
                        ? (0, a.jsx)("line", {
                            x1: w.left,
                            x2: (0, i.qE)(w.x(p), w.left, w.left + w.plotW),
                            y1: w.axisY,
                            y2: w.axisY,
                            stroke: "var(--chart-deemphasis)",
                            strokeWidth: r.M$.lineWidth,
                            strokeLinecap: "round",
                          })
                        : null,
                      void 0 !== p && p >= w.lo && p <= w.hi
                        ? (0, a.jsx)("line", {
                            "aria-hidden": "true",
                            x1: w.x(p),
                            x2: w.x(p),
                            y1: d.top - 4,
                            y2: w.axisY + 6,
                            stroke: "var(--chart-now)",
                            strokeWidth: 1,
                            shapeRendering: "crispEdges",
                          })
                        : null,
                      k.map((e, t) => {
                        let l = w.markX[t],
                          n = M(e),
                          i = w.clusters.findIndex((e) =>
                            e.members.includes(t)
                          );
                        return (0, a.jsx)(
                          "circle",
                          {
                            cx: l,
                            cy: w.axisY,
                            r:
                              y === i
                                ? r.M$.markerRadius + 1.5
                                : r.M$.markerRadius,
                            fill:
                              "current" === n
                                ? "var(--chart-now)"
                                : "done" === n
                                ? "var(--chart-deemphasis)"
                                : "var(--chart-surface)",
                            stroke:
                              "upcoming" === n
                                ? "var(--chart-deemphasis)"
                                : "var(--chart-surface)",
                            strokeWidth: r.M$.ringWidth,
                          },
                          e.id
                        );
                      }),
                      w.clusters.map((e, t) => {
                        var l, n;
                        let r = null != (l = w.rows[t]) ? l : 0;
                        return (0, a.jsx)(
                          "text",
                          {
                            x: null != (n = w.labelX[t]) ? n : e.px,
                            y: w.axisY - 12 - 13 * r,
                            textAnchor: "middle",
                            style: {
                              ...o.DZ,
                              ...o.J3,
                              fontFamily: "var(--font-sans)",
                              fontWeight: "current" === e.state ? 600 : 500,
                            },
                            children: e.label,
                          },
                          e.members.join(":")
                        );
                      }),
                      w.nowCaption
                        ? (0, a.jsx)("text", {
                            "aria-hidden": "true",
                            x: w.nowCaption.x,
                            y: w.nowCaption.y,
                            textAnchor: "middle",
                            style: {
                              ...o.Ee,
                              ...o.J3,
                              fontFamily: "var(--font-sans)",
                              fill: "var(--chart-text-2)",
                              letterSpacing: 1,
                            },
                            children: "NOW",
                          })
                        : null,
                      null !== y && void 0 !== w.xs[y]
                        ? (0, a.jsx)("line", {
                            x1: w.xs[y],
                            x2: w.xs[y],
                            y1: d.top - 4,
                            y2: w.axisY + 6,
                            stroke: "var(--chart-text-3)",
                            strokeOpacity: 0.7,
                            strokeWidth: 1,
                            shapeRendering: "crispEdges",
                          })
                        : null,
                      (0, a.jsx)("desc", {
                        id: "".concat(b, "-desc"),
                        children: e.ariaLabel,
                      }),
                    ],
                  })
                : (0, a.jsx)("div", { className: "h-full w-full" }),
              (0, a.jsx)(o.m_, { state: E, width: g }),
              (0, a.jsx)(o.nJ, { state: E }),
            ],
          }),
        });
      }
    },
    93616: (e, t, l) => {
      l.d(t, { W: () => n });
      var a = l(50625);
      function n() {
        let [e, t] = (0, a.useState)(0),
          l = (0, a.useRef)(null);
        return [
          (0, a.useCallback)((e) => {
            var a;
            if (
              (null == (a = l.current) || a.disconnect(),
              (l.current = null),
              !e)
            )
              return;
            let n = () => t(Math.round(e.getBoundingClientRect().width));
            if ((n(), "undefined" == typeof ResizeObserver)) return;
            let r = new ResizeObserver(n);
            r.observe(e), (l.current = r);
          }, []),
          e,
        ];
      }
    },
    96373: (e, t, l) => {
      l.d(t, { Ks: () => a, M$: () => r, f4: () => n });
      let a = {
        surface: "var(--chart-surface)",
        series: {
          stock: "var(--chart-stock)",
          income: "var(--chart-income)",
          upside: "var(--chart-upside)",
        },
        emphasis: "var(--chart-emphasis)",
        deemphasis: "var(--chart-deemphasis)",
        sequential: [
          "var(--chart-seq-1)",
          "var(--chart-seq-2)",
          "var(--chart-seq-3)",
          "var(--chart-seq-4)",
          "var(--chart-seq-5)",
        ],
        status: {
          good: "var(--chart-good)",
          warning: "var(--chart-warning)",
          serious: "var(--chart-serious)",
          critical: "var(--chart-critical)",
        },
        grid: "var(--chart-grid)",
        axis: "var(--chart-axis)",
        text: "var(--chart-text)",
        text2: "var(--chart-text-2)",
        text3: "var(--chart-text-3)",
        now: "var(--chart-now)",
      };
      function n(e) {
        return "string" == typeof e
          ? "deemphasis" === e
            ? a.deemphasis
            : "emphasis" === e
            ? a.emphasis
            : a.series[e]
          : "seq" in e
          ? a.sequential[e.seq]
          : a.status[e.status];
      }
      let r = {
        lineWidth: 2,
        markerRadius: 4,
        ringWidth: 2,
        barMaxThickness: 24,
        barEndRadius: 4,
        surfaceGap: 2,
        areaOpacity: 0.1,
        gridWidth: 1,
      };
    },
    96816: (e, t, l) => {
      function a(e, t) {
        let [l, a] = e,
          [n, r] = t,
          i = a - l,
          s = (e) => (0 === i ? (n + r) / 2 : n + ((e - l) / i) * (r - n));
        return (
          (s.domain = e),
          (s.range = t),
          (s.invert = (e) => (r === n ? l : l + ((e - n) / (r - n)) * i)),
          s
        );
      }
      function n(e, t) {
        let l =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0.3,
          [a, n] = t,
          r = Math.max(e, 1),
          i = (n - a) / r,
          s = Math.max(0, i * (1 - l)),
          o = (e) => a + e * i + (i - s) / 2;
        return (o.bandwidth = s), (o.step = i), (o.range = t), (o.count = r), o;
      }
      function r(e) {
        let t = 1 / 0,
          l = -1 / 0;
        for (let a of e)
          Number.isFinite(a) && (a < t && (t = a), a > l && (l = a));
        return t === 1 / 0 ? [0, 0] : [t, l];
      }
      function i(e, t) {
        if (e <= 0 || t <= 0) return 1;
        let l = e / t,
          a = 10 ** Math.floor(Math.log10(l)),
          n = l / a;
        return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * a;
      }
      function s(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
          [l, a] = e[0] <= e[1] ? e : [e[1], e[0]];
        if (!Number.isFinite(l) || !Number.isFinite(a)) return [];
        if (l === a) return [l];
        let n = [];
        for (let e = Math.max(1, t); e <= Math.max(1, t) + 6; e++) {
          let t = i(a - l, e),
            r = Math.ceil(l / t - 1e-9) * t;
          n = [];
          for (let e = r; e <= a + 1e-9 * t; e += t) n.push(h(e, t));
          if (n.length >= 2) break;
        }
        return n;
      }
      function o(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
          [l, a] = e;
        if (l === a) return 0 === l ? [0, 1] : [Math.min(0, l), Math.max(0, a)];
        let n = i(a - l, t);
        return [h(Math.floor(l / n) * n, n), h(Math.ceil(a / n) * n, n)];
      }
      function c(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
          [l, a] = r(e);
        return o([Math.min(0, l), Math.max(0, a)], t);
      }
      function d(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 0.08,
          [l, a] = r(e);
        if (l === a) {
          let e = Math.abs(l) * t || 1;
          return [l - e, a + e];
        }
        let n = (a - l) * t;
        return [l - n, a + n];
      }
      function h(e, t) {
        let l = Math.max(0, -Math.floor(Math.log10(t)) + 2);
        return Number(e.toFixed(l));
      }
      l.d(t, {
        BM: () => m,
        Cf: () => x,
        O: () => o,
        Sp: () => c,
        Xx: () => r,
        Z3: () => d,
        _m: () => n,
        at: () => s,
        om: () => a,
        qE: () => f,
        zo: () => p,
      });
      let u = [
        60, 300, 900, 1800, 3600, 10800, 21600, 43200, 86400, 172800, 259200,
        345600, 604800, 1209600, 2592e3, 7776e3, 31536e3,
      ];
      function x(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
          [l, a] = e[0] <= e[1] ? e : [e[1], e[0]],
          n = a - l;
        if (!(n > 0)) return { ticks: [l], unit: "day", step: 86400 };
        let r = n / Math.max(t, 1),
          i = u.findIndex((e) => e >= r);
        for (i < 0 && (i = u.length - 1); ; ) {
          let e = (function (e, t, l) {
            let a =
                l < 3600
                  ? "minute"
                  : l < 86400
                  ? "hour"
                  : l < 2592e3
                  ? "day"
                  : l < 31536e3
                  ? "month"
                  : "year",
              n = [];
            if ("month" === a || "year" === a) {
              let r = "month" === a ? (l >= 7776e3 ? 3 : 1) : 12,
                i = new Date(1e3 * e),
                s = i.getUTCFullYear(),
                o = i.getUTCMonth();
              for (o = Math.ceil(o / r) * r; ; ) {
                let l = Date.UTC(s, o, 1) / 1e3;
                if (l > t) break;
                l >= e && n.push(l),
                  (o += r) >= 12 && ((s += Math.floor(o / 12)), (o %= 12));
              }
            } else {
              let a = Math.ceil(e / l) * l;
              for (let e = a; e <= t; e += l) n.push(e);
            }
            return { ticks: n, unit: a, step: l };
          })(l, a, u[i]);
          if (e.ticks.length >= 2) return e;
          if (0 === i) return e.ticks.length > 0 ? e : { ...e, ticks: [l] };
          i -= 1;
        }
      }
      function p(e, t) {
        let l = e.length;
        if (0 === l) return -1;
        let a = 0,
          n = l - 1;
        for (; a < n; ) {
          let l = (a + n) >> 1;
          e[l] < t ? (a = l + 1) : (n = l);
        }
        return a > 0 && Math.abs(e[a - 1] - t) <= Math.abs(e[a] - t)
          ? a - 1
          : a;
      }
      function m(e, t) {
        let l = 0,
          a = e.length;
        for (; l < a; ) {
          let n = (l + a) >> 1;
          e[n] <= t ? (l = n + 1) : (a = n);
        }
        return l - 1;
      }
      function f(e, t, l) {
        return Math.min(l, Math.max(t, e));
      }
    },
  },
]);
