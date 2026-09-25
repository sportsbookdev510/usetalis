"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9834],
  {
    19043: (e, n, l) => {
      let t, a;
      l.d(n, { Qo: () => b, Rt: () => p, d: () => d });
      var o = l(88507),
        r = l(79486),
        c = l(17063),
        i = l(65973),
        u = l(45558),
        s = l(29142);
      function d() {
        let e = (0, o.L)(s.S5.rpcUrl);
        return s.DL
          ? (0, r.Np)([(0, o.L)(s.DL, { retryCount: 0 }), e], { rank: !1 })
          : e;
      }
      let h = s.bQ === s.S5.testnetId ? i.A : u.$;
      function p() {
        return (
          t ||
            (t = (0, c.l)({
              chain: h,
              transport: d(),
              batch: { multicall: !0 },
            })),
          t
        );
      }
      function b() {
        let e = Date.now();
        if (a && e - a.at < 1e4) return a.p;
        let n = p()
          .getBlock({ blockTag: "latest" })
          .then((e) => ({
            block: Number(e.number),
            timestamp: Number(e.timestamp),
            readAt: Math.floor(Date.now() / 1e3),
          }))
          .catch((e) => {
            throw ((a = void 0), e);
          });
        return (a = { at: e, p: n }), n;
      }
    },
    26511: (e, n, l) => {
      l.d(n, { UL: () => w, oJ: () => k, sr: () => f });
      var t = l(26196),
        a = l(73475),
        o = l(13987),
        r = l(39056),
        c = l(35384),
        i = l(45432),
        u = l(56666),
        s = l(84173),
        d = l(88507),
        h = l(65973),
        p = l(45558),
        b = l(29142),
        m = l(19043);
      let w = b.bQ === h.A.id ? h.A : p.$;
      function f() {
        var e, n;
        return {
          chainName: w.name,
          nativeCurrency: w.nativeCurrency,
          rpcUrls: [
            b.bQ === b.S5.id
              ? "https://rpc.mainnet.chain.robinhood.com"
              : w.rpcUrls.default.http[0],
          ],
          blockExplorerUrls: [
            b.bQ === b.S5.id
              ? b.S5.explorerUrl
              : null !=
                (n = null == (e = w.blockExplorers) ? void 0 : e.default.url)
              ? n
              : b.S5.explorerUrl,
          ],
        };
      }
      function k() {
        return (0, t.Y8)({
          appName: "Talis",
          appDescription:
            "One asset. Two perspectives. Income and Upside positions on Robinhood Stock Tokens.",
          appUrl: b.W6,
          appIcon: "".concat(b.W6, "/icons/icon-512.png"),
          projectId:
            null !== b.U1 && void 0 !== b.U1 ? b.U1 : "talis-no-walletconnect",
          wallets: b.U1
            ? [
                {
                  groupName: "Popular",
                  wallets: [a.w, o.d, r.O, c.G, i.m, u.Z],
                },
                { groupName: "More", wallets: [s.H] },
              ]
            : [{ groupName: "Browser wallets", wallets: [a.w, i.m, s.H] }],
          chains: [p.$, h.A],
          transports: {
            [p.$.id]: (0, m.d)(),
            [h.A.id]: (0, d.L)("https://rpc.testnet.chain.robinhood.com"),
          },
          ssr: !0,
          multiInjectedProviderDiscovery: !0,
        });
      }
    },
    35476: (e, n, l) => {
      l.d(n, { d: () => s, f: () => u });
      var t = l(72133),
        a = l(50625),
        o = l(84520),
        r = l(91109),
        c = l(36811),
        i = l(54498);
      function u(e) {
        let [n, l] = (0, a.useState)(0);
        return (
          (0, a.useEffect)(() => {
            let n = () => l(Math.floor(Date.now() / 1e3));
            n();
            let t = setInterval(n, e);
            return () => clearInterval(t);
          }, [e]),
          n
        );
      }
      function s(e) {
        let {
            asOf: n,
            source: l,
            unavailable: a,
            compact: s,
            className: d,
          } = e,
          h = u(3e4);
        if (a)
          return (0, t.jsx)(o.Ex, {
            tone: "neutral",
            className: d,
            title:
              "The indexer did not answer and the chain has no equivalent read",
            children: "indexer unreachable",
          });
        if (!n || !l) return null;
        let p = h > 0 && n.updatedAt > 0 ? Math.max(0, h - n.updatedAt) : null,
          b = h > 0 && n.blockTime ? Math.max(0, h - n.blockTime) : null,
          m = n.block > 0 ? "block ".concat((0, c.bu)(n.block, 0)) : "block —",
          w =
            "chain" === l
              ? "Read from the chain"
                  .concat(
                    n.block > 0
                      ? " at block ".concat((0, c.bu)(n.block, 0))
                      : ""
                  )
                  .concat(null !== b ? ", sealed ".concat((0, i.o)(b)) : "")
              : "Indexed up to block "
                  .concat((0, c.bu)(n.block, 0))
                  .concat(n.head ? " of ".concat((0, c.bu)(n.head, 0)) : "")
                  .concat(
                    null !== n.lagBlocks
                      ? " (".concat((0, c.bu)(n.lagBlocks, 0), " behind)")
                      : "",
                    ", last sync "
                  )
                  .concat(null !== p ? (0, i.o)(p) : "—");
        return (0, t.jsxs)("span", {
          className: (0, r.cn)("inline-flex flex-wrap items-center gap-1.5", d),
          title: w,
          "data-source": l,
          "data-stale": n.stale || void 0,
          children: [
            (0, t.jsxs)("span", {
              className: "font-mono text-[11px] text-muted tnum",
              children: [
                "chain" === l ? "on-chain" : "indexed",
                s ? "" : " \xb7 ".concat(m),
                null !== p ? " \xb7 ".concat((0, i.o)(p)) : "",
              ],
            }),
            n.stale
              ? (0, t.jsx)(o.Ex, {
                  tone: "warning",
                  className: "h-5 px-2 text-[10px]",
                  children: "stale",
                })
              : null,
          ],
        });
      }
    },
    36901: (e, n, l) => {
      l.d(n, { qK: () => w, sN: () => f, vT: () => k, yM: () => m });
      var t = l(26196),
        a = l(90756),
        o = l(50625),
        r = l(71209),
        c = l(32916),
        i = l(37762),
        u = l(61058),
        s = l(55167),
        d = l(30823),
        h = l(29142),
        p = l(26511),
        b = l(93617);
      let m = "Preview mode \xb7 no transaction is sent";
      function w() {
        let [e, n] = (0, o.useState)(!1);
        return (0, o.useEffect)(() => n(!0), []), e;
      }
      function f() {
        let e = w(),
          { address: n, isConnected: l, chainId: t } = (0, c.F)();
        return (0, o.useMemo)(
          () =>
            h.KO
              ? e
                ? l && n
                  ? t !== h.bQ
                    ? { canWrite: !1, reason: "Switch to ".concat(p.UL.name) }
                    : { canWrite: !0 }
                  : { canWrite: !1, reason: "Connect a wallet" }
                : { canWrite: !1, reason: "Loading wallet…" }
              : { canWrite: !1, reason: m },
          [e, n, l, t]
        );
      }
      function k() {
        let e = w(),
          n = (0, i.U)(),
          {
            address: l,
            isConnected: m,
            isConnecting: k,
            chainId: v,
          } = (0, c.F)(),
          { openConnectModal: g, connectModalOpen: x } = (0, t.Vx)(),
          { disconnect: y } = (0, u.u)(),
          { switchChain: S, isPending: U } = (0, s.R)(),
          A = f(),
          N = (0, a.I)({
            queryKey: b.y.eth(h.bQ, l),
            queryFn: async () =>
              (await (0, d.r)(n, { address: l, chainId: h.bQ })).value,
            enabled: h.KO && e && !!l,
            staleTime: 15e3,
          }),
          C = (0, o.useCallback)(() => (null == g ? void 0 : g()), [g]),
          I = (0, o.useCallback)(
            () => S({ chainId: h.bQ, addEthereumChainParameter: (0, p.sr)() }),
            [S]
          ),
          L = e && (k || x);
        return (0, o.useMemo)(
          () => ({
            mounted: e,
            address: e ? l : void 0,
            isConnected: e && m,
            chainId: e ? v : void 0,
            onChain: e && m && v === h.bQ,
            connect: C,
            disconnect: () => y(),
            switchToActive: I,
            connecting: L,
            switching: U,
            eth: {
              value: N.data,
              formatted:
                void 0 !== N.data
                  ? (function (e) {
                      let [n = "0", l = ""] = (0, r.J)(e, 18).split("."),
                        t = l.slice(0, 4).replace(/0+$/, "");
                      return ""
                        .concat(n)
                        .concat(t ? ".".concat(t) : "", " ETH");
                    })(N.data)
                  : void 0,
              isLoading: N.isLoading,
            },
            gate: A,
            previewNote: h.KO ? void 0 : h.kx,
          }),
          [e, l, m, v, C, y, I, L, U, N.data, N.isLoading, A]
        );
      }
    },
    53063: (e, n, l) => {
      l.d(n, { Bu: () => o, Sx: () => r, TE: () => a, _b: () => t });
      let t = "Income",
        a = "Upside",
        o = "".concat(t, " + ").concat(a),
        r = {
          income: "Keep the asset. Earn the premium.",
          upside: "Buy the move above the cap.",
        };
    },
    54498: (e, n, l) => {
      l.d(n, {
        FX: () => r,
        Kr: () => s,
        Mv: () => o,
        NI: () => i,
        Qf: () => c,
        i3: () => h,
        jg: () => u,
        o: () => p,
        qD: () => d,
      });
      let t = ["unknown", "good", "warning", "serious", "critical"];
      function a(e) {
        let n = "unknown";
        for (let l of e) t.indexOf(l) > t.indexOf(n) && (n = l);
        return n;
      }
      let o = {
          good: "ok",
          warning: "lagging",
          serious: "stale",
          critical: "down",
          unknown: "no data yet",
        },
        r = { warning: 30, serious: 120, critical: 600 };
      function c(e, n) {
        if (!e)
          return {
            block: null,
            timestamp: null,
            ageSeconds: null,
            skewSeconds: null,
            level: "unknown",
          };
        let l = n - e.timestamp,
          t = Math.max(0, l);
        return {
          block: e.block,
          timestamp: e.timestamp,
          ageSeconds: t,
          skewSeconds: l,
          level:
            null !== t && Number.isFinite(t)
              ? t <= r.warning
                ? "good"
                : t <= r.serious
                ? "warning"
                : t <= r.critical
                ? "serious"
                : "critical"
              : "unknown",
        };
      }
      let i = { warning: 10800, serious: 93600, critical: 259200 };
      function u(e, n) {
        var l, t, a;
        let o = e.updatedAt && e.updatedAt > 0 ? e.updatedAt : null,
          r = null === o ? null : Math.max(0, n - o);
        return {
          ticker: e.ticker,
          feed: null != (l = e.feed) ? l : null,
          answer: null != (t = e.answer) ? t : null,
          roundId: null != (a = e.roundId) ? a : null,
          updatedAt: o,
          ageSeconds: r,
          level:
            null !== r && Number.isFinite(r)
              ? r <= i.warning
                ? "good"
                : r <= i.serious
                ? "warning"
                : r <= i.critical
                ? "serious"
                : "critical"
              : "unknown",
        };
      }
      let s = { blocks: 3e3, seconds: 180 };
      function d(e, n, l) {
        var t, a, o;
        let r,
          c = {
            configured: n.configured,
            reachable: n.reachable,
            ok: null,
            head: null,
            cursor: null,
            lagBlocks: null,
            lagSeconds: null,
            updatedAt: null,
            partial: !1,
            failures: 0,
            cooldownUntil: null,
            lastError: null != (t = n.error) ? t : null,
            level: "unknown",
          };
        if (!n.configured) return c;
        if (!n.reachable || !e) return { ...c, level: "critical" };
        let i =
            null !== e.updatedAt ? Math.max(0, l - e.updatedAt) : e.lagSeconds,
          u = e.lagBlocks;
        return (
          "critical" ==
            (r =
              !e.ok || e.failures >= 3
                ? "critical"
                : (null != i ? i : 1 / 0) > 6 * s.seconds ||
                  (null != u ? u : 1 / 0) > 6 * s.blocks
                ? "serious"
                : (null != i ? i : 1 / 0) > s.seconds ||
                  (null != u ? u : 1 / 0) > s.blocks ||
                  e.partial
                ? "warning"
                : "good") &&
            null !== e.cursor &&
            null !== e.updatedAt &&
            (r = "serious"),
          {
            ...c,
            ok: e.ok,
            head: e.head,
            cursor: e.cursor,
            lagBlocks: u,
            lagSeconds: i,
            updatedAt: e.updatedAt,
            partial: e.partial,
            failures: e.failures,
            cooldownUntil: e.cooldownUntil > l ? e.cooldownUntil : null,
            lastError:
              null != (o = null != (a = e.lastError) ? a : n.error) ? o : null,
            level: r,
          }
        );
      }
      function h(e, n) {
        let l = (function (e, n) {
            let l =
                null !== e.block && null !== n.head ? e.block - n.head : null,
              t = e.level,
              o =
                null === e.ageSeconds
                  ? "no head read yet"
                  : "head ".concat(e.ageSeconds, "s behind the clock");
            return (
              null !== l &&
                l < -s.blocks &&
                ((t = a([t, "serious"])),
                (o = "RPC head ".concat(-l, " blocks behind the indexer's"))),
              { rpcAheadBlocks: l, ageSeconds: e.ageSeconds, level: t, note: o }
            );
          })(e.chain, e.indexer),
          t = e.indexer.configured ? e.indexer.level : "unknown";
        return {
          ...e,
          sequencer: l,
          level: a([e.chain.level, ...e.feeds.map((e) => e.level), t, l.level]),
          checkedAt: n,
        };
      }
      function p(e) {
        return null === e
          ? "no data yet"
          : e < 60
          ? "".concat(Math.round(e), "s ago")
          : e < 3600
          ? "".concat(Math.round(e / 60), "m ago")
          : e < 86400
          ? "".concat(Math.round(e / 3600), "h ago")
          : "".concat(Math.round(e / 86400), "d ago");
      }
    },
    93617: (e, n, l) => {
      l.d(n, { i: () => o, y: () => a });
      var t = l(54096);
      let a = {
        all: ["wallet"],
        account: (e, n) => {
          var l;
          return [
            "wallet",
            e,
            null != (l = null == n ? void 0 : n.toLowerCase()) ? l : "none",
          ];
        },
        eth: (e, n) => [...a.account(e, n), "eth"],
        balances: (e, n, l) => [
          ...a.account(e, n),
          "balances",
          l.map((e) => e.toLowerCase()).join(","),
        ],
        allowance: (e, n, l, t) => [
          ...a.account(e, n),
          "allowance",
          l.toLowerCase(),
          t.toLowerCase(),
        ],
        read: function (e, n, l) {
          for (
            var t = arguments.length, a = Array(t > 3 ? t - 3 : 0), o = 3;
            o < t;
            o++
          )
            a[o - 3] = arguments[o];
          return ["wallet-read", e, n.toLowerCase(), l, ...a];
        },
      };
      async function o(e, n, l) {
        let o =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        try {
          var r, c;
          null == (r = (c = await (0, t.U)()).invalidate) || r.call(c);
        } catch (e) {}
        let i = !1 === o.refetch ? "none" : "active";
        await Promise.all([
          e.invalidateQueries({ queryKey: ["talis"], refetchType: i }),
          e.invalidateQueries({ queryKey: a.account(n, l), refetchType: i }),
          e.invalidateQueries({ queryKey: ["wallet-read", n], refetchType: i }),
        ]);
      }
    },
  },
]);
