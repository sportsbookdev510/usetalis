"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8473],
  {
    4023: (e, t, n) => {
      n.d(t, {
        Bz: () => s,
        GK: () => d,
        JX: () => i,
        Xx: () => u,
        ed: () => r,
        g4: () => l,
        hg: () => o,
        nG: () => c,
      });
      var a = n(28879);
      let i = (0, a.U)([
          "function split(uint256 n)",
          "function subscribe(uint256 n, uint32 reserveStep)",
          "function unsubscribe(uint256 n)",
          "function merge(uint256 n)",
          "function claimIncome(uint256 n)",
          "function claimUpside(uint256 n)",
          "function open(uint80 hint)",
          "function settle(uint80 hint)",
          "function terminate(uint80 hint)",
        ]),
        s = (0, a.U)([
          "function bid(uint256 units)",
          "function setReserve(uint32 reserveStep)",
          "function finalize()",
          "function reschedule()",
          "function claimFillUpside(uint256 bidId)",
          "function claimRefund(uint256 bidId)",
          "function claimFill(uint256 bidId)",
          "function claimProceeds()",
          "function claimUnsold()",
          "function claimFee()",
          "function price() view returns (uint256)",
          "function priceAtStep(uint32 s) view returns (uint256)",
          "function lotTotal() view returns (uint256)",
          "function lotOf(address who) view returns (uint256)",
          "function reserveOf(address who) view returns (uint32)",
          "function auctionStart() view returns (uint64)",
          "function auctionEnd() view returns (uint64)",
        ]),
        r = (0, a.U)([
          "function allowance(address owner, address spender) view returns (uint256)",
          "function balanceOf(address owner) view returns (uint256)",
          "function decimals() view returns (uint8)",
          "function approve(address spender, uint256 amount) returns (bool)",
          "function transfer(address to, uint256 amount) returns (bool)",
        ]),
        u = (0, a.U)([
          "function stake(uint256 amount, uint8 tier)",
          "function extend(uint8 tier)",
          "function requestUnstake(uint256 amount)",
          "function unstake()",
          "function claim() returns (uint256 paid)",
          "function sync() returns (uint256 fresh)",
        ]),
        c = (0, a.U)([
          "function distribute() returns (uint256 amount)",
          "function pullStakers() returns (uint256 amount)",
          "function pullBackstop() returns (uint256 amount)",
          "function pullBuyback() returns (uint256 amount)",
          "function pullTreasury() returns (uint256 amount)",
        ]),
        o = (0, a.U)([
          "function sweepAboveTarget() returns (uint256 amount)",
          "function pullTreasury() returns (uint256 amount)",
          "function executeCompensate(uint256 id) returns (address distributor)",
        ]),
        l = (0, a.U)([
          "function commit(uint256 units)",
          "function finalize()",
          "function claim(uint256 id) returns (uint256 proceeds, uint256 returned)",
          "function cancelRound()",
        ]),
        d = (0, a.U)(["function claim() returns (uint256 paid)"]);
    },
    12533: (e, t, n) => {
      n.d(t, { vr: () => m });
      var a = n(34201),
        i = n(50625),
        s = n(37762),
        r = n(29142),
        u = n(15994),
        c = n(36901);
      let o = { status: "idle", steps: [], stepIndex: 0 },
        l = new Set([
          "connecting",
          "switching",
          "simulating",
          "wallet",
          "pending",
        ]),
        d = new Set([
          "confirmed",
          "failed",
          "not-included",
          "timeout",
          "preview",
        ]);
      function m() {
        var e, t;
        let m =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          f = (0, s.U)(),
          b = (0, a.jE)(),
          p = (0, c.sN)(),
          [x, g] = (0, i.useState)(o),
          v = (0, i.useRef)(0),
          h = (0, i.useRef)(m.onConfirmed);
        h.current = m.onConfirmed;
        let N = null != (e = m.chainId) ? e : r.bQ,
          k = null != (t = m.timeoutMs) ? t : (0, u.iu)(N),
          w = (0, i.useCallback)(() => {
            (v.current += 1), g(o);
          }, []),
          y = (0, i.useCallback)(
            async (e) => {
              var t;
              let a = Array.isArray(e) ? e : [e],
                i = ++v.current,
                s = a.map((e) => ({ label: e.label, state: "todo" }));
              if (
                (g({
                  status: r.KO ? "connecting" : "preview",
                  steps: s,
                  stepIndex: 0,
                  startedAt: Date.now(),
                }),
                !r.KO)
              )
                return "preview";
              let c = (e) => {
                  v.current === i &&
                    g((t) => ({
                      ...t,
                      ...("function" == typeof e ? e(t) : e),
                    }));
                },
                { runTxSteps: o } = await Promise.all([
                  n.e(2065),
                  n.e(3722),
                  n.e(1029),
                ]).then(n.bind(n, 3410)),
                l = await o(
                  f,
                  b,
                  a,
                  {
                    status: (e) => c({ status: e }),
                    step: (e, t) =>
                      c((n) => ({
                        stepIndex: e,
                        steps: n.steps.map((n, a) =>
                          a === e ? { ...n, ...t } : n
                        ),
                      })),
                    hash: (e) =>
                      c({ hash: e, explorerUrl: e ? (0, u.TK)(e) : void 0 }),
                    error: (e) => c({ error: e }),
                    receipt: (e) => c({ receipt: e }),
                  },
                  {
                    chainId: N,
                    timeoutMs: k,
                    pollMs: u.CJ,
                    cancelled: () => v.current !== i,
                  }
                );
              return (
                "confirmed" === l &&
                  v.current === i &&
                  (null == (t = h.current) || t.call(h)),
                l
              );
            },
            [f, b, N, k]
          );
        return (0, i.useMemo)(() => {
          var e;
          return {
            ...x,
            send: y,
            reset: w,
            gate: p,
            busy: l.has(x.status),
            done: d.has(x.status),
            currentLabel: null == (e = x.steps[x.stepIndex]) ? void 0 : e.label,
          };
        }, [x, y, w, p]);
      }
    },
    15994: (e, t, n) => {
      n.d(t, { CJ: () => r, TK: () => u, Zv: () => c, iu: () => s });
      var a = n(29142);
      let i = { 4663: 45e3, 46630: 6e4 };
      function s() {
        var e;
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.bQ;
        return null != (e = i[t]) ? e : 12e4;
      }
      let r = 1500;
      function u(e) {
        return "".concat(a.S5.explorerUrl, "/tx/").concat(e);
      }
      function c(e) {
        return "".concat(a.S5.explorerUrl, "/address/").concat(e);
      }
    },
    54490: (e, t, n) => {
      n.d(t, { R: () => x });
      var a = n(72133),
        i = n(93811),
        s = n(9250),
        r = n(75647),
        u = n(13892),
        c = n(72987),
        o = n(82283),
        l = n(20829),
        d = n(91109),
        m = n(36811);
      let f = {
        idle: "",
        preview: "Preview mode \xb7 no transaction is sent",
        connecting: "Connecting wallet…",
        switching: "Switching to Robinhood Chain…",
        simulating: "Checking the call…",
        wallet: "Confirm in your wallet",
        pending: "Pending",
        confirmed: "Confirmed",
        failed: "Failed",
        "not-included": "Not included",
        timeout: "Still pending",
      };
      function b(e) {
        let { state: t, approve: n } = e,
          o = "size-3.5 shrink-0";
        switch (t) {
          case "active":
            return (0, a.jsx)(i.A, {
              className: (0, d.cn)(o, "animate-spin text-accent"),
              "aria-hidden": "true",
            });
          case "done":
            return (0, a.jsx)(s.A, {
              className: (0, d.cn)(o, n ? "text-income" : "text-success"),
              "aria-hidden": "true",
            });
          case "skipped":
            return (0, a.jsx)(r.A, {
              className: (0, d.cn)(o, "text-muted"),
              "aria-hidden": "true",
            });
          case "failed":
            return (0, a.jsx)(u.A, {
              className: (0, d.cn)(o, "text-danger"),
              "aria-hidden": "true",
            });
          default:
            return (0, a.jsx)(c.A, {
              className: (0, d.cn)(o, "text-muted/60"),
              "aria-hidden": "true",
            });
        }
      }
      function p(e) {
        let { steps: t, className: n } = e;
        return t.length < 2
          ? null
          : (0, a.jsx)("ol", {
              className: (0, d.cn)(
                "flex flex-wrap items-center gap-1.5 text-xs",
                n
              ),
              "aria-label": "Transaction steps",
              children: t.map((e, n) =>
                (0, a.jsxs)(
                  "li",
                  {
                    className: "flex items-center gap-1.5",
                    children: [
                      (0, a.jsxs)("span", {
                        className: (0, d.cn)(
                          "inline-flex h-6 items-center gap-1.5 rounded-pill border px-2",
                          "active" === e.state && "border-accent/70 text-fg",
                          "done" === e.state &&
                            (e.label.startsWith("Approve")
                              ? "border-income-fill/60 text-fg"
                              : "border-success/50 text-fg"),
                          "failed" === e.state && "border-danger/50 text-fg",
                          ("todo" === e.state || "skipped" === e.state) &&
                            "border-line text-muted"
                        ),
                        children: [
                          (0, a.jsx)(b, {
                            state: e.state,
                            approve: e.label.startsWith("Approve"),
                          }),
                          e.label,
                          e.note
                            ? (0, a.jsxs)("span", {
                                className: "text-muted",
                                children: ["\xb7 ", e.note],
                              })
                            : null,
                        ],
                      }),
                      n < t.length - 1
                        ? (0, a.jsx)("span", {
                            className: "text-muted",
                            "aria-hidden": "true",
                            children: "→",
                          })
                        : null,
                    ],
                  },
                  "".concat(e.label, "-").concat(n)
                )
              ),
            });
      }
      function x(e) {
        var t, n, r, c;
        let {
          tx: b,
          className: x,
          previewNote: g,
          hideSteps: v,
          children: h,
        } = e;
        if ("idle" === b.status) return null;
        let N =
            1 === b.steps.length
              ? null == (t = b.steps[0])
                ? void 0
                : t.label
              : b.currentLabel,
          k =
            "confirmed" === b.status
              ? "text-success"
              : "failed" === b.status || "not-included" === b.status
              ? "text-danger"
              : "timeout" === b.status
              ? "text-warning"
              : "preview" === b.status
              ? "text-muted"
              : "text-fg",
          w = b.busy,
          y =
            "failed" === b.status || "not-included" === b.status
              ? "alert"
              : "status",
          C = b.explorerUrl
            ? (0, a.jsxs)("a", {
                href: b.explorerUrl,
                target: "_blank",
                rel: "noreferrer",
                className:
                  "inline-flex items-center gap-1 font-mono text-fg underline-offset-2 hover:underline",
                children: [
                  (0, m.Dc)(b.hash, 6, 4),
                  (0, a.jsx)(o.A, {
                    className: "size-3",
                    "aria-hidden": "true",
                  }),
                ],
              })
            : null;
        return (0, a.jsxs)("div", {
          className: (0, d.cn)(
            "rounded-card border border-line bg-panel/70 p-3 text-xs",
            x
          ),
          children: [
            v ? null : (0, a.jsx)(p, { steps: b.steps, className: "mb-2" }),
            (0, a.jsxs)("div", {
              className: "flex items-start gap-2",
              children: [
                w
                  ? (0, a.jsx)(i.A, {
                      className:
                        "mt-0.5 size-3.5 shrink-0 animate-spin text-accent",
                      "aria-hidden": "true",
                    })
                  : "confirmed" === b.status
                  ? (0, a.jsx)(s.A, {
                      className: "mt-0.5 size-3.5 shrink-0 text-success",
                      "aria-hidden": "true",
                    })
                  : (0, a.jsx)(u.A, {
                      className: (0, d.cn)("mt-0.5 size-3.5 shrink-0", k),
                      "aria-hidden": "true",
                    }),
                (0, a.jsxs)("p", {
                  role: y,
                  className: (0, d.cn)("min-w-0 flex-1 break-words", k),
                  children: [
                    N
                      ? (0, a.jsxs)("span", {
                          className: "font-medium",
                          children: [N, ": "],
                        })
                      : null,
                    "preview" === b.status
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [f.preview, g ? " \xb7 ".concat(g) : ""],
                        })
                      : "failed" === b.status ||
                        "not-included" === b.status ||
                        "timeout" === b.status
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            null !=
                            (c = null == (n = b.error) ? void 0 : n.message)
                              ? c
                              : f[b.status],
                            C
                              ? (0, a.jsxs)(a.Fragment, {
                                  children: [" \xb7 ", C],
                                })
                              : null,
                          ],
                        })
                      : (0, a.jsxs)(a.Fragment, {
                          children: [
                            f[b.status],
                            C
                              ? (0, a.jsxs)(a.Fragment, {
                                  children: [" \xb7 ", C],
                                })
                              : null,
                          ],
                        }),
                  ],
                }),
                b.done
                  ? (0, a.jsx)("button", {
                      type: "button",
                      onClick: b.reset,
                      "aria-label": "Dismiss",
                      className:
                        "-m-1 rounded-full p-1 text-muted hover:text-fg",
                      children: (0, a.jsx)(l.A, {
                        className: "size-3.5",
                        "aria-hidden": "true",
                      }),
                    })
                  : null,
              ],
            }),
            (null == (r = b.error) ? void 0 : r.detail) &&
            b.error.detail !== b.error.message &&
            ("failed" === b.status ||
              "not-included" === b.status ||
              "timeout" === b.status)
              ? (0, a.jsxs)("details", {
                  className: "mt-1 text-muted",
                  children: [
                    (0, a.jsx)("summary", {
                      className: "cursor-pointer select-none",
                      children: "Details",
                    }),
                    (0, a.jsx)("p", {
                      className: "mt-1 break-all font-mono text-[11px]",
                      children: b.error.detail,
                    }),
                  ],
                })
              : null,
            h ? (0, a.jsx)("div", { className: "mt-2", children: h }) : null,
          ],
        });
      }
    },
    71808: (e, t, n) => {
      n.d(t, {
        $G: () => U,
        A_: () => G,
        C6: () => u,
        Cr: () => g,
        Cz: () => f,
        GB: () => l,
        GJ: () => k,
        Gj: () => y,
        Ms: () => o,
        PA: () => _,
        PQ: () => D,
        Pc: () => I,
        R$: () => V,
        Ti: () => h,
        UV: () => x,
        Uo: () => j,
        XS: () => A,
        Xe: () => v,
        Yj: () => S,
        Yp: () => w,
        _m: () => d,
        b0: () => p,
        b5: () => N,
        eo: () => F,
        f2: () => b,
        lj: () => M,
        n2: () => q,
        nH: () => K,
        nm: () => E,
        oj: () => P,
        p4: () => m,
        pB: () => R,
        pM: () => T,
        ro: () => X,
        sh: () => c,
        vS: () => C,
        wx: () => z,
      });
      var a = n(4023),
        i = n(29142),
        s = n(81122),
        r = n(53063);
      function u(e) {
        var t, n;
        let i = null != (t = e.mode) ? t : "exact",
          r = (0, s.ck)(e.amount, i);
        return {
          label: null != (n = e.label) ? n : "Approve ".concat(e.symbol),
          address: e.token,
          abi: a.ed,
          functionName: "approve",
          args: [e.spender, r],
          context: {
            action: "approve",
            symbol: e.symbol,
            decimals: e.decimals,
          },
          prepare: async (t) => {
            let { publicClient: n, account: s } = t;
            return (await n.readContract({
              address: e.token,
              abi: a.ed,
              functionName: "allowance",
              args: [s, e.spender],
            })) >= e.amount
              ? { skip: !0, note: "already approved" }
              : {
                  args: [e.spender, r],
                  note: "max" === i ? "unlimited" : void 0,
                };
          },
        };
      }
      function c(e) {
        return {
          label: "Send ".concat(e.symbol),
          address: e.token,
          abi: a.ed,
          functionName: "transfer",
          args: [e.to, e.amount],
          context: {
            action: "transfer",
            symbol: e.symbol,
            decimals: e.decimals,
          },
        };
      }
      function o(e) {
        return [
          u({
            token: e.stock,
            spender: e.series,
            amount: e.units,
            symbol: e.symbol,
            decimals: s.Bs.stock,
            mode: e.approve,
          }),
          {
            label: "Split",
            address: e.series,
            abi: a.JX,
            functionName: "split",
            args: [e.units],
            context: {
              action: "split",
              symbol: e.symbol,
              decimals: s.Bs.stock,
            },
          },
        ];
      }
      function l(e) {
        return [
          u({
            token: e.stock,
            spender: e.series,
            amount: e.units,
            symbol: e.symbol,
            decimals: s.Bs.stock,
            mode: e.approve,
          }),
          {
            label: "Subscribe",
            address: e.series,
            abi: a.JX,
            functionName: "subscribe",
            args: [e.units, e.reserveStep],
            context: {
              action: "subscribe",
              symbol: e.symbol,
              decimals: s.Bs.stock,
            },
          },
        ];
      }
      function d(e) {
        return {
          label: "Unsubscribe",
          address: e.series,
          abi: a.JX,
          functionName: "unsubscribe",
          args: [e.units],
          context: { action: "unsubscribe" },
        };
      }
      function m(e) {
        return {
          label: "Merge",
          address: e.series,
          abi: a.JX,
          functionName: "merge",
          args: [e.units],
          context: { action: "merge" },
        };
      }
      function f(e) {
        return {
          label: "Claim ".concat(r._b),
          address: e.series,
          abi: a.JX,
          functionName: "claimIncome",
          args: [e.units],
          context: { action: "claim" },
        };
      }
      function b(e) {
        return {
          label: "Claim ".concat(r.TE),
          address: e.series,
          abi: a.JX,
          functionName: "claimUpside",
          args: [e.units],
          context: { action: "claim" },
        };
      }
      function p(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0n;
        return {
          label: "Open series",
          address: e,
          abi: a.JX,
          functionName: "open",
          args: [t],
          context: { action: "open" },
        };
      }
      function x(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0n;
        return {
          label: "Settle",
          address: e,
          abi: a.JX,
          functionName: "settle",
          args: [t],
          context: { action: "settle" },
        };
      }
      function g(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0n;
        return {
          label: "Terminate",
          address: e,
          abi: a.JX,
          functionName: "terminate",
          args: [t],
          context: { action: "terminate" },
        };
      }
      function v(e) {
        var t, n, r, u;
        let c = null != (t = e.usdg) ? t : i.Bj,
          o = null != (n = e.approve) ? n : "exact",
          l = {
            action: "bid",
            auctionStart: e.auctionStart,
            auctionEnd: e.auctionEnd,
            symbol: "USDG",
            decimals: s.Bs.usdg,
          };
        return [
          {
            label: "Approve USDG",
            address: c,
            abi: a.ed,
            functionName: "approve",
            args: [
              e.auction,
              (0, s.ck)(((r = e.units), (u = e.priceHint), (0, s.dq)(r, u)), o),
            ],
            context: { ...l, action: "approve" },
            prepare: async (t) => {
              var n;
              let { publicClient: i, account: r } = t,
                [u, l] = await Promise.all([
                  i.readContract({
                    address: e.auction,
                    abi: a.Bz,
                    functionName: "price",
                  }),
                  i.readContract({
                    address: c,
                    abi: a.ed,
                    functionName: "allowance",
                    args: [r, e.auction],
                  }),
                ]),
                d = ((n = e.units), (0, s.dq)(n, u));
              return l >= d
                ? { skip: !0, note: "already approved" }
                : {
                    args: [e.auction, (0, s.ck)(d, o)],
                    note: "max" === o ? "unlimited" : void 0,
                  };
            },
          },
          {
            label: "Bid",
            address: e.auction,
            abi: a.Bz,
            functionName: "bid",
            args: [e.units],
            context: l,
          },
        ];
      }
      function h(e, t) {
        return {
          label: "Set reserve",
          address: e,
          abi: a.Bz,
          functionName: "setReserve",
          args: [t],
          context: { action: "setReserve" },
        };
      }
      function N(e) {
        return {
          label: "Finalize",
          address: e,
          abi: a.Bz,
          functionName: "finalize",
          context: { action: "finalize" },
        };
      }
      function k(e) {
        return {
          label: "Re-run",
          address: e,
          abi: a.Bz,
          functionName: "reschedule",
          context: { action: "reschedule" },
        };
      }
      function w(e, t) {
        return {
          label: "Claim fill",
          address: e,
          abi: a.Bz,
          functionName: "claimFill",
          args: [t],
          context: { action: "claim" },
        };
      }
      function y(e, t) {
        return {
          label: "Claim ".concat(r.TE),
          address: e,
          abi: a.Bz,
          functionName: "claimFillUpside",
          args: [t],
          context: { action: "claim" },
        };
      }
      function C(e, t) {
        return {
          label: "Claim refund",
          address: e,
          abi: a.Bz,
          functionName: "claimRefund",
          args: [t],
          context: { action: "claim" },
        };
      }
      function j(e) {
        return {
          label: "Claim proceeds",
          address: e,
          abi: a.Bz,
          functionName: "claimProceeds",
          context: { action: "claim" },
        };
      }
      function S(e) {
        return {
          label: "Claim unsold",
          address: e,
          abi: a.Bz,
          functionName: "claimUnsold",
          context: { action: "claim" },
        };
      }
      function U(e) {
        return {
          label: "Sweep fee",
          address: e,
          abi: a.Bz,
          functionName: "claimFee",
          context: { action: "claim" },
        };
      }
      let B = { symbol: i.CV.symbol, decimals: i.CV.decimals };
      function z(e) {
        var t;
        return [
          u({
            token: null != (t = e.talis) ? t : i.CV.address,
            spender: e.staking,
            amount: e.amount,
            symbol: i.CV.symbol,
            decimals: i.CV.decimals,
            mode: e.approve,
          }),
          {
            label: "Stake",
            address: e.staking,
            abi: a.Xx,
            functionName: "stake",
            args: [e.amount, e.tier],
            context: { action: "stake", ...B },
          },
        ];
      }
      function A(e, t) {
        return {
          label: "Extend lock",
          address: e,
          abi: a.Xx,
          functionName: "extend",
          args: [t],
          context: { action: "extend", ...B },
        };
      }
      function X(e, t) {
        return {
          label: "Request unstake",
          address: e,
          abi: a.Xx,
          functionName: "requestUnstake",
          args: [t],
          context: { action: "requestUnstake", ...B },
        };
      }
      function G(e) {
        return {
          label: "Unstake",
          address: e,
          abi: a.Xx,
          functionName: "unstake",
          context: { action: "unstake", ...B },
        };
      }
      function R(e) {
        return {
          label: "Claim USDG",
          address: e,
          abi: a.Xx,
          functionName: "claim",
          context: {
            action: "claimRewards",
            symbol: "USDG",
            decimals: s.Bs.usdg,
          },
        };
      }
      function F(e) {
        return {
          label: "Sync rewards",
          address: e,
          abi: a.Xx,
          functionName: "sync",
          context: { action: "sync", symbol: "USDG", decimals: s.Bs.usdg },
        };
      }
      let J = { symbol: "USDG", decimals: s.Bs.usdg };
      function P(e) {
        return {
          label: "Distribute",
          address: e,
          abi: a.nG,
          functionName: "distribute",
          context: { action: "distribute", ...J },
        };
      }
      function T(e) {
        return {
          label: "Pull to stakers",
          address: e,
          abi: a.nG,
          functionName: "pullStakers",
          context: { action: "pull", ...J },
        };
      }
      function D(e) {
        return {
          label: "Pull to backstop",
          address: e,
          abi: a.nG,
          functionName: "pullBackstop",
          context: { action: "pull", ...J },
        };
      }
      function E(e) {
        return {
          label: "Pull to buyback",
          address: e,
          abi: a.nG,
          functionName: "pullBuyback",
          context: { action: "pull", ...J },
        };
      }
      function I(e) {
        var t;
        return [
          u({
            token: null != (t = e.talis) ? t : i.CV.address,
            spender: e.procurement,
            amount: e.units,
            symbol: i.CV.symbol,
            decimals: i.CV.decimals,
            mode: e.approve,
          }),
          {
            label: "Commit",
            address: e.procurement,
            abi: a.g4,
            functionName: "commit",
            args: [e.units],
            context: { action: "commit", ...B },
          },
        ];
      }
      function V(e) {
        return {
          label: "Finalize round",
          address: e,
          abi: a.g4,
          functionName: "finalize",
          context: { action: "finalizeRound", ...B },
        };
      }
      function _(e, t) {
        return {
          label: "Claim round ".concat(t.toString()),
          address: e,
          abi: a.g4,
          functionName: "claim",
          args: [t],
          context: { action: "claimRound", ...B },
        };
      }
      function q(e) {
        return {
          label: "Sweep above target",
          address: e,
          abi: a.hg,
          functionName: "sweepAboveTarget",
          context: { action: "sweep", ...J },
        };
      }
      function K(e, t) {
        return {
          label: "Execute #".concat(t.toString()),
          address: e,
          abi: a.hg,
          functionName: "executeCompensate",
          args: [t],
          context: { action: "executeCompensate", ...J },
        };
      }
      function M(e) {
        return {
          label: "Claim compensation",
          address: e,
          abi: a.GK,
          functionName: "claim",
          context: { action: "claimCompensation", ...J },
        };
      }
    },
  },
]);
