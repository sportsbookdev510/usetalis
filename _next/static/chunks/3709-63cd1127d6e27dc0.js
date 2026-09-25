"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3709],
  {
    13177: (e, t, n) => {
      n.d(t, {
        G2: () =>
          function e(t) {
            let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            if ("function" == typeof t) return t;
            switch (t) {
              case "usd":
                return n.axis
                  ? (e) =>
                      Math.abs(e) >= 1e4
                        ? "$".concat(r(e))
                        : (0, a.dR)(e, { decimals: 2 * !Number.isInteger(e) })
                  : (e) => (0, a.dR)(e);
              case "usd4":
                return n.axis
                  ? e("usd", n)
                  : (e) => (0, a.dR)(e, { decimals: 4 });
              case "pct":
                return (e) => (0, a.Oe)(e, { decimals: 2 * !n.axis });
              case "int":
                return (e) => (0, a.bu)(e, 0);
              case "compact":
                return (e) => r(e);
              default:
                return n.axis
                  ? (e) => (Math.abs(e) >= 1e4 ? r(e) : (0, a.bu)(e, 2))
                  : (e) => (0, a.bu)(e, 4);
            }
          },
        RC: () => o,
        Sp: () => s,
        nt: () => u,
        oE: () => r,
        p0: () => c,
      });
      var a = n(36811);
      function r(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        if (!Number.isFinite(e)) return "—";
        let n = Math.abs(e),
          r = e < 0 ? "−" : "";
        return n >= 1e9
          ? "".concat(r).concat(i((n / 1e9).toFixed(t)), "B")
          : n >= 1e6
          ? "".concat(r).concat(i((n / 1e6).toFixed(t)), "M")
          : n >= 1e4
          ? "".concat(r).concat(i((n / 1e3).toFixed(t)), "K")
          : "".concat(r).concat((0, a.bu)(n, 2 * (n < 10)));
      }
      function i(e) {
        return e.replace(/\.0+$/, "").replace(/(\.\d*?)0+$/, "$1");
      }
      let l = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      function o(e, t) {
        let n = new Date(1e3 * e),
          a = String(n.getUTCHours()).padStart(2, "0"),
          r = String(n.getUTCMinutes()).padStart(2, "0"),
          i = l[n.getUTCMonth()];
        switch (t) {
          case "minute":
          case "hour":
            return 0 === n.getUTCHours() && 0 === n.getUTCMinutes()
              ? "".concat(i, " ").concat(n.getUTCDate())
              : "".concat(a, ":").concat(r);
          case "day":
            return "".concat(i, " ").concat(n.getUTCDate());
          case "month":
            return 0 === n.getUTCMonth() ? String(n.getUTCFullYear()) : i;
          case "year":
            return String(n.getUTCFullYear());
        }
      }
      function s(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = new Date(1e3 * e),
          a = String(n.getUTCHours()).padStart(2, "0"),
          r = String(n.getUTCMinutes()).padStart(2, "0"),
          i = t.seconds
            ? ":".concat(String(n.getUTCSeconds()).padStart(2, "0"))
            : "";
        return ""
          .concat(l[n.getUTCMonth()], " ")
          .concat(n.getUTCDate(), ", ")
          .concat(n.getUTCFullYear(), " ")
          .concat(a, ":")
          .concat(r)
          .concat(i, " UTC");
      }
      function u(e) {
        let t = new Date(1e3 * e);
        return "".concat(l[t.getUTCMonth()], " ").concat(t.getUTCDate());
      }
      function c(e) {
        let t = Math.max(0, Math.round(e));
        return t < 60
          ? "".concat(t, "s")
          : t < 3600
          ? ""
              .concat(Math.floor(t / 60), "m ")
              .concat(String(t % 60).padStart(2, "0"), "s")
          : t < 86400
          ? ""
              .concat(Math.floor(t / 3600), "h ")
              .concat(String(Math.floor((t % 3600) / 60)).padStart(2, "0"), "m")
          : ""
              .concat(Math.floor(t / 86400), "d ")
              .concat(Math.floor((t % 86400) / 3600), "h");
      }
    },
    41474: (e, t, n) => {
      n.d(t, {
        B9: () => o,
        G3: () => c,
        MW: () => d,
        Q6: () => h,
        Yw: () => f,
      });
      var a = n(54096),
        r = n(19043),
        i = n(48299);
      let l = () => Math.floor(Date.now() / 1e3);
      async function o() {
        try {
          let e = await (0, r.Qo)();
          return {
            block: e.block,
            blockTime: e.timestamp,
            head: e.block,
            lagBlocks: 0,
            lagSeconds: Math.max(0, e.readAt - e.timestamp),
            stale: !1,
            updatedAt: e.readAt,
          };
        } catch (e) {
          return {
            block: 0,
            blockTime: null,
            head: null,
            lagBlocks: null,
            lagSeconds: 0,
            stale: !1,
            updatedAt: l(),
          };
        }
      }
      function s(e, t, n) {
        var a, r, o, s, u, c, d;
        return {
          address: (null != (r = e.address) ? r : e.id).toLowerCase(),
          ticker: e.ticker,
          tickerId:
            null !=
            (o =
              null == t || null == (a = t.registration) ? void 0 : a.tickerId)
              ? o
              : "",
          epoch: e.epoch,
          capBps: e.capBps,
          state: e.state,
          income: (null != (s = e.incomeToken) ? s : "").toLowerCase(),
          upside: (null != (u = e.upsideToken) ? u : "").toLowerCase(),
          auction: (null != (c = e.auction) ? c : "").toLowerCase(),
          incomeSymbol: e.incomeSymbol,
          upsideSymbol: e.upsideSymbol,
          openWindowDay: e.openWindowDay,
          settleDay: e.settleDay,
          effectiveSettleDay: null,
          feeBps: e.feeBps,
          startBps: e.startBps,
          floorBps: e.floorBps,
          maxUnits: (0, i.ux)(e.maxUnits, i.QN.units),
          maxUnitsPerTx: (0, i.ux)(e.maxUnitsPerTx, i.QN.units),
          p0: e.p0 > 0 ? (0, i.ux)(e.p0, i.QN.usd8) : null,
          k: e.p0 > 0 ? (0, i.ux)(e.capPrice, i.QN.usd8) : null,
          settlePrice:
            void 0 !== e.settlementPrice
              ? (0, i.ux)(e.settlementPrice, i.QN.usd8)
              : "0",
          incomeSupply: (0, i.ux)(e.depositedUnits, i.QN.units),
          upsideSupply: null,
          vaultBalance: null,
          openedAt:
            null != (d = null == t ? void 0 : t.epoch.openedAt) ? d : null,
          settledAt: null,
          createdAt: 0,
          createdBlock: 0,
          auctionSummary: (function (e, t) {
            var n, a;
            if (!e) return null;
            let r = "sold" === e.state || "nosale" === e.state,
              o = void 0 !== e.clearingStep;
            return {
              round: e.round,
              phase: e.state,
              start: e.startsAt,
              end: e.endsAt,
              pStart: (0, i.ux)(e.pStart, i.QN.usdg),
              pFloor: (0, i.ux)(e.pFloor, i.QN.usdg),
              lotTotal: (0, i.ux)(e.lotTotal, i.QN.units),
              totalDemand: (0, i.ux)(e.totalDemand, i.QN.units),
              clearingStep: null != (n = e.clearingStep) ? n : null,
              clearingPrice:
                void 0 !== e.clearingPrice
                  ? (0, i.ux)(e.clearingPrice, i.QN.usdg)
                  : null,
              finalized: r,
              unitsSold:
                r && void 0 !== e.unitsSold
                  ? (0, i.ux)(e.unitsSold, i.QN.units)
                  : null,
              pClear:
                r && void 0 !== e.clearingPrice
                  ? (0, i.ux)(e.clearingPrice, i.QN.usdg)
                  : null,
              supplyAtClear: null,
              gross: void 0 !== e.gross ? (0, i.ux)(e.gross, i.QN.usdg) : null,
              fee: void 0 !== e.fee ? (0, i.ux)(e.fee, i.QN.usdg) : null,
              net: void 0 !== e.net ? (0, i.ux)(e.net, i.QN.usdg) : null,
              bidCount: 0,
              canAddLot:
                ((a = l()),
                ("created" === t.state || "open" === t.state) &&
                  ("unscheduled" === e.state ||
                    "nosale" === e.state ||
                    ("scheduled" === e.state && a < e.startsAt))),
              canReschedule: !1,
              current: {
                step: e.currentStep,
                price: (0, i.ux)(e.currentPrice, i.QN.usdg),
                crossed: o,
              },
            };
          })(n, e),
          refreshedAt: l(),
        };
      }
      async function u() {
        let e = await (0, a.U)(),
          [t, n, r] = await Promise.all([
            e.allSeries(),
            e.markets(),
            e.auctions(),
          ]);
        return { series: t, markets: n, auctions: r };
      }
      async function c() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { series: t, markets: n, auctions: a } = await u();
        return {
          items: t
            .filter(
              (t) =>
                (!e.ticker || t.ticker === e.ticker.toUpperCase()) &&
                (!e.state || t.state === e.state)
            )
            .map((e) =>
              s(
                e,
                n.find((t) => t.ticker === e.ticker),
                a.find((t) => t.seriesId === e.id)
              )
            ),
          nextOffset: null,
        };
      }
      async function d(e) {
        let { series: t, markets: n, auctions: a } = await u(),
          r = t.find((t) => {
            var n;
            return (
              (null != (n = t.address) ? n : t.id).toLowerCase() ===
              e.toLowerCase()
            );
          });
        if (!r) throw Error("unknown series");
        let i = s(
          r,
          n.find((e) => e.ticker === r.ticker),
          a.find((e) => e.seriesId === r.id)
        );
        return {
          ...i,
          snapshot: null,
          schedule: {
            openWindowDay: r.openWindowDay,
            settleDay: r.settleDay,
            effectiveSettleDay: null,
            windowStart: null,
            windowEnd: null,
            openedAt: i.openedAt,
            settledAt: null,
          },
          auction: i.auctionSummary,
          tokens: {
            income: r.incomeToken
              ? {
                  address: r.incomeToken.toLowerCase(),
                  side: 0,
                  symbol: r.incomeSymbol,
                }
              : null,
            upside: r.upsideToken
              ? {
                  address: r.upsideToken.toLowerCase(),
                  side: 1,
                  symbol: r.upsideSymbol,
                }
              : null,
          },
          counts: {},
        };
      }
      async function f() {
        let e = await (0, a.U)();
        return (await e.markets())
          .filter((e) => e.registration)
          .map((e) => {
            var t, n, a;
            let r = e.registration,
              l = null == (t = e.rounds) ? void 0 : t[0];
            return {
              tickerId: r.tickerId,
              label: r.label,
              stock: r.stock.toLowerCase(),
              uid: "",
              registry: r.registry.toLowerCase(),
              feed: r.feed.toLowerCase(),
              pool: r.pool.toLowerCase(),
              firstOpenDay: r.firstOpenDay,
              firstSettleMonth: r.firstSettleMonth,
              enabled: r.enabled,
              capBps: r.capBps,
              capUsd8: (0, i.ux)(r.capUsd, i.QN.usd8),
              perTxUsd8: (0, i.ux)(r.perTxUsd, i.QN.usd8),
              feeBps: r.feeBps,
              startBps: r.startBps,
              floorBps: r.floorBps,
              nextEpoch: r.nextEpoch,
              registeredBlock: 0,
              registeredAt: 0,
              updatedBlock: 0,
              latest: l
                ? {
                    roundId: l.roundId,
                    answer: (0, i.ux)(l.answer, i.QN.usd8),
                    updatedAt: l.updatedAt,
                  }
                : null,
              seriesCount: r.nextEpoch,
              liveSeries:
                ("active" === e.status || "created" === e.status) && e.seriesId
                  ? e.seriesId.toLowerCase()
                  : null,
              latestSeries:
                null !=
                (a = null == (n = e.seriesId) ? void 0 : n.toLowerCase())
                  ? a
                  : null,
            };
          });
      }
      async function h(e) {
        var t, n, r, o, s, u, c, d, f, h, p, g, v, m, w, b, k;
        let y =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          x = await (0, a.U)(),
          C = await x.market(e),
          P = null != (c = y.to) ? c : l(),
          T = null != (d = y.from) ? d : P - 604800,
          N = [...(null != (f = null == C ? void 0 : C.rounds) ? f : [])].sort(
            (e, t) => e.updatedAt - t.updatedAt
          ),
          S = N.filter((e) => e.updatedAt >= T && e.updatedAt <= P).map(
            (e) => ({
              roundId: e.roundId,
              phase: 0,
              aggRound: 0,
              answer: (0, i.ux)(e.answer, i.QN.usd8),
              startedAt: e.updatedAt,
              updatedAt: e.updatedAt,
              suspect: e.answer <= 0 || e.answer < 1 || e.answer > 1e5,
            })
          );
        return {
          ticker: null != (h = null == C ? void 0 : C.ticker) ? h : null,
          tickerId:
            null !=
            (p =
              null == C || null == (t = C.registration) ? void 0 : t.tickerId)
              ? p
              : null,
          feed: (null !=
          (v =
            null !=
            (g = null == C || null == (n = C.registration) ? void 0 : n.feed)
              ? g
              : null == C
              ? void 0
              : C.token.feed)
            ? v
            : ""
          ).toLowerCase(),
          decimals: 8,
          from: T,
          to: P,
          rounds: S,
          coverage: {
            oldestUpdatedAt:
              null != (m = null == (r = N[0]) ? void 0 : r.updatedAt)
                ? m
                : null,
            newestUpdatedAt:
              null != (w = null == (o = N[N.length - 1]) ? void 0 : o.updatedAt)
                ? w
                : null,
            rounds: N.length,
            backfillDone: !1,
            holes: [],
            newestRoundId:
              null != (b = null == (s = N[N.length - 1]) ? void 0 : s.roundId)
                ? b
                : null,
            oldestRoundId:
              null != (k = null == (u = N[0]) ? void 0 : u.roundId) ? k : null,
          },
        };
      }
    },
    48299: (e, t, n) => {
      n.d(t, {
        GT: () => f,
        Gy: () => x,
        MD: () => C,
        M_: () => i,
        NP: () => b,
        QN: () => r,
        WC: () => o,
        Wl: () => h,
        XC: () => v,
        _j: () => w,
        _y: () => p,
        le: () => d,
        nj: () => m,
        ux: () => P,
        yZ: () => g,
        zf: () => y,
      });
      var a = n(29142);
      let r = { usdg: 6, units: 18, usd8: 8 };
      class i extends Error {
        get fallbackable() {
          var e;
          return (
            "unconfigured" === this.kind ||
            "unreachable" === this.kind ||
            ("http" === this.kind && (null != (e = this.status) ? e : 0) >= 500)
          );
        }
        constructor(e, t, n, a) {
          super(t),
            (this.kind = e),
            (this.status = n),
            (this.code = a),
            (this.name = "IndexerError");
        }
      }
      let l = 0;
      function o() {
        return !!a.OB;
      }
      function s() {
        l = Date.now() + 45e3;
      }
      function u(e) {
        let t = Object.entries(e)
          .filter((e) => void 0 !== e[1] && "" !== e[1])
          .map((e) => {
            let [t, n] = e;
            return ""
              .concat(encodeURIComponent(t), "=")
              .concat(encodeURIComponent(String(n)));
          })
          .join("&");
        return t ? "?".concat(t) : "";
      }
      async function c(e) {
        var t, n, r, u, c;
        let d =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!a.OB)
          throw new i("unconfigured", "NEXT_PUBLIC_INDEXER_URL is not set");
        if (!(o() && Date.now() >= l))
          throw new i("unreachable", "indexer unreachable (circuit open)");
        let f = new AbortController(),
          h = setTimeout(() => f.abort(), null != (n = d.timeoutMs) ? n : 12e3),
          p = () => f.abort();
        null == (t = d.signal) || t.addEventListener("abort", p);
        try {
          let t;
          try {
            t = await fetch("".concat(a.OB).concat(e), {
              signal: f.signal,
              headers: { accept: "application/json" },
            });
          } catch (e) {
            if (null == (r = d.signal) ? void 0 : r.aborted) throw e;
            throw (
              (s(),
              new i(
                "unreachable",
                e instanceof Error ? e.message : "network error"
              ))
            );
          }
          if (t.status >= 500)
            throw (
              (s(),
              new i("http", "indexer answered ".concat(t.status), t.status))
            );
          let n = await t.json().catch(() => null);
          if (!t.ok || !n || !("asOf" in n)) {
            let e = n && "error" in n ? n.error : void 0;
            throw new i(
              t.ok ? "api" : "http",
              null != (u = null == e ? void 0 : e.message)
                ? u
                : "indexer answered ".concat(t.status),
              t.status,
              null == e ? void 0 : e.code
            );
          }
          return n;
        } finally {
          clearTimeout(h),
            null == (c = d.signal) || c.removeEventListener("abort", p);
        }
      }
      async function d() {
        var e, t, n;
        let r =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (!a.OB)
          throw new i("unconfigured", "NEXT_PUBLIC_INDEXER_URL is not set");
        let l = new AbortController(),
          o = setTimeout(() => l.abort(), 12e3),
          u = () => l.abort();
        null == (e = r.signal) || e.addEventListener("abort", u);
        try {
          let e;
          try {
            e = await fetch("".concat(a.OB, "/health"), {
              signal: l.signal,
              headers: { accept: "application/json" },
            });
          } catch (e) {
            if (null == (t = r.signal) ? void 0 : t.aborted) throw e;
            throw (
              (s(),
              new i(
                "unreachable",
                e instanceof Error ? e.message : "network error"
              ))
            );
          }
          let n = await e.json().catch(() => null);
          if (!n || "boolean" != typeof n.ok)
            throw (
              (e.status >= 500 && 503 !== e.status && s(),
              new i(
                "http",
                "indexer /health answered ".concat(e.status),
                e.status
              ))
            );
          return n;
        } finally {
          clearTimeout(o),
            null == (n = r.signal) || n.removeEventListener("abort", u);
        }
      }
      let f = (e) => c("/stats", e),
        h = (e) => c("/tickers", e),
        p = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return c("/series".concat(u(e)), t);
        },
        g = (e, t) => c("/series/".concat(e.toLowerCase()), t),
        v = function (e) {
          var t;
          let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            a = arguments.length > 2 ? arguments[2] : void 0;
          return c(
            "/series/"
              .concat(e.toLowerCase(), "/activity")
              .concat(
                u({
                  cursor: n.cursor,
                  limit: n.limit,
                  kinds: null == (t = n.kinds) ? void 0 : t.join(","),
                })
              ),
            a
          );
        },
        m = (e, t) => c("/series/".concat(e.toLowerCase(), "/auction"), t),
        w = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
          return c(
            "/feeds/".concat(encodeURIComponent(e), "/rounds").concat(u(t)),
            n
          );
        },
        b = function (e) {
          var t;
          let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            a = arguments.length > 2 ? arguments[2] : void 0;
          return c(
            "/accounts/"
              .concat(e.toLowerCase(), "/activity")
              .concat(
                u({
                  cursor: n.cursor,
                  limit: n.limit,
                  kinds: null == (t = n.kinds) ? void 0 : t.join(","),
                })
              ),
            a
          );
        };
      function k(e, t) {
        let n;
        if (!e) return 0;
        try {
          n = BigInt(e);
        } catch (e) {
          return 0;
        }
        let a = n < 0n;
        a && (n = -n);
        let r = 10n ** BigInt(t),
          i = Number(n / r) + Number(n % r) / Number(r);
        return a ? -i : i;
      }
      let y = (e) => k(e, r.usd8),
        x = (e) => k(e, r.usdg),
        C = (e) => k(e, r.units);
      function P(e, t) {
        if (!Number.isFinite(e)) return "0";
        let [n = "0", a = ""] = Math.abs(e).toFixed(t).split("."),
          r = (
            BigInt(n) * 10n ** BigInt(t) +
            BigInt(a.padEnd(t, "0") || "0")
          ).toString();
        return e < 0 ? "-".concat(r) : r;
      }
    },
    68757: (e, t, n) => {
      n.d(t, {
        iv: () => N,
        Qx: () => x,
        B0: () => C,
        FU: () => m,
        oA: () => y,
        MS: () => k,
        qn: () => w,
        Uw: () => b,
        Gq: () => T,
      });
      var a = n(90756),
        r = n(82925),
        i = n(78940),
        l = n(70964),
        o = class extends l.$ {
          constructor(e, t) {
            super(e, t);
          }
          bindMethods() {
            super.bindMethods(),
              (this.fetchNextPage = this.fetchNextPage.bind(this)),
              (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
          }
          setOptions(e) {
            (e._type = "infinite"), super.setOptions(e);
          }
          getOptimisticResult(e) {
            return (e._type = "infinite"), super.getOptimisticResult(e);
          }
          fetchNextPage(e) {
            return this.fetch({
              ...e,
              meta: { fetchMore: { direction: "forward" } },
            });
          }
          fetchPreviousPage(e) {
            return this.fetch({
              ...e,
              meta: { fetchMore: { direction: "backward" } },
            });
          }
          createResult(e, t) {
            let { state: n } = e,
              a = super.createResult(e, t),
              {
                isFetching: r,
                isRefetching: l,
                isError: o,
                isRefetchError: s,
              } = a,
              u = n.fetchMeta?.fetchMore?.direction,
              c = o && "forward" === u,
              d = r && "forward" === u,
              f = o && "backward" === u,
              h = r && "backward" === u;
            return {
              ...a,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: (0, i.rB)(t, n.data),
              hasPreviousPage: (0, i.RQ)(t, n.data),
              isFetchNextPageError: c,
              isFetchingNextPage: d,
              isFetchPreviousPageError: f,
              isFetchingPreviousPage: h,
              isRefetchError: s && !c && !f,
              isRefetching: l && !d && !h,
            };
          }
        },
        s = n(32916),
        u = n(29142),
        c = n(36901),
        d = n(48299),
        f = n(41474);
      let h = {
          health: 15e3,
          stats: 3e4,
          tickers: 3e4,
          series: 1e4,
          activity: 15e3,
          auction: 5e3,
          feeds: 6e4,
        },
        p = {
          health: () => ["indexer", "health"],
          stats: () => ["indexer", "stats"],
          tickers: () => ["indexer", "tickers"],
          seriesList: (e) => ["indexer", "series", e],
          series: (e) => ["indexer", "series", e.toLowerCase()],
          activity: (e, t) => [
            "indexer",
            "series",
            e.toLowerCase(),
            "activity",
            null != t ? t : "",
          ],
          auction: (e) => ["indexer", "series", e.toLowerCase(), "auction"],
          feed: (e, t) => ["indexer", "feed", e.toUpperCase(), t],
          accountActivity: (e, t) => [
            "indexer",
            "account",
            e.toLowerCase(),
            "activity",
            null != t ? t : "",
          ],
        };
      async function g(e, t, n) {
        try {
          let t = await e({ signal: n });
          return { data: t.data, asOf: t.asOf, source: "indexer" };
        } catch (e) {
          if (e instanceof d.M_ && e.fallbackable && t && u.KO)
            return {
              data: await t(),
              asOf: await (0, f.B9)(),
              source: "chain",
            };
          throw e;
        }
      }
      function v(e, t) {
        var n, r;
        let i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          l = (0, c.qK)(),
          o = (0, d.WC)() || (!!i.fallback && u.KO);
        return (function (e, t) {
          var n, a, r, i, l;
          let o = e.error instanceof Error ? e.error : null;
          return {
            data: null == (n = e.data) ? void 0 : n.data,
            asOf: null == (a = e.data) ? void 0 : a.asOf,
            source: null == (r = e.data) ? void 0 : r.source,
            stale:
              null != (l = null == (i = e.data) ? void 0 : i.asOf.stale) && l,
            unavailable:
              !t || (e.isError && o instanceof d.M_ && o.fallbackable),
            isPending: e.isPending,
            isFetching: e.isFetching,
            isError: e.isError,
            error: o,
            refetch: () => void e.refetch(),
          };
        })(
          (0, a.I)({
            queryKey: e,
            queryFn: (e) => {
              let { signal: n } = e;
              return g(t, i.fallback, n);
            },
            enabled: l && (null == (n = i.enabled) || n) && o,
            staleTime: null != (r = i.staleTime) ? r : h.series,
            refetchInterval: i.refetchInterval,
            retry: (e, t) => !(t instanceof d.M_ && t.fallbackable) && e < 1,
          }),
          o
        );
      }
      function m() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = (0, c.qK)();
        return (0, a.I)({
          queryKey: p.health(),
          queryFn: (e) => {
            let { signal: t } = e;
            return (0, d.le)({ signal: t });
          },
          enabled: n && (0, d.WC)(),
          staleTime: h.health,
          refetchInterval: null != (e = t.refetchInterval) ? e : 3e4,
          retry: 0,
        });
      }
      function w() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return v(p.stats(), d.GT, {
          staleTime: h.stats,
          refetchInterval: e.refetchInterval,
        });
      }
      function b() {
        return v(p.tickers(), d.Wl, { fallback: f.Yw, staleTime: h.tickers });
      }
      function k() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return v(p.seriesList(e), (t) => (0, d._y)(e, t), {
          fallback: () => (0, f.G3)(e),
          staleTime: h.series,
        });
      }
      function y(e) {
        return v(p.series(null != e ? e : "0x"), (t) => (0, d.yZ)(e, t), {
          fallback: () => (0, f.MW)(e),
          staleTime: h.series,
          enabled: !!e,
        });
      }
      function x(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return v(p.auction(null != e ? e : "0x"), (t) => (0, d.nj)(e, t), {
          staleTime: h.auction,
          refetchInterval: t.refetchInterval,
          enabled: !!e,
        });
      }
      function C(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return v(p.feed(null != e ? e : "", t), (n) => (0, d._j)(e, t, n), {
          fallback: () => (0, f.Q6)(e, t),
          staleTime: h.feeds,
          enabled: !!e,
        });
      }
      function P(e) {
        var t, n, a, r;
        let i = e.error instanceof Error ? e.error : null,
          l = null == (t = e.data) ? void 0 : t.pages[0];
        return {
          items:
            null !=
            (a =
              null == (n = e.data)
                ? void 0
                : n.pages.flatMap((e) => e.data.items))
              ? a
              : [],
          asOf: null == l ? void 0 : l.asOf,
          source: l ? "indexer" : void 0,
          stale: null != (r = null == l ? void 0 : l.asOf.stale) && r,
          unavailable:
            !(0, d.WC)() || (e.isError && i instanceof d.M_ && i.fallbackable),
          isPending: e.isPending,
          isFetching: e.isFetching,
          isError: e.isError,
          error: i,
          hasNextPage: e.hasNextPage,
          fetchNextPage: () => void e.fetchNextPage(),
          isFetchingNextPage: e.isFetchingNextPage,
          refetch: () => void e.refetch(),
        };
      }
      function T(e) {
        var t, n;
        let a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = (0, c.qK)(),
          l = null == (t = a.kinds) ? void 0 : t.join(",");
        return P(
          ((n = {
            queryKey: p.activity(null != e ? e : "0x", l),
            queryFn: (t) => {
              let { pageParam: n, signal: r } = t;
              return (0, d.XC)(
                e,
                { cursor: n || void 0, limit: a.limit, kinds: a.kinds },
                { signal: r }
              );
            },
            initialPageParam: "",
            getNextPageParam: (e) => {
              var t;
              return null != (t = e.data.nextCursor) ? t : void 0;
            },
            enabled: i && (0, d.WC)() && !!e,
            staleTime: h.activity,
            retry: 0,
          }),
          (0, r.t)(n, o, void 0))
        );
      }
      function N(e) {
        var t, n;
        let a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = (0, c.qK)(),
          { address: l } = (0, s.F)(),
          u = null != e ? e : l,
          f = null == (t = a.kinds) ? void 0 : t.join(",");
        return P(
          ((n = {
            queryKey: p.accountActivity(null != u ? u : "0x", f),
            queryFn: (e) => {
              let { pageParam: t, signal: n } = e;
              return (0, d.NP)(
                u,
                { cursor: t || void 0, limit: a.limit, kinds: a.kinds },
                { signal: n }
              );
            },
            initialPageParam: "",
            getNextPageParam: (e) => {
              var t;
              return null != (t = e.data.nextCursor) ? t : void 0;
            },
            enabled: i && (0, d.WC)() && !!u,
            staleTime: h.activity,
            retry: 0,
          }),
          (0, r.t)(n, o, void 0))
        );
      }
    },
  },
]);
