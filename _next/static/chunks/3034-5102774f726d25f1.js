"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3034],
  {
    13052: (e, t, n) => {
      n.d(t, {
        CF: () => r,
        KJ: () => u,
        Qh: () => o,
        RQ: () => d,
        lb: () => T,
        s$: () => m,
      });
      var a = n(29142),
        s = n(36811),
        c = n(48299),
        i = n(13177),
        l = n(53063);
      let r = {
          split: "Split",
          subscribe: "Subscribe",
          unsubscribe: "Unsubscribe",
          merge: "Merge",
          bid: "Bid",
          claim: "Claim",
          round: "Round",
          state: "State",
          transfer: "Transfer",
          admin: "Admin",
        },
        o = ["split", "subscribe", "unsubscribe", "merge", "bid", "claim"],
        d = [
          "split",
          "subscribe",
          "unsubscribe",
          "merge",
          "bid",
          "claim",
          "round",
          "state",
        ],
        u = (e) => "".concat(a.S5.explorerUrl, "/tx/").concat(e),
        m = (e) => "".concat(a.S5.explorerUrl, "/address/").concat(e);
      function p(e, t) {
        let n = (0, c.MD)(e);
        return t ? "".concat((0, s.bu)(n, 4), " ").concat(t) : (0, s.bu)(n, 4);
      }
      function x(e) {
        return (0, s.dR)((0, c.Gy)(e));
      }
      let h = {
        fill: "filled ".concat(l.TE),
        fillupside: "filled ".concat(l.TE),
        refund: "bid refund",
        proceeds: "subscriber proceeds",
        unsold: "unsold ".concat(l.TE),
        fee: "auction fee",
        income: "".concat(l._b, " settlement"),
        upside: "".concat(l.TE, " settlement"),
      };
      function b(e) {
        return null == e ? "—" : "#".concat(String(e).padStart(3, "0"));
      }
      let f = new Set(["p0", "k", "settleprice", "price", "answer", "s"]),
        g = new Set([
          "pstart",
          "pfloor",
          "pclear",
          "gross",
          "fee",
          "net",
          "escrow",
          "pay",
          "refund",
          "proceeds",
          "paid",
        ]),
        k = new Set([
          "start",
          "end",
          "startat",
          "endat",
          "openedat",
          "settledat",
          "at",
          "timestamp",
          "scheduledat",
          "finalizedat",
        ]),
        j = new Set([
          "day",
          "openwindowday",
          "settleday",
          "effectivesettleday",
        ]),
        v = new Set([
          "units",
          "lot",
          "lottotal",
          "unitssold",
          "supplyatclear",
          "totaldemand",
          "amount",
          "value",
          "maxunits",
          "maxunitspertx",
        ]);
      function T(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e.map((e) =>
          (function (e) {
            var t, n, a;
            let o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              d = {
                key: "".concat(e.txHash, ":").concat(e.logIndex),
                at: e.blockTime,
                block: e.block,
                txHash: e.txHash,
              },
              u = null == (t = o.ticker) ? void 0 : t.toUpperCase();
            switch (e.kind) {
              case "split":
                return {
                  ...d,
                  kind: e.kind,
                  label: r.split,
                  title: "Split ".concat(p(e.units, u)),
                  detail: ""
                    .concat(p(e.units), " ")
                    .concat(l._b, " + ")
                    .concat(p(e.units), " ")
                    .concat(l.TE, " minted"),
                  amount: p(e.units, u),
                  account: e.account,
                  series: e.series,
                  tone: "income",
                };
              case "subscribe":
                return {
                  ...d,
                  kind: e.kind,
                  label: r.subscribe,
                  title: "Subscribed ".concat(
                    p(e.units, l.TE),
                    " to the auction"
                  ),
                  detail:
                    null !== e.reserveStep
                      ? "reserve "
                          .concat(b(e.reserveStep))
                          .concat(
                            u
                              ? " \xb7 ".concat(p(e.units, u), " deposited")
                              : ""
                          )
                      : u
                      ? "".concat(p(e.units, u), " deposited")
                      : "",
                  amount: p(e.units, l.TE),
                  account: e.account,
                  series: e.series,
                  tone: "upside",
                };
              case "unsubscribe":
                return {
                  ...d,
                  kind: e.kind,
                  label: r.unsubscribe,
                  title: "Unsubscribed ".concat(
                    p(e.units, l.TE),
                    " from the auction"
                  ),
                  detail: "",
                  amount: p(e.units, l.TE),
                  account: e.account,
                  series: e.series,
                  tone: "upside",
                };
              case "merge":
                return {
                  ...d,
                  kind: e.kind,
                  label: r.merge,
                  title: "Merged "
                    .concat(p(e.units), " pairs")
                    .concat(u ? " into ".concat(p(e.units, u)) : ""),
                  detail: ""
                    .concat(l._b, " + ")
                    .concat(l.TE, " burned, Stock Token returned"),
                  amount: p(e.units, u),
                  account: e.account,
                  series: e.series,
                  tone: "income",
                };
              case "bid": {
                let t =
                    null !== e.fill
                      ? " \xb7 filled ".concat(p(e.fill, l.TE))
                      : "",
                  n = null !== e.pay ? " \xb7 paid ".concat(x(e.pay)) : "",
                  a =
                    null !== e.refund && (0, c.Gy)(e.refund) > 0
                      ? " \xb7 refund ".concat(x(e.refund))
                      : "";
                return {
                  ...d,
                  kind: e.kind,
                  label: r.bid,
                  title: "Bid #"
                    .concat(e.id, " \xb7 ")
                    .concat(p(e.units, l.TE), " at step ")
                    .concat(b(e.step)),
                  detail: "round "
                    .concat(e.round, " \xb7 ")
                    .concat(x(e.price), " per unit \xb7 escrow ")
                    .concat(x(e.escrow))
                    .concat(e.prio ? " \xb7 priority" : "")
                    .concat(t)
                    .concat(n)
                    .concat(a),
                  amount: x(e.escrow),
                  account: e.bidder,
                  series: e.series,
                  tone: "upside",
                };
              }
              case "claim": {
                let t =
                    null !=
                    (a =
                      h[(n = e.claimKind).toLowerCase().replace(/^claim/, "")])
                      ? a
                      : n,
                  s =
                    null !== e.paid && (0, c.Gy)(e.paid) > 0
                      ? x(e.paid)
                      : null !== e.units
                      ? p(e.units, /upside|fill|unsold/i.test(t) ? l.TE : u)
                      : "—";
                return {
                  ...d,
                  kind: e.kind,
                  label: r.claim,
                  title: "Claimed "
                    .concat(t)
                    .concat(
                      null !== e.bidId ? " \xb7 bid #".concat(e.bidId) : ""
                    ),
                  detail: [
                    null !== e.units ? p(e.units, "units") : null,
                    null !== e.paid ? "".concat(x(e.paid), " USDG") : null,
                  ]
                    .filter(Boolean)
                    .join(" \xb7 "),
                  amount: s,
                  account: e.account,
                  series: e.series,
                  tone: "neutral",
                };
              }
              case "transfer":
                return {
                  ...d,
                  kind: e.kind,
                  label: r.transfer,
                  title: "Transfer "
                    .concat(p(e.value), " \xb7 ")
                    .concat((0, s.Dc)(e.from, 6, 4), " → ")
                    .concat((0, s.Dc)(e.to, 6, 4)),
                  detail: "token ".concat((0, s.Dc)(e.token, 6, 4)),
                  amount: p(e.value),
                  account: e.to,
                  series: null,
                  tone: "neutral",
                };
              case "round":
              case "state":
              case "admin":
                return {
                  ...d,
                  kind: e.kind,
                  label: r[e.kind],
                  title: e.name,
                  detail: (function (e) {
                    let t = [];
                    for (let [n, a] of Object.entries(e)) {
                      let e = (function (e, t) {
                        if (null == t || "object" == typeof t) return null;
                        let n = e.toLowerCase(),
                          a = String(t);
                        if (/^0x[0-9a-fA-F]{40}$/.test(a))
                          return (0, s.Dc)(a, 6, 4);
                        if ("boolean" == typeof t) return a;
                        if (/^-?\d+$/.test(a)) {
                          var l;
                          return f.has(n)
                            ? (0, s.dR)(((l = a), (0, c.zf)(l)))
                            : g.has(n)
                            ? x(a)
                            : v.has(n)
                            ? p(a)
                            : k.has(n)
                            ? (0, i.Sp)(Number(a))
                            : j.has(n)
                            ? (0, i.nt)(Number(a))
                            : a.length > 24
                            ? "".concat(a.slice(0, 24), "…")
                            : (0, s.bu)(Number(a), 0);
                        }
                        return a.length > 24
                          ? "".concat(a.slice(0, 24), "…")
                          : a;
                      })(n, a);
                      if (
                        null !== e &&
                        (t.push("".concat(n, " ").concat(e)), t.length >= 4)
                      )
                        break;
                    }
                    return t.join(" \xb7 ");
                  })(e.args),
                  amount: "—",
                  account: e.sender,
                  series: e.series,
                  tone: "neutral",
                };
            }
          })(e, t)
        );
      }
    },
    33034: (e, t, n) => {
      n.d(t, { K: () => p });
      var a = n(72133),
        s = n(82283),
        c = n(35476),
        i = n(84520),
        l = n(91109),
        r = n(13177),
        o = n(36811),
        d = n(13052),
        u = n(32410);
      let m = {
        income: "bg-income-fill",
        upside: "bg-upside-fill",
        neutral: "bg-muted/70",
      };
      function p(e) {
        let {
            id: t,
            title: n,
            subtitle: p,
            result: x,
            offered: h,
            kinds: b,
            onKinds: f,
            ticker: g,
            showAccount: k = !0,
            seriesLabel: j,
            emptyText: v = "No activity yet.",
            className: T,
          } = e,
          y = (0, d.lb)(x.items, { ticker: g }),
          N = 4 + +!!k + +!!j,
          w = x.isPending && !x.unavailable;
        return (0, a.jsxs)(i.Zp, {
          as: "section",
          "aria-labelledby": "".concat(t, "-title"),
          className: T,
          children: [
            (0, a.jsx)(i.aR, {
              title: (0, a.jsxs)("span", {
                id: "".concat(t, "-title"),
                children: [
                  n,
                  p
                    ? (0, a.jsx)("span", {
                        className: "ml-2 font-normal text-muted",
                        children: p,
                      })
                    : null,
                ],
              }),
              aside: (0, a.jsx)(c.d, {
                asOf: x.asOf,
                source: x.source,
                unavailable: x.unavailable,
                compact: !0,
              }),
            }),
            (0, a.jsx)("div", {
              role: "group",
              "aria-label": "Activity kinds",
              className:
                "-mx-4 mb-3 flex gap-1.5 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:px-0",
              children: h.map((e) => {
                let t = b.includes(e);
                return (0, a.jsx)(
                  "button",
                  {
                    type: "button",
                    "aria-pressed": t,
                    onClick: () =>
                      (function (e) {
                        let t = b.includes(e)
                          ? b.filter((t) => t !== e)
                          : [...b, e];
                        f(0 === t.length ? [...h] : t);
                      })(e),
                    className: (0, l.cn)(
                      "shrink-0 rounded-pill border px-3 py-1 text-[11px] font-medium transition-colors",
                      t
                        ? "border-rule bg-raised text-fg"
                        : "border-transparent text-muted hover:bg-raised/60 hover:text-fg"
                    ),
                    children: d.CF[e],
                  },
                  e
                );
              }),
            }),
            x.unavailable
              ? (0, a.jsx)("p", {
                  className: "text-sm text-muted",
                  children:
                    "Indexer unreachable \xb7 no data yet. The chain has no equivalent read for activity.",
                })
              : x.isError
              ? (0, a.jsxs)("div", {
                  className: "flex flex-col items-start gap-2",
                  children: [
                    (0, a.jsxs)("p", {
                      role: "alert",
                      className: "text-sm text-danger",
                      children: [
                        "Activity could not be loaded",
                        x.error ? ": ".concat((0, u.U)(x.error)) : ".",
                      ],
                    }),
                    (0, a.jsx)(i.$n, {
                      size: "sm",
                      variant: "secondary",
                      onClick: x.refetch,
                      disabled: x.isFetching,
                      children: x.isFetching ? "Retrying…" : "Retry",
                    }),
                  ],
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)(i.XI, {
                      "aria-busy": w || void 0,
                      className: (0, l.cn)(
                        "min-w-[640px]",
                        x.isFetching && !w && "opacity-70 transition-opacity"
                      ),
                      children: [
                        (0, a.jsx)(i.D1, {
                          children: (0, a.jsxs)("tr", {
                            children: [
                              (0, a.jsx)(i.TH, { children: "Time" }),
                              (0, a.jsx)(i.TH, { children: "Action" }),
                              (0, a.jsx)(i.TH, {
                                align: "right",
                                children: "Amount",
                              }),
                              j
                                ? (0, a.jsx)(i.TH, { children: "Series" })
                                : null,
                              k
                                ? (0, a.jsx)(i.TH, { children: "Account" })
                                : null,
                              (0, a.jsx)(i.TH, {
                                align: "right",
                                children: "Tx",
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsxs)(i.vc, {
                          children: [
                            w
                              ? [0, 1, 2].map((e) =>
                                  (0, a.jsx)(
                                    i.TR,
                                    {
                                      children: (0, a.jsx)(i.TD, {
                                        colSpan: N,
                                        children: (0, a.jsx)("span", {
                                          className:
                                            "block h-4 w-2/3 animate-pulse rounded bg-raised",
                                        }),
                                      }),
                                    },
                                    "s-".concat(e)
                                  )
                                )
                              : null,
                            w || 0 !== y.length
                              ? null
                              : (0, a.jsx)(i.TR, {
                                  children: (0, a.jsx)(i.TD, {
                                    colSpan: N,
                                    className: "text-muted",
                                    children: v,
                                  }),
                                }),
                            y.map((e) => {
                              var t;
                              return (0, a.jsxs)(
                                i.TR,
                                {
                                  children: [
                                    (0, a.jsx)(i.TD, {
                                      className:
                                        "whitespace-nowrap text-xs text-muted tnum",
                                      title: "block ".concat(e.block),
                                      children: (0, r.Sp)(e.at),
                                    }),
                                    (0, a.jsx)(i.TD, {
                                      children: (0, a.jsxs)("span", {
                                        className: "flex items-start gap-2",
                                        children: [
                                          (0, a.jsx)("span", {
                                            "aria-hidden": "true",
                                            className: (0, l.cn)(
                                              "mt-1.5 inline-block size-1.5 shrink-0 rounded-full",
                                              m[e.tone]
                                            ),
                                          }),
                                          (0, a.jsxs)("span", {
                                            className: "min-w-0",
                                            children: [
                                              (0, a.jsx)("span", {
                                                className:
                                                  "block text-sm text-fg",
                                                children: e.title,
                                              }),
                                              e.detail
                                                ? (0, a.jsx)("span", {
                                                    className:
                                                      "block text-[11px] text-muted",
                                                    children: e.detail,
                                                  })
                                                : null,
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, a.jsx)(i.TD, {
                                      mono: !0,
                                      align: "right",
                                      className: "whitespace-nowrap",
                                      children: e.amount,
                                    }),
                                    j
                                      ? (0, a.jsx)(i.TD, {
                                          className:
                                            "whitespace-nowrap font-mono text-xs text-muted tnum",
                                          children: e.series
                                            ? (0, a.jsx)("a", {
                                                href: (0, d.s$)(e.series),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                title: e.series,
                                                className:
                                                  "rounded-md hover:text-fg",
                                                children:
                                                  null != (t = j(e.series))
                                                    ? t
                                                    : (0, o.Dc)(e.series, 6, 4),
                                              })
                                            : "—",
                                        })
                                      : null,
                                    k
                                      ? (0, a.jsx)(i.TD, {
                                          className:
                                            "whitespace-nowrap font-mono text-xs text-muted tnum",
                                          children: e.account
                                            ? (0, a.jsx)("a", {
                                                href: (0, d.s$)(e.account),
                                                target: "_blank",
                                                rel: "noreferrer",
                                                title: e.account,
                                                className:
                                                  "rounded-md hover:text-fg",
                                                children: (0, o.Dc)(
                                                  e.account,
                                                  6,
                                                  4
                                                ),
                                              })
                                            : "—",
                                        })
                                      : null,
                                    (0, a.jsx)(i.TD, {
                                      align: "right",
                                      children: (0, a.jsxs)("a", {
                                        href: (0, d.KJ)(e.txHash),
                                        target: "_blank",
                                        rel: "noreferrer",
                                        title: e.txHash,
                                        className:
                                          "inline-flex items-center gap-1 rounded-md font-mono text-xs text-muted hover:text-fg",
                                        children: [
                                          (0, o.Dc)(e.txHash, 6, 4),
                                          (0, a.jsx)(s.A, {
                                            className: "size-3",
                                            "aria-hidden": "true",
                                          }),
                                          (0, a.jsx)("span", {
                                            className: "sr-only",
                                            children:
                                              "(opens the block explorer)",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                },
                                e.key
                              );
                            }),
                          ],
                        }),
                      ],
                    }),
                    x.hasNextPage
                      ? (0, a.jsx)("div", {
                          className: "mt-3",
                          children: (0, a.jsx)(i.$n, {
                            size: "sm",
                            variant: "secondary",
                            onClick: x.fetchNextPage,
                            disabled: x.isFetchingNextPage,
                            children: x.isFetchingNextPage
                              ? "Loading…"
                              : "Load more",
                          }),
                        })
                      : null,
                  ],
                }),
          ],
        });
      }
    },
    82283: (e, t, n) => {
      n.d(t, { A: () => a });
      let a = (0, n(99011).A)("external-link", [
        ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
        ["path", { d: "M10 14 21 3", key: "gplh6r" }],
        [
          "path",
          {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp",
          },
        ],
      ]);
    },
  },
]);
