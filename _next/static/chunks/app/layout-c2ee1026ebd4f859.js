(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7177],
  {
    19043: (e, r, o) => {
      "use strict";
      let t, a;
      o.d(r, { Qo: () => v, Rt: () => m, d: () => p });
      var l = o(88507),
        n = o(79486),
        i = o(17063),
        c = o(65973),
        s = o(45558),
        d = o(29142);
      function p() {
        let e = (0, l.L)(d.S5.rpcUrl);
        return d.DL
          ? (0, n.Np)([(0, l.L)(d.DL, { retryCount: 0 }), e], { rank: !1 })
          : e;
      }
      let u = d.bQ === d.S5.testnetId ? c.A : s.$;
      function m() {
        return (
          t ||
            (t = (0, i.l)({
              chain: u,
              transport: p(),
              batch: { multicall: !0 },
            })),
          t
        );
      }
      function v() {
        let e = Date.now();
        if (a && e - a.at < 1e4) return a.p;
        let r = m()
          .getBlock({ blockTag: "latest" })
          .then((e) => ({
            block: Number(e.number),
            timestamp: Number(e.timestamp),
            readAt: Math.floor(Date.now() / 1e3),
          }))
          .catch((e) => {
            throw ((a = void 0), e);
          });
        return (a = { at: e, p: r }), r;
      }
    },
    26511: (e, r, o) => {
      "use strict";
      o.d(r, { UL: () => b, oJ: () => f, sr: () => B });
      var t = o(26196),
        a = o(73475),
        l = o(13987),
        n = o(39056),
        i = o(35384),
        c = o(45432),
        s = o(56666),
        d = o(84173),
        p = o(88507),
        u = o(65973),
        m = o(45558),
        v = o(29142),
        h = o(19043);
      let b = v.bQ === u.A.id ? u.A : m.$;
      function B() {
        var e, r;
        return {
          chainName: b.name,
          nativeCurrency: b.nativeCurrency,
          rpcUrls: [
            v.bQ === v.S5.id
              ? "https://rpc.mainnet.chain.robinhood.com"
              : b.rpcUrls.default.http[0],
          ],
          blockExplorerUrls: [
            v.bQ === v.S5.id
              ? v.S5.explorerUrl
              : null !=
                (r = null == (e = b.blockExplorers) ? void 0 : e.default.url)
              ? r
              : v.S5.explorerUrl,
          ],
        };
      }
      function f() {
        return (0, t.Y8)({
          appName: "Talis",
          appDescription:
            "One asset. Two perspectives. Income and Upside positions on Robinhood Stock Tokens.",
          appUrl: v.W6,
          appIcon: "".concat(v.W6, "/icons/icon-512.png"),
          projectId:
            null !== v.U1 && void 0 !== v.U1 ? v.U1 : "talis-no-walletconnect",
          wallets: v.U1
            ? [
                {
                  groupName: "Popular",
                  wallets: [a.w, l.d, n.O, i.G, c.m, s.Z],
                },
                { groupName: "More", wallets: [d.H] },
              ]
            : [{ groupName: "Browser wallets", wallets: [a.w, c.m, d.H] }],
          chains: [m.$, u.A],
          transports: {
            [m.$.id]: (0, h.d)(),
            [u.A.id]: (0, p.L)("https://rpc.testnet.chain.robinhood.com"),
          },
          ssr: !0,
          multiInjectedProviderDiscovery: !0,
        });
      }
    },
    29142: (e, r, o) => {
      "use strict";
      o.d(r, {
        A: () => R,
        Ac: () => P,
        Ag: () => g,
        Bb: () => L,
        Bj: () => I,
        CV: () => A,
        CZ: () => O,
        DL: () => E,
        KO: () => B,
        OB: () => C,
        S5: () => x,
        U1: () => k,
        W6: () => _,
        bQ: () => T,
        g: () => b,
        kx: () => f,
        nl: () => D,
        v0: () => h,
      });
      var t,
        a,
        l,
        n,
        i,
        c,
        s,
        d,
        p,
        u,
        m,
        v = o(73466);
      let h = "TALIS".trim() || "TALIS",
        b = "live",
        B = "live" === b,
        f = "Preview data \xb7 no live series yet \xb7 values are illustrative",
        _ = "https://talis.markets".trim() || "http://localhost:3170",
        g =
          "preview" === b
            ? {
                topbar: "top-7",
                sidebar: "md:top-[5.25rem] md:h-[calc(100dvh-5.25rem)]",
              }
            : {
                topbar: "top-0",
                sidebar: "md:top-14 md:h-[calc(100dvh-3.5rem)]",
              },
        x = {
          id: 4663,
          name: "Robinhood Chain",
          shortName: "Robinhood",
          rpcUrl:
            "https://rpc.mainnet.chain.robinhood.com".trim() ||
            "https://rpc.mainnet.chain.robinhood.com",
          explorerUrl: "https://robinhoodchain.blockscout.com",
          nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
          testnetId: 46630,
        },
        E = /^https?:\/\//.test(
          null !=
            (c =
              null == (t = v.env.NEXT_PUBLIC_RPC_PROXY_URL) ? void 0 : t.trim())
            ? c
            : ""
        )
          ? v.env.NEXT_PUBLIC_RPC_PROXY_URL.trim().replace(/\/+$/, "")
          : void 0,
        C = /^https?:\/\//.test(
          null !==
            (s = "https://talis-indexer.iljanemesis.workers.dev".trim()) &&
            void 0 !== s
            ? s
            : ""
        )
          ? "https://talis-indexer.iljanemesis.workers.dev"
              .trim()
              .replace(/\/+$/, "")
          : void 0,
        T = Number("4663") || x.id,
        k = /^[0-9a-f]{32}$/i.test(
          null !=
            (d =
              null == (a = v.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID)
                ? void 0
                : a.trim())
            ? d
            : ""
        )
          ? v.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID.trim()
          : void 0,
        L = /^0x[0-9a-fA-F]{40}$/.test(
          null != (p = v.env.NEXT_PUBLIC_FACTORY_ADDRESS) ? p : ""
        )
          ? v.env.NEXT_PUBLIC_FACTORY_ADDRESS
          : void 0,
        U =
          "https://dexscreener.com/robinhood/0x3430fe00a00c586c9e879ce5ba3ab7b76a2fc3843ca63d84c0c5fa9879ebc0b6",
        N = /^0x[0-9a-fA-F]{40}$/.test(
          null !=
            (u =
              null == (l = v.env.NEXT_PUBLIC_TOKEN_ADDRESS) ? void 0 : l.trim())
            ? u
            : ""
        )
          ? v.env.NEXT_PUBLIC_TOKEN_ADDRESS.trim()
          : "0xComingSoon",
        S = /^https:\/\/[^\s/]+\/\S+$/.test(
          null !=
            (m =
              null == (n = v.env.NEXT_PUBLIC_TOKEN_CHART_URL)
                ? void 0
                : n.trim())
            ? m
            : ""
        )
          ? v.env.NEXT_PUBLIC_TOKEN_CHART_URL.trim()
          : U;
      function w(e) {
        var r;
        let o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          t =
            null !=
            (r = e.split(/[?#]/)[0].replace(/\/+$/, "").split("/").pop())
              ? r
              : "";
        return /^0x[0-9a-fA-F]{40}$|^0x[0-9a-fA-F]{64}$/.test(t) ? t : o;
      }
      let A = {
          name: "Talis",
          symbol: h,
          decimals: 18,
          address: N,
          chartUrl: S,
          pairId: w(S, w(U)),
          explorerUrl: "".concat(x.explorerUrl, "/token/").concat(N),
        },
        I = "0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168",
        D = {
          modelSigma: 0.25,
          modelRate: 0,
          feeBps: 500,
          auctionStartBps: 5e3,
          auctionFloorBps: 200,
          auctionStepSeconds: 30,
          auctionSteps: 240,
          capChoicesBps: [0, 200, 500, 1e3],
          oraclePrecisionPct: 0.5,
        },
        R = {
          docs: "/docs",
          x: "https://x.com",
          discord: "https://discord.com",
          telegram: "https://t.me",
          github: "https://github.com",
        },
        P = {
          marketing: [
            // { label: "Markets", href: "/app/markets" },
            // { label: "How It Works", href: "/#how-it-works" },
            // { label: "Launchpad", href: "/app/launchpad" },
            // { label: "Docs", href: "/docs" },
          ],
        };
      null == (i = v.env.NEXT_PUBLIC_GEO_OVERRIDE) || i.trim();
      let O = !1;
    },
    31022: (e, r, o) => {
      Promise.resolve().then(o.bind(o, 49858)),
        Promise.resolve().then(o.t.bind(o, 80981, 23)),
        Promise.resolve().then(o.t.bind(o, 2221, 23)),
        Promise.resolve().then(o.t.bind(o, 54725, 23));
    },
    49858: (e, r, o) => {
      "use strict";
      o.d(r, { Providers: () => u });
      var t = o(72133);
      o(96547);
      var a = o(26196);
      let l = (e) => {
        let { address: r, ensImage: o, size: a } = e;
        if (o)
          return (0, t.jsx)("img", {
            src: o,
            width: a,
            height: a,
            alt: "",
            style: { borderRadius: 999, display: "block" },
          });
        let l = parseInt(r.slice(2, 10), 16) % 360;
        return (0, t.jsxs)("svg", {
          width: a,
          height: a,
          viewBox: "0 0 40 40",
          "aria-hidden": "true",
          style: { borderRadius: 999, display: "block" },
          children: [
            (0, t.jsx)("circle", {
              cx: "20",
              cy: "20",
              r: "20",
              fill: "var(--color-forest-deep)",
            }),
            (0, t.jsxs)("g", {
              transform: "rotate(".concat(l, " 20 20)"),
              children: [
                (0, t.jsx)("path", {
                  d: "M10 28 L19 11 L23 19 Z",
                  fill: "var(--color-ivory)",
                  opacity: "0.92",
                }),
                (0, t.jsx)("path", {
                  d: "M17 28 L25 12 L30 28 Z",
                  fill: "var(--color-lime)",
                }),
              ],
            }),
          ],
        });
      };
      var n = o(71101),
        i = o(34201),
        c = o(50625),
        s = o(7459),
        d = o(16867),
        p = o(26511);
      function u(e) {
        let { children: r } = e,
          [o] = (0, c.useState)(() => (0, p.oJ)()),
          [u] = (0, c.useState)(() =>
            (function () {
              let e = (0, d.a)({
                accentColor: "#cce400",
                accentColorForeground: "#0f1f18",
                borderRadius: "medium",
                fontStack: "system",
                overlayBlur: "small",
              });
              return {
                ...e,
                colors: {
                  ...e.colors,
                  accentColor: "var(--color-lime)",
                  accentColorForeground: "var(--color-ink)",
                  actionButtonBorder: "var(--color-line)",
                  actionButtonBorderMobile: "var(--color-line)",
                  actionButtonSecondaryBackground: "var(--color-raised)",
                  closeButton: "var(--color-muted)",
                  closeButtonBackground: "var(--color-raised)",
                  connectButtonBackground: "var(--color-panel)",
                  connectButtonBackgroundError: "var(--color-danger)",
                  connectButtonInnerBackground: "var(--color-raised)",
                  connectButtonText: "var(--color-fg)",
                  connectButtonTextError: "var(--color-ink)",
                  connectionIndicator: "var(--color-lime)",
                  error: "var(--color-danger)",
                  generalBorder: "var(--color-line)",
                  generalBorderDim: "var(--color-line)",
                  menuItemBackground: "var(--color-raised)",
                  modalBackdrop: "rgba(0, 42, 24, 0.55)",
                  modalBackground: "var(--color-panel)",
                  modalBorder: "var(--color-line)",
                  modalText: "var(--color-fg)",
                  modalTextDim: "var(--color-dim)",
                  modalTextSecondary: "var(--color-muted)",
                  profileAction: "var(--color-raised)",
                  profileActionHover: "var(--color-raised)",
                  profileForeground: "var(--color-panel)",
                  selectedOptionBorder: "var(--color-lime)",
                  standby: "var(--color-warning)",
                },
                fonts: { body: "var(--font-sans)" },
                radii: {
                  actionButton: "10px",
                  connectButton: "999px",
                  menuButton: "12px",
                  modal: "var(--radius-card-lg)",
                  modalMobile: "var(--radius-card-lg)",
                },
                shadows: {
                  ...e.shadows,
                  dialog: "0 24px 64px rgba(0, 20, 12, 0.5)",
                },
              };
            })()
          ),
          [m] = (0, c.useState)(
            () =>
              new n.E({
                defaultOptions: {
                  queries: { refetchOnWindowFocus: !1, retry: 1 },
                },
              })
          );
        return (0, t.jsx)(s.x, {
          config: o,
          children: (0, t.jsx)(i.Ht, {
            client: m,
            children: (0, t.jsx)(a.qL, {
              initialChain: p.UL,
              theme: u,
              modalSize: "compact",
              avatar: l,
              appInfo: { appName: "Talis" },
              children: r,
            }),
          }),
        });
      }
    },
    54725: () => {},
  },
  (e) => {
    e.O(0, [7940, 7066, 9276, 3869, 756, 2976, 3346, 4314, 4297, 7358], () =>
      e((e.s = 31022))
    ),
      (_N_E = e.O());
  },
]);
