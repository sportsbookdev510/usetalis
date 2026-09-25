(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1324, 3662, 5246, 6217, 7812],
  {
    56749: (e, t, l) => {
      "use strict";
      l.d(t, { Slider: () => r });
      var s = l(72133),
        a = l(50625),
        n = l(91109);
      function r(e) {
        let {
            label: t,
            value: l,
            onChange: r,
            min: c,
            max: i,
            step: u = 1,
            ticks: o,
            format: m,
            className: d,
            hideLabel: x,
            knob: f = "fg",
          } = e,
          h = (0, a.useId)(),
          v = i > c ? ((l - c) / (i - c)) * 100 : 0,
          b = m ? m(l) : String(l);
        return (0, s.jsxs)("div", {
          className: (0, n.cn)("w-full", d),
          children: [
            (0, s.jsxs)("div", {
              className: (0, n.cn)(
                "mb-2 flex items-center justify-between",
                x && "sr-only"
              ),
              children: [
                (0, s.jsx)("label", {
                  htmlFor: h,
                  className: "text-xs text-muted",
                  children: t,
                }),
                (0, s.jsx)("output", {
                  htmlFor: h,
                  className: "font-mono text-xs text-fg tnum",
                  children: b,
                }),
              ],
            }),
            (0, s.jsx)("input", {
              id: h,
              type: "range",
              className: "talis-range",
              "data-knob": f,
              min: c,
              max: i,
              step: u,
              value: l,
              "aria-valuetext": b,
              onChange: (e) => r(Number(e.target.value)),
              style: { "--fill": "".concat(v, "%") },
              list: o ? "".concat(h, "-ticks") : void 0,
            }),
            o
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("datalist", {
                      id: "".concat(h, "-ticks"),
                      children: o.map((e) =>
                        (0, s.jsx)(
                          "option",
                          { value: e.value, label: e.label },
                          e.value
                        )
                      ),
                    }),
                    (0, s.jsx)("div", {
                      className: "relative mt-0.5 h-6",
                      "aria-hidden": "true",
                      children: o.map((e) => {
                        let t = i > c ? ((e.value - c) / (i - c)) * 100 : 0,
                          a = e.value === l;
                        return (0, s.jsxs)(
                          "span",
                          {
                            className: (0, n.cn)(
                              "absolute top-0 flex flex-col items-center gap-1 font-mono tnum",
                              a
                                ? "text-xs font-medium text-fg"
                                : "text-[11px] text-muted"
                            ),
                            style: {
                              left: "".concat(t, "%"),
                              transform: "translateX(".concat(
                                0 === t ? "0" : 100 === t ? "-100%" : "-50%",
                                ")"
                              ),
                            },
                            children: [
                              (0, s.jsx)("span", {
                                className: (0, n.cn)(
                                  "block size-1 rounded-full",
                                  a ? "bg-accent" : "bg-rule"
                                ),
                              }),
                              e.label,
                            ],
                          },
                          e.value
                        );
                      }),
                    }),
                  ],
                })
              : null,
          ],
        });
      }
    },
    91109: (e, t, l) => {
      "use strict";
      l.d(t, { cn: () => n });
      var s = l(97418),
        a = l(61295);
      function n() {
        for (var e = arguments.length, t = Array(e), l = 0; l < e; l++)
          t[l] = arguments[l];
        return (0, a.QP)((0, s.$)(t));
      }
    },
    94698: (e, t, l) => {
      Promise.resolve().then(l.bind(l, 56749)),
        Promise.resolve().then(l.t.bind(l, 64133, 23)),
        Promise.resolve().then(l.t.bind(l, 25626, 23));
    },
  },
  (e) => {
    e.O(0, [4133, 755, 4314, 4297, 7358], () => e((e.s = 94698))),
      (_N_E = e.O());
  },
]);
