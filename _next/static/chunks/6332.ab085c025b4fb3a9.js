"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6332],
  {
    19043: (e, t, n) => {
      let a, i;
      n.d(t, { Qo: () => y, Rt: () => m, d: () => u });
      var s = n(88507),
        r = n(79486),
        o = n(17063),
        l = n(65973),
        d = n(45558),
        p = n(29142);
      function u() {
        let e = (0, s.L)(p.S5.rpcUrl);
        return p.DL
          ? (0, r.Np)([(0, s.L)(p.DL, { retryCount: 0 }), e], { rank: !1 })
          : e;
      }
      let c = p.bQ === p.S5.testnetId ? l.A : d.$;
      function m() {
        return (
          a ||
            (a = (0, o.l)({
              chain: c,
              transport: u(),
              batch: { multicall: !0 },
            })),
          a
        );
      }
      function y() {
        let e = Date.now();
        if (i && e - i.at < 1e4) return i.p;
        let t = m()
          .getBlock({ blockTag: "latest" })
          .then((e) => ({
            block: Number(e.number),
            timestamp: Number(e.timestamp),
            readAt: Math.floor(Date.now() / 1e3),
          }))
          .catch((e) => {
            throw ((i = void 0), e);
          });
        return (i = { at: e, p: t }), t;
      }
    },
    32398: (e, t, n) => {
      n.d(t, {
        GO: () => o,
        dA: () => r,
        d_: () => a,
        do: () => p,
        pH: () => l,
        tt: () => m,
        vd: () => c,
        xP: () => f,
        yk: () => d,
      });
      let a = 86400,
        i = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          hour: "numeric",
          hourCycle: "h23",
        });
      function s(e) {
        var t, n;
        let a = new Date(1e3 * e),
          s = Number(
            null !=
              (n =
                null == (t = i.formatToParts(a).find((e) => "hour" === e.type))
                  ? void 0
                  : t.value)
              ? n
              : a.getUTCHours()
          );
        return (a.getUTCHours() - s + 24) % 24;
      }
      function r(e) {
        return e - (e % a);
      }
      function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = r(e),
          a = s(n + 43200);
        return n + (t ? 13 : 16) * 3600 + 3600 * a;
      }
      function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = o(e, t);
        return { start: n - 1800, end: n };
      }
      let d = 14 * a;
      function p(e, t) {
        let n = new Date(Date.UTC(e, t, 1)).getUTCDay();
        return Date.UTC(e, t, 15 + ((5 - n + 7) % 7)) / 1e3;
      }
      function u(e) {
        let { year: t, m0: n } = {
          year: Math.floor(e / 12),
          m0: ((e % 12) + 12) % 12,
        };
        return p(t, n);
      }
      function c(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          a = e + t,
          i = 0 === t && n > 0 ? r(n) : u(a - 1),
          s = u(a);
        return {
          epoch: t,
          settleMonth: a,
          openWindowDay: i,
          settleDay: s,
          createFrom: i - d,
        };
      }
      let m = 7200;
      function y(e) {
        let t = r(e);
        return t + 37800 + 3600 * s(t + 43200);
      }
      function f(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : () => !1,
          n = r(e);
        for (let i = 0; i < 10; i++, n += a)
          if (
            !(
              !(function (e) {
                let t = new Date(1e3 * r(e)).getUTCDay();
                return t >= 1 && t <= 5;
              })(n) || t(n)
            )
          ) {
            if (e + 1800 <= y(n)) return y(n);
            if (
              e + 1800 <=
              (function (e) {
                let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                return o(e, t) - m - 1800;
              })(n)
            )
              return e + 1800;
          }
      }
    },
    56332: (e, t, n) => {
      n.d(t, { LiveSource: () => k });
      var a = n(36536),
        i = n(29142),
        s = n(19043),
        r = n(42902),
        o = n(32398);
      function l(e) {
        let {
          seriesState: t,
          auctionState: n,
          auctionStart: a = 0,
          windowStart: i,
          now: s,
        } = e;
        return "settled" === t
          ? "settled"
          : i > 0 && s >= i
          ? "settlement"
          : "created" === t
          ? "open"
          : "bidding" === n || "crossed" === n
          ? "auction"
          : "sold" === n || "nosale" === n
          ? "trading"
          : "scheduled" === n && a > 0 && s >= a
          ? "auction"
          : "open";
      }
      var d = n(42726),
        p = n(36811),
        u = n(41596),
        c = n(45188),
        m = n(87898),
        y = n(55458),
        f = n(64029);
      let h = "0x0000000000000000000000000000000000000000",
        b = { tickers: 6e4, series: 5e3, feeds: 5e3, auctions: 5e3 },
        w = [
          {
            type: "function",
            name: "latestRoundData",
            stateMutability: "view",
            inputs: [],
            outputs: [
              { name: "roundId", type: "uint80" },
              { name: "answer", type: "int256" },
              { name: "startedAt", type: "uint256" },
              { name: "updatedAt", type: "uint256" },
              { name: "answeredInRound", type: "uint80" },
            ],
          },
          {
            type: "function",
            name: "getRoundData",
            stateMutability: "view",
            inputs: [{ name: "_roundId", type: "uint80" }],
            outputs: [
              { name: "roundId", type: "uint80" },
              { name: "answer", type: "int256" },
              { name: "startedAt", type: "uint256" },
              { name: "updatedAt", type: "uint256" },
              { name: "answeredInRound", type: "uint80" },
            ],
          },
        ],
        v = Object.values(u.Kh).filter((e) => e.address),
        g = (0, a.$)(
          "event TickerRegistered(bytes32 indexed tickerId, address stock, bytes32 uid, address registry, address feed, address pool, string label, uint64 firstOpenDay)"
        ),
        S = ["created", "open", "settled"],
        T = () => Math.floor(Date.now() / 1e3);
      class k {
        invalidate() {
          this.memo.clear();
        }
        cached(e, t, n) {
          let a = this.memo.get(e),
            i = Date.now();
          if (a && i - a.at < t) return a.p;
          let s = n().catch((t) => {
            throw (this.memo.delete(e), t);
          });
          return this.memo.set(e, { at: i, p: s }), s;
        }
        requireFactory() {
          if (!this.factory)
            throw Error(
              "Live mode: no SeriesFactory address. Run `pnpm sync` or set NEXT_PUBLIC_FACTORY_ADDRESS."
            );
          return this.factory;
        }
        async tickerIds(e) {
          try {
            let t = await this.client.getLogs({
                address: e,
                event: g,
                fromBlock: 0n,
                toBlock: "latest",
              }),
              n = new Set();
            for (let e of t) e.args.tickerId && n.add(e.args.tickerId);
            if (n.size > 0) return [...n];
          } catch (e) {}
          return 0 === v.length
            ? []
            : (
                await this.client.multicall({
                  allowFailure: !1,
                  contracts: v.map((t) => ({
                    address: e,
                    abi: c.O,
                    functionName: "tickerIdOf",
                    args: [t.address],
                  })),
                })
              ).filter(
                (e) =>
                  "0x0000000000000000000000000000000000000000000000000000000000000000" !==
                  e
              );
        }
        tickers() {
          return this.cached("tickers", b.tickers, async () => {
            let e = this.requireFactory(),
              t = await this.tickerIds(e);
            if (0 === t.length) return [];
            let n = await this.client.multicall({
              allowFailure: !1,
              contracts: t.flatMap((t) => [
                { address: e, abi: c.O, functionName: "tickerOf", args: [t] },
                {
                  address: e,
                  abi: c.O,
                  functionName: "tickerParams",
                  args: [t],
                },
                { address: e, abi: c.O, functionName: "nextEpoch", args: [t] },
              ]),
            });
            return t
              .map((e, t) => {
                let a = n[3 * t],
                  i = n[3 * t + 1],
                  s = Number(n[3 * t + 2]);
                return a[0] === h
                  ? null
                  : {
                      token: {
                        ...(function (e, t) {
                          let n = v.find((t) => {
                            var n;
                            return (
                              (null == (n = t.address)
                                ? void 0
                                : n.toLowerCase()) === e.toLowerCase()
                            );
                          });
                          return null != n
                            ? n
                            : {
                                ticker: t.toUpperCase(),
                                name: "".concat(
                                  t.toUpperCase(),
                                  " Stock Token"
                                ),
                                address: e,
                              };
                        })(a[0], a[6]),
                        feed: a[3],
                        pool: a[4],
                      },
                      tickerId: e,
                      stock: a[0],
                      registry: a[2],
                      feed: a[3],
                      pool: a[4],
                      label: a[6],
                      firstSettleMonth: Number(a[7]),
                      firstOpenDay: Number(a[8]),
                      enabled: a[9],
                      capBps: Number(i.capBps),
                      capUsd: (0, p.Uj)(i.capUsd8, 8),
                      perTxUsd: (0, p.Uj)(i.perTxUsd8, 8),
                      feeBps: Number(i.feeBps),
                      startBps: Number(i.startBps),
                      floorBps: Number(i.floorBps),
                      nextEpoch: s,
                    };
              })
              .filter((e) => null !== e);
          });
        }
        registrationOf(e) {
          return {
            tickerId: e.tickerId,
            label: e.label,
            stock: e.stock,
            registry: e.registry,
            feed: e.feed,
            pool: e.pool,
            enabled: e.enabled,
            firstSettleMonth: e.firstSettleMonth,
            firstOpenDay: e.firstOpenDay,
            nextEpoch: e.nextEpoch,
            capBps: e.capBps,
            capUsd: e.capUsd,
            perTxUsd: e.perTxUsd,
            feeBps: e.feeBps,
            startBps: e.startBps,
            floorBps: e.floorBps,
          };
        }
        nextSeriesOf(e) {
          let t = (0, o.vd)(e.firstSettleMonth, e.nextEpoch, e.firstOpenDay);
          return {
            epoch: t.epoch,
            createFrom: t.createFrom,
            openWindowDay: t.openWindowDay,
            settleDay: t.settleDay,
          };
        }
        seriesRows() {
          return this.cached("series", b.series, async () => {
            let e = this.requireFactory(),
              t = (await this.tickers()).filter((e) => e.nextEpoch > 0);
            if (0 === t.length) return [];
            let n = await this.client.multicall({
                allowFailure: !1,
                contracts: t.map((t) => ({
                  address: e,
                  abi: c.O,
                  functionName: "seriesOf",
                  args: [t.tickerId, t.nextEpoch - 1, t.capBps],
                })),
              }),
              a = t
                .map((e, t) => ({ t: e, address: n[t] }))
                .filter((e) => e.address !== h);
            if (0 === a.length) return [];
            let i = a.flatMap((e) => {
                let { address: t } = e;
                return [
                  { address: t, abi: m.W, functionName: "state" },
                  { address: t, abi: m.W, functionName: "P0" },
                  { address: t, abi: m.W, functionName: "K" },
                  { address: t, abi: m.W, functionName: "S" },
                  { address: t, abi: m.W, functionName: "capBps" },
                  { address: t, abi: m.W, functionName: "maxUnits" },
                  { address: t, abi: m.W, functionName: "maxUnitsPerTx" },
                  { address: t, abi: m.W, functionName: "openWindowDay" },
                  { address: t, abi: m.W, functionName: "settleDay" },
                  { address: t, abi: m.W, functionName: "openedAt" },
                  { address: t, abi: m.W, functionName: "settledAt" },
                  { address: t, abi: m.W, functionName: "incomeToken" },
                  { address: t, abi: m.W, functionName: "upsideToken" },
                  { address: t, abi: m.W, functionName: "auction" },
                  { address: t, abi: m.W, functionName: "N0" },
                  { address: t, abi: m.W, functionName: "openCursor" },
                ];
              }),
              s = await this.client.multicall({
                allowFailure: !1,
                contracts: i,
              }),
              r = a.map((e, t) => {
                var n;
                let { t: a, address: i } = e,
                  r = (e) => s[16 * t + e],
                  l = Number(r(8)),
                  d = (0, o.pH)(l),
                  u = Number(r(7)),
                  c = Number(r(15));
                return {
                  ticker: a,
                  epoch: a.nextEpoch - 1,
                  address: i,
                  state: null != (n = S[Number(r(0))]) ? n : "created",
                  p0: (0, p.Uj)(r(1), 8),
                  k: (0, p.Uj)(r(2), 8),
                  s: (0, p.Uj)(r(3), 8),
                  capBps: Number(r(4)),
                  maxUnits: (0, p.Uj)(r(5), 18),
                  maxUnitsPerTx: (0, p.Uj)(r(6), 18),
                  openWindowDay: u,
                  settleDay: l,
                  openedAt: Number(r(9)),
                  settledAt: Number(r(10)),
                  openCursor: c,
                  openWindowEnd: (0, o.pH)(Math.max(u, c)).end,
                  income: r(11),
                  upside: r(12),
                  auction: r(13),
                  feeBps: a.feeBps,
                  startBps: a.startBps,
                  floorBps: a.floorBps,
                  deposited: (0, p.Uj)(r(14), 18),
                  windowStart: d.start,
                  windowEnd: d.end,
                };
              }),
              l = await this.client.multicall({
                allowFailure: !0,
                contracts: [
                  ...r.map((e) => ({
                    address: e.address,
                    abi: m.W,
                    functionName: "windowOf",
                    args: [BigInt(e.settleDay)],
                  })),
                  ...r.map((e) => ({
                    address: e.income,
                    abi: f.x,
                    functionName: "totalSupply",
                  })),
                  ...r.map((e) => ({
                    address: e.address,
                    abi: m.W,
                    functionName: "windowOf",
                    args: [BigInt(this.openDayOf(e))],
                  })),
                ],
              }),
              d = l.slice(0, r.length);
            return (
              l.slice(r.length, 2 * r.length).forEach((e, t) => {
                "success" === e.status &&
                  (r[t].deposited = (0, p.Uj)(e.result, 18));
              }),
              l.slice(2 * r.length).forEach((e, t) => {
                if ("success" !== e.status) return;
                let [, n] = e.result;
                n > 0n && (r[t].openWindowEnd = Number(n));
              }),
              d.forEach((e, t) => {
                if ("success" !== e.status) return;
                let [n, a] = e.result;
                a > 0n &&
                  ((r[t].windowStart = Number(n)),
                  (r[t].windowEnd = Number(a)));
              }),
              r
            );
          });
        }
        daysLeft(e) {
          return Math.max(0, Math.ceil((e.windowEnd - T()) / 86400));
        }
        openDayOf(e) {
          return (0, o.dA)(Math.max(e.openWindowDay, e.openCursor));
        }
        indicativeBasisOf(e, t, n) {
          var a;
          if ("created" !== e.state) return;
          let i = e.openWindowEnd,
            s = null != (a = (0, o.xP)(Math.max(n, i))) ? a : 0;
          return {
            price: t,
            capPrice: (0, d.Sy)(t, e.capBps),
            openDay: this.openDayOf(e),
            opensAt: i,
            due: n >= i,
            auctionStartsAt: s,
            auctionEndsAt: s > 0 ? s + o.tt : 0,
          };
        }
        toSeries(e, t) {
          var n, a;
          let i = Math.max(this.daysLeft(e), 1),
            s = e.p0 > 0 ? e.p0 : 0,
            r = e.k > 0 ? e.k : (0, d.Sy)(s, e.capBps),
            o = this.indicativeBasisOf(e, null != t ? t : 0, T()),
            l =
              s > 0
                ? (0, d.p6)({
                    spot: t && t > 0 ? t : s,
                    p0: s,
                    capPrice: r,
                    capBps: e.capBps,
                    daysToSettlement: i,
                  })
                : o && o.price > 0
                ? (0, d.oZ)({
                    p0: o.price,
                    capBps: e.capBps,
                    daysToSettlement: i,
                  })
                : null,
            p = new Date(1e3 * e.settleDay)
              .toISOString()
              .slice(2, 10)
              .replaceAll("-", ""),
            u = Math.round(e.capBps / 100);
          return {
            id: e.address,
            ticker: e.ticker.token.ticker,
            epoch: e.epoch,
            capBps: e.capBps,
            state: e.state,
            address: e.address,
            incomeToken: e.income,
            upsideToken: e.upside,
            auction: e.auction,
            incomeSymbol: ""
              .concat(e.ticker.token.ticker, "-INC")
              .concat(u, "-")
              .concat(p),
            upsideSymbol: ""
              .concat(e.ticker.token.ticker, "-UP")
              .concat(u, "-")
              .concat(p),
            p0: s,
            capPrice: r,
            settlementPrice: e.s > 0 ? e.s : void 0,
            indicativeBasis: o,
            maxUnits: e.maxUnits,
            maxUnitsPerTx: e.maxUnitsPerTx,
            depositedUnits: e.deposited,
            feeBps: e.feeBps,
            startBps: e.startBps,
            floorBps: e.floorBps,
            openWindowDay: e.openWindowDay,
            settleDay: e.settleDay,
            oneValue: null != (n = null == l ? void 0 : l.one) ? n : 0,
            convexValue: null != (a = null == l ? void 0 : l.convex) ? a : 0,
          };
        }
        feeds() {
          return this.cached("feeds", b.feeds, async () => {
            let e = await this.tickers(),
              t = new Map();
            if (0 === e.length) return t;
            let n = await this.client.multicall({
                allowFailure: !0,
                contracts: e.map((e) => ({
                  address: e.feed,
                  abi: w,
                  functionName: "latestRoundData",
                })),
              }),
              a = [];
            return (
              e.forEach((e, i) => {
                let s = n[i];
                if ("success" !== s.status) return;
                let [r, o, , l] = s.result;
                t.set(e.tickerId, {
                  price: (0, p.Uj)(o < 0n ? 0n : o, 8),
                  updatedAt: Number(l),
                  rounds: [],
                });
                for (let t = 0n; t < 30n; t++) {
                  let n = r - t;
                  if ((n & ((1n << 64n) - 1n)) === 0n) break;
                  a.push({ tickerId: e.tickerId, feed: e.feed, id: n });
                }
              }),
              0 === a.length ||
                (
                  await this.client.multicall({
                    allowFailure: !0,
                    contracts: a.map((e) => ({
                      address: e.feed,
                      abi: w,
                      functionName: "getRoundData",
                      args: [e.id],
                    })),
                  })
                ).forEach((e, n) => {
                  var i;
                  if ("success" !== e.status) return;
                  let [, s, , r] = e.result;
                  if (0n === r) return;
                  let o = a[n];
                  null == (i = t.get(o.tickerId)) ||
                    i.rounds.push({
                      roundId: o.id.toString(),
                      answer: (0, p.Uj)(s < 0n ? 0n : s, 8),
                      updatedAt: Number(r),
                    });
                }),
              t
            );
          });
        }
        async markets() {
          let [e, t, n, a] = await Promise.all([
              this.tickers(),
              this.seriesRows(),
              this.feeds(),
              this.auctions(),
            ]),
            i = T();
          return e.map((e) => {
            var s, r, p, u, c, m;
            let y = t.find((t) => t.ticker.tickerId === e.tickerId),
              f = y ? a.find((e) => e.seriesId === y.address) : void 0,
              h = n.get(e.tickerId),
              b = null != (s = null == h ? void 0 : h.price) ? s : 0,
              w = null != (r = null == h ? void 0 : h.rounds) ? r : [],
              v = y ? this.toSeries(y, b) : null,
              g = y && "settled" !== y.state ? void 0 : this.nextSeriesOf(e),
              S = v && !g ? v : null,
              T = y ? this.indicativeBasisOf(y, b, i) : void 0,
              k = !!S && S.p0 > 0,
              N = g ? (0, o.pH)(g.settleDay).end : 0,
              U = g
                ? Math.max(
                    1,
                    Math.round((g.settleDay - g.openWindowDay) / 86400)
                  )
                : y
                ? this.daysLeft(y)
                : 0,
              x = (0, d.oZ)({
                p0: b,
                capBps: e.capBps,
                daysToSettlement: U > 0 ? U : void 0,
              });
            return {
              ticker: e.token.ticker,
              token: e.token,
              status: v
                ? "settled" === v.state
                  ? "settled"
                  : "created" === v.state
                  ? "created"
                  : e.enabled
                  ? "active"
                  : "paused"
                : e.enabled
                ? "registered"
                : "paused",
              price: b,
              change24h: (function (e, t, n) {
                let a = t.find((e) => e.updatedAt <= n - 86400 && e.answer > 0);
                return a ? e / a.answer - 1 : NaN;
              })(b, w, i),
              updatedAgo: h ? Math.max(0, i - h.updatedAt) : 0,
              oracle: "Chainlink",
              capBps: e.capBps,
              seriesState: null == v ? void 0 : v.state,
              p0: k ? S.p0 : void 0,
              capPrice: k ? S.capPrice : x.capPrice,
              oneValue: k ? S.oneValue : x.one,
              convexValue: k ? S.convexValue : x.convex,
              indicativeBasis: T,
              epoch: {
                number:
                  null != (p = null == y ? void 0 : y.epoch) ? p : e.nextEpoch,
                daysLeft: U,
                openedAt:
                  null !=
                  (c =
                    null != (u = null == y ? void 0 : y.openedAt)
                      ? u
                      : null == g
                      ? void 0
                      : g.openWindowDay)
                    ? c
                    : 0,
                settlesAt:
                  null != (m = null == y ? void 0 : y.windowEnd) ? m : N,
                phase: y
                  ? l({
                      seriesState: y.state,
                      auctionState: null == f ? void 0 : f.state,
                      auctionStart: null == f ? void 0 : f.startsAt,
                      windowStart: y.windowStart,
                      now: i,
                    })
                  : "open",
              },
              seriesCapUsd: e.capUsd,
              poolDepthUsd: 0,
              history:
                w.length > 1
                  ? [...w]
                      .reverse()
                      .map((e) => ({ t: e.updatedAt, price: e.answer }))
                  : [{ t: i, price: b }],
              rounds: w,
              seriesId: null == v ? void 0 : v.id,
              registration: this.registrationOf(e),
              nextSeries: g,
            };
          });
        }
        async market(e) {
          var t;
          return null !=
            (t = (await this.markets()).find(
              (t) => t.ticker === e.toUpperCase()
            ))
            ? t
            : null;
        }
        async allSeries() {
          let [e, t] = await Promise.all([this.seriesRows(), this.feeds()]);
          return e.map((e) => {
            var n;
            return this.toSeries(
              e,
              null == (n = t.get(e.ticker.tickerId)) ? void 0 : n.price
            );
          });
        }
        async series(e) {
          var t;
          return null !=
            (t = (await this.allSeries()).find(
              (t) => t.ticker === e.toUpperCase()
            ))
            ? t
            : null;
        }
        auctionRows() {
          return this.cached("auctions", b.auctions, async () => {
            let e = await this.seriesRows();
            if (0 === e.length) return [];
            let t = e.flatMap((e) => {
                let { auction: t } = e;
                return [
                  { address: t, abi: y.c, functionName: "round" },
                  { address: t, abi: y.c, functionName: "pStart" },
                  { address: t, abi: y.c, functionName: "pFloor" },
                  { address: t, abi: y.c, functionName: "auctionStart" },
                  { address: t, abi: y.c, functionName: "auctionEnd" },
                  { address: t, abi: y.c, functionName: "lotTotal" },
                  { address: t, abi: y.c, functionName: "totalDemand" },
                  { address: t, abi: y.c, functionName: "finalized" },
                  { address: t, abi: y.c, functionName: "unitsSold" },
                  { address: t, abi: y.c, functionName: "pClear" },
                  { address: t, abi: y.c, functionName: "clearingStepPlusOne" },
                  { address: t, abi: y.c, functionName: "gross" },
                  { address: t, abi: y.c, functionName: "fee" },
                  { address: t, abi: y.c, functionName: "net" },
                ];
              }),
              n = await this.client.multicall({
                allowFailure: !1,
                contracts: t,
              });
            return e.map((e, t) => {
              let a = (e) => n[14 * t + e];
              return {
                series: e,
                round: Number(a(0)),
                pStart: (0, p.Uj)(a(1), 6),
                pFloor: (0, p.Uj)(a(2), 6),
                startsAt: Number(a(3)),
                endsAt: Number(a(4)),
                lotTotal: (0, p.Uj)(a(5), 18),
                totalDemand: (0, p.Uj)(a(6), 18),
                finalized: a(7),
                unitsSold: (0, p.Uj)(a(8), 18),
                pClear: (0, p.Uj)(a(9), 6),
                clearingStepPlusOne: Number(a(10)),
                gross: (0, p.Uj)(a(11), 6),
                fee: (0, p.Uj)(a(12), 6),
                net: (0, p.Uj)(a(13), 6),
              };
            });
          });
        }
        async auctions() {
          let [e, t] = await Promise.all([this.auctionRows(), this.feeds()]),
            n = T();
          return e.map((e) => {
            var a, s, r;
            let o = e.series,
              l = this.indicativeBasisOf(
                o,
                null !=
                  (s =
                    null == (a = t.get(o.ticker.tickerId)) ? void 0 : a.price)
                  ? s
                  : 0,
                n
              ),
              p =
                e.pStart > 0
                  ? { pStart: e.pStart, pFloor: e.pFloor }
                  : (0, d.rS)(
                      null != (r = null == l ? void 0 : l.price) ? r : o.p0,
                      o.startBps,
                      o.floorBps
                    ),
              u = e.clearingStepPlusOne > 0,
              c = u ? e.clearingStepPlusOne - 1 : void 0,
              m =
                0 === e.round
                  ? "unscheduled"
                  : n < e.startsAt
                  ? "scheduled"
                  : e.finalized
                  ? e.unitsSold > 0
                    ? "sold"
                    : "nosale"
                  : u || n >= e.endsAt
                  ? "crossed"
                  : "bidding",
              y = e.finalized
                ? e.pClear
                : void 0 !== c
                ? (0, d.Gg)(c, p.pStart, p.pFloor)
                : "crossed" === m
                ? (0, d.Gg)(i.nl.auctionSteps - 1, p.pStart, p.pFloor)
                : void 0,
              f = Math.min(
                i.nl.auctionSteps - 1,
                Math.max(
                  0,
                  Math.floor((n - e.startsAt) / i.nl.auctionStepSeconds)
                )
              ),
              h = [
                0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 239,
              ].map((t) => ({
                step: t,
                at: e.startsAt + t * i.nl.auctionStepSeconds,
                price: (0, d.Gg)(t, p.pStart, p.pFloor),
                demand: e.totalDemand,
                supply: e.lotTotal,
              }));
            return {
              seriesId: o.address,
              ticker: o.ticker.token.ticker,
              epoch: o.epoch,
              state: m,
              seriesState: o.state,
              indicativeBasis: l,
              round: e.round,
              pStart: p.pStart,
              pFloor: p.pFloor,
              currentPrice: (0, d.Gg)(f, p.pStart, p.pFloor),
              currentStep: f,
              stepSeconds: i.nl.auctionStepSeconds,
              steps: i.nl.auctionSteps,
              startsAt: e.startsAt,
              endsAt: e.endsAt,
              lotTotal: e.lotTotal,
              totalDemand: e.totalDemand,
              clearingPrice: y,
              clearingStep:
                null != c
                  ? c
                  : "crossed" === m
                  ? i.nl.auctionSteps - 1
                  : void 0,
              unitsSold: e.finalized ? e.unitsSold : void 0,
              gross: e.finalized ? e.gross : void 0,
              fee: e.finalized ? e.fee : void 0,
              net: e.finalized ? e.net : void 0,
              ladder: h,
              defaultReserveStep: i.nl.auctionSteps - 1,
            };
          });
        }
        async auction(e) {
          var t;
          return null !=
            (t = (await this.auctions()).find(
              (t) => t.ticker === e.toUpperCase()
            ))
            ? t
            : null;
        }
        async epochs() {
          let [e, t] = await Promise.all([this.seriesRows(), this.auctions()]),
            n = T();
          return e.map((e) => {
            var a, i, s, r;
            let o = t.find((t) => t.seriesId === e.address),
              d = e.windowEnd,
              p = this.daysLeft(e),
              u =
                !!o &&
                ("sold" === o.state ||
                  "nosale" === o.state ||
                  "crossed" === o.state),
              c = l({
                seriesState: e.state,
                auctionState: null == o ? void 0 : o.state,
                auctionStart: null == o ? void 0 : o.startsAt,
                windowStart: e.windowStart,
                now: n,
              }),
              m = null == o ? void 0 : o.indicativeBasis,
              y = "created" === e.state;
            return {
              ticker: e.ticker.token.ticker,
              number: e.epoch,
              daysLeft: p,
              openedAt: e.openedAt,
              settlesAt: d,
              phase: c,
              seriesState: e.state,
              indicativeBasis: m,
              settleDate: new Date(1e3 * e.settleDay)
                .toISOString()
                .slice(0, 10),
              auctionStartsAt:
                null != (a = null == o ? void 0 : o.startsAt) ? a : 0,
              auctionEndsAt:
                null != (i = null == o ? void 0 : o.endsAt) ? i : 0,
              settlementWindowStart: e.windowStart,
              settlementWindowEnd: e.windowEnd,
              milestones: [
                y && m
                  ? {
                      phase: "open",
                      label: "Open",
                      at: m.opensAt,
                      done: !1,
                      expected: !0,
                    }
                  : {
                      phase: "open",
                      label: "Open",
                      at: e.openedAt,
                      done: "created" !== e.state,
                    },
                y && m
                  ? {
                      phase: "auction",
                      label: "Auction",
                      at: m.auctionStartsAt,
                      done: !1,
                      expected: !0,
                    }
                  : {
                      phase: "auction",
                      label: "Auction",
                      at: null != (s = null == o ? void 0 : o.startsAt) ? s : 0,
                      done: u,
                    },
                y && m
                  ? {
                      phase: "trading",
                      label: "Trading",
                      at: m.auctionEndsAt,
                      done: !1,
                      expected: !0,
                    }
                  : {
                      phase: "trading",
                      label: "Trading",
                      at: null != (r = null == o ? void 0 : o.endsAt) ? r : 0,
                      done: !!o && "sold" === o.state,
                    },
                {
                  phase: "settlement",
                  label: "Settlement window",
                  at: e.windowStart,
                  done: "settled" === e.state,
                },
                {
                  phase: "settled",
                  label: "Settled",
                  at: d,
                  done: "settled" === e.state,
                },
              ],
            };
          });
        }
        async epoch(e) {
          var t;
          return null !=
            (t = (await this.epochs()).find(
              (t) => t.ticker === e.toUpperCase()
            ))
            ? t
            : null;
        }
        async positions(e) {
          if (!e) return [];
          let t = await this.seriesRows();
          if (0 === t.length) return [];
          let n = t.flatMap((t) => [
              {
                address: t.income,
                abi: f.x,
                functionName: "balanceOf",
                args: [e],
              },
              {
                address: t.upside,
                abi: f.x,
                functionName: "balanceOf",
                args: [e],
              },
              {
                address: t.address,
                abi: m.W,
                functionName: "entitlementOf",
                args: [e],
              },
              {
                address: t.auction,
                abi: y.c,
                functionName: "lotOf",
                args: [e],
              },
              {
                address: t.auction,
                abi: y.c,
                functionName: "soldOf",
                args: [e],
              },
            ]),
            a = await this.client.multicall({ allowFailure: !1, contracts: n });
          return t
            .map((e, t) => {
              let n = (0, p.Uj)(a[5 * t], 18),
                i = (0, p.Uj)(a[5 * t + 1], 18),
                s = a[5 * t + 2],
                r = (0, p.Uj)(a[5 * t + 3], 18),
                o = a[5 * t + 4];
              return {
                seriesId: e.address,
                ticker: e.ticker.token.ticker,
                epoch: e.epoch,
                capBps: e.capBps,
                oneUnits: n,
                convexUnits: i,
                subscribedUnits: r,
                oneEntitlementUnits: (0, p.Uj)(s[0], 18),
                convexEntitlementUnits: (0, p.Uj)(s[1], 18),
                mergeUnits: (0, p.Uj)(s[2], 18),
                proceedsUsdg: (0, p.Uj)(o[2], 6),
                claimable: "settled" === e.state && (n > 0 || i > 0),
                seriesState: e.state,
              };
            })
            .filter(
              (e) =>
                e.oneUnits > 0 || e.convexUnits > 0 || e.subscribedUnits > 0
            );
        }
        async listingCandidates() {
          let e = await this.tickers();
          return v.map((t) => {
            let n = e.find((e) => e.token.address === t.address),
              a = n
                ? n.enabled && n.nextEpoch > 0
                  ? "active"
                  : "registered"
                : t.feed
                ? "feed"
                : "live-token";
            return {
              ticker: t.ticker,
              name: t.name,
              token: t,
              poolDepthUsd: 0,
              volume24hUsd: 0,
              status: a,
              step:
                "active" === a
                  ? 5
                  : "registered" === a
                  ? 4
                  : "feed" === a
                  ? 2
                  : 1,
            };
          });
        }
        async protocolStats() {
          let [e, t, n] = await Promise.all([
            this.seriesRows(),
            this.tickers(),
            this.feeds(),
          ]);
          return {
            tvlUsd: e.reduce((e, t) => {
              var a, i;
              return (
                e +
                t.deposited *
                  (t.p0 > 0
                    ? t.p0
                    : null !=
                      (i =
                        null == (a = n.get(t.ticker.tickerId))
                          ? void 0
                          : a.price)
                    ? i
                    : 0)
              );
            }, 0),
            activeMarkets: e.filter((e) => "open" === e.state).length,
            candidates: v.length - t.length,
            epochsSettled: e.filter((e) => "settled" === e.state).length,
          };
        }
        constructor(e) {
          (this.mode = "live"),
            (this.memo = new Map()),
            (this.client = null != e ? e : (0, s.Rt)()),
            (this.factory = (0, r.h)());
        }
      }
    },
    64029: (e, t, n) => {
      n.d(t, { x: () => a });
      let a = [
        {
          type: "constructor",
          inputs: [
            { name: "name_", type: "string", internalType: "string" },
            { name: "symbol_", type: "string", internalType: "string" },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "DOMAIN_SEPARATOR",
          inputs: [],
          outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "allowance",
          inputs: [
            { name: "owner", type: "address", internalType: "address" },
            { name: "spender", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "approve",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
          ],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "burn",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "n", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "decimals",
          inputs: [],
          outputs: [{ name: "", type: "uint8", internalType: "uint8" }],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "eip712Domain",
          inputs: [],
          outputs: [
            { name: "fields", type: "bytes1", internalType: "bytes1" },
            { name: "name", type: "string", internalType: "string" },
            { name: "version", type: "string", internalType: "string" },
            { name: "chainId", type: "uint256", internalType: "uint256" },
            {
              name: "verifyingContract",
              type: "address",
              internalType: "address",
            },
            { name: "salt", type: "bytes32", internalType: "bytes32" },
            {
              name: "extensions",
              type: "uint256[]",
              internalType: "uint256[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "mint",
          inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "n", type: "uint256", internalType: "uint256" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "name",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "nonces",
          inputs: [{ name: "owner", type: "address", internalType: "address" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "permit",
          inputs: [
            { name: "owner", type: "address", internalType: "address" },
            { name: "spender", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
            { name: "deadline", type: "uint256", internalType: "uint256" },
            { name: "v", type: "uint8", internalType: "uint8" },
            { name: "r", type: "bytes32", internalType: "bytes32" },
            { name: "s", type: "bytes32", internalType: "bytes32" },
          ],
          outputs: [],
          stateMutability: "nonpayable",
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
          name: "symbol",
          inputs: [],
          outputs: [{ name: "", type: "string", internalType: "string" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "totalSupply",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "transfer",
          inputs: [
            { name: "to", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferFrom",
          inputs: [
            { name: "from", type: "address", internalType: "address" },
            { name: "to", type: "address", internalType: "address" },
            { name: "value", type: "uint256", internalType: "uint256" },
          ],
          outputs: [{ name: "", type: "bool", internalType: "bool" }],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Approval",
          inputs: [
            {
              name: "owner",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
            {
              name: "spender",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
            {
              name: "value",
              type: "uint256",
              indexed: !1,
              internalType: "uint256",
            },
          ],
          anonymous: !1,
        },
        {
          type: "event",
          name: "EIP712DomainChanged",
          inputs: [],
          anonymous: !1,
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            {
              name: "from",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: !0,
              internalType: "address",
            },
            {
              name: "value",
              type: "uint256",
              indexed: !1,
              internalType: "uint256",
            },
          ],
          anonymous: !1,
        },
        { type: "error", name: "ECDSAInvalidSignature", inputs: [] },
        {
          type: "error",
          name: "ECDSAInvalidSignatureLength",
          inputs: [
            { name: "length", type: "uint256", internalType: "uint256" },
          ],
        },
        {
          type: "error",
          name: "ECDSAInvalidSignatureS",
          inputs: [{ name: "s", type: "bytes32", internalType: "bytes32" }],
        },
        {
          type: "error",
          name: "ERC20InsufficientAllowance",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
            { name: "allowance", type: "uint256", internalType: "uint256" },
            { name: "needed", type: "uint256", internalType: "uint256" },
          ],
        },
        {
          type: "error",
          name: "ERC20InsufficientBalance",
          inputs: [
            { name: "sender", type: "address", internalType: "address" },
            { name: "balance", type: "uint256", internalType: "uint256" },
            { name: "needed", type: "uint256", internalType: "uint256" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidApprover",
          inputs: [
            { name: "approver", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidReceiver",
          inputs: [
            { name: "receiver", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidSender",
          inputs: [
            { name: "sender", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ERC20InvalidSpender",
          inputs: [
            { name: "spender", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "ERC2612ExpiredSignature",
          inputs: [
            { name: "deadline", type: "uint256", internalType: "uint256" },
          ],
        },
        {
          type: "error",
          name: "ERC2612InvalidSigner",
          inputs: [
            { name: "signer", type: "address", internalType: "address" },
            { name: "owner", type: "address", internalType: "address" },
          ],
        },
        {
          type: "error",
          name: "InvalidAccountNonce",
          inputs: [
            { name: "account", type: "address", internalType: "address" },
            { name: "currentNonce", type: "uint256", internalType: "uint256" },
          ],
        },
        { type: "error", name: "InvalidShortString", inputs: [] },
        { type: "error", name: "OnlySeries", inputs: [] },
        {
          type: "error",
          name: "StringTooLong",
          inputs: [{ name: "str", type: "string", internalType: "string" }],
        },
      ];
    },
  },
]);
