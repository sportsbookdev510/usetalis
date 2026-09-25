"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2193],
  {
    12214: (e, n, t) => {
      var a = t(67178);
      t.o(a, "usePathname") &&
        t.d(n, {
          usePathname: function () {
            return a.usePathname;
          },
        }),
        t.o(a, "useRouter") &&
          t.d(n, {
            useRouter: function () {
              return a.useRouter;
            },
          }),
        t.o(a, "useSearchParams") &&
          t.d(n, {
            useSearchParams: function () {
              return a.useSearchParams;
            },
          });
    },
    19043: (e, n, t) => {
      let a, r;
      t.d(n, { Qo: () => p, Rt: () => m, d: () => d });
      var o = t(88507),
        l = t(79486),
        i = t(17063),
        c = t(65973),
        s = t(45558),
        u = t(29142);
      function d() {
        let e = (0, o.L)(u.S5.rpcUrl);
        return u.DL
          ? (0, l.Np)([(0, o.L)(u.DL, { retryCount: 0 }), e], { rank: !1 })
          : e;
      }
      let h = u.bQ === u.S5.testnetId ? c.A : s.$;
      function m() {
        return (
          a ||
            (a = (0, i.l)({
              chain: h,
              transport: d(),
              batch: { multicall: !0 },
            })),
          a
        );
      }
      function p() {
        let e = Date.now();
        if (r && e - r.at < 1e4) return r.p;
        let n = m()
          .getBlock({ blockTag: "latest" })
          .then((e) => ({
            block: Number(e.number),
            timestamp: Number(e.timestamp),
            readAt: Math.floor(Date.now() / 1e3),
          }))
          .catch((e) => {
            throw ((r = void 0), e);
          });
        return (r = { at: e, p: n }), n;
      }
    },
    26511: (e, n, t) => {
      t.d(n, { UL: () => f, oJ: () => v, sr: () => g });
      var a = t(26196),
        r = t(73475),
        o = t(13987),
        l = t(39056),
        i = t(35384),
        c = t(45432),
        s = t(56666),
        u = t(84173),
        d = t(88507),
        h = t(65973),
        m = t(45558),
        p = t(29142),
        w = t(19043);
      let f = p.bQ === h.A.id ? h.A : m.$;
      function g() {
        var e, n;
        return {
          chainName: f.name,
          nativeCurrency: f.nativeCurrency,
          rpcUrls: [
            p.bQ === p.S5.id
              ? "https://rpc.mainnet.chain.robinhood.com"
              : f.rpcUrls.default.http[0],
          ],
          blockExplorerUrls: [
            p.bQ === p.S5.id
              ? p.S5.explorerUrl
              : null !=
                (n = null == (e = f.blockExplorers) ? void 0 : e.default.url)
              ? n
              : p.S5.explorerUrl,
          ],
        };
      }
      function v() {
        return (0, a.Y8)({
          appName: "Talis",
          appDescription:
            "One asset. Two perspectives. Income and Upside positions on Robinhood Stock Tokens.",
          appUrl: p.W6,
          appIcon: "".concat(p.W6, "/icons/icon-512.png"),
          projectId:
            null !== p.U1 && void 0 !== p.U1 ? p.U1 : "talis-no-walletconnect",
          wallets: p.U1
            ? [
                {
                  groupName: "Popular",
                  wallets: [r.w, o.d, l.O, i.G, c.m, s.Z],
                },
                { groupName: "More", wallets: [u.H] },
              ]
            : [{ groupName: "Browser wallets", wallets: [r.w, c.m, u.H] }],
          chains: [m.$, h.A],
          transports: {
            [m.$.id]: (0, w.d)(),
            [h.A.id]: (0, d.L)("https://rpc.testnet.chain.robinhood.com"),
          },
          ssr: !0,
          multiInjectedProviderDiscovery: !0,
        });
      }
    },
    36901: (e, n, t) => {
      t.d(n, { qK: () => f, sN: () => g, vT: () => v, yM: () => w });
      var a = t(26196),
        r = t(90756),
        o = t(50625),
        l = t(71209),
        i = t(32916),
        c = t(37762),
        s = t(61058),
        u = t(55167),
        d = t(30823),
        h = t(29142),
        m = t(26511),
        p = t(93617);
      let w = "Preview mode \xb7 no transaction is sent";
      function f() {
        let [e, n] = (0, o.useState)(!1);
        return (0, o.useEffect)(() => n(!0), []), e;
      }
      function g() {
        let e = f(),
          { address: n, isConnected: t, chainId: a } = (0, i.F)();
        return (0, o.useMemo)(
          () =>
            h.KO
              ? e
                ? t && n
                  ? a !== h.bQ
                    ? { canWrite: !1, reason: "Switch to ".concat(m.UL.name) }
                    : { canWrite: !0 }
                  : { canWrite: !1, reason: "Connect a wallet" }
                : { canWrite: !1, reason: "Loading wallet…" }
              : { canWrite: !1, reason: w },
          [e, n, t, a]
        );
      }
      function v() {
        let e = f(),
          n = (0, c.U)(),
          {
            address: t,
            isConnected: w,
            isConnecting: v,
            chainId: b,
          } = (0, i.F)(),
          { openConnectModal: y, connectModalOpen: C } = (0, a.Vx)(),
          { disconnect: x } = (0, s.u)(),
          { switchChain: N, isPending: k } = (0, u.R)(),
          L = g(),
          S = (0, r.I)({
            queryKey: p.y.eth(h.bQ, t),
            queryFn: async () =>
              (await (0, d.r)(n, { address: t, chainId: h.bQ })).value,
            enabled: h.KO && e && !!t,
            staleTime: 15e3,
          }),
          U = (0, o.useCallback)(() => (null == y ? void 0 : y()), [y]),
          j = (0, o.useCallback)(
            () => N({ chainId: h.bQ, addEthereumChainParameter: (0, m.sr)() }),
            [N]
          ),
          P = e && (v || C);
        return (0, o.useMemo)(
          () => ({
            mounted: e,
            address: e ? t : void 0,
            isConnected: e && w,
            chainId: e ? b : void 0,
            onChain: e && w && b === h.bQ,
            connect: U,
            disconnect: () => x(),
            switchToActive: j,
            connecting: P,
            switching: k,
            eth: {
              value: S.data,
              formatted:
                void 0 !== S.data
                  ? (function (e) {
                      let [n = "0", t = ""] = (0, l.J)(e, 18).split("."),
                        a = t.slice(0, 4).replace(/0+$/, "");
                      return ""
                        .concat(n)
                        .concat(a ? ".".concat(a) : "", " ETH");
                    })(S.data)
                  : void 0,
              isLoading: S.isLoading,
            },
            gate: L,
            previewNote: h.KO ? void 0 : h.kx,
          }),
          [e, t, w, b, U, x, j, P, k, S.data, S.isLoading, L]
        );
      }
    },
    40453: (e, n, t) => {
      t.d(n, { default: () => r.a });
      var a = t(79869),
        r = t.n(a);
    },
    79869: (e, n, t) => {
      Object.defineProperty(n, "__esModule", { value: !0 }),
        !(function (e, n) {
          for (var t in n)
            Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
        })(n, {
          default: function () {
            return c;
          },
          getImageProps: function () {
            return i;
          },
        });
      let a = t(31727),
        r = t(11090),
        o = t(25626),
        l = a._(t(62898));
      function i(e) {
        let { props: n } = (0, r.getImgProps)(e, {
          defaultLoader: l.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [e, t] of Object.entries(n)) void 0 === t && delete n[e];
        return { props: n };
      }
      let c = o.Image;
    },
    93617: (e, n, t) => {
      t.d(n, { i: () => o, y: () => r });
      var a = t(54096);
      let r = {
        all: ["wallet"],
        account: (e, n) => {
          var t;
          return [
            "wallet",
            e,
            null != (t = null == n ? void 0 : n.toLowerCase()) ? t : "none",
          ];
        },
        eth: (e, n) => [...r.account(e, n), "eth"],
        balances: (e, n, t) => [
          ...r.account(e, n),
          "balances",
          t.map((e) => e.toLowerCase()).join(","),
        ],
        allowance: (e, n, t, a) => [
          ...r.account(e, n),
          "allowance",
          t.toLowerCase(),
          a.toLowerCase(),
        ],
        read: function (e, n, t) {
          for (
            var a = arguments.length, r = Array(a > 3 ? a - 3 : 0), o = 3;
            o < a;
            o++
          )
            r[o - 3] = arguments[o];
          return ["wallet-read", e, n.toLowerCase(), t, ...r];
        },
      };
      async function o(e, n, t) {
        let o =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        try {
          var l, i;
          null == (l = (i = await (0, a.U)()).invalidate) || l.call(i);
        } catch (e) {}
        let c = !1 === o.refetch ? "none" : "active";
        await Promise.all([
          e.invalidateQueries({ queryKey: ["talis"], refetchType: c }),
          e.invalidateQueries({ queryKey: r.account(n, t), refetchType: c }),
          e.invalidateQueries({ queryKey: ["wallet-read", n], refetchType: c }),
        ]);
      }
    },
    95646: (e, n, t) => {
      t.d(n, { ChainChip: () => i });
      var a = t(72133),
        r = t(29142),
        o = t(91109),
        l = t(36901);
      function i(e) {
        var n;
        let { className: t, compact: i } = e,
          c = (0, l.vT)(),
          s = c.isConnected && !c.onChain,
          u = c.onChain ? "on" : s ? "wrong" : "off",
          d =
            "wrong" === u
              ? "Wrong chain".concat(
                  c.chainId ? " (".concat(c.chainId, ")") : ""
                )
              : r.S5.name,
          h =
            "on" === u
              ? "Wallet on ".concat(r.S5.name)
              : "wrong" === u
              ? "Wallet on chain "
                  .concat(null != (n = c.chainId) ? n : "?", " \xb7 switch to ")
                  .concat(r.S5.name)
              : "".concat(r.S5.name, " \xb7 no wallet connected");
        return (0, a.jsxs)("span", {
          className: (0, o.cn)(
            "inline-flex h-8 items-center gap-2 rounded-pill border border-line bg-panel px-3 text-xs",
            "wrong" === u ? "text-warning" : "text-muted",
            t
          ),
          title: h,
          "data-chain-state": u,
          children: [
            (0, a.jsx)("span", {
              "aria-hidden": "true",
              className: (0, o.cn)(
                "inline-flex size-3.5 items-center justify-center rounded-full border",
                "on" === u
                  ? "border-accent/70"
                  : "wrong" === u
                  ? "border-warning/70"
                  : "border-line"
              ),
              children: (0, a.jsx)("span", {
                className: (0, o.cn)(
                  "size-1.5 rounded-full",
                  "on" === u
                    ? "bg-accent"
                    : "wrong" === u
                    ? "bg-warning"
                    : "bg-muted/60"
                ),
              }),
            }),
            i
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("span", {
                      className: "sm:hidden",
                      "aria-hidden": "true",
                      children: "wrong" === u ? "!" : "RH",
                    }),
                    (0, a.jsx)("span", {
                      className: "sr-only sm:not-sr-only",
                      children: d,
                    }),
                  ],
                })
              : (0, a.jsx)("span", { children: d }),
            "on" !== u
              ? (0, a.jsx)("span", {
                  className: "sr-only",
                  children:
                    "wrong" === u
                      ? "Wallet is not on ".concat(r.S5.name)
                      : "No wallet connected",
                })
              : null,
          ],
        });
      }
    },
    99011: (e, n, t) => {
      t.d(n, { A: () => c });
      var a = t(50625);
      let r = (e) => {
          let n = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, n, t) =>
            t ? t.toUpperCase() : n.toLowerCase()
          );
          return n.charAt(0).toUpperCase() + n.slice(1);
        },
        o = function () {
          for (var e = arguments.length, n = Array(e), t = 0; t < e; t++)
            n[t] = arguments[t];
          return n
            .filter((e, n, t) => !!e && "" !== e.trim() && t.indexOf(e) === n)
            .join(" ")
            .trim();
        };
      var l = {
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
      let i = (0, a.forwardRef)((e, n) => {
          let {
            color: t = "currentColor",
            size: r = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: c,
            className: s = "",
            children: u,
            iconNode: d,
            ...h
          } = e;
          return (0, a.createElement)(
            "svg",
            {
              ref: n,
              ...l,
              width: r,
              height: r,
              stroke: t,
              strokeWidth: c ? (24 * Number(i)) / Number(r) : i,
              className: o("lucide", s),
              ...(!u &&
                !((e) => {
                  for (let n in e)
                    if (n.startsWith("aria-") || "role" === n || "title" === n)
                      return !0;
                })(h) && { "aria-hidden": "true" }),
              ...h,
            },
            [
              ...d.map((e) => {
                let [n, t] = e;
                return (0, a.createElement)(n, t);
              }),
              ...(Array.isArray(u) ? u : [u]),
            ]
          );
        }),
        c = (e, n) => {
          let t = (0, a.forwardRef)((t, l) => {
            let { className: c, ...s } = t;
            return (0, a.createElement)(i, {
              ref: l,
              iconNode: n,
              className: o(
                "lucide-".concat(
                  r(e)
                    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                    .toLowerCase()
                ),
                "lucide-".concat(e),
                c
              ),
              ...s,
            });
          });
          return (t.displayName = r(e)), t;
        };
    },
  },
]);
