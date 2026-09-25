"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4520],
  {
    56749: (e, t, n) => {
      n.d(t, { Slider: () => a });
      var l = n(72133),
        r = n(50625),
        s = n(91109);
      function a(e) {
        let {
            label: t,
            value: n,
            onChange: a,
            min: i,
            max: c,
            step: d = 1,
            ticks: o,
            format: u,
            className: m,
            hideLabel: x,
            knob: h = "fg",
          } = e,
          f = (0, r.useId)(),
          p = c > i ? ((n - i) / (c - i)) * 100 : 0,
          g = u ? u(n) : String(n);
        return (0, l.jsxs)("div", {
          className: (0, s.cn)("w-full", m),
          children: [
            (0, l.jsxs)("div", {
              className: (0, s.cn)(
                "mb-2 flex items-center justify-between",
                x && "sr-only"
              ),
              children: [
                (0, l.jsx)("label", {
                  htmlFor: f,
                  className: "text-xs text-muted",
                  children: t,
                }),
                (0, l.jsx)("output", {
                  htmlFor: f,
                  className: "font-mono text-xs text-fg tnum",
                  children: g,
                }),
              ],
            }),
            (0, l.jsx)("input", {
              id: f,
              type: "range",
              className: "talis-range",
              "data-knob": h,
              min: i,
              max: c,
              step: d,
              value: n,
              "aria-valuetext": g,
              onChange: (e) => a(Number(e.target.value)),
              style: { "--fill": "".concat(p, "%") },
              list: o ? "".concat(f, "-ticks") : void 0,
            }),
            o
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)("datalist", {
                      id: "".concat(f, "-ticks"),
                      children: o.map((e) =>
                        (0, l.jsx)(
                          "option",
                          { value: e.value, label: e.label },
                          e.value
                        )
                      ),
                    }),
                    (0, l.jsx)("div", {
                      className: "relative mt-0.5 h-6",
                      "aria-hidden": "true",
                      children: o.map((e) => {
                        let t = c > i ? ((e.value - i) / (c - i)) * 100 : 0,
                          r = e.value === n;
                        return (0, l.jsxs)(
                          "span",
                          {
                            className: (0, s.cn)(
                              "absolute top-0 flex flex-col items-center gap-1 font-mono tnum",
                              r
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
                              (0, l.jsx)("span", {
                                className: (0, s.cn)(
                                  "block size-1 rounded-full",
                                  r ? "bg-accent" : "bg-rule"
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
    84520: (e, t, n) => {
      n.d(t, {
        Ex: () => C,
        $k: () => P,
        nO: () => U,
        $n: () => u,
        Zp: () => p,
        aR: () => g,
        tQ: () => v,
        yY: () => Q,
        K0: () => x,
        Av: () => X,
        eN: () => b,
        Ap: () => Z.Slider,
        CH: () => W,
        l7: () => A,
        jP: () => _,
        md: () => S,
        vc: () => E,
        TD: () => I,
        TH: () => R,
        D1: () => D,
        TR: () => F,
        XI: () => B,
        xz: () => H,
        Sc: () => k,
        El: () => o,
      });
      var l = n(72133),
        r = n(64133),
        s = n.n(r),
        a = n(50625),
        i = n(91109);
      let c = {
          primary: "bg-primary text-on-primary hover:bg-primary-hover",
          secondary:
            "border border-rule bg-transparent text-fg hover:border-fg hover:bg-raised",
          upside: "bg-upside-fill text-on-accent hover:bg-accent-soft",
          income: "bg-income-fill text-ivory hover:bg-forest-deep",
          ghost: "bg-transparent text-muted hover:text-fg hover:bg-raised",
        },
        d = {
          sm: "h-8 px-3.5 text-xs",
          md: "h-10 px-5 text-sm",
          lg: "h-12 px-7 text-[15px]",
        };
      function o() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "primary",
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "md",
          n = arguments.length > 2 ? arguments[2] : void 0;
        return (0, i.cn)(
          "inline-flex items-center justify-center gap-2 rounded-pill font-medium whitespace-nowrap select-none transition-[background-color,border-color,box-shadow,transform,color] duration-150 ease-out-soft disabled:opacity-40 disabled:pointer-events-none active:translate-y-px",
          c[e],
          d[t],
          n
        );
      }
      let u = (0, a.forwardRef)(function (e, t) {
          let {
              variant: n = "primary",
              size: r = "md",
              className: a,
              href: i,
              icon: c,
              iconRight: d,
              children: u,
              type: m = "button",
              ...x
            } = e,
            h = o(n, r, a);
          return i
            ? (0, l.jsxs)(s(), {
                href: i,
                className: h,
                "aria-disabled": x.disabled || void 0,
                children: [c, u, d],
              })
            : (0, l.jsxs)("button", {
                ref: t,
                type: m,
                className: h,
                ...x,
                children: [c, u, d],
              });
        }),
        m =
          "inline-flex size-9 items-center justify-center rounded-full border border-rule bg-panel text-muted transition-colors hover:border-fg hover:text-fg";
      function x(e) {
        let { className: t, children: n, href: r, ...a } = e;
        if (r) {
          let { "aria-label": e, title: c } = a;
          return (0, l.jsx)(s(), {
            href: r,
            "aria-label": e,
            title: c,
            className: (0, i.cn)(m, t),
            children: n,
          });
        }
        return (0, l.jsx)("button", {
          type: "button",
          className: (0, i.cn)(m, t),
          ...a,
          children: n,
        });
      }
      let h = {
          default: "card-highlight",
          panel: "rounded-card border border-line bg-panel",
          upside: "rounded-card glass-upside",
          income: "rounded-card glass-income",
        },
        f = { none: "", sm: "p-4", md: "p-5 md:p-6", lg: "p-6 md:p-8" };
      function p(e) {
        let {
          tone: t = "default",
          padding: n = "md",
          as: r = "div",
          className: s,
          children: a,
          ...c
        } = e;
        return (0, l.jsx)(r, {
          className: (0, i.cn)(h[t], f[n], s),
          ...c,
          children: a,
        });
      }
      function g(e) {
        let { title: t, aside: n, className: r } = e;
        return (0, l.jsxs)("div", {
          className: (0, i.cn)(
            "mb-4 flex items-center justify-between gap-3",
            r
          ),
          children: [
            (0, l.jsx)("h3", {
              className: "text-sm font-semibold text-fg",
              children: t,
            }),
            n,
          ],
        });
      }
      function b(e) {
        let { className: t, children: n, ...r } = e;
        return (0, l.jsx)("p", {
          className: (0, i.cn)("label-caps", t),
          ...r,
          children: n,
        });
      }
      function v(e) {
        let { as: t = "h2", size: n = "lg", className: r, children: s } = e;
        return (0, l.jsx)(t, {
          className: (0, i.cn)(
            "display text-fg",
            {
              xl: "text-display-xl",
              lg: "text-display-lg",
              md: "text-display-md",
            }[n],
            r
          ),
          children: s,
        });
      }
      var j = n(40453);
      let N = {
          black: "/brand/wordmark-black.png",
          white: "/brand/wordmark-white.png",
        },
        y = { x: 163 / 900, y: 0.28, w: 574 / 900, h: 0.44 };
      function w(e) {
        let { tone: t, height: n, className: r } = e,
          s = n / y.h,
          a = 3 * s;
        return (0, l.jsx)("span", {
          className: (0, i.cn)(
            "relative inline-block shrink-0 overflow-hidden",
            r
          ),
          style: { width: Math.round(a * y.w), height: n },
          children: (0, l.jsx)(j.default, {
            src: N[t],
            alt: "Talis",
            width: 900,
            height: 300,
            priority: !0,
            className: "absolute max-w-none",
            style: { width: a, height: s, left: -a * y.x, top: -s * y.y },
          }),
        });
      }
      function k(e) {
        let {
            href: t = "/",
            className: n,
            size: r = "md",
            tone: a = "auto",
          } = e,
          c = { sm: 18, md: 22, lg: 30 }[r],
          d =
            "auto" === a
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(w, {
                      tone: "black",
                      height: c,
                      className: (0, i.cn)("only-light", n),
                    }),
                    (0, l.jsx)(w, {
                      tone: "white",
                      height: c,
                      className: (0, i.cn)("only-dark", n),
                    }),
                  ],
                })
              : (0, l.jsx)(w, { tone: a, height: c, className: n });
        return t
          ? (0, l.jsx)(s(), {
              href: t,
              "aria-label": "Talis home",
              className: "inline-flex items-center rounded-md",
              children: d,
            })
          : (0, l.jsx)("span", {
              className: "inline-flex items-center",
              children: d,
            });
      }
      let L = {
        neutral: "border-rule text-muted",
        upside: "border-upside-fill/70 text-upside",
        income: "border-income-fill/60 text-income",
        success: "border-success/50 text-success",
        warning: "border-warning/50 text-warning",
        danger: "border-danger/50 text-danger",
      };
      function C(e) {
        let { tone: t = "neutral", className: n, children: r, ...s } = e;
        return (0, l.jsx)("span", {
          className: (0, i.cn)(
            "inline-flex h-6 items-center gap-1.5 rounded-pill border bg-panel px-2.5 text-[11px] font-medium tracking-wide",
            L[t],
            n
          ),
          ...s,
          children: r,
        });
      }
      let z = {
          active: "bg-accent",
          created: "border border-muted bg-transparent",
          bidding: "bg-accent",
          sold: "bg-income-fill",
          crossed: "bg-income-fill",
          registered: "bg-income-fill",
          settled: "bg-income-fill",
          candidate: "bg-muted",
          "pool-depth": "bg-muted",
          feed: "bg-muted",
          scheduled: "border border-accent bg-transparent",
          paused: "bg-muted",
          "live-token": "bg-muted",
          nosale: "bg-muted",
          unscheduled: "bg-muted",
        },
        M = {
          active: "Active",
          created: "Created",
          bidding: "Bidding",
          crossed: "Crossed",
          sold: "Sold",
          registered: "Registered",
          candidate: "Candidate",
          "pool-depth": "Pool depth",
          feed: "Chainlink feed",
          "live-token": "Live token",
          scheduled: "Scheduled",
          paused: "Paused",
          settled: "Settled",
          nosale: "No sale",
          unscheduled: "Unscheduled",
        };
      function S(e) {
        let { status: t, label: n, className: r } = e;
        return (0, l.jsxs)("span", {
          className: (0, i.cn)(
            "inline-flex items-center gap-2 text-xs text-fg",
            r
          ),
          children: [
            (0, l.jsx)("span", {
              "aria-hidden": "true",
              className: (0, i.cn)("inline-block size-1.5 rounded-full", z[t]),
            }),
            null != n ? n : M[t],
          ],
        });
      }
      let T = {
        default: "text-fg",
        income: "text-income",
        upside: "text-upside",
        success: "text-success",
        muted: "text-muted",
      };
      function _(e) {
        let {
          label: t,
          value: n,
          hint: r,
          tone: s = "default",
          stack: a = !1,
          className: c,
        } = e;
        return (0, l.jsxs)("div", {
          className: (0, i.cn)(
            "flex items-baseline justify-between gap-4 py-2.5",
            c
          ),
          children: [
            (0, l.jsx)("dt", { className: "text-xs text-muted", children: t }),
            (0, l.jsxs)("dd", {
              className: (0, i.cn)("text-right font-mono text-sm tnum", T[s]),
              children: [
                n,
                r
                  ? (0, l.jsx)("span", {
                      className: (0, i.cn)(
                        "text-[11px] text-muted",
                        a ? "block" : "ml-1.5"
                      ),
                      children: r,
                    })
                  : null,
              ],
            }),
          ],
        });
      }
      function A(e) {
        let { className: t, children: n } = e;
        return (0, l.jsx)("dl", {
          className: (0, i.cn)("hairline-rows", t),
          children: n,
        });
      }
      function P(e) {
        let {
          label: t,
          value: n,
          sub: r,
          tone: s = "default",
          className: a,
        } = e;
        return (0, l.jsxs)("div", {
          className: (0, i.cn)("flex flex-col gap-1", a),
          children: [
            (0, l.jsx)("span", { className: "label-caps", children: t }),
            (0, l.jsx)("span", {
              className: (0, i.cn)("font-mono text-2xl tnum md:text-3xl", T[s]),
              children: n,
            }),
            r
              ? (0, l.jsx)("span", {
                  className: "text-xs text-muted",
                  children: r,
                })
              : null,
          ],
        });
      }
      function B(e) {
        let { className: t, children: n, fade: r = !0, ...s } = e;
        return (0, l.jsx)("div", {
          className: (0, i.cn)(
            "relative -mx-4 overflow-x-auto px-4 [contain:inline-size] md:mx-0 md:px-0",
            r &&
              "[mask-image:linear-gradient(to_right,black_calc(100%_-_32px),transparent)] md:[mask-image:none]"
          ),
          children: (0, l.jsx)("table", {
            className: (0, i.cn)(
              "w-full min-w-[480px] border-collapse text-sm",
              t
            ),
            ...s,
            children: n,
          }),
        });
      }
      function D(e) {
        let { children: t } = e;
        return (0, l.jsx)("thead", {
          className: "border-b border-line",
          children: t,
        });
      }
      function E(e) {
        let { children: t } = e;
        return (0, l.jsx)("tbody", {
          className:
            "[&>tr]:border-b [&>tr]:border-line [&>tr:last-child]:border-b-0",
          children: t,
        });
      }
      function F(e) {
        let { className: t, interactive: n, ...r } = e;
        return (0, l.jsx)("tr", {
          className: (0, i.cn)(
            n && "cursor-pointer transition-colors hover:bg-raised",
            t
          ),
          ...r,
        });
      }
      function R(e) {
        let { className: t, align: n = "left", ...r } = e;
        return (0, l.jsx)("th", {
          scope: "col",
          className: (0, i.cn)(
            "label-caps py-2.5 pr-4 text-left font-medium normal-case tracking-normal text-[12px] text-muted first:pl-0 last:pr-0",
            "right" === n && "text-right",
            t
          ),
          ...r,
        });
      }
      function I(e) {
        let { className: t, align: n = "left", mono: r, ...s } = e;
        return (0, l.jsx)("td", {
          className: (0, i.cn)(
            "py-3 pr-4 align-middle text-fg first:pl-0 last:pr-0",
            "right" === n && "text-right",
            r && "font-mono tnum",
            t
          ),
          ...s,
        });
      }
      var Z = n(56749);
      function $(e) {
        let { className: t } = e;
        return (0, l.jsx)("svg", {
          viewBox: "0 0 24 24",
          className: t,
          fill: "currentColor",
          "aria-hidden": "true",
          children: (0, l.jsx)("path", {
            d: "M16.7 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.8-.9-3-.8-1.6 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.8 3-.8s1.8.8 3 .7c1.3 0 2-1.1 2.8-2.3.9-1.3 1.2-2.6 1.3-2.6-.1 0-2.5-.9-2.5-3.7zM14.4 5.8c.6-.8 1.1-1.9.9-3-.9 0-2.1.6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1.1.1 2.1-.5 2.8-1.3z",
          }),
        });
      }
      function H(e) {
        let {
            ticker: t,
            size: n = 28,
            className: r,
            alt: s,
            tone: a = "forest",
          } = e,
          c = t.toUpperCase(),
          d = void 0 === s ? "".concat(c, " Stock Token") : s,
          o =
            "AAPL" === c
              ? (0, l.jsx)($, { className: "size-[62%]" })
              : (0, l.jsx)("span", {
                  className: "font-mono text-[0.38em] font-medium leading-none",
                  children: c.slice(0, 2),
                });
        return (0, l.jsx)("span", {
          role: d ? "img" : void 0,
          "aria-label": d || void 0,
          "aria-hidden": !d || void 0,
          className: (0, i.cn)(
            "inline-flex shrink-0 items-center justify-center rounded-full border",
            "forest" === a
              ? "border-forest-deep bg-forest text-ivory"
              : "border-line bg-raised text-fg",
            r
          ),
          style: { width: n, height: n, fontSize: n },
          children: o,
        });
      }
      function Q(e) {
        let {
            progress: t,
            size: n = 28,
            stroke: r = 2,
            className: s,
            label: a,
            children: c,
          } = e,
          d = (n - r) / 2,
          o = 2 * Math.PI * d,
          u = Math.min(Math.max(t, 0), 1);
        return (0, l.jsxs)("span", {
          className: (0, i.cn)(
            "relative inline-flex items-center justify-center",
            s
          ),
          style: { width: n, height: n },
          children: [
            (0, l.jsxs)("svg", {
              width: n,
              height: n,
              viewBox: "0 0 ".concat(n, " ").concat(n),
              role: "img",
              "aria-label":
                null != a
                  ? a
                  : "".concat(Math.round(100 * u), "% of epoch elapsed"),
              children: [
                (0, l.jsx)("circle", {
                  cx: n / 2,
                  cy: n / 2,
                  r: d,
                  fill: "none",
                  stroke: "var(--color-rule)",
                  strokeWidth: r,
                }),
                (0, l.jsx)("circle", {
                  cx: n / 2,
                  cy: n / 2,
                  r: d,
                  fill: "none",
                  stroke: "var(--color-accent)",
                  strokeWidth: r,
                  strokeLinecap: "round",
                  strokeDasharray: o,
                  strokeDashoffset: o * (1 - u),
                  transform: "rotate(-90 "
                    .concat(n / 2, " ")
                    .concat(n / 2, ")"),
                }),
              ],
            }),
            c
              ? (0, l.jsx)("span", {
                  className:
                    "absolute inset-0 flex items-center justify-center",
                  children: c,
                })
              : null,
          ],
        });
      }
      function U(e) {
        let {
          variant: t = "coin",
          size: n = 96,
          className: r,
          alt: s,
          priority: a,
          sizes: c,
        } = e;
        if ("hero" === t) {
          let e =
            void 0 === s
              ? "The Talis coin: a forest-green disc with the split mark and a lime ring, standing on a travertine block"
              : s;
          return (0, l.jsx)(j.default, {
            src: "/brand/hero-ivory-token.webp",
            alt: e,
            width: 1920,
            height: 1080,
            priority: a,
            sizes: null != c ? c : "(min-width: 768px) 50vw, 100vw",
            className: (0, i.cn)("h-auto w-full", r),
          });
        }
        let d = void 0 === s ? "Talis coin" : s;
        return (0, l.jsx)(j.default, {
          src: "/brand/coin-green.webp",
          alt: d,
          width: 1e3,
          height: 1e3,
          priority: a,
          sizes: "".concat(n, "px"),
          className: (0, i.cn)("shrink-0 rounded-full", r),
          style: { width: n, height: n },
        });
      }
      function W(e) {
        let {
            size: t = 20,
            tone: n = "mono",
            wedge: r = "var(--color-upside-fill)",
            block: s = "var(--color-income-fill)",
            className: a,
            label: c,
          } = e,
          d = Math.round((661 * t) / 925);
        return (0, l.jsxs)("svg", {
          viewBox: "0 0 925 661",
          width: t,
          height: d,
          className: (0, i.cn)("inline-block shrink-0 align-middle", a),
          role: c ? "img" : void 0,
          "aria-label": c,
          "aria-hidden": !c || void 0,
          children: [
            (0, l.jsx)("path", {
              d: "M310 660 L702 1 L703 0 L924 0 L925 1 L925 660 L924 661 L310 661 Z",
              fill: "split" === n ? s : "currentColor",
            }),
            (0, l.jsx)("path", {
              d: "M0 660 L228 285 L230 283 L533 186 L534 186 L254 659 L252 661 L0 661 Z",
              fill: "split" === n ? r : "currentColor",
            }),
          ],
        });
      }
      function X(e) {
        let { title: t, subtitle: n, actions: r, className: s } = e;
        return (0, l.jsxs)("div", {
          className: (0, i.cn)(
            "mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between",
            s
          ),
          children: [
            (0, l.jsxs)("div", {
              children: [
                (0, l.jsx)("h1", {
                  className:
                    "font-display text-2xl font-semibold tracking-display text-fg md:text-3xl",
                  children: t,
                }),
                n
                  ? (0, l.jsx)("p", {
                      className: "mt-1 text-sm text-muted",
                      children: n,
                    })
                  : null,
              ],
            }),
            r
              ? (0, l.jsx)("div", {
                  className: "flex shrink-0 items-center gap-2",
                  children: r,
                })
              : null,
          ],
        });
      }
    },
    91109: (e, t, n) => {
      n.d(t, { cn: () => s });
      var l = n(97418),
        r = n(61295);
      function s() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, r.QP)((0, l.$)(t));
      }
    },
  },
]);
