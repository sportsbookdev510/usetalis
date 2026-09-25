(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9806],
  {
    18835: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 81905));
    },
    40453: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => a.a });
      var s = r(79869),
        a = r.n(s);
    },
    72555: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      let s = (0, r(99011).A)("arrow-right", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    78470: (e, t, r) => {
      "use strict";
      r.d(t, { c: () => u });
      var s = r(72133),
        a = r(50625),
        i = r(64133),
        n = r.n(i);
      let l = (0, r(99011).A)("rotate-cw", [
        [
          "path",
          {
            d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
            key: "1p45f6",
          },
        ],
        ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
      ]);
      var o = r(72555),
        c = r(84520),
        d = r(91109);
      function u(e) {
        let { error: t, reset: r, route: i, className: u } = e,
          [h, m] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            console.error(t);
          }, [t]),
          (0, s.jsxs)(c.Zp, {
            role: "alert",
            "aria-live": "assertive",
            className: (0, d.cn)("flex flex-col items-start gap-4 py-8", u),
            children: [
              (0, s.jsx)(c.eN, {
                children: i ? "".concat(i, " \xb7 error") : "Error",
              }),
              (0, s.jsxs)("h2", {
                className: "display text-display-md text-fg",
                children: ["This view", (0, s.jsx)("br", {}), "did not load."],
              }),
              (0, s.jsx)("p", {
                className: "max-w-md text-sm leading-relaxed text-muted",
                children: (function (e) {
                  let t = (e.message || "").trim();
                  return t
                    ? /429|rate limit|too many requests/i.test(t)
                      ? "The public RPC is rate-limiting reads at the moment. Retrying usually succeeds after a few seconds."
                      : /fetch|network|Failed to fetch|timeout/i.test(t)
                      ? "A network read did not complete. Check the connection and retry."
                      : t.length > 240
                      ? "".concat(t.slice(0, 240), "…")
                      : t
                    : "Something in this view threw while rendering.";
                })(t),
              }),
              (0, s.jsxs)("div", {
                className: "flex flex-wrap gap-3",
                children: [
                  (0, s.jsx)(c.$n, {
                    size: "sm",
                    onClick: function () {
                      m(!0), r(), setTimeout(() => m(!1), 600);
                    },
                    disabled: h,
                    icon: (0, s.jsx)(l, {
                      className: (0, d.cn)("size-3.5", h && "animate-spin"),
                      "aria-hidden": "true",
                    }),
                    children: h ? "Retrying…" : "Retry",
                  }),
                  (0, s.jsx)(c.$n, {
                    size: "sm",
                    variant: "secondary",
                    onClick: () => window.location.reload(),
                    children: "Reload page",
                  }),
                  (0, s.jsx)(c.$n, {
                    size: "sm",
                    variant: "ghost",
                    href: "https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=0xc8885f68acb213b144fda1835d61ef05d88ad687",
                    iconRight: (0, s.jsx)(o.A, {
                      className: "size-3.5",
                      "aria-hidden": "true",
                    }),
                    children: "Markets",
                  }),
                ],
              }),
              (0, s.jsxs)("p", {
                className: "text-[11px] text-dim",
                children: [
                  "Positions and transactions live on chain; retrying re-reads them.",
                  t.digest
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          " ",
                          "Reference ",
                          (0, s.jsx)("span", {
                            className: "font-mono",
                            children: t.digest,
                          }),
                          ".",
                        ],
                      })
                    : null,
                  " ",
                  (0, s.jsx)(n(), {
                    href: "/status",
                    className:
                      "underline decoration-rule underline-offset-2 hover:decoration-fg",
                    children: "System status",
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    79869: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return o;
          },
          getImageProps: function () {
            return l;
          },
        });
      let s = r(31727),
        a = r(11090),
        i = r(25626),
        n = s._(r(62898));
      function l(e) {
        let { props: t } = (0, a.getImgProps)(e, {
          defaultLoader: n.default,
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
      let o = i.Image;
    },
    81905: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => i });
      var s = r(72133),
        a = r(78470);
      function i(e) {
        return (0, s.jsx)(a.c, { ...e, route: "Positions" });
      }
    },
    99011: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => o });
      var s = r(50625);
      let a = (e) => {
          let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) =>
            r ? r.toUpperCase() : t.toLowerCase()
          );
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        i = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t
            .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
            .join(" ")
            .trim();
        };
      var n = {
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
            absoluteStrokeWidth: o,
            className: c = "",
            children: d,
            iconNode: u,
            ...h
          } = e;
          return (0, s.createElement)(
            "svg",
            {
              ref: t,
              ...n,
              width: a,
              height: a,
              stroke: r,
              strokeWidth: o ? (24 * Number(l)) / Number(a) : l,
              className: i("lucide", c),
              ...(!d &&
                !((e) => {
                  for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t)
                      return !0;
                })(h) && { "aria-hidden": "true" }),
              ...h,
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
        o = (e, t) => {
          let r = (0, s.forwardRef)((r, n) => {
            let { className: o, ...c } = r;
            return (0, s.createElement)(l, {
              ref: n,
              iconNode: t,
              className: i(
                "lucide-".concat(
                  a(e)
                    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                    .toLowerCase()
                ),
                "lucide-".concat(e),
                o
              ),
              ...c,
            });
          });
          return (r.displayName = a(e)), r;
        };
    },
  },
  (e) => {
    e.O(0, [4133, 755, 4520, 4314, 4297, 7358], () => e((e.s = 18835))),
      (_N_E = e.O());
  },
]);
