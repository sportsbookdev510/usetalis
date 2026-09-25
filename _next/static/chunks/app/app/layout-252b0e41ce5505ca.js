(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8253],
  {
    12358: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 95646)),
        Promise.resolve().then(a.bind(a, 43370)),
        Promise.resolve().then(a.bind(a, 13195)),
        Promise.resolve().then(a.bind(a, 30541)),
        Promise.resolve().then(a.bind(a, 56749)),
        Promise.resolve().then(a.t.bind(a, 64133, 23)),
        Promise.resolve().then(a.t.bind(a, 25626, 23));
    },
    13195: (e, t, a) => {
      "use strict";
      a.d(t, { WalletPill: () => m });
      var n = a(72133),
        r = a(26196),
        s = a(76698),
        i = a(94472),
        o = a(91109),
        c = a(29142),
        l = a(36811),
        d = a(36901);
      let h =
        "inline-flex h-8 items-center gap-2 rounded-pill border bg-panel px-3 text-xs transition-colors hover:border-fg hover:text-fg disabled:opacity-60";
      function m(e) {
        let { className: t } = e,
          a = (0, d.vT)();
        return (0, n.jsx)(r.pK.Custom, {
          children: (e) => {
            let {
              account: r,
              chain: m,
              mounted: u,
              openAccountModal: p,
              openConnectModal: x,
            } = e;
            return u && r && m
              ? m.unsupported || m.id !== c.bQ
                ? (0, n.jsxs)("button", {
                    type: "button",
                    onClick: a.switchToActive,
                    disabled: a.switching,
                    title:
                      "Wallet is on another chain \xb7 click to switch to ".concat(
                        c.S5.name
                      ),
                    "aria-label": "Wallet on another chain. Switch to ".concat(
                      c.S5.name
                    ),
                    className: (0, o.cn)(
                      h,
                      "border-warning/60 text-warning",
                      t
                    ),
                    children: [
                      (0, n.jsx)(i.A, {
                        className: "size-3.5",
                        "aria-hidden": "true",
                      }),
                      (0, n.jsx)("span", {
                        className: "tnum",
                        children: a.switching ? "Switching…" : "Switch chain",
                      }),
                    ],
                  })
                : (0, n.jsxs)("button", {
                    type: "button",
                    onClick: p,
                    title: c.KO ? "".concat(r.address, " \xb7 account") : d.yM,
                    "aria-label": "Wallet ".concat(r.address, ". Account menu"),
                    className: (0, o.cn)(h, "border-rule text-fg", t),
                    children: [
                      (0, n.jsx)(s.A, {
                        className: "size-3.5",
                        "aria-hidden": "true",
                      }),
                      (0, n.jsx)("span", {
                        className: "font-mono tnum",
                        children: (0, l.Dc)(r.address),
                      }),
                      a.eth.formatted
                        ? (0, n.jsxs)("span", {
                            className:
                              "hidden font-mono tnum text-muted sm:inline",
                            "aria-label": "Balance ".concat(a.eth.formatted),
                            children: ["\xb7 ", a.eth.formatted],
                          })
                        : null,
                    ],
                  })
              : (0, n.jsxs)("button", {
                  type: "button",
                  onClick: x,
                  disabled: !u,
                  title: c.KO ? "Connect a wallet" : d.yM,
                  "aria-label": "Connect wallet",
                  className: (0, o.cn)(h, "border-rule text-muted", t),
                  children: [
                    (0, n.jsx)(s.A, {
                      className: "size-3.5",
                      "aria-hidden": "true",
                    }),
                    (0, n.jsx)("span", {
                      children:
                        u && a.connecting ? "Connecting…" : "Connect wallet",
                    }),
                  ],
                });
          },
        });
      }
    },
    14141: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      let n = (0, a(99011).A)("merge", [
        ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
        ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22", key: "1hyw0i" }],
        ["path", { d: "m20 22-5-5", key: "1m27yz" }],
      ]);
    },
    30541: (e, t, a) => {
      "use strict";
      a.d(t, { ComplianceGate: () => v });
      var n = a(72133),
        r = a(50625),
        s = a(64133),
        i = a.n(s),
        o = a(72555),
        c = a(84520);
      let l = [
        { code: "US", name: "United States", basis: "r1" },
        {
          code: "PR",
          name: "United States (territory)",
          basis: "r1",
          parent: "US",
        },
        {
          code: "GU",
          name: "United States (territory)",
          basis: "r1",
          parent: "US",
        },
        {
          code: "VI",
          name: "United States (territory)",
          basis: "r1",
          parent: "US",
        },
        {
          code: "AS",
          name: "United States (territory)",
          basis: "r1",
          parent: "US",
        },
        {
          code: "MP",
          name: "United States (territory)",
          basis: "r1",
          parent: "US",
        },
        {
          code: "UM",
          name: "United States (territory)",
          basis: "r1",
          parent: "US",
        },
        { code: "GB", name: "United Kingdom", basis: "r1" },
        { code: "CA", name: "Canada", basis: "r1" },
        { code: "CH", name: "Switzerland", basis: "r1" },
        { code: "AE", name: "United Arab Emirates", basis: "r1" },
        { code: "CU", name: "Cuba", basis: "comprehensive" },
        { code: "IR", name: "Iran", basis: "comprehensive" },
        { code: "KP", name: "North Korea", basis: "comprehensive" },
        { code: "SY", name: "Syria", basis: "comprehensive" },
        { code: "RU", name: "Russia", basis: "comprehensive" },
        { code: "BY", name: "Belarus", basis: "comprehensive" },
        { code: "MM", name: "Myanmar", basis: "targeted" },
        { code: "VE", name: "Venezuela", basis: "targeted" },
        { code: "AF", name: "Afghanistan", basis: "targeted" },
        { code: "CF", name: "Central African Republic", basis: "targeted" },
        {
          code: "CD",
          name: "Democratic Republic of the Congo",
          basis: "targeted",
        },
        { code: "ET", name: "Ethiopia", basis: "targeted" },
        { code: "IQ", name: "Iraq", basis: "targeted" },
        { code: "LB", name: "Lebanon", basis: "targeted" },
        { code: "LY", name: "Libya", basis: "targeted" },
        { code: "ML", name: "Mali", basis: "targeted" },
        { code: "NI", name: "Nicaragua", basis: "targeted" },
        { code: "SD", name: "Sudan", basis: "targeted" },
        { code: "SS", name: "South Sudan", basis: "targeted" },
        { code: "SO", name: "Somalia", basis: "targeted" },
        { code: "YE", name: "Yemen", basis: "targeted" },
        { code: "ZW", name: "Zimbabwe", basis: "targeted" },
        { code: "HT", name: "Haiti", basis: "targeted" },
        { code: "GW", name: "Guinea-Bissau", basis: "targeted" },
      ];
      l.map((e) => [e.code, e]);
      let d = l.filter((e) => "r1" === e.basis && !e.parent).map((e) => e.name);
      function h(e) {
        let {
            country: t,
            countryName: a,
            reason: r,
            from: s,
            className: l,
          } = e,
          h = ""
            .concat(d.slice(0, -1).join(", "), " and ")
            .concat(d[d.length - 1]),
          m =
            "anonymizer" === r
              ? "This request arrived through an anonymizing network (Tor exit)."
              : a
              ? "This request resolved to ".concat(a, " (").concat(t, ").")
              : t
              ? "This request resolved to ".concat(t, ".")
              : "This request resolved to a restricted region.";
        return (0, n.jsxs)("div", {
          className: l,
          children: [
            (0, n.jsx)(c.eN, { children: "Not available \xb7 451" }),
            (0, n.jsxs)(c.tQ, {
              as: "h1",
              size: "lg",
              className: "mt-4",
              children: [
                "Not available",
                (0, n.jsx)("br", {}),
                "in your region.",
              ],
            }),
            (0, n.jsxs)("div", {
              className:
                "mt-6 max-w-xl space-y-3 text-sm leading-relaxed text-muted",
              children: [
                (0, n.jsxs)("p", {
                  children: [
                    "Stock Tokens and the positions built on them are restricted from U.S. persons by their issuer, and this interface is not served in",
                    " ",
                    h,
                    ", or in sanctioned jurisdictions.",
                  ],
                }),
                (0, n.jsxs)("p", {
                  children: [
                    m,
                    " The app",
                    s ? " (".concat(s, ")") : "",
                    " is not served here. Using a VPN, proxy or other tool to reach it is prohibited by the Terms.",
                  ],
                }),
                (0, n.jsx)("p", {
                  children:
                    "The documentation, the risk disclosures and the contract addresses remain readable.",
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: "mt-8 flex flex-wrap gap-3",
              children: [
                (0, n.jsx)(c.$n, {
                  href: "/risk",
                  iconRight: (0, n.jsx)(o.A, {
                    className: "size-4",
                    "aria-hidden": "true",
                  }),
                  children: "Risk",
                }),
                (0, n.jsx)(c.$n, {
                  href: "/docs",
                  variant: "secondary",
                  children: "Docs",
                }),
                (0, n.jsx)(c.$n, {
                  href: "/",
                  variant: "ghost",
                  children: "Home",
                }),
              ],
            }),
            (0, n.jsxs)("p", {
              className: "mt-8 text-[11px] text-dim",
              children: [
                "Region from the request's network location.",
                " ",
                (0, n.jsx)(i(), {
                  href: "/terms#eligibility",
                  className: "underline-offset-2 hover:text-fg hover:underline",
                  children: "Terms \xb7 Eligibility",
                }),
              ],
            }),
          ],
        });
      }
      let m = "talis.attestation",
        u = [
          {
            id: "person",
            text: "I am not a U.S. person, and I am not located in, incorporated in, or a resident of "
              .concat(d.slice(0, -1).join(", "), " or ")
              .concat(
                d[d.length - 1],
                ", or any jurisdiction under sanctions."
              ),
          },
          {
            id: "location",
            text: "I am not using a VPN, proxy or other tool to hide my location, and I will not use one to reach this interface.",
          },
          {
            id: "risks",
            text: "I have read the risk disclosures: Income is not protected, Upside can expire worthless, positions have no venue mid-epoch, and the Stock Token issuer can pause, freeze or burn the collateral.",
          },
          {
            id: "terms",
            text: "I have read the Terms and the Privacy notice, and I use this interface on my own account.",
          },
        ];
      async function p(e) {
        var t;
        let a =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : null == (t = globalThis.crypto)
            ? void 0
            : t.subtle;
        if (!a) return null;
        try {
          let t = await a.digest("SHA-256", new TextEncoder().encode(e));
          return Array.from(new Uint8Array(t), (e) =>
            e.toString(16).padStart(2, "0")
          ).join("");
        } catch (e) {
          return null;
        }
      }
      async function x() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : new Date(),
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return {
          version: t,
          at: e.toISOString(),
          hash: await p(
            (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : u,
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1;
              return [
                "talis attestation v".concat(t),
                ...e.map((e) => "".concat(e.id, ": ").concat(e.text)),
              ].join("\n");
            })(u, t)
          ),
        };
      }
      function b() {
        try {
          return window.localStorage;
        } catch (e) {
          return;
        }
      }
      function g(e) {
        let { open: t, region: a, onAttested: s } = e,
          o = (0, r.useRef)(null),
          [l, d] = (0, r.useState)({}),
          [h, p] = (0, r.useState)(!1),
          g = u.every((e) => l[e.id]);
        async function f() {
          if (!g || h) return;
          p(!0);
          let e = await x();
          !(function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : b();
            if (t)
              try {
                t.setItem(m, JSON.stringify(e));
              } catch (e) {
                return !1;
              }
          })(e),
            p(!1),
            s(e);
        }
        return (
          (0, r.useEffect)(() => {
            let e = o.current;
            e && (t && !e.open && e.showModal(), !t && e.open && e.close());
          }, [t]),
          (0, n.jsx)("dialog", {
            ref: o,
            onCancel: (e) => e.preventDefault(),
            onClose: () => {
              t && o.current && !o.current.open && o.current.showModal();
            },
            "aria-labelledby": "attestation-title",
            "aria-describedby": "attestation-intro",
            className:
              "m-auto max-h-[calc(100dvh-32px)] w-[calc(100vw-32px)] max-w-lg overflow-y-auto rounded-card-lg border border-line bg-raised p-0 text-fg shadow-[var(--shadow-card)] backdrop:bg-black/70 backdrop:backdrop-blur-sm",
            children: (0, n.jsxs)("form", {
              method: "dialog",
              onSubmit: (e) => {
                e.preventDefault(), f();
              },
              className: "flex flex-col gap-5 p-6",
              children: [
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("p", {
                      className: "label-caps",
                      children: "Before you continue",
                    }),
                    (0, n.jsx)("h2", {
                      id: "attestation-title",
                      className:
                        "mt-1 font-display text-xl font-semibold tracking-display",
                      children: "Eligibility and risk",
                    }),
                    (0, n.jsxs)("p", {
                      id: "attestation-intro",
                      className: "mt-2 text-sm text-muted",
                      children: [
                        "Stock Tokens are restricted from U.S. persons and other listed jurisdictions by their issuer. Confirm each statement to use the app. Asked once per browser; version ",
                        1,
                        ".",
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("ul", {
                  className: "flex flex-col gap-3",
                  children: u.map((e) =>
                    (0, n.jsx)(
                      "li",
                      {
                        children: (0, n.jsxs)("label", {
                          className:
                            "flex cursor-pointer items-start gap-3 rounded-card border border-line bg-panel p-3 text-sm leading-relaxed text-fg has-[:checked]:border-rule",
                          children: [
                            (0, n.jsx)("input", {
                              type: "checkbox",
                              name: e.id,
                              required: !0,
                              checked: !!l[e.id],
                              onChange: (t) =>
                                d((a) => ({ ...a, [e.id]: t.target.checked })),
                              className:
                                "mt-1 size-4 shrink-0 accent-[var(--color-accent)]",
                            }),
                            (0, n.jsx)("span", { children: e.text }),
                          ],
                        }),
                      },
                      e.id
                    )
                  ),
                }),
                (0, n.jsxs)("p", {
                  className: "text-xs text-muted",
                  children: [
                    "Read first:",
                    " ",
                    (0, n.jsx)(i(), {
                      href: "/risk",
                      className: "text-fg underline-offset-2 hover:underline",
                      children: "Risk",
                    }),
                    " \xb7 ",
                    (0, n.jsx)(i(), {
                      href: "/terms",
                      className: "text-fg underline-offset-2 hover:underline",
                      children: "Terms",
                    }),
                    " \xb7 ",
                    (0, n.jsx)(i(), {
                      href: "/privacy",
                      className: "text-fg underline-offset-2 hover:underline",
                      children: "Privacy",
                    }),
                    a
                      ? (0, n.jsx)("span", {
                          className: "ml-2 font-mono text-[11px] text-dim",
                          children: a,
                        })
                      : null,
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "flex flex-wrap items-center gap-2 pt-1",
                  children: [
                    (0, n.jsx)(c.$n, {
                      type: "submit",
                      disabled: !g || h,
                      children: h ? "Saving…" : "Confirm and continue",
                    }),
                    (0, n.jsx)(c.$n, {
                      variant: "secondary",
                      href: "/",
                      children: "Leave",
                    }),
                    (0, n.jsx)("span", {
                      className: "ml-auto text-[11px] text-dim",
                      children: "Stored in this browser only.",
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var f = a(90756),
        y = a(29142);
      function v(e) {
        var t;
        let { children: a } = e,
          [s, i] = (0, r.useState)(null),
          o = (function () {
            let e =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0];
            return (0, f.I)({
              queryKey: ["compliance", "geo"],
              enabled: e,
              staleTime: 3e5,
              retry: 0,
              queryFn: async () => {
                let e = await fetch("/api/geo", {
                  cache: "no-store",
                  headers: { accept: "application/json" },
                });
                if (!e.ok) throw Error("geo ".concat(e.status));
                return await e.json();
              },
            });
          })(!y.CZ);
        if (
          ((0, r.useEffect)(() => {
            i(
              null !==
                (function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : b();
                  if (!e) return null;
                  try {
                    return (function (e) {
                      let t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 1,
                        a =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : Date.now();
                      if (!e) return null;
                      try {
                        let n = JSON.parse(e);
                        return !(function (e) {
                          let t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : 1,
                            a =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : Date.now();
                          if (
                            !e ||
                            "object" != typeof e ||
                            e.version !== t ||
                            "string" != typeof e.at
                          )
                            return !1;
                          let n = Date.parse(e.at);
                          return (
                            !!Number.isFinite(n) &&
                            !(n > a + 3e5) &&
                            (null === e.hash || "string" == typeof e.hash)
                          );
                        })(n, t, a)
                          ? null
                          : n;
                      } catch (e) {
                        return null;
                      }
                    })(e.getItem(m));
                  } catch (e) {
                    return null;
                  }
                })()
            );
          }, []),
          y.CZ)
        )
          return (0, n.jsx)(n.Fragment, { children: a });
        if (o.data && !o.data.allowed)
          return (0, n.jsx)(h, {
            country: o.data.country,
            countryName: o.data.countryName,
            reason: o.data.reason,
            className: "py-6 md:py-10",
          });
        let c = (null == (t = o.data) ? void 0 : t.country)
          ? "Region "
              .concat(o.data.country, " \xb7 ")
              .concat("header" === o.data.source ? "network" : o.data.source)
          : null;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("div", {
              inert: !0 !== s || void 0,
              "aria-busy": null === s || void 0,
              className: "contents",
              children: a,
            }),
            !1 === s
              ? (0, n.jsx)(g, { open: !0, region: c, onAttested: () => i(!0) })
              : null,
          ],
        });
      }
    },
    43370: (e, t, a) => {
      "use strict";
      a.d(t, { Sidebar: () => y });
      var n = a(72133),
        r = a(64133),
        s = a.n(r),
        i = a(12214),
        o = a(50625),
        c = a(99011);
      let l = (0, c.A)("chart-column", [
          ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
          ["path", { d: "M18 17V9", key: "2bz60n" }],
          ["path", { d: "M13 17V5", key: "1frdt8" }],
          ["path", { d: "M8 17v-3", key: "17ska0" }],
        ]),
        d = (0, c.A)("layers", [
          [
            "path",
            {
              d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
              key: "zw3jo",
            },
          ],
          [
            "path",
            {
              d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
              key: "1wduqc",
            },
          ],
          [
            "path",
            {
              d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
              key: "kqbvx6",
            },
          ],
        ]),
        h = (0, c.A)("rocket", [
          [
            "path",
            {
              d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
              key: "m3kijz",
            },
          ],
          [
            "path",
            {
              d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
              key: "1fmvmk",
            },
          ],
          [
            "path",
            { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" },
          ],
          [
            "path",
            { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" },
          ],
        ]),
        m = (0, c.A)("gavel", [
          [
            "path",
            {
              d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381",
              key: "pgg06f",
            },
          ],
          ["path", { d: "m16 16 6-6", key: "vzrcl6" }],
          ["path", { d: "m21.5 10.5-8-8", key: "a17d9x" }],
          ["path", { d: "m8 8 6-6", key: "18bi4p" }],
          ["path", { d: "m8.5 7.5 8 8", key: "1oyaui" }],
        ]),
        u = (0, c.A)("clock", [
          ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ]);
      var p = a(14141);
      let x = (0, c.A)("gift", [
        [
          "rect",
          { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" },
        ],
        ["path", { d: "M12 8v13", key: "1c76mn" }],
        [
          "path",
          { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" },
        ],
        [
          "path",
          {
            d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
            key: "1ihvrl",
          },
        ],
      ]);
      var b = a(29142),
        g = a(91109);
      let f = [
        { label: "Markets", href: "https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=0xc8885f68acb213b144fda1835d61ef05d88ad687", icon: l },
        { label: "Positions", href: "/app/positions", icon: d },
        { label: "Launchpad", href: "/app/launchpad", icon: h },
        { label: "Auctions", href: "/app/auctions", icon: m },
        { label: "Epochs", href: "/app/epochs", icon: u },
        { label: "Recompose", href: "/app/recompose", icon: p.A },
        { label: "Rewards", href: "/app/rewards", icon: x },
      ];
      function y() {
        let e = (0, i.usePathname)(),
          t = (0, o.useRef)(null);
        return (
          (0, o.useEffect)(() => {
            var e, a;
            window.matchMedia("(min-width: 768px)").matches ||
              null == (a = t.current) ||
              null == (e = a.querySelector('[aria-current="page"]')) ||
              e.scrollIntoView({ inline: "nearest", block: "nearest" });
          }, [e]),
          (0, n.jsx)("nav", {
            "aria-label": "App",
            className: (0, g.cn)(
              "md:sticky md:w-52 md:shrink-0 md:border-r md:border-line",
              b.Ag.sidebar
            ),
            children: (0, n.jsx)("ul", {
              ref: t,
              className:
                "relative -mx-4 flex snap-x gap-1 overflow-x-auto px-4 py-2 scroll-px-4 [contain:inline-size] [mask-image:linear-gradient(to_right,black_calc(100%_-_32px),transparent)] md:mx-0 md:flex-col md:overflow-visible md:px-3 md:py-4 md:[mask-image:none]",
              children: f.map((t) => {
                let { label: a, href: r, icon: i } = t,
                  o = e === r || e.startsWith("".concat(r, "/"));
                return (0, n.jsx)(
                  "li",
                  {
                    className: "shrink-0 snap-start",
                    children: (0, n.jsxs)(s(), {
                      href: r,
                      "aria-current": o ? "page" : void 0,
                      className: (0, g.cn)(
                        "flex h-9 items-center gap-2.5 rounded-lg px-3 text-sm transition-colors",
                        o
                          ? "bg-raised text-fg"
                          : "text-muted hover:bg-raised/60 hover:text-fg"
                      ),
                      children: [
                        (0, n.jsx)(i, {
                          className: (0, g.cn)(
                            "size-4",
                            o ? "text-accent" : "text-muted"
                          ),
                          "aria-hidden": "true",
                        }),
                        a,
                      ],
                    }),
                  },
                  r
                );
              }),
            }),
          })
        );
      }
    },
    72555: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      let n = (0, a(99011).A)("arrow-right", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    76698: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      let n = (0, a(99011).A)("wallet", [
        [
          "path",
          {
            d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
            key: "18etb6",
          },
        ],
        [
          "path",
          { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" },
        ],
      ]);
    },
    94472: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      let n = (0, a(99011).A)("triangle-alert", [
        [
          "path",
          {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq",
          },
        ],
        ["path", { d: "M12 9v4", key: "juzpu7" }],
        ["path", { d: "M12 17h.01", key: "p32p05" }],
      ]);
    },
  },
  (e) => {
    e.O(
      0,
      [9276, 4133, 755, 3869, 756, 2976, 4520, 592, 2193, 4314, 4297, 7358],
      () => e((e.s = 12358))
    ),
      (_N_E = e.O());
  },
]);
