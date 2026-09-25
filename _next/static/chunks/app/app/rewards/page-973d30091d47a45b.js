(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1413],
  {
    10275: (e, t, n) => {
      "use strict";
      n.d(t, { RouterLive: () => p });
      var a = n(72133),
        i = n(84520),
        s = n(91109),
        r = n(29142),
        l = n(87457),
        o = n(35208),
        d = n(66450),
        u = n(71808),
        c = n(90808);
      function p(e) {
        var t;
        let { className: n } = e,
          p = (0, d.ks)(),
          m = null == (t = (0, l.SG)()) ? void 0 : t.router;
        if (!r.KO || !l.YS) return (0, a.jsx)(c.En, { className: n });
        let y = p.data,
          x =
            y && y.backstopTarget > 0n
              ? Number((10000n * y.backstopReserve) / y.backstopTarget) / 1e4
              : 0;
        return (0, a.jsxs)("div", {
          className: (0, s.cn)(
            "rounded-card border border-line bg-panel p-4",
            n
          ),
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-3",
              children: [
                (0, a.jsx)("p", {
                  className: "label-caps",
                  children: "Live ledgers",
                }),
                (0, a.jsx)(c.aT, {
                  asOf: p.asOf,
                  isFetching: p.isFetching,
                  onRefetch: p.refetch,
                }),
              ],
            }),
            p.isError
              ? (0, a.jsx)(c.F_, { error: p.error, what: "Router" })
              : y && m
              ? (0, a.jsxs)("div", {
                  className:
                    "mt-2 grid gap-6 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)]",
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsxs)(i.l7, {
                          children: [
                            (0, a.jsx)(i.jP, {
                              label: "Undistributed",
                              value: (0, o.Gy)(y.undistributed, { symbol: !1 }),
                              hint: "USDG not yet assigned",
                            }),
                            (0, a.jsx)(i.jP, {
                              label: "Owed to stakers",
                              value: (0, o.Gy)(y.owedStakers, { symbol: !1 }),
                            }),
                            (0, a.jsx)(i.jP, {
                              label: "Owed to buyback",
                              value: (0, o.Gy)(y.owedBuyback, { symbol: !1 }),
                            }),
                            (0, a.jsx)(i.jP, {
                              label: "Owed to backstop",
                              value: (0, o.Gy)(y.owedBackstop, { symbol: !1 }),
                            }),
                            (0, a.jsx)(i.jP, {
                              label: "Owed to treasury",
                              value: (0, o.Gy)(y.owedTreasury, { symbol: !1 }),
                              hint: "treasury pulls",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "mt-3",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "flex items-baseline justify-between gap-3 text-xs",
                              children: [
                                (0, a.jsx)("span", {
                                  className: "text-muted",
                                  children: "Backstop reserve vs target",
                                }),
                                (0, a.jsxs)("span", {
                                  className: "font-mono text-fg tnum",
                                  children: [
                                    (0, o.Gy)(y.backstopReserve, {
                                      symbol: !1,
                                    }),
                                    " / ",
                                    (0, o.Gy)(y.backstopTarget, { symbol: !1 }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)(c.ke, {
                              fraction: x,
                              label: "Backstop reserve against its target",
                              className: "mt-1.5",
                            }),
                            (0, a.jsx)("p", {
                              className: "mt-1.5 text-[11px] text-muted",
                              children: y.redirect
                                ? "At target: the next distribute() splits 70 / 20 / 0 / 10 (backstop share redirected to stakers)."
                                : "Below target: the next distribute() splits 55 / 20 / 15 / 10.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col gap-3",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-[11px] text-muted",
                          children:
                            "Permissionless: anyone may call these; the caller chooses nothing but the gas.",
                        }),
                        (0, a.jsx)(c.xb, {
                          id: "router-distribute",
                          label: "Distribute",
                          variant: "primary",
                          step: y.undistributed > 0n ? (0, u.oj)(m) : void 0,
                          reason: "Nothing to distribute",
                          detail: "".concat(
                            (0, o.Gy)(y.undistributed),
                            " to split"
                          ),
                        }),
                        (0, a.jsx)(c.xb, {
                          id: "router-pull-stakers",
                          label: "Pull to stakers",
                          step: y.owedStakers > 0n ? (0, u.pM)(m) : void 0,
                          reason: "Nothing owed to stakers",
                          detail: "".concat(
                            (0, o.Gy)(y.owedStakers),
                            " \xb7 then sync()"
                          ),
                        }),
                        (0, a.jsx)(c.xb, {
                          id: "router-pull-backstop",
                          label: "Pull to backstop",
                          step: y.owedBackstop > 0n ? (0, u.PQ)(m) : void 0,
                          reason: "Nothing owed to the backstop",
                          detail: (0, o.Gy)(y.owedBackstop),
                        }),
                        (0, a.jsx)(c.xb, {
                          id: "router-pull-buyback",
                          label: "Pull to buyback",
                          step: y.owedBuyback > 0n ? (0, u.nm)(m) : void 0,
                          reason: "Nothing owed to the buyback",
                          detail: (0, o.Gy)(y.owedBuyback),
                        }),
                      ],
                    }),
                  ],
                })
              : (0, a.jsx)("div", {
                  "aria-busy": "true",
                  className:
                    "mt-3 h-40 animate-pulse rounded-card border border-line bg-bg/40",
                }),
          ],
        });
      }
    },
    11745: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 86637)),
        Promise.resolve().then(n.bind(n, 46812)),
        Promise.resolve().then(n.bind(n, 83754)),
        Promise.resolve().then(n.bind(n, 10275)),
        Promise.resolve().then(n.bind(n, 39106)),
        Promise.resolve().then(n.bind(n, 61931)),
        Promise.resolve().then(n.bind(n, 42006)),
        Promise.resolve().then(n.bind(n, 56749)),
        Promise.resolve().then(n.t.bind(n, 64133, 23)),
        Promise.resolve().then(n.t.bind(n, 25626, 23));
    },
    33766: (e, t, n) => {
      "use strict";
      n.d(t, { Mr: () => i, fN: () => s, i_: () => r, tB: () => a });
      let a = [
          "More Deposits",
          "More Auctions",
          "More Premium",
          "More Fees",
          "More Buybacks",
          "More Liquidity",
        ],
        i = [
          {
            key: "NONE",
            label: "No lock",
            months: 0,
            lockDays: 0,
            weightBps: 1e4,
            priority: !1,
          },
          {
            key: "M3",
            label: "3 months",
            months: 3,
            lockDays: 90,
            weightBps: 14e3,
            priority: !0,
          },
          {
            key: "M6",
            label: "6 months",
            months: 6,
            lockDays: 180,
            weightBps: 18e3,
            priority: !0,
          },
          {
            key: "M12",
            label: "12 months",
            months: 12,
            lockDays: 365,
            weightBps: 25e3,
            priority: !0,
          },
        ],
        s = [
          {
            key: "stakers",
            label: "Stakers",
            bps: 5500,
            bpsAtTarget: 7e3,
            mechanism:
              "Pulled into a 7-day linear drip that feeds a reward-per-weight index; claim() pulls USDG.",
            tone: "forest",
          },
          {
            key: "buyback",
            label: "Buyback",
            bps: 2e3,
            bpsAtTarget: 2e3,
            mechanism:
              "Ledger funds a rising-price procurement auction; bought tokens are burned in finalize().",
            tone: "lime",
          },
          {
            key: "backstop",
            label: "Backstop",
            bps: 1500,
            bpsAtTarget: 0,
            mechanism:
              "USDG reserve for series that lost collateral to an issuer action; 5-day public queue; may be empty.",
            tone: "ivory",
          },
          {
            key: "treasury",
            label: "Treasury",
            bps: 1e3,
            bpsAtTarget: 1e3,
            mechanism: "Pull ledger for the treasury Safe.",
            tone: "muted",
          },
        ],
        r = { backstopTargetUsdg: 5e5, feeBps: 500 };
    },
    35208: (e, t, n) => {
      "use strict";
      n.d(t, {
        D8: () => p,
        Gy: () => r,
        IG: () => u,
        VA: () => o,
        kG: () => d,
        qX: () => l,
        vV: () => c,
      });
      var a = n(29142),
        i = n(52061),
        s = n(81122);
      function r(e) {
        var t;
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === e) return "—";
        let a = (0, s.ej)(e, 6, {
          maxFraction: null != (t = n.maxFraction) ? t : 2,
          minFraction: 2,
        });
        return !1 === n.symbol ? a : "".concat(a, " USDG");
      }
      function l(e) {
        var t;
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (void 0 === e) return "—";
        let i = (0, s.ej)(e, 18, {
          maxFraction: null != (t = n.maxFraction) ? t : 4,
        });
        return !1 === n.symbol ? i : "".concat(i, " ").concat(a.v0);
      }
      function o(e) {
        return void 0 === e ? "—" : (0, s.ej)(e, 18, { maxFraction: 2 });
      }
      function d(e) {
        return void 0 === e ? "—" : (0, i.oZ)(Number(e) / 1e6);
      }
      function u(e) {
        return "".concat((Number(e) / 1e4).toFixed(1), "\xd7");
      }
      function c(e) {
        let t = Math.floor(e);
        if (t <= 0) return "now";
        if (t < 3600)
          return ""
            .concat(String(Math.floor(t / 60)).padStart(2, "0"), ":")
            .concat(String(t % 60).padStart(2, "0"));
        if (t < 86400)
          return ""
            .concat(Math.floor(t / 3600), "h ")
            .concat(Math.floor((t % 3600) / 60), "m");
        let n = Math.floor(t / 86400),
          a = Math.floor((t % 86400) / 3600);
        return a > 0 ? "".concat(n, " d ").concat(a, " h") : "".concat(n, " d");
      }
      function p(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "ended";
        return t ? (e > t ? "in ".concat(c(e - t)) : n) : "—";
      }
    },
    35532: (e, t, n) => {
      "use strict";
      n.d(t, { hc: () => a }), n(72133), n(84520), n(29142);
      let a = n(87457).YS
        ? "Phase 1 \xb7 live"
        : "Phase 1 \xb7 built, not deployed";
    },
    39106: (e, t, n) => {
      "use strict";
      n.d(t, { StakePanel: () => k });
      var a = n(72133),
        i = n(78220),
        s = n(49420),
        r = n(50625),
        l = n(84520),
        o = n(35476),
        d = n(54490),
        u = n(91109),
        c = n(29142),
        p = n(87457),
        m = n(35208),
        y = n(66450),
        x = n(42105),
        h = n(86648),
        b = n(71808),
        f = n(81122),
        g = n(12533),
        v = n(36901),
        j = n(33766),
        w = n(90808);
      let N = { 0: "Flexible", 1: "M3", 2: "M6", 3: "M12" };
      function T(e) {
        let {
            id: t,
            label: n,
            value: i,
            onChange: s,
            max: r,
            maxLabel: l,
            disabled: o,
            hint: d,
            invalid: p,
          } = e,
          m = d ? "".concat(t, "-hint") : void 0;
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsx)("label", {
              htmlFor: t,
              className: "text-xs text-muted",
              children: n,
            }),
            (0, a.jsxs)("div", {
              className:
                "mt-1.5 flex items-center gap-2 rounded-xl border border-rule bg-bg/60 px-3 focus-within:border-upside",
              children: [
                (0, a.jsx)("input", {
                  id: t,
                  inputMode: "decimal",
                  value: i,
                  onChange: (e) => s(e.target.value),
                  disabled: o,
                  "aria-invalid": p || void 0,
                  "aria-describedby": m,
                  className:
                    "h-11 w-full min-w-0 bg-transparent font-mono text-base text-fg outline-none tnum placeholder:text-dim disabled:opacity-50",
                  placeholder: "0.0",
                }),
                (0, a.jsx)("span", {
                  className: "font-mono text-xs text-muted",
                  children: c.v0,
                }),
                void 0 !== r
                  ? (0, a.jsx)("button", {
                      type: "button",
                      onClick: () => s((0, f.ej)(r, 18, { grouping: !1 })),
                      disabled: o,
                      className:
                        "h-6 rounded-pill border border-rule px-2 text-[11px] text-muted hover:border-fg hover:text-fg disabled:opacity-50",
                      title: l,
                      children: "Max",
                    })
                  : null,
              ],
            }),
            d
              ? (0, a.jsx)("p", {
                  id: m,
                  className: (0, u.cn)(
                    "mt-1.5 font-mono text-[11px] tnum",
                    p ? "text-warning" : "text-muted"
                  ),
                  children: d,
                })
              : null,
          ],
        });
      }
      function k(e) {
        var t, n, k, M;
        let S,
          C,
          P,
          A,
          E,
          { className: O } = e,
          B = (0, r.useId)(),
          F = (0, v.vT)(),
          R = (0, h.d)(),
          D = (0, o.f)(1e3),
          G = (0, y.e9)(),
          I = (0, y.K9)(),
          U = (0, g.vr)(),
          [q, z] = (0, r.useState)(null),
          [_, W] = (0, r.useState)(""),
          [L, K] = (0, r.useState)(1),
          [Y, V] = (0, r.useState)("exact"),
          [$, X] = (0, r.useState)(null),
          [H, Z] = (0, r.useState)(""),
          Q = (0, p.SG)(),
          J = null == Q ? void 0 : Q.staking,
          ee = I.data,
          et = null == ee ? void 0 : ee.position,
          en = null != (t = null == et ? void 0 : et.tier) ? t : 0,
          ea = Math.max(L, en),
          ei = !et || (0n === et.staked && 0n === et.pendingUnstake),
          es = (0, r.useMemo)(() => (0, f.C_)(_, 18), [_]),
          er = (0, r.useMemo)(() => (0, f.C_)(H, 18), [H]);
        R.canWrite
          ? I.isError
            ? (S = "Position read failed; re-read to retry")
            : ee
            ? "" === _.trim()
              ? (S = "Enter an amount")
              : null === es || es <= 0n
              ? (S = "Enter a valid amount")
              : ei && es < x.kQ
              ? (S = "A first stake is at least 1 ".concat(c.v0))
              : es > ee.talisBalance &&
                (S = "Above your balance (".concat(
                  (0, m.qX)(ee.talisBalance),
                  ")"
                ))
            : (S = "Reading your position…")
          : (S = R.reason);
        let el = !S,
          eo = !ee || null === es || !(es > 0n) || ee.talisAllowance < es,
          ed =
            (null != (n = null == et ? void 0 : et.staked) ? n : 0n) +
            (es && es > 0n ? es : 0n),
          eu = (0, x.mm)(ed, ea),
          ec = D
            ? (0, x.tJ)(
                D,
                null != (k = null == et ? void 0 : et.lockEnd) ? k : 0,
                ea
              )
            : void 0,
          ep = void 0 !== ec && (0, x.j)(ed, ea, ec, D),
          em = x.iB.filter((e) => e > en);
        R.canWrite
          ? et && 0n !== et.staked
            ? null === $
              ? (C = "Choose a higher tier")
              : $ <= en && (C = "Extend needs a tier above ".concat(N[en]))
            : (C = "No staked position to extend")
          : (C = R.reason);
        let ey = !!et && D > 0 && D < et.lockEnd;
        R.canWrite
          ? et && 0n !== et.staked
            ? D
              ? ey
                ? (P = "Lock ends in ".concat((0, m.vV)(et.lockEnd - D)))
                : "" === H.trim()
                ? (P = "Enter an amount")
                : null === er || er <= 0n
                ? (P = "Enter a valid amount")
                : er > et.staked &&
                  (P = "Above your stake (".concat((0, m.qX)(et.staked), ")"))
              : (P = "Reading the clock…")
            : (P = "Nothing staked")
          : (P = R.reason);
        let ex = !!et && et.pendingUnstake > 0n && D > 0 && D < et.unstakeAt;
        R.canWrite
          ? et && 0n !== et.pendingUnstake
            ? D
              ? ex &&
                (A = "Cooldown ends in ".concat((0, m.vV)(et.unstakeAt - D)))
              : (A = "Reading the clock…")
            : (A = "No unstake pending")
          : (A = R.reason),
          R.canWrite
            ? I.isError
              ? (E = "Position read failed; re-read to retry")
              : ee
              ? 0n === ee.earned && (E = "Nothing accrued yet")
              : (E = "Reading your position…")
            : (E = R.reason);
        let eh = U.busy,
          eb = async (e) => {
            if (J)
              switch ((z(e), e)) {
                case "stake":
                  es &&
                    (await U.send(
                      (0, b.wx)({
                        staking: J,
                        amount: es,
                        tier: ea,
                        approve: Y,
                        talis: null == Q ? void 0 : Q.talis,
                      })
                    ));
                  return;
                case "extend":
                  null !== $ && (await U.send((0, b.XS)(J, $)));
                  return;
                case "request":
                  er && (await U.send((0, b.ro)(J, er)));
                  return;
                case "unstake":
                  await U.send((0, b.A_)(J));
                  return;
                case "claim":
                  await U.send((0, b.pB)(J));
                  return;
              }
          },
          ef = c.KO && p.YS,
          eg = ef && !!ee && null !== es && es > 0n,
          ev = (e) =>
            q === e && "idle" !== U.status
              ? (0, a.jsx)(d.R, { tx: U, className: "mt-2" })
              : null;
        return (0, a.jsxs)(l.Zp, {
          as: "section",
          "aria-labelledby": "stake-title",
          className: O,
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-wrap items-start justify-between gap-3",
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("p", {
                      className: "label-caps",
                      children: "Staking",
                    }),
                    (0, a.jsxs)("h2", {
                      id: "stake-title",
                      className: "mt-1 text-base font-medium text-fg",
                      children: ["Stake ", c.v0],
                    }),
                    (0, a.jsxs)("p", {
                      className:
                        "mt-1.5 max-w-lg text-xs leading-relaxed text-muted",
                      children: [
                        "One position per address. Rewards are USDG from fees only, released through a 7-day drip; a lock raises the weight and, at M3 or longer with",
                        " ",
                        (0, a.jsx)("span", {
                          className: "font-mono text-fg tnum",
                          children: (0, f.ej)(x.Fw, 18, { maxFraction: 0 }),
                        }),
                        " ",
                        c.v0,
                        " or more, gives auction priority.",
                      ],
                    }),
                  ],
                }),
                ef
                  ? (0, a.jsx)(w.aT, {
                      asOf: Math.max(G.asOf, I.asOf),
                      isFetching: G.isFetching || I.isFetching,
                      onRefetch: () => (G.refetch(), I.refetch()),
                    })
                  : (0, a.jsx)(w.En, {}),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "mt-5 grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-3",
                  children: [
                    (0, a.jsx)("p", {
                      className: "label-caps",
                      children: "Your position",
                    }),
                    ef
                      ? F.mounted && F.address
                        ? I.isError
                          ? (0, a.jsx)(w.F_, {
                              error: I.error,
                              what: "Position",
                            })
                          : ee && et
                          ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsxs)(l.l7, {
                                  className:
                                    "rounded-card border border-line bg-panel px-4",
                                  children: [
                                    (0, a.jsx)(l.jP, {
                                      label: "Staked ".concat(c.v0),
                                      value: (0, m.qX)(et.staked, {
                                        symbol: !1,
                                      }),
                                    }),
                                    (0, a.jsx)(l.jP, {
                                      label: "Tier",
                                      value: ""
                                        .concat(N[et.tier], " \xb7 ")
                                        .concat((0, m.IG)(x.$z[et.tier])),
                                      hint:
                                        et.tier > 0
                                          ? "".concat(
                                              x.Yh[et.tier] / 86400,
                                              " d lock"
                                            )
                                          : "no lock",
                                    }),
                                    (0, a.jsx)(l.jP, {
                                      label: "Lock ends",
                                      value:
                                        et.staked > 0n && et.tier > 0
                                          ? (0, m.D8)(et.lockEnd, D)
                                          : "—",
                                      hint:
                                        et.staked > 0n &&
                                        et.tier > 0 &&
                                        D > 0 &&
                                        D >= et.lockEnd
                                          ? "unstake available"
                                          : void 0,
                                    }),
                                    (0, a.jsx)(l.jP, {
                                      label: "Weight",
                                      value: (0, m.VA)(ee.weight),
                                      hint: "locked ".concat(
                                        (0, m.VA)(ee.lockedWeight)
                                      ),
                                    }),
                                    (0, a.jsx)(l.jP, {
                                      label: "Auction priority",
                                      value: ee.hasPriority
                                        ? (0, a.jsx)(l.Ex, {
                                            tone: "success",
                                            className: "font-sans",
                                            children: "yes",
                                          })
                                        : (0, a.jsx)("span", {
                                            className: "font-sans text-muted",
                                            children: "no",
                                          }),
                                      className: "items-center",
                                    }),
                                    (0, a.jsx)(l.jP, {
                                      label: "Earned USDG",
                                      value: (0, m.Gy)(ee.earned, {
                                        symbol: !1,
                                      }),
                                      hint: "claimable",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex flex-wrap items-center gap-2",
                                  children: [
                                    (0, a.jsx)(l.$n, {
                                      size: "sm",
                                      variant: "primary",
                                      disabled: !!E || eh,
                                      title: E,
                                      onClick: () => void eb("claim"),
                                      children:
                                        eh && "claim" === q
                                          ? "Sending…"
                                          : "Claim USDG",
                                    }),
                                    E
                                      ? (0, a.jsx)("span", {
                                          className: "text-[11px] text-muted",
                                          children: E,
                                        })
                                      : null,
                                  ],
                                }),
                                ev("claim"),
                                et.pendingUnstake > 0n
                                  ? (0, a.jsxs)("div", {
                                      className:
                                        "rounded-card border border-line bg-panel px-4 py-3",
                                      children: [
                                        (0, a.jsxs)("p", {
                                          className:
                                            "flex items-center gap-2 text-xs text-fg",
                                          children: [
                                            (0, a.jsx)(i.A, {
                                              className: "size-3.5 text-muted",
                                              "aria-hidden": "true",
                                            }),
                                            "Pending unstake \xb7 ",
                                            (0, a.jsx)("span", {
                                              className: "font-mono tnum",
                                              children: (0, m.qX)(
                                                et.pendingUnstake
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("p", {
                                          className:
                                            "mt-1 font-mono text-[11px] text-muted tnum",
                                          children: ex
                                            ? "cooldown ends in ".concat(
                                                (0, m.vV)(et.unstakeAt - D)
                                              )
                                            : D > 0
                                            ? "cooldown over \xb7 withdraw now"
                                            : "—",
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "mt-2 flex flex-wrap items-center gap-2",
                                          children: [
                                            (0, a.jsx)(l.$n, {
                                              size: "sm",
                                              variant: "secondary",
                                              disabled: !!A || eh,
                                              title: A,
                                              onClick: () => void eb("unstake"),
                                              children:
                                                eh && "unstake" === q
                                                  ? "Sending…"
                                                  : "Unstake",
                                            }),
                                            A
                                              ? (0, a.jsx)("span", {
                                                  className:
                                                    "text-[11px] text-muted",
                                                  children: A,
                                                })
                                              : null,
                                          ],
                                        }),
                                        ev("unstake"),
                                      ],
                                    })
                                  : null,
                              ],
                            })
                          : (0, a.jsx)("div", {
                              "aria-busy": "true",
                              className:
                                "h-40 animate-pulse rounded-card border border-line bg-panel",
                            })
                        : (0, a.jsxs)("div", {
                            className: "flex flex-col items-start gap-2",
                            children: [
                              (0, a.jsx)("p", {
                                className: "text-xs text-muted",
                                children:
                                  "Connect a wallet to read your position.",
                              }),
                              F.mounted
                                ? (0, a.jsx)(l.$n, {
                                    size: "sm",
                                    variant: "secondary",
                                    onClick: F.connect,
                                    children: "Connect wallet",
                                  })
                                : null,
                            ],
                          })
                      : (0, a.jsx)("p", {
                          className: "text-xs text-muted",
                          children: c.KO
                            ? "Positions are read from the Staking contract once it is deployed."
                            : "Positions are read from the chain in live mode.",
                        }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex flex-col gap-4",
                  children: [
                    (0, a.jsxs)("form", {
                      className: "flex flex-col gap-4",
                      onSubmit: (e) => {
                        e.preventDefault(), el && eb("stake");
                      },
                      children: [
                        (0, a.jsx)(T, {
                          id: "".concat(B, "-amount"),
                          label: "Amount to stake",
                          value: _,
                          onChange: W,
                          max: null == ee ? void 0 : ee.talisBalance,
                          maxLabel: ee
                            ? "Balance ".concat((0, m.qX)(ee.talisBalance))
                            : void 0,
                          disabled: eh || !R.canWrite,
                          hint: ee
                            ? "Balance "
                                .concat(
                                  (0, m.qX)(ee.talisBalance),
                                  " \xb7 first stake ≥ 1 "
                                )
                                .concat(c.v0)
                            : "First stake ≥ 1 ".concat(c.v0),
                          invalid:
                            "" !== _.trim() &&
                            (null === es || (!!ee && es > ee.talisBalance)),
                        }),
                        (0, a.jsxs)("fieldset", {
                          children: [
                            (0, a.jsx)("legend", {
                              className: "text-xs text-muted",
                              children: "Tier",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "mt-1.5 grid grid-cols-2 gap-2 sm:grid-cols-4",
                              children: j.Mr.map((e, t) => {
                                let n = t < en,
                                  i = ea === t;
                                return (0, a.jsxs)(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => K(t),
                                    disabled: eh || n,
                                    "aria-pressed": i,
                                    title: n
                                      ? "Below your current tier (".concat(
                                          N[en],
                                          "); a stake never lowers the tier"
                                        )
                                      : void 0,
                                    className: (0, u.cn)(
                                      "flex flex-col items-start gap-0.5 rounded-card border px-3 py-2 text-left transition-colors",
                                      i
                                        ? "border-upside-fill bg-raised"
                                        : "border-line hover:border-fg",
                                      n &&
                                        "cursor-not-allowed opacity-40 hover:border-line"
                                    ),
                                    children: [
                                      (0, a.jsxs)("span", {
                                        className:
                                          "flex w-full items-center justify-between",
                                        children: [
                                          (0, a.jsx)("span", {
                                            className: "label-caps",
                                            children:
                                              "NONE" === e.key
                                                ? "Flexible"
                                                : e.key,
                                          }),
                                          e.lockDays > 0
                                            ? (0, a.jsx)(s.A, {
                                                className: "size-3 text-muted",
                                                "aria-hidden": "true",
                                              })
                                            : null,
                                        ],
                                      }),
                                      (0, a.jsxs)("span", {
                                        className: (0, u.cn)(
                                          "font-mono text-lg tnum",
                                          i ? "text-upside" : "text-fg"
                                        ),
                                        children: [
                                          (e.weightBps / 1e4).toFixed(1),
                                          "\xd7",
                                        ],
                                      }),
                                      (0, a.jsxs)("span", {
                                        className: "text-[11px] text-muted",
                                        children: [
                                          0 === e.lockDays
                                            ? "no lock"
                                            : "".concat(e.lockDays, " d lock"),
                                          e.priority ? " \xb7 priority" : "",
                                        ],
                                      }),
                                    ],
                                  },
                                  e.key
                                );
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)(l.l7, {
                          children: [
                            (0, a.jsx)(l.jP, {
                              label: "Weight after",
                              value: eg ? (0, m.VA)(eu) : "—",
                              hint: eg
                                ? ""
                                    .concat(
                                      (0, m.qX)(ed, { symbol: !1 }),
                                      " \xd7 "
                                    )
                                    .concat((0, m.IG)(x.$z[ea]))
                                : "\xd7 ".concat((0, m.IG)(x.$z[ea])),
                            }),
                            (0, a.jsx)(l.jP, {
                              label: "Lock ends after",
                              value:
                                eg && void 0 !== ec
                                  ? 0 === ea &&
                                    (null !=
                                    (M = null == et ? void 0 : et.lockEnd)
                                      ? M
                                      : 0) <= D
                                    ? "no lock"
                                    : (0, m.D8)(ec, D)
                                  : "—",
                              hint: "never shortened",
                            }),
                            (0, a.jsx)(l.jP, {
                              label: "Auction priority after",
                              value: eg ? (ep ? "yes" : "no") : "—",
                              tone: ep ? "success" : "muted",
                              hint: ep
                                ? void 0
                                : 0 === ea
                                ? "needs M3+"
                                : "needs ≥ "
                                    .concat(
                                      (0, f.ej)(x.Fw, 18, { maxFraction: 0 }),
                                      " "
                                    )
                                    .concat(c.v0),
                              stack: !0,
                            }),
                            ee
                              ? (0, a.jsx)(l.jP, {
                                  label: "".concat(
                                    c.v0,
                                    " allowance to Staking"
                                  ),
                                  value: (0, m.qX)(ee.talisAllowance, {
                                    symbol: !1,
                                  }),
                                  hint:
                                    es && es > 0n
                                      ? eo
                                        ? "approve first"
                                        : "covers this stake"
                                      : void 0,
                                })
                              : null,
                          ],
                        }),
                        (0, a.jsxs)("label", {
                          className:
                            "flex items-center gap-2 text-[11px] text-muted",
                          children: [
                            (0, a.jsx)("input", {
                              type: "checkbox",
                              checked: "max" === Y,
                              onChange: (e) =>
                                V(e.target.checked ? "max" : "exact"),
                              disabled: eh,
                              className: "size-3.5 accent-accent",
                            }),
                            "Approve unlimited ",
                            c.v0,
                            " to the Staking contract (default: the exact amount)",
                          ],
                        }),
                        (0, a.jsx)(l.$n, {
                          type: "submit",
                          variant: "primary",
                          size: "lg",
                          disabled: !el || eh,
                          title: S,
                          className: "w-full min-w-0",
                          children: (0, a.jsx)("span", {
                            className:
                              "min-w-0 whitespace-normal leading-tight",
                            children:
                              eh && "stake" === q
                                ? "Sending…"
                                : eo
                                ? "Approve ".concat(c.v0, " → Stake")
                                : "Stake",
                          }),
                        }),
                        S
                          ? (0, a.jsx)("p", {
                              className: "text-center text-[11px] text-muted",
                              children: S,
                            })
                          : null,
                        ev("stake"),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "grid gap-4 border-t border-line pt-4 sm:grid-cols-2",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, a.jsx)("p", {
                              className: "label-caps",
                              children: "Extend the lock",
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex flex-wrap items-center gap-2",
                              children: [
                                (0, a.jsxs)("select", {
                                  "aria-label": "Extend to tier",
                                  value: null != $ ? $ : "",
                                  onChange: (e) =>
                                    X(
                                      "" === e.target.value
                                        ? null
                                        : Number(e.target.value)
                                    ),
                                  disabled:
                                    eh || !R.canWrite || 0 === em.length,
                                  className:
                                    "h-8 rounded-pill border border-rule bg-panel px-3 font-mono text-xs text-fg tnum outline-none focus:border-upside-fill disabled:opacity-50",
                                  children: [
                                    (0, a.jsx)("option", {
                                      value: "",
                                      children: "Higher tier…",
                                    }),
                                    em.map((e) =>
                                      (0, a.jsxs)(
                                        "option",
                                        {
                                          value: e,
                                          children: [
                                            N[e],
                                            " \xb7 ",
                                            (0, m.IG)(x.$z[e]),
                                            " \xb7 ",
                                            x.Yh[e] / 86400,
                                            " d",
                                          ],
                                        },
                                        e
                                      )
                                    ),
                                  ],
                                }),
                                (0, a.jsx)(l.$n, {
                                  size: "sm",
                                  variant: "secondary",
                                  disabled: !!C || eh,
                                  title: C,
                                  onClick: () => void eb("extend"),
                                  children:
                                    eh && "extend" === q
                                      ? "Sending…"
                                      : "Extend",
                                }),
                              ],
                            }),
                            (0, a.jsx)("p", {
                              className: "text-[11px] text-muted",
                              children:
                                null != C
                                  ? C
                                  : (0, a.jsxs)(a.Fragment, {
                                      children: [
                                        "Lock end becomes max(current, ",
                                        (0, a.jsxs)("span", {
                                          className: "font-mono tnum",
                                          children: [
                                            "now + ",
                                            null !== $ ? x.Yh[$] / 86400 : "…",
                                            " d",
                                          ],
                                        }),
                                        "); never shortened.",
                                      ],
                                    }),
                            }),
                            ev("extend"),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, a.jsx)("p", {
                              className: "label-caps",
                              children: "Request unstake",
                            }),
                            (0, a.jsx)(T, {
                              id: "".concat(B, "-unstake"),
                              label: "Amount",
                              value: H,
                              onChange: Z,
                              max: null == et ? void 0 : et.staked,
                              maxLabel: et
                                ? "Staked ".concat((0, m.qX)(et.staked))
                                : void 0,
                              disabled:
                                eh ||
                                !R.canWrite ||
                                !et ||
                                0n === et.staked ||
                                ey,
                              invalid: "" !== H.trim() && null === er,
                            }),
                            (0, a.jsx)("div", {
                              className: "flex flex-wrap items-center gap-2",
                              children: (0, a.jsx)(l.$n, {
                                size: "sm",
                                variant: "secondary",
                                disabled: !!P || eh,
                                title: P,
                                onClick: () => void eb("request"),
                                children:
                                  eh && "request" === q
                                    ? "Sending…"
                                    : "Request unstake",
                              }),
                            }),
                            (0, a.jsx)("p", {
                              className: "text-[11px] text-muted",
                              children:
                                null != P
                                  ? P
                                  : "Weight drops at once; the ".concat(
                                      c.v0,
                                      " is withdrawable 7 days later."
                                    ),
                            }),
                            ev("request"),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    42006: (e, t, n) => {
      "use strict";
      n.d(t, { TokenCard: () => k });
      var a = n(72133),
        i = n(50625),
        s = n(82283),
        r = n(12909),
        l = n(74642),
        o = n(16127),
        d = n(6977),
        u = n(364),
        c = n(81659),
        p = n(35476),
        m = n(84520),
        y = n(91109),
        x = n(29142),
        h = n(36811),
        b = n(90756);
      function f(e) {
        return "object" == typeof e && null !== e && !Array.isArray(e);
      }
      function g(e) {
        if ("number" == typeof e) return Number.isFinite(e) ? e : void 0;
        if ("string" == typeof e && "" !== e.trim()) {
          let t = Number(e);
          return Number.isFinite(t) ? t : void 0;
        }
      }
      function v(e, t) {
        return f(e) ? e[t] : void 0;
      }
      async function j(e, t) {
        let n = await fetch(
          ""
            .concat(
              "https://api.dexscreener.com/latest/dex/pairs/robinhood",
              "/"
            )
            .concat(e),
          {
            cache: "no-store",
            signal: t,
            headers: { accept: "application/json" },
          }
        );
        if (!n.ok) throw Error("DexScreener answered ".concat(n.status));
        let a = (function (e, t) {
          var n;
          let a = v(e, "pairs");
          if (!Array.isArray(a) || 0 === a.length) return null;
          let i = t.toLowerCase(),
            s =
              null !=
              (n = a.find((e) => {
                let t = v(e, "pairAddress");
                return "string" == typeof t && t.toLowerCase() === i;
              }))
                ? n
                : a[0];
          if (!f(s)) return null;
          let r = v(v(s, "txns"), "h24"),
            l = g(s.pairCreatedAt),
            o =
              "string" == typeof s.url && /^https:\/\//.test(s.url)
                ? s.url
                : void 0,
            d = {},
            u = (e, t) => {
              void 0 !== t && (d[e] = t);
            };
          return (
            u("priceUsd", g(s.priceUsd)),
            u("priceEth", g(s.priceNative)),
            u("change1hPct", g(v(s.priceChange, "h1"))),
            u("change24hPct", g(v(s.priceChange, "h24"))),
            u("liquidityUsd", g(v(s.liquidity, "usd"))),
            u("fdvUsd", g(s.fdv)),
            u("volume24hUsd", g(v(s.volume, "h24"))),
            u("buys24h", g(v(r, "buys"))),
            u("sells24h", g(v(r, "sells"))),
            u("pairCreatedAt", void 0 !== l ? Math.floor(l / 1e3) : void 0),
            o && (d.url = o),
            d
          );
        })(await n.json(), e);
        if (!a) throw Error("DexScreener returned no pair");
        return a;
      }
      var w = n(52061),
        N = n(36901);
      let T = [
        {
          address: x.CV.address,
          abi: d.xw,
          functionName: "totalSupply",
          chainId: x.bQ,
        },
        {
          address: x.CV.address,
          abi: d.xw,
          functionName: "symbol",
          chainId: x.bQ,
        },
      ];
      function k(e) {
        var t, n;
        let { className: i } = e,
          r = (0, N.qK)(),
          l = (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : x.CV.pairId,
              t = (0, b.I)({
                queryKey: ["token-market", e],
                queryFn: (t) => {
                  let { signal: n } = t;
                  return j(e, n);
                },
                staleTime: 3e4,
                refetchInterval: 6e4,
                retry: 1,
                refetchOnWindowFocus: !1,
              });
            return {
              data: t.data,
              asOf:
                t.dataUpdatedAt > 0
                  ? Math.floor(t.dataUpdatedAt / 1e3)
                  : void 0,
              isPending: t.isPending,
              isError: t.isError,
              error: t.error,
            };
          })(),
          o = (0, p.f)(3e4),
          d = (0, u.X)({
            contracts: T,
            allowFailure: !0,
            query: { enabled: r, staleTime: 6e4 },
          }),
          c = l.data,
          y =
            r && o > 0 && void 0 !== l.asOf ? Math.max(0, o - l.asOf) : void 0,
          f = null == (t = d.data) ? void 0 : t[0],
          g = null == (n = d.data) ? void 0 : n[1],
          v =
            (null == g ? void 0 : g.status) === "success" &&
            "string" == typeof g.result &&
            g.result
              ? g.result
              : x.CV.symbol,
          k =
            (null == f ? void 0 : f.status) === "success" &&
            "bigint" == typeof f.result
              ? ""
                  .concat((0, h.bu)((0, h.Uj)(f.result, x.CV.decimals), 0), " ")
                  .concat(v)
              : void 0,
          P =
            d.isError ||
            (void 0 !== d.data &&
              (null == f ? void 0 : f.status) !== "success");
        return (0, a.jsxs)(m.Zp, {
          as: "section",
          id: "token",
          "aria-labelledby": "token-title",
          className: i,
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-wrap items-start justify-between gap-3",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, a.jsx)(m.nO, { size: 44, alt: "" }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsxs)("h2", {
                          id: "token-title",
                          className: "font-mono text-base font-medium text-fg",
                          children: ["$", x.CV.symbol],
                        }),
                        (0, a.jsxs)("p", {
                          className: "mt-0.5 text-xs text-muted",
                          children: [
                            x.CV.name,
                            " protocol token \xb7 ",
                            x.S5.name,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(m.Ex, { tone: "success", children: "Live" }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "mt-5 grid gap-x-8 gap-y-5 md:grid-cols-2",
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("p", {
                      className: "label-caps",
                      children: "Market",
                    }),
                    c || l.isPending
                      ? (0, a.jsxs)(m.l7, {
                          className: "mt-1",
                          children: [
                            (0, a.jsx)(m.jP, {
                              label: "Price",
                              value: c ? (0, w.oZ)(c.priceUsd) : "…",
                              hint:
                                (null == c ? void 0 : c.priceEth) !== void 0
                                  ? (0, w.Pl)(c.priceEth)
                                  : void 0,
                            }),
                            (0, a.jsx)(m.jP, {
                              label: "24h change",
                              value: c
                                ? (0, a.jsx)(M, { value: c.change24hPct })
                                : "…",
                              tone:
                                (null == c ? void 0 : c.change24hPct) !==
                                  void 0 && c.change24hPct > 0
                                  ? "success"
                                  : "muted",
                            }),
                            (0, a.jsx)(m.jP, {
                              label: "Liquidity",
                              value: c ? (0, w.ej)(c.liquidityUsd) : "…",
                            }),
                            (0, a.jsx)(m.jP, {
                              label: "FDV",
                              value: c ? (0, w.ej)(c.fdvUsd) : "…",
                            }),
                            (0, a.jsx)(m.jP, {
                              label: "24h volume",
                              value: c ? (0, w.ej)(c.volume24hUsd) : "…",
                              hint: c
                                ? (function (e, t) {
                                    let n = [];
                                    return (
                                      void 0 !== e &&
                                        n.push(
                                          "".concat((0, h.bu)(e, 0), " buys")
                                        ),
                                      void 0 !== t &&
                                        n.push(
                                          "".concat((0, h.bu)(t, 0), " sells")
                                        ),
                                      n.length ? n.join(" \xb7 ") : void 0
                                    );
                                  })(c.buys24h, c.sells24h)
                                : void 0,
                            }),
                          ],
                        })
                      : null,
                    l.isError
                      ? (0, a.jsx)("p", {
                          role: "status",
                          className: "mt-2 text-xs text-warning",
                          children:
                            "DexScreener did not answer \xb7 the chart link still works",
                        })
                      : null,
                    (0, a.jsxs)("p", {
                      className:
                        "mt-2 inline-flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-muted tnum",
                      children: [
                        (0, a.jsxs)("span", {
                          children: [
                            "Market data: DexScreener",
                            void 0 !== y
                              ? " \xb7 updated ".concat((0, h.KN)(y))
                              : "",
                          ],
                        }),
                        void 0 !== y && y > 300
                          ? (0, a.jsx)(m.Ex, {
                              tone: "warning",
                              className: "h-5 px-2 text-[10px]",
                              children: "stale",
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("p", {
                      className: "label-caps",
                      children: "On chain",
                    }),
                    (0, a.jsxs)(m.l7, {
                      className: "mt-1",
                      children: [
                        (0, a.jsx)(m.jP, {
                          label: "Supply",
                          value:
                            null != k
                              ? k
                              : P
                              ? (0, a.jsx)("span", {
                                  className: "text-warning",
                                  children: "unavailable",
                                })
                              : "…",
                          hint: k ? "on chain" : void 0,
                        }),
                        (0, a.jsx)(m.jP, {
                          label: "Contract",
                          value: (0, a.jsx)(S, {}),
                          className: "items-center",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "mt-5 flex flex-wrap items-center gap-3",
              children: [
                (0, a.jsxs)("a", {
                  href: x.CV.chartUrl,
                  target: "_blank",
                  rel: "noreferrer noopener",
                  className: (0, m.El)("primary", "sm"),
                  children: [
                    "Chart on DexScreener",
                    (0, a.jsx)(s.A, {
                      className: "size-3.5",
                      "aria-hidden": "true",
                    }),
                  ],
                }),
                (0, a.jsx)(C, {}),
              ],
            }),
          ],
        });
      }
      function M(e) {
        let { value: t } = e,
          n = (0, w.Mp)(t);
        return void 0 !== t && t < 0
          ? (0, a.jsx)("span", { className: "text-danger", children: n })
          : (0, a.jsx)(a.Fragment, { children: n });
      }
      function S() {
        let [e, t] = (0, i.useState)(!1);
        async function n() {
          try {
            await navigator.clipboard.writeText(x.CV.address),
              t(!0),
              setTimeout(() => t(!1), 1500);
          } catch (e) {
            t(!1);
          }
        }
        return (0, a.jsxs)("span", {
          className:
            "inline-flex flex-wrap items-center justify-end gap-x-2 gap-y-1",
          children: [
            (0, a.jsx)("span", {
              className: "sr-only",
              children: x.CV.address,
            }),
            (0, a.jsx)("span", {
              "aria-hidden": "true",
              className: "hidden text-fg sm:inline",
              children: x.CV.address,
            }),
            (0, a.jsx)("span", {
              "aria-hidden": "true",
              className: "text-fg sm:hidden",
              children: (0, h.Dc)(x.CV.address, 6, 4),
            }),
            (0, a.jsxs)("button", {
              type: "button",
              onClick: n,
              "aria-label": "Copy contract address",
              className: (0, y.cn)(
                "inline-flex h-6 items-center gap-1 rounded-pill border border-rule px-2 font-sans text-[11px] transition-colors hover:border-fg hover:text-fg",
                e ? "text-success" : "text-muted"
              ),
              children: [
                e
                  ? (0, a.jsx)(r.A, {
                      className: "size-3",
                      "aria-hidden": "true",
                    })
                  : (0, a.jsx)(l.A, {
                      className: "size-3",
                      "aria-hidden": "true",
                    }),
                e ? "Copied" : "Copy",
              ],
            }),
            (0, a.jsxs)("a", {
              href: x.CV.explorerUrl,
              target: "_blank",
              rel: "noreferrer noopener",
              className:
                "inline-flex h-6 items-center gap-1 rounded-pill border border-rule px-2 font-sans text-[11px] text-muted transition-colors hover:border-fg hover:text-fg",
              children: [
                "Blockscout",
                (0, a.jsx)(s.A, { className: "size-3", "aria-hidden": "true" }),
              ],
            }),
          ],
        });
      }
      function C() {
        let e = (0, N.vT)(),
          { watchAssetAsync: t, isPending: n } = (0, c.z)(),
          [s, l] = (0, i.useState)({ kind: "idle" });
        async function d() {
          l({ kind: "idle" });
          try {
            await t({
              type: "ERC20",
              options: {
                address: x.CV.address,
                symbol: x.CV.symbol,
                decimals: x.CV.decimals,
                image: "".concat(x.W6, "/icons/icon-192.png"),
              },
            }),
              l({ kind: "added" });
          } catch (t) {
            let e = t instanceof Error ? t.message : String(t);
            l({
              kind: "error",
              message: /rejected|denied/i.test(e)
                ? "Request rejected in the wallet."
                : e.split("\n")[0].slice(0, 160),
            });
          }
        }
        return (0, a.jsxs)("div", {
          className: "flex flex-wrap items-center gap-2",
          children: [
            (0, a.jsx)(m.$n, {
              size: "sm",
              variant: "secondary",
              onClick: d,
              disabled: !e.isConnected || n,
              title: e.isConnected
                ? "wallet_watchAsset \xb7 ".concat(x.CV.symbol)
                : "Connect a wallet first",
              icon: (0, a.jsx)(o.A, {
                className: "size-3.5",
                "aria-hidden": "true",
              }),
              children: n ? "Confirm in the wallet…" : "Add to wallet",
            }),
            "added" === s.kind
              ? (0, a.jsxs)("p", {
                  role: "status",
                  className:
                    "inline-flex items-center gap-1.5 text-xs text-success",
                  children: [
                    (0, a.jsx)(r.A, {
                      className: "size-3.5",
                      "aria-hidden": "true",
                    }),
                    " Added",
                  ],
                })
              : "error" === s.kind
              ? (0, a.jsx)("p", {
                  role: "alert",
                  className: "text-xs text-danger",
                  children: s.message,
                })
              : null,
          ],
        });
      }
    },
    42105: (e, t, n) => {
      "use strict";
      n.d(t, {
        $z: () => r,
        Fw: () => o,
        IW: () => x,
        Nr: () => b,
        OF: () => y,
        Yh: () => s,
        bu: () => g,
        iB: () => i,
        ik: () => m,
        j: () => c,
        kQ: () => l,
        mm: () => d,
        p9: () => p,
        qs: () => f,
        tJ: () => u,
      });
      var a = n(81122);
      let i = [0, 1, 2, 3],
        s = { 0: 0, 1: 7776e3, 2: 15552e3, 3: 31536e3 },
        r = { 0: 10000n, 1: 14000n, 2: 18000n, 3: 25000n },
        l = 10n ** 18n,
        o = 25000n * 10n ** 18n;
      function d(e, t) {
        return (e * r[t]) / 10000n;
      }
      function u(e, t, n) {
        return Math.max(t, e + s[n]);
      }
      function c(e, t, n, a) {
        return t >= 1 && n > a && e >= o;
      }
      function p(e, t, n) {
        return void 0 !== t && void 0 !== n && n >= t ? 0n : 604800n * e;
      }
      function m(e, t, n) {
        if (n >= t) return 0n;
        let a = BigInt(t - n);
        return e * (a < 604800n ? a : 604800n);
      }
      function y(e, t) {
        return t <= 0n || e <= 0n ? 0 : Number((1000000000000n * e) / t) / 1e12;
      }
      function x(e, t, n) {
        return t <= 0n || e <= 0n ? 0n : (604800n * n * e) / t;
      }
      let h = a.DY;
      function b(e, t) {
        if (t <= e.start) return e.startPrice;
        if (t >= e.end) return e.ceilingPrice;
        let n = BigInt(e.end - e.start);
        return (
          e.startPrice +
          ((e.ceilingPrice - e.startPrice) * BigInt(t - e.start)) / n
        );
      }
      function f(e, t) {
        return e.end <= e.start
          ? 1
          : Math.min(1, Math.max(0, (t - e.start) / (e.end - e.start)));
      }
      function g(e, t, n) {
        return ((e.committed + t) * n) / h >= e.budget;
      }
    },
    46812: (e, t, n) => {
      "use strict";
      n.d(t, { BuybacksCard: () => T });
      var a = n(72133),
        i = n(72555),
        s = n(50625),
        r = n(84520),
        l = n(35476),
        o = n(54490),
        d = n(91109),
        u = n(86635),
        c = n(29142),
        p = n(36811),
        m = n(87457),
        y = n(35208),
        x = n(66450),
        h = n(42105),
        b = n(86648),
        f = n(71808),
        g = n(81122),
        v = n(12533),
        j = n(33766),
        w = n(35532),
        N = n(90808);
      function T(e) {
        var t, n;
        let { className: l } = e,
          { data: o, isPending: d, isError: y, source: h } = (0, u.hR)(),
          [b, f] = (0, s.useState)(!1),
          g = null == o ? void 0 : o.buybacks,
          v =
            (null !=
            (n =
              null == (t = j.fN.find((e) => "buyback" === e.key))
                ? void 0
                : t.bps)
              ? n
              : 0) / 100,
          T = c.KO && m.YS,
          S = c.KO && !m.YS,
          C = (0, x.ZZ)(),
          P = C.data,
          A = P ? (0, p.Uj)(P.executed, 6) : void 0,
          E = P ? (0, p.Uj)(P.available, 6) : void 0,
          O = (e) => (S ? "—" : d ? "…" : (0, p.dR)(e));
        return (0, a.jsxs)(r.Zp, {
          as: "section",
          "aria-labelledby": "buybacks-title",
          className: l,
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-wrap items-start justify-between gap-3",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-start gap-3",
                  children: [
                    (0, a.jsx)(r.nO, {
                      size: 44,
                      alt: "".concat(c.v0, ", the Talis protocol token"),
                      className: "mt-0.5",
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsxs)("h2", {
                          id: "buybacks-title",
                          className: "text-base font-medium text-fg",
                          children: [
                            (0, a.jsxs)("span", {
                              className: "font-mono",
                              children: ["$", c.v0],
                            }),
                            " buybacks",
                          ],
                        }),
                        (0, a.jsxs)("p", {
                          className:
                            "mt-1.5 max-w-sm text-xs leading-relaxed text-muted",
                          children: [
                            "The router sends ",
                            v,
                            "% of net protocol revenue to a buyback ledger. The ledger buys ",
                            c.v0,
                            " in a rising-price procurement round and burns what it buys. Never an AMM swap.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("p", {
                  className: "label-caps",
                  children: [w.hc, "preview" === h ? " \xb7 illustrative" : ""],
                }),
              ],
            }),
            (0, a.jsxs)(r.l7, {
              className: "mt-4",
              children: [
                (0, a.jsx)(r.jP, {
                  label: "Total Revenue",
                  value: O(null == g ? void 0 : g.totalRevenueUsd),
                  hint: ""
                    .concat(c.nl.feeBps / 100, "% of auction proceeds")
                    .concat(S ? " \xb7 not read yet" : ""),
                }),
                (0, a.jsx)(r.jP, {
                  label: "Allocated to Buybacks",
                  value: O(null == g ? void 0 : g.allocatedToBuybacksUsd),
                  hint: S ? "not deployed" : void 0,
                }),
                (0, a.jsx)(r.jP, {
                  label: "Executed",
                  value: T
                    ? P
                      ? (0, p.dR)(A)
                      : C.isError
                      ? "—"
                      : "…"
                    : O(null == g ? void 0 : g.executedUsd),
                  hint: T
                    ? P && !P.executedComplete
                      ? "Σ spent \xb7 last ".concat(
                          P.executedRounds,
                          " rounds \xb7 burned"
                        )
                      : "Σ spent of finalized rounds \xb7 burned"
                    : S
                    ? "not deployed"
                    : "burned",
                }),
                (0, a.jsx)(r.jP, {
                  label: "Pending",
                  value: T
                    ? P
                      ? (0, p.dR)(E)
                      : C.isError
                      ? "—"
                      : "…"
                    : O(null == g ? void 0 : g.pendingUsd),
                  hint: T
                    ? "available() in the auction"
                    : S
                    ? "not deployed"
                    : "in the ledger",
                }),
              ],
            }),
            y
              ? (0, a.jsx)("p", {
                  className: "mt-2 text-xs text-warning",
                  children: "Could not load protocol stats.",
                })
              : null,
            (0, a.jsx)("div", {
              className: "mt-5",
              children: T ? (0, a.jsx)(k, {}) : (0, a.jsx)(N.En, {}),
            }),
            (0, a.jsxs)("button", {
              type: "button",
              onClick: () => f((e) => !e),
              "aria-expanded": b,
              "aria-controls": "buyback-history",
              className:
                "mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-pill border border-rule bg-transparent text-sm font-medium text-fg transition-colors hover:border-fg hover:bg-raised",
              children: [
                "View buyback history",
                (0, a.jsx)(i.A, {
                  className: b
                    ? "size-4 rotate-90 transition-transform"
                    : "size-4 transition-transform",
                  "aria-hidden": "true",
                }),
              ],
            }),
            b
              ? (0, a.jsxs)("div", {
                  id: "buyback-history",
                  className:
                    "mt-4 rounded-card border border-line bg-panel p-4 text-xs text-muted",
                  children: [
                    (0, a.jsx)("p", {
                      className: "label-caps mb-2",
                      children: "Procurement rounds",
                    }),
                    T
                      ? (0, a.jsx)(M, {})
                      : (0, a.jsx)("p", {
                          className: "leading-relaxed",
                          children:
                            "preview" === h
                              ? "No procurement rounds yet. Each round lists its budget, start price, ceiling, clearing price and the amount burned."
                              : "No procurement rounds on chain: the ProcurementAuction is built and tested, not deployed yet. The buyback ledger accrues in the router until it is.",
                        }),
                  ],
                })
              : null,
          ],
        });
      }
      function k() {
        var e;
        let t,
          n = (0, s.useId)(),
          i = (0, l.f)(1e3),
          u = (0, b.d)(),
          p = (0, x.ZZ)(),
          j = (0, v.vr)(),
          [w, T] = (0, s.useState)(""),
          [k, M] = (0, s.useState)("exact"),
          S = null == (e = (0, m.SG)()) ? void 0 : e.procurement,
          C = p.data,
          P = null == C ? void 0 : C.active,
          A = (0, s.useMemo)(() => (0, g.C_)(w, 18), [w]),
          E = P && i > 0 ? (0, h.Nr)(P, i) : void 0;
        if (p.isError)
          return (0, a.jsx)(N.F_, { error: p.error, what: "Procurement" });
        if (!C || !S)
          return (0, a.jsx)("div", {
            "aria-busy": "true",
            className:
              "h-24 animate-pulse rounded-card border border-line bg-panel",
          });
        u.canWrite
          ? P
            ? P.crossed
              ? (t = "The round has crossed; no more commits")
              : i > 0 && i >= P.end
              ? (t = "The round has ended; finalize it")
              : "" === w.trim()
              ? (t = "Enter an amount")
              : null === A || A <= 0n
              ? (t = "Enter a valid amount")
              : A < C.minCommit
              ? (t = "Minimum commit is ".concat((0, y.qX)(C.minCommit)))
              : void 0 !== C.talisBalance &&
                A > C.talisBalance &&
                (t = "Above your balance (".concat(
                  (0, y.qX)(C.talisBalance),
                  ")"
                ))
            : (t = "No round is open")
          : (t = u.reason);
        let O = !t,
          B =
            void 0 === C.talisAllowance ||
            null === A ||
            !(A > 0n) ||
            C.talisAllowance < A,
          F = !!P && !!A && A > 0n && void 0 !== E && (0, h.bu)(P, A, E),
          R = !!P && (P.crossed || (i > 0 && i >= P.end)),
          D =
            "" !== w.trim() &&
            (null === A ||
              (void 0 !== C.talisBalance && null !== A && A > C.talisBalance));
        return (0, a.jsxs)("div", {
          className: "flex flex-col gap-4",
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-3",
              children: [
                (0, a.jsx)("p", {
                  className: "label-caps",
                  children: "Procurement",
                }),
                (0, a.jsx)(N.aT, {
                  asOf: p.asOf,
                  isFetching: p.isFetching,
                  onRefetch: p.refetch,
                }),
              ],
            }),
            (0, a.jsxs)(r.l7, {
              className: "rounded-card border border-line bg-panel px-4",
              children: [
                (0, a.jsx)(r.jP, {
                  label: "Available budget",
                  value: (0, y.Gy)(C.available, { symbol: !1 }),
                  hint: "USDG \xb7 not reserved nor owed",
                }),
                (0, a.jsx)(r.jP, {
                  label: "Rounds",
                  value: C.roundCount.toString(),
                  hint:
                    C.activeRoundId > 0n
                      ? "#".concat(C.activeRoundId.toString(), " open")
                      : "none open",
                }),
              ],
            }),
            P
              ? (0, a.jsxs)("div", {
                  className: "rounded-card border border-line bg-panel p-4",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-wrap items-center justify-between gap-2",
                      children: [
                        (0, a.jsxs)("p", {
                          className: "text-sm text-fg",
                          children: [
                            "Round ",
                            (0, a.jsxs)("span", {
                              className: "font-mono tnum",
                              children: ["#", P.id.toString()],
                            }),
                          ],
                        }),
                        (0, a.jsx)(r.Ex, {
                          tone: P.crossed
                            ? "success"
                            : i > 0 && i >= P.end
                            ? "warning"
                            : "upside",
                          children: P.crossed
                            ? "Crossed"
                            : i > 0 && i >= P.end
                            ? "Ended"
                            : "Open",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "mt-3 flex items-baseline justify-between gap-3 text-xs",
                      children: [
                        (0, a.jsx)("span", {
                          className: "text-muted",
                          children: "Price now → ceiling",
                        }),
                        (0, a.jsxs)("span", {
                          className: "font-mono text-fg tnum",
                          children: [
                            (0, y.kG)(P.crossed ? P.clearingPrice : E),
                            " → ",
                            (0, y.kG)(P.ceilingPrice),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(N.ke, {
                      fraction: i > 0 ? (0, h.qs)(P, i) : 0,
                      tone: "lime",
                      label: "Elapsed share of the round's clock",
                      className: "mt-1.5",
                    }),
                    (0, a.jsxs)("p", {
                      className: "mt-1.5 font-mono text-[11px] text-muted tnum",
                      children: [
                        "start ",
                        (0, y.kG)(P.startPrice),
                        " \xb7 ",
                        P.crossed
                          ? "cleared at ".concat((0, y.kG)(P.clearingPrice))
                          : "ends ".concat((0, y.D8)(P.end, i)),
                        " \xb7 chain read ",
                        (0, y.kG)(P.priceNow),
                      ],
                    }),
                    (0, a.jsxs)(r.l7, {
                      className: "mt-2",
                      children: [
                        (0, a.jsx)(r.jP, {
                          label: "Committed ".concat(c.v0),
                          value: (0, y.qX)(P.committed, { symbol: !1 }),
                        }),
                        (0, a.jsx)(r.jP, {
                          label: "Budget",
                          value: (0, y.Gy)(P.budget, { symbol: !1 }),
                          hint: "USDG",
                        }),
                        (0, a.jsx)(r.jP, {
                          label: "Crosses at",
                          value:
                            void 0 !== E && E > 0n
                              ? (0, y.qX)((P.budget * 10n ** 18n) / E, {
                                  symbol: !1,
                                })
                              : "—",
                          hint: "committed \xd7 price ≥ budget",
                          stack: !0,
                        }),
                      ],
                    }),
                  ],
                })
              : (0, a.jsx)("p", {
                  className: "text-xs text-muted",
                  children:
                    "No round is open. The owner opens one with a budget at or below the available USDG; the price then rises on a clock from the start price to the ceiling.",
                }),
            P
              ? (0, a.jsxs)("form", {
                  className: "flex flex-col gap-3",
                  onSubmit: (e) => {
                    var t;
                    e.preventDefault(),
                      O &&
                        A &&
                        j.send(
                          (0, f.Pc)({
                            procurement: S,
                            units: A,
                            approve: k,
                            talis: null == (t = (0, m.SG)()) ? void 0 : t.talis,
                          })
                        );
                  },
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsxs)("label", {
                          htmlFor: "".concat(n, "-commit"),
                          className: "text-xs text-muted",
                          children: [
                            "Commit ",
                            c.v0,
                            " to round #",
                            P.id.toString(),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "mt-1.5 flex items-center gap-2 rounded-xl border border-rule bg-bg/60 px-3 focus-within:border-upside",
                          children: [
                            (0, a.jsx)("input", {
                              id: "".concat(n, "-commit"),
                              inputMode: "decimal",
                              value: w,
                              onChange: (e) => T(e.target.value),
                              disabled: j.busy || !u.canWrite,
                              "aria-invalid": D || void 0,
                              "aria-describedby": "".concat(n, "-commit-hint"),
                              className:
                                "h-11 w-full min-w-0 bg-transparent font-mono text-base text-fg outline-none tnum placeholder:text-dim disabled:opacity-50",
                              placeholder: "0.0",
                            }),
                            (0, a.jsx)("span", {
                              className: "font-mono text-xs text-muted",
                              children: c.v0,
                            }),
                            void 0 !== C.talisBalance
                              ? (0, a.jsx)("button", {
                                  type: "button",
                                  onClick: () =>
                                    T(
                                      (0, g.ej)(C.talisBalance, 18, {
                                        grouping: !1,
                                      })
                                    ),
                                  disabled: j.busy,
                                  className:
                                    "h-6 rounded-pill border border-rule px-2 text-[11px] text-muted hover:border-fg hover:text-fg disabled:opacity-50",
                                  children: "Max",
                                })
                              : null,
                          ],
                        }),
                        (0, a.jsxs)("p", {
                          id: "".concat(n, "-commit-hint"),
                          className: (0, d.cn)(
                            "mt-1.5 font-mono text-[11px] tnum",
                            D ? "text-warning" : "text-muted"
                          ),
                          children: [
                            "Min ",
                            (0, y.qX)(C.minCommit),
                            void 0 !== C.talisBalance
                              ? " \xb7 balance ".concat(
                                  (0, y.qX)(C.talisBalance)
                                )
                              : "",
                            F
                              ? (0, a.jsxs)("span", {
                                  className: "text-fg",
                                  children: [
                                    " \xb7 this commit crosses the round at ",
                                    (0, y.kG)(E),
                                  ],
                                })
                              : null,
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("label", {
                      className:
                        "flex items-center gap-2 text-[11px] text-muted",
                      children: [
                        (0, a.jsx)("input", {
                          type: "checkbox",
                          checked: "max" === k,
                          onChange: (e) =>
                            M(e.target.checked ? "max" : "exact"),
                          disabled: j.busy,
                          className: "size-3.5 accent-accent",
                        }),
                        "Approve unlimited ",
                        c.v0,
                        " to the auction (default: the exact amount)",
                      ],
                    }),
                    (0, a.jsx)(r.$n, {
                      type: "submit",
                      variant: "upside",
                      size: "md",
                      disabled: !O || j.busy,
                      title: t,
                      className: "w-full min-w-0",
                      children: (0, a.jsx)("span", {
                        className: "min-w-0 whitespace-normal leading-tight",
                        children: j.busy
                          ? "Sending…"
                          : B
                          ? "Approve ".concat(c.v0, " → Commit")
                          : "Commit",
                      }),
                    }),
                    t
                      ? (0, a.jsx)("p", {
                          className: "text-center text-[11px] text-muted",
                          children: t,
                        })
                      : null,
                    (0, a.jsx)(o.R, { tx: j }),
                    (0, a.jsxs)("p", {
                      className: "text-[11px] leading-relaxed text-muted",
                      children: [
                        "Every seller receives the uniform clearing price pro rata; bought ",
                        c.v0,
                        " is burned in finalize(); proceeds and unfilled ",
                        c.v0,
                        " are pulled with claim().",
                      ],
                    }),
                  ],
                })
              : null,
            (0, a.jsx)(N.xb, {
              id: "procurement-finalize",
              label: "Finalize round",
              step: R ? (0, f.R$)(S) : void 0,
              reason: P
                ? i > 0
                  ? "Finalizable once crossed or after the end (".concat(
                      (0, y.vV)(P.end - i),
                      ")"
                    )
                  : "Reading the clock…"
                : "No round is open",
              detail: "burns the bought ".concat(c.v0, " \xb7 permissionless"),
            }),
          ],
        });
      }
      function M() {
        var e;
        let t = (0, l.f)(1e3),
          n = (0, b.d)(),
          i = (0, x.ZZ)(),
          d = (0, v.vr)(),
          [u, c] = (0, s.useState)(null),
          p = null == (e = (0, m.SG)()) ? void 0 : e.procurement,
          h = i.data;
        return i.isError
          ? (0, a.jsx)(N.F_, { error: i.error, what: "Rounds" })
          : h && p
          ? 0 === h.rounds.length
            ? (0, a.jsx)("p", {
                className: "leading-relaxed",
                children:
                  "No procurement rounds yet. The ledger accrues in available() until the owner opens one.",
              })
            : (0, a.jsxs)("div", {
                className: "flex flex-col gap-3",
                children: [
                  (0, a.jsxs)(r.XI, {
                    children: [
                      (0, a.jsx)(r.D1, {
                        children: (0, a.jsxs)("tr", {
                          children: [
                            (0, a.jsx)(r.TH, { children: "Round" }),
                            (0, a.jsx)(r.TH, {
                              align: "right",
                              children: "Clearing",
                            }),
                            (0, a.jsx)(r.TH, {
                              align: "right",
                              children: "Bought",
                            }),
                            (0, a.jsx)(r.TH, {
                              align: "right",
                              children: "Spent",
                            }),
                            (0, a.jsx)(r.TH, {
                              align: "right",
                              children: "Your fill",
                            }),
                            (0, a.jsx)(r.TH, {
                              align: "right",
                              children: "Proceeds",
                            }),
                            (0, a.jsx)(r.TH, {
                              align: "right",
                              children: "Unfilled",
                            }),
                            (0, a.jsx)(r.TH, {
                              align: "right",
                              children: "Claim",
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)(r.vc, {
                        children: h.rounds.map((e) => {
                          let i = e.cancelled
                              ? { label: "Cancelled", tone: "neutral" }
                              : e.finalized
                              ? { label: "Finalized", tone: "income" }
                              : e.crossed
                              ? { label: "Crossed", tone: "success" }
                              : t > 0 && t >= e.end
                              ? {
                                  label: "Ended \xb7 awaiting finalize",
                                  tone: "warning",
                                }
                              : { label: "Open", tone: "upside" },
                            s = h.mine[e.id.toString()],
                            l =
                              !!s &&
                              e.finalized &&
                              !s.claimed &&
                              s.proceeds + s.unfilled > 0n,
                            o = s
                              ? s.claimed
                                ? "claimed"
                                : e.finalized
                                ? 0n === s.committed
                                  ? "no commit"
                                  : "nothing to claim"
                                : "not finalized"
                              : "—";
                          return (0, a.jsxs)(
                            r.TR,
                            {
                              children: [
                                (0, a.jsx)(r.TD, {
                                  children: (0, a.jsxs)("span", {
                                    className: "flex flex-col gap-0.5",
                                    children: [
                                      (0, a.jsxs)("span", {
                                        className: "font-mono tnum",
                                        children: ["#", e.id.toString()],
                                      }),
                                      (0, a.jsx)(r.Ex, {
                                        tone: i.tone,
                                        className: "h-5 px-2 text-[10px]",
                                        children: i.label,
                                      }),
                                    ],
                                  }),
                                }),
                                (0, a.jsx)(r.TD, {
                                  mono: !0,
                                  align: "right",
                                  children:
                                    e.finalized || e.crossed
                                      ? (0, y.kG)(e.clearingPrice)
                                      : ""
                                          .concat((0, y.kG)(e.startPrice), "→")
                                          .concat((0, y.kG)(e.ceilingPrice)),
                                }),
                                (0, a.jsx)(r.TD, {
                                  mono: !0,
                                  align: "right",
                                  children: e.finalized
                                    ? (0, y.qX)(e.boughtUnits, {
                                        symbol: !1,
                                        maxFraction: 0,
                                      })
                                    : "—",
                                }),
                                (0, a.jsx)(r.TD, {
                                  mono: !0,
                                  align: "right",
                                  children: e.finalized
                                    ? (0, y.Gy)(e.spent, { symbol: !1 })
                                    : "—",
                                }),
                                (0, a.jsx)(r.TD, {
                                  mono: !0,
                                  align: "right",
                                  children: s
                                    ? e.finalized
                                      ? (0, y.qX)(s.fill, {
                                          symbol: !1,
                                          maxFraction: 0,
                                        })
                                      : s.committed > 0n
                                      ? "".concat(
                                          (0, y.qX)(s.committed, {
                                            symbol: !1,
                                            maxFraction: 0,
                                          }),
                                          " committed"
                                        )
                                      : "—"
                                    : "—",
                                }),
                                (0, a.jsx)(r.TD, {
                                  mono: !0,
                                  align: "right",
                                  children:
                                    s && e.finalized
                                      ? (0, y.Gy)(s.proceeds, { symbol: !1 })
                                      : "—",
                                }),
                                (0, a.jsx)(r.TD, {
                                  mono: !0,
                                  align: "right",
                                  children:
                                    s && e.finalized
                                      ? (0, y.qX)(s.unfilled, {
                                          symbol: !1,
                                          maxFraction: 0,
                                        })
                                      : "—",
                                }),
                                (0, a.jsx)(r.TD, {
                                  align: "right",
                                  children: l
                                    ? (0, a.jsxs)("span", {
                                        className:
                                          "inline-flex flex-col items-end gap-1",
                                        children: [
                                          (0, a.jsx)(r.$n, {
                                            size: "sm",
                                            variant: "secondary",
                                            disabled: !n.canWrite || d.busy,
                                            title: n.reason,
                                            onClick: () => {
                                              c(e.id.toString()),
                                                d.send((0, f.PA)(p, e.id));
                                            },
                                            children:
                                              d.busy && u === e.id.toString()
                                                ? "Sending…"
                                                : "Claim",
                                          }),
                                          n.canWrite
                                            ? null
                                            : (0, a.jsx)("span", {
                                                className:
                                                  "text-[11px] text-muted",
                                                children: n.reason,
                                              }),
                                        ],
                                      })
                                    : (0, a.jsx)("span", {
                                        className: "text-[11px] text-muted",
                                        children: o,
                                      }),
                                }),
                              ],
                            },
                            e.id.toString()
                          );
                        }),
                      }),
                    ],
                  }),
                  "idle" !== d.status
                    ? (0, a.jsx)(o.R, { tx: d, hideSteps: !0 })
                    : null,
                  (0, a.jsxs)("p", {
                    className: "text-[11px] text-muted",
                    children: [
                      "The last ",
                      h.rounds.length,
                      " of ",
                      h.roundCount.toString(),
                      " rounds. Σ floor fills can trail the bought units by a wei per seller (dust stays in the contract).",
                    ],
                  }),
                ],
              })
          : (0, a.jsx)("p", { children: "Reading rounds…" });
      }
    },
    52061: (e, t, n) => {
      "use strict";
      n.d(t, { Mp: () => d, Pl: () => u, ej: () => l, oZ: () => s });
      let a = new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        i = new Intl.NumberFormat("en-US", {
          maximumSignificantDigits: 4,
          notation: "standard",
        });
      function s(e) {
        if (void 0 === e || !Number.isFinite(e)) return "—";
        let t = e < 0 ? "−" : "",
          n = Math.abs(e);
        return 0 === n
          ? "$0.00"
          : n >= 1
          ? "".concat(t, "$").concat(a.format(n))
          : n >= 0.01
          ? "".concat(t, "$").concat(n.toFixed(4))
          : "".concat(t, "$").concat(i.format(n));
      }
      let r = [
        [1e12, "T"],
        [1e9, "B"],
        [1e6, "M"],
        [1e3, "K"],
      ];
      function l(e) {
        if (void 0 === e || !Number.isFinite(e)) return "—";
        let t = e < 0 ? "−" : "",
          n = Math.abs(e);
        for (let e = 0; e < r.length; e++) {
          let [a, i] = r[e];
          if (n < a) continue;
          let s = Math.round((n / a) * 10) / 10;
          if (s >= 1e3 && e > 0) {
            let [a, i] = r[e - 1];
            return ""
              .concat(t, "$")
              .concat(o((Math.round((n / a) * 10) / 10).toFixed(1)))
              .concat(i);
          }
          return ""
            .concat(t, "$")
            .concat(o(s.toFixed(1)))
            .concat(i);
        }
        return "".concat(t, "$").concat(Math.round(n).toLocaleString("en-US"));
      }
      function o(e) {
        return e.endsWith(".0") ? e.slice(0, -2) : e;
      }
      function d(e) {
        if (void 0 === e || !Number.isFinite(e)) return "—";
        let t = "".concat(Math.abs(e).toFixed(1), "%");
        return "0.0%" === t
          ? t
          : e < 0
          ? "".concat("−").concat(t)
          : "+".concat(t);
      }
      function u(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 9;
        if (void 0 === e || !Number.isFinite(e)) return "—";
        let n = e.toFixed(t).replace(/\.?0+$/, "");
        return "".concat("" === n || "-" === n ? "0" : n, " ETH");
      }
    },
    61931: (e, t, n) => {
      "use strict";
      n.d(t, { StakingLiveStrip: () => h });
      var a = n(72133),
        i = n(84520),
        s = n(35476),
        r = n(91109),
        l = n(29142),
        o = n(36811),
        d = n(87457),
        u = n(35208),
        c = n(66450),
        p = n(42105),
        m = n(71808),
        y = n(36901),
        x = n(90808);
      function h(e) {
        var t;
        let { className: n } = e,
          h = (0, s.f)(1e3),
          b = (0, y.vT)(),
          f = (0, c.e9)(),
          g = (0, c.K9)(),
          v = null == (t = (0, d.SG)()) ? void 0 : t.staking;
        if (!l.KO) return (0, a.jsx)(x.En, { className: n });
        if (!d.YS) return null;
        let j = f.data,
          w = g.data,
          N = !!j && h > 0 && h >= j.periodFinish,
          T = j ? (0, p.p9)(j.rewardRate, j.periodFinish, h || void 0) : void 0,
          k = j && h > 0 ? (0, p.ik)(j.rewardRate, j.periodFinish, h) : void 0,
          M = j && w ? (0, p.OF)(w.weight, j.totalWeight) : void 0,
          S =
            j && w
              ? (0, p.IW)(w.weight, j.totalWeight, N ? 0n : j.rewardRate)
              : void 0,
          C = j ? j.fresh + j.undistributed : 0n,
          P = !!j && C >= 1000000n;
        return (0, a.jsx)("div", {
          className: (0, r.cn)(
            "rounded-card border border-line bg-panel p-4",
            n
          ),
          children: f.isError
            ? (0, a.jsx)(x.F_, { error: f.error, what: "Staking" })
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)("div", {
                    className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                    children: [
                      (0, a.jsx)(i.$k, {
                        label: "Total weight",
                        value: j ? (0, u.VA)(j.totalWeight) : "…",
                        sub: "Σ staked \xd7 multiplier",
                      }),
                      (0, a.jsx)(i.$k, {
                        label: "USDG / week at the current drip",
                        value: j ? (0, u.Gy)(T, { symbol: !1 }) : "…",
                        sub: j
                          ? N
                            ? "drip ended \xb7 waits for the next sync"
                            : "drip ends "
                                .concat((0, u.D8)(j.periodFinish, h))
                                .concat(
                                  void 0 !== k
                                    ? " \xb7 ".concat(
                                        (0, u.Gy)(k),
                                        " left in it"
                                      )
                                    : ""
                                )
                          : void 0,
                        tone: "income",
                      }),
                      (0, a.jsx)(i.$k, {
                        label: "Your share of the drip",
                        value: b.address
                          ? w && void 0 !== M
                            ? (0, o.Oe)(M, { signed: !1, decimals: 2 })
                            : g.isError
                            ? "—"
                            : "…"
                          : "—",
                        sub: w
                          ? "weight ".concat((0, u.VA)(w.weight))
                          : "connect a wallet",
                      }),
                      (0, a.jsx)(i.$k, {
                        label: "Indicative, at the current drip",
                        value:
                          w && void 0 !== S
                            ? "≈ ".concat((0, u.Gy)(S, { symbol: !1 }))
                            : "—",
                        sub: "USDG / week \xb7 indicative \xb7 current drip \xb7 not a yield promise",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "mt-3 flex flex-wrap items-center justify-between gap-3",
                    children: [
                      (0, a.jsx)(x.aT, {
                        asOf: f.asOf,
                        isFetching: f.isFetching,
                        onRefetch: f.refetch,
                      }),
                      j
                        ? (0, a.jsx)(x.xb, {
                            id: "staking-sync",
                            label: "Sync rewards",
                            step: P && v ? (0, m.eo)(v) : void 0,
                            reason:
                              C > 0n
                                ? ""
                                    .concat((0, u.Gy)(j.fresh), " fresh + ")
                                    .concat(
                                      (0, u.Gy)(j.undistributed),
                                      " carried; sync folds in ≥ 1 USDG"
                                    )
                                : "No USDG received since the last sync",
                            detail: ""
                              .concat((0, u.Gy)(j.fresh), " fresh \xb7 ")
                              .concat(
                                (0, u.Gy)(j.undistributed),
                                " carried \xb7 permissionless"
                              ),
                            quiet: !0,
                          })
                        : null,
                    ],
                  }),
                ],
              }),
        });
      }
    },
    66450: (e, t, n) => {
      "use strict";
      n.d(t, {
        X7: () => O,
        __: () => E,
        fu: () => B,
        ZZ: () => R,
        ks: () => A,
        e9: () => C,
        K9: () => P,
      });
      var a = n(90756),
        i = n(34201),
        s = n(50625),
        r = n(32916),
        l = n(37762),
        o = n(89764);
      let d = [
          {
            type: "function",
            name: "BACKSTOP_TARGET",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "QUEUE_DELAY",
            inputs: [],
            outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "cancelCompensate",
            inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "executeCompensate",
            inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
            outputs: [
              { name: "distributor", type: "address", internalType: "address" },
            ],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "factory",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "pullTreasury",
            inputs: [],
            outputs: [
              { name: "amount", type: "uint256", internalType: "uint256" },
            ],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "queueCompensate",
            inputs: [
              { name: "series", type: "address", internalType: "address" },
              { name: "amount", type: "uint256", internalType: "uint256" },
            ],
            outputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "queueLength",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "queued",
            inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
            outputs: [
              {
                name: "",
                type: "tuple",
                internalType: "struct IBackstop.Queued",
                components: [
                  { name: "series", type: "address", internalType: "address" },
                  { name: "amount", type: "uint128", internalType: "uint128" },
                  {
                    name: "executeAfter",
                    type: "uint64",
                    internalType: "uint64",
                  },
                  { name: "done", type: "bool", internalType: "bool" },
                ],
              },
            ],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "reserve",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "sweepAboveTarget",
            inputs: [],
            outputs: [
              { name: "amount", type: "uint256", internalType: "uint256" },
            ],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "treasury",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "treasuryOwed",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "usdg",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "event",
            name: "CompensationCancelled",
            inputs: [
              {
                name: "id",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "CompensationExecuted",
            inputs: [
              {
                name: "id",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "series",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "distributor",
                type: "address",
                indexed: !1,
                internalType: "address",
              },
              {
                name: "amount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "denominator",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "CompensationQueued",
            inputs: [
              {
                name: "id",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "series",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "amount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "executeAfter",
                type: "uint64",
                indexed: !1,
                internalType: "uint64",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "SweptToTreasury",
            inputs: [
              {
                name: "amount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "TreasuryPulled",
            inputs: [
              {
                name: "amount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          { type: "error", name: "AlreadyDone", inputs: [] },
          { type: "error", name: "BadId", inputs: [] },
          { type: "error", name: "InsufficientReserve", inputs: [] },
          { type: "error", name: "NotASeries", inputs: [] },
          { type: "error", name: "NotTreasury", inputs: [] },
          { type: "error", name: "NothingOwed", inputs: [] },
          { type: "error", name: "NothingToCompensate", inputs: [] },
          { type: "error", name: "NothingToSweep", inputs: [] },
          { type: "error", name: "QueueNotElapsed", inputs: [] },
          { type: "error", name: "ZeroAmount", inputs: [] },
        ],
        u = [
          {
            type: "function",
            name: "MAX_CEILING_MULT",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "MAX_DURATION",
            inputs: [],
            outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "MIN_BUDGET",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "MIN_COMMIT",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "MIN_DURATION",
            inputs: [],
            outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "PRICE_UNIT",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "activeRoundId",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "available",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "cancelRound",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "claim",
            inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
            outputs: [
              { name: "proceeds", type: "uint256", internalType: "uint256" },
              { name: "returned", type: "uint256", internalType: "uint256" },
            ],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "claimed",
            inputs: [
              { name: "id", type: "uint256", internalType: "uint256" },
              { name: "who", type: "address", internalType: "address" },
            ],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "commit",
            inputs: [
              { name: "units", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "committedOf",
            inputs: [
              { name: "id", type: "uint256", internalType: "uint256" },
              { name: "who", type: "address", internalType: "address" },
            ],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "currentPrice",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "fillOf",
            inputs: [
              { name: "id", type: "uint256", internalType: "uint256" },
              { name: "who", type: "address", internalType: "address" },
            ],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "finalize",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "openRound",
            inputs: [
              { name: "startPrice", type: "uint256", internalType: "uint256" },
              {
                name: "ceilingPrice",
                type: "uint256",
                internalType: "uint256",
              },
              { name: "duration", type: "uint64", internalType: "uint64" },
              { name: "budget", type: "uint256", internalType: "uint256" },
            ],
            outputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "priceAt",
            inputs: [
              { name: "id", type: "uint256", internalType: "uint256" },
              { name: "t", type: "uint64", internalType: "uint64" },
            ],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "proceedsOf",
            inputs: [
              { name: "id", type: "uint256", internalType: "uint256" },
              { name: "who", type: "address", internalType: "address" },
            ],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "roundCount",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "rounds",
            inputs: [{ name: "id", type: "uint256", internalType: "uint256" }],
            outputs: [
              {
                name: "",
                type: "tuple",
                internalType: "struct IProcurementAuction.Round",
                components: [
                  {
                    name: "startPrice",
                    type: "uint128",
                    internalType: "uint128",
                  },
                  {
                    name: "ceilingPrice",
                    type: "uint128",
                    internalType: "uint128",
                  },
                  { name: "start", type: "uint64", internalType: "uint64" },
                  { name: "end", type: "uint64", internalType: "uint64" },
                  { name: "budget", type: "uint128", internalType: "uint128" },
                  {
                    name: "committed",
                    type: "uint128",
                    internalType: "uint128",
                  },
                  {
                    name: "clearingPrice",
                    type: "uint128",
                    internalType: "uint128",
                  },
                  {
                    name: "boughtUnits",
                    type: "uint128",
                    internalType: "uint128",
                  },
                  { name: "spent", type: "uint128", internalType: "uint128" },
                  {
                    name: "heldForReturn",
                    type: "uint128",
                    internalType: "uint128",
                  },
                  { name: "crossed", type: "bool", internalType: "bool" },
                  { name: "finalized", type: "bool", internalType: "bool" },
                  { name: "cancelled", type: "bool", internalType: "bool" },
                ],
              },
            ],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "talis",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "unfilledOf",
            inputs: [
              { name: "id", type: "uint256", internalType: "uint256" },
              { name: "who", type: "address", internalType: "address" },
            ],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "usdg",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "event",
            name: "Claimed",
            inputs: [
              {
                name: "id",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "who",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "fill",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "proceeds",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "returned",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "Committed",
            inputs: [
              {
                name: "id",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "who",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "units",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "committed",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "price",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "crossed",
                type: "bool",
                indexed: !1,
                internalType: "bool",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "RoundCancelled",
            inputs: [
              {
                name: "id",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "RoundFinalized",
            inputs: [
              {
                name: "id",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "clearingPrice",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "boughtUnits",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "spent",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "RoundOpened",
            inputs: [
              {
                name: "id",
                type: "uint256",
                indexed: !0,
                internalType: "uint256",
              },
              {
                name: "startPrice",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "ceilingPrice",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "start",
                type: "uint64",
                indexed: !1,
                internalType: "uint64",
              },
              {
                name: "end",
                type: "uint64",
                indexed: !1,
                internalType: "uint64",
              },
              {
                name: "budget",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          { type: "error", name: "AlreadyClaimed", inputs: [] },
          { type: "error", name: "BadBounds", inputs: [] },
          { type: "error", name: "BelowMinCommit", inputs: [] },
          { type: "error", name: "BudgetUnavailable", inputs: [] },
          { type: "error", name: "HasCommits", inputs: [] },
          { type: "error", name: "NoActiveRound", inputs: [] },
          { type: "error", name: "NotFinalizable", inputs: [] },
          { type: "error", name: "NotFinalized", inputs: [] },
          { type: "error", name: "NothingToClaim", inputs: [] },
          { type: "error", name: "RoundActive", inputs: [] },
          { type: "error", name: "RoundCrossed", inputs: [] },
          { type: "error", name: "RoundEnded", inputs: [] },
        ],
        c = [
          {
            type: "function",
            name: "BACKSTOP_BPS",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "BACKSTOP_TARGET",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "BUYBACK_BPS",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "STAKERS_BPS",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "TREASURY_BPS",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "acceptsFee",
            inputs: [],
            outputs: [{ name: "", type: "bytes4", internalType: "bytes4" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "backstop",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "buyback",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "distribute",
            inputs: [],
            outputs: [
              { name: "amount", type: "uint256", internalType: "uint256" },
            ],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "owedBackstop",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "owedBuyback",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "owedStakers",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "owedTreasury",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "pullBackstop",
            inputs: [],
            outputs: [
              { name: "amount", type: "uint256", internalType: "uint256" },
            ],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "pullBuyback",
            inputs: [],
            outputs: [
              { name: "amount", type: "uint256", internalType: "uint256" },
            ],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "pullStakers",
            inputs: [],
            outputs: [
              { name: "amount", type: "uint256", internalType: "uint256" },
            ],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "pullTreasury",
            inputs: [],
            outputs: [
              { name: "amount", type: "uint256", internalType: "uint256" },
            ],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "staking",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "treasury",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "undistributed",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "usdg",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "event",
            name: "Distributed",
            inputs: [
              {
                name: "amount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "stakers",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "buyback",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "backstop",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "treasury",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "redirect",
                type: "bool",
                indexed: !1,
                internalType: "bool",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "Pulled",
            inputs: [
              {
                name: "recipient",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "amount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          { type: "error", name: "NotAContract", inputs: [] },
          { type: "error", name: "NotTreasury", inputs: [] },
          { type: "error", name: "NothingOwed", inputs: [] },
          { type: "error", name: "NothingToDistribute", inputs: [] },
          { type: "error", name: "ZeroAddress", inputs: [] },
        ],
        p = [
          {
            type: "function",
            name: "amount",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "backstop",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "claim",
            inputs: [],
            outputs: [
              { name: "paid", type: "uint256", internalType: "uint256" },
            ],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "claimed",
            inputs: [{ name: "who", type: "address", internalType: "address" }],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "denominator",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "owedOf",
            inputs: [{ name: "who", type: "address", internalType: "address" }],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "paidTotal",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "series",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "shareOf",
            inputs: [{ name: "who", type: "address", internalType: "address" }],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "usdg",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "event",
            name: "Claimed",
            inputs: [
              {
                name: "who",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "share",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "paid",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          { type: "error", name: "AlreadyClaimed", inputs: [] },
          { type: "error", name: "Exhausted", inputs: [] },
          { type: "error", name: "NothingOwed", inputs: [] },
          { type: "error", name: "NothingToCompensate", inputs: [] },
          { type: "error", name: "ZeroAmount", inputs: [] },
        ],
        m = [
          {
            type: "function",
            name: "COOLDOWN",
            inputs: [],
            outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "DRIP",
            inputs: [],
            outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "MIN_PRIORITY_STAKE",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "MIN_STAKE",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "MIN_SYNC",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "claim",
            inputs: [],
            outputs: [
              { name: "paid", type: "uint256", internalType: "uint256" },
            ],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "earned",
            inputs: [{ name: "who", type: "address", internalType: "address" }],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "extend",
            inputs: [
              {
                name: "tier",
                type: "uint8",
                internalType: "enum IStaking.Tier",
              },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "hasPriority",
            inputs: [{ name: "who", type: "address", internalType: "address" }],
            outputs: [{ name: "", type: "bool", internalType: "bool" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "lockDays",
            inputs: [
              {
                name: "tier",
                type: "uint8",
                internalType: "enum IStaking.Tier",
              },
            ],
            outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
            stateMutability: "pure",
          },
          {
            type: "function",
            name: "lockedWeight",
            inputs: [{ name: "who", type: "address", internalType: "address" }],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "periodFinish",
            inputs: [],
            outputs: [{ name: "", type: "uint64", internalType: "uint64" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "positionOf",
            inputs: [{ name: "who", type: "address", internalType: "address" }],
            outputs: [
              {
                name: "",
                type: "tuple",
                internalType: "struct IStaking.Position",
                components: [
                  { name: "staked", type: "uint128", internalType: "uint128" },
                  {
                    name: "pendingUnstake",
                    type: "uint128",
                    internalType: "uint128",
                  },
                  { name: "lockEnd", type: "uint64", internalType: "uint64" },
                  { name: "unstakeAt", type: "uint64", internalType: "uint64" },
                  {
                    name: "tier",
                    type: "uint8",
                    internalType: "enum IStaking.Tier",
                  },
                ],
              },
            ],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "requestUnstake",
            inputs: [
              { name: "amount", type: "uint256", internalType: "uint256" },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "rewardRate",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "rewardReserve",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "stake",
            inputs: [
              { name: "amount", type: "uint256", internalType: "uint256" },
              {
                name: "tier",
                type: "uint8",
                internalType: "enum IStaking.Tier",
              },
            ],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "sync",
            inputs: [],
            outputs: [
              { name: "fresh", type: "uint256", internalType: "uint256" },
            ],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "talis",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "totalWeight",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "undistributed",
            inputs: [],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "unstake",
            inputs: [],
            outputs: [],
            stateMutability: "nonpayable",
          },
          {
            type: "function",
            name: "usdg",
            inputs: [],
            outputs: [{ name: "", type: "address", internalType: "address" }],
            stateMutability: "view",
          },
          {
            type: "function",
            name: "weightBps",
            inputs: [
              {
                name: "tier",
                type: "uint8",
                internalType: "enum IStaking.Tier",
              },
            ],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "pure",
          },
          {
            type: "function",
            name: "weightOf",
            inputs: [{ name: "who", type: "address", internalType: "address" }],
            outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
            stateMutability: "view",
          },
          {
            type: "event",
            name: "Extended",
            inputs: [
              {
                name: "user",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "tier",
                type: "uint8",
                indexed: !1,
                internalType: "enum IStaking.Tier",
              },
              {
                name: "lockEnd",
                type: "uint64",
                indexed: !1,
                internalType: "uint64",
              },
              {
                name: "weight",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "RevenueSynced",
            inputs: [
              {
                name: "fresh",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "rewardRate",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "periodFinish",
                type: "uint64",
                indexed: !1,
                internalType: "uint64",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "RewardPaid",
            inputs: [
              {
                name: "user",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "amount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "Staked",
            inputs: [
              {
                name: "user",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "amount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "tier",
                type: "uint8",
                indexed: !1,
                internalType: "enum IStaking.Tier",
              },
              {
                name: "lockEnd",
                type: "uint64",
                indexed: !1,
                internalType: "uint64",
              },
              {
                name: "weight",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "UnstakeRequested",
            inputs: [
              {
                name: "user",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "amount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
              {
                name: "unstakeAt",
                type: "uint64",
                indexed: !1,
                internalType: "uint64",
              },
              {
                name: "weight",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          {
            type: "event",
            name: "Unstaked",
            inputs: [
              {
                name: "user",
                type: "address",
                indexed: !0,
                internalType: "address",
              },
              {
                name: "amount",
                type: "uint256",
                indexed: !1,
                internalType: "uint256",
              },
            ],
            anonymous: !1,
          },
          { type: "error", name: "AmountExceedsStake", inputs: [] },
          { type: "error", name: "BadTier", inputs: [] },
          { type: "error", name: "BelowMinStake", inputs: [] },
          { type: "error", name: "CooldownActive", inputs: [] },
          { type: "error", name: "NoPosition", inputs: [] },
          { type: "error", name: "NothingPending", inputs: [] },
          { type: "error", name: "NothingToClaim", inputs: [] },
          { type: "error", name: "StillLocked", inputs: [] },
          { type: "error", name: "TierNotHigher", inputs: [] },
          { type: "error", name: "ZeroAmount", inputs: [] },
        ];
      var y = n(4023),
        x = n(29142),
        h = n(93617),
        b = n(36901),
        f = n(87457);
      function g(e) {
        return {
          data: e.data,
          isPending: e.isPending,
          isError: e.isError,
          error: e.error,
          asOf: e.dataUpdatedAt ? Math.floor(e.dataUpdatedAt / 1e3) : 0,
          isFetching: e.isFetching,
          refetch: () => void e.refetch(),
        };
      }
      function v(e) {
        let t = (0, o.B)(e, { chainId: x.bQ });
        if (!t) throw Error("No RPC client");
        return t;
      }
      function j(e, t, n) {
        let a = e[t];
        if (!a || "success" !== a.status)
          throw a && "failure" === a.status
            ? a.error
            : Error("read failed: ".concat(n));
        return a.result;
      }
      function w(e) {
        return "bigint" == typeof e ? e : BigInt(e);
      }
      function N(e) {
        return Number(e);
      }
      async function T(e, t) {
        return 0 === t.length
          ? []
          : await e.multicall({ allowFailure: !0, contracts: t });
      }
      function k() {
        var e, t;
        return null != (t = null == (e = (0, f.SG)()) ? void 0 : e.talis)
          ? t
          : x.CV.address;
      }
      function M(e) {
        let t = (0, b.qK)(),
          { address: n } = (0, r.F)();
        return null != e ? e : t ? n : void 0;
      }
      function S(e, t, n) {
        var i, s;
        let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          o = (0, l.U)(),
          d = (0, b.qK)(),
          u = (0, f.SG)();
        return g(
          (0, a.I)({
            queryKey: h.y.read(
              x.bQ,
              null != (i = null == u ? void 0 : u.staking) ? i : "0x",
              "phase1:".concat(e),
              null == t ? void 0 : t.toLowerCase()
            ),
            queryFn: () => n(v(o)),
            enabled: x.KO && f.YS && d && (null == (s = r.enabled) || s),
            staleTime: 15e3,
            refetchInterval: 3e4,
          })
        );
      }
      function C() {
        let e = (0, f.SG)();
        return S("staking-overview", void 0, async (t) => {
          let n = e.staking,
            a = await T(t, [
              { address: n, abi: m, functionName: "totalWeight" },
              { address: n, abi: m, functionName: "rewardRate" },
              { address: n, abi: m, functionName: "periodFinish" },
              { address: n, abi: m, functionName: "rewardReserve" },
              { address: n, abi: m, functionName: "undistributed" },
              { address: n, abi: m, functionName: "MIN_PRIORITY_STAKE" },
              { address: n, abi: m, functionName: "DRIP" },
              { address: n, abi: m, functionName: "COOLDOWN" },
              {
                address: x.Bj,
                abi: y.ed,
                functionName: "balanceOf",
                args: [n],
              },
            ]),
            i = w(j(a, 3, "rewardReserve")),
            s = w(j(a, 8, "usdg.balanceOf(staking)"));
          return {
            totalWeight: w(j(a, 0, "totalWeight")),
            rewardRate: w(j(a, 1, "rewardRate")),
            periodFinish: N(j(a, 2, "periodFinish")),
            rewardReserve: i,
            undistributed: w(j(a, 4, "undistributed")),
            minPriorityStake: w(j(a, 5, "MIN_PRIORITY_STAKE")),
            drip: N(j(a, 6, "DRIP")),
            cooldown: N(j(a, 7, "COOLDOWN")),
            usdgBalance: s,
            fresh: s > i ? s - i : 0n,
          };
        });
      }
      function P(e) {
        let t = M(e),
          n = (0, f.SG)();
        return S(
          "staking-position",
          t,
          async (e) => {
            let a = n.staking,
              i = k(),
              s = await T(e, [
                { address: a, abi: m, functionName: "positionOf", args: [t] },
                { address: a, abi: m, functionName: "weightOf", args: [t] },
                { address: a, abi: m, functionName: "lockedWeight", args: [t] },
                { address: a, abi: m, functionName: "earned", args: [t] },
                { address: a, abi: m, functionName: "hasPriority", args: [t] },
                { address: i, abi: y.ed, functionName: "balanceOf", args: [t] },
                {
                  address: i,
                  abi: y.ed,
                  functionName: "allowance",
                  args: [t, a],
                },
              ]),
              r = j(s, 0, "positionOf");
            return {
              position: {
                staked: w(r.staked),
                pendingUnstake: w(r.pendingUnstake),
                lockEnd: N(r.lockEnd),
                unstakeAt: N(r.unstakeAt),
                tier: Math.min(3, Math.max(0, N(r.tier))),
              },
              weight: w(j(s, 1, "weightOf")),
              lockedWeight: w(j(s, 2, "lockedWeight")),
              earned: w(j(s, 3, "earned")),
              hasPriority: !!j(s, 4, "hasPriority"),
              talisBalance: w(j(s, 5, "talis.balanceOf")),
              talisAllowance: w(j(s, 6, "talis.allowance")),
            };
          },
          { enabled: !!t }
        );
      }
      function A() {
        let e = (0, f.SG)();
        return S("router", void 0, async (t) => {
          let n = e.router,
            a = await T(t, [
              { address: n, abi: c, functionName: "owedStakers" },
              { address: n, abi: c, functionName: "owedBuyback" },
              { address: n, abi: c, functionName: "owedBackstop" },
              { address: n, abi: c, functionName: "owedTreasury" },
              { address: n, abi: c, functionName: "undistributed" },
              { address: e.backstop, abi: d, functionName: "reserve" },
              { address: n, abi: c, functionName: "BACKSTOP_TARGET" },
            ]),
            i = w(j(a, 5, "backstop.reserve")),
            s = w(j(a, 6, "BACKSTOP_TARGET"));
          return {
            owedStakers: w(j(a, 0, "owedStakers")),
            owedBuyback: w(j(a, 1, "owedBuyback")),
            owedBackstop: w(j(a, 2, "owedBackstop")),
            owedTreasury: w(j(a, 3, "owedTreasury")),
            undistributed: w(j(a, 4, "undistributed")),
            backstopReserve: i,
            backstopTarget: s,
            redirect: i >= s,
          };
        });
      }
      function E() {
        let e = (0, f.SG)();
        return S("backstop", void 0, async (t) => {
          let n = e.backstop,
            a = await T(t, [
              { address: n, abi: d, functionName: "reserve" },
              { address: n, abi: d, functionName: "BACKSTOP_TARGET" },
              { address: n, abi: d, functionName: "treasuryOwed" },
              { address: n, abi: d, functionName: "QUEUE_DELAY" },
              { address: n, abi: d, functionName: "queueLength" },
            ]),
            i = w(j(a, 4, "queueLength")),
            s = i > BigInt(50) ? i - BigInt(50) : 0n,
            r = [];
          for (let e = i - 1n; e >= s; e--) r.push(e);
          let l = await T(
              t,
              r.map((e) => ({
                address: n,
                abi: d,
                functionName: "queued",
                args: [e],
              }))
            ),
            o = r.map((e, t) => {
              let n = j(l, t, "queued(".concat(e, ")"));
              return {
                id: e,
                series: n.series,
                amount: w(n.amount),
                executeAfter: N(n.executeAfter),
                done: !!n.done,
              };
            });
          return {
            reserve: w(j(a, 0, "reserve")),
            target: w(j(a, 1, "BACKSTOP_TARGET")),
            treasuryOwed: w(j(a, 2, "treasuryOwed")),
            queueDelay: N(j(a, 3, "QUEUE_DELAY")),
            queueLength: i,
            queue: o,
          };
        });
      }
      function O() {
        var e;
        let t = (0, l.U)(),
          n = (0, b.qK)(),
          s = (0, i.jE)(),
          r = (0, f.SG)(),
          o = h.y.read(
            x.bQ,
            null != (e = null == r ? void 0 : r.backstop) ? e : "0x",
            "phase1:backstop-distributors"
          );
        return g(
          (0, a.I)({
            queryKey: o,
            queryFn: async () => {
              var e, n;
              let a = v(t),
                i = r.backstop,
                l = s.getQueryData(o),
                u = await a.getBlockNumber(),
                c = l
                  ? l.scannedTo + 1n
                  : r.block
                  ? BigInt(r.block)
                  : u > 2000000n
                  ? u - 2000000n
                  : 0n;
              if (l && c > u) return l;
              let p = d.find(
                (e) => "event" === e.type && "CompensationExecuted" === e.name
              );
              if (!p) throw Error("CompensationExecuted not in the ABI");
              return {
                distributors: [
                  ...(
                    await a.getLogs({
                      address: i,
                      event: p,
                      fromBlock: c,
                      toBlock: u,
                    })
                  )
                    .map((e) => {
                      var t, n, a, i, s;
                      let r = null != (t = e.args) ? t : {};
                      return {
                        id: w(null != (n = r.id) ? n : 0n),
                        series: r.series,
                        distributor: r.distributor,
                        amount: w(null != (a = r.amount) ? a : 0n),
                        denominator: w(null != (i = r.denominator) ? i : 0n),
                        blockNumber: null != (s = e.blockNumber) ? s : 0n,
                      };
                    })
                    .filter((e) => !!e.distributor)
                    .reverse(),
                  ...(null != (e = null == l ? void 0 : l.distributors)
                    ? e
                    : []),
                ],
                scannedFrom:
                  null != (n = null == l ? void 0 : l.scannedFrom) ? n : c,
                scannedTo: u,
              };
            },
            enabled: x.KO && f.YS && n,
            staleTime: 3e5,
            refetchInterval: 3e5,
          })
        );
      }
      function B(e, t) {
        let n = M(t),
          a = (0, s.useMemo)(
            () => [...new Set(e.map((e) => e.toLowerCase()))],
            [e]
          );
        return S(
          "compensations:".concat(a.join(",")),
          n,
          async (e) => {
            let t = [];
            for (let e of a)
              t.push(
                { address: e, abi: p, functionName: "series" },
                { address: e, abi: p, functionName: "amount" },
                { address: e, abi: p, functionName: "denominator" },
                { address: e, abi: p, functionName: "paidTotal" }
              ),
                n &&
                  t.push(
                    { address: e, abi: p, functionName: "owedOf", args: [n] },
                    { address: e, abi: p, functionName: "shareOf", args: [n] },
                    { address: e, abi: p, functionName: "claimed", args: [n] }
                  );
            let i = await T(e, t),
              s = 4 + 3 * !!n,
              r = {};
            return (
              a.forEach((e, t) => {
                let a = t * s;
                r[e] = {
                  distributor: e,
                  series: j(i, a, "series"),
                  amount: w(j(i, a + 1, "amount")),
                  denominator: w(j(i, a + 2, "denominator")),
                  paidTotal: w(j(i, a + 3, "paidTotal")),
                  owedOf: n ? w(j(i, a + 4, "owedOf")) : 0n,
                  shareOf: n ? w(j(i, a + 5, "shareOf")) : 0n,
                  claimed: !!n && !!j(i, a + 6, "claimed"),
                };
              }),
              r
            );
          },
          { enabled: a.length > 0 }
        );
      }
      function F(e, t) {
        return {
          id: e,
          startPrice: w(t.startPrice),
          ceilingPrice: w(t.ceilingPrice),
          start: N(t.start),
          end: N(t.end),
          budget: w(t.budget),
          committed: w(t.committed),
          clearingPrice: w(t.clearingPrice),
          boughtUnits: w(t.boughtUnits),
          spent: w(t.spent),
          heldForReturn: w(t.heldForReturn),
          crossed: !!t.crossed,
          finalized: !!t.finalized,
          cancelled: !!t.cancelled,
        };
      }
      function R(e) {
        let t = M(e),
          n = (0, f.SG)();
        return S("procurement", t, async (e) => {
          let a,
            i = n.procurement,
            s = k(),
            r = await T(e, [
              { address: i, abi: u, functionName: "available" },
              { address: i, abi: u, functionName: "activeRoundId" },
              { address: i, abi: u, functionName: "roundCount" },
              { address: i, abi: u, functionName: "MIN_COMMIT" },
              ...(t
                ? [
                    {
                      address: s,
                      abi: y.ed,
                      functionName: "balanceOf",
                      args: [t],
                    },
                    {
                      address: s,
                      abi: y.ed,
                      functionName: "allowance",
                      args: [t, i],
                    },
                  ]
                : []),
            ]),
            l = w(j(r, 0, "available")),
            o = w(j(r, 1, "activeRoundId")),
            d = w(j(r, 2, "roundCount")),
            c = w(j(r, 3, "MIN_COMMIT")),
            p = t ? w(j(r, 4, "talis.balanceOf")) : void 0,
            m = t ? w(j(r, 5, "talis.allowance")) : void 0,
            x = d > BigInt(10) ? d - BigInt(10) + 1n : 1n,
            h = [];
          for (let e = d; e >= x && e >= 1n; e--) h.push(e);
          let b = d > BigInt(500) ? d - BigInt(500) + 1n : 1n,
            f = [];
          for (let e = x - 1n; e >= b && e >= 1n; e--) f.push(e);
          let g = h.map((e) => ({
            address: i,
            abi: u,
            functionName: "rounds",
            args: [e],
          }));
          if (
            (o > 0n &&
              g.push({ address: i, abi: u, functionName: "currentPrice" }),
            t)
          )
            for (let e of h)
              g.push(
                {
                  address: i,
                  abi: u,
                  functionName: "committedOf",
                  args: [e, t],
                },
                { address: i, abi: u, functionName: "fillOf", args: [e, t] },
                {
                  address: i,
                  abi: u,
                  functionName: "proceedsOf",
                  args: [e, t],
                },
                {
                  address: i,
                  abi: u,
                  functionName: "unfilledOf",
                  args: [e, t],
                },
                { address: i, abi: u, functionName: "claimed", args: [e, t] }
              );
          let v = g.length;
          for (let e of f)
            g.push({ address: i, abi: u, functionName: "rounds", args: [e] });
          let N = await T(e, g),
            M = h.map((e, t) => F(e, j(N, t, "rounds(".concat(e, ")")))),
            S = h.length;
          o > 0n && (a = w(j(N, S++, "currentPrice")));
          let C = {};
          t &&
            h.forEach((e, t) => {
              let n = S + 5 * t;
              C[e.toString()] = {
                committed: w(j(N, n, "committedOf")),
                fill: w(j(N, n + 1, "fillOf")),
                proceeds: w(j(N, n + 2, "proceedsOf")),
                unfilled: w(j(N, n + 3, "unfilledOf")),
                claimed: !!j(N, n + 4, "claimed"),
              };
            });
          let P = f.map((e, t) => F(e, j(N, v + t, "rounds(".concat(e, ")")))),
            A = M.find((e) => e.id === o);
          return {
            available: l,
            activeRoundId: o,
            active: A && void 0 !== a ? { ...A, priceNow: a } : void 0,
            roundCount: d,
            rounds: M,
            mine: C,
            minCommit: c,
            executed: [...M, ...P]
              .filter((e) => e.finalized)
              .reduce((e, t) => e + t.spent, 0n),
            executedRounds: M.length + P.length,
            executedComplete: 1n === b,
            talisBalance: p,
            talisAllowance: m,
          };
        });
      }
    },
    83754: (e, t, n) => {
      "use strict";
      n.d(t, { Flywheel: () => c });
      var a = n(72133),
        i = n(50625),
        s = n(84520),
        r = n(91109),
        l = n(33766);
      let o = Math.round(29084 / 925);
      function d(e, t) {
        let n = (e * Math.PI) / 180;
        return { x: 260 + t * Math.cos(n), y: 260 + t * Math.sin(n) };
      }
      function u(e) {
        return e.toFixed(2);
      }
      function c(e) {
        let { className: t } = e,
          n = (0, i.useRef)(null),
          c = l.tB.map((e, t) => ({ label: e, deg: -90 + 60 * t }));
        (0, i.useEffect)(() => {
          let e = n.current;
          if (!e || "function" != typeof e.pauseAnimations) return;
          let t = !0,
            a = () => {
              t && "visible" === document.visibilityState
                ? e.unpauseAnimations()
                : e.pauseAnimations();
            },
            i = new IntersectionObserver(
              (e) => {
                (t = e.some((e) => e.isIntersecting)), a();
              },
              { threshold: 0.05 }
            );
          return (
            i.observe(e),
            document.addEventListener("visibilitychange", a),
            a(),
            () => {
              i.disconnect(),
                document.removeEventListener("visibilitychange", a);
            }
          );
        }, []);
        let p = "M "
            .concat(260, " ")
            .concat(110, " A ")
            .concat(150, " ")
            .concat(150, " 0 1 1 ")
            .concat(260, " ")
            .concat(410, " A ")
            .concat(150, " ")
            .concat(150, " 0 1 1 ")
            .concat(260, " ")
            .concat(110),
          m = "The Talis flywheel: "
            .concat(l.tB.join(" → "), " → ")
            .concat(l.tB[0], ".");
        return (0, a.jsxs)("svg", {
          ref: n,
          viewBox: "0 0 ".concat(520, " ").concat(520),
          className: (0, r.cn)("mx-auto block h-auto w-full max-w-none", t),
          role: "img",
          "aria-label": m,
          children: [
            (0, a.jsxs)("defs", {
              children: [
                (0, a.jsx)("marker", {
                  id: "fw-arrow",
                  viewBox: "0 0 8 8",
                  refX: "6",
                  refY: "4",
                  markerWidth: "7",
                  markerHeight: "7",
                  orient: "auto-start-reverse",
                  children: (0, a.jsx)("path", {
                    d: "M0 0.5 L7.5 4 L0 7.5 Z",
                    className: "fill-upside-fill",
                  }),
                }),
                (0, a.jsxs)("radialGradient", {
                  id: "fw-glow",
                  cx: "50%",
                  cy: "50%",
                  r: "50%",
                  children: [
                    (0, a.jsx)("stop", {
                      offset: "0",
                      stopColor: "rgba(0,104,56,0.45)",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "0.6",
                      stopColor: "rgba(0,104,56,0.12)",
                    }),
                    (0, a.jsx)("stop", {
                      offset: "1",
                      stopColor: "rgba(0,104,56,0)",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("circle", {
              cx: 260,
              cy: 260,
              r: 210,
              fill: "url(#fw-glow)",
            }),
            (0, a.jsx)("circle", {
              cx: 260,
              cy: 260,
              r: 180,
              fill: "none",
              className: "stroke-line",
              strokeWidth: 0.75,
              strokeDasharray: "2 6",
            }),
            (0, a.jsx)("circle", {
              cx: 260,
              cy: 260,
              r: 116,
              fill: "none",
              className: "stroke-line",
              strokeWidth: 0.75,
            }),
            (0, a.jsx)("path", {
              id: "fw-ring",
              d: p,
              fill: "none",
              className: "stroke-income-fill",
              strokeWidth: 6,
              strokeOpacity: 0.9,
            }),
            c.map((e) =>
              (0, a.jsx)(
                "path",
                {
                  d: (function (e, t) {
                    let n = d(e, 150),
                      a = d(t, 150);
                    return "M "
                      .concat(u(n.x), " ")
                      .concat(u(n.y), " A ")
                      .concat(150, " ")
                      .concat(150, " 0 ")
                      .concat(+(t - e > 180), " 1 ")
                      .concat(u(a.x), " ")
                      .concat(u(a.y));
                  })(e.deg + 11, e.deg + 60 - 11),
                  fill: "none",
                  className: "stroke-income",
                  strokeWidth: 1.25,
                  strokeOpacity: 0.9,
                  markerEnd: "url(#fw-arrow)",
                },
                e.label
              )
            ),
            c.map((e) => {
              let t = d(e.deg, 150),
                n = d(e.deg, 184),
                i =
                  12 > Math.abs(n.x - 260)
                    ? "middle"
                    : n.x < 260
                    ? "end"
                    : "start",
                s = 12 > Math.abs(n.x - 260) ? (n.y < 260 ? -4 : 12) : 4;
              return (0, a.jsxs)(
                "g",
                {
                  children: [
                    (0, a.jsx)("circle", {
                      cx: t.x,
                      cy: t.y,
                      r: 11,
                      className: "fill-bg",
                    }),
                    (0, a.jsx)("circle", {
                      cx: t.x,
                      cy: t.y,
                      r: 7,
                      className: "fill-upside-fill",
                    }),
                    (0, a.jsx)("text", {
                      x: n.x,
                      y: n.y + s,
                      textAnchor: i,
                      className: "fill-fg font-sans",
                      fontSize: 13,
                      fontWeight: 500,
                      children: e.label,
                    }),
                  ],
                },
                e.label
              );
            }),
            (0, a.jsx)("circle", {
              r: 3.5,
              className: "fill-upside-fill motion-reduce:hidden",
              style: { filter: "drop-shadow(0 0 6px rgba(204,228,0,0.9))" },
              children: (0, a.jsx)("animateMotion", {
                dur: "16s",
                repeatCount: "indefinite",
                rotate: "auto",
                children: (0, a.jsx)("mpath", { href: "#fw-ring" }),
              }),
            }),
            (0, a.jsx)("circle", {
              cx: 260,
              cy: 260,
              r: 52,
              className: "fill-income-fill",
            }),
            (0, a.jsx)("circle", {
              cx: 260,
              cy: 260,
              r: 52,
              fill: "none",
              className: "stroke-upside-fill",
              strokeWidth: 1.5,
            }),
            (0, a.jsx)("circle", {
              cx: 260,
              cy: 260,
              r: 46,
              fill: "none",
              className: "stroke-ivory",
              strokeOpacity: 0.25,
              strokeWidth: 0.75,
            }),
            (0, a.jsx)("g", {
              transform: "translate(".concat(238, " ").concat(260 - o / 2, ")"),
              children: (0, a.jsx)(s.CH, {
                size: 44,
                tone: "split",
                wedge: "var(--color-ivory)",
                block: "var(--color-ivory)",
              }),
            }),
          ],
        });
      }
    },
    86637: (e, t, n) => {
      "use strict";
      n.d(t, { BackstopCard: () => w });
      var a = n(72133),
        i = n(50625),
        s = n(84520),
        r = n(35476),
        l = n(54490),
        o = n(29142),
        d = n(86635),
        u = n(36811),
        c = n(87457),
        p = n(35208),
        m = n(66450),
        y = n(86648),
        x = n(15994),
        h = n(71808),
        b = n(12533),
        f = n(36901),
        g = n(33766),
        v = n(35532),
        j = n(90808);
      function w(e) {
        let { className: t } = e,
          n = o.KO && c.YS;
        return (0, a.jsxs)(s.Zp, {
          as: "section",
          "aria-labelledby": "backstop-title",
          className: t,
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-wrap items-start justify-between gap-3",
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("p", {
                      className: "label-caps",
                      children: "Backstop",
                    }),
                    (0, a.jsxs)("h2", {
                      id: "backstop-title",
                      className: "mt-1 text-base font-medium text-fg",
                      children: [
                        "USDG reserve \xb7 target ",
                        (0, p.Gy)(1000000n * BigInt(g.i_.backstopTargetUsdg), {
                          symbol: !1,
                        }),
                      ],
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "mt-1.5 max-w-lg text-xs leading-relaxed text-muted",
                      children:
                        "Not insurance, not a guarantee; may be empty. USDG never enters a Series: a queued item, after its 5-day public delay, funds a per-series distributor that burned-position holders pull from.",
                    }),
                  ],
                }),
                (0, a.jsx)("p", { className: "label-caps", children: v.hc }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "mt-4",
              children: n ? (0, a.jsx)(T, {}) : (0, a.jsx)(j.En, {}),
            }),
          ],
        });
      }
      function N(e) {
        let { address: t, lookup: n } = e,
          i = n.get(t.toLowerCase());
        return (0, a.jsx)("a", {
          href: (0, x.Zv)(t),
          target: "_blank",
          rel: "noreferrer",
          className:
            "font-mono text-xs text-fg underline-offset-2 hover:underline",
          title: t,
          children: null != i ? i : (0, u.Dc)(t, 6, 4),
        });
      }
      function T() {
        var e;
        let t = (0, r.f)(1e3),
          n = (0, y.d)(),
          o = (0, m.__)(),
          g = (0, m.X7)(),
          v = (0, d.og)(),
          w = (0, f.vT)(),
          T = null == (e = (0, c.SG)()) ? void 0 : e.backstop,
          k = o.data,
          M = g.data,
          S = (0, i.useMemo)(() => {
            var e;
            return (
              null != (e = null == M ? void 0 : M.distributors) ? e : []
            ).map((e) => e.distributor);
          }, [null == M ? void 0 : M.distributors]),
          C = (0, m.fu)(S),
          P = (0, b.vr)(),
          A = (0, b.vr)(),
          [E, O] = (0, i.useState)(null),
          B = (0, i.useMemo)(() => {
            var e;
            let t = new Map();
            for (let n of null != (e = v.data) ? e : [])
              n.address &&
                t.set(
                  n.address.toLowerCase(),
                  "".concat(n.ticker, " \xb7 epoch ").concat(n.epoch)
                );
            return t;
          }, [v.data]);
        if (o.isError)
          return (0, a.jsx)(j.F_, { error: o.error, what: "Backstop" });
        if (!k || !T)
          return (0, a.jsx)("div", {
            "aria-busy": "true",
            className:
              "h-40 animate-pulse rounded-card border border-line bg-panel",
          });
        let F =
            k.target > 0n ? Number((10000n * k.reserve) / k.target) / 1e4 : 0,
          R = k.reserve > k.target,
          D = k.queue.filter((e) => !e.done);
        return (0, a.jsxs)("div", {
          className: "grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]",
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-col gap-3",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-wrap items-center justify-between gap-3",
                  children: [
                    (0, a.jsx)("p", {
                      className: "label-caps",
                      children: "Reserve",
                    }),
                    (0, a.jsx)(j.aT, {
                      asOf: o.asOf,
                      isFetching: o.isFetching,
                      onRefetch: o.refetch,
                    }),
                  ],
                }),
                (0, a.jsxs)(s.l7, {
                  className: "rounded-card border border-line bg-panel px-4",
                  children: [
                    (0, a.jsx)(s.jP, {
                      label: "Reserve",
                      value: (0, p.Gy)(k.reserve, { symbol: !1 }),
                      hint: "USDG \xb7 balance − treasury ledger",
                      tone: k.reserve > 0n ? "income" : "default",
                    }),
                    (0, a.jsx)(s.jP, {
                      label: "Target",
                      value: (0, p.Gy)(k.target, { symbol: !1 }),
                      hint: "redirect at or above",
                    }),
                    (0, a.jsx)(s.jP, {
                      label: "Owed to treasury",
                      value: (0, p.Gy)(k.treasuryOwed, { symbol: !1 }),
                      hint: "swept above target",
                    }),
                    (0, a.jsx)(s.jP, {
                      label: "Queue",
                      value: k.queueLength.toString(),
                      hint: ""
                        .concat(D.length, " pending \xb7 ")
                        .concat(k.queueDelay / 86400, "-day delay"),
                    }),
                  ],
                }),
                (0, a.jsx)(j.ke, {
                  fraction: F,
                  label: "Backstop reserve against its target",
                }),
                (0, a.jsx)("p", {
                  className: "text-[11px] text-muted",
                  children:
                    0n === k.reserve
                      ? "The reserve is empty."
                      : F >= 1
                      ? "At or above target: the router redirects the backstop share to stakers."
                      : (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsxs)("span", {
                              className: "font-mono tnum",
                              children: [Math.round(100 * F), "%"],
                            }),
                            " of the target.",
                          ],
                        }),
                }),
                (0, a.jsx)(j.xb, {
                  id: "backstop-sweep",
                  label: "Sweep above target",
                  step: R ? (0, h.n2)(T) : void 0,
                  reason: "Reserve is at or below the target",
                  detail: R
                    ? "".concat(
                        (0, p.Gy)(k.reserve - k.target),
                        " to the treasury ledger"
                      )
                    : void 0,
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "flex flex-col gap-5",
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("p", {
                      className: "label-caps mb-2",
                      children: "Compensation queue",
                    }),
                    0 === k.queue.length
                      ? (0, a.jsx)("p", {
                          className: "text-xs text-muted",
                          children:
                            "Nothing queued. The owner queues an amount for a factory series after a published post-mortem; anyone may execute it after the delay.",
                        })
                      : (0, a.jsxs)(s.XI, {
                          children: [
                            (0, a.jsx)(s.D1, {
                              children: (0, a.jsxs)("tr", {
                                children: [
                                  (0, a.jsx)(s.TH, { children: "Id" }),
                                  (0, a.jsx)(s.TH, { children: "Series" }),
                                  (0, a.jsx)(s.TH, {
                                    align: "right",
                                    children: "Amount",
                                  }),
                                  (0, a.jsx)(s.TH, {
                                    align: "right",
                                    children: "Executes",
                                  }),
                                  (0, a.jsx)(s.TH, {
                                    align: "right",
                                    children: "Action",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)(s.vc, {
                              children: k.queue.map((e) => {
                                let n = t > 0 && t >= e.executeAfter;
                                return (0, a.jsxs)(
                                  s.TR,
                                  {
                                    children: [
                                      (0, a.jsxs)(s.TD, {
                                        mono: !0,
                                        children: ["#", e.id.toString()],
                                      }),
                                      (0, a.jsx)(s.TD, {
                                        children: (0, a.jsx)(N, {
                                          address: e.series,
                                          lookup: B,
                                        }),
                                      }),
                                      (0, a.jsx)(s.TD, {
                                        mono: !0,
                                        align: "right",
                                        children: (0, p.Gy)(e.amount, {
                                          symbol: !1,
                                        }),
                                      }),
                                      (0, a.jsx)(s.TD, {
                                        mono: !0,
                                        align: "right",
                                        children: e.done
                                          ? (0, a.jsx)(s.Ex, {
                                              tone: "income",
                                              className: "font-sans",
                                              children: "Done",
                                            })
                                          : n
                                          ? "executable"
                                          : (0, p.D8)(
                                              e.executeAfter,
                                              t,
                                              "executable"
                                            ),
                                      }),
                                      (0, a.jsx)(s.TD, {
                                        align: "right",
                                        children: e.done
                                          ? (0, a.jsx)("span", {
                                              className:
                                                "text-[11px] text-muted",
                                              children: "—",
                                            })
                                          : (0, a.jsx)(j.xb, {
                                              id: "backstop-execute-".concat(
                                                e.id.toString()
                                              ),
                                              label: "Execute",
                                              step: n
                                                ? (0, h.nH)(T, e.id)
                                                : void 0,
                                              reason:
                                                t > 0
                                                  ? "Queue elapses ".concat(
                                                      (0, p.D8)(
                                                        e.executeAfter,
                                                        t
                                                      )
                                                    )
                                                  : "Reading the clock…",
                                              quiet: !0,
                                              className: "items-end",
                                              tx: A,
                                            }),
                                      }),
                                    ],
                                  },
                                  e.id.toString()
                                );
                              }),
                            }),
                          ],
                        }),
                    "idle" !== A.status
                      ? (0, a.jsx)(l.R, {
                          tx: A,
                          hideSteps: !0,
                          className: "mt-2",
                        })
                      : null,
                  ],
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("p", {
                      className: "label-caps mb-2",
                      children: "Distributors",
                    }),
                    M
                      ? 0 === M.distributors.length
                        ? (0, a.jsxs)("p", {
                            className: "text-xs text-muted",
                            children: [
                              "No compensation executed",
                              M.scannedFrom > 0n
                                ? " since block ".concat(
                                    M.scannedFrom.toString()
                                  )
                                : "",
                              ".",
                            ],
                          })
                        : (0, a.jsxs)(s.XI, {
                            children: [
                              (0, a.jsx)(s.D1, {
                                children: (0, a.jsxs)("tr", {
                                  children: [
                                    (0, a.jsx)(s.TH, { children: "Series" }),
                                    (0, a.jsx)(s.TH, {
                                      align: "right",
                                      children: "Funded",
                                    }),
                                    (0, a.jsx)(s.TH, {
                                      align: "right",
                                      children: "Paid",
                                    }),
                                    (0, a.jsx)(s.TH, {
                                      align: "right",
                                      children: "Your claimable",
                                    }),
                                    (0, a.jsx)(s.TH, {
                                      align: "right",
                                      children: "Claim",
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)(s.vc, {
                                children: M.distributors.map((e) => {
                                  var t;
                                  let i =
                                      null == (t = C.data)
                                        ? void 0
                                        : t[e.distributor.toLowerCase()],
                                    r = e.distributor.toLowerCase(),
                                    l = !!i && i.owedOf > 0n && !i.claimed,
                                    o = w.address
                                      ? i
                                        ? i.claimed
                                          ? "claimed"
                                          : "no share"
                                        : "…"
                                      : "—";
                                  return (0, a.jsxs)(
                                    s.TR,
                                    {
                                      children: [
                                        (0, a.jsx)(s.TD, {
                                          children: (0, a.jsxs)("span", {
                                            className: "flex flex-col gap-0.5",
                                            children: [
                                              (0, a.jsx)(N, {
                                                address: e.series,
                                                lookup: B,
                                              }),
                                              (0, a.jsx)("a", {
                                                href: (0, x.Zv)(e.distributor),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className:
                                                  "font-mono text-[11px] text-muted underline-offset-2 hover:underline",
                                                children: (0, u.Dc)(
                                                  e.distributor,
                                                  6,
                                                  4
                                                ),
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, a.jsx)(s.TD, {
                                          mono: !0,
                                          align: "right",
                                          children: (0, p.Gy)(e.amount, {
                                            symbol: !1,
                                          }),
                                        }),
                                        (0, a.jsx)(s.TD, {
                                          mono: !0,
                                          align: "right",
                                          children: i
                                            ? (0, p.Gy)(i.paidTotal, {
                                                symbol: !1,
                                              })
                                            : "…",
                                        }),
                                        (0, a.jsx)(s.TD, {
                                          mono: !0,
                                          align: "right",
                                          children: i
                                            ? i.claimed
                                              ? "claimed"
                                              : (0, p.Gy)(i.owedOf, {
                                                  symbol: !1,
                                                })
                                            : "…",
                                        }),
                                        (0, a.jsx)(s.TD, {
                                          align: "right",
                                          children: l
                                            ? (0, a.jsxs)("span", {
                                                className:
                                                  "inline-flex flex-col items-end gap-1",
                                                children: [
                                                  (0, a.jsx)(s.$n, {
                                                    size: "sm",
                                                    variant: "secondary",
                                                    disabled:
                                                      !n.canWrite || P.busy,
                                                    title: n.reason,
                                                    onClick: () => {
                                                      O(r),
                                                        P.send(
                                                          (0, h.lj)(
                                                            e.distributor
                                                          )
                                                        );
                                                    },
                                                    children:
                                                      P.busy && E === r
                                                        ? "Sending…"
                                                        : "Claim",
                                                  }),
                                                  n.canWrite
                                                    ? null
                                                    : (0, a.jsx)("span", {
                                                        className:
                                                          "text-[11px] text-muted",
                                                        children: n.reason,
                                                      }),
                                                ],
                                              })
                                            : (0, a.jsx)("span", {
                                                className:
                                                  "text-[11px] text-muted",
                                                children: o,
                                              }),
                                        }),
                                      ],
                                    },
                                    r
                                  );
                                }),
                              }),
                            ],
                          })
                      : g.isError
                      ? (0, a.jsx)("p", {
                          className: "text-xs text-warning",
                          children:
                            "The CompensationExecuted log scan did not answer; the queue and the reserve above are current.",
                        })
                      : (0, a.jsx)("p", {
                          className: "text-xs text-muted",
                          children: "Scanning CompensationExecuted logs…",
                        }),
                    M && g.isError
                      ? (0, a.jsxs)("p", {
                          className: "mt-2 text-xs text-warning",
                          children: [
                            "The last log scan did not answer; the list is as of block ",
                            M.scannedTo.toString(),
                            ".",
                          ],
                        })
                      : null,
                    "idle" !== P.status
                      ? (0, a.jsx)(l.R, {
                          tx: P,
                          hideSteps: !0,
                          className: "mt-2",
                        })
                      : null,
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    86648: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => y, d: () => m });
      var a = n(90756),
        i = n(50625),
        s = n(37762),
        r = n(32916),
        l = n(89764),
        o = n(29142),
        d = n(32410),
        u = n(93617),
        c = n(36901),
        p = n(87457);
      function m() {
        let e = (0, c.sN)();
        return (0, i.useMemo)(
          () => (o.KO && !p.YS ? { canWrite: !1, reason: p.Yf } : e),
          [e]
        );
      }
      function y(e, t) {
        var n;
        let i = (0, s.U)(),
          m = (0, c.qK)(),
          { address: y } = (0, r.F)();
        return (0, a.I)({
          queryKey: u.y.read(
            o.bQ,
            null != (n = null == e ? void 0 : e.address) ? n : "0x",
            "phase1-dry-run",
            t,
            null == y ? void 0 : y.toLowerCase()
          ),
          queryFn: async () => {
            let t = (0, l.B)(i, { chainId: o.bQ });
            if (!t || !e) throw Error("No RPC client");
            try {
              var n;
              return (
                await t.simulateContract({
                  address: e.address,
                  abi: (0, d.JO)(e.abi),
                  functionName: e.functionName,
                  args: null != (n = e.args) ? n : [],
                  account: y,
                }),
                { ok: !0 }
              );
            } catch (t) {
              return { ok: !1, error: (0, d.GP)(t, e.context) };
            }
          },
          enabled: o.KO && p.YS && m && !!e,
          staleTime: 1e4,
          refetchInterval: 3e4,
        });
      }
    },
    87457: (e, t, n) => {
      "use strict";
      n.d(t, { SG: () => s, YS: () => r, Yf: () => o, wD: () => l });
      var a = n(95445),
        i = n(29142);
      function s() {
        var e;
        return null == (e = a.b[String(i.bQ)]) ? void 0 : e.phase1;
      }
      let r = void 0 !== s(),
        l =
          "Phase 1 contracts are built and tested; not deployed on Robinhood Chain yet",
        o = "Not deployed yet";
    },
    90808: (e, t, n) => {
      "use strict";
      n.d(t, {
        En: () => b,
        F_: () => v,
        aT: () => f,
        ke: () => g,
        xb: () => j,
      });
      var a = n(72133),
        i = n(3303),
        s = n(50625),
        r = n(84520),
        l = n(35476),
        o = n(54490),
        d = n(91109),
        u = n(29142),
        c = n(36811),
        p = n(87457),
        m = n(86648),
        y = n(32410),
        x = n(12533);
      function h(e) {
        let { className: t } = e;
        return (0, a.jsxs)("p", {
          className: (0, d.cn)("text-xs text-muted", t),
          "data-phase1": "not-deployed",
          children: [p.wD, "."],
        });
      }
      function b(e) {
        let { className: t } = e;
        return u.KO
          ? p.YS
            ? null
            : (0, a.jsx)(h, { className: t })
          : (0, a.jsxs)("p", {
              className: (0, d.cn)("text-xs text-muted", t),
              children: [
                "Preview mode \xb7 the Phase 1 reads and writes run in live mode only",
                ".",
              ],
            });
      }
      function f(e) {
        let { asOf: t, isFetching: n, onRefetch: s, className: r } = e,
          o = (0, l.f)(1e3),
          u = o > 0 && t > 0 ? Math.max(0, o - t) : void 0;
        return (0, a.jsxs)("span", {
          className: (0, d.cn)(
            "inline-flex items-center gap-1.5 font-mono text-[11px] text-muted tnum",
            r
          ),
          children: [
            "on chain",
            void 0 !== u
              ? " \xb7 updated ".concat((0, c.KN)(u))
              : " \xb7 reading…",
            s
              ? (0, a.jsx)("button", {
                  type: "button",
                  onClick: s,
                  disabled: n,
                  className:
                    "inline-flex size-7 items-center justify-center rounded-full text-muted hover:text-fg disabled:opacity-50",
                  "aria-label": "Re-read chain state",
                  title: "Re-read chain state",
                  children: (0, a.jsx)(i.A, {
                    className: (0, d.cn)("size-3", n && "animate-spin"),
                    "aria-hidden": "true",
                  }),
                })
              : null,
          ],
        });
      }
      function g(e) {
        let { fraction: t, tone: n = "forest", label: i, className: s } = e,
          r = Math.round(100 * Math.min(1, Math.max(0, t)));
        return (0, a.jsx)("div", {
          className: (0, d.cn)(
            "h-1.5 w-full overflow-hidden rounded-pill bg-forest-ink",
            s
          ),
          role: "progressbar",
          "aria-valuenow": r,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-label": i,
          children: (0, a.jsx)("span", {
            className: (0, d.cn)(
              "block h-full rounded-pill",
              "lime" === n ? "bg-lime" : "bg-forest"
            ),
            style: { width: "".concat(r, "%") },
          }),
        });
      }
      function v(e) {
        let { error: t, what: n } = e;
        return (0, a.jsxs)("p", {
          role: "alert",
          className: "text-xs text-danger",
          children: [n, " read failed: ", (0, y.U)(t)],
        });
      }
      function j(e) {
        let {
            id: t,
            label: n,
            step: i,
            reason: l,
            variant: u = "secondary",
            size: c = "sm",
            detail: p,
            className: y,
            quiet: h,
            tx: b,
          } = e,
          f = (0, m.d)(),
          g = (0, x.vr)(),
          v = null != b ? b : g,
          [j, w] = (0, s.useState)(!1),
          N = (0, m.A)(i, t),
          T = i ? N.data : void 0,
          k = !!T && !T.ok,
          M = !!i && !k && f.canWrite && !v.busy,
          S = i ? (f.canWrite ? (k ? T.error.message : void 0) : f.reason) : l;
        return (0, a.jsxs)("div", {
          className: (0, d.cn)("flex flex-col gap-1.5", y),
          children: [
            (0, a.jsxs)("div", {
              className: "flex flex-wrap items-center gap-2",
              children: [
                (0, a.jsx)(r.$n, {
                  size: c,
                  variant: u,
                  disabled: !M,
                  title: S,
                  onClick: () => {
                    i && (w(!0), v.send(i).finally(() => w(!1)));
                  },
                  children: j ? "Sending…" : n,
                }),
                p && i
                  ? (0, a.jsx)("span", {
                      className: "font-mono text-[11px] text-muted tnum",
                      children: p,
                    })
                  : null,
              ],
            }),
            h
              ? null
              : !i && l
              ? (0, a.jsx)("p", {
                  className: "text-[11px] text-muted",
                  children: l,
                })
              : i && !f.canWrite
              ? (0, a.jsx)("p", {
                  className: "text-[11px] text-muted",
                  children: f.reason,
                })
              : k
              ? (0, a.jsxs)("p", {
                  role: "status",
                  className: "text-[11px] text-warning",
                  children: ["Contract refuses right now: ", T.error.message],
                })
              : (null == T ? void 0 : T.ok)
              ? (0, a.jsx)("p", {
                  className: "text-[11px] text-success",
                  children: "Dry run passes; the call would succeed now.",
                })
              : i && N.isFetching
              ? (0, a.jsx)("p", {
                  className: "text-[11px] text-muted",
                  children: "Checking the call against the chain…",
                })
              : null,
            b || "idle" === v.status
              ? null
              : (0, a.jsx)(o.R, { tx: v, hideSteps: !0 }),
          ],
        });
      }
    },
    95445: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => a });
      let a = {
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
  },
  (e) => {
    e.O(
      0,
      [
        9276, 4133, 755, 3869, 756, 2976, 3789, 4520, 592, 9834, 8368, 8473,
        4314, 4297, 7358,
      ],
      () => e((e.s = 11745))
    ),
      (_N_E = e.O());
  },
]);
