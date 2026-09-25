"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [592],
  {
    29142: (e, t, n) => {
      n.d(t, {
        A: () => I,
        Ac: () => L,
        Ag: () => C,
        Bb: () => x,
        Bj: () => M,
        CV: () => y,
        CZ: () => P,
        DL: () => g,
        KO: () => v,
        OB: () => A,
        S5: () => D,
        U1: () => T,
        W6: () => S,
        bQ: () => k,
        g: () => U,
        kx: () => b,
        nl: () => F,
        v0: () => f,
      });
      var a,
        i,
        r,
        o,
        s,
        c,
        l,
        d,
        p,
        u,
        m,
        h = n(73466);
      let f = "TALIS".trim() || "TALIS",
        U = "live",
        v = "live" === U,
        b = "Preview data \xb7 no live series yet \xb7 values are illustrative",
        S = "https://talis.markets".trim() || "http://localhost:3170",
        C =
          "preview" === U
            ? {
                topbar: "top-7",
                sidebar: "md:top-[5.25rem] md:h-[calc(100dvh-5.25rem)]",
              }
            : {
                topbar: "top-0",
                sidebar: "md:top-14 md:h-[calc(100dvh-3.5rem)]",
              },
        D = {
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
        g = /^https?:\/\//.test(
          null !=
            (c =
              null == (a = h.env.NEXT_PUBLIC_RPC_PROXY_URL) ? void 0 : a.trim())
            ? c
            : ""
        )
          ? h.env.NEXT_PUBLIC_RPC_PROXY_URL.trim().replace(/\/+$/, "")
          : void 0,
        A = /^https?:\/\//.test(
          null !==
            (l = "https://talis-indexer.iljanemesis.workers.dev".trim()) &&
            void 0 !== l
            ? l
            : ""
        )
          ? "https://talis-indexer.iljanemesis.workers.dev"
              .trim()
              .replace(/\/+$/, "")
          : void 0,
        k = Number("4663") || D.id,
        T = /^[0-9a-f]{32}$/i.test(
          null !=
            (d =
              null == (i = h.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID)
                ? void 0
                : i.trim())
            ? d
            : ""
        )
          ? h.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID.trim()
          : void 0,
        x = /^0x[0-9a-fA-F]{40}$/.test(
          null != (p = h.env.NEXT_PUBLIC_FACTORY_ADDRESS) ? p : ""
        )
          ? h.env.NEXT_PUBLIC_FACTORY_ADDRESS
          : void 0,
        E =
          "https://dexscreener.com/robinhood/0x3430fe00a00c586c9e879ce5ba3ab7b76a2fc3843ca63d84c0c5fa9879ebc0b6",
        N = /^0x[0-9a-fA-F]{40}$/.test(
          null !=
            (u =
              null == (r = h.env.NEXT_PUBLIC_TOKEN_ADDRESS) ? void 0 : r.trim())
            ? u
            : ""
        )
          ? h.env.NEXT_PUBLIC_TOKEN_ADDRESS.trim()
          : "0xc8885f68acb213b144fda1835d61ef05d88ad687",
        B = /^https:\/\/[^\s/]+\/\S+$/.test(
          null !=
            (m =
              null == (o = h.env.NEXT_PUBLIC_TOKEN_CHART_URL)
                ? void 0
                : o.trim())
            ? m
            : ""
        )
          ? h.env.NEXT_PUBLIC_TOKEN_CHART_URL.trim()
          : E;
      function _(e) {
        var t;
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          a =
            null !=
            (t = e.split(/[?#]/)[0].replace(/\/+$/, "").split("/").pop())
              ? t
              : "";
        return /^0x[0-9a-fA-F]{40}$|^0x[0-9a-fA-F]{64}$/.test(a) ? a : n;
      }
      let y = {
          name: "Talis",
          symbol: f,
          decimals: 18,
          address: N,
          chartUrl: B,
          pairId: _(B, _(E)),
          explorerUrl: "".concat(D.explorerUrl, "/token/").concat(N),
        },
        M = "0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168",
        F = {
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
        I = {
          docs: "/docs",
          x: "https://x.com",
          discord: "https://discord.com",
          telegram: "https://t.me",
          github: "https://github.com",
        },
        L = {
          marketing: [
            // { label: "Markets", href: "https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=0xc8885f68acb213b144fda1835d61ef05d88ad687" },
            // { label: "How It Works", href: "/#how-it-works" },
            // { label: "Launchpad", href: "/app/launchpad" },
            // { label: "Docs", href: "/docs" },
          ],
        };
      null == (s = h.env.NEXT_PUBLIC_GEO_OVERRIDE) || s.trim();
      let P = !1;
    },
    36811: (e, t, n) => {
      n.d(t, {
        Dc: () => p,
        H_: () => m,
        J1: () => d,
        KN: () => h,
        Nd: () => s,
        Oe: () => o,
        Uj: () => l,
        XV: () => v,
        _$: () => f,
        bu: () => c,
        dR: () => r,
        iI: () => u,
        jf: () => b,
        lF: () => U,
      });
      let a = new Map();
      function i(e, t) {
        let n = a.get(e);
        return n || ((n = t()), a.set(e, n)), n;
      }
      function r(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e || Number.isNaN(e)) return "—";
        let { decimals: n = 2, compact: a = !1, signed: r = !1 } = t,
          o = i(
            "usd:".concat(n, ":").concat(a),
            () =>
              new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: a ? 0 : n,
                maximumFractionDigits: a ? 2 : n,
                notation: a ? "compact" : "standard",
              })
          ).format(Math.abs(e));
        return e < 0 ? "−".concat(o) : r && e > 0 ? "+".concat(o) : o;
      }
      function o(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e || Number.isNaN(e)) return "—";
        let { decimals: n = 1, signed: a = !0, approx: i = !1 } = t,
          r = 100 * e,
          o = "".concat(Math.abs(r).toFixed(n), "%");
        return ""
          .concat(i ? "~" : "")
          .concat(r < 0 ? "−" : a && r > 0 ? "+" : "")
          .concat(o);
      }
      function s(e) {
        var t;
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e) return "—";
        let a = null != (t = n.decimals) ? t : +(e % 100 != 0);
        return o(e / 1e4, { ...n, decimals: a });
      }
      function c(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return null == e || Number.isNaN(e)
          ? "—"
          : i(
              "num:".concat(t),
              () =>
                new Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: t,
                })
            ).format(e);
      }
      function l(e, t) {
        let n = 10n ** BigInt(t);
        return Number(e / n) + Number(e % n) / Number(n);
      }
      function d(e, t) {
        let [n = "0", a = ""] = e.toFixed(t).split(".");
        return BigInt(n) * 10n ** BigInt(t) + BigInt(a.padEnd(t, "0") || "0");
      }
      function p(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
        return e
          ? e.length <= t + n + 2
            ? e
            : "".concat(e.slice(0, t), "…").concat(e.slice(-n))
          : "—";
      }
      function u(e) {
        return String(e).padStart(3, "0");
      }
      function m(e) {
        return e <= 0
          ? "settles today"
          : "".concat(e, " ").concat(1 === e ? "day" : "days", " left");
      }
      function h(e) {
        return e < 60
          ? "".concat(Math.max(0, Math.round(e)), "s ago")
          : e < 3600
          ? "".concat(Math.round(e / 60), "m ago")
          : e < 86400
          ? "".concat(Math.round(e / 3600), "h ago")
          : "".concat(Math.round(e / 86400), "d ago");
      }
      function f(e) {
        return ("number" == typeof e ? new Date(e) : e)
          .toISOString()
          .slice(0, 10);
      }
      function U(e) {
        let t = "number" == typeof e ? new Date(e) : e;
        return i(
          "date:long",
          () =>
            new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              timeZone: "UTC",
            })
        ).format(t);
      }
      function v(e) {
        let t = "number" == typeof e ? new Date(e) : e;
        return i(
          "date:short",
          () =>
            new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "numeric",
              timeZone: "UTC",
            })
        ).format(t);
      }
      function b(e) {
        let t = new Date(Date.UTC(Math.floor(e / 12), ((e % 12) + 12) % 12, 1));
        return i(
          "date:month",
          () =>
            new Intl.DateTimeFormat("en-US", {
              month: "short",
              year: "numeric",
              timeZone: "UTC",
            })
        ).format(t);
      }
    },
    41596: (e, t, n) => {
      n.d(t, {
        DT: () => v,
        Kh: () => m,
        Ls: () => A,
        NC: () => b,
        _p: () => k,
        aP: () => g,
        ew: () => D,
        mx: () => S,
      });
      var a,
        i = n(42726),
        r = n(29142);
      let o = Date.UTC(2026, 10, 2, 16, 0) / 1e3,
        s = "2026-11-20",
        c = Date.UTC(2026, 10, 20, 21, 0) / 1e3,
        l = Date.UTC(2026, 9, 16, 20, 0) / 1e3,
        d = Date.UTC(2026, 9, 19, 14, 30) / 1e3,
        p = "TSLA",
        u = Date.UTC(2026, 10, 2, 15, 30) / 1e3,
        m = {
          NVDA: {
            ticker: "NVDA",
            name: "NVIDIA Corp.",
            address: "0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC",
            feed: "0x379EC4f7C378F34a1B47E4F3cbeBCbAC3E8E9F15",
            pool: "0xd4EB21209C4D6093f80B5b84f5C45cc093EA14a3",
            poolFeeTier: 500,
          },
          AAPL: {
            ticker: "AAPL",
            name: "Apple Inc.",
            address: "0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9",
            poolFeeTier: 500,
          },
          MSFT: {
            ticker: "MSFT",
            name: "Microsoft Corp.",
            address: "0xe93237C50D904957Cf27E7B1133b510C669c2e74",
            poolFeeTier: 3e3,
          },
          QQQ: {
            ticker: "QQQ",
            name: "Invesco QQQ Trust",
            address: "0xD5f3879160bc7c32ebb4dC785F8a4F505888de68",
            poolFeeTier: 500,
          },
          TSLA: {
            ticker: "TSLA",
            name: "Tesla Inc.",
            address: "0x322F0929c4625eD5bAd873c95208D54E1c003b2d",
            poolFeeTier: 3e3,
          },
          GOOGL: {
            ticker: "GOOGL",
            name: "Alphabet Inc.",
            address: "0x2e0847E8910a9732eB3fb1bb4b70a580ADAD4FE3",
            poolFeeTier: 500,
          },
          AMZN: {
            ticker: "AMZN",
            name: "Amazon.com Inc.",
            address: "0x12f190a9F9d7D37a250758b26824B97CE941bF54",
            poolFeeTier: 3e3,
          },
        },
        h = [
          {
            ticker: "NVDA",
            p0: 185,
            price: 186.4,
            change24h: 0.0121,
            poolDepthUsd: 571e4,
            volume24hUsd: 48e5,
            status: "active",
            seriesCapUsd: 1e6,
            depositedUnits: 2140,
          },
          {
            ticker: "AAPL",
            p0: 250,
            price: 250.42,
            change24h: 0.0084,
            poolDepthUsd: 5e5,
            volume24hUsd: 61e4,
            status: "active",
            seriesCapUsd: 5e5,
            depositedUnits: 812,
          },
          {
            ticker: "MSFT",
            p0: 515,
            price: 512.7,
            change24h: -0.0032,
            poolDepthUsd: 84e4,
            volume24hUsd: 72e4,
            status: "active",
            seriesCapUsd: 5e5,
            depositedUnits: 388,
          },
          {
            ticker: "QQQ",
            p0: 600,
            price: 604.1,
            change24h: 0.0046,
            poolDepthUsd: 135e4,
            volume24hUsd: 11e5,
            status: "active",
            seriesCapUsd: 5e5,
            depositedUnits: 402,
          },
          {
            ticker: "TSLA",
            p0: 440,
            price: 431.2,
            change24h: -0.0187,
            poolDepthUsd: 64e4,
            volume24hUsd: 99e4,
            status: "active",
            seriesCapUsd: 5e5,
            depositedUnits: 511,
          },
          {
            ticker: "GOOGL",
            p0: 248.9,
            price: 248.9,
            change24h: 0.0059,
            poolDepthUsd: 1e6,
            volume24hUsd: 54e4,
            status: "candidate",
            seriesCapUsd: 0,
            depositedUnits: 0,
          },
          {
            ticker: "AMZN",
            p0: 227.3,
            price: 227.3,
            change24h: 0.0013,
            poolDepthUsd: 91e4,
            volume24hUsd: 47e4,
            status: "candidate",
            seriesCapUsd: 0,
            depositedUnits: 0,
          },
        ];
      function f(e, t, n) {
        let a = Math.round(n / 100),
          i = s.slice(2).replaceAll("-", "");
        return "".concat(e, "-").concat(t).concat(a, "-").concat(i);
      }
      function U(e) {
        let t = e === p,
          n = t ? u : d;
        return {
          ticker: e,
          number: 42,
          daysLeft: 18,
          openedAt: l,
          settlesAt: c,
          phase: t ? "auction" : "trading",
          milestones: [
            { phase: "open", label: "Open", at: l, done: !0 },
            { phase: "auction", label: "Auction", at: n, done: !t },
            { phase: "trading", label: "Trading", at: n + 7200, done: !1 },
            {
              phase: "settlement",
              label: "Settlement window",
              at: c - 1800,
              done: !1,
            },
            { phase: "settled", label: "Settled", at: c, done: !1 },
          ],
          settleDate: s,
          auctionStartsAt: n,
          auctionEndsAt: n + 7200,
          settlementWindowStart: c - 1800,
          settlementWindowEnd: c,
        };
      }
      let v = h.map(function (e, t) {
          var n;
          let a =
              null != (n = m[e.ticker])
                ? n
                : { ticker: e.ticker, name: e.ticker },
            r = "active" === e.status,
            s = r
              ? (0, i.p6)({
                  spot: e.price,
                  p0: e.p0,
                  capPrice: (0, i.Sy)(e.p0, 500),
                  capBps: 500,
                  daysToSettlement: 18,
                })
              : (0, i.oZ)({ p0: e.price, capBps: 500 }),
            c = U(e.ticker);
          return {
            ticker: e.ticker,
            token: a,
            status: e.status,
            price: e.price,
            change24h: e.change24h,
            updatedAgo: 8 + 3 * t,
            oracle: "Chainlink",
            capBps: 500,
            p0: r ? e.p0 : void 0,
            capPrice: s.capPrice,
            oneValue: s.one,
            convexValue: s.convex,
            epoch: {
              number: c.number,
              daysLeft: c.daysLeft,
              openedAt: c.openedAt,
              settlesAt: c.settlesAt,
              phase: c.phase,
            },
            seriesCapUsd: e.seriesCapUsd,
            poolDepthUsd: e.poolDepthUsd,
            history: (function (e, t) {
              let n = [],
                a = 0.94 * e;
              for (let i = 0; i < 30; i++)
                (a =
                  a *
                    (1 +
                      0.012 *
                        (0.5 * Math.sin(7.3 * t + 1.7 * i) +
                          0.5 * Math.cos(3.1 * t + 0.9 * i))) +
                  (e - a) * 0.08),
                  n.push({
                    t: o - (29 - i) * 86400,
                    price: Number(a.toFixed(2)),
                  });
              let i = n[n.length - 1];
              return i && (i.price = e), n;
            })(e.price, t + 1),
            seriesId:
              "active" === e.status
                ? "".concat(e.ticker, "-").concat(c.number, "-").concat(500)
                : void 0,
          };
        }),
        b = v
          .filter((e) => "active" === e.status)
          .map((e) => {
            let t = h.find((t) => t.ticker === e.ticker);
            return (function (e, t) {
              let n = e.capBps;
              return {
                id: ""
                  .concat(e.ticker, "-")
                  .concat(e.epoch.number, "-")
                  .concat(n),
                ticker: e.ticker,
                epoch: e.epoch.number,
                capBps: n,
                state: "open",
                incomeSymbol: f(e.ticker, "INC", n),
                upsideSymbol: f(e.ticker, "UP", n),
                p0: t.p0,
                capPrice: (0, i.Sy)(t.p0, n),
                maxUnits: t.seriesCapUsd / t.p0,
                maxUnitsPerTx: Math.min(t.seriesCapUsd / t.p0, 1e5 / t.p0),
                depositedUnits: t.depositedUnits,
                feeBps: r.nl.feeBps,
                startBps: r.nl.auctionStartBps,
                floorBps: r.nl.auctionFloorBps,
                openWindowDay: l - (l % 86400),
                settleDay: c - (c % 86400),
                oneValue: e.oneValue,
                convexValue: e.convexValue,
              };
            })(e, t);
          }),
        S = b.map(function (e, t) {
          let { pStart: n, pFloor: a } = (0, i.rS)(
              e.p0,
              e.startBps,
              e.floorBps
            ),
            s = U(e.ticker),
            c = r.nl.auctionSteps,
            l = Math.round(0.42 * e.depositedUnits),
            d = e.ticker === p,
            u = 150 + 9 * t,
            m = [];
          for (let e of [
            0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 239,
          ]) {
            let t = e >= u ? l : Math.round((l * e) / (u + 30));
            m.push({
              step: e,
              at: s.auctionStartsAt + e * r.nl.auctionStepSeconds,
              price: (0, i.Gg)(e, n, a),
              demand: t,
              supply: l,
            });
          }
          let h = (0, i.Gg)(u, n, a),
            f = h * l,
            v = (f * e.feeBps) / 1e4,
            b = d
              ? Math.floor((o - s.auctionStartsAt) / r.nl.auctionStepSeconds)
              : u;
          return {
            seriesId: e.id,
            ticker: e.ticker,
            epoch: e.epoch,
            state: d ? "bidding" : "sold",
            round: d ? 2 : 1,
            pStart: n,
            pFloor: a,
            currentPrice: (0, i.Gg)(b, n, a),
            currentStep: b,
            stepSeconds: r.nl.auctionStepSeconds,
            steps: c,
            startsAt: s.auctionStartsAt,
            endsAt: s.auctionEndsAt,
            lotTotal: l,
            totalDemand: d ? Math.round(0.61 * l) : l,
            clearingPrice: d ? void 0 : h,
            clearingStep: d ? void 0 : u,
            unitsSold: d ? void 0 : l,
            gross: d ? void 0 : f,
            fee: d ? void 0 : v,
            net: d ? void 0 : f - v,
            ladder: m,
            defaultReserveStep: c - 1,
          };
        }),
        C = S.find((e) => "NVDA" === e.ticker),
        D = [
          {
            seriesId: "AAPL-42-500",
            ticker: "AAPL",
            epoch: 42,
            capBps: 500,
            oneUnits: 12,
            convexUnits: 12,
            subscribedUnits: 0,
            oneEntitlementUnits: 12,
            convexEntitlementUnits: 0,
            mergeUnits: 12,
            proceedsUsdg: 0,
            claimable: !1,
            seriesState: "open",
          },
          {
            seriesId: "NVDA-42-500",
            ticker: "NVDA",
            epoch: 42,
            capBps: 500,
            oneUnits: 40,
            convexUnits: 0,
            subscribedUnits: 40,
            oneEntitlementUnits: 40,
            convexEntitlementUnits: 0,
            mergeUnits: 0,
            proceedsUsdg:
              40 *
              ((null != (a = null == C ? void 0 : C.clearingPrice) ? a : 0) *
                (1 - r.nl.feeBps / 1e4)),
            claimable: !1,
            seriesState: "open",
          },
        ],
        g = h.map((e) => {
          let t = m[e.ticker],
            n = "active" === e.status;
          return {
            ticker: e.ticker,
            name: t.name,
            token: t,
            poolDepthUsd: e.poolDepthUsd,
            volume24hUsd: e.volume24hUsd,
            status: n ? "active" : "pool-depth",
            step: n ? 5 : 3,
          };
        }),
        A = {
          tvlUsd: b.reduce((e, t) => e + t.depositedUnits * t.p0, 0),
          activeMarkets: v.filter((e) => "active" === e.status).length,
          candidates: g.filter((e) => "active" !== e.status).length,
          epochsSettled: 41,
          buybacks: {
            totalRevenueUsd: 61480,
            allocatedToBuybacksUsd: 12296,
            executedUsd: 9180,
            pendingUsd: 3116,
            buybackShare: 0.2,
          },
        },
        k = b.map((e) => U(e.ticker));
    },
    42726: (e, t, n) => {
      n.d(t, {
        Dn: () => u,
        Gg: () => m,
        Ln: () => a,
        S8: () => c,
        Sy: () => i,
        bj: () => p,
        oZ: () => s,
        p6: () => o,
        qE: () => f,
        rS: () => h,
        vn: () => d,
        zb: () => l,
      });
      let a = { sigma: 0.25, rate: 0, daysToSettlement: 30 };
      function i(e, t) {
        return e * (1 + t / 1e4);
      }
      function r(e) {
        return (
          0.5 *
          (1 +
            (function (e) {
              let t = Math.abs(e),
                n = 1 / (1 + 0.3275911 * t);
              return (
                (e < 0 ? -1 : 1) *
                (1 -
                  ((((1.061405429 * n - 1.453152027) * n + 1.421413741) * n -
                    0.284496736) *
                    n +
                    0.254829592) *
                    n *
                    Math.exp(-t * t))
              );
            })(e / Math.SQRT2))
        );
      }
      function o(e) {
        let {
            spot: t,
            p0: n,
            capPrice: i,
            capBps: o,
            daysToSettlement: s = a.daysToSettlement,
            sigma: c = a.sigma,
            rate: l = a.rate,
          } = e,
          d = Math.min(
            Math.max(
              (function (e) {
                let { s: t, k: n, t: a, sigma: i, r: o = 0 } = e;
                if (t <= 0 || n <= 0) return 0;
                if (a <= 0 || i <= 0) return Math.max(t - n, 0);
                let s = Math.sqrt(a),
                  c = (Math.log(t / n) + (o + 0.5 * i * i) * a) / (i * s);
                return t * r(c) - n * Math.exp(-o * a) * r(c - i * s);
              })({ s: t, k: i, t: s / 365, sigma: c, r: l }),
              0
            ),
            Math.max(t, 0)
          ),
          p = Math.max(t, 0) - d;
        return {
          p0: n,
          spot: t,
          capBps: o,
          capPrice: i,
          convex: d,
          one: p,
          convexShare: t > 0 ? d / t : 0,
          oneShare: t > 0 ? p / t : 0,
          oneDelta: t > 0 ? (p - t) / t : 0,
          daysToSettlement: s,
          sigma: c,
        };
      }
      function s(e) {
        let { p0: t, capBps: n, daysToSettlement: a, sigma: r, rate: s } = e;
        return o({
          spot: t,
          p0: t,
          capPrice: i(t, n),
          capBps: n,
          daysToSettlement: a,
          sigma: r,
          rate: s,
        });
      }
      let c = { low: 0.25, high: 0.65 };
      function l(e) {
        return o({ ...e, sigma: c.high }).convex;
      }
      function d(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          a = Math.max(e, 0),
          i = Math.max(a - t, 0),
          r = Math.min(a, t);
        return {
          settlementPrice: a,
          capPrice: t,
          convexUsd: i,
          oneUsd: r,
          convexUnits: a > 0 ? i / a : 0,
          oneUnits: a > 0 ? r / a : 0,
          oneUsdWithPremium: r + n,
        };
      }
      function p(e, t) {
        return e + t;
      }
      function u(e, t, n) {
        return Math.max(e * (1 + n) - t, 0);
      }
      function m(e, t, n) {
        var a, i;
        let r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          o = null != (a = r.stepSeconds) ? a : 30,
          s = null != (i = r.halfLifeSeconds) ? i : 1200,
          c = Math.max(0, Math.floor(e)) * o,
          l = Math.floor(c / s),
          d = t / 2 ** l;
        return Math.max(d - (d / 2) * ((c % s) / s), n);
      }
      function h(e, t, n) {
        return { pStart: (e * t) / 1e4, pFloor: (e * n) / 1e4 };
      }
      function f(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
    },
    50827: (e, t, n) => {
      n.d(t, { B: () => r, U: () => o });
      var a = n(41596);
      let i = (e) => e.trim().toUpperCase(),
        r = {
          markets: () => a.DT,
          market: (e) => {
            var t;
            return null != (t = a.DT.find((t) => t.ticker === i(e))) ? t : null;
          },
          series: (e) => {
            var t;
            return null != (t = a.NC.find((t) => t.ticker === i(e))) ? t : null;
          },
          allSeries: () => a.NC,
          auction: (e) => {
            var t;
            return null != (t = a.mx.find((t) => t.ticker === i(e))) ? t : null;
          },
          auctions: () => a.mx,
          epoch: (e) => {
            var t;
            return null != (t = a._p.find((t) => t.ticker === i(e))) ? t : null;
          },
          epochs: () => a._p,
          positions: () => a.ew,
          listingCandidates: () => a.aP,
          protocolStats: () => a.Ls,
        },
        o = {
          mode: "preview",
          markets: async () => r.markets(),
          market: async (e) => r.market(e),
          series: async (e) => r.series(e),
          allSeries: async () => r.allSeries(),
          auction: async (e) => r.auction(e),
          auctions: async () => r.auctions(),
          epoch: async (e) => r.epoch(e),
          epochs: async () => r.epochs(),
          positions: async () => r.positions(),
          listingCandidates: async () => r.listingCandidates(),
          protocolStats: async () => r.protocolStats(),
        };
    },
    54096: (e, t, n) => {
      n.d(t, { U: () => o });
      var a = n(29142),
        i = n(50827);
      let r = null;
      async function o() {
        if (r) return r;
        if ("live" === a.g) {
          let { LiveSource: e } = await Promise.all([
            n.e(3869),
            n.e(5458),
            n.e(1812),
            n.e(6332),
          ]).then(n.bind(n, 56332));
          r = new e();
        } else r = i.U;
        return r;
      }
    },
  },
]);
