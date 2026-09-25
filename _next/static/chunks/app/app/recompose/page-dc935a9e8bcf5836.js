(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6638],
  {
    6851: (e, t, n) => {
      "use strict";
      n.d(t, { RecomposeView: () => M });
      var a = n(72133),
        s = n(50625),
        i = n(40453),
        o = n(64133),
        l = n.n(o),
        r = n(12214),
        c = n(72555),
        d = n(84520),
        u = n(20833),
        m = n(97827),
        p = n(83899),
        x = n(36811),
        h = n(53063),
        f = n(91109);
      let g = [
        {
          title: "Every state",
          body: "Before the auction, during it, after settlement, in a series that never opened. The protocol has no pause switch.",
        },
        {
          title: "No fee",
          body: "Merge pays n Stock Tokens for n Income + n Upside. The auction fee applies to auction proceeds only.",
        },
        {
          title: "Nothing in the path",
          body: "No oracle read, no USDG, no calendar, no guardian, no Safe. Only the position tokens' own burn authority.",
        },
        {
          title: "Blocked only by the collateral",
          body: "If the issuer pauses the Stock Token, transfer reverts atomically and merge can be repeated once lifted.",
        },
      ];
      function b(e) {
        let { className: t } = e;
        return (0, a.jsxs)(d.Zp, {
          as: "section",
          "aria-labelledby": "invariant-heading",
          className: (0, f.cn)(t),
          children: [
            (0, a.jsx)("p", {
              className: "label-caps",
              children: "The merge invariant",
            }),
            (0, a.jsxs)("h2", {
              id: "invariant-heading",
              className:
                "display mt-2 flex items-center gap-3 text-display-md text-fg",
              children: [
                (0, a.jsx)(d.CH, { size: 22, tone: "split" }),
                (0, a.jsxs)("span", {
                  children: ["Merge ", h.Bu, " back into the underlying."],
                }),
              ],
            }),
            (0, a.jsxs)("p", {
              className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
              children: [
                "For every series and every state, a holder of ",
                (0, a.jsx)("span", {
                  className: "font-mono text-fg",
                  children: "n",
                }),
                " Income and",
                " ",
                (0, a.jsx)("span", {
                  className: "font-mono text-fg",
                  children: "n",
                }),
                " Upside of that series can merge them and receive",
                " ",
                (0, a.jsx)("span", {
                  className: "font-mono text-fg",
                  children: "n",
                }),
                " Stock Tokens. This is what bounds the pair to the Stock Token on chain: if Income + Upside trades below one unit, anyone buys both and merges; if above, anyone splits and sells.",
              ],
            }),
            (0, a.jsx)("dl", {
              className: "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
              children: g.map((e) =>
                (0, a.jsxs)(
                  "div",
                  {
                    className: "rounded-card border border-line bg-panel p-4",
                    children: [
                      (0, a.jsx)("dt", {
                        className: "text-xs font-medium text-fg",
                        children: e.title,
                      }),
                      (0, a.jsx)("dd", {
                        className: "mt-1.5 text-xs leading-relaxed text-muted",
                        children: e.body,
                      }),
                    ],
                  },
                  e.title
                )
              ),
            }),
            (0, a.jsxs)("p", {
              className: "mt-4 text-[11px] text-muted",
              children: [
                "Degrades only if the issuer physically removed collateral (an issuer ",
                (0, a.jsx)("span", {
                  className: "font-mono",
                  children: "adminBurn",
                }),
                "): merge then pays pro rata from what the vault holds, and the shortfall is shared by every remaining pair.",
              ],
            }),
          ],
        });
      }
      var v = n(14141),
        y = n(29142),
        j = n(81122),
        N = n(36901),
        w = n(26511),
        k = n(93628);
      function S(e) {
        var t, n, i, o, l, r, m, p, g;
        let { rows: b, selectedId: S, onSelect: C, tx: T, onMerged: E } = e,
          I = (0, s.useId)(),
          P = (0, s.useId)(),
          U = (0, N.vT)(),
          M = null != (l = b.find((e) => e.position.seriesId === S)) ? l : b[0],
          [B, _] = (0, s.useState)("");
        (0, s.useEffect)(
          () => _(""),
          [null == M ? void 0 : M.position.seriesId]
        );
        let z = null != (r = null == M ? void 0 : M.mergeableWei) ? r : 0n,
          A = (0, j.C_)(B, j.Bs.position),
          W = "" !== B.trim() && null === A,
          H = null !== A && A > z,
          R = !!M && null !== A && A > 0n && !H,
          O = T.tx.busy,
          Q = null !== A ? (0, j.Ro)(A, j.Bs.position) : 0,
          D = (0, s.useMemo)(() => (M ? Q * M.price : 0), [M, Q]),
          F = y.KO && !U.isConnected,
          K = y.KO && U.isConnected && !U.onChain,
          q = M
            ? null != (m = null == (t = M.exact) ? void 0 : t.one)
              ? m
              : (0, u.fq)(M.position.oneUnits)
            : 0n,
          Z = M
            ? null != (p = null == (n = M.exact) ? void 0 : n.convex)
              ? p
              : (0, u.fq)(M.position.convexUnits)
            : 0n,
          $ = async () => {
            M &&
              R &&
              null !== A &&
              "failed" !==
                (await T.send({
                  kind: "merge",
                  series: M.position.seriesId,
                  units: A,
                })) &&
              (null == E || E(Q));
          },
          V = async (e) => {
            e.preventDefault(), await $();
          };
        return (0, a.jsxs)(d.Zp, {
          as: "section",
          "aria-labelledby": "merge-heading",
          children: [
            (0, a.jsx)(d.aR, {
              title: (0, a.jsx)("span", {
                id: "merge-heading",
                children: "Merge",
              }),
              aside: (0, a.jsx)("span", {
                className: "text-[11px] text-muted",
                children: "No fee \xb7 any series state",
              }),
            }),
            0 === b.length
              ? (0, a.jsxs)("p", {
                  className: "text-sm text-muted",
                  children: [
                    "No positions to merge. Hold ",
                    h._b,
                    " and ",
                    h.TE,
                    " of the same series to recompose the Stock Token.",
                  ],
                })
              : (0, a.jsxs)("form", {
                  onSubmit: V,
                  className: "space-y-5",
                  noValidate: !0,
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("label", {
                          htmlFor: I,
                          className: "mb-1.5 block text-xs text-muted",
                          children: "Series",
                        }),
                        (0, a.jsxs)("div", {
                          className: "relative",
                          children: [
                            M
                              ? (0, a.jsx)(d.xz, {
                                  ticker: M.ticker,
                                  size: 20,
                                  alt: "",
                                  className:
                                    "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2",
                                })
                              : null,
                            (0, a.jsx)("select", {
                              id: I,
                              value:
                                null !=
                                (g = null == M ? void 0 : M.position.seriesId)
                                  ? g
                                  : "",
                              onChange: (e) => C(e.target.value),
                              className:
                                "h-11 w-full appearance-none rounded-pill border border-rule bg-panel pl-10 pr-9 font-mono text-sm text-fg tnum focus:border-income focus:outline-none",
                              children: b.map((e) =>
                                (0, a.jsxs)(
                                  "option",
                                  {
                                    value: e.position.seriesId,
                                    children: [
                                      e.ticker,
                                      " \xb7 Epoch ",
                                      (0, x.iI)(e.epoch),
                                      " \xb7 Cap ",
                                      (0, x.Nd)(e.capBps),
                                      e.settled ? " \xb7 settled" : "",
                                      e.mergeableWei > 0n
                                        ? ""
                                        : " \xb7 no pairs",
                                    ],
                                  },
                                  e.position.seriesId
                                )
                              ),
                            }),
                            (0, a.jsx)("svg", {
                              "aria-hidden": "true",
                              viewBox: "0 0 16 16",
                              className:
                                "pointer-events-none absolute right-3.5 top-1/2 size-3.5 -translate-y-1/2 text-muted",
                              children: (0, a.jsx)("path", {
                                d: "M4 6l4 4 4-4",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    M
                      ? (0, a.jsxs)("div", {
                          className: "grid grid-cols-2 gap-3",
                          children: [
                            (0, a.jsx)(L, {
                              name: h._b,
                              symbol: M.incomeSymbol,
                              units: (0, u.H1)(q, 6),
                              tone: "income",
                            }),
                            (0, a.jsx)(L, {
                              name: h.TE,
                              symbol: M.upsideSymbol,
                              units: (0, u.H1)(Z, 6),
                              tone: "upside",
                            }),
                          ],
                        })
                      : null,
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsxs)("div", {
                          className: "mb-1.5 flex items-center justify-between",
                          children: [
                            (0, a.jsx)("label", {
                              htmlFor: P,
                              className: "text-xs text-muted",
                              children: "Pairs to merge",
                            }),
                            (0, a.jsxs)("span", {
                              className: "text-[11px] text-muted",
                              children: [
                                "Mergeable ",
                                (0, a.jsx)("span", {
                                  className: "font-mono tnum text-fg",
                                  children: (0, u.H1)(z, 6),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, a.jsx)("input", {
                              id: P,
                              type: "text",
                              inputMode: "decimal",
                              autoComplete: "off",
                              placeholder: "0.0000",
                              value: B,
                              onChange: (e) => _(e.target.value),
                              "aria-invalid": H || W || void 0,
                              "aria-describedby": "".concat(P, "-hint"),
                              disabled: z <= 0n || O,
                              className: (0, f.cn)(
                                "h-12 w-full rounded-pill border bg-panel pl-4 pr-24 font-mono text-lg text-fg tnum placeholder:text-dim focus:outline-none disabled:opacity-50",
                                H || W
                                  ? "border-danger"
                                  : "border-rule focus:border-income"
                              ),
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1.5",
                              children: [
                                (0, a.jsx)("span", {
                                  className: "text-xs text-muted",
                                  children: "pairs",
                                }),
                                (0, a.jsx)("button", {
                                  type: "button",
                                  onClick: () =>
                                    _(
                                      z > 0n ? (0, j.WZ)(z, j.Bs.position) : ""
                                    ),
                                  disabled: z <= 0n || O,
                                  className:
                                    "h-7 rounded-pill border border-rule px-2.5 text-[11px] text-muted transition-colors hover:border-income hover:text-fg disabled:opacity-40",
                                  children: "Max",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)("p", {
                          id: "".concat(P, "-hint"),
                          className: (0, f.cn)(
                            "mt-1.5 text-[11px]",
                            H || W ? "text-danger" : "text-muted"
                          ),
                          children: W
                            ? "Up to 18 decimals."
                            : H
                            ? "You hold ".concat(
                                (0, u.H1)(z, 6),
                                " pairs of this series."
                              )
                            : z <= 0n
                            ? "This series has no complete pairs: merge needs an equal number of "
                                .concat(h._b, " and ")
                                .concat(h.TE, ".")
                            : "1 "
                                .concat(h._b, " + 1 ")
                                .concat(
                                  h.TE,
                                  " of the same series burn together and return 1 Stock Token."
                                ),
                        }),
                      ],
                    }),
                    (0, a.jsxs)(d.l7, {
                      children: [
                        (0, a.jsx)(d.jP, {
                          label: "You receive",
                          value:
                            M && null !== A && A > 0n
                              ? "".concat((0, u.H1)(A, 6), " ").concat(M.ticker)
                              : "—",
                          hint: Q > 0 ? "≈ ".concat((0, x.dR)(D)) : void 0,
                        }),
                        (0, a.jsx)(d.jP, {
                          label: "Fee",
                          value: "0",
                          hint: "merge charges none",
                          tone: "success",
                        }),
                        (0, a.jsx)(d.jP, {
                          label: "Availability",
                          value: "Every state",
                          hint: "no pause switch in the protocol",
                        }),
                        (0, a.jsx)(d.jP, {
                          label: "Burns",
                          value:
                            M && null !== A && A > 0n
                              ? ""
                                  .concat((0, u.H1)(A, 6), " ")
                                  .concat(h._b, " + ")
                                  .concat((0, u.H1)(A, 6), " ")
                                  .concat(h.TE)
                              : "—",
                        }),
                      ],
                    }),
                    F
                      ? (0, a.jsx)(d.$n, {
                          type: "button",
                          size: "lg",
                          className: "w-full",
                          disabled: U.connecting,
                          onClick: U.connect,
                          children: U.connecting
                            ? "Connecting…"
                            : "Connect wallet",
                        })
                      : K
                      ? (0, a.jsx)(d.$n, {
                          type: "button",
                          size: "lg",
                          className: "w-full",
                          disabled: U.switching,
                          onClick: U.switchToActive,
                          children: U.switching
                            ? "Switching…"
                            : "Switch to ".concat(w.UL.name),
                        })
                      : (0, a.jsx)(d.$n, {
                          type: "submit",
                          size: "lg",
                          className: "w-full",
                          disabled: !R || O,
                          icon: (0, a.jsx)(v.A, {
                            className: "size-4",
                            "aria-hidden": "true",
                          }),
                          iconRight: (0, a.jsx)(c.A, {
                            className: "size-4",
                            "aria-hidden": "true",
                          }),
                          children:
                            O &&
                            (null == (i = T.active) ? void 0 : i.kind) ===
                              "merge"
                              ? "Merging…"
                              : M
                              ? "Merge into ".concat(M.ticker)
                              : "Merge",
                        }),
                    (null == (o = T.active) ? void 0 : o.kind) === "merge" ||
                    T.localError
                      ? (0, a.jsx)(k.t, {
                          tx: T,
                          previewNote: "the animation shows what merge does",
                          onRetry: R ? () => void $() : void 0,
                        })
                      : null,
                  ],
                }),
          ],
        });
      }
      function L(e) {
        let { name: t, symbol: n, units: s, tone: i } = e,
          o = "upside" === i;
        return (0, a.jsxs)("div", {
          className: (0, f.cn)(
            "rounded-card p-3.5",
            o ? "glass-upside" : "glass-income"
          ),
          children: [
            (0, a.jsxs)("p", {
              className: "label-caps flex items-center gap-1.5 text-fg",
              children: [
                (0, a.jsx)(d.CH, {
                  size: 12,
                  tone: "split",
                  wedge: o ? void 0 : "transparent",
                  block: o ? "transparent" : void 0,
                }),
                t,
              ],
            }),
            (0, a.jsx)("p", {
              className: (0, f.cn)(
                "mt-1 font-mono text-xl tnum",
                o ? "text-upside" : "text-fg"
              ),
              children: s,
            }),
            (0, a.jsx)("p", {
              className: "mt-0.5 truncate font-mono text-[10px] text-muted",
              children: n,
            }),
          ],
        });
      }
      var C = n(23515),
        T = n(49719);
      let E =
          "M310 660 L702 1 L703 0 L924 0 L925 1 L925 660 L924 661 L310 661 Z",
        I = { x1: 282, y1: 661, x2: 562, y2: 186 };
      function P(e) {
        let { ticker: t, replayKey: n = 0, loop: i = !0, className: o } = e,
          l = (0, C.I)(),
          r = t.toUpperCase(),
          c = (0, s.useRef)(null),
          [d, u] = (0, s.useState)("apart"),
          [m, p] = (0, s.useState)(!0),
          [x, g] = (0, s.useState)(!0);
        (0, s.useEffect)(() => {
          let e = c.current;
          if (!e) return;
          let t = new IntersectionObserver(
            (e) => p(e.some((e) => e.isIntersecting)),
            { threshold: 0.1 }
          );
          t.observe(e);
          let n = () => g("visible" === document.visibilityState);
          return (
            n(),
            document.addEventListener("visibilitychange", n),
            () => {
              t.disconnect(),
                document.removeEventListener("visibilitychange", n);
            }
          );
        }, []),
          (0, s.useEffect)(() => {
            if (l) return void u("merged");
            u("apart");
            let e = window.setTimeout(() => u("merged"), 500);
            return () => window.clearTimeout(e);
          }, [n, l]),
          (0, s.useEffect)(() => {
            if (l || !i || !m || !x) return;
            let e = window.setTimeout(
              () => u("apart" === d ? "merged" : "apart"),
              "apart" === d ? 1500 : 2200
            );
            return () => window.clearTimeout(e);
          }, [d, i, l, m, x]);
        let b = "merged" === d,
          v = l
            ? { duration: 0 }
            : { type: "spring", stiffness: 110, damping: 18, mass: 0.9 },
          y = l ? { duration: 0 } : { duration: 0.35 },
          j = "merge-".concat(r);
        return (0, a.jsxs)("div", {
          ref: c,
          className: (0, f.cn)("relative mx-auto w-full max-w-[420px]", o),
          role: "img",
          "aria-label": "One "
            .concat(h._b, " position and one ")
            .concat(h.TE, " position of ")
            .concat(r, " merge into one ")
            .concat(r, " Stock Token"),
          "data-phase": d,
          children: [
            (0, a.jsx)("div", {
              "aria-hidden": "true",
              className:
                "absolute inset-x-[12%] inset-y-[6%] radial-glow opacity-40",
            }),
            (0, a.jsxs)("svg", {
              viewBox: "-200 -90 1325 990",
              className: "relative h-auto w-full overflow-visible",
              "aria-hidden": "true",
              children: [
                (0, a.jsx)("defs", {
                  children: (0, a.jsx)("filter", {
                    id: "".concat(j, "-blur"),
                    x: "-50%",
                    y: "-50%",
                    width: "200%",
                    height: "200%",
                    children: (0, a.jsx)("feGaussianBlur", {
                      stdDeviation: "10",
                    }),
                  }),
                }),
                (0, a.jsx)("line", {
                  x1: "-120",
                  y1: "661",
                  x2: "1045",
                  y2: "661",
                  className: "stroke-rule",
                  strokeWidth: 2,
                }),
                (0, a.jsxs)(T.P.g, {
                  initial: { x: 150 },
                  animate: { x: 150 * !b },
                  transition: v,
                  children: [
                    (0, a.jsx)("path", { d: E, className: "fill-income-fill" }),
                    (0, a.jsx)("path", {
                      d: E,
                      fill: "none",
                      className: "stroke-income",
                      strokeOpacity: 0.55,
                      strokeWidth: 4,
                      strokeLinejoin: "round",
                    }),
                    (0, a.jsx)(T.P.text, {
                      x: "617",
                      y: "760",
                      textAnchor: "middle",
                      fontFamily: "var(--font-mono)",
                      fontSize: "44",
                      letterSpacing: "6",
                      className: "fill-income",
                      initial: { opacity: 1, y: 0 },
                      animate: { opacity: +!b, y: 20 * !!b },
                      transition: y,
                      children: h._b,
                    }),
                  ],
                }),
                (0, a.jsxs)(T.P.g, {
                  initial: { x: -150 },
                  animate: { x: b ? 0 : -150 },
                  transition: v,
                  children: [
                    (0, a.jsx)("path", {
                      d: "M0 660 L228 285 L230 283 L533 186 L534 186 L254 659 L252 661 L0 661 Z",
                      className: "fill-upside-fill",
                    }),
                    (0, a.jsx)(T.P.text, {
                      x: "267",
                      y: "760",
                      textAnchor: "middle",
                      fontFamily: "var(--font-mono)",
                      fontSize: "44",
                      letterSpacing: "6",
                      className: "fill-upside",
                      initial: { opacity: 1, y: 0 },
                      animate: { opacity: +!b, y: 20 * !!b },
                      transition: y,
                      children: h.TE,
                    }),
                  ],
                }),
                (0, a.jsx)(T.P.text, {
                  x: "462",
                  y: "500",
                  textAnchor: "middle",
                  fontFamily: "var(--font-mono)",
                  fontSize: "72",
                  className: "fill-muted",
                  initial: { opacity: 1 },
                  animate: { opacity: +!b },
                  transition: y,
                  children: "+",
                }),
                (0, a.jsxs)(T.P.g, {
                  initial: { opacity: 0 },
                  animate: { opacity: b ? [0, 1, 0.5] : 0 },
                  transition: l
                    ? { duration: 0 }
                    : { duration: 1.1, times: [0, 0.35, 1] },
                  children: [
                    (0, a.jsx)("line", {
                      ...I,
                      className: "stroke-upside-fill",
                      strokeWidth: 22,
                      strokeLinecap: "round",
                      opacity: 0.6,
                      filter: "url(#".concat(j, "-blur)"),
                    }),
                    (0, a.jsx)("line", {
                      ...I,
                      className: "stroke-upside-fill",
                      strokeWidth: 5,
                      strokeLinecap: "round",
                    }),
                  ],
                }),
                (0, a.jsxs)(T.P.text, {
                  x: "462",
                  y: "765",
                  textAnchor: "middle",
                  fontFamily: "var(--font-mono)",
                  fontSize: "48",
                  letterSpacing: "6",
                  className: "fill-fg",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: +!!b, y: 20 * !b },
                  transition: l
                    ? { duration: 0 }
                    : { duration: 0.35, delay: 0.35 * !!b },
                  children: ["1 ", r],
                }),
              ],
            }),
          ],
        });
      }
      var U = n(32410);
      function M() {
        var e, t, n, o;
        let f = (0, r.useSearchParams)(),
          {
            rows: g,
            isPending: v,
            isError: y,
            error: j,
            wallet: N,
            needsWallet: w,
          } = (0, m.y)(),
          k = (0, p.ED)(),
          L = (0, s.useMemo)(
            () =>
              [...g].sort(
                (e, t) =>
                  Number(t.mergeableWei > 0n) - Number(e.mergeableWei > 0n)
              ),
            [g]
          ),
          [C, T] = (0, s.useState)(null != (e = f.get("series")) ? e : void 0);
        (0, s.useEffect)(() => {
          let e = f.get("series");
          e && T(e);
        }, [f]);
        let E =
            null !=
            (t = L.find(
              (e) =>
                e.position.seriesId.toLowerCase() ===
                (null == C ? void 0 : C.toLowerCase())
            ))
              ? t
              : L[0],
          [I, M] = (0, s.useState)(0),
          [B, _] = (0, s.useState)(null);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            k.bridge,
            (0, a.jsx)(d.Av, {
              title: "Recompose",
              subtitle: "Merge ".concat(h.Bu, " back into the underlying."),
              actions: (0, a.jsxs)(l(), {
                href: "/app/positions",
                className:
                  "inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-fg",
                children: [
                  "Positions ",
                  (0, a.jsx)(c.A, {
                    className: "size-3.5",
                    "aria-hidden": "true",
                  }),
                ],
              }),
            }),
            (0, a.jsxs)("div", {
              className: "grid gap-4 lg:grid-cols-[1.1fr_1fr]",
              children: [
                (0, a.jsxs)(d.Zp, {
                  padding: "lg",
                  className: "flex flex-col overflow-hidden",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-wrap items-center justify-between gap-2",
                      children: [
                        (0, a.jsxs)("p", {
                          className:
                            "label-caps inline-flex items-center gap-2",
                          children: [
                            (0, a.jsx)(d.CH, { size: 16, tone: "split" }),
                            h.Bu,
                            " → ",
                            null != (n = null == E ? void 0 : E.ticker)
                              ? n
                              : "Stock Token",
                          ],
                        }),
                        E
                          ? (0, a.jsxs)("p", {
                              className:
                                "font-mono text-[11px] text-muted tnum",
                              children: [
                                (0, u.H1)(E.mergeableWei),
                                " pairs held",
                              ],
                            })
                          : null,
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "mt-5 grid items-center gap-6 sm:grid-cols-[1fr_auto]",
                      children: [
                        (0, a.jsx)(P, {
                          ticker:
                            null != (o = null == E ? void 0 : E.ticker)
                              ? o
                              : "NVDA",
                          replayKey: I,
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "relative mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-card bg-ivory sm:w-48",
                          children: (0, a.jsx)(i.default, {
                            src: "/brand/fomo-paired-form.webp",
                            alt: "Two half rings, one forest green and one ivory, meeting at a lime seam to form one ring",
                            fill: !0,
                            sizes: "(min-width: 640px) 260px, 270px",
                            className: "scale-[1.35] object-cover",
                            style: { objectPosition: "center 62%" },
                          }),
                        }),
                      ],
                    }),
                    // (0, a.jsx)("h2", {
                    //   className: "display mt-6 text-display-md text-fg",
                    //   children: "Separate. Recombine.",
                    // }),
                    // (0, a.jsx)("p", {
                    //   className: "mt-2 text-sm text-muted",
                    //   "aria-live": "polite",
                    //   children:
                    //     null !== B && E
                    //       ? ""
                    //           .concat((0, x.bu)(B, 6), " ")
                    //           .concat(h._b, " + ")
                    //           .concat((0, x.bu)(B, 6), " ")
                    //           .concat(h.TE, " → ")
                    //           .concat((0, x.bu)(B, 6), " ")
                    //           .concat(E.ticker)
                    //       : "One "
                    //           .concat(h._b, " position plus one ")
                    //           .concat(
                    //             h.TE,
                    //             " position of the same series merge into one Stock Token at any time. No fee."
                    //           ),
                    // }),
                  ],
                }),
                w
                  ? (0, a.jsxs)(d.Zp, {
                      className: "flex flex-col items-start gap-3",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "text-sm font-medium text-fg",
                          children: "Connect a wallet",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-sm text-muted",
                          children:
                            "Balances are read per address; merge burns from the connected one.",
                        }),
                        (0, a.jsx)(d.$n, {
                          size: "sm",
                          onClick: N.connect,
                          disabled: N.connecting,
                          children: N.connecting
                            ? "Connecting…"
                            : "Connect wallet",
                        }),
                      ],
                    })
                  : v
                  ? (0, a.jsx)(d.Zp, {
                      role: "status",
                      className: "text-sm text-muted",
                      children: "Loading balances…",
                    })
                  : y
                  ? (0, a.jsxs)(d.Zp, {
                      role: "alert",
                      className: "text-sm text-danger",
                      children: ["Balances could not be loaded. ", (0, U.U)(j)],
                    })
                  : (0, a.jsx)(S, {
                      rows: L,
                      selectedId: null == E ? void 0 : E.position.seriesId,
                      onSelect: T,
                      tx: k,
                      onMerged: (e) => {
                        _(e), M((e) => e + 1);
                      },
                    }),
              ],
            }),
            (0, a.jsx)(b, { className: "mt-4" }),
          ],
        });
      }
    },
    12214: (e, t, n) => {
      "use strict";
      var a = n(67178);
      n.o(a, "usePathname") &&
        n.d(t, {
          usePathname: function () {
            return a.usePathname;
          },
        }),
        n.o(a, "useRouter") &&
          n.d(t, {
            useRouter: function () {
              return a.useRouter;
            },
          }),
        n.o(a, "useSearchParams") &&
          n.d(t, {
            useSearchParams: function () {
              return a.useSearchParams;
            },
          });
    },
    16003: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 6851));
    },
    19043: (e, t, n) => {
      "use strict";
      let a, s;
      n.d(t, { Qo: () => x, Rt: () => p, d: () => u });
      var i = n(88507),
        o = n(79486),
        l = n(17063),
        r = n(65973),
        c = n(45558),
        d = n(29142);
      function u() {
        let e = (0, i.L)(d.S5.rpcUrl);
        return d.DL
          ? (0, o.Np)([(0, i.L)(d.DL, { retryCount: 0 }), e], { rank: !1 })
          : e;
      }
      let m = d.bQ === d.S5.testnetId ? r.A : c.$;
      function p() {
        return (
          a ||
            (a = (0, l.l)({
              chain: m,
              transport: u(),
              batch: { multicall: !0 },
            })),
          a
        );
      }
      function x() {
        let e = Date.now();
        if (s && e - s.at < 1e4) return s.p;
        let t = p()
          .getBlock({ blockTag: "latest" })
          .then((e) => ({
            block: Number(e.number),
            timestamp: Number(e.timestamp),
            readAt: Math.floor(Date.now() / 1e3),
          }))
          .catch((e) => {
            throw ((s = void 0), e);
          });
        return (s = { at: e, p: t }), t;
      }
    },
    26511: (e, t, n) => {
      "use strict";
      n.d(t, { UL: () => f, oJ: () => b, sr: () => g });
      var a = n(26196),
        s = n(73475),
        i = n(13987),
        o = n(39056),
        l = n(35384),
        r = n(45432),
        c = n(56666),
        d = n(84173),
        u = n(88507),
        m = n(65973),
        p = n(45558),
        x = n(29142),
        h = n(19043);
      let f = x.bQ === m.A.id ? m.A : p.$;
      function g() {
        var e, t;
        return {
          chainName: f.name,
          nativeCurrency: f.nativeCurrency,
          rpcUrls: [
            x.bQ === x.S5.id
              ? "https://rpc.mainnet.chain.robinhood.com"
              : f.rpcUrls.default.http[0],
          ],
          blockExplorerUrls: [
            x.bQ === x.S5.id
              ? x.S5.explorerUrl
              : null !=
                (t = null == (e = f.blockExplorers) ? void 0 : e.default.url)
              ? t
              : x.S5.explorerUrl,
          ],
        };
      }
      function b() {
        return (0, a.Y8)({
          appName: "Talis",
          appDescription:
            "One asset. Two perspectives. Income and Upside positions on Robinhood Stock Tokens.",
          appUrl: x.W6,
          appIcon: "".concat(x.W6, "/icons/icon-512.png"),
          projectId:
            null !== x.U1 && void 0 !== x.U1 ? x.U1 : "talis-no-walletconnect",
          wallets: x.U1
            ? [
                {
                  groupName: "Popular",
                  wallets: [s.w, i.d, o.O, l.G, r.m, c.Z],
                },
                { groupName: "More", wallets: [d.H] },
              ]
            : [{ groupName: "Browser wallets", wallets: [s.w, r.m, d.H] }],
          chains: [p.$, m.A],
          transports: {
            [p.$.id]: (0, h.d)(),
            [m.A.id]: (0, u.L)("https://rpc.testnet.chain.robinhood.com"),
          },
          ssr: !0,
          multiInjectedProviderDiscovery: !0,
        });
      }
    },
    36901: (e, t, n) => {
      "use strict";
      n.d(t, { qK: () => f, sN: () => g, vT: () => b, yM: () => h });
      var a = n(26196),
        s = n(90756),
        i = n(50625),
        o = n(71209),
        l = n(32916),
        r = n(37762),
        c = n(61058),
        d = n(55167),
        u = n(30823),
        m = n(29142),
        p = n(26511),
        x = n(93617);
      let h = "Preview mode \xb7 no transaction is sent";
      function f() {
        let [e, t] = (0, i.useState)(!1);
        return (0, i.useEffect)(() => t(!0), []), e;
      }
      function g() {
        let e = f(),
          { address: t, isConnected: n, chainId: a } = (0, l.F)();
        return (0, i.useMemo)(
          () =>
            m.KO
              ? e
                ? n && t
                  ? a !== m.bQ
                    ? { canWrite: !1, reason: "Switch to ".concat(p.UL.name) }
                    : { canWrite: !0 }
                  : { canWrite: !1, reason: "Connect a wallet" }
                : { canWrite: !1, reason: "Loading wallet…" }
              : { canWrite: !1, reason: h },
          [e, t, n, a]
        );
      }
      function b() {
        let e = f(),
          t = (0, r.U)(),
          {
            address: n,
            isConnected: h,
            isConnecting: b,
            chainId: v,
          } = (0, l.F)(),
          { openConnectModal: y, connectModalOpen: j } = (0, a.Vx)(),
          { disconnect: N } = (0, c.u)(),
          { switchChain: w, isPending: k } = (0, d.R)(),
          S = g(),
          L = (0, s.I)({
            queryKey: x.y.eth(m.bQ, n),
            queryFn: async () =>
              (await (0, u.r)(t, { address: n, chainId: m.bQ })).value,
            enabled: m.KO && e && !!n,
            staleTime: 15e3,
          }),
          C = (0, i.useCallback)(() => (null == y ? void 0 : y()), [y]),
          T = (0, i.useCallback)(
            () => w({ chainId: m.bQ, addEthereumChainParameter: (0, p.sr)() }),
            [w]
          ),
          E = e && (b || j);
        return (0, i.useMemo)(
          () => ({
            mounted: e,
            address: e ? n : void 0,
            isConnected: e && h,
            chainId: e ? v : void 0,
            onChain: e && h && v === m.bQ,
            connect: C,
            disconnect: () => N(),
            switchToActive: T,
            connecting: E,
            switching: k,
            eth: {
              value: L.data,
              formatted:
                void 0 !== L.data
                  ? (function (e) {
                      let [t = "0", n = ""] = (0, o.J)(e, 18).split("."),
                        a = n.slice(0, 4).replace(/0+$/, "");
                      return ""
                        .concat(t)
                        .concat(a ? ".".concat(a) : "", " ETH");
                    })(L.data)
                  : void 0,
              isLoading: L.isLoading,
            },
            gate: S,
            previewNote: m.KO ? void 0 : m.kx,
          }),
          [e, n, h, v, C, N, T, E, k, L.data, L.isLoading, S]
        );
      }
    },
    53063: (e, t, n) => {
      "use strict";
      n.d(t, { Bu: () => i, Sx: () => o, TE: () => s, _b: () => a });
      let a = "Income",
        s = "Upside",
        i = "".concat(a, " + ").concat(s),
        o = {
          income: "Keep the asset. Earn the premium.",
          upside: "Buy the move above the cap.",
        };
    },
    93617: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => i, y: () => s });
      var a = n(54096);
      let s = {
        all: ["wallet"],
        account: (e, t) => {
          var n;
          return [
            "wallet",
            e,
            null != (n = null == t ? void 0 : t.toLowerCase()) ? n : "none",
          ];
        },
        eth: (e, t) => [...s.account(e, t), "eth"],
        balances: (e, t, n) => [
          ...s.account(e, t),
          "balances",
          n.map((e) => e.toLowerCase()).join(","),
        ],
        allowance: (e, t, n, a) => [
          ...s.account(e, t),
          "allowance",
          n.toLowerCase(),
          a.toLowerCase(),
        ],
        read: function (e, t, n) {
          for (
            var a = arguments.length, s = Array(a > 3 ? a - 3 : 0), i = 3;
            i < a;
            i++
          )
            s[i - 3] = arguments[i];
          return ["wallet-read", e, t.toLowerCase(), n, ...s];
        },
      };
      async function i(e, t, n) {
        let i =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        try {
          var o, l;
          null == (o = (l = await (0, a.U)()).invalidate) || o.call(l);
        } catch (e) {}
        let r = !1 === i.refetch ? "none" : "active";
        await Promise.all([
          e.invalidateQueries({ queryKey: ["talis"], refetchType: r }),
          e.invalidateQueries({ queryKey: s.account(t, n), refetchType: r }),
          e.invalidateQueries({ queryKey: ["wallet-read", t], refetchType: r }),
        ]);
      }
    },
  },
  (e) => {
    e.O(
      0,
      [
        9276, 4133, 755, 3869, 756, 2976, 7349, 4520, 592, 8368, 8473, 5458,
        1812, 4814, 4314, 4297, 7358,
      ],
      () => e((e.s = 16003))
    ),
      (_N_E = e.O());
  },
]);
